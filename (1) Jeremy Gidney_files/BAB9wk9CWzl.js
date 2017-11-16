if (self.CavalryLogger) { CavalryLogger.start_js(["58R6D"]); }

__d("VideoEditTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function a(b,c,d,e,f,g){"use strict";function h(){this.clear()}h.prototype.log=function(){c("GeneratedLoggerUtils").log("logger:VideoEditLoggerConfig",this.$VideoEditTypedLogger1,c("Banzai").BASIC)};h.prototype.logVital=function(){c("GeneratedLoggerUtils").log("logger:VideoEditLoggerConfig",this.$VideoEditTypedLogger1,c("Banzai").VITAL)};h.prototype.clear=function(){this.$VideoEditTypedLogger1={};return this};h.prototype.updateData=function(j){this.$VideoEditTypedLogger1=babelHelpers["extends"]({},this.$VideoEditTypedLogger1,j);return this};h.prototype.setCaptionsCount=function(j){this.$VideoEditTypedLogger1.captions_count=j;return this};h.prototype.setChangedTitle=function(j){this.$VideoEditTypedLogger1.changed_title=j;return this};h.prototype.setEmbeddable=function(j){this.$VideoEditTypedLogger1.embeddable=j;return this};h.prototype.setEvent=function(j){this.$VideoEditTypedLogger1.event=j;return this};h.prototype.setExpirationTime=function(j){this.$VideoEditTypedLogger1.expiration_time=j;return this};h.prototype.setExpirationType=function(j){this.$VideoEditTypedLogger1.expiration_type=j;return this};h.prototype.setExpiredNow=function(j){this.$VideoEditTypedLogger1.expired_now=j;return this};h.prototype.setFlow=function(j){this.$VideoEditTypedLogger1.flow=j;return this};h.prototype.setHasContentCategoryChanged=function(j){this.$VideoEditTypedLogger1.has_content_category_changed=j;return this};h.prototype.setHasContentTagsChanged=function(j){this.$VideoEditTypedLogger1.has_content_tags_changed=j;return this};h.prototype.setPublishNow=function(j){this.$VideoEditTypedLogger1.publish_now=j;return this};h.prototype.setSource=function(j){this.$VideoEditTypedLogger1.source=j;return this};h.prototype.setVC=function(j){this.$VideoEditTypedLogger1.vc=j;return this};h.prototype.setVideoID=function(j){this.$VideoEditTypedLogger1.video_id=j;return this};h.prototype.updateExtraData=function(j){j=c("nullthrows")(c("GeneratedLoggerUtils").serializeMap(j));c("GeneratedLoggerUtils").checkExtraDataFieldNames(j,i);this.$VideoEditTypedLogger1=babelHelpers["extends"]({},this.$VideoEditTypedLogger1,j);return this};h.prototype.addToExtraData=function(j,k){var l={};l[j]=k;return this.updateExtraData(l)};var i={captions_count:true,changed_title:true,embeddable:true,event:true,expiration_time:true,expiration_type:true,expired_now:true,flow:true,has_content_category_changed:true,has_content_tags_changed:true,publish_now:true,source:true,vc:true,video_id:true};f.exports=h}),null);
__d("ProgressiveDateAndTimePicker.react",["cx","fbt","InlineBlock.react","React","XUIProgressiveDatepicker.react","XUISelector.react","formatDate"],(function a(b,c,d,e,f,g,h,i){var j,k,l=c("XUISelector.react").Option,m=c("React").PropTypes;j=babelHelpers.inherits(n,c("React").Component);k=j&&j.prototype;function n(){var o,p;"use strict";for(var q=arguments.length,r=Array(q),s=0;s<q;s++)r[s]=arguments[s];return p=(o=k.constructor).call.apply(o,[this].concat(r)),this.state={datePickerResult:{year:this.props.initialYear,month:this.props.initialMonth,day:this.props.initialDay},hour:this.props.initialHour,minute:this.props.initialMinute},this.onDateChange=function(t){this.setState({datePickerResult:t},this.onDateAndTimeChange)}.bind(this),this.onDateAndTimeChange=function(){if(!this.props.onDateAndTimeChange)return;var t=this.state.datePickerResult,u=babelHelpers["extends"]({},t,{hour:this.state.hour,minute:this.state.minute});this.props.onDateAndTimeChange(u)}.bind(this),this.onHourChange=function(event){this.onSelectorChange(event,"hour")}.bind(this),this.onMinuteChange=function(event){this.onSelectorChange(event,"minute")}.bind(this),this.onSelectorChange=function(event,t){var u=event.target?event.target.value:event.value,v={};v[t]=u;this.setState(v,this.onDateAndTimeChange)}.bind(this),p}n.prototype.componentWillReceiveProps=function(o){"use strict";var p=this.state,q=p.datePickerResult;if(o.initialYear!==q.year||o.initialMonth!==q.month||o.initialDay!==q.day||o.initialHour!==p.hour||o.initialMinute!==p.minute)this.setState({datePickerResult:{year:o.initialYear,month:o.initialMonth,day:o.initialDay},hour:o.initialHour,minute:o.initialMinute})};n.prototype.render=function(){"use strict";var o,p;if(this.state.datePickerResult.day){var q=[c("React").createElement(l,{key:-1,value:-1},i._("Hour:"))];for(var r=0;r<24;r++){var s=new Date();s.setHours(r);var t=c("formatDate")(s,"g A");q.push(c("React").createElement(l,{key:r,value:r},t))}o=c("React").createElement(c("XUISelector.react"),{className:"_5vu1",disabled:!this.state.datePickerResult.day,maxheight:this.props.menuMaxHeight,name:this.props.inputPrefix+"_hour",onChange:this.onHourChange,value:this.state.hour},q)}if(this.state.hour!=-1){var u=[c("React").createElement(l,{key:-1,value:-1},i._("Minute:"))];for(r=0;r<60;r+=10){var v="00";if(r>0)v=r;u.push(c("React").createElement(l,{key:r,value:r},v))}p=c("React").createElement(c("XUISelector.react"),{className:"_5vu1",disabled:this.state.hour==-1,maxheight:this.props.menuMaxHeight,name:this.props.inputPrefix+"_minute",onChange:this.onMinuteChange,value:this.state.minute},u)}return c("React").createElement(c("InlineBlock.react"),{className:this.props.className},c("React").createElement(c("XUIProgressiveDatepicker.react"),babelHelpers["extends"]({},this.props,{setDateTo:this.state.datePickerResult,onDateChange:this.onDateChange})),o,p)};n.propTypes=babelHelpers["extends"]({},c("XUIProgressiveDatepicker.react").propTypes,{initialHour:m.number,initialMinute:m.number});n.defaultProps={initialYear:0,initialMonth:0,initialDay:0,initialHour:-1,initialMinute:-1,maxTime:Date.now()/1e3,minTime:new Date(1906,0,0,0,0).getTime()/1e3};f.exports=n}),null);
__d("VideoEditEvent",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({JS_LOADED:"js_loaded",PAGE_LOAD_STARTED:"page_loaded_started",EDIT_VIDEO_ASSET:"edit_video_asset",PAGE_LOADED:"page_loaded",SAVE_ERROR:"save_error",SAVE_START:"save_start",PREFERRED_THUMBNAIL_CHANGE:"preferred_thumbnail_change",THUMBNAIL_CREATE_STARTED:"thumbnail_create_started",THUMBNAIL_CREATED:"thumbnail_created",CLICK_PROFILE_ADD_CUSTOM_THUMBNAIL:"click_profile_add_custom_thumbnail",UPLOAD_PROFILE_CUSTOM_THUMBNAIL:"upload_profile_custom_thumbnail",CANCEL_UPLOAD_PROFILE_CUSTOM_THUMBNAIL:"cancel_upload_profile_custom_thumbnail",SAVE_PROFILE_CUSTOM_THUMBNAIL:"save_profile_custom_thumbnail",DID_NOT_USE_PROFILE_CUSTOM_THUMBNAIL:"did_not_use_custom_thumbnail",SAVE_SUCCESS:"save_success",CTA_UNEXPECTED:"cta_unexpected",CTA_CHANGE_REQUEST:"cta_change_request",VIDEO_DELETE:"video_delete",CAPTIONS_UPLOADED:"captions_uploaded",CAPTIONS_REMOVED:"captions_removed",CAPTIONS_UPDATED_DEFAULT_LOCALE:"captions_updated_default_locale",NO_EDIT_PERMISSION:"no_edit_permission",CANCEL:"cancel_flow",SAVE_CLICKED:"save_clicked",REQUEST_NEW_STORY:"new_story_requested",RECEIVED_NEW_STORY:"new_story_received",REPLACED_OLD_STORY:"old_story_replaced",ERROR_NO_NEW_STORY:"error_no_new_story",ROTATION_CHANGED:"rotation_changed"})}),null);
__d("VideoEditFlow",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({DIALOG:"dialog",FORM:"form"})}),null);