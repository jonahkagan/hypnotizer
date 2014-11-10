// Compiled by ClojureScript 0.0-2311
goog.provide('hypnotizer.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.events.EventType');
goog.require('goog.events');
goog.require('goog.events');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('clojure.string');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
hypnotizer.core.TAU = ((2) * Math.PI);
hypnotizer.core.hypotrochoid_params = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(20)], null),new cljs.core.Keyword(null,"steps","steps",-128433302),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),(10),new cljs.core.Keyword(null,"max","max",61366548),(2000)], null),new cljs.core.Keyword(null,"thickness","thickness",-940175454),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),0.1,new cljs.core.Keyword(null,"max","max",61366548),(5)], null),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(1)], null),new cljs.core.Keyword(null,"big-radius","big-radius",2064382730),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(100)], null),new cljs.core.Keyword(null,"small-radius","small-radius",-785177842),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(10)], null),new cljs.core.Keyword(null,"distance","distance",-1671893894),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(100)], null)], null);
hypnotizer.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"scale","scale",-230427353),(4),new cljs.core.Keyword(null,"steps","steps",-128433302),(970),new cljs.core.Keyword(null,"thickness","thickness",-940175454),(1),new cljs.core.Keyword(null,"opacity","opacity",397153780),0.5,new cljs.core.Keyword(null,"big-radius","big-radius",2064382730),(48),new cljs.core.Keyword(null,"small-radius","small-radius",-785177842),0.25,new cljs.core.Keyword(null,"distance","distance",-1671893894),(33)], null));
hypnotizer.core.path_string = (function path_string(points){var vec__5804 = points;var pt1 = cljs.core.nth.call(null,vec__5804,(0),null);var pts = cljs.core.nthnext.call(null,vec__5804,(1));var start_str = ("M "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pt1.call(null,new cljs.core.Keyword(null,"x","x",2099068185)))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pt1.call(null,new cljs.core.Keyword(null,"y","y",-1757859776))));var pt_strs = (function (){var iter__4278__auto__ = ((function (vec__5804,pt1,pts,start_str){
return (function iter__5805(s__5806){return (new cljs.core.LazySeq(null,((function (vec__5804,pt1,pts,start_str){
return (function (){var s__5806__$1 = s__5806;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5806__$1);if(temp__4126__auto__)
{var s__5806__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5806__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__5806__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__5808 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__5807 = (0);while(true){
if((i__5807 < size__4277__auto__))
{var pt = cljs.core._nth.call(null,c__4276__auto__,i__5807);cljs.core.chunk_append.call(null,b__5808,("L "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pt.call(null,new cljs.core.Keyword(null,"x","x",2099068185)))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pt.call(null,new cljs.core.Keyword(null,"y","y",-1757859776)))));
{
var G__5809 = (i__5807 + (1));
i__5807 = G__5809;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5808),iter__5805.call(null,cljs.core.chunk_rest.call(null,s__5806__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5808),null);
}
} else
{var pt = cljs.core.first.call(null,s__5806__$2);return cljs.core.cons.call(null,("L "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pt.call(null,new cljs.core.Keyword(null,"x","x",2099068185)))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pt.call(null,new cljs.core.Keyword(null,"y","y",-1757859776)))),iter__5805.call(null,cljs.core.rest.call(null,s__5806__$2)));
}
} else
{return null;
}
break;
}
});})(vec__5804,pt1,pts,start_str))
,null,null));
});})(vec__5804,pt1,pts,start_str))
;return iter__4278__auto__.call(null,pts);
})();return clojure.string.join.call(null," ",cljs.core.conj.call(null,pt_strs,start_str));
});
hypnotizer.core.circle_pt = (function circle_pt(p__5810,t){var map__5812 = p__5810;var map__5812__$1 = ((cljs.core.seq_QMARK_.call(null,map__5812))?cljs.core.apply.call(null,cljs.core.hash_map,map__5812):map__5812);var radius = cljs.core.get.call(null,map__5812__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));var center = cljs.core.get.call(null,map__5812__$1,new cljs.core.Keyword(null,"center","center",-748944368));return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(center.call(null,new cljs.core.Keyword(null,"x","x",2099068185)) + (radius * Math.cos(t))),new cljs.core.Keyword(null,"y","y",-1757859776),(center.call(null,new cljs.core.Keyword(null,"y","y",-1757859776)) + (radius * Math.sin(t)))], null);
});
hypnotizer.core.hypotrochoid_pt = (function hypotrochoid_pt(p__5813,t){var map__5815 = p__5813;var map__5815__$1 = ((cljs.core.seq_QMARK_.call(null,map__5815))?cljs.core.apply.call(null,cljs.core.hash_map,map__5815):map__5815);var distance = cljs.core.get.call(null,map__5815__$1,new cljs.core.Keyword(null,"distance","distance",-1671893894));var small_radius = cljs.core.get.call(null,map__5815__$1,new cljs.core.Keyword(null,"small-radius","small-radius",-785177842));var big_radius = cljs.core.get.call(null,map__5815__$1,new cljs.core.Keyword(null,"big-radius","big-radius",2064382730));var radius_diff = (big_radius - small_radius);var radius_ratio = (radius_diff / small_radius);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),((radius_diff * Math.cos(t)) + (distance * Math.cos((radius_ratio * t)))),new cljs.core.Keyword(null,"y","y",-1757859776),((radius_diff * Math.sin(t)) - (distance * Math.sin((radius_ratio * t))))], null);
});
hypnotizer.core.scale_pt = (function scale_pt(p__5816,scale){var map__5818 = p__5816;var map__5818__$1 = ((cljs.core.seq_QMARK_.call(null,map__5818))?cljs.core.apply.call(null,cljs.core.hash_map,map__5818):map__5818);var y = cljs.core.get.call(null,map__5818__$1,new cljs.core.Keyword(null,"y","y",-1757859776));var x = cljs.core.get.call(null,map__5818__$1,new cljs.core.Keyword(null,"x","x",2099068185));return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(x * scale),new cljs.core.Keyword(null,"y","y",-1757859776),(y * scale)], null);
});
hypnotizer.core.move_pt = (function move_pt(p__5819,dx,dy){var map__5821 = p__5819;var map__5821__$1 = ((cljs.core.seq_QMARK_.call(null,map__5821))?cljs.core.apply.call(null,cljs.core.hash_map,map__5821):map__5821);var y = cljs.core.get.call(null,map__5821__$1,new cljs.core.Keyword(null,"y","y",-1757859776));var x = cljs.core.get.call(null,map__5821__$1,new cljs.core.Keyword(null,"x","x",2099068185));return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + dy)], null);
});
hypnotizer.core.gcd = (function gcd(a,b){if((b === (0)))
{return a;
} else
{return gcd.call(null,b,cljs.core.mod.call(null,a,b));
}
});
hypnotizer.core.hypotrochoid_period = (function hypotrochoid_period(p__5822){var map__5824 = p__5822;var map__5824__$1 = ((cljs.core.seq_QMARK_.call(null,map__5824))?cljs.core.apply.call(null,cljs.core.hash_map,map__5824):map__5824);var small_radius = cljs.core.get.call(null,map__5824__$1,new cljs.core.Keyword(null,"small-radius","small-radius",-785177842));var big_radius = cljs.core.get.call(null,map__5824__$1,new cljs.core.Keyword(null,"big-radius","big-radius",2064382730));var d = (big_radius - small_radius);var n = small_radius;return (n / hypnotizer.core.gcd.call(null,n,d));
});
hypnotizer.core.curve_view = (function curve_view(params,owner,p__5825){var map__5834 = p__5825;var map__5834__$1 = ((cljs.core.seq_QMARK_.call(null,map__5834))?cljs.core.apply.call(null,cljs.core.hash_map,map__5834):map__5834);var height = cljs.core.get.call(null,map__5834__$1,new cljs.core.Keyword(null,"height","height",1025178622));var width = cljs.core.get.call(null,map__5834__$1,new cljs.core.Keyword(null,"width","width",-384071477));if(typeof hypnotizer.core.t5835 !== 'undefined')
{} else
{
/**
* @constructor
*/
hypnotizer.core.t5835 = (function (width,height,map__5834,p__5825,owner,params,curve_view,meta5836){
this.width = width;
this.height = height;
this.map__5834 = map__5834;
this.p__5825 = p__5825;
this.owner = owner;
this.params = params;
this.curve_view = curve_view;
this.meta5836 = meta5836;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hypnotizer.core.t5835.cljs$lang$type = true;
hypnotizer.core.t5835.cljs$lang$ctorStr = "hypnotizer.core/t5835";
hypnotizer.core.t5835.cljs$lang$ctorPrWriter = ((function (map__5834,map__5834__$1,height,width){
return (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"hypnotizer.core/t5835");
});})(map__5834,map__5834__$1,height,width))
;
hypnotizer.core.t5835.prototype.om$core$IRender$ = true;
hypnotizer.core.t5835.prototype.om$core$IRender$render$arity$1 = ((function (map__5834,map__5834__$1,height,width){
return (function (this$){var self__ = this;
var this$__$1 = this;var period = hypnotizer.core.hypotrochoid_period.call(null,self__.params);var total_radians = (hypnotizer.core.TAU * period);var step = (total_radians / self__.params.call(null,new cljs.core.Keyword(null,"steps","steps",-128433302)));var pts = (function (){var iter__4278__auto__ = ((function (period,total_radians,step,this$__$1,map__5834,map__5834__$1,height,width){
return (function iter__5838(s__5839){return (new cljs.core.LazySeq(null,((function (period,total_radians,step,this$__$1,map__5834,map__5834__$1,height,width){
return (function (){var s__5839__$1 = s__5839;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5839__$1);if(temp__4126__auto__)
{var s__5839__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5839__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__5839__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__5841 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__5840 = (0);while(true){
if((i__5840 < size__4277__auto__))
{var t = cljs.core._nth.call(null,c__4276__auto__,i__5840);cljs.core.chunk_append.call(null,b__5841,hypnotizer.core.move_pt.call(null,hypnotizer.core.scale_pt.call(null,hypnotizer.core.hypotrochoid_pt.call(null,self__.params,t),self__.params.call(null,new cljs.core.Keyword(null,"scale","scale",-230427353))),(self__.width / (2)),(self__.height / (2))));
{
var G__5842 = (i__5840 + (1));
i__5840 = G__5842;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5841),iter__5838.call(null,cljs.core.chunk_rest.call(null,s__5839__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5841),null);
}
} else
{var t = cljs.core.first.call(null,s__5839__$2);return cljs.core.cons.call(null,hypnotizer.core.move_pt.call(null,hypnotizer.core.scale_pt.call(null,hypnotizer.core.hypotrochoid_pt.call(null,self__.params,t),self__.params.call(null,new cljs.core.Keyword(null,"scale","scale",-230427353))),(self__.width / (2)),(self__.height / (2))),iter__5838.call(null,cljs.core.rest.call(null,s__5839__$2)));
}
} else
{return null;
}
break;
}
});})(period,total_radians,step,this$__$1,map__5834,map__5834__$1,height,width))
,null,null));
});})(period,total_radians,step,this$__$1,map__5834,map__5834__$1,height,width))
;return iter__4278__auto__.call(null,cljs.core.range.call(null,(0),total_radians,step));
})();return React.DOM.g(null,React.DOM.path({"strokeWidth": self__.params.call(null,new cljs.core.Keyword(null,"thickness","thickness",-940175454)), "style": {"stroke-opacity": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.params.call(null,new cljs.core.Keyword(null,"opacity","opacity",397153780)) * (100)))+"%")}, "stroke": "white", "fill": "none", "d": hypnotizer.core.path_string.call(null,pts)}));
});})(map__5834,map__5834__$1,height,width))
;
hypnotizer.core.t5835.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__5834,map__5834__$1,height,width){
return (function (_5837){var self__ = this;
var _5837__$1 = this;return self__.meta5836;
});})(map__5834,map__5834__$1,height,width))
;
hypnotizer.core.t5835.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__5834,map__5834__$1,height,width){
return (function (_5837,meta5836__$1){var self__ = this;
var _5837__$1 = this;return (new hypnotizer.core.t5835(self__.width,self__.height,self__.map__5834,self__.p__5825,self__.owner,self__.params,self__.curve_view,meta5836__$1));
});})(map__5834,map__5834__$1,height,width))
;
hypnotizer.core.__GT_t5835 = ((function (map__5834,map__5834__$1,height,width){
return (function __GT_t5835(width__$1,height__$1,map__5834__$2,p__5825__$1,owner__$1,params__$1,curve_view__$1,meta5836){return (new hypnotizer.core.t5835(width__$1,height__$1,map__5834__$2,p__5825__$1,owner__$1,params__$1,curve_view__$1,meta5836));
});})(map__5834,map__5834__$1,height,width))
;
}
return (new hypnotizer.core.t5835(width,height,map__5834__$1,p__5825,owner,params,curve_view,null));
});
hypnotizer.core.slider_view = (function slider_view(params,owner,p__5843){var map__5850 = p__5843;var map__5850__$1 = ((cljs.core.seq_QMARK_.call(null,map__5850))?cljs.core.apply.call(null,cljs.core.hash_map,map__5850):map__5850);var width = cljs.core.get.call(null,map__5850__$1,new cljs.core.Keyword(null,"width","width",-384071477));var max = cljs.core.get.call(null,map__5850__$1,new cljs.core.Keyword(null,"max","max",61366548));var min = cljs.core.get.call(null,map__5850__$1,new cljs.core.Keyword(null,"min","min",444991522));var label = cljs.core.get.call(null,map__5850__$1,new cljs.core.Keyword(null,"label","label",1718410804));if(typeof hypnotizer.core.t5851 !== 'undefined')
{} else
{
/**
* @constructor
*/
hypnotizer.core.t5851 = (function (label,min,max,width,map__5850,p__5843,owner,params,slider_view,meta5852){
this.label = label;
this.min = min;
this.max = max;
this.width = width;
this.map__5850 = map__5850;
this.p__5843 = p__5843;
this.owner = owner;
this.params = params;
this.slider_view = slider_view;
this.meta5852 = meta5852;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hypnotizer.core.t5851.cljs$lang$type = true;
hypnotizer.core.t5851.cljs$lang$ctorStr = "hypnotizer.core/t5851";
hypnotizer.core.t5851.cljs$lang$ctorPrWriter = ((function (map__5850,map__5850__$1,width,max,min,label){
return (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"hypnotizer.core/t5851");
});})(map__5850,map__5850__$1,width,max,min,label))
;
hypnotizer.core.t5851.prototype.om$core$IRenderState$ = true;
hypnotizer.core.t5851.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__5850,map__5850__$1,width,max,min,label){
return (function (this$,p__5854){var self__ = this;
var map__5855 = p__5854;var map__5855__$1 = ((cljs.core.seq_QMARK_.call(null,map__5855))?cljs.core.apply.call(null,cljs.core.hash_map,map__5855):map__5855);var animating = cljs.core.get.call(null,map__5855__$1,new cljs.core.Keyword(null,"animating","animating",-109443106));var this$__$1 = this;var value = self__.params.call(null,self__.label);return React.DOM.tr(null,React.DOM.td({"style": {"text-align": "right"}},cljs.core.name.call(null,self__.label)),React.DOM.td(null,om.dom.input.call(null,{"onChange": ((function (value,this$__$1,map__5855,map__5855__$1,animating,map__5850,map__5850__$1,width,max,min,label){
return (function (e){return om.core.update_BANG_.call(null,self__.params,self__.label,parseFloat(e.target.value));
});})(value,this$__$1,map__5855,map__5855__$1,animating,map__5850,map__5850__$1,width,max,min,label))
, "value": value, "step": ((self__.max - self__.min) / (200)), "max": self__.max, "min": self__.min, "type": "range", "style": {"width": self__.width}})),React.DOM.td({"style": {"min-width": (40)}},cljs.core.subs.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)),(0),(5))),React.DOM.td(null,React.DOM.button({"onClick": ((function (value,this$__$1,map__5855,map__5855__$1,animating,map__5850,map__5850__$1,width,max,min,label){
return (function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"animating","animating",-109443106),(((animating === (0)))?(1):(0)));
});})(value,this$__$1,map__5855,map__5855__$1,animating,map__5850,map__5850__$1,width,max,min,label))
},(((animating === (0)))?"Animate":"Stop"))));
});})(map__5850,map__5850__$1,width,max,min,label))
;
hypnotizer.core.t5851.prototype.om$core$IWillUpdate$ = true;
hypnotizer.core.t5851.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__5850,map__5850__$1,width,max,min,label){
return (function (this$,_,prev_state){var self__ = this;
var this$__$1 = this;if(!((prev_state.call(null,new cljs.core.Keyword(null,"animating","animating",-109443106)) === (0))))
{return setTimeout(((function (this$__$1,map__5850,map__5850__$1,width,max,min,label){
return (function (){return om.core.transact_BANG_.call(null,self__.params,self__.label,((function (this$__$1,map__5850,map__5850__$1,width,max,min,label){
return (function (val){if((val <= self__.min))
{om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"animating","animating",-109443106),(1));
} else
{if((val >= self__.max))
{om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"animating","animating",-109443106),(-1));
} else
{}
}
return (val + (prev_state.call(null,new cljs.core.Keyword(null,"animating","animating",-109443106)) * ((self__.max - self__.min) / (200))));
});})(this$__$1,map__5850,map__5850__$1,width,max,min,label))
);
});})(this$__$1,map__5850,map__5850__$1,width,max,min,label))
,(70));
} else
{return null;
}
});})(map__5850,map__5850__$1,width,max,min,label))
;
hypnotizer.core.t5851.prototype.om$core$IInitState$ = true;
hypnotizer.core.t5851.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__5850,map__5850__$1,width,max,min,label){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"animating","animating",-109443106),(0)], null);
});})(map__5850,map__5850__$1,width,max,min,label))
;
hypnotizer.core.t5851.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__5850,map__5850__$1,width,max,min,label){
return (function (_5853){var self__ = this;
var _5853__$1 = this;return self__.meta5852;
});})(map__5850,map__5850__$1,width,max,min,label))
;
hypnotizer.core.t5851.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__5850,map__5850__$1,width,max,min,label){
return (function (_5853,meta5852__$1){var self__ = this;
var _5853__$1 = this;return (new hypnotizer.core.t5851(self__.label,self__.min,self__.max,self__.width,self__.map__5850,self__.p__5843,self__.owner,self__.params,self__.slider_view,meta5852__$1));
});})(map__5850,map__5850__$1,width,max,min,label))
;
hypnotizer.core.__GT_t5851 = ((function (map__5850,map__5850__$1,width,max,min,label){
return (function __GT_t5851(label__$1,min__$1,max__$1,width__$1,map__5850__$2,p__5843__$1,owner__$1,params__$1,slider_view__$1,meta5852){return (new hypnotizer.core.t5851(label__$1,min__$1,max__$1,width__$1,map__5850__$2,p__5843__$1,owner__$1,params__$1,slider_view__$1,meta5852));
});})(map__5850,map__5850__$1,width,max,min,label))
;
}
return (new hypnotizer.core.t5851(label,min,max,width,map__5850__$1,p__5843,owner,params,slider_view,null));
});
hypnotizer.core.pattern_view = (function pattern_view(app,owner){if(typeof hypnotizer.core.t5871 !== 'undefined')
{} else
{
/**
* @constructor
*/
hypnotizer.core.t5871 = (function (owner,app,pattern_view,meta5872){
this.owner = owner;
this.app = app;
this.pattern_view = pattern_view;
this.meta5872 = meta5872;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hypnotizer.core.t5871.cljs$lang$type = true;
hypnotizer.core.t5871.cljs$lang$ctorStr = "hypnotizer.core/t5871";
hypnotizer.core.t5871.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"hypnotizer.core/t5871");
});
hypnotizer.core.t5871.prototype.om$core$IRender$ = true;
hypnotizer.core.t5871.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var width = window.innerWidth;var height = window.innerHeight;return React.DOM.div(null,cljs.core.apply.call(null,om.dom.table,{"id": "params"},(function (){var iter__4278__auto__ = ((function (width,height,this$__$1){
return (function iter__5874(s__5875){return (new cljs.core.LazySeq(null,((function (width,height,this$__$1){
return (function (){var s__5875__$1 = s__5875;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5875__$1);if(temp__4126__auto__)
{var s__5875__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5875__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__5875__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__5877 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__5876 = (0);while(true){
if((i__5876 < size__4277__auto__))
{var vec__5882 = cljs.core._nth.call(null,c__4276__auto__,i__5876);var param = cljs.core.nth.call(null,vec__5882,(0),null);var _ = cljs.core.nth.call(null,vec__5882,(1),null);cljs.core.chunk_append.call(null,b__5877,(function (){var map__5883 = hypnotizer.core.hypotrochoid_params.call(null,param);var map__5883__$1 = ((cljs.core.seq_QMARK_.call(null,map__5883))?cljs.core.apply.call(null,cljs.core.hash_map,map__5883):map__5883);var max = cljs.core.get.call(null,map__5883__$1,new cljs.core.Keyword(null,"max","max",61366548));var min = cljs.core.get.call(null,map__5883__$1,new cljs.core.Keyword(null,"min","min",444991522));return om.core.build.call(null,hypnotizer.core.slider_view,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),param,new cljs.core.Keyword(null,"min","min",444991522),min,new cljs.core.Keyword(null,"max","max",61366548),max,new cljs.core.Keyword(null,"width","width",-384071477),(width / (5))], null)], null));
})());
{
var G__5886 = (i__5876 + (1));
i__5876 = G__5886;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5877),iter__5874.call(null,cljs.core.chunk_rest.call(null,s__5875__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5877),null);
}
} else
{var vec__5884 = cljs.core.first.call(null,s__5875__$2);var param = cljs.core.nth.call(null,vec__5884,(0),null);var _ = cljs.core.nth.call(null,vec__5884,(1),null);return cljs.core.cons.call(null,(function (){var map__5885 = hypnotizer.core.hypotrochoid_params.call(null,param);var map__5885__$1 = ((cljs.core.seq_QMARK_.call(null,map__5885))?cljs.core.apply.call(null,cljs.core.hash_map,map__5885):map__5885);var max = cljs.core.get.call(null,map__5885__$1,new cljs.core.Keyword(null,"max","max",61366548));var min = cljs.core.get.call(null,map__5885__$1,new cljs.core.Keyword(null,"min","min",444991522));return om.core.build.call(null,hypnotizer.core.slider_view,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),param,new cljs.core.Keyword(null,"min","min",444991522),min,new cljs.core.Keyword(null,"max","max",61366548),max,new cljs.core.Keyword(null,"width","width",-384071477),(width / (5))], null)], null));
})(),iter__5874.call(null,cljs.core.rest.call(null,s__5875__$2)));
}
} else
{return null;
}
break;
}
});})(width,height,this$__$1))
,null,null));
});})(width,height,this$__$1))
;return iter__4278__auto__.call(null,self__.app);
})()),React.DOM.svg({"height": height, "width": width},om.core.build.call(null,hypnotizer.core.curve_view,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null)], null))));
});
hypnotizer.core.t5871.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5873){var self__ = this;
var _5873__$1 = this;return self__.meta5872;
});
hypnotizer.core.t5871.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5873,meta5872__$1){var self__ = this;
var _5873__$1 = this;return (new hypnotizer.core.t5871(self__.owner,self__.app,self__.pattern_view,meta5872__$1));
});
hypnotizer.core.__GT_t5871 = (function __GT_t5871(owner__$1,app__$1,pattern_view__$1,meta5872){return (new hypnotizer.core.t5871(owner__$1,app__$1,pattern_view__$1,meta5872));
});
}
return (new hypnotizer.core.t5871(owner,app,pattern_view,null));
});
om.core.root.call(null,hypnotizer.core.pattern_view,hypnotizer.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map