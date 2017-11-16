if (self.CavalryLogger) { CavalryLogger.start_js(["6P6te"]); }

__d("errorDesc",["fbt","invariant"],(function a(b,c,d,e,f,g,h,i){"use strict";function j(k){i(0)}j.withParams=function(k,l){i(0)};j._=function(k,l){return k(h,l)};f.exports=j}),null);
__d("errorSummary",["fbt","invariant"],(function a(b,c,d,e,f,g,h,i){"use strict";function j(k){i(0)}j._=function(k){return k(h)};f.exports=j}),null);
__d("RecoveryCodeEntryPrecheck",["errorDesc","CSS","DOM","errorSummary","ge"],(function a(b,c,d,e,f,g,h){var i={init:function j(k,l){k.onsubmit=function(){var m=c("ge")("recovery_code_entry");if(m==null)return true;var n=i.getError(m.value,l);if(n==null)return true;try{var o=c("ge")("error_box");if(o==null)return true;c("DOM").setContent(o,n);c("CSS").show(o);m.focus();m.value="";return false}catch(p){return true}}},getError:function j(k,l){if(k.length===0)return c("errorSummary")._(function(m){return m._("Please enter a code.")});else if(/[^\d]/i.test(k))return h._(function(m,n){return m._("It looks like you entered some letters. Your code is 6 numbers long.")},{});else if(k.length===1)return h._(function(m,n){return m._("You only entered 1 number. Please check your code and try again.")},{});else if(k.length<l)return h._(function(m,n){return m._("You only entered {number_of_digits} numbers. Please check your code and try again.",[m.param("number_of_digits",n.number_of_digits)])},{number_of_digits:k.length});return null}};f.exports=i}),null);
__d("Currency",["CurrencyConfig"],(function a(b,c,d,e,f,g){var h=c("CurrencyConfig").allCurrenciesByCode;function i(n){if(h[n])return h[n].format;return null}function j(n){if(h[n])return h[n].symbol;return null}function k(n){if(h[n])return 1*h[n].offset;return 1}function l(n){if(h[n])return h[n].name;return null}function m(n){if(h[n])return h[n].iso;return null}g.getFormat=i;g.getSymbol=j;g.getOffset=k;g.getName=l;g.getISO=m}),null);
__d("ads-lib-formatters",["fbt","Currency","NumberFormatConfig","intlNumUtils"],(function a(b,c,d,e,f,g,h){var i="USD";function j(G,H,I){G=G||"";I=I||"";H=H||G.length;if(G.length<=H)return G;var J=H-I.length;if(J)if(/[\uD800-\uDFFF]/.test(G[J-1]))J+=1;return G.substr(0,J)+I}function k(G,H){if(H===undefined||H===null)H="";return function(I){return!I?H:j(I,G,"...")}}function l(G,H,I,J,K){if(G==="N/A")return G;if(H===undefined)H=0;return c("intlNumUtils").formatNumberRaw(G||0,H,I,J,K)}function m(G){return function(H){return l(H,G||0,",",".")}}function n(G){return function(H){return l(H,G||0,c("NumberFormatConfig").numberDelimiter,c("NumberFormatConfig").decimalSeparator,c("NumberFormatConfig").minDigitsForThousandsSeparator)}}function o(G){return function(H){return c("intlNumUtils").formatNumberRaw(H||"0",G||0,c("NumberFormatConfig").numberDelimiter,c("NumberFormatConfig").decimalSeparator,c("NumberFormatConfig").minDigitsForThousandsSeparator)}}function p(G,H){return function(I){return c("intlNumUtils").formatNumberWithLimitedSigFig(I,G,H)}}function q(G,H){if(H)return n(G);return function(I){return l(I,G||0,"",c("NumberFormatConfig").decimalSeparator,c("NumberFormatConfig").minDigitsForThousandsSeparator)}}function r(G,H){var I=H===false?1:100;return function(J){return l(J*I,G||0,",",".")+"%"}}function s(G,H){var I=H===false?1:100;return function(J){return l(J*I,G||0,c("NumberFormatConfig").numberDelimiter,c("NumberFormatConfig").decimalSeparator)+"%"}}function t(G,H,I,J,K){if(G===undefined)G=2;var L=J(G);if(I===undefined)I=false;H=H||i;var M=H+"-"+G+"-"+I;if(!K[M]){var N=c("Currency").getFormat(H)||c("Currency").getFormat(i),O=c("Currency").getSymbol(H)||c("Currency").getSymbol(i),P=c("Currency").getOffset(H)||c("Currency").getOffset(i);N=N.replace("{symbol}",O);K[M]=function(Q){if(I)Q=Q/P;if(!(Q+"").match(/^\-?[\d\.,]*$/))return"N/A";return N.replace("{amount}",L(Q))}}return K[M]}var u={};function v(G,H,I){return t(G,H,I,m,u)}var w={};function x(G,H,I){return t(G,H,I,n,w)}function y(G,H){if(H)return c("intlNumUtils").parseNumberRaw(G+"",H,c("NumberFormatConfig").numberDelimiter);return c("intlNumUtils").parseNumber(G+"")}function z(){return function(G){return l(G,0,",",".")+"%"}}function A(){return function(G){return l(G,0,c("NumberFormatConfig").numberDelimiter,c("NumberFormatConfig").decimalSeparator)+"%"}}function B(G){var H=G.currency(),I=G.offset()==100?2:0;return v(I,H)}function C(G,H){var I=G.currency(),J=G.offset()==100?2:0;return x(J,I,H)}function D(G){var H=[];if(G.countries&&G.countries.length)H.push(G.countries);if(G.cities&&G.cities.length)H.push(G.cities.map(function(I){return I.name}));if(G.zips&&G.zips.length)H.push(G.zips.map(function(I){return I.name}));if(G.regions&&G.regions.length)H.push(G.regions.map(function(I){return I.name}));return H.join("; ").replace(/,/g,", ")}function E(G,H){if(G||H){G=G||h._("All");H=H||h._("All");return G+"&ndash;"+H}return"Any"}function F(G){G=G+"";if(G==="0")return h._("All");else if(G==="1")return h._("Men");return h._("Women")}g.geoLocation=D;g.age=E;g.sex=F;g.createTextTruncator=k;g.chopString=j;g.parseNumber=y;g.formatNumber=l;g.createIntlNumberFormatter=n;g.createIntlLongNumberFormatter=o;g.createLimitedSigFigNumberFormatter=p;g.createMaybeDelimitedNumberFormatter=q;g.createIntlPercentFormatter=s;g.createIntlMoneyFormatter=x;g.createIntlMoneyFormatterForAccount=C;g.createIntlInflationFormatter=A;g.createNumberFormatter=m;g.createPercentFormatter=r;g.createMoneyFormatter=v;g.createMoneyFormatterForAccount=B;g.createInflationFormatter=z}),null);
__d("mod",[],(function a(b,c,d,e,f,g){function h(i,j){var k=i%j;if(k*j<0)k+=j;return k}f.exports=h}),null);
__d("nearlyEqualNumbers",[],(function a(b,c,d,e,f,g){function h(i,j){if(i===j)return true;var k=Math.abs(i-j);if(k<Number.EPSILON)return true;var l=Math.abs(i),m=Math.abs(j);return k/(l+m)<Number.EPSILON}f.exports=h}),null);
__d("distinctArray",["Set"],(function a(b,c,d,e,f,g){function h(i){return Array.from(new(c("Set"))(i).values())}f.exports=h}),null);
__d("shallowArrayEqual",[],(function a(b,c,d,e,f,g){function h(i,j){if(i===j)return true;if(i.length!==j.length)return false;for(var k=0;k<i.length;k++)if(i[k]!==j[k])return false;return true}f.exports=h}),null);
__d("SlideshowCreationWaterfallEvent",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({SLIDESHOW_INTENT:"intent_slideshow",SLIDESHOW_CANCEL:"cancel_slideshow",SLIDESHOW_POST:"post_slideshow",SLIDESHOW_PREVIEW_INTENT:"intent_slideshow_preview",SLIDESHOW_PREVIEW_CANCEL:"cancel_slideshow_preview",SLIDESHOW_IMAGE_UPLOAD_STARTED:"image_upload_started_slideshow",SLIDESHOW_IMAGE_UPLOAD_SUCCESS:"image_upload_success_slideshow",SLIDESHOW_IMAGES_SELECT_CONFIRM:"images_select_confirm_slideshow",SLIDESHOW_IMAGE_REMOVE:"image_remove_slideshow",SLIDESHOW_ADD_VIDEO_CLICK:"add_video_click_slideshow",SLIDESHOW_VIDEO_UPLOAD_START:"video_upload_start_slideshow",SLIDESHOW_VIDEO_UPLOAD_ERROR:"video_upload_error_slideshow",SLIDESHOW_VIDEO_UPLOAD_SUCCESS:"video_upload_success_slideshow",SLIDESHOW_FRAME_IMAGES_START:"frame_images_start_slideshow",SLIDESHOW_FRAME_IMAGES_SUCCESS:"frame_images_success_slideshow",SLIDESHOW_FRAME_IMAGES_ERROR:"frame_images_error_slideshow",SLIDESHOW_STORYLINE_MOOD_SELECT:"storyline_mood_select_slideshow",SLIDESHOW_MUSIC_CATEGORY_SELECT:"music_category_select_slideshow",SLIDESHOW_STORYLINE_MOOD_REMOVE:"storyline_mood_remove_slideshow",SLIDESHOW_STORYLINE_MOOD_DELETE:"storyline_mood_delete_slideshow",SLIDESHOW_AUDIO_UPLOAD_START:"audio_upload_start_slideshow",SLIDESHOW_AUDIO_UPLOAD_ERROR:"audio_upload_error_slideshow",SLIDESHOW_AUDIO_UPLOAD_SUCCESS:"audio_upload_success_slideshow",SLIDESHOW_DURATION_CHANGE:"duration_change_slideshow",SLIDESHOW_TRANSITION_CHANGE:"transition_change_slideshow",SLIDESHOW_FORMAT_CHANGE:"format_change_slideshow",SLIDESHOW_TAB_CHANGE:"tab_change_slideshow"})}),null);
__d("SlideshowEntrypoint",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({COMPOSER_PHOTO_VIDEO_TAB:"composer_photo_video_tab",COMPOSER_CAMERA_ICON:"composer_camera_icon",COMPOSER_URL_PARAMS:"composer_url_params",ADS_CREATE_FLOW:"ads_create_flow",ADS_CREATE_FLOW_PLATFORM:"ads_create_flow_platform",ADS_POWER_EDITOR:"ads_power_editor",ADS_EXTENDED_DELIVERY:"ads_extended_delivery",BOOSTED_COMPONENT:"boosted_component",FB4A_PAGE_COMPOSER:"fb4a_page_composer",PMA_PAGE_COMPOSER:"pma_page_composer",CANVAS:"canvas",UNKNOWN:"unknown"})}),null);
__d("GeoCoordinatesRecord",["immutable"],(function a(b,c,d,e,f,g){"use strict";var h,i,j=c("immutable").Record({latitude:undefined,longitude:undefined});h=babelHelpers.inherits(k,j);i=h&&h.prototype;function k(){h.apply(this,arguments)}f.exports=k}),null);
__d("GeoCoordinates",["GeoCoordinatesRecord","nearlyEqualNumbers"],(function a(b,c,d,e,f,g){"use strict";var h,i;h=babelHelpers.inherits(j,c("GeoCoordinatesRecord"));i=h&&h.prototype;function j(k,l){i.constructor.call(this,{latitude:k,longitude:l})}j.prototype.nearlyEquals=function(k){return c("nearlyEqualNumbers")(this.latitude,k.latitude)&&c("nearlyEqualNumbers")(this.longitude,k.longitude)};f.exports=j}),null);
__d("GeoRectangle",["GeoCoordinates","ImmutableObject"],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c("ImmutableObject"));i=h&&h.prototype;function j(k,l,m,n){"use strict";i.constructor.call(this,{n:k,w:l,s:m,e:n})}j.prototype.containsLat=function(k){"use strict";return k>=this.s&&k<=this.n};j.prototype.getCenter=function(){"use strict";var k=(this.n+this.s)/2,l;l=(this.e+this.w)/2;if(this.w>this.e){l-=180;if(l<-180)l+=360}return{latitude:k,longitude:l}};j.prototype.containsLon=function(k){"use strict";if(this.w>this.e)return k>=this.w||k<=this.e;return k>=this.w&&k<=this.e};j.prototype.getHeight=function(){"use strict";return this.n-this.s};j.prototype.getWidth=function(){"use strict";var k=this.e;if(this.w>this.e)k+=360;return k-this.w};j.prototype.containsPoint=function(k,l){"use strict";return this.containsLat(k)&&this.containsLon(l)};j.prototype.containsGeoRectangle=function(k){"use strict";return this.containsPoint(k.n,k.w)&&this.containsPoint(k.s,k.e)};j.prototype.toArray=function(){"use strict";return{n:this.n,w:this.w,s:this.s,e:this.e}};j.fromPoints=function(k){if(!k||k.length===0)return null;if(k.length===1){var l=k[0];return new j(l.latitude,l.longitude,l.latitude,l.longitude)}var m=k.map(function(l){return l.latitude}),n=k.map(function(l){return l.longitude}).sort(function(t,u){return t-u}),o=360+n[0]-n[n.length-1],p=n.length-1,q=0;for(var r=0;r<n.length-1;r++){var s=n[r+1]-n[r];if(s>o){o=s;p=r;q=r+1}}return new j(Math.max.apply(Math,m),n[q],Math.min.apply(Math,m),n[p])};f.exports=j}),null);
__d("SlideshowCreationWaterfallLogger",["MarauderLogger"],(function a(b,c,d,e,f,g){var h={logEvent:function i(j,k,f){k=k||{};c("MarauderLogger").log(j,f,k,undefined,undefined,undefined)}};f.exports=h}),null);