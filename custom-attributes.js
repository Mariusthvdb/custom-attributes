!function(){"use strict";var e=function(){return e=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},e.apply(this,arguments)};function t(e,t,n,o){return new(n||(n=Promise))((function(r,i){function s(e){try{c(o.next(e))}catch(e){i(e)}}function a(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((o=o.apply(e,t||[])).next())}))}function n(e,t){var n,o,r,i,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(s=0)),s;)try{if(n=1,o&&(r=2&a[0]?o.return:a[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;switch(o=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,o=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!((r=(r=s.trys).length>0&&r[r.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){s.label=a[1];break}if(6===a[0]&&s.label<r[1]){s.label=r[1],r=a;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(a);break}r[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(e){a=[6,e],o=0}finally{n=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}}"function"==typeof SuppressedError&&SuppressedError;var o="$",r=":host",i="invalid selector";function s(e,t,n,o,r){return void 0===r&&(r=!1),new Promise((function(s){var a=0,c=function(){var l=r?e.querySelectorAll(t):e.querySelector(t);r&&l.length||!r&&null!==l?s(l):++a<n?setTimeout(c,o):s(r?document.querySelectorAll(i):null)};c()}))}function a(e,t,n){return new Promise((function(o){var r=0,i=function(){var s=e.shadowRoot;s?o(s):++r<t?setTimeout(i,n):o(null)};i()}))}function c(e){return e instanceof Promise?e:Promise.resolve(e)}function l(e,i,c,l){return t(this,void 0,void 0,(function(){var t,_,u,O,h,f;return n(this,(function(n){switch(n.label){case 0:t=null,_=e.length,u=0,n.label=1;case 1:if(!(u<_))return[3,15];if(0!==u)return[3,8];if(e[u].length)return[3,5];if(i instanceof Document)throw new SyntaxError("You can not select a shadowRoot (".concat(o,") of the document."));return i.shadowRoot?[4,s(i.shadowRoot,e[++u],c,l)]:[3,3];case 2:return O=n.sent(),[3,4];case 3:O=null,n.label=4;case 4:return t=O,[3,7];case 5:return[4,s(i,e[u],c,l)];case 6:t=n.sent(),n.label=7;case 7:return[3,13];case 8:return[4,a(t,c,l)];case 9:return(h=n.sent())?[4,s(h,"".concat(r," ").concat(e[u]),c,l)]:[3,11];case 10:return f=n.sent(),[3,12];case 11:f=null,n.label=12;case 12:t=f,n.label=13;case 13:if(null===t)return[2,null];n.label=14;case 14:return u++,[3,1];case 15:return[2,t]}}))}))}function _(e,r,i,s){return t(this,void 0,void 0,(function(){var t,a,c,_;return n(this,(function(n){switch(n.label){case 0:t=function(e,t){return function(e){return e.split(",").map((function(e){return e.trim()}))}(e).map((function(e){var n=function(e){return e.split(o).map((function(e){return e.trim()}))}(e);return t(n)}))}(e,(function(e){if(!e[e.length-1].length)throw new SyntaxError(function(e,t){var n=t?" If you want to select a shadowRoot, use ".concat(t," instead."):"";return"".concat(e," cannot be used with a selector ending in a shadowRoot (").concat(o,").").concat(n)}("asyncQuerySelector","asyncShadowRootQuerySelector"));return e})),a=t.length,c=0,n.label=1;case 1:return c<a?[4,l(t[c],r,i,s)]:[3,4];case 2:if(_=n.sent())return[2,_];n.label=3;case 3:return c++,[3,1];case 4:return[2,null]}}))}))}function u(){for(var e=[],o=0;o<arguments.length;o++)e[o]=arguments[o];return t(this,void 0,void 0,(function(){var t,o,r,i,s;return n(this,(function(n){switch(n.label){case 0:return function(e){var t,n=e[0],o=e[1];return(t=n)&&(t instanceof Document||t instanceof Element)&&"string"==typeof o}(e)?(t=e[0],o=e[1],r=e[2],[4,_(o,t,(null==r?void 0:r.retries)||10,(null==r?void 0:r.delay)||10)]):[3,2];case 1:case 3:return[2,n.sent()];case 2:return i=e[0],s=e[1],[4,_(i,document,(null==s?void 0:s.retries)||10,(null==s?void 0:s.delay)||10)]}}))}))}var O=function(){function r(t,n){t instanceof Node||t instanceof Promise?(this._element=t,this._asyncParams=e({retries:10,delay:10},n||{})):(this._element=document,this._asyncParams=e({retries:10,delay:10},t||{}))}return Object.defineProperty(r.prototype,"element",{get:function(){return c(this._element).then((function(e){return e instanceof NodeList?e[0]||null:e}))},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,o,{get:function(){var e=this;return new r(c(this._element).then((function(t){return t instanceof Document||t instanceof ShadowRoot||null===t||t instanceof NodeList&&0===t.length?null:t instanceof NodeList?a(t[0],e._asyncParams.retries,e._asyncParams.delay):a(t,e._asyncParams.retries,e._asyncParams.delay)})),this._asyncParams)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"all",{get:function(){return c(this._element).then((function(e){return e instanceof NodeList?e:document.querySelectorAll(i)}))},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"asyncParams",{get:function(){return this._asyncParams},enumerable:!1,configurable:!0}),r.prototype.eq=function(e){return t(this,void 0,void 0,(function(){return n(this,(function(t){return[2,c(this._element).then((function(t){return t instanceof NodeList&&t[e]||null}))]}))}))},r.prototype.query=function(e){var t=this;return new r(c(this._element).then((function(n){return null===n||n instanceof NodeList&&0===n.length?null:n instanceof NodeList?s(n[0],e,t._asyncParams.retries,t._asyncParams.delay,!0):s(n,e,t._asyncParams.retries,t._asyncParams.delay,!0)})),this._asyncParams)},r}(),h=function(e,t){return h=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},h(e,t)},f=function(){return f=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},f.apply(this,arguments)};"function"==typeof SuppressedError&&SuppressedError;var E,A,d,I,v,N,L,p,R,y,m,b,H,D,T,S,g,w="$",G={retries:100,delay:50};!function(e){e.HOME_ASSISTANT="HOME_ASSISTANT",e.HOME_ASSISTANT_MAIN="HOME_ASSISTANT_MAIN",e.HA_DRAWER="HA_DRAWER",e.HA_SIDEBAR="HA_SIDEBAR"}(E||(E={})),function(e){e.PARTIAL_PANEL_RESOLVER="PARTIAL_PANEL_RESOLVER",e.HA_PANEL_LOVELACE="HA_PANEL_LOVELACE",e.HUI_ROOT="HUI_ROOT",e.HEADER="HEADER",e.HUI_VIEW="HUI_VIEW"}(A||(A={})),function(e){e.HA_MORE_INFO_DIALOG="HA_MORE_INFO_DIALOG",e.HA_DIALOG="HA_DIALOG",e.HA_DIALOG_CONTENT="HA_DIALOG_CONTENT",e.HA_MORE_INFO_DIALOG_INFO="HA_MORE_INFO_DIALOG_INFO",e.HA_DIALOG_MORE_INFO_HISTORY_AND_LOGBOOK="HA_DIALOG_MORE_INFO_HISTORY_AND_LOGBOOK",e.HA_DIALOG_MORE_INFO_SETTINGS="HA_DIALOG_MORE_INFO_SETTINGS"}(d||(d={})),function(e){e.ON_LOVELACE_PANEL_LOAD="onLovelacePanelLoad",e.ON_LOVELACE_MORE_INFO_DIALOG_OPEN="onLovelaceMoreInfoDialogOpen",e.ON_LOVELACE_HISTORY_AND_LOGBOOK_DIALOG_OPEN="onLovelaceHistoryAndLogBookDialogOpen",e.ON_LOVELACE_SETTINGS_DIALOG_OPEN="onLovelaceSettingsDialogOpen"}(I||(I={})),function(e){e.HOME_ASSISTANT="home-assistant",e.HOME_ASSISTANT_MAIN="home-assistant-main",e.HA_DRAWER="ha-drawer",e.HA_SIDEBAR="ha-sidebar",e.PARTIAL_PANEL_RESOLVER="partial-panel-resolver",e.HA_PANEL_LOVELACE="ha-panel-lovelace",e.HUI_ROOT="hui-root",e.HEADER=".header",e.HUI_VIEW="hui-view",e.HA_MORE_INFO_DIALOG="ha-more-info-dialog",e.HA_DIALOG="ha-dialog",e.HA_DIALOG_CONTENT=".content",e.HA_MORE_INFO_DIALOG_INFO="ha-more-info-info",e.HA_DIALOG_MORE_INFO_HISTORY_AND_LOGBOOK="ha-more-info-history-and-logbook",e.HA_DIALOG_MORE_INFO_SETTINGS="ha-more-info-settings"}(g||(g={}));var M,F=((v={})[E.HOME_ASSISTANT]={selector:g.HOME_ASSISTANT,children:{shadowRoot:{selector:w,children:(N={},N[E.HOME_ASSISTANT_MAIN]={selector:g.HOME_ASSISTANT_MAIN,children:{shadowRoot:{selector:w,children:(L={},L[E.HA_DRAWER]={selector:g.HA_DRAWER,children:(p={},p[E.HA_SIDEBAR]={selector:g.HA_SIDEBAR,children:{shadowRoot:{selector:w}}},p)},L)}}},N)}}},v),P=((R={})[A.PARTIAL_PANEL_RESOLVER]={selector:g.PARTIAL_PANEL_RESOLVER,children:(y={},y[A.HA_PANEL_LOVELACE]={selector:g.HA_PANEL_LOVELACE,children:{shadowRoot:{selector:w,children:(m={},m[A.HUI_ROOT]={selector:g.HUI_ROOT,children:{shadowRoot:{selector:w,children:(b={},b[A.HEADER]={selector:g.HEADER},b[A.HUI_VIEW]={selector:g.HUI_VIEW},b)}}},m)}}},y)},R),C={shadowRoot:{selector:w,children:(H={},H[d.HA_MORE_INFO_DIALOG]={selector:g.HA_MORE_INFO_DIALOG,children:{shadowRoot:{selector:w,children:(D={},D[d.HA_DIALOG]={selector:g.HA_DIALOG,children:(T={},T[d.HA_DIALOG_CONTENT]={selector:g.HA_DIALOG_CONTENT,children:(S={},S[d.HA_MORE_INFO_DIALOG_INFO]={selector:g.HA_MORE_INFO_DIALOG_INFO},S[d.HA_DIALOG_MORE_INFO_HISTORY_AND_LOGBOOK]={selector:g.HA_DIALOG_MORE_INFO_HISTORY_AND_LOGBOOK},S[d.HA_DIALOG_MORE_INFO_SETTINGS]={selector:g.HA_DIALOG_MORE_INFO_SETTINGS},S)},T)},D)}}},H)}},V=function(e,t,n,o){return void 0===n&&(n=null),void 0===o&&(o=!1),Object.entries(t||{}).reduce((function(t,r){var i=r[0],s=r[1];if(s.selector===w&&n)return s.children?f(f({},t),V(e,s.children,n,!0)):t;var a=n?n.then((function(t){return u(t,(n=s.selector,o?"$ "+n:n),e);var n})):u(s.selector,e);return t[i]={element:a,children:V(e,s.children,a),selector:new O(a,e)},t}),{})},B=function(e,t){for(var n=0,o=Object.entries(t);n<o.length;n++){var r=o[n];if(r[0]===e)return r[1];var i=B(e,r[1].children);if(i)return i}},j=function(e,t){return Object.keys(e).reduce((function(e,n){var o=B(n,t);o.children;var r=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n}(o,["children"]);return e[n]=f({},r),e}),{})},U=function(){function e(){this.delegate=document.createDocumentFragment()}return e.prototype.addEventListener=function(){for(var e,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];(e=this.delegate).addEventListener.apply(e,t)},e.prototype.dispatchEvent=function(){for(var e,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return(e=this.delegate).dispatchEvent.apply(e,t)},e.prototype.removeEventListener=function(){for(var e,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return(e=this.delegate).removeEventListener.apply(e,t)},e}(),x=function(e){function t(t){void 0===t&&(t={});var n=e.call(this)||this;return n._config=f(f({},G),t),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}h(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype._dispatchEvent=function(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t}))},t.prototype._updateDialogElements=function(e){var t,n=this;void 0===e&&(e=d.HA_MORE_INFO_DIALOG_INFO),this._dialogTree=V(this._config,C,this._haRootElements.HOME_ASSISTANT.element);var o=j(d,this._dialogTree);o.HA_DIALOG_CONTENT.element.then((function(e){n._dialogsContentObserver.disconnect(),n._dialogsContentObserver.observe(e,{childList:!0})})),this._haDialogElements=function(e,t){return[d.HA_MORE_INFO_DIALOG,d.HA_DIALOG,d.HA_DIALOG_CONTENT,t].reduce((function(t,n){return t[n]=e[n],t}),{})}(o,e);var r=((t={})[d.HA_MORE_INFO_DIALOG_INFO]=I.ON_LOVELACE_MORE_INFO_DIALOG_OPEN,t[d.HA_DIALOG_MORE_INFO_HISTORY_AND_LOGBOOK]=I.ON_LOVELACE_HISTORY_AND_LOGBOOK_DIALOG_OPEN,t[d.HA_DIALOG_MORE_INFO_SETTINGS]=I.ON_LOVELACE_SETTINGS_DIALOG_OPEN,t);this._dispatchEvent(r[e],this._haDialogElements)},t.prototype._updateRootElements=function(){var e=this;this._homeAssistantRootTree=V(this._config,F),this._haRootElements=j(E,this._homeAssistantRootTree),this._haRootElements[E.HOME_ASSISTANT].selector.$.element.then((function(t){e._dialogsObserver.disconnect(),e._dialogsObserver.observe(t,{childList:!0})}))},t.prototype._updateResolverElements=function(){var e=this,t=Date.now();t-this._timestap<500||(this._timestap=t,this._homeAssistantResolverTree=V(this._config,P,this._haRootElements[E.HA_DRAWER].element),this._haResolverElements=j(A,this._homeAssistantResolverTree),this._haResolverElements[A.PARTIAL_PANEL_RESOLVER].element.then((function(t){e._panelResolverObserver.disconnect(),e._panelResolverObserver.observe(t,{childList:!0})})),this._haResolverElements[A.HA_PANEL_LOVELACE].selector.$.element.then((function(t){e._lovelaceObserver.disconnect(),e._lovelaceObserver.observe(t,{childList:!0})})),this._dispatchEvent(I.ON_LOVELACE_PANEL_LOAD,f(f({},this._haRootElements),this._haResolverElements)))},t.prototype._watchDialogs=function(e){var t=this;e.forEach((function(e){e.addedNodes.forEach((function(e){e.localName===g.HA_MORE_INFO_DIALOG&&t._updateDialogElements()}))}))},t.prototype._watchDialogsContent=function(e){var t=this;e.forEach((function(e){e.addedNodes.forEach((function(e){var n,o=((n={})[g.HA_MORE_INFO_DIALOG_INFO]=d.HA_MORE_INFO_DIALOG_INFO,n[g.HA_DIALOG_MORE_INFO_HISTORY_AND_LOGBOOK]=d.HA_DIALOG_MORE_INFO_HISTORY_AND_LOGBOOK,n[g.HA_DIALOG_MORE_INFO_SETTINGS]=d.HA_DIALOG_MORE_INFO_SETTINGS,n);if(e.localName&&e.localName in o){var r=e.localName;t._updateDialogElements(o[r])}}))}))},t.prototype._watchDashboards=function(e){var t=this;e.forEach((function(e){e.addedNodes.forEach((function(e){e.localName===g.HA_PANEL_LOVELACE&&t._updateResolverElements()}))}))},t.prototype._watchLovelace=function(e){var t=this;e.forEach((function(e){e.addedNodes.forEach((function(e){e.localName===g.HUI_ROOT&&t._updateResolverElements()}))}))},t.prototype.listen=function(){this._watchDialogsBinded=this._watchDialogs.bind(this),this._watchDialogsContentBinded=this._watchDialogsContent.bind(this),this._watchDashboardsBinded=this._watchDashboards.bind(this),this._watchLovelaceBinded=this._watchLovelace.bind(this),this._dialogsObserver=new MutationObserver(this._watchDialogsBinded),this._dialogsContentObserver=new MutationObserver(this._watchDialogsContentBinded),this._panelResolverObserver=new MutationObserver(this._watchDashboardsBinded),this._lovelaceObserver=new MutationObserver(this._watchLovelaceBinded),this._updateRootElements(),this._updateResolverElements()},t.prototype.addEventListener=function(t,n,o){e.prototype.addEventListener.call(this,t,n,o)},t}(U);!function(e){e.HUI_VIEW="hui-view",e.MORE_INFO_CONTENT="more-info-content",e.MORE_INFO_DEFAULT="more-info-default",e.MORE_INFO_VACUUM="more-info-vacuum",e.MORE_INFO_LIGHT="more-info-light",e.MORE_INFO_SIREN="more-info-siren",e.HA_ATTRIBUTES="ha-attributes"}(M||(M={}));var W=[M.MORE_INFO_DEFAULT,M.MORE_INFO_VACUUM,M.MORE_INFO_LIGHT,M.MORE_INFO_SIREN],$=/[.?+^$[\]\\(){}|-]/g;console.info("%c  ".concat("Custom-attributes","  \n%c  Version ").concat("1.0.0"," ").concat("Custom attributes for Home Assistant"),"color: gold; font-weight: bold; background: black","color: white; font-weight: bold; background: steelblue");var k=function(){function e(){var e=this;this._selector=new x,this._selector.addEventListener(I.ON_LOVELACE_PANEL_LOAD,(function(t){e.storeConfig(t.detail)})),this._selector.addEventListener(I.ON_LOVELACE_MORE_INFO_DIALOG_OPEN,(function(t){e.queryAttributes(t.detail)})),this._selector.listen()}return e.prototype.storeConfig=function(e){var t=this;e.HA_PANEL_LOVELACE.element.then((function(e){var n,o;t._config=(null===(o=null===(n=null==e?void 0:e.lovelace)||void 0===n?void 0:n.config)||void 0===o?void 0:o.custom_attributes)||{},t._filters={}}))},e.prototype.queryAttributes=function(e){var t=this;e.HA_MORE_INFO_DIALOG_INFO.selector.$.query(M.MORE_INFO_CONTENT).$.query(W.join(",")).$.query(M.HA_ATTRIBUTES).element.then((function(e){e&&t.applyFilters(e)}))},e.prototype.applyFilters=function(e){var t=this.getFilters(e),n=e.extraFilters||"",o=n.length?",":"";e.extraFilters=n+o+t.join(",")},e.prototype.getFilters=function(e){var t,n=this,o=e.__stateObj.entity_id,r=e.__stateObj.attributes.device_class;if(this._filters[o])return this._filters[o];var i=new Set,s=null===(t=this._config)||void 0===t?void 0:t.filter_attributes,a=null==s?void 0:s.by_entity_id,c=null==s?void 0:s.by_glob,l=null==s?void 0:s.by_domain,_=null==s?void 0:s.by_device_class,u=o.replace(/^(.+)\..+$/,"$1");return c&&Object.entries(c).forEach((function(e){var t=e[0],r=e[1];n.getEntityIdRegExp(t).test(o)&&r.forEach((function(e){i.add(e)}))})),(null==_?void 0:_[r])&&_[r].forEach((function(e){i.add(e)})),(null==l?void 0:l[u])&&l[u].forEach((function(e){i.add(e)})),(null==a?void 0:a[o])&&a[o].forEach((function(e){i.add(e)})),i.has("all")&&Object.keys(e.__stateObj.attributes).forEach((function(e){i.add(e)})),this._filters[o]=Array.from(i.values()),this._filters[o]},e.prototype.getEntityIdRegExp=function(e){var t=e.replace($,"\\$&").replace(/\*/g,".*");return new RegExp("^".concat(t,"$"))},e}();Promise.resolve(customElements.whenDefined(M.HUI_VIEW)).then((function(){window.customAttributes=new k}))}();
