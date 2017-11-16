if (self.CavalryLogger) { CavalryLogger.start_js(["bWDDd"]); }

__d("SyncRequestStatusEnum",[],(function a(b,c,d,e,f,g){f.exports={PENDING:0,ACCEPTED:1,REJECTED:2,EXPIRED:3,CANCELED:4,namesByValue:["PENDING","ACCEPTED","REJECTED","EXPIRED","CANCELED"]}}),null);
__d("AppInstallLoggerEvents",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({IMPRESSION:"impression",CLICK:"click",INSTALL:"install",XOUT:"xout",RANKED_IMPRESSION:"ranked_impression",CANVAS_VISIT:"canvas_visit",APP_SESSION_START:"session_start",CANVAS_IFRAME_LOAD:"canvas_iframe_load",APP_POPOVER_RENDER:"app_popover_render",APP_PAGE_RENDER:"app_page_render",APPCENTER_MENU_RENDER:"appcenter_menu_render",APPCENTER_HOMEPAGE_RENDER:"appcenter_homepage_render",APPCENTER_MANAGE_RENDER:"appcenter_manage_render",APPCENTER_REQUESTS_RENDER:"appcenter_requests_render",APPCENTER_INVITES_RENDER:"appcenter_invites_render",APPCENTER_TOP_LISTS_RENDER:"appcenter_top_lists_render",APPCENTER_QUERY_RESULTS_RENDER:"appcenter_query_results_render",GAMES_LOGIN_PAGE_ONE_RENDER:"games_login_page_one_render",GAMES_LOGIN_PAGE_TWO_RENDER:"games_login_page_two_render",GAMES_LOGIN_PAGE_ONE_XOUT:"games_login_page_one_xout",GAMES_LOGIN_PAGE_TWO_XOUT:"games_login_page_two_xout",GAMES_LOGIN_NEXT_PAGE:"games_login_next_page",GAMES_LOGIN_PREV_PAGE:"games_login_prev_page",GAMES_LOGIN_SOCIAL_LOGIN:"games_login_social_login",GAMES_LOGIN_SOCIAL_LOGIN_SUCCESS:"games_login_social_login_success",GAMES_LOGIN_SINGLE_ANONYMOUS_LOGIN:"games_login_single_anonymous_login",GAMES_LOGIN_ALWAYS_ANONYMOUS_LOGIN:"games_login_always_anonymous_login",GAMES_LOGIN_AUTO_LOGIN:"games_login_auto_login",GAMES_LOGIN_UNSIGNED_RENDER:"games_login_unsigned_render",GAMES_LOGIN_UNSIGNED_SOCIAL_LOGIN:"games_login_unsigned_social_login",GAMES_LOGIN_UNSIGNED_ANONYMOUS_LOGIN:"games_login_unsigned_anonymous_login",GAMES_LOGIN_UNSIGNED_XOUT:"games_login_unsigned_xout",GAMES_LOGIN_LEARN_MORE_CLICK:"games_login_learn_more",GAMES_LOGIN_EDIT_SETTINGS:"games_login_edit_settings",GAMES_LOGIN_SOCIAL_UPGRADE_BUTTON_CLICK:"games_login_social_upgrade_button_click",GAMES_LOGIN_SOCIAL_UPGRADE_IMPRESSION:"games_login_social_upgrade_impression",GAMES_LOGIN_SOCIAL_UPGRADE_SUCCESS:"games_login_social_upgrade_success",GAMES_LOGIN_XOUT_SOCIAL_IMPRESSION:"games_login_xout_social_impression",GDPV4_RENDER:"gdpv4_render",GDPV4_EDITED_SCOPES:"gdpv4_edit_scopes",GDPV4_BUTTON_CLICK:"gdpv4_button_click",CLICK_TO_APPCENTER:"click_to_appcenter",PP_CREATE_INVITE:"pp_create_invite",PP_ACCEPT_INVITE:"pp_accept_invite",PP_DELETE_INVITES:"pp_delete_invites",PP_DELETE_ALL:"pp_delete_all",PP_BLOCK_APP:"pp_block_app",PP_BLOCK_USER:"pp_block_user",PP_UNBLOCK_APP:"pp_unblock_app",PP_UNBLOCK_USER:"pp_unblock_user",PP_ACCEPT_INVITE_ACTIVATE_APP:"pp_accept_invite_activate_app",GAMERANKER_REQUEST:"gameranker_request",GAMERANKER_RESPONSE:"gameranker_response",GAMERANKER_EXCEPTION:"gameranker_exception",GAMERANKER_TARGETING_SCORE:"gameranker_targeting_score",GAME_COLLABORATIVE_FILTERING_SCORE:"game_collaborative_filtering_score",NOTIFICATION_CONTENT_UPDATE_SEND:"notification_content_update_send",NOTIFICATION_CONTENT_UPDATE_SEND_TO_TURNOFF:"notification_content_update_send_to_turnoff",NOTIFICATION_CONTENT_UPDATE_CLICK:"notification_content_update_click",NOTIFICATION_CONTENT_UPDATE_IMPRESSION:"notification_content_update_impression",NOTIFICATION_CONTENT_UPDATE_TURN_OFF:"notification_content_update_turn_off",NOTIFICATION_CONTENT_UPDATE_UNDO_TURN_OFF:"notification_content_update_undo_turn_off",NOTIFICATION_CONTENT_UPDATE_MARK_SPAM:"notification_content_update_mark_spam",NOTIFICATION_CONTENT_UPDATE_FIRST_IMPRESSION:"notification_content_update_first_impression",NOTIFICATION_CONTENT_UPDATE_FIRST_YES:"notification_content_update_first_yes",NOTIFICATION_CONTENT_UPDATE_FIRST_IMPLICIT_YES:"notification_content_update_first_implicit_yes",NOTIFICATION_CONTENT_UPDATE_FIRST_NO:"notification_content_update_first_no",NOTIFICATION_A2U_SEND:"notification_a2u_send",NOTIFICATION_A2U_SEND_TO_TURNOFF:"notification_a2u_send_to_turnoff",NOTIFICATION_A2U_CLICK:"notification_a2u_click",NOTIFICATION_A2U_IMPRESSION:"notification_a2u_impression",NOTIFICATION_A2U_TURN_OFF:"notification_a2u_turn_off",NOTIFICATION_A2U_UNDO_TURN_OFF:"notification_a2u_undo_turn_off",NOTIFICATION_A2U_MARK_SPAM:"notification_a2u_mark_spam",NOTIFICATION_A2U_FIRST_IMPRESSION:"notification_a2u_first_impression",NOTIFICATION_A2U_FIRST_YES:"notification_a2u_first_yes",NOTIFICATION_GYML_EVALUATION:"notification_a2u_gyml_evaluation",LIVE_PLAYER_NOTIFICATION_SENT:"live_player_notification_sent",LIVE_PLAYER_NOTIFICATION_SEND_ATTEMPT:"live_player_notification_send_attempt",GAMER_CHAT_MESSAGE_SEND:"gamer_chat_message_send",GAMER_CHAT_MESSAGE_SENTRY_BLOCKED:"gamer_chat_message_sentry_blocked",GAMER_CHAT_MESSAGE_HIDDEN:"gamer_chat_message_hidden",GAMER_CHAT_MESSAGE_UNHIDDEN:"gamer_chat_message_unhidden",GAMER_CHAT_MESSAGE_SENDER_BLOCKED:"gamer_chat_message_blocked",GAMER_CHAT_MESSAGE_SENDER_UNBLOCKED:"gamer_chat_message_unblocked",GAMER_CHAT_MESSAGE_SENDER_REPORTED:"gamer_chat_message_reported",GAMER_CHAT_USER_BANNED:"gamer_chat_user_banned",GAMER_CHAT_USER_UNBANNED:"gamer_chat_user_unbanned",GAME_ACHIEVEMENT_EARNED:"game_achievement_earned",RHC_SETTINGS_UNIT_APP_FAVORITED:"rhc_settings_unit_app_favorited",RHC_SETTINGS_UNIT_APP_UNFAVORITED:"rhc_settings_unit_app_unfavorited",RHC_SETTINGS_UNIT_APP_SHARE_CLICKED:"rhc_settings_unit_app_share_clicked",RHC_SETTINGS_UNIT_APP_PRIVACY_SETTINGS_CLICKED:"rhc_settings_unit_app_privacy_settings_clicked",RHC_SETTINGS_UNIT_APP_UNINSTALL_CLICKED:"rhc_settings_unit_app_uninstall_clicked",RHC_SETTINGS_UNIT_APP_FULLSCREENED:"rhc_settings_unit_app_fullscreened",GYML_REQUEST:"gyml_request",GYML_ERROR:"gyml_error",GYML_NO_MODEL:"gyml_no_model",GYML_RESULT:"gyml_result",GAMEROOM_DOT_COM_PAGE_VIEW:"gameroom_dot_com_page_view",GAMES_DESKTOP_EXCEPTION:"games_desktop_exception",GAMES_DESKTOP_MAIN_FRAME_URL:"games_desktop_main_frame_url",GAMES_DESKTOP_OPENED_APP:"games_desktop_opened_app",GAMES_DESKTOP_UPDATE_STEP:"games_desktop_update_step",GAMES_DESKTOP_APP_INSTALLED:"games_desktop_app_installed",GAMES_DESKTOP_CONTROL_USED:"games_desktop_control_used",GAMES_DESKTOP_GAME_SHORTCUT_USED:"games_desktop_game_shortcut_used",GAMES_DESKTOP_GAME_SHORTCUT_CREATED:"games_desktop_game_shortcut_created",GAMES_DESKTOP_LOGGED_IN:"games_desktop_logged_in",GAMES_DESKTOP_LOGGED_OUT:"games_desktop_logged_out",GAMES_DESKTOP_FLASH_NOT_INSTALLED:"games_desktop_flash_not_installed",GAMES_DESKTOP_APP_DOWNLOADED:"games_desktop_app_downloaded",GAMES_DESKTOP_APP_DOWNLOAD_UNIT_IMPRESSION:"games_desktop_app_download_unit_impression",GAMES_DESKTOP_APP_UNINSTALLED:"games_desktop_app_uninstalled",GAMES_DESKTOP_LEARN_MORE_DIALOG_IMPRESSION:"games_desktop_learn_more_dialog_impression",GAMES_DESKTOP_FEEDBACK:"games_desktop_feedback",GAMES_DESKTOP_APP_UNINSTALLED_FAILED_CHECK:"games_desktop_app_uninstalled_failed_check",GAMES_DESKTOP_CLOSED_APP:"games_desktop_closed_app",GAMES_DESKTOP_RENDER_PROCESS_TERMINATED:"games_desktop_render_process_terminated",GAMES_DESKTOP_NONCE_CREATION_FAILED:"games_desktop_nonce_creation_failed",GAMES_DESKTOP_AUTO_LOGIN_FAILED:"games_desktop_auto_login_failed",GAMES_DESKTOP_AUTO_LOGIN_SUCCEEDED:"games_desktop_auto_login_succeeded",GAMES_DESKTOP_TOAST_EVENT:"games_desktop_toast_event",GAMES_DESKTOP_NOTIF_ACTION:"games_desktop_notif_action",GAMES_DESKTOP_AUTO_LOGIN_AVAILABLE:"games_desktop_auto_login_available",GAMES_DESKTOP_SETTINGS_CHANGE:"games_desktop_settings_change",GAMES_DESKTOP_LANDING_PAGE_VIEW:"games_desktop_landing_page_view",GAMES_DESKTOP_LANDING_PAGE_MOBILE_VIEW:"games_desktop_landing_page_mobile_view",GAMES_DESKTOP_SYSTEM_PERFORMANCE:"games_desktop_system_performance",GAMES_DESKTOP_DOWNLOADER_STATE:"games_desktop_downloader_state",GAMES_DESKTOP_DOWNLOADER_EXCEPTION:"games_desktop_downloader_exception",GAMES_DESKTOP_LOAD_ERROR:"games_desktop_load_error",GAMES_DESKTOP_NOTIF_POLL:"games_desktop_notif_poll",GAMES_DESKTOP_NATIVE_GAME_STATE:"games_desktop_native_game_state",GAMES_DESKTOP_HARDWARE_DATA:"games_desktop_hardware_data",GAMES_DESKTOP_CAN_INTERACT:"games_desktop_can_interact",GAMES_DESKTOP_BROWSER_INITIALIZED:"games_desktop_browser_initialized",GAMES_DESKTOP_CAUGHT_EXCEPTION:"games_desktop_caught_exception",GAMES_DESKTOP_UNCAUGHT_EXCEPTION:"games_desktop_uncaught_exception",GAMES_DESKTOP_ENTER_FULLSCREEN:"games_desktop_enter_fullscreen",GAMES_DESKTOP_LEAVE_FULLSCREEN:"games_desktop_leave_fullscreen",GAMES_DESKTOP_TOOK_SCREENSHOT:"games_desktop_took_screenshot",GAMES_DESKTOP_SCREENSHOT_NUX_SHOWN:"games_desktop_screenshot_nux_shown",GAMES_DESKTOP_PROMO_MODAL_WINDOW_IMPRESSION:"games_desktop_promo_modal_window_impression",GAMES_DESKTOP_FEED_DIALOG:"games_desktop_feed_dialog",GAMES_DESKTOP_GAMER_CHAT_IMPRESSION:"games_desktop_gamer_chat_impression",GAMES_DESKTOP_ERROR_BOUNDARY_CATCH:"games_desktop_error_boundary_catch",GAMES_DESKTOP_LIVE_STATE:"games_desktop_live_state",ARCADE_USER_DROPDOWN_CLICK:"arcade_user_dropdown_click",ARCADE_ABOUT_VIEW_CLICK:"arcade_about_view_click",ARCADE_CONTACT_FORM_CLICK:"arcade_contact_form_click",ARCADE_BB_NOTIFICATIONS_CLICK:"arcade_bb_notifications_click",ARCADE_LHC_BROWSE_CLICK:"arcade_lhc_browse_click",ARCADE_LHC_GO_LIVE_CLICK:"arcade_lhc_go_live_click",ARCADE_LHC_INSTANT_GAMES_CLICK:"arcade_lhc_instant_games_click",ARCADE_LHC_WATCH_CLICK:"arcade_lhc_watch_click",ARCADE_LHC_MYGAMES_CLICK:"arcade_lhc_mygames_click",ARCADE_LHC_FEED_CLICK:"arcade_lhc_feed_click",ARCADE_LHC_PLAYQUEUE_CLICK:"arcade_lhc_playqueue_click",ARCADE_MYGAMES_DD_CLICK_DETAILS:"arcade_mygames_dd_click_details",ARCADE_MYGAMES_DD_CLICK_FOOTER:"arcade_mygames_dd_click_footer",ARCADE_HOMEPAGE_DD_CLICK_DETAILS:"arcade_homepage_dd_click_details",ARCADE_HOMEPAGE_DD_CLICK_FOOTER:"arcade_homepage_dd_click_footer",ARCADE_PAYMENT_WEBSITE_CLICK:"arcade_payment_website_click",ARCADE_SEARCH_DD_CLICK_DETAILS:"arcade_search_dd_click_details",ARCADE_SEARCH_DD_CLICK_FOOTER:"arcade_search_dd_click_footer",ARCADE_GAMETILE_GAMETAG_CLICK:"arcade_gametile_gametag_click",ARCADE_GAMETILE_XOUT_CLICK:"arcade_gametile_xout_click",ARCADE_DD_XOUT_CLICK:"arcade_dd_xout_click",ARCADE_DD_PLAYNOW_CLICK:"arcade_dd_playnow_click",ARCADE_DD_GAME_UNSAVED:"arcade_dd_game_unsaved",ARCADE_DD_GAME_SAVED:"arcade_dd_game_saved",ARCADE_DD_SLIDES_CLICK_RIGHT:"arcade_dd_slides_click_right",ARCADE_DD_SLIDES_CLICK_LEFT:"arcade_dd_slides_click_left",ARCADE_DD_SCREENSHOT_CLICK:"arcade_dd_screenshot_click",ARCADE_WELCOME_OVERLAY_IMPRESSION:"arcade_welcome_overlay_impression",ARCADE_NUX_TOUR_DISMISSED:"arcade_nux_tour_dismissed",ARCADE_NUX_TOUR_STARTED:"arcade_nux_tour_started",ARCADE_NUX_TOUR_COMPLETED:"arcade_nux_tour_completed",ARCADE_AUTOMATIC_GAME_LAUNCH:"arcade_automatic_game_launch",ARCADE_LIVESTREAM_CLICK:"arcade_livestream_click",ARCADE_LIVESTREAM_IMPRESSION:"arcade_livestream_impression",ARCADE_LIVESTREAM_MOUSEOVER:"arcade_livestream_mouseover",ARCADE_LIVESTREAM_WATCH_TIME:"arcade_livestream_watch_time",GAMES_RATING_PROMPT_CLOSE:"games_rating_prompt_close",GAMES_RATING_PROMPT_RATE:"games_rating_prompt_rate",GAMES_RATING_PROMPT_SHOW:"games_rating_prompt_show",GAMES_PERSONA_ADD_DIALOG_START:"games_persona_add_dialog_start",GAMES_RECOMMEND_PROMPT_RECOMMEND:"games_recommend_prompt_recommend",GAMES_RECOMMEND_PROMPT_SHOW:"games_recommend_prompt_show",GAMES_RECOMMEND_PROMPT_CLOSE:"games_recommend_prompt_close",GIULIANI_REPORT_SUBMITTED:"giuliani_report_submitted",CHANGED_APPCENTER_APPROVED_STATE:"changed_appcenter_approved_state",RESTRICTED_ORGANIC_RECOMMENDATIONS:"restricted_organic_recommendations",FEED_GAMES_DIGEST_SUBSCRIBED:"feed_games_digest_subscribe",FEED_GAMES_DIGEST_UNSUBSCRIBED:"feed_games_digest_unsubscribe",GAME_PLAYED_5S:"game_played_5s",GAME_PLAYED_10S:"game_played_10s",GAME_PLAYED_30S:"game_played_30s",GAME_PLAYED_1M:"game_played_1m",GAME_PLAYED_2M:"game_played_2m",GAME_PLAYED_5M:"game_played_5m",ARCADE_MIGRATION_PAGE_LOADED:"arcade_migration_page_loaded",ARCADE_MIGRATION_LAUNCH_CLICKED:"arcade_migration_launch_clicked",ARCADE_MIGRATION_MANUAL_BYPASS:"arcade_migration_manual_bypass",ARCADE_MIGRATION_AUTO_BYPASS:"arcade_migration_auto_bypass",GAME_TAB_REC_GRID_CONTENT_REQUESTED:"game_tab_rec_grid_content_requested",IMAGE_ASSET_CLICK:"image_asset_click",IMAGE_ASSET_IMPRESSION:"image_asset_impression",MOUSEOVER:"mouseover",MOUSEOUT:"mouseout",THROTTLED_CANVAS_VISIT:"throttled_canvas_visit",THROTTLED_APPCENTER_VISIT:"throttled_appcenter_visit",THROTTLED_OAUTH_VISIT:"throttled_oauth_visit",GAME_TIME_START:"game_time_start",GAME_TIME_END:"game_time_end",CHAINED_ARTICLE_APP_CENTER_IMPRESSION:"chained_article_app_center_impression",GAMES_UNHANDLED_JS_EXCEPTION:"games_unhandled_js_exception",GAMES_SHOW_GIFT_BUTTON:"games_show_gift_button",GAMES_SHOW_GIFT_BUTTON_CLICK:"games_show_gift_button_click",GAMES_BUY_GIFT:"games_buy_gift",GAMES_ACCEPT_GIFT:"games_accept_gift",GAMES_DECLINE_GIFT:"games_decline_gift",GAMES_RESPONSE_HEADER:"games_response_header",INSTANT_GAMES_TEEN_TARGETING:"instant_games_teen_targeting"})}),null);
__d("AppInstallLogger",["AppInstallLoggerEvents","Banzai","ErrorUtils"],(function a(b,c,d,e,f,g){var h="app_install";i.prototype.init=function(){"use strict";c("ErrorUtils").addListener(function(j){var k={error_message:j.message,error_type:j.name,error_data:JSON.stringify(j),stack_trace:j.stack};this.log(c("AppInstallLoggerEvents").GAMES_UNHANDLED_JS_EXCEPTION,null,k)}.bind(this))};i.prototype.log=function(event,j,k){"use strict";c("Banzai").post(h,babelHelpers["extends"]({app_id:j,event:event},k||{}))};function i(){"use strict"}f.exports=new i()}),null);
__d("XdArbiterBuffer",[],(function a(b,c,d,e,f,g){if(!b.XdArbiter)b.XdArbiter={_m:[],_p:[],register:function h(i,j,k){j=j||(/^apps\./.test(location.hostname)?"canvas":"tab");this._p.push([i,j,k]);return j},handleMessage:function h(i,j){this._m.push([i,j])}}}),null);
__d("CanvasIFrameLoader",["XdArbiterBuffer","Banzai","$"],(function a(b,c,d,e,f,g){c("XdArbiterBuffer");var h={loadFromForm:function j(k,l,m){var n=c("$")("iframe_canvas");if(l&&!i()){l.style.display="block";n.style.display="none";return}var o=Date.now();n.onload=function(){var p=Date.now(),q=p-o;c("Banzai").post("canvas_iframe_load",{app_id:m,iframe_time_to_load:q})};k.submit()}};function i(){try{var j=document.createElement("canvas");return Boolean(window.WebGLRenderingContext)&&Boolean(j.getContext("webgl")||j.getContext("experimental-webgl"))}catch(k){return false}}f.exports=h}),null);
__d("PlatformDialog",["cx","DOMEventListener","DOMEvent","CSS"],(function a(b,c,d,e,f,g,h){var i;j.getInstance=function(){"use strict";return i};function j(k,l,m){"use strict";i=this;this.$PlatformDialog1=k;this.$PlatformDialog2=l;this.$PlatformDialog3=false;c("DOMEventListener").add(this.$PlatformDialog1,"submit",function(n){if(this.$PlatformDialog3){new(c("DOMEvent"))(n).kill();return}this.$PlatformDialog3=true;if(m)c("CSS").addClass(k,"_32qa")}.bind(this))}j.prototype.getForm=function(){"use strict";return this.$PlatformDialog1};j.prototype.getDisplay=function(){"use strict";return this.$PlatformDialog2};j.prototype.hasBeenSubmitted=function(){"use strict";return this.$PlatformDialog3};j.RESPONSE="platform/dialog/response";f.exports=j}),null);
__d("PlatformBaseVersioning",["invariant","PlatformVersions","StrSet","getObjectValues"],(function a(b,c,d,e,f,g,h){var i=new(c("StrSet"))(c("getObjectValues")(c("PlatformVersions").versions)),j=location.pathname,k=j.substring(1,j.indexOf("/",1)),l=i.contains(k)?k:c("PlatformVersions").versions.UNVERSIONED;function m(j,p){if(p==c("PlatformVersions").versions.UNVERSIONED)return j;i.contains(p)||h(0);if(j.indexOf("/")!==0)j="/"+j;return"/"+p+j}function n(j){if(i.contains(j.substring(1,j.indexOf("/",1))))return j.substring(j.indexOf("/",1));return j}var o={addVersionToPath:m,getLatestVersion:function p(){return c("PlatformVersions").LATEST},versionAwareURI:function p(q){return q.setPath(m(q.getPath(),l))},versionAwarePath:function p(j){return m(j,l)},getUnversionedPath:n};f.exports=o}),null);
__d("Popup",[],(function a(b,c,d,e,f,g){var h={open:function i(j,k,l,m){var n=document.body,o="screenX"in window?window.screenX:window.screenLeft,p="screenY"in window?window.screenY:window.screenTop,q="outerWidth"in window?window.outerWidth:n.clientWidth,r="outerHeight"in window?window.outerHeight:n.clientHeight-22,s=Math.floor(o+(q-k)/2),t=Math.floor(p+(r-l)/2.5),u=["width="+k,"height="+l,"left="+s,"top="+t,"scrollbars"];return window.open(j,m||"_blank",u.join(","))}};f.exports=h}),null);
__d("PopupWindow",["DOMDimensions","DOMQuery","Layer","Popup","getViewportDimensions"],(function a(b,c,d,e,f,g){var h={_opts:{allowShrink:true,strategy:"vector",timeout:100,widthElement:null},init:function i(j){Object.assign(h._opts,j);setInterval(h._resizeCheck,h._opts.timeout)},_resizeCheck:function i(){var j=c("getViewportDimensions")(),k=h._getDocumentSize(),l=c("Layer").getTopmostLayer();if(l){var m=l.getRoot().firstChild,n=c("DOMDimensions").getElementDimensions(m);n.height+=c("DOMDimensions").measureElementBox(m,"height",true,true,true);n.width+=c("DOMDimensions").measureElementBox(m,"width",true,true,true);k.height=Math.max(k.height,n.height);k.width=Math.max(k.width,n.width)}var o=k.height-j.height,p=k.width-j.width;if(p<0&&!h._opts.widthElement)p=0;p=p>1?p:0;if(!h._opts.allowShrink&&o<0)o=0;if(o||p)try{window.console&&window.console.firebug;window.resizeBy(p,o);if(p)window.moveBy(p/-2,0)}catch(q){}},_getDocumentSize:function i(){var j=c("DOMDimensions").getDocumentDimensions();if(h._opts.strategy==="offsetHeight")j.height=document.body.offsetHeight;if(h._opts.widthElement){var k=c("DOMQuery").scry(document.body,h._opts.widthElement)[0];if(k)j.width=c("DOMDimensions").getElementDimensions(k).width}var l=b.Dialog;if(l&&l.max_bottom&&l.max_bottom>j.height)j.height=l.max_bottom;return j},open:function i(j,k,l,m){return c("Popup").open(j,l,k,m)}};f.exports=h}),null);
__d("PlatformDialogClient",["Arbiter","AsyncDialog","AsyncRequest","DOMEventListener","guid","PlatformBaseVersioning","PlatformDialog","PopupWindow","QueryString","URI","UserAgent_DEPRECATED"],(function a(b,c,d,e,f,g){var h=575,i="FB_DIALOG_RESPONSE";c("AsyncDialog").getLoadingDialog().setWidth(h);c("DOMEventListener").add(window,"message",function(event){if(/\.facebook\.com$/.test(event.origin)&&new RegExp("^"+i+":").test(event.data))c("Arbiter").inform(c("PlatformDialog").RESPONSE,JSON.parse(event.data.substr(i.length+1)))});var j={};c("Arbiter").subscribe(c("PlatformDialog").RESPONSE,function(event,m){var n=m.state;if(j[n]){j[n].callback(m);m.state=j[n].state;delete j[n]}},c("Arbiter").SUBSCRIBE_NEW);function k(m){return function(){c("Arbiter").inform(c("PlatformDialog").RESPONSE,babelHelpers["extends"]({state:m},l.REQUEST_ABORTED_ERROR))}}var l={REQUEST_ABORTED_ERROR:{error_code:-200,error_message:"Request aborted."},async:function m(n,o,p){var q=c("guid")(),r=o.state;o.state=q;o.redirect_uri=new(c("URI"))("/dialog/return/arbiter").setSubdomain("www").setFragment(c("QueryString").encode({origin:o.redirect_uri})).getQualifiedURI().toString();o.display="async";j[q]={callback:p||function(){},state:r};c("AsyncDialog").send(new(c("AsyncRequest"))(this.getURI(n,o)).setMethod("GET").setReadOnly(true).setAbortHandler(k(q)))},popup:function m(n,o,p,q,r){var s=c("guid")(),t=p.state;p.state=s;p.client_id=p.app_id=o;p.redirect_uri=new(c("URI"))("/dialog/return/arbiter").setSecure(c("URI").getRequestURI().isSecure()).setSubdomain("www").setFragment(c("QueryString").encode({origin:p.redirect_uri})).addQueryData(q||{}).addQueryData({relation:"opener",close:true}).toString();p.display=c("UserAgent_DEPRECATED").mobile()?"touch":"popup";j[s]={callback:r||function(){},state:t};var u=c("URI").getRequestURI(),v=u.getDomain(),w=v.replace("developers","www");c("PopupWindow").open(new(c("URI"))(this.getURI(n,p)).setDomain(w).setProtocol("https").toString(),210,h)},getURI:function m(n,o){if(o.version){var p=new(c("URI"))("/"+o.version+"/dialog/"+n);delete o.version;return p.addQueryData(o)}return c("PlatformBaseVersioning").versionAwareURI(new(c("URI"))("/dialog/"+n).addQueryData(o))}};f.exports=l}),null);
__d("PlatformElementXOut.react",["AsyncRequest","DOM","DOMContainer.react","GamesXOut.react","React","ReactDOM","XPlatformXOutableElementController"],(function a(b,c,d,e,f,g){var h,i,j=c("React").PropTypes;h=babelHelpers.inherits(k,c("React").Component);i=h&&h.prototype;function k(){var l,m;"use strict";for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return m=(l=i.constructor).call.apply(l,[this].concat(o)),this.$PlatformElementXOut1=function(){var q=c("XPlatformXOutableElementController").getURIBuilder().setEnum("type",this.props.type).setInt("fbid",this.props.fbid).getURI();new(c("AsyncRequest"))(q).setMethod("POST").send();var r=c("ReactDOM").findDOMNode(this).parentNode.parentNode;c("ReactDOM").unmountComponentAtNode(r);c("DOM").remove(r)}.bind(this),m}k.prototype.render=function(){"use strict";var l=c("React").createElement(c("DOMContainer.react"),null,this.props.domChild);return c("React").createElement(c("GamesXOut.react"),{onClick:this.$PlatformElementXOut1},l)};k.propTypes={type:j.string.isRequired,fbid:j.string.isRequired,domChild:j.object.isRequired};f.exports=k}),null);
__d("CanvasNavigationFullScreen",["cx","AppInstallLogger","AppInstallLoggerEvents","Arbiter","CSS","Event","FullScreen"],(function a(b,c,d,e,f,g,h){var i=false,j=null,k={initLink:function l(m,n){if(i)return;else i=true;j=m;c("CSS").conditionClass(n,"_4-os",c("FullScreen").isSupported());c("Event").listen(n,"click",this.setFullScreen.bind(null,true));c("FullScreen").subscribe("changed",function(){if(c("FullScreen").isFullScreen())c("Arbiter").inform("canvas.enter_fullscreen");else c("Arbiter").inform("canvas.exit_fullscreen")})},isSupported:function l(){var m=i&&c("FullScreen").isSupported();return!!m},getFullScreen:function l(){return!!c("FullScreen").isFullScreen()},setFullScreen:function l(m){var n=true;if(m){c("AppInstallLogger").log(c("AppInstallLoggerEvents").RHC_SETTINGS_UNIT_APP_FULLSCREENED,j);n=c("FullScreen").enableFullScreen(document.getElementById("iframe_canvas"))}else n=c("FullScreen").disableFullScreen();return n}};f.exports=k}),null);
__d("XAppFriendsController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("/platform/games/appfriends/",{app_id:{type:"Int",required:true}})}),null);
__d("CanvasPresenceController",["Arbiter","AsyncRequest","AvailableListConstants","AvailableList","PresenceStatus","XAppFriendsController"],(function a(b,c,d,e,f,g){var h=60*1e3,i=false,j=[],k=0,l,m,n,o;function p(){var u=0;j.forEach(function(v){if(c("PresenceStatus").get(v)==c("AvailableListConstants").ACTIVE)u++});if(n===undefined||n!==u>1){n=u>1;c("Arbiter").inform("canvas.friendsOnlineUpdated",n)}}function q(u){var v=c("XAppFriendsController").getURIBuilder().setInt("app_id",k).getURI();new(c("AsyncRequest"))().setURI(v).setHandler(function(w){j=w.payload.ids;if(u)u();p()}).send()}function r(){if(k===0){o=r;return}i=true;q(function(){l=setInterval(q,h);m=c("AvailableList").subscribe(c("AvailableListConstants").ON_AVAILABILITY_CHANGED,p)})}function s(){i=false;clearInterval(l);c("AvailableList").unsubscribe(m)}var t={setAppID:function u(v){k=v;if(o)o()},setAppFriends:function u(v){j=v},useFriendsOnline:function u(v){if(v==i)return;if(v)r();else s()}};f.exports=t}),null);
__d("XPendingSyncRequestsController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("/platform/games/sync_requests/pending_list/",{app_id:{type:"Int",required:true}})}),null);
__d("CanvasSyncRequestsController",["Arbiter","AsyncRequest","ChannelConstants","SyncRequestStatusEnum","XPendingSyncRequestsController"],(function a(b,c,d,e,f,g){var h={},i=false,j=0,k;function l(q){if(n(q))m(q);h[q.id]=q;q.timer=setTimeout(function(){q.status=c("SyncRequestStatusEnum").EXPIRED;o(q)},q.timeout*1e3)}function m(q){clearTimeout(h[q.id].timer);delete h[q.id]}function n(q){return h[q.id]!==undefined}function o(q){if(!n(q))return;if(q.status!=c("SyncRequestStatusEnum").PENDING){var r={id:q.id,status:c("SyncRequestStatusEnum").namesByValue[q.status]};c("Arbiter").inform("canvas.syncRequestUpdated",r);m(q)}}c("Arbiter").subscribe(c("ChannelConstants").getArbiterType("sync_request_created"),function(q,r){return l(r.obj)});c("Arbiter").subscribe(c("ChannelConstants").getArbiterType("sync_request_updated"),function(q,r){return o(r.obj)});var p={setAppID:function q(r){j=r;if(k)k()},initPendingSyncRequests:function q(){if(i)return;if(j===0){k=p.initPendingSyncRequests;return}i=true;var r=c("XPendingSyncRequestsController").getURIBuilder().setInt("app_id",j).getURI();new(c("AsyncRequest"))().setURI(r).setHandler(function(s){s.getPayload().forEach(l)}).send()}};f.exports=p}),null);
__d("JSONRPC",["Log"],(function a(b,c,d,e,f,g){function h(i){"use strict";this.$JSONRPC1=0;this.$JSONRPC2={};this.remote=function(j){this.$JSONRPC3=j;return this.remote}.bind(this);this.local={};this.$JSONRPC4=i}h.prototype.stub=function(i){"use strict";this.remote[i]=function(){var j={jsonrpc:"2.0",method:i};for(var k=arguments.length,l=Array(k),m=0;m<k;m++)l[m]=arguments[m];if(typeof l[l.length-1]=="function"){j.id=++this.$JSONRPC1;this.$JSONRPC2[j.id]=l.pop()}j.params=l;this.$JSONRPC4(JSON.stringify(j),this.$JSONRPC3||{method:i})}.bind(this)};h.prototype.read=function(i,j){"use strict";var k=JSON.parse(i),l=k.id;if(!k.method){if(!this.$JSONRPC2[l]){c("Log").warn("Could not find callback %s",l);return}var m=this.$JSONRPC2[l];delete this.$JSONRPC2[l];delete k.id;delete k.jsonrpc;m(k);return}var n=this,o=this.local[k.method],p;if(l)p=function p(s,t){var u={jsonrpc:"2.0",id:l};u[s]=t;setTimeout(function(){n.$JSONRPC4(JSON.stringify(u),j)},0)};else p=function p(){};if(!o){c("Log").error('Method "%s" has not been defined',k.method);p("error",{code:-32601,message:"Method not found",data:k.method});return}k.params.push(p.bind(null,"result"));k.params.push(p.bind(null,"error"));try{var q=o.apply(j||null,k.params);if(typeof q!=="undefined")p("result",q)}catch(r){c("Log").error("Invokation of RPC method %s resulted in the error: %s",k.method,r.message);p("error",{code:-32603,message:"Internal error",data:r.message})}};f.exports=h}),null);
__d("XdArbiter",["Arbiter","Log","QueryString","Queue"],(function a(b,c,d,e,f,g){var h=/^apps\./.test(location.hostname)?"canvas":"tab",i={},j=[],k=new(c("Queue"))(),l={setRpcHandler:function n(o){k.start(o)},handleMessage:function n(o,p,q){try{if(typeof o=="string"){if(/^FB_RPC:/.test(o)){k.enqueue([o.substring(7),{origin:p,source:q||i[h]}]);return}o=JSON.parse(o)}if(!o.method)return;if(typeof o.params=="string")o.params=JSON.parse(o.params);c("Arbiter").inform("Connect.Unsafe."+o.method,o.params,c("Arbiter").BEHAVIOR_PERSISTENT)}catch(r){}},register:function n(o,p,q){var r=p||h;c("Arbiter").inform("XdArbiter/register",{origin:q});i[r]=o;i[q]=o;c("Arbiter").inform("XdArbiter.register",r,c("Arbiter").BEHAVIOR_PERSISTENT);this.scheduleDispatch();return r},scheduleDispatch:function n(){var o=this,p=42;function q(){var r=j.shift();if(r)o.send.apply(o,r);if(j.length)setTimeout(q,p)}setTimeout(q,p)},hasProxy:function n(o){var p=o||h;return!!i[p]},send:function n(o,p,q){var r=q in i?q:h;p=p||i[r];if(typeof o!=="string")o=c("QueryString").encode(o);try{p.proxyMessage(o,q)}catch(s){c("Log").debug("XdArbiter: Proxy for %s not available, page might have been navigated: %s",r,s.message);delete i[r]}return true}},m=b.XdArbiter;b.XdArbiter=l;if(m){if(m._p.length)while(m._p.length)l.register.apply(l,m._p.shift());if(m._m.length)while(m._m.length)l.handleMessage.apply(l,m._m.shift())}f.exports=l}),null);
__d("PlatformAppController",["errorCode","Arbiter","AsyncRequest","Bootloader","CanvasNavigationFullScreen","CanvasPresenceController","CSS","CurrentUser","Dialog","JSONRPC","PlatformDialogClient","PlatformDialogWhitelistedParams","PlatformDialogABTest","Style","URI","Vector","XdArbiter","CanvasSyncRequestsController","ge"],(function a(b,c,d,e,f,g,h){var i={oauth:true,test_flow:true,app_requests:true,game_group_create:true,game_group_join:true,gift:true,feed:true,share:true,share_open_graph:true,sync_request:true,payer_promotion:true,payerpromotion:true,payment_module:true},j,k,l=true,m=0,n=false,o,p=false,q=window._cstart,r=0,s,t,u={},v=new(c("JSONRPC"))(function(I,J){c("XdArbiter").send("FB_RPC:"+I,J.source||c("ge")(j).contentWindow.frames["fb_xdm_frame_"+location.protocol.replace(":","")],J.origin||k)});c("Arbiter").subscribe("XdArbiter/register",function(I,J){if(s&&J.origin!=k)new(c("AsyncRequest"))().setURI("/platform/app_owned_url_check/").setData({appid:s,url:J.origin}).setHandler(function(K){var L=K.getPayload();if(L.allowed)k=J.origin}).send()});function w(I){var J=parseInt(I.x,10),K=parseInt(I.y,10);if(J>=0&&K>=0)window.scrollTo(J,K)}function x(I){var J=c("ge")(I.frame.replace(/_fb_https$/,""));if(J){c("CSS").addClass(J,"noresize");J.style.height=I.height+"px"}}function y(){var I=c("ge")(j),J=0,K=0;while(I){J+=parseInt(I.offsetLeft,10);K+=parseInt(I.offsetTop,10);I=I.offsetParent}var L=c("Vector").getViewportDimensions(),M=c("Vector").getScrollPosition();return{clientWidth:L.x,clientHeight:L.y,scrollLeft:M.x,scrollTop:M.y,offsetLeft:J,offsetTop:K}}function z(I,J){if(!c("PlatformDialogWhitelistedParams")[J])return I;var K={};c("PlatformDialogWhitelistedParams").common.forEach(function(L){K[L]=I[L]});c("PlatformDialogWhitelistedParams")[J].forEach(function(L){K[L]=I[L]});return K}function A(I,J,K){var L=I.method;delete I.method;delete I.access_token;delete I.next;delete I.context;delete I.locale;I.display="async";if(!/^[\w\-_.]+$/.test(L))throw new Error("Malformed method name");Object.keys(I).forEach(function(Q){if(/[\s\x80-\x9f]/.test(Q))delete I[Q];else if(/\./.test(Q)){var R=Q.replace(/\./g,"_");if(Object.prototype.hasOwnProperty.call(I,R))delete I[Q]}});if(!I.redirect_uri||new(c("URI"))(I.redirect_uri).getOrigin()!=new(c("URI"))(this.origin).getOrigin())I.redirect_uri=this.origin;if(L=="apprequests"){L="app_requests";I.context="canvas_app_requests"}if(L=="pay"){var M=I.action;if((M==="purchaseitem"||M==="purchase_item")&&t&&t.usePaymentModules){L="payment_module";I.action="payment_module"}if(M==="purchaseitem"||M==="purchase_item"||M==="purchaseiap")i[L]=true;else i[L]=false}if(L=="fbpromotion"){L="payer_promotion";I.action="payer_promotion"}if(L==="stream_publish")L="stream.publish";if(L=="permissions.oauth"||L=="permissions.request"||L=="oauth")L="oauth";if(L==="stream.publish")i[L]=!!c("PlatformDialogABTest").share_dialog_delegate_stream_publish_dialog;I=z(I,L);if(i[L]){var N=I.redirect_uri;c("PlatformDialogClient").async(L,I,function(Q){if(Q.error_code==1340004)if(c("CurrentUser").getID()&&c("CurrentUser").getID()!="0")J(Q);else new(c("URI"))("/login.php").addQueryData("next",c("URI").getRequestURI().toString()).go();else if(L=="app_requests"&&Q.error_code==1349146)B(L,I,J,Q,N);else J(Q)});return}var O=new(c("URI"))("/fbml/ajax/dialog/"+L.replace(/\./g,"_")).setQueryData(I),P=new(c("AsyncRequest"))().setMethod("GET").setReadOnly(true).setURI(O).setAbortHandler(function(){K(c("PlatformDialogClient").REQUEST_ABORTED_ERROR)});new(c("Dialog"))().setAsync(P).setModal(true).setWideDialog(true).show().setCloseHandler(J)}function B(I,J,K,L,M){J.redirect_uri=M;c("PlatformDialogClient").async("oauth",J,function(N){if(N.error)K(L);else{J.redirect_uri=M;c("PlatformDialogClient").async(I,J,function(O){K(O)})}})}function C(I){n=I}function D(I,J){p=I;o=J}v.stub("navigate");function E(I){if(n){v.remote.navigate(I);return true}return false}v.stub("enterFullScreen");c("Arbiter").subscribe("canvas.enter_fullscreen",v.remote.enterFullScreen);v.stub("exitFullScreen");c("Arbiter").subscribe("canvas.exit_fullscreen",v.remote.exitFullScreen);v.stub("fireEvent");c("Arbiter").subscribe("canvas.friendsOnlineUpdated",v.remote.fireEvent.bind(v.remote));c("Arbiter").subscribe("canvas.syncRequestUpdated",v.remote.fireEvent.bind(v.remote));function F(I){var J=I.time-q+r;switch(I.name){case"StopIframeAppTtiTimer":r=J;return{time_delta_ms:J,type:"tti"};case"StartIframeAppTtiTimer":q=I.time;break;case"RecordIframeAppTti":if(p)c("Bootloader").loadModules(["CanvasIFrameLogger"],function(K){K.log(J,I.appId,o)},"PlatformAppController");return{time_delta_ms:J,type:"tti"}}}v.local.setSize=x;v.local.getPageInfo=y;v.local.scrollTo=w;v.local.showDialog=A;v.local.setNavigationEnabled=C;v.local.isFullScreenSupported=c("CanvasNavigationFullScreen").isSupported;v.local.getFullScreen=c("CanvasNavigationFullScreen").getFullScreen;v.local.logTtiMessage=F;v.local.useFriendsOnline=c("CanvasPresenceController").useFriendsOnline.bind(c("CanvasPresenceController"));v.local.initPendingSyncRequests=c("CanvasSyncRequestsController").initPendingSyncRequests.bind(c("CanvasSyncRequestsController"));c("XdArbiter").setRpcHandler(function(I){v.read.apply(v,I)});v.stub("hidePluginObjects");c("Arbiter").subscribe("layer_shown",function(){if(++m===1)if(l)v.remote.hidePluginObjects();else c("Style").set(c("ge")("pagelet_canvas_content"),"visibility","hidden")});v.stub("showPluginObjects");c("Arbiter").subscribe("layer_hidden",function(){if(--m===0)if(l)v.remote.showPluginObjects();else c("Style").set(c("ge")("pagelet_canvas_content"),"visibility","");else if(m<0)m=0});function G(I){u[I.name]=I;var J=c("ge")(I.name);if(J)j=J}var H={setActiveIframeAndAppID:function I(J,K,L){j=J;k=K;s=L;c("CanvasPresenceController").setAppID(s);c("CanvasSyncRequestsController").setAppID(s)},setInformAppOnLayerChange:function I(J){l=J},setNavigationEnabled:C,setTtiEnabled:D,handleNavigation:E,init:G,getFrameParams:function I(J){return u[J]},setConfig:function I(J){t=J}};b.PlatformAppController=H;f.exports=H}),null);
__d("FavIcon",["DOM"],(function a(b,c,d,e,f,g){var h,i,j;function k(){var m=c("DOM").scry(document.head,"link");if(m)m.forEach(function(n){if(n.rel.indexOf("icon")!=-1||n.rel.indexOf("shortcut icon")!=-1)c("DOM").remove(n)})}var l={isToggledResource:function m(){if(j&&h.href===j)return true;return false},set:function m(n){if(h)c("DOM").remove(h);k();h=c("DOM").create("link",{type:"image/x-icon",rel:"icon",href:n});c("DOM").appendContent(c("DOM").find(document,"head"),h)},setToggleResources:function m(n,o){h=document.querySelector('link[rel*=icon][href*=".ico"]');if(!h)return;i=o||h.href;j=n},toggle:function m(){if(!h||!j)return;if(h.href===i){this.set(j);return}this.set(i)},toggleSet:function m(n){if(!h||!j||!i)return;var o=n?j:i;if(h.href!==o)this.set(o)}};f.exports=l}),null);
__d("PlatformCanvasController",["fbt","PlatformAppController","DOMEventListener","URI","CSS","DOM","DocumentTitle","FavIcon","ge","AsyncRequest","UserActivity","UIPagelet","PageTransitions"],(function a(b,c,d,e,f,g,h){var i="iframe_canvas",j=24e4,k=5e3,l=6e4,m,n,o,p,q,r,s;function t(C){var D=c("ge")("pagelet_canvas_content");c("CSS").hide(D);c("DOM").scry(D,"iframe").forEach(function(E){E.src=""});c("DOM").setContent(c("ge")("canvas_throbber_text"),h._("Loading {app-name}",[h.param("app-name",C)]))}function u(C,D,E,F){var G=c("ge")("pagelet_canvas_footer_content"),H=c("ge")("pagelet_canvas_content");c("DOM").setContent(H,C);c("DOM").setContent(G,D);c("CSS").show(H);c("DocumentTitle").set(E);c("FavIcon").set(F)}function v(C){if(C.getSubdomain()!="apps")return false;var D,E=c("DOM").scry(document,"a[data-appname]");for(var F=0;F<E.length;F++)if(E[F].href==C){D=E[F].getAttribute("data-appname");break}if(!D)return false;var G=C.getPath().split("/")[1];if(G=="l.php")return false;t(D);var H=C.getUnqualifiedURI();new(c("AsyncRequest"))().setURI(new(c("URI"))("/ajax/canvas.php")).setData({fb_app_name:G,uri:H.toString()}).setMethod("GET").setReadOnly(true).setStatusElement("canvas_throbber").setHandler(function(I){var J=I.getPayload();c("CSS").conditionClass(document.body,"center_fixed_width_app",!J.is_liquid);u(J.main_html,J.footer_html,J.page_title,J.favicon);c("PageTransitions").transitionComplete()}).send();return true}function w(C){if(!String(C.getPath()).startsWith("/"+o+"/")&&!String(C.getPath()).startsWith("/"+n+"/"))return false;C=C.getUnqualifiedURI();C.setPath("/"+C.getPath().split("/").slice(2).join("/"));return c("PlatformAppController").handleNavigation(C.toString())}function x(C){return w(C)||v(C)}function y(){var C=Date.now();if(m>0&&C-p>=j){p=C;c("UIPagelet").loadFromEndpoint("WebEgoPane","pagelet_ego_pane",{pid:9,data:[n,++q]},{bundle:false})}}c("UserActivity").subscribe(function(){var C=Date.now();if(C-p>=j-k)setTimeout(y,k)});function z(){var C=Date.now();if(m>0&&C-r>=l){r=C;c("UIPagelet").loadFromEndpoint("CanvasShowcaseSliderPagelet","pagelet_canvas_showcase",{pid:129,data:[n,++s]},{bundle:false})}}function A(C,D,E,F,G){m=E;p=Date.now();q=0;r=Date.now();s=0;if(n&&n!==C)y();n=C;o=D;var H=c("ge")(i);c("PlatformAppController").setConfig(G);if(H)c("DOMEventListener").add(H,"load",function(){c("PlatformAppController").setNavigationEnabled(false)});if(G&&G.displayShowcase)setInterval(z,l);c("PlatformAppController").setInformAppOnLayerChange(!F);c("PlatformAppController").setNavigationEnabled(false);c("PageTransitions").registerHandler(x)}var B={setup:A};f.exports=B}),null);