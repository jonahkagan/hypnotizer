(defproject hypnotizer "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2311"]
                 [org.clojure/core.async "0.1.278.0-76b25b-alpha"]
                 [om "0.7.3"]]

  :plugins [[lein-cljsbuild "1.0.3"]]

  :source-paths ["src"]

  :cljsbuild { 
    :builds [{:id "hypnotizer"
              :source-paths ["src"]
              :compiler {
                :output-to "hypnotizer.js"
                :output-dir "out"
                :optimizations :none
                :source-map true}}]})
