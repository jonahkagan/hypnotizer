(ns om-svg-tests.core
  (:require [clojure.string :as string :refer [join]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [goog.events :as events])
  (:import [goog.events EventType]))

(enable-console-print!)

(def TAU (* 2 js/Math.PI))

(def hypotrochoid-params
  {:scale {:min 0 :max 15 :step 0.5}
   :steps {:min 10 :max 2000 :step 1}
   :thickness {:min 1 :max 10 :step 1}
   :big-radius {:min 0 :max 100 :step 1}
   :small-radius {:min 0 :max 10 :step 0.05}
   :distance {:min 0 :max 100 :step 1}})

(def app-state (atom {:scale 4
                      :steps 970
                      :thickness 1
                      :big-radius 50
                      :small-radius 0.25
                      :distance 33}))

(defn path-string [points]
  (let [[pt1 & pts] points
        start-str (str "M " (pt1 :x) " " (pt1 :y))
        pt-strs (for [pt pts] (str "L " (pt :x) " " (pt :y)))]
        (string/join " " (conj pt-strs start-str))))

(defn circle-pt [{:keys [center radius]} t]
  {:x (+ (center :x) (* radius (js/Math.cos t)))
   :y (+ (center :y) (* radius (js/Math.sin t)))})

(defn hypotrochoid-pt [{:keys [big-radius small-radius distance]} t]
  (let [radius-diff (- big-radius small-radius)
        radius-ratio (/ radius-diff small-radius)]
  {:x (+ (* radius-diff (js/Math.cos t))
         (* distance (js/Math.cos (* radius-ratio t))))
   :y (- (* radius-diff (js/Math.sin t))
         (* distance (js/Math.sin (* radius-ratio t))))}))

(defn scale-pt [{:keys [x y]} scale]
  {:x (* x scale)
   :y (* y scale)})

(defn move-pt [{:keys [x y]} dx dy]
  {:x (+ x dx)
   :y (+ y dy)})

(defn gcd [a b]
  (if (zero? b)
    a
    (gcd b (mod a b))))

; http://math.stackexchange.com/questions/257895/calculate-the-period-of-an-hypotrochoid
(defn hypotrochoid-period [{:keys [big-radius small-radius]}]
  (let [d (- big-radius small-radius)
        n small-radius]
    (/ n (gcd n d))))

(defn curve-view [params owner]
  (reify om/IRender
    (render [this]
      (let [period (hypotrochoid-period params)
            total-radians (* TAU period)
            step (/ total-radians (params :steps))
            pts (for [t (range 0 total-radians step)]
                        (-> (hypotrochoid-pt params t)
                          (scale-pt (params :scale))
                          (move-pt 500 500)))]
        (println params period step)
        (dom/g nil
               (dom/path 
                 #js {:d (path-string pts)
                      :fill "none"
                      :stroke "black"
                      :strokeWidth (params :thickness)}))))))

(defn slider-view [params owner {:keys [label min max]}]
  (reify
    om/IInitState
    (init-state [_]
      {:animating 0})
    om/IWillUpdate
    (will-update [this _ prev-state]
      (println "prev state" prev-state)
      (when (not (zero? (prev-state :animating)))
        (js/setTimeout (fn []
                         (println "timeout")
                         (let [{:keys [max min step]} (hypotrochoid-params label)]
                           (om/transact! params label
                            (fn [val]
                             (cond
                               (= val min) (om/set-state! owner :animating -1)
                               (= val max) (om/set-state! owner :animating 1))
                             (+ val (* (prev-state :animating) step)))
                                         )))
                       80)))
    om/IRenderState
    (render-state [this {:keys [animating]}]
      (let [value (params label)]
        (println label value min max)
        (dom/div nil
         (dom/span nil (name label))
         (dom/input
           #js {:style #js {:width "500"}
                :type "range"
                :min (get-in hypotrochoid-params [label :min])
                :max (get-in hypotrochoid-params [label :max])
                :step (get-in hypotrochoid-params [label :step])
                :value value
                :onChange
                (fn [e]
                  (println "change" (.. e -target -value))
                  (om/update! params label (js/parseFloat (.. e -target -value) )))})
         (dom/span nil value)
         (dom/button #js {:onClick #(om/set-state! owner :animating
                                                   (if (zero? animating) 1 0))}
                     (if (zero? animating) "Animate" "Stop animating")))))))

(defn pattern-view [app owner]
  (reify
    ;om/IWillMount
    ;(will-mount [_]
    ;  (js/setInterval
    ;    (fn [] (om/transact! app :steps inc))
    ;    75))
    om/IRender
    (render [this]
      (dom/div nil
        (apply dom/div nil
          (for [[k v] app]
            (om/build slider-view app {:opts {:label k}})))
        (dom/svg #js {:width "100%" :height "100%"}
                 (om/build curve-view app))))))

(om/root
  pattern-view
  app-state
  {:target (. js/document (getElementById "app"))})
