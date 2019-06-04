!function(e,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r(require("prop-types"),function(){try{return require("immutable")}catch(e){}}());else if("function"==typeof define&&define.amd)define(["prop-types","immutable"],r);else{var t="object"==typeof exports?r(require("prop-types"),function(){try{return require("immutable")}catch(e){}}()):r(e["prop-types"],e.immutable);for(var n in t)("object"==typeof exports?exports:e)[n]=t[n]}}(this,function(e,r){return function(e){function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}var t={};return r.m=e,r.c=t,r.i=function(e){return e},r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="",r(r.s=14)}([function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.USER_EXPIRED="redux-oidc/USER_EXPIRED",r.SILENT_RENEW_ERROR="redux-oidc/SILENT_RENEW_ERROR",r.SESSION_TERMINATED="redux-oidc/SESSION_TERMINATED",r.USER_EXPIRING="redux-oidc/USER_EXPIRING",r.USER_FOUND="redux-oidc/USER_FOUND",r.LOADING_USER="redux-oidc/LOADING_USER",r.USER_SIGNED_OUT="redux-oidc/USER_SIGNED_OUT",r.LOAD_USER_ERROR="redux-oidc/LOAD_USER_ERROR"},function(e,r,t){"use strict";function n(){return{type:d.USER_EXPIRED}}function o(e){return{type:d.USER_FOUND,payload:e}}function u(e){return{type:d.SILENT_RENEW_ERROR,payload:e}}function i(){return{type:d.SESSION_TERMINATED}}function s(){return{type:d.USER_EXPIRING}}function a(){return{type:d.LOADING_USER}}function c(){return{type:d.USER_SIGNED_OUT}}function l(){return{type:d.LOAD_USER_ERROR}}Object.defineProperty(r,"__esModule",{value:!0}),r.userExpired=n,r.userFound=o,r.silentRenewError=u,r.sessionTerminated=i,r.userExpiring=s,r.loadingUser=a,r.userSignedOut=c,r.loadUserError=l;var d=t(0)},function(e,r){e.exports=require("prop-types")},function(e,r,t){"use strict";function n(e){return new o.UserManager(e)}Object.defineProperty(r,"__esModule",{value:!0}),r.default=n;var o=t(!function(){var e=new Error('Cannot find module "oidc-client"');throw e.code="MODULE_NOT_FOUND",e}())},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.loadUserError=r.userSignedOut=r.loadingUser=r.userExpiring=r.sessionTerminated=r.silentRenewError=r.userFound=r.userExpired=r.LOAD_USER_ERROR=r.USER_SIGNED_OUT=r.LOADING_USER=r.USER_EXPIRING=r.SESSION_TERMINATED=r.SILENT_RENEW_ERROR=r.USER_FOUND=r.USER_EXPIRED=r.SignoutCallbackComponent=r.OidcProvider=r.reducer=r.immutableReducer=r.CallbackComponent=r.loadUser=r.processSilentRenew=r.createUserManager=void 0;var n=t(10),o=function(e){return e&&e.__esModule?e:{default:e}}(n);r.createUserManager=t(3).default,r.processSilentRenew=t(9).default,r.loadUser=t(8).default,r.CallbackComponent=t(5).default,r.immutableReducer=t(11).default,r.reducer=t(12).default,r.OidcProvider=t(6).default,r.SignoutCallbackComponent=t(7).default,r.USER_EXPIRED=t(0).USER_EXPIRED,r.USER_FOUND=t(0).USER_FOUND,r.SILENT_RENEW_ERROR=t(0).SILENT_RENEW_ERROR,r.SESSION_TERMINATED=t(0).SESSION_TERMINATED,r.USER_EXPIRING=t(0).USER_EXPIRING,r.LOADING_USER=t(0).LOADING_USER,r.USER_SIGNED_OUT=t(0).USER_SIGNED_OUT,r.LOAD_USER_ERROR=t(0).LOAD_USER_ERROR,r.userExpired=t(1).userExpired,r.userFound=t(1).userFound,r.silentRenewError=t(1).silentRenewError,r.sessionTerminated=t(1).sessionTerminated,r.userExpiring=t(1).userExpiring,r.loadingUser=t(1).loadingUser,r.userSignedOut=t(1).userSignedOut,r.loadUserError=t(1).loadUserError,r.default=o.default},function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function u(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!=typeof r&&"function"!=typeof r?e:r}function i(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}Object.defineProperty(r,"__esModule",{value:!0});var s=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}(),a=t(2),c=n(a),l=t(!function(){var e=new Error('Cannot find module "react"');throw e.code="MODULE_NOT_FOUND",e}()),d=n(l),f=function(e){function r(){var e,t,n,i;o(this,r);for(var s=arguments.length,a=Array(s),c=0;c<s;c++)a[c]=arguments[c];return t=n=u(this,(e=r.__proto__||Object.getPrototypeOf(r)).call.apply(e,[this].concat(a))),n.onRedirectSuccess=function(e){n.props.successCallback(e)},n.onRedirectError=function(e){if(!n.props.errorCallback)throw new Error("Error handling redirect callback: "+e.message);n.props.errorCallback(e)},i=t,u(n,i)}return i(r,e),s(r,[{key:"componentDidMount",value:function(){var e=this;this.props.userManager.signinRedirectCallback().then(function(r){return e.onRedirectSuccess(r)}).catch(function(r){return e.onRedirectError(r)})}},{key:"render",value:function(){return d.default.Children.only(this.props.children)}}]),r}(d.default.Component);f.propTypes={children:c.default.element.isRequired,userManager:c.default.object.isRequired,successCallback:c.default.func.isRequired,errorCallback:c.default.func},r.default=f},function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function u(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!=typeof r&&"function"!=typeof r?e:r}function i(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}Object.defineProperty(r,"__esModule",{value:!0});var s=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}(),a=t(2),c=n(a),l=t(!function(){var e=new Error('Cannot find module "react"');throw e.code="MODULE_NOT_FOUND",e}()),d=n(l),f=t(1),p=function(e){function r(e){o(this,r);var t=u(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e));return t.onUserLoaded=function(e){t.props.store.dispatch((0,f.userFound)(e))},t.onSilentRenewError=function(e){t.props.store.dispatch((0,f.silentRenewError)(e))},t.onAccessTokenExpired=function(){t.props.store.dispatch((0,f.userExpired)())},t.onUserUnloaded=function(){t.props.store.dispatch((0,f.sessionTerminated)())},t.onAccessTokenExpiring=function(){t.props.store.dispatch((0,f.userExpiring)())},t.onUserSignedOut=function(){t.props.store.dispatch((0,f.userSignedOut)())},t.userManager=e.userManager,t}return i(r,e),s(r,[{key:"componentWillMount",value:function(){this.userManager.events.addUserLoaded(this.onUserLoaded),this.userManager.events.addSilentRenewError(this.onSilentRenewError),this.userManager.events.addAccessTokenExpired(this.onAccessTokenExpired),this.userManager.events.addAccessTokenExpiring(this.onAccessTokenExpiring),this.userManager.events.addUserUnloaded(this.onUserUnloaded),this.userManager.events.addUserSignedOut(this.onUserSignedOut)}},{key:"componentWillUnmount",value:function(){this.userManager.events.removeUserLoaded(this.onUserLoaded),this.userManager.events.removeSilentRenewError(this.onSilentRenewError),this.userManager.events.removeAccessTokenExpired(this.onAccessTokenExpired),this.userManager.events.removeAccessTokenExpiring(this.onAccessTokenExpiring),this.userManager.events.removeUserUnloaded(this.onUserUnloaded),this.userManager.events.removeUserSignedOut(this.onUserSignedOut)}},{key:"render",value:function(){return d.default.Children.only(this.props.children)}}]),r}(d.default.Component);p.propTypes={userManager:c.default.object.isRequired,store:c.default.object.isRequired},r.default=p},function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function u(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!=typeof r&&"function"!=typeof r?e:r}function i(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}Object.defineProperty(r,"__esModule",{value:!0});var s=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}(),a=t(2),c=n(a),l=t(!function(){var e=new Error('Cannot find module "react"');throw e.code="MODULE_NOT_FOUND",e}()),d=n(l),f=function(e){function r(){var e,t,n,i;o(this,r);for(var s=arguments.length,a=Array(s),c=0;c<s;c++)a[c]=arguments[c];return t=n=u(this,(e=r.__proto__||Object.getPrototypeOf(r)).call.apply(e,[this].concat(a))),n.onRedirectSuccess=function(e){n.props.successCallback(e)},n.onRedirectError=function(e){if(!n.props.errorCallback)throw new Error("Error handling logout redirect callback: "+e.message);n.props.errorCallback(e)},i=t,u(n,i)}return i(r,e),s(r,[{key:"componentDidMount",value:function(){var e=this;this.props.userManager.signoutRedirectCallback().then(function(r){return e.onRedirectSuccess(r)}).catch(function(r){return e.onRedirectError(r)})}},{key:"render",value:function(){return d.default.Children.only(this.props.children)}}]),r}(d.default.Component);f.propTypes={children:c.default.element.isRequired,userManager:c.default.object.isRequired,successCallback:c.default.func.isRequired,errorCallback:c.default.func},r.default=f},function(e,r,t){"use strict";function n(e){c=e}function o(){return c}function u(e){return e&&!e.expired?c.dispatch((0,a.userFound)(e)):(!e||e&&e.expired)&&c.dispatch((0,a.userExpired)()),e}function i(e){console.error("redux-oidc: Error in loadUser() function: "+e.message),c.dispatch((0,a.loadUserError)())}function s(e,r){if(!e||!e.dispatch)throw new Error("redux-oidc: You need to pass the redux store into the loadUser helper!");if(!r||!r.getUser)throw new Error("redux-oidc: You need to pass the userManager into the loadUser helper!");return c=e,e.dispatch((0,a.loadingUser)()),r.getUser().then(u).catch(i)}Object.defineProperty(r,"__esModule",{value:!0}),r.setReduxStore=n,r.getReduxStore=o,r.getUserCallback=u,r.errorCallback=i,r.default=s;var a=t(1),c=void 0},function(e,r,t){"use strict";function n(){(0,u.default)().signinSilentCallback()}Object.defineProperty(r,"__esModule",{value:!0}),r.default=n;var o=t(3),u=function(e){return e&&e.__esModule?e:{default:e}}(o)},function(e,r,t){"use strict";function n(e){r.nextMiddleware=E=e}function o(){return E}function u(e){r.storedUser=p=e}function i(){r.storedUser=p=null}function s(e){!e||e.expired?E((0,d.userExpired)()):(r.storedUser=p=e,E((0,d.userFound)(e)))}function a(e){console.error("redux-oidc: Error loading user in oidcMiddleware: "+e.message),E((0,d.loadUserError)())}function c(e,t,n){return t.type===f.USER_EXPIRED||t.type===f.LOADING_USER||t.type===f.USER_FOUND?e(t):(r.nextMiddleware=E=e,p&&!p.expired||(e((0,d.loadingUser)()),n.getUser().then(s).catch(a)),e(t))}function l(e){if(!e||!e.getUser)throw new Error("You must provide a user manager!");return function(r){return function(r){return function(t){return c(r,t,e)}}}}Object.defineProperty(r,"__esModule",{value:!0}),r.nextMiddleware=r.storedUser=void 0,r.setNext=n,r.getNext=o,r.setStoredUser=u,r.removeStoredUser=i,r.getUserCallback=s,r.errorCallback=a,r.middlewareHandler=c,r.default=l;var d=t(1),f=t(0),p=r.storedUser=null,E=r.nextMiddleware=null},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=t(0),u=void 0;try{var i=t(13),s=i.fromJS,a=i.Seq,c=function e(r){return"object"!==(void 0===r?"undefined":n(r))||null===r?r:Array.isArray(r)?a(r).map(e).toList():a(r).map(e).toMap()},l=s({user:null,isLoadingUser:!1});u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,r=arguments[1];switch(r.type){case o.USER_EXPIRED:case o.SILENT_RENEW_ERROR:return s({user:null,isLoadingUser:!1});case o.SESSION_TERMINATED:case o.USER_SIGNED_OUT:return s({user:null,isLoadingUser:!1});case o.USER_FOUND:return c({user:r.payload,isLoadingUser:!1});case o.LOADING_USER:return e.set("isLoadingUser",!0);default:return e}}}catch(e){u=function(){console.error("You must install immutable-js for the immutable reducer to work!")}}r.default=u},function(e,r,t){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,r=arguments[1];switch(r.type){case u.USER_EXPIRED:case u.SILENT_RENEW_ERROR:return Object.assign({},o({},e),{user:null,isLoadingUser:!1});case u.SESSION_TERMINATED:case u.USER_SIGNED_OUT:return Object.assign({},o({},e),{user:null,isLoadingUser:!1});case u.USER_FOUND:return Object.assign({},o({},e),{user:r.payload,isLoadingUser:!1});case u.LOADING_USER:return Object.assign({},o({},e),{isLoadingUser:!0});default:return e}}Object.defineProperty(r,"__esModule",{value:!0});var o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e};r.default=n;var u=t(0),i={user:null,isLoadingUser:!1}},function(e,r){e.exports=require("immutable")},function(e,r,t){e.exports=t(4)}])});