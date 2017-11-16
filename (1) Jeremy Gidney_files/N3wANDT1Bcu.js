if (self.CavalryLogger) { CavalryLogger.start_js(["aXMAo"]); }

__d("XGamesNavigationSliderAsyncController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("/games/async/navigationslider/",{id:{type:"String",required:true},referral_objects:{type:"StringVector",defaultValue:[]},num_items_per_page:{type:"Int",required:true},num_rows:{type:"Int",defaultValue:1},width:{type:"Int",required:true},height:{type:"Int",required:true}})}),null);
__d("CanvasNavigationSlider",["Event","XGamesNavigationSliderAsyncController","AsyncRequest","DataStore"],(function a(b,c,d,e,f,g){var h="GamesNavigationSlider";i.init=function(j,k){"use strict";return new i(j,k)};function i(j,k){"use strict";this.$CanvasNavigationSlider1=k.autoscroll;this.$CanvasNavigationSlider2=j;this.$CanvasNavigationSlider3=k.referral_objects;this.$CanvasNavigationSlider4=j.getNode().id;this.$CanvasNavigationSlider5=k.height;this.$CanvasNavigationSlider6=k.width;this.$CanvasNavigationSlider7=k.num_items_per_page;this.$CanvasNavigationSlider8=k.num_rows;this.$CanvasNavigationSlider9=false;c("DataStore").set(h,this.$CanvasNavigationSlider4,this);if(j.getIndex()>0||this.$CanvasNavigationSlider1)this.$CanvasNavigationSlider10();var l=c("Event").listen(j.getNextArrow(),"click",function(){l.remove();this.$CanvasNavigationSlider10()}.bind(this).bind(this))}i.prototype.$CanvasNavigationSlider10=function(){"use strict";if(this.$CanvasNavigationSlider9)return;this.$CanvasNavigationSlider9=true;var j=c("XGamesNavigationSliderAsyncController").getURIBuilder().setString("id",this.$CanvasNavigationSlider4).setInt("num_items_per_page",this.$CanvasNavigationSlider7).setInt("num_rows",this.$CanvasNavigationSlider8).setInt("width",this.$CanvasNavigationSlider6).setInt("height",this.$CanvasNavigationSlider5).getURI();new(c("AsyncRequest"))(j).setData({referral_objects:this.$CanvasNavigationSlider3}).send()};i.prototype.$CanvasNavigationSlider11=function(j){"use strict";j.forEach(function(k){this.$CanvasNavigationSlider2.push(k)}.bind(this))};i.update=function(j,k){"use strict";var l=c("DataStore").get(h,j);l.$CanvasNavigationSlider11(k)};f.exports=i}),null);
__d("XGamesRecGridSeeMoreController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("/games/recgrid/see_more/",{query_type:{type:"String"},query_params:{type:"String"},fbs:{type:"Int",required:true},num_apps:{type:"Int",required:true}})}),null);
__d("GamesRecGrid",["Arbiter","AsyncRequest","BanzaiODS","CSS","Event","Run","XGamesRecGridSeeMoreController"],(function a(b,c,d,e,f,g){function h(j,k,l){var m=function m(){n.remove();n=null;c("Arbiter").unsubscribe(o);o=0;c("CSS").hide(j);c("Arbiter").inform("recGrid/seeMoreClicked");if(l.loading_bar)c("CSS").show(l.loading_bar);var p=c("XGamesRecGridSeeMoreController").getURIBuilder().setString("query_type",l.query_type).setString("query_params",l.query_params).setInt("fbs",l.fbs).setInt("num_apps",l.num_apps).getURI();new(c("AsyncRequest"))(p).setMethod("POST").setRelativeTo(k).setHandler(function(){if(l.loading_bar)c("CSS").hide(l.loading_bar);c("Arbiter").inform("recGrid/seeMoreLoaded")}).send();c("BanzaiODS").bumpEntityKey("platform_www","games_homepage_rhc_unit.expand")},n=c("Event").listen(j,"click",m),o=c("Arbiter").subscribe("recGrid/seeMoreRequest",m);c("Run").onLeave(function(){n&&n.remove();o&&c("Arbiter").unsubscribe(o)})}var i={handleSeeMore:h};f.exports=i}),null);
__d("XGamesReplaceableXOutAsyncController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("/games/async/xout/replace/",{unit_type:{type:"String"},fbs:{type:"Int"},app_id:{type:"Int"},extra_data:{type:"String"},query_type:{type:"String"},query_params:{type:"String"},excluded_app_ids:{type:"StringVector",defaultValue:[]},attributes:{type:"String"}})}),null);
__d("GamesReplaceableXOutHelper",["invariant","Parent","XGamesReplaceableXOutAsyncController"],(function a(b,c,d,e,f,g,h){var i="data-games-xout-container",j=0,k={},l={};function m(w){var x=c("Parent").byAttribute(w,i);if(x){var y=parseInt(x.getAttribute(i),10);if(y===0){j+=1;y=j.toString();x.setAttribute(i,y)}return y}}function n(w){var x=m(w);x||h(0);return x}function o(w){var x=k[n(w)];return x?Object.keys(x):[]}function p(w,x){return q(w,[x])}function q(w,x){var y=m(w);if(y){var z=k[y]=k[y]||{};for(var A=0;A<x.length;A+=1)z[x[A]]=true}}function r(w){var x=n(w);if(x){delete k[x];delete l[x]}}function s(w,x){return c("XGamesReplaceableXOutAsyncController").getURIBuilder().setInt("app_id",x.appID).setString("extra_data",x.extraData).setString("attributes",x.attributes).setString("query_type",w.getAttribute("data-games-xout-query-type")).setString("query_params",w.getAttribute("data-games-xout-query-params")).setString("unit_type",x.unitType).setInt("fbs",w.getAttribute("data-games-xout-fbs")).setStringVector("excluded_app_ids",o(w)).getURI()}function t(w,x){var y=m(w);if(!y)return;var z=l[y]=l[y]||[];if(z.length===0)x();z.push(x)}function u(w){var x=n(w),y=l[x];if(y){y.shift();if(y.length>0)y[0]()}}var v={getBoundAppIDs:o,registerAppID:p,registerAppIDs:q,deleteContainer:r,queueRequest:t,processQueuedRequests:u,createURI:s};f.exports=v}),null);
__d("GamesReplaceableXOutListener",["csx","cx","AsyncRequest","CSS","DOM","Event","GamesReplaceableXOutHelper","Parent"],(function a(b,c,d,e,f,g,h,i){var j={};function k(n,o,p){var q=p.payload;if(!q)return;c("GamesReplaceableXOutHelper").registerAppID(n,q.app_id);c("GamesReplaceableXOutHelper").processQueuedRequests(o);j[q.app_id]=q.item_data;c("DOM").replace(o,q.el)}function l(n){return c("Event").listen(n,"click",function(o){var p=o.target;if(!c("CSS").matchesSelector(p,"._1m6e"))return;var q=c("Parent").bySelector(p,"._2b2u"),r=p.getAttribute("data-appid"),s=j[r];c("CSS").addClass(q,"_4ksu");c("GamesReplaceableXOutHelper").queueRequest(q,function(){new(c("AsyncRequest"))(c("GamesReplaceableXOutHelper").createURI(n,s)).setHandler(function(t){return k(n,q,t)}).setMethod("POST").send();delete j[r]})})}var m={registerContainerItems:function n(o,p,q){c("GamesReplaceableXOutHelper").registerAppIDs(o,p);q.forEach(function(r){var s=r.appID;j[s]=r;c("GamesReplaceableXOutHelper").registerAppID(o,s)});l(o,p)}};f.exports=m}),null);
__d("XGamesHideableXOutAsyncController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("/games/async/xout/hide/",{unit_type:{type:"String"},fbs:{type:"Int"},app_id:{type:"Int"},extra_data:{type:"String"}})}),null);
__d("GamesUninstallXOut.react",["cx","AsyncRequest","CSS","Dialog","DOMContainer.react","GamesXOut.react","React","ReactDOM","URI","XGamesHideableXOutAsyncController"],(function a(b,c,d,e,f,g,h){var i,j,k=c("React").PropTypes;i=babelHelpers.inherits(l,c("React").Component);j=i&&i.prototype;function l(){var m,n;"use strict";for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.state={pending:false},this.$GamesUninstallXOut1=function(){var r=c("XGamesHideableXOutAsyncController").getURIBuilder().setInt("app_id",this.props.appID).setString("extra_data",this.props.extraData).setString("unit_type",this.props.unitType).setInt("fbs",this.props.fbs).getURI();this.$GamesUninstallXOut2=new(c("AsyncRequest"))(r).setMethod("POST");this.$GamesUninstallXOut2.send()}.bind(this),this.$GamesUninstallXOut3=function(){var r=new(c("URI"))("/ajax/settings/apps/delete_app.php").setQueryData({app_id:this.props.appID,legacy:false,dialog:true,xout:true});new(c("Dialog"))().setAsync(new(c("AsyncRequest"))(r).setRelativeTo(c("ReactDOM").findDOMNode(this))).setCausalElement(c("ReactDOM").findDOMNode(this)).show()}.bind(this),n}l.appUninstalled=function(m){"use strict";c("CSS").addClass(m,"_4ksu")};l.prototype.render=function(){"use strict";return c("React").createElement(c("GamesXOut.react"),{onClick:this.$GamesUninstallXOut3},c("React").createElement(c("DOMContainer.react"),null,this.props.domChild))};l.propTypes={unitType:k.string.isRequired,appID:k.string.isRequired,domChild:k.any.isRequired,extraData:k.string.isRequired,fbs:k.number.isRequired};f.exports=l}),null);
__d("GamesTabMenu",["AsyncRequest","XPlatformXOutableElementController"],(function a(b,c,d,e,f,g){function h(i,j){"use strict";this.$GamesTabMenu2=j.xoutType;this.$GamesTabMenu3=j.fbid;this.$GamesTabMenu4=j.closeid;i.subscribe("itemclick",function(k,l){switch(l.item.getValue()){case"xout":this.$GamesTabMenu5();break}}.bind(this))}h.prototype.setContainer=function(i){"use strict";this.$GamesTabMenu1=i};h.prototype.$GamesTabMenu5=function(){"use strict";if(this.$GamesTabMenu1)this.$GamesTabMenu1.getRoot().remove();else document.getElementById(this.$GamesTabMenu4).remove();var i=c("XPlatformXOutableElementController").getURIBuilder().setEnum("type",this.$GamesTabMenu2).setInt("fbid",this.$GamesTabMenu3).getURI();new(c("AsyncRequest"))(i).setMethod("POST").send()};f.exports=h}),null);
__d("GamesTabPanel",["CSS","getStyleProperty"],(function a(b,c,d,e,f,g){function h(i,j){"use strict";this.$GamesTabPanel1=i}h.prototype.showPanel=function(){"use strict";c("CSS").show(this.$GamesTabPanel1)};h.prototype.hidePanel=function(){"use strict";c("CSS").hide(this.$GamesTabPanel1)};h.prototype.getHeight=function(){"use strict";return c("getStyleProperty")(this.$GamesTabPanel1,"height")};f.exports=h}),null);
__d("FBRHCTabsManager",["AsyncRequest","KeyedCallbackManager"],(function a(b,c,d,e,f,g){"use strict";var h=new(c("KeyedCallbackManager"))(),i={},j={get:function k(l,m){var n=!h.executeOrEnqueue(l,m);if(n)return true;if(i[l])return false;new(c("AsyncRequest"))(l).send();i[l]=true;return false},set:function k(l,m){var n;h.addResourcesAndExecute((n={},n[l]=m,n))}};f.exports=j}),null);
__d("FBRHCTabs",["cx","CSS","Event","FBRHCTabsManager","Focus","RTLKeys","Style","tidyEvent"],(function a(b,c,d,e,f,g,h){"use strict";function i(j,k,l,m,n){this.$FBRHCTabs7=function(o){var p=o.getAttribute("data-key");if(p){c("tidyEvent")(c("Event").listen(o,"click",this.$FBRHCTabs8.bind(this,p)));c("tidyEvent")(c("Event").listen(o,"keydown",this.$FBRHCTabs9.bind(this,p)))}}.bind(this);this.$FBRHCTabs1=k;this.$FBRHCTabs3=l;this.$FBRHCTabs4=m;this.$FBRHCTabs5=j.reduce(function(j,o){j[o.key]=o.href;return j},{});this.$FBRHCTabs6=Array.from(this.$FBRHCTabs1.children).map(function(o){return o.children[0]});this.$FBRHCTabs2=j[0].key;c("FBRHCTabsManager").set(this.$FBRHCTabs5[this.$FBRHCTabs2],n);this.$FBRHCTabs6.forEach(this.$FBRHCTabs7)}i.prototype.$FBRHCTabs10=function(j){this.$FBRHCTabs6.forEach(function(k){if(k.getAttribute("data-key")===j){c("CSS").addClass(k,"_4dfg");c("Style").set(this.$FBRHCTabs3,"left",k.offsetLeft+"px");k.setAttribute("aria-selected","true");k.setAttribute("tabindex","0")}else{c("CSS").removeClass(k,"_4dfg");k.setAttribute("aria-selected","false");k.setAttribute("tabindex","-1")}}.bind(this))};i.prototype.$FBRHCTabs9=function(j,event){var k=c("Event").getKeyCode(event),l=this.$FBRHCTabs6.findIndex(function(o){return o.getAttribute("data-key")===j});switch(k){case c("RTLKeys").SPACE:case c("RTLKeys").RETURN:this.$FBRHCTabs6[l].click();c("Event").prevent(event);break;case c("RTLKeys").getLeft():case c("RTLKeys").UP:var m=l>0?l-1:this.$FBRHCTabs6.length-1;c("Focus").set(this.$FBRHCTabs6[m]);break;case c("RTLKeys").getRight():case c("RTLKeys").DOWN:var n=l<this.$FBRHCTabs6.length-1?l+1:0;c("Focus").set(this.$FBRHCTabs6[n]);break}};i.prototype.$FBRHCTabs8=function(j){this.$FBRHCTabs10(j);c("FBRHCTabsManager").get(this.$FBRHCTabs5[this.$FBRHCTabs2],function(k){var l=k.offsetHeight;c("CSS").hide(k);var m=c("FBRHCTabsManager").get(this.$FBRHCTabs5[j],function(k){c("CSS").hide(this.$FBRHCTabs4);c("CSS").show(k)}.bind(this));if(!m){c("Style").set(this.$FBRHCTabs4,"height",l+"px");c("CSS").show(this.$FBRHCTabs4)}this.$FBRHCTabs2=j}.bind(this))};f.exports=i}),null);
__d("Slideshow",["csx","cx","ArbiterMixin","CSS","DOM","Event","Locale","Parent","getActiveElement","mixin","shield"],(function a(b,c,d,e,f,g,h,i){var j,k;j=babelHelpers.inherits(l,c("mixin")(c("ArbiterMixin")));k=j&&j.prototype;function l(m,n){"use strict";k.constructor.call(this);this._setCurrent=function(o){var p=this._items[this._currentIndex];p&&c("CSS").removeClass(p,"_2xn");c("CSS").addClass(this._items[o],"_2xn");c("CSS").removeClass(this._root,"_2xm");var q=p&&c("DOM").scry(p,"a").some(function(s){return s==c("getActiveElement")()});if(q){var r=c("DOM").scry(this._items[o],"a");if(r[0])r[0].focus()}if(!this._config.wrap&&this._config.arrows)if(o===0)c("CSS").addClass(this._arrowPrev,"_2xo");else if(o===this._items.length-1)c("CSS").addClass(this._arrowNext,"_2xo");else if(this._items.length>2){c("CSS").removeClass(this._arrowPrev,"_2xo");c("CSS").removeClass(this._arrowNext,"_2xo")}this._currentIndex=o;this._animating=false;this.inform("page_end",o)}.bind(this);this.informAndResetAutoPlay=function(){this.resetAutoplay();if(this._config.autoplay)this.inform("reset_autoplay")}.bind(this);this.informAndStopAutoplay=function(){this.stopAutoplay();this.inform("stop_autoplay")}.bind(this);this._root=m;this._config=n;this._currentIndex=0;this._animating=false;this._autoplayTimer=null;this._autoplayTimeout=n.autoplayTimeout;this._init()}l.prototype.getNode=function(){"use strict";return this._root};l.prototype.getIndex=function(){"use strict";return this._currentIndex};l.prototype.getNumItems=function(){"use strict";return this._items.length};l.prototype.getNextArrow=function(){"use strict";if(this._config.arrows)return c("DOM").find(this._root,"a._2xw");return null};l.prototype.getPrevArrow=function(){"use strict";if(this._config.arrows)return c("DOM").find(this._root,"a._2xx");return null};l.prototype.page=function(m){"use strict";if(typeof m==="undefined")m="next";if(m==="next"){if(this._config.wrap||this.getIndex()<this.getNumItems()-1)this._animateTo((this.getIndex()+1)%this.getNumItems(),this.getIndex())}else if(m==="prev"){if(this._config.wrap||this.getIndex()>0){var n=(this.getNumItems()+this.getIndex()-1)%this.getNumItems();this._animateTo(n,this.getIndex())}}};l.prototype.pageTo=function(m){"use strict";this._animateTo(m,this.getIndex(),c("shield")(this._setCurrent,this,m))};l.prototype.insert=function(m,n){"use strict";if(m>this._currentIndex)c("DOM").insertAfter(this._items[m-1],n);else{c("DOM").insertBefore(this._items[m],n);this._currentIndex++}this._items.splice(m,0,n);this._updateArrowState();this.inform("items_updated")};l.prototype.push=function(m){"use strict";this.insert(this._items.length,m)};l.prototype.remove=function(m){"use strict";if(m<0||m>=this._items.length)return;c("DOM").remove(this._items[m]);this._items=c("DOM").scry(this._container,"li._2xr");if(m===this._currentIndex&&this._items.length){var n=m%this._items.length;this._conditionFade(this._items[n],true,null);this._setCurrent(n)}this.inform("items_updated")};l.prototype._init=function(){"use strict";this._container=c("DOM").find(this._root,"ul._2xq");this._items=c("DOM").scry(this._container,"li._2xr");if(this._config.arrows){c("Event").listen(this._root,"click",this._clickListener.bind(this));this._arrowNext=c("DOM").find(this._root,"a._2xw");this._arrowPrev=c("DOM").find(this._root,"a._2xx")}if(this._config.autoplay){if(this._config.autoplaycontrol){c("Event").listen(this._root,"mouseenter",this.informAndStopAutoplay);c("Event").listen(this._root,"mouseleave",this.informAndResetAutoPlay)}this.resetAutoplay()}this.subscribe(["page_start","page_end"],function(m,n){c("CSS").conditionClass(this._root,"_2xm",m==="page_start")}.bind(this))};l.prototype._clickListener=function(event){"use strict";var m=event.getTarget(),n=c("Parent").byTag(m,"a");if(n&&!c("CSS").matchesSelector(n,"._2xo"))if(c("CSS").matchesSelector(n,"._2xw")){this.page("next");event.preventDefault()}else if(c("CSS").matchesSelector(n,"._2xx")){this.page("prev");event.preventDefault()}};l.prototype._updateArrowState=function(){"use strict";if(!this._config.arrows)return;c("CSS").conditionClass(this._arrowNext,"_2xo",this._items.length===1);c("CSS").conditionClass(this._arrowPrev,"_2xo",this._items.length===1)};l.prototype._animateTo=function(m){var n=arguments.length<=1||arguments[1]===undefined?null:arguments[1];"use strict"};l.prototype.startAutoplay=function(m){"use strict";this._config.autoplay=true;this._autoplayTimeout=m;this.resetAutoplay()};l.prototype.resetAutoplay=function(){"use strict";if(this._config.autoplay){clearTimeout(this._autoplayTimer);this._autoplayTimer=setTimeout(this._autoplay.bind(this),this._autoplayTimeout)}};l.prototype.stopAutoplay=function(){"use strict";clearTimeout(this._autoplayTimer);this._autoplayTimer=null};l.prototype._autoplay=function(){"use strict";this.resetAutoplay();if(this._items.length>1)this.page()};l.prototype.setAutoplayTimeout=function(m){"use strict";this._autoplayTimeout=m};f.exports=l}),null);
__d("Carousel",["cx","Animation","CSS","Ease","Locale","Slideshow","Style","shield"],(function a(b,c,d,e,f,g,h){var i,j,k=c("Locale").isRTL()?"right":"left",l=c("Ease").sineInOut;i=babelHelpers.inherits(m,c("Slideshow"));j=i&&i.prototype;function m(n,o){"use strict";j.constructor.call(this,n,o);this.subscribe("items_updated",this._updateItemState.bind(this));this._width=this._config.width}m.prototype._updateItemState=function(n,o){"use strict";this._setContainerPos(n);c("Style").set(this._container,"width",this._items.length*this._config.width+this._config.widthunit)};m.prototype._updateArrowState=function(n){"use strict";if(!this._config.arrows)return;var o=this._config.wrap,p=this._items.length,q=Math.floor(p/this._config.photosperframe);c("CSS").conditionClass(this._arrowNext,"_2xo",q===1||!o&&n===q-1);c("CSS").conditionClass(this._arrowPrev,"_2xo",q===1||!o&&n===0)};m.prototype._animate=function(n){var o=arguments.length<=1||arguments[1]===undefined?null:arguments[1],p=arguments[2];"use strict";var q=n===-1?this._items.length-1:n,r=0,s=0;r=this._calcOffset(n,this._config.width,this._config.peek,this._config.item_margin);this._animating=true;this.inform("page_start",q);var t=new(c("Animation"))(this._container).setUnit(this._config.widthunit).to(k,r).duration(this._config.animationDuration).ease(l).ondone(p);if(o!==null){s=this._calcOffset(o,this._config.width,this._config.peek,this._config.item_margin);t.from(k,s)}t.go()};m.prototype._calcOffset=function(n,o,p,q){"use strict";if(this._config.peek_with_offset){var r=-n*(o-p*2);if(n>0)r=r+p-n*(q/2);if(n===this._items.length-1)r+=p;return r}else return-n*o};m.prototype._setContainerPos=function(n){"use strict";c("Style").set(this._container,k,-n*this._config.width+this._config.widthunit)};m.prototype._animateTo=function(n){var o=arguments.length<=1||arguments[1]===undefined?null:arguments[1];"use strict";if(this._animating)return;var p=this._items.length;if(0<=n&&n<p||!this._config.wrap){var q=(n+p)%p;this._updateArrowState(q);return this._animate(q,o,c("shield")(this._setCurrent,this,q))}var r=n%p,s=r?p-1:0,t=this._items[p-1];c("Style").set(t,"position","absolute");c("Style").set(t,k,-this._config.width+this._config.widthunit);if(s===0)this._setContainerPos(-1);this._animate(r,o,function(){c("Style").set(t,"position","static");c("Style").set(t,k,"auto");this._setContainerPos(s);this._setCurrent(s)}.bind(this))};f.exports=m}),null);