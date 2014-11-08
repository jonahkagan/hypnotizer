(ns om-svg-tests.core
  (:require [clojure.string :as string :refer [join]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [goog.events :as events])
  (:import [goog.events EventType]))

(enable-console-print!)

(def app-state (atom {:radius 100}))

(defn path-string [points]
  (let [[pt1 & pts] points
        start-str (str "M " (pt1 :x) " " (pt1 :y))
        pt-strs (for [pt pts] (str "L " (pt :x) " " (pt :y)))]
        (string/join " " (conj pt-strs start-str))))

(defn circle-view [{:keys [center radius]} owner]
  (reify om/IRender
    (render [this]
      (println center radius)
      (let [{cx :x cy :y} center
            step (/ (* 2 js/Math.PI) 100)
            pts (for [t (range 0 (* 2 js/Math.PI) step)]
                    {:x (+ cx (* radius (js/Math.cos t)))
                     :y (+ cy (* radius (js/Math.sin t)))})]
        (println pts)
        (dom/g nil
               (dom/path 
                 #js {:d (path-string pts)
                      :fill "none"
                      :stroke "black"
                      :strokeWidth 4}))))))


(defn pattern-view [app owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (js/setInterval
        (fn [] (om/transact! app :radius inc))
        16))
    om/IRender
    (render [this]
      (dom/svg #js {:width "100%" :height "100%"}
               (om/build circle-view {:center {:x 200 :y 200}
                                      :radius (mod (:radius app) 100)})))))

(om/root
  pattern-view
  app-state
  {:target (. js/document (getElementById "app"))})
