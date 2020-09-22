(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],[
/* 0 */,
/* 1 */
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return res.then(function (res) {
      return res[1];
    }).catch(function (res) {
      return res[0];
    });
  } };


var SYNC_API_RE =
/^\$|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/;

var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors });var


EventChannel = /*#__PURE__*/function () {
  function EventChannel(id, events) {var _this = this;_classCallCheck(this, EventChannel);
    this.id = id;
    this.listener = {};
    this.emitCache = {};
    if (events) {
      Object.keys(events).forEach(function (name) {
        _this.on(name, events[name]);
      });
    }
  }_createClass(EventChannel, [{ key: "emit", value: function emit(

    eventName) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
      var fns = this.listener[eventName];
      if (!fns) {
        return (this.emitCache[eventName] || (this.emitCache[eventName] = [])).push(args);
      }
      fns.forEach(function (opt) {
        opt.fn.apply(opt.fn, args);
      });
      this.listener[eventName] = fns.filter(function (opt) {return opt.type !== 'once';});
    } }, { key: "on", value: function on(

    eventName, fn) {
      this._addListener(eventName, 'on', fn);
      this._clearCache(eventName);
    } }, { key: "once", value: function once(

    eventName, fn) {
      this._addListener(eventName, 'once', fn);
      this._clearCache(eventName);
    } }, { key: "off", value: function off(

    eventName, fn) {
      var fns = this.listener[eventName];
      if (!fns) {
        return;
      }
      if (fn) {
        for (var i = 0; i < fns.length;) {
          if (fns[i].fn === fn) {
            fns.splice(i, 1);
            i--;
          }
          i++;
        }
      } else {
        delete this.listener[eventName];
      }
    } }, { key: "_clearCache", value: function _clearCache(

    eventName) {
      var cacheArgs = this.emitCache[eventName];
      if (cacheArgs) {
        for (; cacheArgs.length > 0;) {
          this.emit.apply(this, [eventName].concat(cacheArgs.shift()));
        }
      }
    } }, { key: "_addListener", value: function _addListener(

    eventName, type, fn) {
      (this.listener[eventName] || (this.listener[eventName] = [])).push({
        fn: fn,
        type: type });

    } }]);return EventChannel;}();


var eventChannels = {};

var eventChannelStack = [];

var id = 0;

function initEventChannel(events) {var cache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  id++;
  var eventChannel = new EventChannel(id, events);
  if (cache) {
    eventChannels[id] = eventChannel;
    eventChannelStack.push(eventChannel);
  }
  return eventChannel;
}

function getEventChannel(id) {
  if (id) {
    var eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}

var navigateTo = {
  args: function args(fromArgs, toArgs) {
    var id = initEventChannel(fromArgs.events).id;
    if (fromArgs.url) {
      fromArgs.url = fromArgs.url + (fromArgs.url.indexOf('?') === -1 ? '?' : '&') + '__id__=' + id;
    }
  },
  returnValue: function returnValue(fromRes, toRes) {
    fromRes.eventChannel = getEventChannel();
  } };


function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}

var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  } };


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.windowHeight - safeArea.bottom };

  }
}
var protocols = {
  redirectTo: redirectTo,
  navigateTo: navigateTo,
  previewImage: previewImage,
  getSystemInfo: {
    returnValue: addSafeAreaInsets },

  getSystemInfoSync: {
    returnValue: addSafeAreaInsets } };


var todos = [
'vibrate',
'preloadPage',
'unPreloadPage',
'loadSubPackage'];

var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F ".concat(methodName, "\u6682\u4E0D\u652F\u6301").concat(key));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F \u6682\u4E0D\u652F\u6301".concat(methodName));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail:\u6682\u4E0D\u652F\u6301 ").concat(name, " \u65B9\u6CD5") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail:服务[' + service + ']不存在' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


var api = /*#__PURE__*/Object.freeze({
  __proto__: null });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  {
    if (!wx.canIUse('nextTick')) {
      return;
    }
  }
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {args[_key4 - 1] = arguments[_key4];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {args[_key5] = arguments[_key5];}
      return oldHook.apply(this, args);
    };
  }
}

Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('onLoad', options);
  return MPPage(options);
};

Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('created', options);
  return MPComponent(options);
};

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onAddToFavorites',
'onShareTimeline',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;

  var vueProps = vueOptions.props;

  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: '' };

          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    // 用于字节跳动小程序模拟抽象节点
    properties.generic = {
      type: Object,
      value: null };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (hasOwn(event, 'markerId')) {
    event.detail = typeof event.detail === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            if (event.detail && event.detail.__args__) {
              extraObj['$' + index] = event.detail.__args__;
            } else {
              extraObj['$' + index] = [event];
            }
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}

function handleEvent(event) {var _this2 = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this2.$vm;
          if (handlerCtx.$options.generic) {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this2.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(
          _this2.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName);

          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          // eslint-disable-next-line no-sparse-arrays
          ret.push(handler.apply(handlerCtx, (Array.isArray(params) ? params : []).concat([,,,,,,,,,, event])));
        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound',
'onThemeChange',
'onUnhandledRejection'];


function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }

  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;

      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (!wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      var components = mpInstance.selectAllComponents('.vue-ref');
      components.forEach(function (component) {
        var ref = component.dataset.ref;
        $refs[ref] = component.$vm || component;
      });
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  _vue.default.prototype.getOpenerEventChannel = function () {
    if (!this.__eventChannel__) {
      this.__eventChannel__ = new EventChannel();
    }
    return this.__eventChannel__;
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
  App(parseApp(vm));
  return vm;
}

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {return '%' + c.charCodeAt(0).toString(16);};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {return encodeURIComponent(str).
  replace(encodeReserveRE, encodeReserveReplacer).
  replace(commaRE, ',');};

function stringifyQuery(obj) {var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encodeStr(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }

    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {return x.length > 0;}).join('&') : null;
  return res ? "?".concat(res) : '';
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }

  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };


  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }

  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery) };

    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;

/***/ }),
/* 2 */
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2020 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i++, i)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu'){//百度 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue != pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var rawBindings = vm.__secret_vfa_state__ && vm.__secret_vfa_state__.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }
  
  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      this.$scope['triggerEvent'](event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),
/* 3 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 4 */
/*!*******************************************************************!*\
  !*** C:/Users/15901/Documents/HBuilderProjects/uniapp/pages.json ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/*!*****************************************************************************!*\
  !*** C:/Users/15901/Documents/HBuilderProjects/uniapp/pages/index/polyv.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {var _regeneratorRuntime=__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 20);function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}(function(global,e){
 true?module.exports=e():undefined;
})(this,function(){
"use strict";
var commonjsGlobal="undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{};

function commonjsRequire(){
throw new Error("Dynamic requires are not currently supported by rollup-plugin-commonjs");
}

function createCommonjsModule(e,r){
return r={
exports:{}},
e(r,r.exports),r.exports;
}
var regeneratorRuntime=createCommonjsModule(function(e){
!function(global){
var r=Object.prototype;
var t=r.hasOwnProperty;
var i;
var n="function"===typeof Symbol?Symbol:{};
var a=n.iterator||"@@iterator";
var o=n.asyncIterator||"@@asyncIterator";
var u=n.toStringTag||"@@toStringTag";
var f=global.regeneratorRuntime;
if(f){
e.exports=f;
return;
}
f=global.regeneratorRuntime=e.exports;

function s(e,r,t,i){
var n=r&&r.prototype instanceof _?r:_;
var a=Object.create(n.prototype);
var o=new I(i||[]);
a._invoke=M(e,t,o);
return a;
}
f.wrap=s;

function l(e,r,t){
try{
return{
type:"normal",
arg:e.call(r,t)};

}catch(e){
return{
type:"throw",
arg:e};

}
}
var c="suspendedStart";
var h="suspendedYield";
var d="executing";
var v="completed";
var p={};

function _(){}

function m(){}

function y(){}
var g={};
g[a]=function(){
return this;
};
var b=Object.getPrototypeOf;
var w=b&&b(b(O([])));
if(w&&w!==r&&t.call(w,a))g=w;
var A=y.prototype=_.prototype=Object.create(g);
m.prototype=A.constructor=y;
y.constructor=m;
y[u]=m.displayName="GeneratorFunction";

function T(e){
["next","throw","return"].forEach(function(r){
e[r]=function(e){
return this._invoke(r,e);
};
});
}
f.isGeneratorFunction=function(e){
var r="function"===typeof e&&e.constructor;
return r?r===m||"GeneratorFunction"===(r.displayName||r.name):false;
};
f.mark=function(e){
if(Object.setPrototypeOf)Object.setPrototypeOf(e,y);else
{
e.__proto__=y;
if(!(u in e))e[u]="GeneratorFunction";
}
e.prototype=Object.create(A);
return e;
};
f.awrap=function(e){
return{
__await:e};

};

function E(e){
function r(i,n,a,o){
var u=l(e[i],e,n);
if("throw"===u.type)o(u.arg);else
{
var f=u.arg;
var s=f.value;
if(s&&"object"===typeof s&&t.call(s,"__await"))return Promise.resolve(s.__await).then(function(e){
r("next",e,a,o);
},function(e){
r("throw",e,a,o);
});
return Promise.resolve(s).then(function(e){
f.value=e;
a(f);
},o);
}
}
var i;

function n(e,t){
function n(){
return new Promise(function(i,n){
r(e,t,i,n);
});
}
return i=i?i.then(n,n):n();
}
this._invoke=n;
}
T(E.prototype);
E.prototype[o]=function(){
return this;
};
f.AsyncIterator=E;
f.async=function(e,r,t,i){
var n=new E(s(e,r,t,i));
return f.isGeneratorFunction(r)?n:n.next().then(function(e){
return e.done?e.value:n.next();
});
};

function M(e,r,t){
var i=c;
return function n(a,o){
if(i===d)throw new Error("Generator is already running");
if(i===v){
if("throw"===a)throw o;
return P();
}
t.method=a;
t.arg=o;
while(true){
var u=t.delegate;
if(u){
var f=k(u,t);
if(f){
if(f===p)continue;
return f;
}
}
if("next"===t.method)t.sent=t._sent=t.arg;else
if("throw"===t.method){
if(i===c){
i=v;
throw t.arg;
}
t.dispatchException(t.arg);
}else if("return"===t.method)t.abrupt("return",t.arg);
i=d;
var s=l(e,r,t);
if("normal"===s.type){
i=t.done?v:h;
if(s.arg===p)continue;
return{
value:s.arg,
done:t.done};

}else if("throw"===s.type){
i=v;
t.method="throw";
t.arg=s.arg;
}
}
};
}

function k(e,r){
var t=e.iterator[r.method];
if(t===i){
r.delegate=null;
if("throw"===r.method){
if(e.iterator.return){
r.method="return";
r.arg=i;
k(e,r);
if("throw"===r.method)return p;
}
r.method="throw";
r.arg=new TypeError("The iterator does not provide a 'throw' method");
}
return p;
}
var n=l(t,e.iterator,r.arg);
if("throw"===n.type){
r.method="throw";
r.arg=n.arg;
r.delegate=null;
return p;
}
var a=n.arg;
if(!a){
r.method="throw";
r.arg=new TypeError("iterator result is not an object");
r.delegate=null;
return p;
}
if(a.done){
r[e.resultName]=a.value;
r.next=e.nextLoc;
if("return"!==r.method){
r.method="next";
r.arg=i;
}
}else return a;
r.delegate=null;
return p;
}
T(A);
A[u]="Generator";
A[a]=function(){
return this;
};
A.toString=function(){
return"[object Generator]";
};

function S(e){
var r={
tryLoc:e[0]};

if(1 in e)r.catchLoc=e[1];
if(2 in e){
r.finallyLoc=e[2];
r.afterLoc=e[3];
}
this.tryEntries.push(r);
}

function R(e){
var r=e.completion||{};
r.type="normal";
delete r.arg;
e.completion=r;
}

function I(e){
this.tryEntries=[{
tryLoc:"root"}];

e.forEach(S,this);
this.reset(true);
}
f.keys=function(e){
var r=[];
for(var t in e){r.push(t);}
r.reverse();
return function t(){
while(r.length){
var i=r.pop();
if(i in e){
t.value=i;
t.done=false;
return t;
}
}
t.done=true;
return t;
};
};

function O(e){
if(e){
var r=e[a];
if(r)return r.call(e);
if("function"===typeof e.next)return e;
if(!isNaN(e.length)){
var n=-1,
o=function r(){
while(++n<e.length){
if(t.call(e,n)){
r.value=e[n];
r.done=false;
return r;
}}r.value=i;
r.done=true;
return r;
};
return o.next=o;
}
}
return{
next:P};

}
f.values=O;

function P(){
return{
value:i,
done:true};

}
I.prototype={
constructor:I,
reset:function reset(e){
this.prev=0;
this.next=0;
this.sent=this._sent=i;
this.done=false;
this.delegate=null;
this.method="next";
this.arg=i;
this.tryEntries.forEach(R);
if(!e)
for(var r in this){
if("t"===r.charAt(0)&&t.call(this,r)&&!isNaN(+r.slice(1)))this[r]=i;}
},
stop:function stop(){
this.done=true;
var e=this.tryEntries[0];
var r=e.completion;
if("throw"===r.type)throw r.arg;
return this.rval;
},
dispatchException:function dispatchException(e){
if(this.done)throw e;
var r=this;

function n(t,n){
u.type="throw";
u.arg=e;
r.next=t;
if(n){
r.method="next";
r.arg=i;
}
return!!n;
}
for(var a=this.tryEntries.length-1;a>=0;--a){
var o=this.tryEntries[a];
var u=o.completion;
if("root"===o.tryLoc)return n("end");
if(o.tryLoc<=this.prev){
var f=t.call(o,"catchLoc");
var s=t.call(o,"finallyLoc");
if(f&&s){
if(this.prev<o.catchLoc)return n(o.catchLoc,true);else
if(this.prev<o.finallyLoc)return n(o.finallyLoc);
}else if(f){
if(this.prev<o.catchLoc)return n(o.catchLoc,true);
}else if(s){
if(this.prev<o.finallyLoc)return n(o.finallyLoc);
}else throw new Error("try statement without catch or finally");
}
}
},
abrupt:function abrupt(e,r){
for(var i=this.tryEntries.length-1;i>=0;--i){
var n=this.tryEntries[i];
if(n.tryLoc<=this.prev&&t.call(n,"finallyLoc")&&this.prev<n.finallyLoc){
var a=n;
break;
}
}
if(a&&("break"===e||"continue"===e)&&a.tryLoc<=r&&r<=a.finallyLoc)a=null;
var o=a?a.completion:{};
o.type=e;
o.arg=r;
if(a){
this.method="next";
this.next=a.finallyLoc;
return p;
}
return this.complete(o);
},
complete:function complete(e,r){
if("throw"===e.type)throw e.arg;
if("break"===e.type||"continue"===e.type)this.next=e.arg;else
if("return"===e.type){
this.rval=this.arg=e.arg;
this.method="return";
this.next="end";
}else if("normal"===e.type&&r)this.next=r;
return p;
},
finish:function finish(e){
for(var r=this.tryEntries.length-1;r>=0;--r){
var t=this.tryEntries[r];
if(t.finallyLoc===e){
this.complete(t.completion,t.afterLoc);
R(t);
return p;
}
}
},
catch:function _catch(e){
for(var r=this.tryEntries.length-1;r>=0;--r){
var t=this.tryEntries[r];
if(t.tryLoc===e){
var i=t.completion;
if("throw"===i.type){
var n=i.arg;
R(t);
}
return n;
}
}
throw new Error("illegal catch attempt");
},
delegateYield:function delegateYield(e,r,t){
this.delegate={
iterator:O(e),
resultName:r,
nextLoc:t};

if("next"===this.method)this.arg=i;
return p;
}};

}(function(){
return this;
}()||Function("return this")());
});
var ajxa={
request:function request(e){var r=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"GET";var t=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};
if(!e)console.warn("!!request url can not be empty");
return new Promise(function(i,n){
wx.request({
url:e,
method:r,
data:t,
success:function success(e){
i(e.data);
},
fail:function fail(e){
n(e);
}});

});
}};

var miniapp=createCommonjsModule(function(module){
var Module;
if(!Module)Module=("undefined"!==typeof Module?Module:null)||{};
var moduleOverrides={};
for(var key in Module){
if(Module.hasOwnProperty(key))moduleOverrides[key]=Module[key];}
var ENVIRONMENT_IS_WEB=false;
var ENVIRONMENT_IS_WORKER=false;
var ENVIRONMENT_IS_NODE=false;
var ENVIRONMENT_IS_SHELL=false;
if(Module["ENVIRONMENT"]){
if("WEB"===Module["ENVIRONMENT"])ENVIRONMENT_IS_WEB=true;else
if("WORKER"===Module["ENVIRONMENT"])ENVIRONMENT_IS_WORKER=true;else
if("NODE"===Module["ENVIRONMENT"])ENVIRONMENT_IS_NODE=true;else
if("SHELL"===Module["ENVIRONMENT"])ENVIRONMENT_IS_SHELL=true;else
throw new Error("The provided Module['ENVIRONMENT'] value is not valid. It must be one of: WEB|WORKER|NODE|SHELL.");}else
{
ENVIRONMENT_IS_WEB="object"===typeof window;
ENVIRONMENT_IS_WORKER="function"===typeof importScripts;
ENVIRONMENT_IS_NODE="object"===typeof process&&"function"===typeof commonjsRequire&&!ENVIRONMENT_IS_WEB&&!ENVIRONMENT_IS_WORKER;
ENVIRONMENT_IS_SHELL=!ENVIRONMENT_IS_WEB&&!ENVIRONMENT_IS_NODE&&!ENVIRONMENT_IS_WORKER;
}
ENVIRONMENT_IS_SHELL=false;
if(ENVIRONMENT_IS_NODE){
if(!Module["print"])Module["print"]=console.log;
if(!Module["printErr"])Module["printErr"]=console.warn;
var nodeFS;
var nodePath;
Module["read"]=function e(r,t){
r=nodePath["normalize"](r);
var i=nodeFS["readFileSync"](r);
return t?i:i.toString();
};
Module["readBinary"]=function e(r){
var t=Module["read"](r,true);
if(!t.buffer)t=new Uint8Array(t);
assert(t.buffer);
return t;
};
Module["load"]=function e(r){
globalEval(read(r));
};
// if (!Module["thisProgram"])
//     if (process["argv"].length > 1) Module["thisProgram"] = process["argv"][1].replace(/\\/g, "/");
//     else Module["thisProgram"] = "unknown-program";
// Module["arguments"] = process["argv"].slice(2);
module["exports"]=Module;
// process["on"]("uncaughtException", function (e) {
//     if (!(e instanceof ExitStatus)) throw e
// });
Module["inspect"]=function(){
return"[Emscripten Module object]";
};
}else if(ENVIRONMENT_IS_SHELL){
if(!Module["print"])Module["print"]=print;
if("undefined"!=typeof printErr)Module["printErr"]=printErr;
if("undefined"!=typeof read)Module["read"]=read;else
Module["read"]=function e(){
throw"no read() available";
};
Module["readBinary"]=function e(r){
if("function"===typeof readbuffer)return new Uint8Array(readbuffer(r));
var t=read(r,"binary");
assert("object"===typeof t);
return t;
};
if("undefined"!=typeof scriptArgs)Module["arguments"]=scriptArgs;else
if("undefined"!=typeof arguments)Module["arguments"]=arguments;
if("function"===typeof quit)Module["quit"]=function(e,r){
quit(e);
};
}else if(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER){
Module["read"]=function e(r){
var t=new XMLHttpRequest();
t.open("GET",r,false);
t.send(null);
return t.responseText;
};
if(ENVIRONMENT_IS_WORKER)Module["readBinary"]=function e(r){
var t=new XMLHttpRequest();
t.open("GET",r,false);
t.responseType="arraybuffer";
t.send(null);
return new Uint8Array(t.response);
};
Module["readAsync"]=function e(r,t,i){
var n=new XMLHttpRequest();
n.open("GET",r,true);
n.responseType="arraybuffer";
n.onload=function e(){
if(200==n.status||0==n.status&&n.response)t(n.response);else
i();
};
n.onerror=i;
n.send(null);
};
if("undefined"!=typeof arguments)Module["arguments"]=arguments;
if("undefined"!==typeof console){
if(!Module["print"])Module["print"]=function e(r){
console.log(r);
};
if(!Module["printErr"])Module["printErr"]=function e(r){
console.warn(r);
};
}else{
var TRY_USE_DUMP=false;
if(!Module["print"])Module["print"]=TRY_USE_DUMP&&"undefined"!==typeof dump?function(e){
dump(e);
}:function(e){};
}
if(ENVIRONMENT_IS_WORKER)Module["load"]=importScripts;
if("undefined"===typeof Module["setWindowTitle"])Module["setWindowTitle"]=function(e){
document.title=e;
};
}

function globalEval(e){
eval.call(null,e);
}
if(!Module["load"]&&Module["read"])Module["load"]=function e(r){
globalEval(Module["read"](r));
};
if(!Module["print"])Module["print"]=function(){};
if(!Module["printErr"])Module["printErr"]=Module["print"];
if(!Module["arguments"])Module["arguments"]=[];
if(!Module["thisProgram"])Module["thisProgram"]="./this.program";
if(!Module["quit"])Module["quit"]=function(e,r){
throw r;
};
Module.print=Module["print"];
Module.printErr=Module["printErr"];
Module["preRun"]=[];
Module["postRun"]=[];
for(var key in moduleOverrides){
if(moduleOverrides.hasOwnProperty(key))Module[key]=moduleOverrides[key];}
moduleOverrides=void 0;
var Runtime={
setTempRet0:function setTempRet0(e){
tempRet0=e;
return e;
},
getTempRet0:function getTempRet0(){
return tempRet0;
},
stackSave:function stackSave(){
return STACKTOP;
},
stackRestore:function stackRestore(e){
STACKTOP=e;
},
getNativeTypeSize:function getNativeTypeSize(e){
switch(e){
case"i1":
case"i8":
return 1;
case"i16":
return 2;
case"i32":
return 4;
case"i64":
return 8;
case"float":
return 4;
case"double":
return 8;
default:
if("*"===e[e.length-1])return Runtime.QUANTUM_SIZE;else
if("i"===e[0]){
var r=parseInt(e.substr(1));
assert(r%8===0);
return r/8;
}else return 0;}

},
getNativeFieldSize:function getNativeFieldSize(e){
return Math.max(Runtime.getNativeTypeSize(e),Runtime.QUANTUM_SIZE);
},
STACK_ALIGN:16,
prepVararg:function prepVararg(e,r){
if("double"===r||"i64"===r){
if(7&e){
assert(4===(7&e));
e+=4;
}
}else assert(0===(3&e));
return e;
},
getAlignSize:function getAlignSize(e,r,t){
if(!t&&("i64"==e||"double"==e))return 8;
if(!e)return Math.min(r,8);
return Math.min(r||(e?Runtime.getNativeFieldSize(e):0),Runtime.QUANTUM_SIZE);
},
dynCall:function dynCall(e,r,t){
if(t&&t.length){
assert(t.length==e.length-1);
assert("dynCall_"+e in Module,"bad function pointer type - no table for sig '"+e+"'");
return Module["dynCall_"+e].apply(null,[r].concat(t));
}else{
assert(1==e.length);
assert("dynCall_"+e in Module,"bad function pointer type - no table for sig '"+e+"'");
return Module["dynCall_"+e].call(null,r);
}
},
functionPointers:[],
addFunction:function addFunction(e){
for(var r=0;r<Runtime.functionPointers.length;r++){
if(!Runtime.functionPointers[r]){
Runtime.functionPointers[r]=e;
return 2*(1+r);
}}throw"Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS.";
},
removeFunction:function removeFunction(e){
Runtime.functionPointers[(e-2)/2]=null;
},
warnOnce:function warnOnce(e){
if(!Runtime.warnOnce.shown)Runtime.warnOnce.shown={};
if(!Runtime.warnOnce.shown[e]){
Runtime.warnOnce.shown[e]=1;
Module.printErr(e);
}
},
funcWrappers:{},
getFuncWrapper:function getFuncWrapper(e,r){
if(!e)return;
assert(r);
if(!Runtime.funcWrappers[r])Runtime.funcWrappers[r]={};
var t=Runtime.funcWrappers[r];
if(!t[e])
if(1===r.length)t[e]=function t(){
return Runtime.dynCall(r,e);
};else
if(2===r.length)t[e]=function t(i){
return Runtime.dynCall(r,e,[i]);
};else
t[e]=function t(){
return Runtime.dynCall(r,e,Array.prototype.slice.call(arguments));
};
return t[e];
},
getCompilerSetting:function getCompilerSetting(e){
throw"You must build with -s RETAIN_COMPILER_SETTINGS=1 for Runtime.getCompilerSetting or emscripten_get_compiler_setting to work";
},
stackAlloc:function stackAlloc(e){
var r=STACKTOP;
STACKTOP=STACKTOP+e|0;
STACKTOP=STACKTOP+15&-16;
0|assert((0|STACKTOP)<(0|STACK_MAX)|0);
return r;
},
staticAlloc:function staticAlloc(e){
var r=STATICTOP;
STATICTOP=STATICTOP+(assert(!staticSealed),e)|0;
STATICTOP=STATICTOP+15&-16;
return r;
},
dynamicAlloc:function dynamicAlloc(e){
assert(DYNAMICTOP_PTR);
var r=HEAP32[DYNAMICTOP_PTR>>2];
var t=-16&(r+e+15|0);
HEAP32[DYNAMICTOP_PTR>>2]=t;
if(t>=TOTAL_MEMORY){
var i=enlargeMemory();
if(!i){
HEAP32[DYNAMICTOP_PTR>>2]=r;
return 0;
}
}
return r;
},
alignMemory:function alignMemory(e,r){
var t=e=Math.ceil(e/(r?r:16))*(r?r:16);
return t;
},
makeBigInt:function makeBigInt(e,r,t){
var i=t?+(e>>>0)+4294967296*+(r>>>0):+(e>>>0)+4294967296*+(0|r);
return i;
},
GLOBAL_BASE:8,
QUANTUM_SIZE:4,
__dummy__:0};

Module["Runtime"]=Runtime;
var ABORT=0;

function assert(e,r){
if(!e)abort("Assertion failed: "+r);
}

function getCFunc(ident){
var func=Module["_"+ident];
if(!func)try{
func=eval("_"+ident);
}catch(e){}
assert(func,"Cannot call unknown function "+ident+" (perhaps LLVM optimizations or closure removed it?)");
return func;
}
var cwrap,ccall;
(function(){
var JSfuncs={
stackSave:function stackSave(){
Runtime.stackSave();
},
stackRestore:function stackRestore(){
Runtime.stackRestore();
},
arrayToC:function arrayToC(e){
var r=Runtime.stackAlloc(e.length);
writeArrayToMemory(e,r);
return r;
},
stringToC:function stringToC(e){
var r=0;
if(null!==e&&void 0!==e&&0!==e){
var t=(e.length<<2)+1;
r=Runtime.stackAlloc(t);
stringToUTF8(e,r,t);
}
return r;
}};

var toC={
string:JSfuncs["stringToC"],
array:JSfuncs["arrayToC"]};

ccall=function e(r,t,i,n,a){
var o=getCFunc(r);
var u=[];
var f=0;
assert("array"!==t,'Return type should not be "array".');
if(n)
for(var s=0;s<n.length;s++){
var l=toC[i[s]];
if(l){
if(0===f)f=Runtime.stackSave();
u[s]=l(n[s]);
}else u[s]=n[s];
}
var c=o.apply(null,u);
if((!a||!a.async)&&"object"===typeof EmterpreterAsync)assert(!EmterpreterAsync.state,"cannot start async op with normal JS calling ccall");
if(a&&a.async)assert(!t,"async ccalls cannot return values");
if("string"===t)c=Pointer_stringify(c);
if(0!==f){
if(a&&a.async){
EmterpreterAsync.asyncFinalizers.push(function(){
Runtime.stackRestore(f);
});
return;
}
Runtime.stackRestore(f);
}
return c;
};
var sourceRegex=/^function\s*[a-zA-Z$_0-9]*\s*\(([^)]*)\)\s*{\s*([^*]*?)[\s;]*(?:return\s*(.*?)[;\s]*)?}$/;

function parseJSFunc(e){
var r=e.toString().match(sourceRegex).slice(1);
return{
arguments:r[0],
body:r[1],
returnValue:r[2]};

}
var JSsource=null;

function ensureJSsource(){
if(!JSsource){
JSsource={};
for(var e in JSfuncs){
if(JSfuncs.hasOwnProperty(e))JSsource[e]=parseJSFunc(JSfuncs[e]);}
}
}
cwrap=function cwrap(ident,returnType,argTypes){
argTypes=argTypes||[];
var cfunc=getCFunc(ident);
var numericArgs=argTypes.every(function(e){
return"number"===e;
});
var numericRet="string"!==returnType;
if(numericRet&&numericArgs)return cfunc;
var argNames=argTypes.map(function(e,r){
return"$"+r;
});
var funcstr="(function("+argNames.join(",")+") {";
var nargs=argTypes.length;
if(!numericArgs){
ensureJSsource();
funcstr+="var stack = "+JSsource["stackSave"].body+";";
for(var i=0;i<nargs;i++){
var arg=argNames[i],
type=argTypes[i];
if("number"===type)continue;
var convertCode=JSsource[type+"ToC"];
funcstr+="var "+convertCode.arguments+" = "+arg+";";
funcstr+=convertCode.body+";";
funcstr+=arg+"=("+convertCode.returnValue+");";
}
}
var cfuncname=parseJSFunc(function(){
return cfunc;
}).returnValue;
funcstr+="var ret = "+cfuncname+"("+argNames.join(",")+");";
if(!numericRet){
var strgfy=parseJSFunc(function(){
return Pointer_stringify;
}).returnValue;
funcstr+="ret = "+strgfy+"(ret);";
}
funcstr+="if (typeof EmterpreterAsync === 'object') { assert(!EmterpreterAsync.state, 'cannot start async op with normal JS calling cwrap') }";
if(!numericArgs){
ensureJSsource();
funcstr+=JSsource["stackRestore"].body.replace("()","(stack)")+";";
}
funcstr+="return ret})";
return eval(funcstr);
};
})();
Module["ccall"]=ccall;
Module["cwrap"]=cwrap;

function setValue(e,r,t,i){
t=t||"i8";
if("*"===t.charAt(t.length-1))t="i32";
switch(t){
case"i1":
HEAP8[e>>0]=r;
break;
case"i8":
HEAP8[e>>0]=r;
break;
case"i16":
HEAP16[e>>1]=r;
break;
case"i32":
HEAP32[e>>2]=r;
break;
case"i64":
tempI64=[r>>>0,(tempDouble=r,+Math_abs(tempDouble)>=1?tempDouble>0?(0|Math_min(+Math_floor(tempDouble/4294967296),4294967295))>>>0:~~+Math_ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[e>>2]=tempI64[0],HEAP32[e+4>>2]=tempI64[1];
break;
case"float":
HEAPF32[e>>2]=r;
break;
case"double":
HEAPF64[e>>3]=r;
break;
default:
abort("invalid type for setValue: "+t);}

}
Module["setValue"]=setValue;

function getValue(e,r,t){
r=r||"i8";
if("*"===r.charAt(r.length-1))r="i32";
switch(r){
case"i1":
return HEAP8[e>>0];
case"i8":
return HEAP8[e>>0];
case"i16":
return HEAP16[e>>1];
case"i32":
return HEAP32[e>>2];
case"i64":
return HEAP32[e>>2];
case"float":
return HEAPF32[e>>2];
case"double":
return HEAPF64[e>>3];
default:
abort("invalid type for setValue: "+r);}

return null;
}
Module["getValue"]=getValue;
var ALLOC_NORMAL=0;
var ALLOC_STACK=1;
var ALLOC_STATIC=2;
var ALLOC_DYNAMIC=3;
var ALLOC_NONE=4;
Module["ALLOC_NORMAL"]=ALLOC_NORMAL;
Module["ALLOC_STACK"]=ALLOC_STACK;
Module["ALLOC_STATIC"]=ALLOC_STATIC;
Module["ALLOC_DYNAMIC"]=ALLOC_DYNAMIC;
Module["ALLOC_NONE"]=ALLOC_NONE;

function allocate(e,r,t,i){
var n,a;
if("number"===typeof e){
n=true;
a=e;
}else{
n=false;
a=e.length;
}
var o="string"===typeof r?r:null;
var u;
if(t==ALLOC_NONE)u=i;else
u=["function"===typeof _malloc?_malloc:Runtime.staticAlloc,Runtime.stackAlloc,Runtime.staticAlloc,Runtime.dynamicAlloc][void 0===t?ALLOC_STATIC:t](Math.max(a,o?1:r.length));
if(n){
var i=u,
f;
assert(0==(3&u));
f=u+(~3&a);
for(;i<f;i+=4){HEAP32[i>>2]=0;}
f=u+a;
while(i<f){HEAP8[i++>>0]=0;}
return u;
}
if("i8"===o){
if(e.subarray||e.slice)HEAPU8.set(e,u);else
HEAPU8.set(new Uint8Array(e),u);
return u;
}
var s=0,
l,c,h;
while(s<a){
var d=e[s];
if("function"===typeof d)d=Runtime.getFunctionIndex(d);
l=o||r[s];
if(0===l){
s++;
continue;
}
assert(l,"Must know what type to store in allocate!");
if("i64"==l)l="i32";
setValue(u+s,d,l);
if(h!==l){
c=Runtime.getNativeTypeSize(l);
h=l;
}
s+=c;
}
return u;
}
Module["allocate"]=allocate;

function getMemory(e){
if(!staticSealed)return Runtime.staticAlloc(e);
if(!runtimeInitialized)return Runtime.dynamicAlloc(e);
return _malloc(e);
}
Module["getMemory"]=getMemory;

function Pointer_stringify(e,r){
if(0===r||!e)return"";
var t=0;
var i;
var n=0;
while(1){
assert(e+n<TOTAL_MEMORY);
i=HEAPU8[e+n>>0];
t|=i;
if(0==i&&!r)break;
n++;
if(r&&n==r)break;
}
if(!r)r=n;
var a="";
if(t<128){
var o=1024;
var u;
while(r>0){
u=String.fromCharCode.apply(String,HEAPU8.subarray(e,e+Math.min(r,o)));
a=a?a+u:u;
e+=o;
r-=o;
}
return a;
}
return Module["UTF8ToString"](e);
}
Module["Pointer_stringify"]=Pointer_stringify;

function AsciiToString(e){
var r="";
while(1){
var t=HEAP8[e++>>0];
if(!t)return r;
r+=String.fromCharCode(t);
}
}
Module["AsciiToString"]=AsciiToString;

function stringToAscii(e,r){
return writeAsciiToMemory(e,r,false);
}
Module["stringToAscii"]=stringToAscii;
var UTF8Decoder="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;

function UTF8ArrayToString(e,r){
var t=r;
while(e[t]){++t;}
if(t-r>16&&e.subarray&&UTF8Decoder)return UTF8Decoder.decode(e.subarray(r,t));else
{
var i,n,a,o,u,f;
var s="";
while(1){
i=e[r++];
if(!i)return s;
if(!(128&i)){
s+=String.fromCharCode(i);
continue;
}
n=63&e[r++];
if(192==(224&i)){
s+=String.fromCharCode((31&i)<<6|n);
continue;
}
a=63&e[r++];
if(224==(240&i))i=(15&i)<<12|n<<6|a;else
{
o=63&e[r++];
if(240==(248&i))i=(7&i)<<18|n<<12|a<<6|o;else
{
u=63&e[r++];
if(248==(252&i))i=(3&i)<<24|n<<18|a<<12|o<<6|u;else
{
f=63&e[r++];
i=(1&i)<<30|n<<24|a<<18|o<<12|u<<6|f;
}
}
}
if(i<65536)s+=String.fromCharCode(i);else
{
var l=i-65536;
s+=String.fromCharCode(55296|l>>10,56320|1023&l);
}
}
}
}
Module["UTF8ArrayToString"]=UTF8ArrayToString;

function UTF8ToString(e){
return UTF8ArrayToString(HEAPU8,e);
}
Module["UTF8ToString"]=UTF8ToString;

function stringToUTF8Array(e,r,t,i){
if(!(i>0))return 0;
var n=t;
var a=t+i-1;
for(var o=0;o<e.length;++o){
var u=e.charCodeAt(o);
if(u>=55296&&u<=57343)u=65536+((1023&u)<<10)|1023&e.charCodeAt(++o);
if(u<=127){
if(t>=a)break;
r[t++]=u;
}else if(u<=2047){
if(t+1>=a)break;
r[t++]=192|u>>6;
r[t++]=128|63&u;
}else if(u<=65535){
if(t+2>=a)break;
r[t++]=224|u>>12;
r[t++]=128|u>>6&63;
r[t++]=128|63&u;
}else if(u<=2097151){
if(t+3>=a)break;
r[t++]=240|u>>18;
r[t++]=128|u>>12&63;
r[t++]=128|u>>6&63;
r[t++]=128|63&u;
}else if(u<=67108863){
if(t+4>=a)break;
r[t++]=248|u>>24;
r[t++]=128|u>>18&63;
r[t++]=128|u>>12&63;
r[t++]=128|u>>6&63;
r[t++]=128|63&u;
}else{
if(t+5>=a)break;
r[t++]=252|u>>30;
r[t++]=128|u>>24&63;
r[t++]=128|u>>18&63;
r[t++]=128|u>>12&63;
r[t++]=128|u>>6&63;
r[t++]=128|63&u;
}
}
r[t]=0;
return t-n;
}
Module["stringToUTF8Array"]=stringToUTF8Array;

function stringToUTF8(e,r,t){
assert("number"==typeof t,"stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
return stringToUTF8Array(e,HEAPU8,r,t);
}
Module["stringToUTF8"]=stringToUTF8;

function lengthBytesUTF8(e){
var r=0;
for(var t=0;t<e.length;++t){
var i=e.charCodeAt(t);
if(i>=55296&&i<=57343)i=65536+((1023&i)<<10)|1023&e.charCodeAt(++t);
if(i<=127)++r;else
if(i<=2047)r+=2;else
if(i<=65535)r+=3;else
if(i<=2097151)r+=4;else
if(i<=67108863)r+=5;else
r+=6;
}
return r;
}
Module["lengthBytesUTF8"]=lengthBytesUTF8;
var UTF16Decoder="undefined"!==typeof TextDecoder?new TextDecoder("utf-16le"):void 0;

function demangle(e){
var r=Module["___cxa_demangle"]||Module["__cxa_demangle"];
if(r){
try{
var t=e.substr(1);
var i=lengthBytesUTF8(t)+1;
var n=_malloc(i);
stringToUTF8(t,n,i);
var a=_malloc(4);
var o=r(n,0,0,a);
if(0===getValue(a,"i32")&&o)return Pointer_stringify(o);
}catch(e){}finally{
if(n)_free(n);
if(a)_free(a);
if(o)_free(o);
}
return e;
}
Runtime.warnOnce("warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling");
return e;
}

function demangleAll(e){
var r=/__Z[\w\d_]+/g;
return e.replace(r,function(e){
var r=demangle(e);
return e===r?e:e+" ["+r+"]";
});
}

function jsStackTrace(){
var e=new Error();
if(!e.stack){
try{
throw new Error(0);
}catch(r){
e=r;
}
if(!e.stack)return"(no stack trace available)";
}
return e.stack.toString();
}

function stackTrace(){
var e=jsStackTrace();
if(Module["extraStackTrace"])e+="\n"+Module["extraStackTrace"]();
return demangleAll(e);
}
Module["stackTrace"]=stackTrace;
var HEAP,buffer,HEAP8,HEAPU8,HEAP16,HEAPU16,HEAP32,HEAPU32,HEAPF32,HEAPF64;

function updateGlobalBufferViews(){
Module["HEAP8"]=HEAP8=new Int8Array(buffer);
Module["HEAP16"]=HEAP16=new Int16Array(buffer);
Module["HEAP32"]=HEAP32=new Int32Array(buffer);
Module["HEAPU8"]=HEAPU8=new Uint8Array(buffer);
Module["HEAPU16"]=HEAPU16=new Uint16Array(buffer);
Module["HEAPU32"]=HEAPU32=new Uint32Array(buffer);
Module["HEAPF32"]=HEAPF32=new Float32Array(buffer);
Module["HEAPF64"]=HEAPF64=new Float64Array(buffer);
}
var STATIC_BASE,STATICTOP,staticSealed;
var STACK_BASE,STACKTOP,STACK_MAX;
var DYNAMIC_BASE,DYNAMICTOP_PTR;
STATIC_BASE=STATICTOP=STACK_BASE=STACKTOP=STACK_MAX=DYNAMIC_BASE=DYNAMICTOP_PTR=0;
staticSealed=false;

function writeStackCookie(){
assert(0==(3&STACK_MAX));
HEAPU32[(STACK_MAX>>2)-1]=34821223;
HEAPU32[(STACK_MAX>>2)-2]=2310721022;
}

function checkStackCookie(){
if(34821223!=HEAPU32[(STACK_MAX>>2)-1]||2310721022!=HEAPU32[(STACK_MAX>>2)-2])abort("Stack overflow! Stack cookie has been overwritten, expected hex dwords 0x89BACDFE and 0x02135467, but received 0x"+HEAPU32[(STACK_MAX>>2)-2].toString(16)+" "+HEAPU32[(STACK_MAX>>2)-1].toString(16));
if(1668509029!==HEAP32[0])throw"Runtime error: The application has corrupted its heap memory area (address zero)!";
}

function abortStackOverflow(e){
abort("Stack overflow! Attempted to allocate "+e+" bytes on the stack, but stack has only "+(STACK_MAX-Module["asm"].stackSave()+e)+" bytes available!");
}

function abortOnCannotGrowMemory(){
abort("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value "+TOTAL_MEMORY+", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime but prevents some optimizations, (3) set Module.TOTAL_MEMORY to a higher value before the program runs, or (4) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ");
}

function enlargeMemory(){
abortOnCannotGrowMemory();
}
var TOTAL_STACK=Module["TOTAL_STACK"]||5242880;
var TOTAL_MEMORY=Module["TOTAL_MEMORY"]||16777216;
if(TOTAL_MEMORY<TOTAL_STACK)Module.printErr("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+TOTAL_MEMORY+"! (TOTAL_STACK="+TOTAL_STACK+")");
assert("undefined"!==typeof Int32Array&&"undefined"!==typeof Float64Array&&void 0!==Int32Array.prototype.subarray&&void 0!==Int32Array.prototype.set,"JS engine does not provide full typed array support");
if(Module["buffer"]){
buffer=Module["buffer"];
assert(buffer.byteLength===TOTAL_MEMORY,"provided buffer should be "+TOTAL_MEMORY+" bytes, but it is "+buffer.byteLength);
}else{
buffer=new ArrayBuffer(TOTAL_MEMORY);
assert(buffer.byteLength===TOTAL_MEMORY);
}
updateGlobalBufferViews();

function getTotalMemory(){
return TOTAL_MEMORY;
}
HEAP32[0]=1668509029;
HEAP16[1]=25459;
if(115!==HEAPU8[2]||99!==HEAPU8[3])throw"Runtime error: expected the system to be little-endian!";
Module["HEAP"]=HEAP;
Module["buffer"]=buffer;
Module["HEAP8"]=HEAP8;
Module["HEAP16"]=HEAP16;
Module["HEAP32"]=HEAP32;
Module["HEAPU8"]=HEAPU8;
Module["HEAPU16"]=HEAPU16;
Module["HEAPU32"]=HEAPU32;
Module["HEAPF32"]=HEAPF32;
Module["HEAPF64"]=HEAPF64;

function callRuntimeCallbacks(e){
while(e.length>0){
var r=e.shift();
if("function"==typeof r){
r();
continue;
}
var t=r.func;
if("number"===typeof t){
if(void 0===r.arg)Module["dynCall_v"](t);else
Module["dynCall_vi"](t,r.arg);}else
t(void 0===r.arg?null:r.arg);
}
}
var __ATPRERUN__=[];
var __ATINIT__=[];
var __ATMAIN__=[];
var __ATEXIT__=[];
var __ATPOSTRUN__=[];
var runtimeInitialized=false;
var runtimeExited=false;

function preRun(){
if(Module["preRun"]){
if("function"==typeof Module["preRun"])Module["preRun"]=[Module["preRun"]];
while(Module["preRun"].length){addOnPreRun(Module["preRun"].shift());}
}
callRuntimeCallbacks(__ATPRERUN__);
}

function ensureInitRuntime(){
checkStackCookie();
if(runtimeInitialized)return;
runtimeInitialized=true;
callRuntimeCallbacks(__ATINIT__);
}

function preMain(){
checkStackCookie();
callRuntimeCallbacks(__ATMAIN__);
}

function exitRuntime(){
checkStackCookie();
callRuntimeCallbacks(__ATEXIT__);
runtimeExited=true;
}

function postRun(){
checkStackCookie();
if(Module["postRun"]){
if("function"==typeof Module["postRun"])Module["postRun"]=[Module["postRun"]];
while(Module["postRun"].length){addOnPostRun(Module["postRun"].shift());}
}
callRuntimeCallbacks(__ATPOSTRUN__);
}

function addOnPreRun(e){
__ATPRERUN__.unshift(e);
}
Module["addOnPreRun"]=addOnPreRun;

function addOnInit(e){
__ATINIT__.unshift(e);
}
Module["addOnInit"]=addOnInit;

function addOnPreMain(e){
__ATMAIN__.unshift(e);
}
Module["addOnPreMain"]=addOnPreMain;

function addOnExit(e){
__ATEXIT__.unshift(e);
}
Module["addOnExit"]=addOnExit;

function addOnPostRun(e){
__ATPOSTRUN__.unshift(e);
}
Module["addOnPostRun"]=addOnPostRun;

function intArrayFromString(e,r,t){
var i=t>0?t:lengthBytesUTF8(e)+1;
var n=new Array(i);
var a=stringToUTF8Array(e,n,0,n.length);
if(r)n.length=a;
return n;
}
Module["intArrayFromString"]=intArrayFromString;

function intArrayToString(e){
var r=[];
for(var t=0;t<e.length;t++){
var i=e[t];
if(i>255){
assert(false,"Character code "+i+" ("+String.fromCharCode(i)+")  at offset "+t+" not in 0x00-0xFF.");
i&=255;
}
r.push(String.fromCharCode(i));
}
return r.join("");
}
Module["intArrayToString"]=intArrayToString;

function writeStringToMemory(e,r,t){
Runtime.warnOnce("writeStringToMemory is deprecated and should not be called! Use stringToUTF8() instead!");
var i,n;
if(t){
n=r+lengthBytesUTF8(e);
i=HEAP8[n];
}
stringToUTF8(e,r,1/0);
if(t)HEAP8[n]=i;
}
Module["writeStringToMemory"]=writeStringToMemory;

function writeArrayToMemory(e,r){
assert(e.length>=0,"writeArrayToMemory array must have a length (should be an array or typed array)");
HEAP8.set(e,r);
}
Module["writeArrayToMemory"]=writeArrayToMemory;

function writeAsciiToMemory(e,r,t){
for(var i=0;i<e.length;++i){
assert(e.charCodeAt(i)===e.charCodeAt(i)&255);
HEAP8[r++>>0]=e.charCodeAt(i);
}
if(!t)HEAP8[r>>0]=0;
}
Module["writeAsciiToMemory"]=writeAsciiToMemory;
if(!Math["imul"]||-5!==Math["imul"](4294967295,5))Math["imul"]=function e(r,t){
var i=r>>>16;
var n=65535&r;
var a=t>>>16;
var o=65535&t;
return n*o+(i*o+n*a<<16)|0;
};
Math.imul=Math["imul"];
if(!Math["clz32"])Math["clz32"]=function(e){
e>>>=0;
for(var r=0;r<32;r++){
if(e&1<<31-r)return r;}
return 32;
};
Math.clz32=Math["clz32"];
if(!Math["trunc"])Math["trunc"]=function(e){
return e<0?Math.ceil(e):Math.floor(e);
};
Math.trunc=Math["trunc"];
var Math_abs=Math.abs;
var Math_ceil=Math.ceil;
var Math_floor=Math.floor;
var Math_min=Math.min;
var runDependencies=0;
var runDependencyWatcher=null;
var dependenciesFulfilled=null;
var runDependencyTracking={};

function addRunDependency(e){
runDependencies++;
if(Module["monitorRunDependencies"])Module["monitorRunDependencies"](runDependencies);
if(e){
assert(!runDependencyTracking[e]);
runDependencyTracking[e]=1;
if(null===runDependencyWatcher&&"undefined"!==typeof setInterval)runDependencyWatcher=setInterval(function(){
if(ABORT){
clearInterval(runDependencyWatcher);
runDependencyWatcher=null;
return;
}
var e=false;
for(var r in runDependencyTracking){
if(!e){
e=true;
Module.printErr("still waiting on run dependencies:");
}
Module.printErr("dependency: "+r);
}
if(e)Module.printErr("(end of list)");
},1e4);
}else Module.printErr("warning: run dependency added without ID");
}
Module["addRunDependency"]=addRunDependency;

function removeRunDependency(e){
runDependencies--;
if(Module["monitorRunDependencies"])Module["monitorRunDependencies"](runDependencies);
if(e){
assert(runDependencyTracking[e]);
delete runDependencyTracking[e];
}else Module.printErr("warning: run dependency removed without ID");
if(0==runDependencies){
if(null!==runDependencyWatcher){
clearInterval(runDependencyWatcher);
runDependencyWatcher=null;
}
if(dependenciesFulfilled){
var r=dependenciesFulfilled;
dependenciesFulfilled=null;
r();
}
}
}
Module["removeRunDependency"]=removeRunDependency;
Module["preloadedImages"]={};
Module["preloadedAudios"]={};
var FS={
error:function error(){
abort("Filesystem support (FS) was not included. The problem is that you are using files from JS, but files were not used from C/C++, so filesystem support was not auto-included. You can force-include filesystem support with  -s FORCE_FILESYSTEM=1");
},
init:function init(){
FS.error();
},
createDataFile:function createDataFile(){
FS.error();
},
createPreloadedFile:function createPreloadedFile(){
FS.error();
},
createLazyFile:function createLazyFile(){
FS.error();
},
open:function open(){
FS.error();
},
mkdev:function mkdev(){
FS.error();
},
registerDevice:function registerDevice(){
FS.error();
},
analyzePath:function analyzePath(){
FS.error();
},
loadFilesFromDB:function loadFilesFromDB(){
FS.error();
},
ErrnoError:function e(){
FS.error();
}};

Module["FS_createDataFile"]=FS.createDataFile;
Module["FS_createPreloadedFile"]=FS.createPreloadedFile;
STATIC_BASE=Runtime.GLOBAL_BASE;
STATICTOP=STATIC_BASE+5872;
__ATINIT__.push();
allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,18,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,3,0,0,0,233,18,0,0,0,4,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,255,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,252,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,141,1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145,57,114,228,211,189,97,194,159,37,74,148,51,102,204,131,29,58,116,232,203,141,1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145,57,114,228,211,189,97,194,159,37,74,148,51,102,204,131,29,58,116,232,203,141,1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145,57,114,228,211,189,97,194,159,37,74,148,51,102,204,131,29,58,116,232,203,141,1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145,57,114,228,211,189,97,194,159,37,74,148,51,102,204,131,29,58,116,232,203,141,1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145,57,114,228,211,189,97,194,159,37,74,148,51,102,204,131,29,58,116,232,203,99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22,82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125,128,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,62,0,0,0,63,52,53,54,55,56,57,58,59,60,61,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,0,0,0,0,0,0,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,107,51,52,98,98,103,98,107,106,34,49,102,52,107,101,37,48,50,88,0,96,55,51,52,98,99,103,98,107,106,54,49,101,52,97,101,49,107,48,54,54,97,106,48,100,98,49,52,49,96,49,101,84,33,34,25,13,1,2,3,17,75,28,12,16,4,11,29,18,30,39,104,110,111,112,113,98,32,5,6,15,19,20,21,26,8,22,7,40,36,23,24,9,10,14,27,31,37,35,131,130,125,38,42,43,60,61,62,63,67,71,74,77,88,89,90,91,92,93,94,95,96,97,99,100,101,102,103,105,106,107,108,114,115,116,121,122,123,124,0,73,108,108,101,103,97,108,32,98,121,116,101,32,115,101,113,117,101,110,99,101,0,68,111,109,97,105,110,32,101,114,114,111,114,0,82,101,115,117,108,116,32,110,111,116,32,114,101,112,114,101,115,101,110,116,97,98,108,101,0,78,111,116,32,97,32,116,116,121,0,80,101,114,109,105,115,115,105,111,110,32,100,101,110,105,101,100,0,79,112,101,114,97,116,105,111,110,32,110,111,116,32,112,101,114,109,105,116,116,101,100,0,78,111,32,115,117,99,104,32,102,105,108,101,32,111,114,32,100,105,114,101,99,116,111,114,121,0,78,111,32,115,117,99,104,32,112,114,111,99,101,115,115,0,70,105,108,101,32,101,120,105,115,116,115,0,86,97,108,117,101,32,116,111,111,32,108,97,114,103,101,32,102,111,114,32,100,97,116,97,32,116,121,112,101,0,78,111,32,115,112,97,99,101,32,108,101,102,116,32,111,110,32,100,101,118,105,99,101,0,79,117,116,32,111,102,32,109,101,109,111,114,121,0,82,101,115,111,117,114,99,101,32,98,117,115,121,0,73,110,116,101,114,114,117,112,116,101,100,32,115,121,115,116,101,109,32,99,97,108,108,0,82,101,115,111,117,114,99,101,32,116,101,109,112,111,114,97,114,105,108,121,32,117,110,97,118,97,105,108,97,98,108,101,0,73,110,118,97,108,105,100,32,115,101,101,107,0,67,114,111,115,115,45,100,101,118,105,99,101,32,108,105,110,107,0,82,101,97,100,45,111,110,108,121,32,102,105,108,101,32,115,121,115,116,101,109,0,68,105,114,101,99,116,111,114,121,32,110,111,116,32,101,109,112,116,121,0,67,111,110,110,101,99,116,105,111,110,32,114,101,115,101,116,32,98,121,32,112,101,101,114,0,79,112,101,114,97,116,105,111,110,32,116,105,109,101,100,32,111,117,116,0,67,111,110,110,101,99,116,105,111,110,32,114,101,102,117,115,101,100,0,72,111,115,116,32,105,115,32,100,111,119,110,0,72,111,115,116,32,105,115,32,117,110,114,101,97,99,104,97,98,108,101,0,65,100,100,114,101,115,115,32,105,110,32,117,115,101,0,66,114,111,107,101,110,32,112,105,112,101,0,73,47,79,32,101,114,114,111,114,0,78,111,32,115,117,99,104,32,100,101,118,105,99,101,32,111,114,32,97,100,100,114,101,115,115,0,66,108,111,99,107,32,100,101,118,105,99,101,32,114,101,113,117,105,114,101,100,0,78,111,32,115,117,99,104,32,100,101,118,105,99,101,0,78,111,116,32,97,32,100,105,114,101,99,116,111,114,121,0,73,115,32,97,32,100,105,114,101,99,116,111,114,121,0,84,101,120,116,32,102,105,108,101,32,98,117,115,121,0,69,120,101,99,32,102,111,114,109,97,116,32,101,114,114,111,114,0,73,110,118,97,108,105,100,32,97,114,103,117,109,101,110,116,0,65,114,103,117,109,101,110,116,32,108,105,115,116,32,116,111,111,32,108,111,110,103,0,83,121,109,98,111,108,105,99,32,108,105,110,107,32,108,111,111,112,0,70,105,108,101,110,97,109,101,32,116,111,111,32,108,111,110,103,0,84,111,111,32,109,97,110,121,32,111,112,101,110,32,102,105,108,101,115,32,105,110,32,115,121,115,116,101,109,0,78,111,32,102,105,108,101,32,100,101,115,99,114,105,112,116,111,114,115,32,97,118,97,105,108,97,98,108,101,0,66,97,100,32,102,105,108,101,32,100,101,115,99,114,105,112,116,111,114,0,78,111,32,99,104,105,108,100,32,112,114,111,99,101,115,115,0,66,97,100,32,97,100,100,114,101,115,115,0,70,105,108,101,32,116,111,111,32,108,97,114,103,101,0,84,111,111,32,109,97,110,121,32,108,105,110,107,115,0,78,111,32,108,111,99,107,115,32,97,118,97,105,108,97,98,108,101,0,82,101,115,111,117,114,99,101,32,100,101,97,100,108,111,99,107,32,119,111,117,108,100,32,111,99,99,117,114,0,83,116,97,116,101,32,110,111,116,32,114,101,99,111,118,101,114,97,98,108,101,0,80,114,101,118,105,111,117,115,32,111,119,110,101,114,32,100,105,101,100,0,79,112,101,114,97,116,105,111,110,32,99,97,110,99,101,108,101,100,0,70,117,110,99,116,105,111,110,32,110,111,116,32,105,109,112,108,101,109,101,110,116,101,100,0,78,111,32,109,101,115,115,97,103,101,32,111,102,32,100,101,115,105,114,101,100,32,116,121,112,101,0,73,100,101,110,116,105,102,105,101,114,32,114,101,109,111,118,101,100,0,68,101,118,105,99,101,32,110,111,116,32,97,32,115,116,114,101,97,109,0,78,111,32,100,97,116,97,32,97,118,97,105,108,97,98,108,101,0,68,101,118,105,99,101,32,116,105,109,101,111,117,116,0,79,117,116,32,111,102,32,115,116,114,101,97,109,115,32,114,101,115,111,117,114,99,101,115,0,76,105,110,107,32,104,97,115,32,98,101,101,110,32,115,101,118,101,114,101,100,0,80,114,111,116,111,99,111,108,32,101,114,114,111,114,0,66,97,100,32,109,101,115,115,97,103,101,0,70,105,108,101,32,100,101,115,99,114,105,112,116,111,114,32,105,110,32,98,97,100,32,115,116,97,116,101,0,78,111,116,32,97,32,115,111,99,107,101,116,0,68,101,115,116,105,110,97,116,105,111,110,32,97,100,100,114,101,115,115,32,114,101,113,117,105,114,101,100,0,77,101,115,115,97,103,101,32,116,111,111,32,108,97,114,103,101,0,80,114,111,116,111,99,111,108,32,119,114,111,110,103,32,116,121,112,101,32,102,111,114,32,115,111,99,107,101,116,0,80,114,111,116,111,99,111,108,32,110,111,116,32,97,118,97,105,108,97,98,108,101,0,80,114,111,116,111,99,111,108,32,110,111,116,32,115,117,112,112,111,114,116,101,100,0,83,111,99,107,101,116,32,116,121,112,101,32,110,111,116,32,115,117,112,112,111,114,116,101,100,0,78,111,116,32,115,117,112,112,111,114,116,101,100,0,80,114,111,116,111,99,111,108,32,102,97,109,105,108,121,32,110,111,116,32,115,117,112,112,111,114,116,101,100,0,65,100,100,114,101,115,115,32,102,97,109,105,108,121,32,110,111,116,32,115,117,112,112,111,114,116,101,100,32,98,121,32,112,114,111,116,111,99,111,108,0,65,100,100,114,101,115,115,32,110,111,116,32,97,118,97,105,108,97,98,108,101,0,78,101,116,119,111,114,107,32,105,115,32,100,111,119,110,0,78,101,116,119,111,114,107,32,117,110,114,101,97,99,104,97,98,108,101,0,67,111,110,110,101,99,116,105,111,110,32,114,101,115,101,116,32,98,121,32,110,101,116,119,111,114,107,0,67,111,110,110,101,99,116,105,111,110,32,97,98,111,114,116,101,100,0,78,111,32,98,117,102,102,101,114,32,115,112,97,99,101,32,97,118,97,105,108,97,98,108,101,0,83,111,99,107,101,116,32,105,115,32,99,111,110,110,101,99,116,101,100,0,83,111,99,107,101,116,32,110,111,116,32,99,111,110,110,101,99,116,101,100,0,67,97,110,110,111,116,32,115,101,110,100,32,97,102,116,101,114,32,115,111,99,107,101,116,32,115,104,117,116,100,111,119,110,0,79,112,101,114,97,116,105,111,110,32,97,108,114,101,97,100,121,32,105,110,32,112,114,111,103,114,101,115,115,0,79,112,101,114,97,116,105,111,110,32,105,110,32,112,114,111,103,114,101,115,115,0,83,116,97,108,101,32,102,105,108,101,32,104,97,110,100,108,101,0,82,101,109,111,116,101,32,73,47,79,32,101,114,114,111,114,0,81,117,111,116,97,32,101,120,99,101,101,100,101,100,0,78,111,32,109,101,100,105,117,109,32,102,111,117,110,100,0,87,114,111,110,103,32,109,101,100,105,117,109,32,116,121,112,101,0,78,111,32,101,114,114,111,114,32,105,110,102,111,114,109,97,116,105,111,110,0,0,17,0,10,0,17,17,17,0,0,0,0,5,0,0,0,0,0,0,9,0,0,0,0,11,0,0,0,0,0,0,0,0,17,0,15,10,17,17,17,3,10,7,0,1,19,9,11,11,0,0,9,6,11,0,0,11,0,6,17,0,0,0,17,17,17,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,17,0,10,10,17,17,17,0,10,0,0,2,0,9,11,0,0,0,9,0,11,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,12,0,0,0,0,9,12,0,0,0,0,0,12,0,0,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,4,13,0,0,0,0,9,14,0,0,0,0,0,14,0,0,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,15,0,0,0,0,15,0,0,0,0,9,16,0,0,0,0,0,16,0,0,16,0,0,18,0,0,0,18,18,18,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,18,0,0,0,18,18,18,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,0,10,0,0,0,0,9,11,0,0,0,0,0,11,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,12,0,0,0,0,9,12,0,0,0,0,0,12,0,0,12,0,0,45,43,32,32,32,48,88,48,120,0,40,110,117,108,108,41,0,45,48,88,43,48,88,32,48,88,45,48,120,43,48,120,32,48,120,0,105,110,102,0,73,78,70,0,110,97,110,0,78,65,78,0,48,49,50,51,52,53,54,55,56,57,65,66,67,68,69,70,46,0],"i8",ALLOC_NONE,Runtime.GLOBAL_BASE);
var tempDoublePtr=STATICTOP;
STATICTOP+=16;
assert(tempDoublePtr%8==0);

function ___lock(){}

function ___unlock(){}
var SYSCALLS={
varargs:0,
get:function get(e){
SYSCALLS.varargs+=4;
var r=HEAP32[SYSCALLS.varargs-4>>2];
return r;
},
getStr:function getStr(){
var e=Pointer_stringify(SYSCALLS.get());
return e;
},
get64:function get64(){
var e=SYSCALLS.get(),
r=SYSCALLS.get();
if(e>=0)assert(0===r);else
assert(-1===r);
return e;
},
getZero:function getZero(){
assert(0===SYSCALLS.get());
}};


function ___syscall6(e,r){
SYSCALLS.varargs=r;
try{
var t=SYSCALLS.getStreamFromFD();
FS.close(t);
return 0;
}catch(e){
if("undefined"===typeof FS||!(e instanceof FS.ErrnoError))abort(e);
return-e.errno;
}
}
var cttz_i8=allocate([8,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,6,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,7,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,6,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0],"i8",ALLOC_STATIC);

function ___setErrNo(e){
if(Module["___errno_location"])HEAP32[Module["___errno_location"]()>>2]=e;else
Module.printErr("failed to set errno from JS");
return e;
}

function _emscripten_memcpy_big(e,r,t){
HEAPU8.set(HEAPU8.subarray(r,r+t),e);
return e;
}

function ___syscall140(e,r){
SYSCALLS.varargs=r;
try{
var t=SYSCALLS.getStreamFromFD(),
i=SYSCALLS.get(),
n=SYSCALLS.get(),
a=SYSCALLS.get(),
o=SYSCALLS.get();
var u=n;
FS.llseek(t,u,o);
HEAP32[a>>2]=t.position;
if(t.getdents&&0===u&&0===o)t.getdents=null;
return 0;
}catch(e){
if("undefined"===typeof FS||!(e instanceof FS.ErrnoError))abort(e);
return-e.errno;
}
}

function ___syscall146(e,r){
SYSCALLS.varargs=r;
try{
var t=SYSCALLS.get(),
i=SYSCALLS.get(),
n=SYSCALLS.get();
var a=0;
if(!___syscall146.buffer){
___syscall146.buffers=[null,[],
[]];

___syscall146.printChar=function(e,r){
var t=___syscall146.buffers[e];
assert(t);
if(0===r||10===r){
(1===e?Module["print"]:Module["printErr"])(UTF8ArrayToString(t,0));
t.length=0;
}else t.push(r);
};
}
for(var o=0;o<n;o++){
var u=HEAP32[i+8*o>>2];
var f=HEAP32[i+(8*o+4)>>2];
for(var s=0;s<f;s++){___syscall146.printChar(t,HEAPU8[u+s]);}
a+=f;
}
return a;
}catch(e){
if("undefined"===typeof FS||!(e instanceof FS.ErrnoError))abort(e);
return-e.errno;
}
}

function ___syscall54(e,r){
SYSCALLS.varargs=r;
try{
return 0;
}catch(e){
if("undefined"===typeof FS||!(e instanceof FS.ErrnoError))abort(e);
return-e.errno;
}
}
__ATEXIT__.push(function(){
var e=Module["_fflush"];
if(e)e(0);
var r=___syscall146.printChar;
if(!r)return;
var t=___syscall146.buffers;
if(t[1].length)r(1,10);
if(t[2].length)r(2,10);
});
DYNAMICTOP_PTR=allocate(1,"i32",ALLOC_STATIC);
STACK_BASE=STACKTOP=Runtime.alignMemory(STATICTOP);
STACK_MAX=STACK_BASE+TOTAL_STACK;
DYNAMIC_BASE=Runtime.alignMemory(STACK_MAX);
HEAP32[DYNAMICTOP_PTR>>2]=DYNAMIC_BASE;
staticSealed=true;
assert(DYNAMIC_BASE<TOTAL_MEMORY,"TOTAL_MEMORY not big enough for stack");

function nullFunc_ii(e){
Module["printErr"]("Invalid function pointer called with signature 'ii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");
Module["printErr"]("Build with ASSERTIONS=2 for more info.");
abort(e);
}

function nullFunc_iiii(e){
Module["printErr"]("Invalid function pointer called with signature 'iiii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");
Module["printErr"]("Build with ASSERTIONS=2 for more info.");
abort(e);
}

function invoke_ii(e,r){
try{
return Module["dynCall_ii"](e,r);
}catch(e){
if("number"!==typeof e&&"longjmp"!==e)throw e;
Module["setThrew"](1,0);
}
}

function invoke_iiii(e,r,t,i){
try{
return Module["dynCall_iiii"](e,r,t,i);
}catch(e){
if("number"!==typeof e&&"longjmp"!==e)throw e;
Module["setThrew"](1,0);
}
}
Module.asmGlobalArg={
Math:Math,
Int8Array:Int8Array,
Int16Array:Int16Array,
Int32Array:Int32Array,
Uint8Array:Uint8Array,
Uint16Array:Uint16Array,
Uint32Array:Uint32Array,
Float32Array:Float32Array,
Float64Array:Float64Array,
NaN:NaN,
Infinity:1/0};

Module.asmLibraryArg={
abort:abort,
assert:assert,
enlargeMemory:enlargeMemory,
getTotalMemory:getTotalMemory,
abortOnCannotGrowMemory:abortOnCannotGrowMemory,
abortStackOverflow:abortStackOverflow,
nullFunc_ii:nullFunc_ii,
nullFunc_iiii:nullFunc_iiii,
invoke_ii:invoke_ii,
invoke_iiii:invoke_iiii,
___lock:___lock,
___syscall6:___syscall6,
___setErrNo:___setErrNo,
___syscall140:___syscall140,
_emscripten_memcpy_big:_emscripten_memcpy_big,
___syscall54:___syscall54,
___unlock:___unlock,
___syscall146:___syscall146,
DYNAMICTOP_PTR:DYNAMICTOP_PTR,
tempDoublePtr:tempDoublePtr,
ABORT:ABORT,
STACKTOP:STACKTOP,
STACK_MAX:STACK_MAX,
cttz_i8:cttz_i8};

var asm=function(global,e,r){
"almost asm";
var t=new global.Int8Array(r);
var i=new global.Int16Array(r);
var n=new global.Int32Array(r);
var a=new global.Uint8Array(r);
var o=new global.Uint16Array(r);
var u=new global.Uint32Array(r);
var f=new global.Float32Array(r);
var s=new global.Float64Array(r);
var l=0|e.DYNAMICTOP_PTR;
var c=0|e.tempDoublePtr;
var h=0|e.ABORT;
var d=0|e.STACKTOP;
var v=0|e.STACK_MAX;
var p=0|e.cttz_i8;
var _=global.NaN,
m=global.Infinity;
var y=0;
var g=global.Math.floor;
var b=global.Math.abs;
var w=global.Math.sqrt;
var A=global.Math.pow;
var T=global.Math.cos;
var E=global.Math.sin;
var M=global.Math.tan;
var k=global.Math.acos;
var S=global.Math.asin;
var R=global.Math.atan;
var I=global.Math.atan2;
var O=global.Math.exp;
var P=global.Math.log;
var B=global.Math.ceil;
var C=global.Math.imul;
var L=global.Math.min;
var N=global.Math.max;
var x=global.Math.clz32;
var U=e.abort;
var F=e.assert;
var D=e.enlargeMemory;
var Y=e.getTotalMemory;
var H=e.abortOnCannotGrowMemory;
var j=e.abortStackOverflow;
var W=e.nullFunc_ii;
var z=e.nullFunc_iiii;
var V=e.invoke_ii;
var K=e.invoke_iiii;
var X=e.___lock;
var G=e.___syscall6;
var J=e.___setErrNo;
var $=e.___syscall140;
var q=e._emscripten_memcpy_big;
var Z=e.___syscall54;
var Q=e.___unlock;
var ee=e.___syscall146;

function re(e){
e|=0;
var r=0;
r=d;
d=d+e|0;
d=d+15&-16;
if((0|d)>=(0|v))j(0|e);
return 0|r;
}

function te(){
return 0|d;
}

function ie(e){
e|=0;
d=e;
}

function ne(e,r){
e|=0;
r|=0;
d=e;
v=r;
}

function ae(e,r){}

function oe(e){
e|=0;
y=e;
}

function ue(){
return 0|y;
}

function fe(e,r){
e|=0;
r|=0;
var i=0,
n=0,
a=0,
o=0,
u=0,
f=0,
s=0,
l=0,
c=0,
h=0,
p=0,
_=0,
m=0,
y=0,
g=0,
b=0,
w=0,
A=0;
A=d;
d=d+16|0;
if((0|d)>=(0|v))j(16|0);
h=e;
p=r;
_=0;
while(1){
m=_;
y=255&m;
g=(0|y)<16;
if(!g)break;
b=p;
w=_;
i=255&w;
n=b+i|0;
a=0|t[n>>0];
o=h;
u=_;
f=255&u;
s=o+f|0;
t[s>>0]=a;
l=_;
c=l+1<<24>>24;
_=c;
}
d=A;
return;
}

function se(){
var e=0,
r=0,
i=0,
a=0,
o=0,
u=0,
f=0,
s=0,
l=0,
c=0,
h=0,
p=0,
_=0,
m=0,
y=0,
g=0,
b=0,
w=0,
A=0,
T=0;
var E=0,
M=0,
k=0,
S=0,
R=0,
I=0,
O=0,
P=0,
B=0,
C=0,
L=0,
N=0,
x=0,
U=0,
F=0,
D=0,
Y=0,
H=0,
W=0,
z=0;
var V=0,
K=0,
X=0,
G=0,
J=0,
$=0,
q=0,
Z=0,
Q=0,
ee=0,
re=0,
te=0,
ie=0,
ne=0,
ae=0,
oe=0,
ue=0,
fe=0,
se=0,
le=0;
var ce=0,
he=0,
ve=0,
pe=0,
_e=0,
me=0,
ye=0,
ge=0,
be=0,
we=0,
Ae=0,
Te=0,
Ee=0,
Me=0,
ke=0,
Se=0,
Re=0,
Ie=0,
Oe=0,
Pe=0;
var Be=0,
Ce=0,
Le=0,
Ne=0,
xe=0,
Ue=0,
Fe=0,
De=0,
Ye=0,
He=0,
je=0,
We=0,
ze=0,
Ve=0,
Ke=0,
Xe=0,
Ge=0,
Je=0,
$e=0,
qe=0;
var Ze=0,
Qe=0,
er=0,
rr=0,
tr=0,
ir=0,
nr=0,
ar=0,
or=0,
ur=0,
fr=0,
sr=0,
lr=0,
cr=0,
hr=0,
dr=0,
vr=0,
pr=0,
_r=0,
mr=0;
var yr=0,
gr=0,
br=0,
wr=0,
Ar=0,
Tr=0,
Er=0,
Mr=0,
kr=0,
Sr=0,
Rr=0,
Ir=0,
Or=0,
Pr=0,
Br=0,
Cr=0,
Lr=0,
Nr=0,
xr=0,
Ur=0;
var Fr=0,
Dr=0,
Yr=0,
Hr=0,
jr=0,
Wr=0,
zr=0,
Vr=0,
Kr=0,
Xr=0,
Gr=0,
Jr=0,
$r=0,
qr=0,
Zr=0,
Qr=0,
et=0,
rt=0,
tt=0,
it=0;
var nt=0,
at=0,
ot=0,
ut=0,
ft=0,
st=0,
lt=0;
lt=d;
d=d+16|0;
if((0|d)>=(0|v))j(16|0);
He=lt+12|0;
e=0;
while(1){
Ze=e;
sr=Ze>>>0<4;
if(!sr)break;
br=0|n[1019];
Pr=e;
jr=Pr<<2;
Qr=jr+0|0;
i=br+Qr|0;
m=0|t[i>>0];
R=e;
D=R<<2;
q=D+0|0;
fe=4656+q|0;
t[fe>>0]=m;
be=0|n[1019];
Se=e;
Re=Se<<2;
Ie=Re+1|0;
Pe=be+Ie|0;
Be=0|t[Pe>>0];
Ce=e;
Le=Ce<<2;
Ne=Le+1|0;
xe=4656+Ne|0;
t[xe>>0]=Be;
Ue=0|n[1019];
Fe=e;
De=Fe<<2;
Ye=De+2|0;
je=Ue+Ye|0;
We=0|t[je>>0];
ze=e;
Ve=ze<<2;
Ke=Ve+2|0;
Xe=4656+Ke|0;
t[Xe>>0]=We;
Ge=0|n[1019];
Je=e;
$e=Je<<2;
qe=$e+3|0;
Qe=Ge+qe|0;
er=0|t[Qe>>0];
rr=e;
tr=rr<<2;
ir=tr+3|0;
nr=4656+ir|0;
t[nr>>0]=er;
ar=e;
or=ar+1|0;
e=or;
}
while(1){
ur=e;
fr=ur>>>0<44;
if(!fr)break;
r=0;
while(1){
lr=r;
cr=lr>>>0<4;
hr=e;
if(!cr)break;
dr=hr-1|0;
vr=dr<<2;
pr=r;
_r=vr+pr|0;
mr=4656+_r|0;
yr=0|t[mr>>0];
gr=r;
wr=He+gr|0;
t[wr>>0]=yr;
Ar=r;
Tr=Ar+1|0;
r=Tr;
}
Er=(hr>>>0)%4&-1;
Mr=0==(0|Er);
if(Mr){
kr=0|t[He>>0];
Sr=255&kr;
Oe=Sr;
Rr=He+1|0;
Ir=0|t[Rr>>0];
t[He>>0]=Ir;
Or=He+2|0;
Br=0|t[Or>>0];
Cr=He+1|0;
t[Cr>>0]=Br;
Lr=He+3|0;
Nr=0|t[Lr>>0];
xr=He+2|0;
t[xr>>0]=Nr;
Ur=Oe;
Fr=255&Ur;
Dr=He+3|0;
t[Dr>>0]=Fr;
Yr=0|t[He>>0];
Hr=0|de(Yr);
t[He>>0]=Hr;
Wr=He+1|0;
zr=0|t[Wr>>0];
Vr=0|de(zr);
Kr=He+1|0;
t[Kr>>0]=Vr;
Xr=He+2|0;
Gr=0|t[Xr>>0];
Jr=0|de(Gr);
$r=He+2|0;
t[$r>>0]=Jr;
qr=He+3|0;
Zr=0|t[qr>>0];
et=0|de(Zr);
rt=He+3|0;
t[rt>>0]=et;
tt=0|t[He>>0];
it=255&tt;
nt=e;
at=(nt>>>0)/4&-1;
ot=504+at|0;
ut=0|t[ot>>0];
ft=255&ut;
st=it^ft;
a=255&st;
t[He>>0]=a;
}
o=e;
u=o-4|0;
f=u<<2;
s=f+0|0;
l=4656+s|0;
c=0|t[l>>0];
h=255&c;
p=0|t[He>>0];
_=255&p;
y=h^_;
g=255&y;
b=e;
w=b<<2;
A=w+0|0;
T=4656+A|0;
t[T>>0]=g;
E=e;
M=E-4|0;
k=M<<2;
S=k+1|0;
I=4656+S|0;
O=0|t[I>>0];
P=255&O;
B=He+1|0;
C=0|t[B>>0];
L=255&C;
N=P^L;
x=255&N;
U=e;
F=U<<2;
Y=F+1|0;
H=4656+Y|0;
t[H>>0]=x;
W=e;
z=W-4|0;
V=z<<2;
K=V+2|0;
X=4656+K|0;
G=0|t[X>>0];
J=255&G;
$=He+2|0;
Z=0|t[$>>0];
Q=255&Z;
ee=J^Q;
re=255&ee;
te=e;
ie=te<<2;
ne=ie+2|0;
ae=4656+ne|0;
t[ae>>0]=re;
oe=e;
ue=oe-4|0;
se=ue<<2;
le=se+3|0;
ce=4656+le|0;
he=0|t[ce>>0];
ve=255&he;
pe=He+3|0;
_e=0|t[pe>>0];
me=255&_e;
ye=ve^me;
ge=255&ye;
we=e;
Ae=we<<2;
Te=Ae+3|0;
Ee=4656+Te|0;
t[Ee>>0]=ge;
Me=e;
ke=Me+1|0;
e=ke;
}
d=lt;
return;
}

function le(){
var e=0,
r=0,
t=0,
i=0,
n=0,
a=0,
o=0,
u=0;
u=d;
d=d+16|0;
if((0|d)>=(0|v))j(16|0);
e=0;
ve(10);
e=9;
while(1){
r=e;
t=255&r;
i=(0|t)>0;
_e();
me();
if(!i)break;
n=e;
ve(n);
ye();
a=e;
o=a+-1<<24>>24;
e=o;
}
ve(0);
d=u;
return;
}

function ce(e){
e|=0;
var r=0,
i=0,
a=0,
o=0,
u=0,
f=0,
s=0,
l=0,
c=0,
h=0,
p=0,
_=0,
m=0,
y=0,
g=0,
b=0,
w=0,
A=0,
T=0,
E=0;
var M=0,
k=0;
k=d;
d=d+16|0;
if((0|d)>=(0|v))j(16|0);
r=e;
_=0;
while(1){
g=_;
b=255&g;
w=(0|b)<16;
if(!w)break;
A=0|n[1020];
T=_;
E=255&T;
M=A+E|0;
i=0|t[M>>0];
a=255&i;
o=r;
u=_;
f=255&u;
s=o+f|0;
l=0|t[s>>0];
c=255&l;
h=c^a;
p=255&h;
t[s>>0]=p;
m=_;
y=m+1<<24>>24;
_=y;
}
d=k;
return;
}

function he(e,r,t,i,a){
e|=0;
r|=0;
t|=0;
i|=0;
a|=0;
var o=0,
u=0,
f=0,
s=0,
l=0,
c=0,
h=0,
p=0,
_=0,
m=0,
y=0,
g=0,
b=0,
w=0,
A=0,
T=0,
E=0,
M=0,
k=0,
S=0;
var R=0,
I=0,
O=0,
P=0,
B=0,
C=0,
L=0,
N=0,
x=0,
U=0,
F=0,
D=0,
Y=0,
H=0,
W=0,
z=0,
V=0,
K=0,
X=0,
G=0;
var J=0,
$=0,
q=0,
Z=0,
Q=0,
ee=0;
ee=d;
d=d+32|0;
if((0|d)>=(0|v))j(32|0);
J=e;
$=r;
q=t;
Z=i;
Q=a;
f=q;
s=(f>>>0)%16&-1;
l=255&s;
u=l;
c=J;
h=$;
fe(c,h);
p=J;
n[1018]=p;
_=Z;
m=(0|0)!=(0|_);
if(m){
y=Z;
n[1019]=y;
se();
}
g=Q;
b=(0|g)!=(0|0);
if(b){
w=Q;
n[1020]=w;
}
o=0;
while(1){
A=o;
T=q;
E=A>>>0<T>>>0;
if(!E)break;
M=J;
k=$;
fe(M,k);
S=J;
n[1018]=S;
le();
R=J;
ce(R);
I=$;
n[1020]=I;
O=$;
P=O+16|0;
$=P;
B=J;
C=B+16|0;
J=C;
L=o;
N=L+16|0;
o=N;
}
x=u;
U=x<<24>>24!=0;
if(!U){
d=ee;
return;
}
F=J;
D=$;
fe(F,D);
Y=J;
H=u;
W=255&H;
z=Y+W|0;
V=u;
K=255&V;
X=16-K|0;
0|Ir(0|z,0,0|X);
G=J;
n[1018]=G;
le();
d=ee;
return;
}

function de(e){
e|=0;
var r=0,
i=0,
n=0,
a=0,
o=0,
u=0;
u=d;
d=d+16|0;
if((0|d)>=(0|v))j(16|0);
r=e;
i=r;
n=255&i;
a=759+n|0;
o=0|t[a>>0];
d=u;
return 0|o;
}

function ve(e){
e|=0;
var r=0,
i=0,
a=0,
o=0,
u=0,
f=0,
s=0,
l=0,
c=0,
h=0,
p=0,
_=0,
m=0,
y=0,
g=0,
b=0,
w=0,
A=0,
T=0,
E=0;
var M=0,
k=0,
S=0,
R=0,
I=0,
O=0,
P=0,
B=0,
C=0,
L=0,
N=0,
x=0,
U=0,
F=0,
D=0,
Y=0,
H=0,
W=0,
z=0;
z=d;
d=d+16|0;
if((0|d)>=(0|v))j(16|0);
r=e;
_=0;
while(1){
U=_;
F=255&U;
D=(0|F)<4;
if(!D)break;
S=0;
while(1){
Y=S;
H=255&Y;
W=(0|H)<4;
if(!W)break;
i=r;
a=255&i;
o=a<<2;
u=o<<2;
f=_;
s=255&f;
l=s<<2;
c=u+l|0;
h=S;
p=255&h;
m=c+p|0;
y=4656+m|0;
g=0|t[y>>0];
b=255&g;
w=0|n[1018];
A=_;
T=255&A;
E=w+(T<<2)|0;
M=S;
k=255&M;
R=E+k|0;
I=0|t[R>>0];
O=255&I;
P=O^b;
B=255&P;
t[R>>0]=B;
C=S;
L=C+1<<24>>24;
S=L;
}
N=_;
x=N+1<<24>>24;
_=x;
}
d=z;
return;
}

function pe(e){
e|=0;
var r=0,
t=0,
i=0,
n=0,
a=0,
o=0,
u=0,
f=0,
s=0,
l=0,
c=0,
h=0;
h=d;
d=d+16|0;
if((0|d)>=(0|v))j(16|0);
r=e;
n=r;
a=255&n;
o=a<<1;
u=r;
f=255&u;
s=f>>7;
l=1&s;
c=27*l|0;
t=o^c;
i=255&t;
d=h;
return 0|i;
}

function _e(){
var e=0,
r=0,
i=0,
a=0,
o=0,
u=0,
f=0,
s=0,
l=0,
c=0,
h=0,
p=0,
_=0,
m=0,
y=0,
g=0,
b=0,
w=0,
A=0,
T=0;
var E=0,
M=0,
k=0,
S=0,
R=0,
I=0,
O=0,
P=0,
B=0,
C=0,
L=0,
N=0,
x=0,
U=0,
F=0,
D=0,
Y=0,
H=0,
W=0,
z=0;
var V=0,
K=0,
X=0,
G=0,
J=0,
$=0,
q=0,
Z=0,
Q=0,
ee=0,
re=0,
te=0,
ie=0,
ne=0,
ae=0,
oe=0,
ue=0,
fe=0,
se=0,
le=0;
var ce=0,
he=0,
de=0,
ve=0,
pe=0,
_e=0,
me=0,
ye=0,
ge=0,
be=0,
we=0,
Ae=0,
Te=0,
Ee=0,
Me=0,
ke=0,
Se=0,
Re=0,
Ie=0,
Oe=0;
var Pe=0,
Be=0,
Ce=0,
Le=0;
Le=d;
d=d+16|0;
if((0|d)>=(0|v))j(16|0);
r=0|n[1018];
_=r+12|0;
S=_+1|0;
F=0|t[S>>0];
e=F;
$=0|n[1018];
ue=$+8|0;
ye=ue+1|0;
Ie=0|t[ye>>0];
Ce=0|n[1018];
i=Ce+12|0;
a=i+1|0;
t[a>>0]=Ie;
o=0|n[1018];
u=o+4|0;
f=u+1|0;
s=0|t[f>>0];
l=0|n[1018];
c=l+8|0;
h=c+1|0;
t[h>>0]=s;
p=0|n[1018];
m=p+1|0;
y=0|t[m>>0];
g=0|n[1018];
b=g+4|0;
w=b+1|0;
t[w>>0]=y;
A=e;
T=0|n[1018];
E=T+1|0;
t[E>>0]=A;
M=0|n[1018];
k=M+2|0;
R=0|t[k>>0];
e=R;
I=0|n[1018];
O=I+8|0;
P=O+2|0;
B=0|t[P>>0];
C=0|n[1018];
L=C+2|0;
t[L>>0]=B;
N=e;
x=0|n[1018];
U=x+8|0;
D=U+2|0;
t[D>>0]=N;
Y=0|n[1018];
H=Y+4|0;
W=H+2|0;
z=0|t[W>>0];
e=z;
V=0|n[1018];
K=V+12|0;
X=K+2|0;
G=0|t[X>>0];
J=0|n[1018];
q=J+4|0;
Z=q+2|0;
t[Z>>0]=G;
Q=e;
ee=0|n[1018];
re=ee+12|0;
te=re+2|0;
t[te>>0]=Q;
ie=0|n[1018];
ne=ie+3|0;
ae=0|t[ne>>0];
e=ae;
oe=0|n[1018];
fe=oe+4|0;
se=fe+3|0;
le=0|t[se>>0];
ce=0|n[1018];
he=ce+3|0;
t[he>>0]=le;
de=0|n[1018];
ve=de+8|0;
pe=ve+3|0;
_e=0|t[pe>>0];
me=0|n[1018];
ge=me+4|0;
be=ge+3|0;
t[be>>0]=_e;
we=0|n[1018];
Ae=we+12|0;
Te=Ae+3|0;
Ee=0|t[Te>>0];
Me=0|n[1018];
ke=Me+8|0;
Se=ke+3|0;
t[Se>>0]=Ee;
Re=e;
Oe=0|n[1018];
Pe=Oe+12|0;
Be=Pe+3|0;
t[Be>>0]=Re;
d=Le;
return;
}

function me(){
var e=0,
r=0,
i=0,
a=0,
o=0,
u=0,
f=0,
s=0,
l=0,
c=0,
h=0,
p=0,
_=0,
m=0,
y=0,
g=0,
b=0,
w=0,
A=0,
T=0;
var E=0,
M=0,
k=0,
S=0,
R=0,
I=0,
O=0,
P=0,
B=0;
B=d;
d=d+16|0;
if((0|d)>=(0|v))j(16|0);
e=0;
while(1){
_=e;
M=255&_;
k=(0|M)<4;
if(!k)break;
r=0;
while(1){
S=r;
R=255&S;
I=(0|R)<4;
if(!I)break;
O=0|n[1018];
P=r;
i=255&P;
a=O+(i<<2)|0;
o=e;
u=255&o;
f=a+u|0;
s=0|t[f>>0];
l=0|ge(s);
c=0|n[1018];
h=r;
p=255&h;
m=c+(p<<2)|0;
y=e;
g=255&y;
b=m+g|0;
t[b>>0]=l;
w=r;
A=w+1<<24>>24;
r=A;
}
T=e;
E=T+1<<24>>24;
e=E;
}
d=B;
return;
}

function ye(){
var e=0,
r=0,
i=0,
a=0,
o=0,
u=0,
f=0,
s=0,
l=0,
c=0,
h=0,
p=0,
_=0,
m=0,
y=0,
g=0,
b=0,
w=0,
A=0;
var T=0,
E=0,
M=0,
k=0,
S=0,
R=0,
I=0,
O=0,
P=0,
B=0,
C=0,
L=0,
N=0,
x=0,
U=0,
F=0,
D=0,
Y=0;
var H=0,
W=0,
z=0,
V=0,
K=0,
X=0,
G=0,
J=0,
$=0,
q=0,
Z=0,
Q=0,
ee=0,
re=0,
te=0,
ie=0,
ne=0,
ae=0,
oe=0;
var ue=0,
fe=0,
se=0,
le=0,
ce=0,
he=0,
de=0,
ve=0,
_e=0,
me=0,
ye=0,
ge=0,
be=0,
we=0,
Ae=0,
Te=0,
Ee=0,
Me=0;
var ke=0,
Se=0,
Re=0,
Ie=0,
Oe=0,
Pe=0,
Be=0,
Ce=0,
Le=0,
Ne=0,
xe=0,
Ue=0,
Fe=0,
De=0,
Ye=0,
He=0,
je=0;
var We=0,
ze=0,
Ve=0,
Ke=0,
Xe=0,
Ge=0,
Je=0,
$e=0,
qe=0,
Ze=0,
Qe=0,
er=0,
rr=0,
tr=0,
ir=0,
nr=0,
ar=0,
or=0,
ur=0;
var fr=0,
sr=0,
lr=0,
cr=0,
hr=0,
dr=0,
vr=0,
pr=0,
_r=0,
mr=0,
yr=0,
gr=0,
br=0,
wr=0,
Ar=0,
Tr=0,
Er=0,
Mr=0,
kr=0;
var Sr=0,
Rr=0,
Ir=0,
Or=0,
Pr=0,
Br=0,
Cr=0,
Lr=0,
Nr=0,
xr=0,
Ur=0,
Fr=0,
Dr=0,
Yr=0,
Hr=0,
jr=0,
Wr=0,
zr=0,
Vr=0;
var Kr=0,
Xr=0,
Gr=0,
Jr=0,
$r=0,
qr=0,
Zr=0,
Qr=0,
et=0,
rt=0,
tt=0,
it=0,
nt=0,
at=0,
ot=0,
ut=0,
ft=0,
st=0;
var lt=0,
ct=0,
ht=0,
dt=0,
vt=0,
pt=0,
_t=0,
mt=0,
yt=0,
gt=0,
bt=0,
wt=0,
At=0,
Tt=0,
Et=0,
Mt=0,
kt=0;
var St=0,
Rt=0,
It=0,
Ot=0,
Pt=0,
Bt=0,
Ct=0,
Lt=0,
Nt=0,
xt=0,
Ut=0,
Ft=0,
Dt=0,
Yt=0,
Ht=0,
jt=0,
Wt=0,
zt=0,
Vt=0,
Kt=0;
var Xt=0,
Gt=0,
Jt=0,
$t=0,
qt=0,
Zt=0,
Qt=0,
ei=0,
ri=0,
ti=0,
ii=0,
ni=0,
ai=0,
oi=0,
ui=0,
fi=0,
si=0;
var li=0,
ci=0,
hi=0,
di=0,
vi=0,
pi=0,
_i=0,
mi=0,
yi=0,
gi=0,
bi=0,
wi=0,
Ai=0,
Ti=0,
Ei=0,
Mi=0,
ki=0,
Si=0,
Ri=0;
var Ii=0,
Oi=0,
Pi=0,
Bi=0,
Ci=0,
Li=0,
Ni=0,
xi=0,
Ui=0,
Fi=0,
Di=0,
Yi=0,
Hi=0,
ji=0,
Wi=0,
zi=0,
Vi=0,
Ki=0;
var Xi=0,
Gi=0,
Ji=0,
$i=0,
qi=0,
Zi=0,
Qi=0,
en=0,
rn=0,
tn=0,
nn=0,
an=0,
on=0,
un=0,
fn=0,
sn=0,
ln=0,
cn=0,
hn=0;
var dn=0,
vn=0,
pn=0,
_n=0,
mn=0,
yn=0,
gn=0,
bn=0,
wn=0,
An=0,
Tn=0,
En=0,
Mn=0,
kn=0,
Sn=0,
Rn=0,
In=0,
On=0,
Pn=0;
var Bn=0,
Cn=0,
Ln=0,
Nn=0,
xn=0,
Un=0,
Fn=0,
Dn=0,
Yn=0,
Hn=0,
jn=0,
Wn=0,
zn=0,
Vn=0,
Kn=0,
Xn=0,
Gn=0,
Jn=0,
$n=0;
var qn=0,
Zn=0,
Qn=0,
ea=0,
ra=0,
ta=0,
ia=0,
na=0,
aa=0,
oa=0,
ua=0,
fa=0,
sa=0,
la=0,
ca=0,
ha=0,
da=0,
va=0,
pa=0;
var _a=0,
ma=0,
ya=0,
ga=0,
ba=0,
wa=0,
Aa=0,
Ta=0,
Ea=0,
Ma=0,
ka=0,
Sa=0,
Ra=0,
Ia=0,
Oa=0,
Pa=0,
Ba=0,
Ca=0;
var La=0,
Na=0,
xa=0,
Ua=0,
Fa=0,
Da=0,
Ya=0,
Ha=0,
ja=0,
Wa=0,
za=0,
Va=0,
Ka=0,
Xa=0,
Ga=0,
Ja=0,
$a=0,
qa=0,
Za=0;
var Qa=0,
eo=0,
ro=0,
to=0,
io=0,
no=0,
ao=0,
oo=0,
uo=0,
fo=0,
so=0,
lo=0,
co=0,
ho=0,
vo=0,
po=0,
_o=0,
mo=0;
var yo=0,
go=0,
bo=0,
wo=0,
Ao=0,
To=0,
Eo=0,
Mo=0,
ko=0,
So=0,
Ro=0,
Io=0,
Oo=0,
Po=0,
Bo=0,
Co=0,
Lo=0;
var No=0,
xo=0,
Uo=0,
Fo=0,
Do=0,
Yo=0,
Ho=0,
jo=0,
Wo=0,
zo=0,
Vo=0,
Ko=0,
Xo=0,
Go=0,
Jo=0,
$o=0,
qo=0,
Zo=0,
Qo=0,
eu=0;
var ru=0,
tu=0,
iu=0,
nu=0,
au=0,
ou=0,
uu=0,
fu=0,
su=0,
lu=0,
cu=0,
hu=0,
du=0,
vu=0,
pu=0,
_u=0,
mu=0,
yu=0;
var gu=0,
bu=0,
wu=0,
Au=0,
Tu=0,
Eu=0,
Mu=0,
ku=0,
Su=0,
Ru=0,
Iu=0,
Ou=0,
Pu=0,
Bu=0,
Cu=0,
Lu=0,
Nu=0,
xu=0,
Uu=0;
var Fu=0,
Du=0,
Yu=0,
Hu=0,
ju=0,
Wu=0,
zu=0,
Vu=0,
Ku=0,
Xu=0,
Gu=0,
Ju=0,
$u=0,
qu=0,
Zu=0,
Qu=0,
ef=0,
rf=0;
var tf=0,
nf=0,
af=0,
of=0;of=d;
d=d+16|0;
if((0|d)>=(0|v))j(16|0);
e=0;
while(1){
Yo=e;
yu=(0|Yo)<4;
if(!yu)break;
Ru=0|n[1018];
Du=e;
Ju=Ru+(Du<<2)|0;
i=0|t[Ju>>0];
r=i;
m=0|n[1018];
S=e;
x=m+(S<<2)|0;
G=x+1|0;
ne=0|t[G>>0];
rr=ne;
ve=0|n[1018];
Me=e;
Ce=ve+(Me<<2)|0;
ze=Ce+2|0;
tr=0|t[ze>>0];
Jt=tr;
hr=0|n[1018];
Ar=e;
Cr=hr+(Ar<<2)|0;
Wr=Cr+3|0;
Qr=0|t[Wr>>0];
Vn=Qr;
Rt=0;
Dt=r;
$t=0|pe(Dt);
oi=255&$t;
_i=oi;
ki=Rt^_i;
Ni=r;
Ki=0|pe(Ni);
tn=0|pe(Ki);
vn=255&tn;
En=vn;
Ln=ki^En;
Kn=r;
ta=0|pe(Kn);
da=0|pe(ta);
Ta=0|pe(da);
Ca=255&Ta;
za=Ca;
eo=Ln^za;
so=r;
wo=0|pe(so);
Io=0|pe(wo);
Ho=0|pe(Io);
Zo=0|pe(Ho);
cu=0;
hu=eo^cu;
du=rr;
vu=255&du;
pu=vu;
_u=rr;
mu=0|pe(_u);
gu=255&mu;
bu=gu;
wu=pu^bu;
Au=rr;
Tu=0|pe(Au);
Eu=0|pe(Tu);
Mu=0;
ku=wu^Mu;
Su=rr;
Iu=0|pe(Su);
Ou=0|pe(Iu);
Pu=0|pe(Ou);
Bu=255&Pu;
Cu=Bu;
Lu=ku^Cu;
Nu=rr;
xu=0|pe(Nu);
Uu=0|pe(xu);
Fu=0|pe(Uu);
Yu=0|pe(Fu);
Hu=0;
ju=Lu^Hu;
Wu=hu^ju;
zu=Jt;
Vu=255&zu;
Ku=Vu;
Xu=Jt;
Gu=0|pe(Xu);
$u=0;
qu=Ku^$u;
Zu=Jt;
Qu=0|pe(Zu);
ef=0|pe(Qu);
rf=255&ef;
tf=rf;
nf=qu^tf;
af=Jt;
a=0|pe(af);
o=0|pe(a);
u=0|pe(o);
f=255&u;
s=f;
l=nf^s;
c=Jt;
h=0|pe(c);
p=0|pe(h);
_=0|pe(p);
y=0|pe(_);
g=0;
b=l^g;
w=Wu^b;
A=Vn;
T=255&A;
E=T;
M=Vn;
k=0|pe(M);
R=0;
I=E^R;
O=Vn;
P=0|pe(O);
B=0|pe(P);
C=0;
L=I^C;
N=Vn;
U=0|pe(N);
F=0|pe(U);
D=0|pe(F);
Y=255&D;
H=Y;
W=L^H;
z=Vn;
V=0|pe(z);
K=0|pe(V);
X=0|pe(K);
J=0|pe(X);
$=0;
q=W^$;
Z=w^q;
Q=255&Z;
ee=0|n[1018];
re=e;
te=ee+(re<<2)|0;
t[te>>0]=Q;
ie=r;
ae=255&ie;
oe=ae;
ue=r;
fe=0|pe(ue);
se=0;
le=oe^se;
ce=r;
he=0|pe(ce);
de=0|pe(he);
_e=0;
me=le^_e;
ye=r;
ge=0|pe(ye);
be=0|pe(ge);
we=0|pe(be);
Ae=255&we;
Te=Ae;
Ee=me^Te;
ke=r;
Se=0|pe(ke);
Re=0|pe(Se);
Ie=0|pe(Re);
Oe=0|pe(Ie);
Pe=0;
Be=Ee^Pe;
Le=0;
Ne=rr;
xe=0|pe(Ne);
Ue=255&xe;
Fe=Ue;
De=Le^Fe;
Ye=rr;
He=0|pe(Ye);
je=0|pe(He);
We=255&je;
Ve=We;
Ke=De^Ve;
Xe=rr;
Ge=0|pe(Xe);
Je=0|pe(Ge);
$e=0|pe(Je);
qe=255&$e;
Ze=qe;
Qe=Ke^Ze;
er=rr;
ir=0|pe(er);
nr=0|pe(ir);
ar=0|pe(nr);
or=0|pe(ar);
ur=0;
fr=Qe^ur;
sr=Be^fr;
lr=Jt;
cr=255&lr;
dr=cr;
vr=Jt;
pr=0|pe(vr);
_r=255&pr;
mr=_r;
yr=dr^mr;
gr=Jt;
br=0|pe(gr);
wr=0|pe(br);
Tr=0;
Er=yr^Tr;
Mr=Jt;
kr=0|pe(Mr);
Sr=0|pe(kr);
Rr=0|pe(Sr);
Ir=255&Rr;
Or=Ir;
Pr=Er^Or;
Br=Jt;
Lr=0|pe(Br);
Nr=0|pe(Lr);
xr=0|pe(Nr);
Ur=0|pe(xr);
Fr=0;
Dr=Pr^Fr;
Yr=sr^Dr;
Hr=Vn;
jr=255&Hr;
zr=jr;
Vr=Vn;
Kr=0|pe(Vr);
Xr=0;
Gr=zr^Xr;
Jr=Vn;
$r=0|pe(Jr);
qr=0|pe($r);
Zr=255&qr;
et=Zr;
rt=Gr^et;
tt=Vn;
it=0|pe(tt);
nt=0|pe(it);
at=0|pe(nt);
ot=255&at;
ut=ot;
ft=rt^ut;
st=Vn;
lt=0|pe(st);
ct=0|pe(lt);
ht=0|pe(ct);
dt=0|pe(ht);
vt=0;
pt=ft^vt;
_t=Yr^pt;
mt=255&_t;
yt=0|n[1018];
gt=e;
bt=yt+(gt<<2)|0;
wt=bt+1|0;
t[wt>>0]=mt;
At=r;
Tt=255&At;
Et=Tt;
Mt=r;
kt=0|pe(Mt);
St=0;
It=Et^St;
Ot=r;
Pt=0|pe(Ot);
Bt=0|pe(Pt);
Ct=255&Bt;
Lt=Ct;
Nt=It^Lt;
xt=r;
Ut=0|pe(xt);
Ft=0|pe(Ut);
Yt=0|pe(Ft);
Ht=255&Yt;
jt=Ht;
Wt=Nt^jt;
zt=r;
Vt=0|pe(zt);
Kt=0|pe(Vt);
Xt=0|pe(Kt);
Gt=0|pe(Xt);
qt=0;
Zt=Wt^qt;
Qt=rr;
ei=255&Qt;
ri=ei;
ti=rr;
ii=0|pe(ti);
ni=0;
ai=ri^ni;
ui=rr;
fi=0|pe(ui);
si=0|pe(fi);
li=0;
ci=ai^li;
hi=rr;
di=0|pe(hi);
vi=0|pe(di);
pi=0|pe(vi);
mi=255&pi;
yi=mi;
gi=ci^yi;
bi=rr;
wi=0|pe(bi);
Ai=0|pe(wi);
Ti=0|pe(Ai);
Ei=0|pe(Ti);
Mi=0;
Si=gi^Mi;
Ri=Zt^Si;
Ii=0;
Oi=Jt;
Pi=0|pe(Oi);
Bi=255&Pi;
Ci=Bi;
Li=Ii^Ci;
xi=Jt;
Ui=0|pe(xi);
Fi=0|pe(Ui);
Di=255&Fi;
Yi=Di;
Hi=Li^Yi;
ji=Jt;
Wi=0|pe(ji);
zi=0|pe(Wi);
Vi=0|pe(zi);
Xi=255&Vi;
Gi=Xi;
Ji=Hi^Gi;
$i=Jt;
qi=0|pe($i);
Zi=0|pe(qi);
Qi=0|pe(Zi);
en=0|pe(Qi);
rn=0;
nn=Ji^rn;
an=Ri^nn;
on=Vn;
un=255&on;
fn=un;
sn=Vn;
ln=0|pe(sn);
cn=255&ln;
hn=cn;
dn=fn^hn;
pn=Vn;
_n=0|pe(pn);
mn=0|pe(_n);
yn=0;
gn=dn^yn;
bn=Vn;
wn=0|pe(bn);
An=0|pe(wn);
Tn=0|pe(An);
Mn=255&Tn;
kn=Mn;
Sn=gn^kn;
Rn=Vn;
In=0|pe(Rn);
On=0|pe(In);
Pn=0|pe(On);
Bn=0|pe(Pn);
Cn=0;
Nn=Sn^Cn;
xn=an^Nn;
Un=255&xn;
Fn=0|n[1018];
Dn=e;
Yn=Fn+(Dn<<2)|0;
Hn=Yn+2|0;
t[Hn>>0]=Un;
jn=r;
Wn=255&jn;
zn=Wn;
Xn=r;
Gn=0|pe(Xn);
Jn=255&Gn;
$n=Jn;
qn=zn^$n;
Zn=r;
Qn=0|pe(Zn);
ea=0|pe(Qn);
ra=0;
ia=qn^ra;
na=r;
aa=0|pe(na);
oa=0|pe(aa);
ua=0|pe(oa);
fa=255&ua;
sa=fa;
la=ia^sa;
ca=r;
ha=0|pe(ca);
va=0|pe(ha);
pa=0|pe(va);
_a=0|pe(pa);
ma=0;
ya=la^ma;
ga=rr;
ba=255&ga;
wa=ba;
Aa=rr;
Ea=0|pe(Aa);
Ma=0;
ka=wa^Ma;
Sa=rr;
Ra=0|pe(Sa);
Ia=0|pe(Ra);
Oa=255&Ia;
Pa=Oa;
Ba=ka^Pa;
La=rr;
Na=0|pe(La);
xa=0|pe(Na);
Ua=0|pe(xa);
Fa=255&Ua;
Da=Fa;
Ya=Ba^Da;
Ha=rr;
ja=0|pe(Ha);
Wa=0|pe(ja);
Va=0|pe(Wa);
Ka=0|pe(Va);
Xa=0;
Ga=Ya^Xa;
Ja=ya^Ga;
$a=Jt;
qa=255&$a;
Za=qa;
Qa=Jt;
ro=0|pe(Qa);
to=0;
io=Za^to;
no=Jt;
ao=0|pe(no);
oo=0|pe(ao);
uo=0;
fo=io^uo;
lo=Jt;
co=0|pe(lo);
ho=0|pe(co);
vo=0|pe(ho);
po=255&vo;
_o=po;
mo=fo^_o;
yo=Jt;
go=0|pe(yo);
bo=0|pe(go);
Ao=0|pe(bo);
To=0|pe(Ao);
Eo=0;
Mo=mo^Eo;
ko=Ja^Mo;
So=0;
Ro=Vn;
Oo=0|pe(Ro);
Po=255&Oo;
Bo=Po;
Co=So^Bo;
Lo=Vn;
No=0|pe(Lo);
xo=0|pe(No);
Uo=255&xo;
Fo=Uo;
Do=Co^Fo;
jo=Vn;
Wo=0|pe(jo);
zo=0|pe(Wo);
Vo=0|pe(zo);
Ko=255&Vo;
Xo=Ko;
Go=Do^Xo;
Jo=Vn;
$o=0|pe(Jo);
qo=0|pe($o);
Qo=0|pe(qo);
eu=0|pe(Qo);
ru=0;
tu=Go^ru;
iu=ko^tu;
nu=255&iu;
au=0|n[1018];
ou=e;
uu=au+(ou<<2)|0;
fu=uu+3|0;
t[fu>>0]=nu;
su=e;
lu=su+1|0;
e=lu;
}
d=of;
return;
}

function ge(e){
e|=0;
var r=0,
i=0,
n=0,
a=0,
o=0,
u=0;
u=d;
d=d+16|0;
if((0|d)>=(0|v))j(16|0);
r=e;
i=r;
n=255&i;
a=1015+n|0;
o=0|t[a>>0];
d=u;
return 0|o;
}

function be(e){
e|=0;
var r=0,
t=0,
i=0,
a=0,
o=0,
u=0,
f=0,
s=0,
l=0,
c=0,
h=0,
p=0,
_=0,
m=0,
y=0,
g=0;
g=d;
d=d+16|0;
if((0|d)>=(0|v))j(16|0);
r=e;
s=r;
n[s>>2]=0;
l=r;
c=l+4|0;
n[c>>2]=0;
h=r;
p=h+8|0;
n[p>>2]=1732584193;
_=r;
m=_+8|0;
y=m+4|0;
n[y>>2]=-271733879;
t=r;
i=t+8|0;
a=i+8|0;
n[a>>2]=-1732584194;
o=r;
u=o+8|0;
f=u+12|0;
n[f>>2]=271733878;
d=g;
return;
}

function we(e,r,t){
e|=0;
r|=0;
t|=0;
var i=0,
a=0,
o=0,
u=0,
f=0,
s=0,
l=0,
c=0,
h=0,
p=0,
_=0,
m=0,
y=0,
g=0,
b=0,
w=0,
A=0,
T=0,
E=0,
M=0;
var k=0,
S=0,
R=0,
I=0,
O=0,
P=0,
B=0,
C=0,
L=0,
N=0,
x=0,
U=0,
F=0,
D=0,
Y=0,
H=0,
W=0,
z=0,
V=0,
K=0;
var X=0,
G=0,
J=0,
$=0,
q=0,
Z=0,
Q=0,
ee=0,
re=0,
te=0,
ie=0,
ne=0,
ae=0,
oe=0,
ue=0,
fe=0,
se=0,
le=0,
ce=0,
he=0;
var de=0,
ve=0,
pe=0,
_e=0,
me=0,
ye=0,
ge=0,
be=0;
be=d;
d=d+32|0;
if((0|d)>=(0|v))j(32|0);
k=e;
U=r;
J=t;
oe=0;
me=0;
ye=0;
ge=k;
i=0|n[ge>>2];
a=i>>>3;
o=63&a;
me=o;
u=me;
f=64-u|0;
ye=f;
s=J;
l=s<<3;
c=k;
h=0|n[c>>2];
p=h+l|0;
n[c>>2]=p;
_=k;
m=0|n[_>>2];
y=J;
g=y<<3;
b=m>>>0<g>>>0;
if(b){
w=k;
A=w+4|0;
T=0|n[A>>2];
E=T+1|0;
n[A>>2]=E;
}
M=J;
S=M>>>29;
R=k;
I=R+4|0;
O=0|n[I>>2];
P=O+S|0;
n[I>>2]=P;
B=J;
C=ye;
L=B>>>0>=C>>>0;
if(!L){
oe=0;
ue=k;
fe=ue+24|0;
se=me;
le=fe+se|0;
ce=U;
he=oe;
de=ce+he|0;
ve=J;
pe=oe;
_e=ve-pe|0;
0|Ur(0|le,0|de,0|_e);
d=be;
return;
}
N=k;
x=N+24|0;
F=me;
D=x+F|0;
Y=U;
H=ye;
0|Ur(0|D,0|Y,0|H);
W=k;
z=W+8|0;
V=k;
K=V+24|0;
Ae(z,K);
X=ye;
oe=X;
while(1){
G=oe;
$=G+64|0;
q=J;
Z=$>>>0<=q>>>0;
if(!Z)break;
Q=k;
ee=Q+8|0;
re=U;
te=oe;
ie=re+te|0;
Ae(ee,ie);
ne=oe;
ae=ne+64|0;
oe=ae;
}
me=0;
ue=k;
fe=ue+24|0;
se=me;
le=fe+se|0;
ce=U;
he=oe;
de=ce+he|0;
ve=J;
pe=oe;
_e=ve-pe|0;
0|Ur(0|le,0|de,0|_e);
d=be;
return;
}

function Ae(e,r){
e|=0;
r|=0;
var t=0,
i=0,
a=0,
o=0,
u=0,
f=0,
s=0,
l=0,
c=0,
h=0,
p=0,
_=0,
m=0,
y=0,
g=0,
b=0,
w=0,
A=0,
T=0,
E=0;
var M=0,
k=0,
S=0,
R=0,
I=0,
O=0,
P=0,
B=0,
C=0,
L=0,
N=0,
x=0,
U=0,
F=0,
D=0,
Y=0,
H=0,
W=0,
z=0,
V=0;
var K=0,
X=0,
G=0,
J=0,
$=0,
q=0,
Z=0,
Q=0,
ee=0,
re=0,
te=0,
ie=0,
ne=0,
ae=0,
oe=0,
ue=0,
fe=0,
se=0,
le=0,
ce=0;
var he=0,
de=0,
ve=0,
pe=0,
_e=0,
me=0,
ye=0,
ge=0,
be=0,
we=0,
Ae=0,
Ee=0,
Me=0,
ke=0,
Se=0,
Re=0,
Ie=0,
Oe=0,
Pe=0,
Be=0;
var Ce=0,
Le=0,
Ne=0,
xe=0,
Ue=0,
Fe=0,
De=0,
Ye=0,
He=0,
je=0,
We=0,
ze=0,
Ve=0,
Ke=0,
Xe=0,
Ge=0,
Je=0,
$e=0,
qe=0,
Ze=0;
var Qe=0,
er=0,
rr=0,
tr=0,
ir=0,
nr=0,
ar=0,
or=0,
ur=0,
fr=0,
sr=0,
lr=0,
cr=0,
hr=0,
dr=0,
vr=0,
pr=0,
_r=0,
mr=0,
yr=0;
var gr=0,
br=0,
wr=0,
Ar=0,
Tr=0,
Er=0,
Mr=0,
kr=0,
Sr=0,
Rr=0,
Ir=0,
Or=0,
Pr=0,
Br=0,
Cr=0,
Lr=0,
Nr=0,
xr=0,
Ur=0,
Fr=0;
var Dr=0,
Yr=0,
Hr=0,
jr=0,
Wr=0,
zr=0,
Vr=0,
Kr=0,
Xr=0,
Gr=0,
Jr=0,
$r=0,
qr=0,
Zr=0,
Qr=0,
et=0,
rt=0,
tt=0,
it=0,
nt=0;
var at=0,
ot=0,
ut=0,
ft=0,
st=0,
lt=0,
ct=0,
ht=0,
dt=0,
vt=0,
pt=0,
_t=0,
mt=0,
yt=0,
gt=0,
bt=0,
wt=0,
At=0,
Tt=0,
Et=0;
var Mt=0,
kt=0,
St=0,
Rt=0,
It=0,
Ot=0,
Pt=0,
Bt=0,
Ct=0,
Lt=0,
Nt=0,
xt=0,
Ut=0,
Ft=0,
Dt=0,
Yt=0,
Ht=0,
jt=0,
Wt=0,
zt=0;
var Vt=0,
Kt=0,
Xt=0,
Gt=0,
Jt=0,
$t=0,
qt=0,
Zt=0,
Qt=0,
ei=0,
ri=0,
ti=0,
ii=0,
ni=0,
ai=0,
oi=0,
ui=0,
fi=0,
si=0,
li=0;
var ci=0,
hi=0,
di=0,
vi=0,
pi=0,
_i=0,
mi=0,
yi=0,
gi=0,
bi=0,
wi=0,
Ai=0,
Ti=0,
Ei=0,
Mi=0,
ki=0,
Si=0,
Ri=0,
Ii=0,
Oi=0;
var Pi=0,
Bi=0,
Ci=0,
Li=0,
Ni=0,
xi=0,
Ui=0,
Fi=0,
Di=0,
Yi=0,
Hi=0,
ji=0,
Wi=0,
zi=0,
Vi=0,
Ki=0,
Xi=0,
Gi=0,
Ji=0,
$i=0;
var qi=0,
Zi=0,
Qi=0,
en=0,
rn=0,
tn=0,
nn=0,
an=0,
on=0,
un=0,
fn=0,
sn=0,
ln=0,
cn=0,
hn=0,
dn=0,
vn=0,
pn=0,
_n=0,
mn=0;
var yn=0,
gn=0,
bn=0,
wn=0,
An=0,
Tn=0,
En=0,
Mn=0,
kn=0,
Sn=0,
Rn=0,
In=0,
On=0,
Pn=0,
Bn=0,
Cn=0,
Ln=0,
Nn=0,
xn=0,
Un=0;
var Fn=0,
Dn=0,
Yn=0,
Hn=0,
jn=0,
Wn=0,
zn=0,
Vn=0,
Kn=0,
Xn=0,
Gn=0,
Jn=0,
$n=0,
qn=0,
Zn=0,
Qn=0,
ea=0,
ra=0,
ta=0,
ia=0;
var na=0,
aa=0,
oa=0,
ua=0,
fa=0,
sa=0,
la=0,
ca=0,
ha=0,
da=0,
va=0,
pa=0,
_a=0,
ma=0,
ya=0,
ga=0,
ba=0,
wa=0,
Aa=0,
Ta=0;
var Ea=0,
Ma=0,
ka=0,
Sa=0,
Ra=0,
Ia=0,
Oa=0,
Pa=0,
Ba=0,
Ca=0,
La=0,
Na=0,
xa=0,
Ua=0,
Fa=0,
Da=0,
Ya=0,
Ha=0,
ja=0,
Wa=0;
var za=0,
Va=0,
Ka=0,
Xa=0,
Ga=0,
Ja=0,
$a=0,
qa=0,
Za=0,
Qa=0,
eo=0,
ro=0,
to=0,
io=0,
no=0,
ao=0,
oo=0,
uo=0,
fo=0,
so=0;
var lo=0,
co=0,
ho=0,
vo=0,
po=0,
_o=0,
mo=0,
yo=0,
go=0,
bo=0,
wo=0,
Ao=0,
To=0,
Eo=0,
Mo=0,
ko=0,
So=0,
Ro=0,
Io=0,
Oo=0;
var Po=0,
Bo=0,
Co=0,
Lo=0,
No=0,
xo=0,
Uo=0,
Fo=0,
Do=0,
Yo=0,
Ho=0,
jo=0,
Wo=0,
zo=0,
Vo=0,
Ko=0,
Xo=0,
Go=0,
Jo=0,
$o=0;
var qo=0,
Zo=0,
Qo=0,
eu=0,
ru=0,
tu=0,
iu=0,
nu=0,
au=0,
ou=0,
uu=0,
fu=0,
su=0,
lu=0,
cu=0,
hu=0,
du=0,
vu=0,
pu=0,
_u=0;
var mu=0,
yu=0,
gu=0,
bu=0,
wu=0,
Au=0,
Tu=0,
Eu=0,
Mu=0,
ku=0,
Su=0,
Ru=0,
Iu=0,
Ou=0,
Pu=0,
Bu=0,
Cu=0,
Lu=0,
Nu=0,
xu=0;
var Uu=0,
Fu=0,
Du=0,
Yu=0,
Hu=0,
ju=0,
Wu=0,
zu=0,
Vu=0,
Ku=0,
Xu=0,
Gu=0,
Ju=0,
$u=0,
qu=0,
Zu=0,
Qu=0,
ef=0,
rf=0,
tf=0;
var nf=0,
af=0,
of=0,
uf=0,
ff=0,
sf=0,
lf=0,
cf=0,
hf=0,
df=0,
vf=0,
pf=0,
_f=0,
mf=0,
yf=0,
gf=0,
bf=0,
wf=0,
Af=0,
Tf=0;
var Ef=0,
Mf=0,
kf=0,
Sf=0,
Rf=0,
If=0,
Of=0,
Pf=0,
Bf=0,
Cf=0,
Lf=0,
Nf=0,
xf=0,
Uf=0,
Ff=0,
Df=0,
Yf=0,
Hf=0,
jf=0,
Wf=0;
var zf=0,
Vf=0,
Kf=0,
Xf=0,
Gf=0,
Jf=0,
$f=0,
qf=0,
Zf=0,
Qf=0,
es=0,
rs=0,
ts=0,
is=0,
ns=0,
as=0,
os=0,
us=0,
fs=0,
ss=0;
var ls=0,
cs=0,
hs=0,
ds=0,
vs=0,
ps=0,
_s=0,
ms=0,
ys=0,
gs=0,
bs=0,
ws=0,
As=0,
Ts=0,
Es=0,
Ms=0,
ks=0,
Ss=0,
Rs=0,
Is=0;
var Os=0,
Ps=0,
Bs=0,
Cs=0,
Ls=0,
Ns=0,
xs=0,
Us=0,
Fs=0,
Ds=0,
Ys=0,
Hs=0,
js=0,
Ws=0,
zs=0,
Vs=0,
Ks=0,
Xs=0,
Gs=0,
Js=0;
var $s=0,
qs=0,
Zs=0,
Qs=0,
el=0,
rl=0,
tl=0,
il=0,
nl=0,
al=0,
ol=0,
ul=0,
fl=0,
sl=0,
ll=0,
cl=0,
hl=0,
dl=0,
vl=0,
pl=0;
var _l=0,
ml=0,
yl=0,
gl=0,
bl=0,
wl=0,
Al=0,
Tl=0,
El=0,
Ml=0,
kl=0,
Sl=0,
Rl=0,
Il=0,
Ol=0,
Pl=0,
Bl=0,
Cl=0,
Ll=0,
Nl=0;
var xl=0,
Ul=0,
Fl=0,
Dl=0,
Yl=0,
Hl=0,
jl=0,
Wl=0,
zl=0,
Vl=0,
Kl=0,
Xl=0,
Gl=0,
Jl=0,
$l=0,
ql=0,
Zl=0,
Ql=0,
ec=0,
rc=0;
var tc=0,
ic=0,
nc=0,
ac=0,
oc=0,
uc=0,
fc=0,
sc=0,
lc=0,
cc=0,
hc=0,
dc=0,
vc=0,
pc=0,
_c=0,
mc=0,
yc=0,
gc=0,
bc=0,
wc=0;
var Ac=0,
Tc=0,
Ec=0,
Mc=0,
kc=0,
Sc=0,
Rc=0,
Ic=0,
Oc=0,
Pc=0,
Bc=0,
Cc=0,
Lc=0,
Nc=0,
xc=0,
Uc=0,
Fc=0,
Dc=0,
Yc=0,
Hc=0;
var jc=0,
Wc=0,
zc=0,
Vc=0,
Kc=0,
Xc=0,
Gc=0,
Jc=0,
$c=0,
qc=0,
Zc=0,
Qc=0,
eh=0,
rh=0,
th=0,
ih=0,
nh=0,
ah=0,
oh=0,
uh=0;
var fh=0,
sh=0,
lh=0,
ch=0,
hh=0,
dh=0,
vh=0,
ph=0,
_h=0,
mh=0,
yh=0,
gh=0,
bh=0,
wh=0,
Ah=0,
Th=0,
Eh=0,
Mh=0,
kh=0,
Sh=0;
var Rh=0,
Ih=0,
Oh=0,
Ph=0,
Bh=0,
Ch=0,
Lh=0,
Nh=0,
xh=0,
Uh=0,
Fh=0,
Dh=0,
Yh=0,
Hh=0,
jh=0,
Wh=0,
zh=0,
Vh=0,
Kh=0,
Xh=0;
var Gh=0,
Jh=0,
$h=0,
qh=0,
Zh=0,
Qh=0,
ed=0,
rd=0,
td=0,
id=0,
nd=0,
ad=0,
od=0,
ud=0,
fd=0,
sd=0,
ld=0,
cd=0,
hd=0,
dd=0;
var vd=0,
pd=0,
_d=0,
md=0,
yd=0,
gd=0,
bd=0,
wd=0,
Ad=0,
Td=0,
Ed=0,
Md=0,
kd=0,
Sd=0,
Rd=0,
Id=0,
Od=0,
Pd=0,
Bd=0,
Cd=0;
var Ld=0,
Nd=0,
xd=0,
Ud=0,
Fd=0,
Dd=0,
Yd=0,
Hd=0,
jd=0,
Wd=0,
zd=0,
Vd=0,
Kd=0,
Xd=0,
Gd=0,
Jd=0,
$d=0,
qd=0,
Zd=0,
Qd=0;
var ev=0,
rv=0,
tv=0,
iv=0,
nv=0,
av=0,
ov=0,
uv=0,
fv=0,
sv=0,
lv=0,
cv=0,
hv=0,
dv=0,
vv=0,
pv=0,
_v=0,
mv=0,
yv=0,
gv=0;
var bv=0,
wv=0,
Av=0,
Tv=0,
Ev=0,
Mv=0,
kv=0,
Sv=0,
Rv=0,
Iv=0,
Ov=0,
Pv=0,
Bv=0,
Cv=0,
Lv=0,
Nv=0,
xv=0,
Uv=0,
Fv=0,
Dv=0;
var Yv=0,
Hv=0,
jv=0,
Wv=0,
zv=0,
Vv=0,
Kv=0,
Xv=0,
Gv=0,
Jv=0,
$v=0,
qv=0,
Zv=0,
Qv=0,
ep=0,
rp=0,
tp=0,
ip=0,
np=0,
ap=0;
var op=0,
up=0,
fp=0,
sp=0,
lp=0,
cp=0,
hp=0,
dp=0,
vp=0,
pp=0,
_p=0,
mp=0,
yp=0,
gp=0,
bp=0,
wp=0,
Ap=0,
Tp=0,
Ep=0,
Mp=0;
var kp=0,
Sp=0,
Rp=0,
Ip=0,
Op=0,
Pp=0,
Bp=0,
Cp=0,
Lp=0,
Np=0,
xp=0,
Up=0,
Fp=0,
Dp=0,
Yp=0,
Hp=0,
jp=0,
Wp=0,
zp=0,
Vp=0;
var Kp=0,
Xp=0,
Gp=0,
Jp=0,
$p=0,
qp=0,
Zp=0,
Qp=0,
e_=0,
r_=0,
t_=0,
i_=0,
n_=0,
a_=0,
o_=0,
u_=0,
f_=0,
s_=0,
l_=0,
c_=0;
var h_=0,
d_=0,
v_=0,
p_=0,
__=0,
m_=0,
y_=0,
g_=0,
b_=0,
w_=0,
A_=0,
T_=0,
E_=0,
M_=0,
k_=0,
S_=0,
R_=0,
I_=0,
O_=0,
P_=0;
var B_=0,
C_=0,
L_=0,
N_=0,
x_=0,
U_=0,
F_=0,
D_=0,
Y_=0,
H_=0,
j_=0,
W_=0,
z_=0,
V_=0,
K_=0,
X_=0,
G_=0,
J_=0,
$_=0,
q_=0;
var Z_=0,
Q_=0,
em=0,
rm=0,
tm=0,
im=0,
nm=0,
am=0,
om=0,
um=0,
fm=0,
sm=0,
lm=0,
cm=0,
hm=0,
dm=0,
vm=0,
pm=0,
_m=0,
mm=0;
var ym=0,
gm=0,
bm=0,
wm=0,
Am=0,
Tm=0,
Em=0,
Mm=0,
km=0,
Sm=0,
Rm=0,
Im=0,
Om=0,
Pm=0,
Bm=0,
Cm=0,
Lm=0,
Nm=0,
xm=0,
Um=0;
var Fm=0,
Dm=0,
Ym=0,
Hm=0,
jm=0,
Wm=0,
zm=0,
Vm=0,
Km=0,
Xm=0,
Gm=0,
Jm=0,
$m=0,
qm=0,
Zm=0,
Qm=0,
ey=0,
ry=0,
ty=0,
iy=0;
var ny=0,
ay=0,
oy=0,
uy=0,
fy=0,
sy=0,
ly=0,
cy=0,
hy=0,
dy=0,
vy=0,
py=0,
_y=0,
my=0,
yy=0,
gy=0,
by=0,
wy=0,
Ay=0,
Ty=0;
var Ey=0,
My=0,
ky=0,
Sy=0,
Ry=0,
Iy=0,
Oy=0,
Py=0,
By=0,
Cy=0,
Ly=0,
Ny=0,
xy=0,
Uy=0,
Fy=0,
Dy=0,
Yy=0,
Hy=0,
jy=0,
Wy=0;
var zy=0,
Vy=0,
Ky=0,
Xy=0,
Gy=0,
Jy=0,
$y=0,
qy=0,
Zy=0,
Qy=0,
eg=0,
rg=0,
tg=0,
ig=0,
ng=0,
ag=0,
og=0,
ug=0,
fg=0,
sg=0;
var lg=0,
cg=0,
hg=0,
dg=0,
vg=0,
pg=0,
_g=0,
mg=0,
yg=0,
gg=0,
bg=0,
wg=0,
Ag=0,
Tg=0,
Eg=0,
Mg=0,
kg=0,
Sg=0,
Rg=0,
Ig=0;
var Og=0,
Pg=0,
Bg=0,
Cg=0,
Lg=0,
Ng=0,
xg=0,
Ug=0,
Fg=0,
Dg=0,
Yg=0,
Hg=0,
jg=0,
Wg=0,
zg=0,
Vg=0,
Kg=0,
Xg=0,
Gg=0,
Jg=0;
var $g=0,
qg=0,
Zg=0,
Qg=0,
eb=0,
rb=0,
tb=0,
ib=0,
nb=0,
ab=0,
ob=0,
ub=0,
fb=0,
sb=0,
lb=0,
cb=0,
hb=0,
db=0,
vb=0,
pb=0;
var _b=0,
mb=0,
yb=0,
gb=0,
bb=0,
wb=0,
Ab=0,
Tb=0,
Eb=0,
Mb=0,
kb=0,
Sb=0,
Rb=0,
Ib=0,
Ob=0,
Pb=0,
Bb=0,
Cb=0,
Lb=0,
Nb=0;
var xb=0,
Ub=0,
Fb=0,
Db=0,
Yb=0,
Hb=0,
jb=0,
Wb=0,
zb=0,
Vb=0,
Kb=0,
Xb=0,
Gb=0,
Jb=0,
$b=0,
qb=0,
Zb=0,
Qb=0,
ew=0,
rw=0;
var tw=0,
iw=0,
nw=0,
aw=0,
ow=0,
uw=0,
fw=0,
sw=0,
lw=0,
cw=0,
hw=0,
dw=0,
vw=0,
pw=0,
_w=0,
mw=0,
yw=0,
gw=0,
bw=0,
ww=0;
var Aw=0,
Tw=0,
Ew=0,
Mw=0,
kw=0,
Sw=0,
Rw=0,
Iw=0,
Ow=0,
Pw=0,
Bw=0,
Cw=0,
Lw=0,
Nw=0,
xw=0,
Uw=0,
Fw=0,
Dw=0,
Yw=0,
Hw=0;
var jw=0,
Ww=0,
zw=0,
Vw=0,
Kw=0,
Xw=0,
Gw=0,
Jw=0,
$w=0,
qw=0,
Zw=0,
Qw=0,
eA=0,
rA=0,
tA=0,
iA=0,
nA=0,
aA=0,
oA=0,
uA=0;
var fA=0,
sA=0,
lA=0,
cA=0,
hA=0,
dA=0,
vA=0,
pA=0,
_A=0,
mA=0,
yA=0,
gA=0,
bA=0,
wA=0,
AA=0,
TA=0,
EA=0,
MA=0,
kA=0,
SA=0;
var RA=0,
IA=0,
OA=0,
PA=0,
BA=0,
CA=0,
LA=0,
NA=0,
xA=0,
UA=0,
FA=0,
DA=0,
YA=0,
HA=0,
jA=0,
WA=0,
zA=0,
VA=0,
KA=0,
XA=0;
var GA=0,
JA=0,
$A=0,
qA=0,
ZA=0,
QA=0,
eT=0,
rT=0,
tT=0,
iT=0,
nT=0,
aT=0,
oT=0,
uT=0,
fT=0,
sT=0,
lT=0,
cT=0,
hT=0,
dT=0;
var vT=0,
pT=0,
_T=0,
mT=0,
yT=0,
gT=0,
bT=0,
wT=0,
AT=0,
TT=0,
ET=0,
MT=0,
kT=0,
ST=0,
RT=0,
IT=0,
OT=0,
PT=0,
BT=0,
CT=0;
var LT=0,
NT=0,
xT=0,
UT=0,
FT=0,
DT=0,
YT=0,
HT=0,
jT=0,
WT=0,
zT=0,
VT=0,
KT=0,
XT=0,
GT=0,
JT=0,
$T=0,
qT=0,
ZT=0,
QT=0;
var eE=0,
rE=0,
tE=0,
iE=0,
nE=0,
aE=0,
oE=0,
uE=0,
fE=0,
sE=0,
lE=0,
cE=0,
hE=0,
dE=0,
vE=0,
pE=0,
_E=0,
mE=0,
yE=0,
gE=0;
var bE=0,
wE=0,
AE=0;
AE=d;
d=d+288|0;
if((0|d)>=(0|v))j(288|0);
_b=AE;
qu=e;
rl=r;
gA=qu;
t=0|n[gA>>2];
nh=t;
lr=qu;
di=lr+4|0;
ma=0|n[di>>2];
uv=ma;
Do=qu;
$o=Do+8|0;
uu=0|n[$o>>2];
l_=uu;
yu=qu;
Iu=yu+12|0;
Yu=0|n[Iu>>2];
dy=Yu;
Zu=rl;
Te(_b,Zu,64);
lf=uv;
wf=l_;
Bf=lf&wf;
Wf=uv;
es=-1^Wf;
cs=dy;
As=es&cs;
Cs=Bf|As;
zs=0|n[_b>>2];
tl=Cs+zs|0;
dl=tl+-680876936|0;
El=nh;
Nl=El+dl|0;
nh=Nl;
Kl=nh;
ic=Kl<<7;
vc=nh;
Mc=vc>>>25;
xc=ic|Mc;
nh=xc;
Xc=uv;
ah=nh;
_h=ah+Xc|0;
nh=_h;
Sh=nh;
Fh=uv;
Jh=Sh&Fh;
od=nh;
md=-1^od;
Rd=l_;
Dd=md&Rd;
$d=Jh|Dd;
fv=_b+4|0;
gv=0|n[fv>>2];
Ov=$d+gv|0;
Hv=Ov+-389564586|0;
Zv=dy;
sp=Zv+Hv|0;
dy=sp;
bp=dy;
Pp=bp<<12;
jp=dy;
Qp=jp>>>20;
c_=Pp|Qp;
dy=c_;
A_=nh;
C_=dy;
z_=C_+A_|0;
dy=z_;
rm=dy;
hm=nh;
Tm=rm&hm;
Lm=dy;
Vm=-1^Lm;
ty=uv;
vy=Vm&ty;
My=Tm|vy;
xy=_b+8|0;
Xy=0|n[xy>>2];
ng=My+Xy|0;
pg=ng+606105819|0;
kg=l_;
Ug=kg+pg|0;
l_=Ug;
Gg=l_;
ab=Gg<<17;
mb=l_;
Rb=mb>>>15;
Db=ab|Rb;
l_=Db;
$b=dy;
uw=l_;
yw=uw+$b|0;
l_=yw;
Iw=l_;
Yw=dy;
qw=Iw&Yw;
fA=l_;
bA=-1^fA;
PA=nh;
jA=bA&PA;
QA=qw|jA;
lT=_b+12|0;
wT=0|n[lT>>2];
BT=QA+wT|0;
WT=BT+-1044525330|0;
eE=uv;
cE=eE+WT|0;
uv=cE;
i=uv;
m=i<<22;
R=uv;
D=R>>>10;
q=m|D;
uv=q;
fe=l_;
ge=uv;
Pe=ge+fe|0;
uv=Pe;
je=uv;
Qe=l_;
cr=je&Qe;
Ar=uv;
Cr=-1^Ar;
zr=dy;
rt=Cr&zr;
ht=cr|rt;
Tt=_b+16|0;
Lt=0|n[Tt>>2];
Vt=ht+Lt|0;
ti=Vt+-176418897|0;
vi=nh;
Mi=vi+ti|0;
nh=Mi;
xi=nh;
Xi=xi<<7;
an=nh;
_n=an>>>25;
Sn=Xi|_n;
nh=Sn;
Fn=uv;
Jn=nh;
oa=Jn+Fn|0;
nh=oa;
ya=nh;
Ia=uv;
Ya=ya&Ia;
qa=nh;
fo=-1^qa;
bo=l_;
Po=fo&bo;
xo=Ya|Po;
Uo=_b+20|0;
Fo=0|n[Uo>>2];
Yo=xo+Fo|0;
Ho=Yo+1200080426|0;
jo=dy;
Wo=jo+Ho|0;
dy=Wo;
zo=dy;
Vo=zo<<12;
Ko=dy;
Xo=Ko>>>20;
Go=Vo|Xo;
dy=Go;
Jo=nh;
qo=dy;
Zo=qo+Jo|0;
dy=Zo;
Qo=dy;
eu=nh;
ru=Qo&eu;
tu=dy;
iu=-1^tu;
nu=uv;
au=iu&nu;
ou=ru|au;
fu=_b+24|0;
su=0|n[fu>>2];
lu=ou+su|0;
cu=lu+-1473231341|0;
hu=l_;
du=hu+cu|0;
l_=du;
vu=l_;
pu=vu<<17;
_u=l_;
mu=_u>>>15;
gu=pu|mu;
l_=gu;
bu=dy;
wu=l_;
Au=wu+bu|0;
l_=Au;
Tu=l_;
Eu=dy;
Mu=Tu&Eu;
ku=l_;
Su=-1^ku;
Ru=nh;
Ou=Su&Ru;
Pu=Mu|Ou;
Bu=_b+28|0;
Cu=0|n[Bu>>2];
Lu=Pu+Cu|0;
Nu=Lu+-45705983|0;
xu=uv;
Uu=xu+Nu|0;
uv=Uu;
Fu=uv;
Du=Fu<<22;
Hu=uv;
ju=Hu>>>10;
Wu=Du|ju;
uv=Wu;
zu=l_;
Vu=uv;
Ku=Vu+zu|0;
uv=Ku;
Xu=uv;
Gu=l_;
Ju=Xu&Gu;
$u=uv;
Qu=-1^$u;
ef=dy;
rf=Qu&ef;
tf=Ju|rf;
nf=_b+32|0;
af=0|n[nf>>2];of=tf+af|0;
uf=of+1770035416|0;
ff=nh;
sf=ff+uf|0;
nh=sf;
cf=nh;
hf=cf<<7;
df=nh;
vf=df>>>25;
pf=hf|vf;
nh=pf;
_f=uv;
mf=nh;
yf=mf+_f|0;
nh=yf;
gf=nh;
bf=uv;
Af=gf&bf;
Tf=nh;
Ef=-1^Tf;
Mf=l_;
kf=Ef&Mf;
Sf=Af|kf;
Rf=_b+36|0;
If=0|n[Rf>>2];
Of=Sf+If|0;
Pf=Of+-1958414417|0;
Cf=dy;
Lf=Cf+Pf|0;
dy=Lf;
Nf=dy;
xf=Nf<<12;
Uf=dy;
Ff=Uf>>>20;
Df=xf|Ff;
dy=Df;
Yf=nh;
Hf=dy;
jf=Hf+Yf|0;
dy=jf;
zf=dy;
Vf=nh;
Kf=zf&Vf;
Xf=dy;
Gf=-1^Xf;
Jf=uv;
$f=Gf&Jf;
qf=Kf|$f;
Zf=_b+40|0;
Qf=0|n[Zf>>2];
rs=qf+Qf|0;
ts=rs+-42063|0;
is=l_;
ns=is+ts|0;
l_=ns;
as=l_;
os=as<<17;
us=l_;
fs=us>>>15;
ss=os|fs;
l_=ss;
ls=dy;
hs=l_;
ds=hs+ls|0;
l_=ds;
vs=l_;
ps=dy;
_s=vs&ps;
ms=l_;
ys=-1^ms;
gs=nh;
bs=ys&gs;
ws=_s|bs;
Ts=_b+44|0;
Es=0|n[Ts>>2];
Ms=ws+Es|0;
ks=Ms+-1990404162|0;
Ss=uv;
Rs=Ss+ks|0;
uv=Rs;
Is=uv;
Os=Is<<22;
Ps=uv;
Bs=Ps>>>10;
Ls=Os|Bs;
uv=Ls;
Ns=l_;
xs=uv;
Us=xs+Ns|0;
uv=Us;
Fs=uv;
Ds=l_;
Ys=Fs&Ds;
Hs=uv;
js=-1^Hs;
Ws=dy;
Vs=js&Ws;
Ks=Ys|Vs;
Xs=_b+48|0;
Gs=0|n[Xs>>2];
Js=Ks+Gs|0;
$s=Js+1804603682|0;
qs=nh;
Zs=qs+$s|0;
nh=Zs;
Qs=nh;
el=Qs<<7;
il=nh;
nl=il>>>25;
al=el|nl;
nh=al;
ol=uv;
ul=nh;
fl=ul+ol|0;
nh=fl;
sl=nh;
ll=uv;
cl=sl&ll;
hl=nh;
vl=-1^hl;
pl=l_;
_l=vl&pl;
ml=cl|_l;
yl=_b+52|0;
gl=0|n[yl>>2];
bl=ml+gl|0;
wl=bl+-40341101|0;
Al=dy;
Tl=Al+wl|0;
dy=Tl;
Ml=dy;
kl=Ml<<12;
Sl=dy;
Rl=Sl>>>20;
Il=kl|Rl;
dy=Il;
Ol=nh;
Pl=dy;
Bl=Pl+Ol|0;
dy=Bl;
Cl=dy;
Ll=nh;
xl=Cl&Ll;
Ul=dy;
Fl=-1^Ul;
Dl=uv;
Yl=Fl&Dl;
Hl=xl|Yl;
jl=_b+56|0;
Wl=0|n[jl>>2];
zl=Hl+Wl|0;
Vl=zl+-1502002290|0;
Xl=l_;
Gl=Xl+Vl|0;
l_=Gl;
Jl=l_;
$l=Jl<<17;
ql=l_;
Zl=ql>>>15;
Ql=$l|Zl;
l_=Ql;
ec=dy;
rc=l_;
tc=rc+ec|0;
l_=tc;
nc=l_;
ac=dy;
oc=nc&ac;
uc=l_;
fc=-1^uc;
sc=nh;
lc=fc&sc;
cc=oc|lc;
hc=_b+60|0;
dc=0|n[hc>>2];
pc=cc+dc|0;
_c=pc+1236535329|0;
mc=uv;
yc=mc+_c|0;
uv=yc;
gc=uv;
bc=gc<<22;
wc=uv;
Ac=wc>>>10;
Tc=bc|Ac;
uv=Tc;
Ec=l_;
kc=uv;
Sc=kc+Ec|0;
uv=Sc;
Rc=uv;
Ic=dy;
Oc=Rc&Ic;
Pc=l_;
Bc=dy;
Cc=-1^Bc;
Lc=Pc&Cc;
Nc=Oc|Lc;
Uc=_b+4|0;
Fc=0|n[Uc>>2];
Dc=Nc+Fc|0;
Yc=Dc+-165796510|0;
Hc=nh;
jc=Hc+Yc|0;
nh=jc;
Wc=nh;
zc=Wc<<5;
Vc=nh;
Kc=Vc>>>27;
Gc=zc|Kc;
nh=Gc;
Jc=uv;
$c=nh;
qc=$c+Jc|0;
nh=qc;
Zc=nh;
Qc=l_;
eh=Zc&Qc;
rh=uv;
th=l_;
ih=-1^th;
oh=rh&ih;
uh=eh|oh;
fh=_b+24|0;
sh=0|n[fh>>2];
lh=uh+sh|0;
ch=lh+-1069501632|0;
hh=dy;
dh=hh+ch|0;
dy=dh;
vh=dy;
ph=vh<<9;
mh=dy;
yh=mh>>>23;
gh=ph|yh;
dy=gh;
bh=nh;
wh=dy;
Ah=wh+bh|0;
dy=Ah;
Th=dy;
Eh=uv;
Mh=Th&Eh;
kh=nh;
Rh=uv;
Ih=-1^Rh;
Oh=kh&Ih;
Ph=Mh|Oh;
Bh=_b+44|0;
Ch=0|n[Bh>>2];
Lh=Ph+Ch|0;
Nh=Lh+643717713|0;
xh=l_;
Uh=xh+Nh|0;
l_=Uh;
Dh=l_;
Yh=Dh<<14;
Hh=l_;
jh=Hh>>>18;
Wh=Yh|jh;
l_=Wh;
zh=dy;
Vh=l_;
Kh=Vh+zh|0;
l_=Kh;
Xh=l_;
Gh=nh;
$h=Xh&Gh;
qh=dy;
Zh=nh;
Qh=-1^Zh;
ed=qh&Qh;
rd=$h|ed;
td=0|n[_b>>2];
id=rd+td|0;
nd=id+-373897302|0;
ad=uv;
ud=ad+nd|0;
uv=ud;
fd=uv;
sd=fd<<20;
ld=uv;
cd=ld>>>12;
hd=sd|cd;
uv=hd;
dd=l_;
vd=uv;
pd=vd+dd|0;
uv=pd;
_d=uv;
yd=dy;
gd=_d&yd;
bd=l_;
wd=dy;
Ad=-1^wd;
Td=bd&Ad;
Ed=gd|Td;
Md=_b+20|0;
kd=0|n[Md>>2];
Sd=Ed+kd|0;
Id=Sd+-701558691|0;
Od=nh;
Pd=Od+Id|0;
nh=Pd;
Bd=nh;
Cd=Bd<<5;
Ld=nh;
Nd=Ld>>>27;
xd=Cd|Nd;
nh=xd;
Ud=uv;
Fd=nh;
Yd=Fd+Ud|0;
nh=Yd;
Hd=nh;
jd=l_;
Wd=Hd&jd;
zd=uv;
Vd=l_;
Kd=-1^Vd;
Xd=zd&Kd;
Gd=Wd|Xd;
Jd=_b+40|0;
qd=0|n[Jd>>2];
Zd=Gd+qd|0;
Qd=Zd+38016083|0;
ev=dy;
rv=ev+Qd|0;
dy=rv;
tv=dy;
iv=tv<<9;
nv=dy;
av=nv>>>23;
ov=iv|av;
dy=ov;
sv=nh;
lv=dy;
cv=lv+sv|0;
dy=cv;
hv=dy;
dv=uv;
vv=hv&dv;
pv=nh;
_v=uv;
mv=-1^_v;
yv=pv&mv;
bv=vv|yv;
wv=_b+60|0;
Av=0|n[wv>>2];
Tv=bv+Av|0;
Ev=Tv+-660478335|0;
Mv=l_;
kv=Mv+Ev|0;
l_=kv;
Sv=l_;
Rv=Sv<<14;
Iv=l_;
Pv=Iv>>>18;
Bv=Rv|Pv;
l_=Bv;
Cv=dy;
Lv=l_;
Nv=Lv+Cv|0;
l_=Nv;
xv=l_;
Uv=nh;
Fv=xv&Uv;
Dv=dy;
Yv=nh;
jv=-1^Yv;
Wv=Dv&jv;
zv=Fv|Wv;
Vv=_b+16|0;
Kv=0|n[Vv>>2];
Xv=zv+Kv|0;
Gv=Xv+-405537848|0;
Jv=uv;
$v=Jv+Gv|0;
uv=$v;
qv=uv;
Qv=qv<<20;
ep=uv;
rp=ep>>>12;
tp=Qv|rp;
uv=tp;
ip=l_;
np=uv;
ap=np+ip|0;
uv=ap;
op=uv;
up=dy;
fp=op&up;
lp=l_;
cp=dy;
hp=-1^cp;
dp=lp&hp;
vp=fp|dp;
pp=_b+36|0;
_p=0|n[pp>>2];
mp=vp+_p|0;
yp=mp+568446438|0;
gp=nh;
wp=gp+yp|0;
nh=wp;
Ap=nh;
Tp=Ap<<5;
Ep=nh;
Mp=Ep>>>27;
kp=Tp|Mp;
nh=kp;
Sp=uv;
Rp=nh;
Ip=Rp+Sp|0;
nh=Ip;
Op=nh;
Bp=l_;
Cp=Op&Bp;
Lp=uv;
Np=l_;
xp=-1^Np;
Up=Lp&xp;
Fp=Cp|Up;
Dp=_b+56|0;
Yp=0|n[Dp>>2];
Hp=Fp+Yp|0;
Wp=Hp+-1019803690|0;
zp=dy;
Vp=zp+Wp|0;
dy=Vp;
Kp=dy;
Xp=Kp<<9;
Gp=dy;
Jp=Gp>>>23;
$p=Xp|Jp;
dy=$p;
qp=nh;
Zp=dy;
e_=Zp+qp|0;
dy=e_;
r_=dy;
t_=uv;
i_=r_&t_;
n_=nh;
a_=uv;
o_=-1^a_;
u_=n_&o_;
f_=i_|u_;
s_=_b+12|0;
h_=0|n[s_>>2];
d_=f_+h_|0;
v_=d_+-187363961|0;
p_=l_;
__=p_+v_|0;
l_=__;
m_=l_;
y_=m_<<14;
g_=l_;
b_=g_>>>18;
w_=y_|b_;
l_=w_;
T_=dy;
E_=l_;
M_=E_+T_|0;
l_=M_;
k_=l_;
S_=nh;
R_=k_&S_;
I_=dy;
O_=nh;
P_=-1^O_;
B_=I_&P_;
L_=R_|B_;
N_=_b+32|0;
x_=0|n[N_>>2];
U_=L_+x_|0;
F_=U_+1163531501|0;
D_=uv;
Y_=D_+F_|0;
uv=Y_;
H_=uv;
j_=H_<<20;
W_=uv;
V_=W_>>>12;
K_=j_|V_;
uv=K_;
X_=l_;
G_=uv;
J_=G_+X_|0;
uv=J_;
$_=uv;
q_=dy;
Z_=$_&q_;
Q_=l_;
em=dy;
tm=-1^em;
im=Q_&tm;
nm=Z_|im;
am=_b+52|0;
om=0|n[am>>2];
um=nm+om|0;
fm=um+-1444681467|0;
sm=nh;
lm=sm+fm|0;
nh=lm;
cm=nh;
dm=cm<<5;
vm=nh;
pm=vm>>>27;
_m=dm|pm;
nh=_m;
mm=uv;
ym=nh;
gm=ym+mm|0;
nh=gm;
bm=nh;
wm=l_;
Am=bm&wm;
Em=uv;
Mm=l_;
km=-1^Mm;
Sm=Em&km;
Rm=Am|Sm;
Im=_b+8|0;
Om=0|n[Im>>2];
Pm=Rm+Om|0;
Bm=Pm+-51403784|0;
Cm=dy;
Nm=Cm+Bm|0;
dy=Nm;
xm=dy;
Um=xm<<9;
Fm=dy;
Dm=Fm>>>23;
Ym=Um|Dm;
dy=Ym;
Hm=nh;
jm=dy;
Wm=jm+Hm|0;
dy=Wm;
zm=dy;
Km=uv;
Xm=zm&Km;
Gm=nh;
Jm=uv;
$m=-1^Jm;
qm=Gm&$m;
Zm=Xm|qm;
Qm=_b+28|0;
ey=0|n[Qm>>2];
ry=Zm+ey|0;
iy=ry+1735328473|0;
ny=l_;
ay=ny+iy|0;
l_=ay;
oy=l_;
uy=oy<<14;
fy=l_;
sy=fy>>>18;
ly=uy|sy;
l_=ly;
cy=dy;
hy=l_;
py=hy+cy|0;
l_=py;
_y=l_;
my=nh;
yy=_y&my;
gy=dy;
by=nh;
wy=-1^by;
Ay=gy&wy;
Ty=yy|Ay;
Ey=_b+48|0;
ky=0|n[Ey>>2];
Sy=Ty+ky|0;
Ry=Sy+-1926607734|0;
Iy=uv;
Oy=Iy+Ry|0;
uv=Oy;
Py=uv;
By=Py<<20;
Cy=uv;
Ly=Cy>>>12;
Ny=By|Ly;
uv=Ny;
Uy=l_;
Fy=uv;
Dy=Fy+Uy|0;
uv=Dy;
Yy=uv;
Hy=l_;
jy=Yy^Hy;
Wy=dy;
zy=jy^Wy;
Vy=_b+20|0;
Ky=0|n[Vy>>2];
Gy=zy+Ky|0;
Jy=Gy+-378558|0;
$y=nh;
qy=$y+Jy|0;
nh=qy;
Zy=nh;
Qy=Zy<<4;
eg=nh;
rg=eg>>>28;
tg=Qy|rg;
nh=tg;
ig=uv;
ag=nh;
og=ag+ig|0;
nh=og;
ug=nh;
fg=uv;
sg=ug^fg;
lg=l_;
cg=sg^lg;
hg=_b+32|0;
dg=0|n[hg>>2];
vg=cg+dg|0;
_g=vg+-2022574463|0;
mg=dy;
yg=mg+_g|0;
dy=yg;
gg=dy;
bg=gg<<11;
wg=dy;
Ag=wg>>>21;
Tg=bg|Ag;
dy=Tg;
Eg=nh;
Mg=dy;
Sg=Mg+Eg|0;
dy=Sg;
Rg=dy;
Ig=nh;
Og=Rg^Ig;
Pg=uv;
Bg=Og^Pg;
Cg=_b+44|0;
Lg=0|n[Cg>>2];
Ng=Bg+Lg|0;
xg=Ng+1839030562|0;
Fg=l_;
Dg=Fg+xg|0;
l_=Dg;
Yg=l_;
Hg=Yg<<16;
jg=l_;
Wg=jg>>>16;
zg=Hg|Wg;
l_=zg;
Vg=dy;
Kg=l_;
Xg=Kg+Vg|0;
l_=Xg;
Jg=l_;
$g=dy;
qg=Jg^$g;
Zg=nh;
Qg=qg^Zg;
eb=_b+56|0;
rb=0|n[eb>>2];
tb=Qg+rb|0;
ib=tb+-35309556|0;
nb=uv;
ob=nb+ib|0;
uv=ob;
ub=uv;
fb=ub<<23;
sb=uv;
lb=sb>>>9;
cb=fb|lb;
uv=cb;
hb=l_;
db=uv;
vb=db+hb|0;
uv=vb;
pb=uv;
yb=l_;
gb=pb^yb;
bb=dy;
wb=gb^bb;
Ab=_b+4|0;
Tb=0|n[Ab>>2];
Eb=wb+Tb|0;
Mb=Eb+-1530992060|0;
kb=nh;
Sb=kb+Mb|0;
nh=Sb;
Ib=nh;
Ob=Ib<<4;
Pb=nh;
Bb=Pb>>>28;
Cb=Ob|Bb;
nh=Cb;
Lb=uv;
Nb=nh;
xb=Nb+Lb|0;
nh=xb;
Ub=nh;
Fb=uv;
Yb=Ub^Fb;
Hb=l_;
jb=Yb^Hb;
Wb=_b+16|0;
zb=0|n[Wb>>2];
Vb=jb+zb|0;
Kb=Vb+1272893353|0;
Xb=dy;
Gb=Xb+Kb|0;
dy=Gb;
Jb=dy;
qb=Jb<<11;
Zb=dy;
Qb=Zb>>>21;
ew=qb|Qb;
dy=ew;
rw=nh;
tw=dy;
iw=tw+rw|0;
dy=iw;
nw=dy;
aw=nh;
ow=nw^aw;
fw=uv;
sw=ow^fw;
lw=_b+28|0;
cw=0|n[lw>>2];
hw=sw+cw|0;
dw=hw+-155497632|0;
vw=l_;
pw=vw+dw|0;
l_=pw;
_w=l_;
mw=_w<<16;
gw=l_;
bw=gw>>>16;
ww=mw|bw;
l_=ww;
Aw=dy;
Tw=l_;
Ew=Tw+Aw|0;
l_=Ew;
Mw=l_;
kw=dy;
Sw=Mw^kw;
Rw=nh;
Ow=Sw^Rw;
Pw=_b+40|0;
Bw=0|n[Pw>>2];
Cw=Ow+Bw|0;
Lw=Cw+-1094730640|0;
Nw=uv;
xw=Nw+Lw|0;
uv=xw;
Uw=uv;
Fw=Uw<<23;
Dw=uv;
Hw=Dw>>>9;
jw=Fw|Hw;
uv=jw;
Ww=l_;
zw=uv;
Vw=zw+Ww|0;
uv=Vw;
Kw=uv;
Xw=l_;
Gw=Kw^Xw;
Jw=dy;
$w=Gw^Jw;
Zw=_b+52|0;
Qw=0|n[Zw>>2];
eA=$w+Qw|0;
rA=eA+681279174|0;
tA=nh;
iA=tA+rA|0;
nh=iA;
nA=nh;
aA=nA<<4;
oA=nh;
uA=oA>>>28;
sA=aA|uA;
nh=sA;
lA=uv;
cA=nh;
hA=cA+lA|0;
nh=hA;
dA=nh;
vA=uv;
pA=dA^vA;
_A=l_;
mA=pA^_A;
yA=0|n[_b>>2];
wA=mA+yA|0;
AA=wA+-358537222|0;
TA=dy;
EA=TA+AA|0;
dy=EA;
MA=dy;
kA=MA<<11;
SA=dy;
RA=SA>>>21;
IA=kA|RA;
dy=IA;
OA=nh;
BA=dy;
CA=BA+OA|0;
dy=CA;
LA=dy;
NA=nh;
xA=LA^NA;
UA=uv;
FA=xA^UA;
DA=_b+12|0;
YA=0|n[DA>>2];
HA=FA+YA|0;
WA=HA+-722521979|0;
zA=l_;
VA=zA+WA|0;
l_=VA;
KA=l_;
XA=KA<<16;
GA=l_;
JA=GA>>>16;
$A=XA|JA;
l_=$A;
qA=dy;
ZA=l_;
eT=ZA+qA|0;
l_=eT;
rT=l_;
tT=dy;
iT=rT^tT;
nT=nh;
aT=iT^nT;
oT=_b+24|0;
uT=0|n[oT>>2];
fT=aT+uT|0;
sT=fT+76029189|0;
cT=uv;
hT=cT+sT|0;
uv=hT;
dT=uv;
vT=dT<<23;
pT=uv;
_T=pT>>>9;
mT=vT|_T;
uv=mT;
yT=l_;
gT=uv;
bT=gT+yT|0;
uv=bT;
AT=uv;
TT=l_;
ET=AT^TT;
MT=dy;
kT=ET^MT;
ST=_b+36|0;
RT=0|n[ST>>2];
IT=kT+RT|0;
OT=IT+-640364487|0;
PT=nh;
CT=PT+OT|0;
nh=CT;
LT=nh;
NT=LT<<4;
xT=nh;
UT=xT>>>28;
FT=NT|UT;
nh=FT;
DT=uv;
YT=nh;
HT=YT+DT|0;
nh=HT;
jT=nh;
zT=uv;
VT=jT^zT;
KT=l_;
XT=VT^KT;
GT=_b+48|0;
JT=0|n[GT>>2];
$T=XT+JT|0;
qT=$T+-421815835|0;
ZT=dy;
QT=ZT+qT|0;
dy=QT;
rE=dy;
tE=rE<<11;
iE=dy;
nE=iE>>>21;
aE=tE|nE;
dy=aE;
oE=nh;
uE=dy;
fE=uE+oE|0;
dy=fE;
sE=dy;
lE=nh;
hE=sE^lE;
dE=uv;
vE=hE^dE;
pE=_b+60|0;
_E=0|n[pE>>2];
mE=vE+_E|0;
yE=mE+530742520|0;
gE=l_;
bE=gE+yE|0;
l_=bE;
wE=l_;
a=wE<<16;
o=l_;
u=o>>>16;
f=a|u;
l_=f;
s=dy;
l=l_;
c=l+s|0;
l_=c;
h=l_;
p=dy;
_=h^p;
y=nh;
g=_^y;
b=_b+8|0;
w=0|n[b>>2];
A=g+w|0;
T=A+-995338651|0;
E=uv;
M=E+T|0;
uv=M;
k=uv;
S=k<<23;
I=uv;
O=I>>>9;
P=S|O;
uv=P;
B=l_;
C=uv;
L=C+B|0;
uv=L;
N=l_;
x=uv;
U=dy;
F=-1^U;
Y=x|F;
H=N^Y;
W=0|n[_b>>2];
z=H+W|0;
V=z+-198630844|0;
K=nh;
X=K+V|0;
nh=X;
G=nh;
J=G<<6;
$=nh;
Z=$>>>26;
Q=J|Z;
nh=Q;
ee=uv;
re=nh;
te=re+ee|0;
nh=te;
ie=uv;
ne=nh;
ae=l_;
oe=-1^ae;
ue=ne|oe;
se=ie^ue;
le=_b+28|0;
ce=0|n[le>>2];
he=se+ce|0;
de=he+1126891415|0;
ve=dy;
pe=ve+de|0;
dy=pe;
_e=dy;
me=_e<<10;
ye=dy;
be=ye>>>22;
we=me|be;
dy=we;
Ae=nh;
Ee=dy;
Me=Ee+Ae|0;
dy=Me;
ke=nh;
Se=dy;
Re=uv;
Ie=-1^Re;
Oe=Se|Ie;
Be=ke^Oe;
Ce=_b+56|0;
Le=0|n[Ce>>2];
Ne=Be+Le|0;
xe=Ne+-1416354905|0;
Ue=l_;
Fe=Ue+xe|0;
l_=Fe;
De=l_;
Ye=De<<15;
He=l_;
We=He>>>17;
ze=Ye|We;
l_=ze;
Ve=dy;
Ke=l_;
Xe=Ke+Ve|0;
l_=Xe;
Ge=dy;
Je=l_;
$e=nh;
qe=-1^$e;
Ze=Je|qe;
er=Ge^Ze;
rr=_b+20|0;
tr=0|n[rr>>2];
ir=er+tr|0;
nr=ir+-57434055|0;
ar=uv;
or=ar+nr|0;
uv=or;
ur=uv;
fr=ur<<21;
sr=uv;
hr=sr>>>11;
dr=fr|hr;
uv=dr;
vr=l_;
pr=uv;
_r=pr+vr|0;
uv=_r;
mr=l_;
yr=uv;
gr=dy;
br=-1^gr;
wr=yr|br;
Tr=mr^wr;
Er=_b+48|0;
Mr=0|n[Er>>2];
kr=Tr+Mr|0;
Sr=kr+1700485571|0;
Rr=nh;
Ir=Rr+Sr|0;
nh=Ir;
Or=nh;
Pr=Or<<6;
Br=nh;
Lr=Br>>>26;
Nr=Pr|Lr;
nh=Nr;
xr=uv;
Ur=nh;
Fr=Ur+xr|0;
nh=Fr;
Dr=uv;
Yr=nh;
Hr=l_;
jr=-1^Hr;
Wr=Yr|jr;
Vr=Dr^Wr;
Kr=_b+12|0;
Xr=0|n[Kr>>2];
Gr=Vr+Xr|0;
Jr=Gr+-1894986606|0;
$r=dy;
qr=$r+Jr|0;
dy=qr;
Zr=dy;
Qr=Zr<<10;
et=dy;
tt=et>>>22;
it=Qr|tt;
dy=it;
nt=nh;
at=dy;
ot=at+nt|0;
dy=ot;
ut=nh;
ft=dy;
st=uv;
lt=-1^st;
ct=ft|lt;
dt=ut^ct;
vt=_b+40|0;
pt=0|n[vt>>2];
_t=dt+pt|0;
mt=_t+-1051523|0;
yt=l_;
gt=yt+mt|0;
l_=gt;
bt=l_;
wt=bt<<15;
At=l_;
Et=At>>>17;
Mt=wt|Et;
l_=Mt;
kt=dy;
St=l_;
Rt=St+kt|0;
l_=Rt;
It=dy;
Ot=l_;
Pt=nh;
Bt=-1^Pt;
Ct=Ot|Bt;
Nt=It^Ct;
xt=_b+4|0;
Ut=0|n[xt>>2];
Ft=Nt+Ut|0;
Dt=Ft+-2054922799|0;
Yt=uv;
Ht=Yt+Dt|0;
uv=Ht;
jt=uv;
Wt=jt<<21;
zt=uv;
Kt=zt>>>11;
Xt=Wt|Kt;
uv=Xt;
Gt=l_;
Jt=uv;
$t=Jt+Gt|0;
uv=$t;
qt=l_;
Zt=uv;
Qt=dy;
ei=-1^Qt;
ri=Zt|ei;
ii=qt^ri;
ni=_b+32|0;
ai=0|n[ni>>2];
oi=ii+ai|0;
ui=oi+1873313359|0;
fi=nh;
si=fi+ui|0;
nh=si;
li=nh;
ci=li<<6;
hi=nh;
pi=hi>>>26;
_i=ci|pi;
nh=_i;
mi=uv;
yi=nh;
gi=yi+mi|0;
nh=gi;
bi=uv;
wi=nh;
Ai=l_;
Ti=-1^Ai;
Ei=wi|Ti;
ki=bi^Ei;
Si=_b+60|0;
Ri=0|n[Si>>2];
Ii=ki+Ri|0;
Oi=Ii+-30611744|0;
Pi=dy;
Bi=Pi+Oi|0;
dy=Bi;
Ci=dy;
Li=Ci<<10;
Ni=dy;
Ui=Ni>>>22;
Fi=Li|Ui;
dy=Fi;
Di=nh;
Yi=dy;
Hi=Yi+Di|0;
dy=Hi;
ji=nh;
Wi=dy;
zi=uv;
Vi=-1^zi;
Ki=Wi|Vi;
Gi=ji^Ki;
Ji=_b+24|0;
$i=0|n[Ji>>2];
qi=Gi+$i|0;
Zi=qi+-1560198380|0;
Qi=l_;
en=Qi+Zi|0;
l_=en;
rn=l_;
tn=rn<<15;
nn=l_;
on=nn>>>17;
un=tn|on;
l_=un;
fn=dy;
sn=l_;
ln=sn+fn|0;
l_=ln;
cn=dy;
hn=l_;
dn=nh;
vn=-1^dn;
pn=hn|vn;
mn=cn^pn;
yn=_b+52|0;
gn=0|n[yn>>2];
bn=mn+gn|0;
wn=bn+1309151649|0;
An=uv;
Tn=An+wn|0;
uv=Tn;
En=uv;
Mn=En<<21;
kn=uv;
Rn=kn>>>11;
In=Mn|Rn;
uv=In;
On=l_;
Pn=uv;
Bn=Pn+On|0;
uv=Bn;
Cn=l_;
Ln=uv;
Nn=dy;
xn=-1^Nn;
Un=Ln|xn;
Dn=Cn^Un;
Yn=_b+16|0;
Hn=0|n[Yn>>2];
jn=Dn+Hn|0;
Wn=jn+-145523070|0;
zn=nh;
Vn=zn+Wn|0;
nh=Vn;
Kn=nh;
Xn=Kn<<6;
Gn=nh;
$n=Gn>>>26;
qn=Xn|$n;
nh=qn;
Zn=uv;
Qn=nh;
ea=Qn+Zn|0;
nh=ea;
ra=uv;
ta=nh;
ia=l_;
na=-1^ia;
aa=ta|na;
ua=ra^aa;
fa=_b+44|0;
sa=0|n[fa>>2];
la=ua+sa|0;
ca=la+-1120210379|0;
ha=dy;
da=ha+ca|0;
dy=da;
va=dy;
pa=va<<10;
_a=dy;
ga=_a>>>22;
ba=pa|ga;
dy=ba;
wa=nh;
Aa=dy;
Ta=Aa+wa|0;
dy=Ta;
Ea=nh;
Ma=dy;
ka=uv;
Sa=-1^ka;
Ra=Ma|Sa;
Oa=Ea^Ra;
Pa=_b+8|0;
Ba=0|n[Pa>>2];
Ca=Oa+Ba|0;
La=Ca+718787259|0;
Na=l_;
xa=Na+La|0;
l_=xa;
Ua=l_;
Fa=Ua<<15;
Da=l_;
Ha=Da>>>17;
ja=Fa|Ha;
l_=ja;
Wa=dy;
za=l_;
Va=za+Wa|0;
l_=Va;
Ka=dy;
Xa=l_;
Ga=nh;
Ja=-1^Ga;
$a=Xa|Ja;
Za=Ka^$a;
Qa=_b+36|0;
eo=0|n[Qa>>2];
ro=Za+eo|0;
to=ro+-343485551|0;
io=uv;
no=io+to|0;
uv=no;
ao=uv;
oo=ao<<21;
uo=uv;
so=uo>>>11;
lo=oo|so;
uv=lo;
co=l_;
ho=uv;
vo=ho+co|0;
uv=vo;
po=nh;
_o=qu;
mo=0|n[_o>>2];
yo=mo+po|0;
n[_o>>2]=yo;
go=uv;
wo=qu;
Ao=wo+4|0;
To=0|n[Ao>>2];
Eo=To+go|0;
n[Ao>>2]=Eo;
Mo=l_;
ko=qu;
So=ko+8|0;
Ro=0|n[So>>2];
Io=Ro+Mo|0;
n[So>>2]=Io;
Oo=dy;
Bo=qu;
Co=Bo+12|0;
Lo=0|n[Co>>2];
No=Lo+Oo|0;
n[Co>>2]=No;
d=AE;
return;
}

function Te(e,r,i){
e|=0;
r|=0;
i|=0;
var a=0,
o=0,
u=0,
f=0,
s=0,
l=0,
c=0,
h=0,
p=0,
_=0,
m=0,
y=0,
g=0,
b=0,
w=0,
A=0,
T=0,
E=0,
M=0,
k=0;
var S=0,
R=0,
I=0,
O=0,
P=0,
B=0,
C=0,
L=0,
N=0,
x=0,
U=0,
F=0,
D=0,
Y=0,
H=0,
W=0,
z=0,
V=0,
K=0,
X=0;
var G=0,
J=0,
$=0,
q=0,
Z=0;
Z=d;
d=d+32|0;
if((0|d)>=(0|v))j(32|0);
S=e;
F=r;
X=i;
G=0;
J=0;
while(1){
$=J;
q=X;
a=$>>>0<q>>>0;
if(!a)break;
o=F;
u=J;
f=o+u|0;
s=0|t[f>>0];
l=255&s;
c=F;
h=J;
p=h+1|0;
_=c+p|0;
m=0|t[_>>0];
y=255&m;
g=y<<8;
b=l|g;
w=F;
A=J;
T=A+2|0;
E=w+T|0;
M=0|t[E>>0];
k=255&M;
R=k<<16;
I=b|R;
O=F;
P=J;
B=P+3|0;
C=O+B|0;
L=0|t[C>>0];
N=255&L;
x=N<<24;
U=I|x;
D=S;
Y=G;
H=D+(Y<<2)|0;
n[H>>2]=U;
W=G;
z=W+1|0;
G=z;
V=J;
K=V+4|0;
J=K;
}
d=Z;
return;
}

function Ee(e,r,t){
e|=0;
r|=0;
t|=0;
var i=0,
a=0,
o=0,
u=0,
f=0,
s=0,
l=0,
c=0,
h=0,
p=0,
_=0,
m=0,
y=0,
g=0,
b=0,
w=0,
A=0,
T=0,
E=0,
M=0;
var k=0,
S=0,
R=0,
I=0;
I=d;
d=d+32|0;
if((0|d)>=(0|v))j(32|0);
S=I+24|0;
A=e;
T=r;
E=t;
M=0;
k=0;
R=A;
a=0|n[R>>2];
o=a>>>3;
u=63&o;
M=u;
f=M;
s=f>>>0<56;
l=M;
i=s?56:120;
c=i-l|0;
k=c;
h=A;
Me(S,h,8);
p=A;
_=k;
we(p,1271,_);
m=A;
we(m,S,8);
y=T;
g=A;
b=g+8|0;
w=E;
Me(y,b,w);
d=I;
return;
}

function Me(e,r,i){
e|=0;
r|=0;
i|=0;
var a=0,
o=0,
u=0,
f=0,
s=0,
l=0,
c=0,
h=0,
p=0,
_=0,
m=0,
y=0,
g=0,
b=0,
w=0,
A=0,
T=0,
E=0,
M=0,
k=0;
var S=0,
R=0,
I=0,
O=0,
P=0,
B=0,
C=0,
L=0,
N=0,
x=0,
U=0,
F=0,
D=0,
Y=0,
H=0,
W=0,
z=0,
V=0,
K=0,
X=0;
var G=0,
J=0,
$=0,
q=0,
Z=0,
Q=0,
ee=0,
re=0,
te=0,
ie=0,
ne=0,
ae=0,
oe=0,
ue=0,
fe=0;
fe=d;
d=d+32|0;
if((0|d)>=(0|v))j(32|0);
S=e;
F=r;
$=i;
ne=0;
ae=0;
while(1){
oe=ae;
ue=$;
a=oe>>>0<ue>>>0;
if(!a)break;
o=F;
u=ne;
f=o+(u<<2)|0;
s=0|n[f>>2];
l=255&s;
c=255&l;
h=S;
p=ae;
_=h+p|0;
t[_>>0]=c;
m=F;
y=ne;
g=m+(y<<2)|0;
b=0|n[g>>2];
w=b>>>8;
A=255&w;
T=255&A;
E=S;
M=ae;
k=M+1|0;
R=E+k|0;
t[R>>0]=T;
I=F;
O=ne;
P=I+(O<<2)|0;
B=0|n[P>>2];
C=B>>>16;
L=255&C;
N=255&L;
x=S;
U=ae;
D=U+2|0;
Y=x+D|0;
t[Y>>0]=N;
H=F;
W=ne;
z=H+(W<<2)|0;
V=0|n[z>>2];
K=V>>>24;
X=255&K;
G=255&X;
J=S;
q=ae;
Z=q+3|0;
Q=J+Z|0;
t[Q>>0]=G;
ee=ne;
re=ee+1|0;
ne=re;
te=ae;
ie=te+4|0;
ae=ie;
}
d=fe;
return;
}

function ke(e,r,i){
e|=0;
r|=0;
i|=0;
var a=0,
o=0,
u=0,
f=0,
s=0,
l=0,
c=0,
h=0,
p=0,
_=0,
m=0,
y=0,
g=0,
b=0,
w=0,
A=0,
T=0,
E=0,
M=0,
k=0;
var S=0,
R=0,
I=0,
O=0,
P=0,
B=0,
C=0,
L=0,
N=0,
x=0,
U=0,
F=0,
D=0,
Y=0,
H=0,
W=0,
z=0,
V=0,
K=0,
X=0;
var G=0,
J=0,
$=0,
q=0,
Z=0,
Q=0,
ee=0,
re=0,
te=0,
ie=0,
ne=0,
ae=0,
oe=0,
ue=0,
fe=0,
se=0,
le=0,
ce=0,
he=0,
de=0;
var ve=0,
pe=0,
_e=0,
me=0,
ye=0,
ge=0,
be=0,
we=0,
Ae=0,
Te=0,
Ee=0,
Me=0,
ke=0,
Se=0,
Re=0,
Ie=0,
Oe=0,
Be=0,
Ce=0,
Le=0;
var Ne=0,
xe=0,
Ue=0,
Fe=0,
De=0,
Ye=0,
He=0,
je=0,
We=0,
ze=0,
Ve=0,
Ke=0,
Xe=0,
Ge=0,
Je=0,
$e=0,
qe=0,
Ze=0,
Qe=0,
er=0;
var rr=0,
tr=0,
ir=0,
nr=0,
ar=0,
or=0,
ur=0,
fr=0,
sr=0,
lr=0,
cr=0,
hr=0,
dr=0,
vr=0,
pr=0,
_r=0,
mr=0,
yr=0,
gr=0,
br=0;
var wr=0,
Ar=0,
Tr=0,
Er=0,
Mr=0,
kr=0,
Sr=0,
Rr=0,
Ir=0,
Or=0,
Pr=0,
Br=0,
Cr=0,
Lr=0,
Nr=0,
xr=0,
Ur=0,
Fr=0,
Dr=0,
Yr=0;
var Hr=0,
jr=0,
Wr=0,
zr=0,
Vr=0,
Kr=0,
Xr=0,
Gr=0,
Jr=0,
$r=0,
qr=0,
Zr=0,
Qr=0,
et=0,
rt=0,
tt=0,
it=0,
nt=0,
at=0,
ot=0;
var ut=0,
ft=0,
st=0,
lt=0,
ct=0,
ht=0,
dt=0,
vt=0,
pt=0,
_t=0,
mt=0,
yt=0,
gt=0,
bt=0,
wt=0,
At=0,
Tt=0,
Et=0,
Mt=0,
kt=0;
var St=0,
Rt=0,
It=0,
Ot=0,
Pt=0,
Bt=0,
Ct=0,
Lt=0,
Nt=0,
xt=0,
Ut=0,
Ft=0,
Dt=0,
Yt=0,
Ht=0,
jt=0,
Wt=0,
zt=0,
Vt=0,
Kt=0;
var Xt=0,
Gt=0,
Jt=0,
$t=0,
qt=0,
Zt=0;
Zt=d;
d=d+80|0;
if((0|d)>=(0|v))j(80|0);
Dr=e;
$r=r;
ut=i;
gr=Dr;
yt=gr;
Yt=0;
b=0;
br=$r;
wr=(0|br)<2;
if(wr){
Ar=ut;
n[Ar>>2]=0;
Rr=0;
yr=Rr;
d=Zt;
return 0|yr;
}
Tr=yt;
Er=$r;
Mr=Er-1|0;
kr=Tr+Mr|0;
Sr=0|t[kr>>0];
Ir=255&Sr;
Or=61==(0|Ir);
if(Or){
Pr=b;
Br=Pr+1|0;
b=Br;
}
Cr=yt;
Lr=$r;
Nr=Lr-2|0;
xr=Cr+Nr|0;
Ur=0|t[xr>>0];
Fr=255&Ur;
Yr=61==(0|Fr);
if(Yr){
Hr=b;
jr=Hr+1|0;
b=jr;
}
Wr=$r;
zr=3*Wr|0;
Vr=(0|zr)/4&-1;
Kr=b;
Xr=Vr-Kr|0;
Gr=ut;
n[Gr>>2]=Xr;
Jr=ut;
qr=0|n[Jr>>2];
Zr=0|Pe(qr);
It=Zr;
Qr=It;
et=(0|Qr)!=(0|0);
if(!et){
Rr=0;
yr=Rr;
d=Zt;
return 0|yr;
}
u=0;
while(1){
rt=u;
tt=$r;
it=tt-4|0;
nt=b;
at=it-nt|0;
ot=(0|rt)<=(0|at);
if(!ot)break;
ft=yt;
st=u;
lt=ft+st|0;
ct=0|t[lt>>0];
ht=255&ct;
dt=1335+ht|0;
vt=0|t[dt>>0];
pt=255&vt;
P=pt;
_t=yt;
mt=u;
gt=mt+1|0;
bt=_t+gt|0;
wt=0|t[bt>>0];
At=255&wt;
Tt=1335+At|0;
Et=0|t[Tt>>0];
Mt=255&Et;
W=Mt;
kt=yt;
St=u;
Rt=St+2|0;
Ot=kt+Rt|0;
Pt=0|t[Ot>>0];
Bt=255&Pt;
Ct=1335+Bt|0;
Lt=0|t[Ct>>0];
Nt=255&Lt;
ee=Nt;
xt=yt;
Ut=u;
Ft=Ut+3|0;
Dt=xt+Ft|0;
Ht=0|t[Dt>>0];
jt=255&Ht;
Wt=1335+jt|0;
zt=0|t[Wt>>0];
Vt=255&zt;
ce=Vt;
Kt=P;
Xt=Kt<<2;
Gt=W;
Jt=Gt>>4;
$t=Xt|Jt;
f=255&$t;
s=It;
l=Yt;
c=l+1|0;
Yt=c;
h=s+l|0;
t[h>>0]=f;
p=W;
_=p<<4;
m=ee;
y=m>>2;
g=_|y;
w=255&g;
A=It;
T=Yt;
E=T+1|0;
Yt=E;
M=A+T|0;
t[M>>0]=w;
k=ee;
S=k<<6;
R=ce;
I=S|R;
O=255&I;
B=It;
C=Yt;
L=C+1|0;
Yt=L;
N=B+C|0;
t[N>>0]=O;
x=u;
U=x+4|0;
u=U;
}
F=b;
D=1==(0|F);
if(D){
Y=yt;
H=u;
z=Y+H|0;
V=0|t[z>>0];
K=255&V;
X=1335+K|0;
G=0|t[X>>0];
J=255&G;
Ae=J;
$=yt;
q=u;
Z=q+1|0;
Q=$+Z|0;
re=0|t[Q>>0];
te=255&re;
ie=1335+te|0;
ne=0|t[ie>>0];
ae=255&ne;
Le=ae;
oe=yt;
ue=u;
fe=ue+2|0;
se=oe+fe|0;
le=0|t[se>>0];
he=255&le;
de=1335+he|0;
ve=0|t[de>>0];
pe=255&ve;
Ve=pe;
_e=Ae;
me=_e<<2;
ye=Le;
ge=ye>>4;
be=me|ge;
we=255&be;
Te=It;
Ee=Yt;
Me=Ee+1|0;
Yt=Me;
ke=Te+Ee|0;
t[ke>>0]=we;
Se=Le;
Re=Se<<4;
Ie=Ve;
Oe=Ie>>2;
Be=Re|Oe;
Ce=255&Be;
Ne=It;
xe=Yt;
Ue=xe+1|0;
Yt=Ue;
Fe=Ne+xe|0;
a=Ce;
o=Fe;
qt=16;
}else{
De=b;
Ye=2==(0|De);
if(Ye){
He=yt;
je=u;
We=He+je|0;
ze=0|t[We>>0];
Ke=255&ze;
Xe=1335+Ke|0;
Ge=0|t[Xe>>0];
Je=255&Ge;
tr=Je;
$e=yt;
qe=u;
Ze=qe+1|0;
Qe=$e+Ze|0;
er=0|t[Qe>>0];
rr=255&er;
ir=1335+rr|0;
nr=0|t[ir>>0];
ar=255&nr;
dr=ar;
or=tr;
ur=or<<2;
fr=dr;
sr=fr>>4;
lr=ur|sr;
cr=255&lr;
hr=It;
vr=Yt;
pr=vr+1|0;
Yt=pr;
_r=hr+vr|0;
a=cr;
o=_r;
qt=16;
}
}
if(16==(0|qt))t[o>>0]=a;
mr=It;
Rr=mr;
yr=Rr;
d=Zt;
return 0|yr;
}

function Se(e){
e|=0;
var r=0,
t=0,
i=0,
n=0,
a=0,
o=0,
u=0,
f=0,
s=0,
l=0,
c=0,
h=0,
p=0;
p=d;
d=d+16|0;
if((0|d)>=(0|v))j(16|0);
r=e;
a=r;
o=255&a;
u=(0|o)>=97;
if(u){
f=r;
s=255&f;
l=(0|s)<=122;
if(l){
c=r;
h=255&c;
t=h-32|0;
i=255&t;
r=i;
}
}
n=r;
d=p;
return 0|n;
}

function Re(e,r,i){
e|=0;
r|=0;
i|=0;
var n=0,
a=0,
o=0,
u=0,
f=0,
s=0,
l=0,
c=0,
h=0,
p=0,
_=0,
m=0,
y=0,
g=0,
b=0,
w=0,
A=0,
T=0,
E=0,
M=0;
var k=0,
S=0,
R=0,
I=0,
O=0,
P=0,
B=0,
C=0,
L=0,
N=0,
x=0,
U=0,
F=0,
D=0,
Y=0,
H=0,
W=0,
z=0,
V=0,
K=0;
var X=0,
G=0,
J=0,
$=0,
q=0,
Z=0,
Q=0,
ee=0,
re=0,
te=0,
ie=0,
ne=0;
ne=d;
d=d+32|0;
if((0|d)>=(0|v))j(32|0);
k=e;
U=r;
J=i;
ee=0;
while(1){
ie=ee;
n=J;
a=(0|ie)<(0|n);
if(!a)break;
o=U;
u=ee;
f=o+u|0;
s=0|t[f>>0];
l=0|Se(s);
re=l;
c=U;
h=ee;
p=h+1|0;
_=c+p|0;
m=0|t[_>>0];
y=0|Se(m);
te=y;
g=re;
b=255&g;
w=(0|b)>57;
A=re;
T=255&A;
if(w){
E=T-55|0;
M=255&E;
re=M;
}else{
S=T-48|0;
R=255&S;
re=R;
}
I=te;
O=255&I;
P=(0|O)>57;
B=te;
C=255&B;
if(P){
L=C-55|0;
N=255&L;
te=N;
}else{
x=C-48|0;
F=255&x;
te=F;
}
D=re;
Y=255&D;
H=Y<<4;
W=te;
z=255&W;
V=H|z;
K=255&V;
X=k;
G=ee;
$=(0|G)/2&-1;
q=X+$|0;
t[q>>0]=K;
Z=ee;
Q=Z+2|0;
ee=Q;
}
d=ne;
return;
}

function Ie(e,r,i){
e|=0;
r|=0;
i|=0;
var a=0,
o=0,
u=0,
f=0,
s=0,
l=0,
c=0,
h=0,
p=0,
_=0,
m=0,
y=0,
g=0,
b=0,
w=0,
A=0,
T=0,
E=0,
M=0,
k=0;
var S=0,
R=0,
I=0,
O=0,
P=0,
B=0,
C=0,
L=0,
N=0,
x=0,
U=0,
F=0,
D=0,
Y=0,
H=0,
W=0,
z=0,
V=0,
K=0,
X=0;
var G=0,
J=0,
$=0,
q=0,
Z=0,
Q=0,
ee=0,
re=0,
te=0,
ie=0,
ne=0,
ae=0,
oe=0,
ue=0,
fe=0,
se=0,
le=0,
ce=0,
he=0,
de=0;
var ve=0,
pe=0,
_e=0,
me=0,
ye=0,
ge=0,
Ae=0,
Te=0,
Me=0,
ke=0,
Se=0,
Re=0,
Ie=0,
Oe=0,
Ce=0,
Le=0,
Ne=0,
xe=0,
Ue=0,
Fe=0;
var De=0,
Ye=0,
He=0,
je=0,
ze=0,
Ve=0,
Ke=0,
Xe=0,
Ge=0,
Je=0,
$e=0,
qe=0,
Ze=0,
Qe=0;
qe=d;
d=d+176|0;
if((0|d)>=(0|v))j(176|0);
Je=qe;
ye=qe+152|0;
u=qe+16|0;
f=qe+136|0;
F=e;
$=r;
ue=i;
$e=ye;
Ze=1591;
Qe=$e+16|0;
do{
t[$e>>0]=0|t[Ze>>0];
$e=$e+1|0;
Ze=Ze+1|0;
}while((0|$e)<(0|Qe));
h=F;
p=0|We(h);
_=$;
m=0|We(_);
y=p+m|0;
g=ue;
b=0|We(g);
w=y+b|0;
A=w+16|0;
Le=A;
T=Le;
E=0|Pe(T);
Ke=E;
M=Ke;
k=(0|M)!=(0|0);
if(!k){
S=0;
Ge=S;
d=qe;
return 0|Ge;
}
a=0;
R=Ke;
I=F;
O=F;
P=0|We(O);
0|Ur(0|R,0|I,0|P);
B=F;
C=0|We(B);
L=a;
N=L+C|0;
a=N;
x=Ke;
U=a;
D=x+U|0;
Y=$;
H=$;
W=0|We(H);
0|Ur(0|D,0|Y,0|W);
z=$;
V=0|We(z);
K=a;
X=K+V|0;
a=X;
G=Ke;
J=a;
q=G+J|0;
Z=ue;
Q=ue;
ee=0|We(Q);
0|Ur(0|q,0|Z,0|ee);
re=ue;
te=0|We(re);
ie=a;
ne=ie+te|0;
a=ne;
o=0;
while(1){
ae=o;
oe=(0|ae)<16;
if(!oe)break;
fe=o;
se=ye+fe|0;
le=0|t[se>>0];
ce=255&le;
he=82^ce;
de=255&he;
ve=o;
pe=ye+ve|0;
t[pe>>0]=de;
_e=o;
me=_e+1|0;
o=me;
}
ge=Ke;
Ae=a;
Te=ge+Ae|0;
$e=Te;
Ze=ye;
Qe=$e+16|0;
do{
t[$e>>0]=0|t[Ze>>0];
$e=$e+1|0;
Ze=Ze+1|0;
}while((0|$e)<(0|Qe));
be(u);
Me=Ke;
ke=Le;
we(u,Me,ke);
Ee(u,f,16);
Se=0|Pe(33);
s=Se;
Re=s;
$e=Re;
Qe=$e+33|0;
do{
t[$e>>0]=0|0;
$e=$e+1|0;
}while((0|$e)<(0|Qe));
Ie=s;
l=Ie;
c=0;
while(1){
Oe=c;
Ce=(0|Oe)<16;
if(!Ce)break;
Ne=l;
xe=c;
Ue=f+xe|0;
Fe=0|t[Ue>>0];
De=255&Fe;
n[Je>>2]=De;
0|er(Ne,1607,Je);
Ye=l;
He=Ye+2|0;
l=He;
je=c;
ze=je+1|0;
c=ze;
}
Ve=Ke;
Be(Ve);
Xe=s;
S=Xe;
Ge=S;
d=qe;
return 0|Ge;
}

function Oe(e){
e|=0;
var r=0,
i=0,
a=0,
o=0,
u=0,
f=0,
s=0,
l=0,
c=0,
h=0,
p=0,
_=0,
m=0,
y=0,
g=0,
b=0,
w=0,
A=0,
T=0,
E=0;
var M=0,
k=0,
S=0,
R=0,
I=0,
O=0,
P=0,
B=0,
C=0,
L=0,
N=0,
x=0,
U=0,
F=0,
D=0,
Y=0,
H=0,
W=0,
z=0,
V=0;
var K=0,
X=0,
G=0,
J=0,
$=0,
q=0,
Z=0,
Q=0,
ee=0,
re=0,
te=0,
ie=0,
ne=0,
ae=0,
oe=0,
ue=0,
fe=0,
se=0,
le=0,
ce=0;
var de=0,
ve=0,
pe=0;
de=d;
d=d+80|0;
if((0|d)>=(0|v))j(80|0);
S=de+56|0;
F=de+40|0;
a=de+4|0;
_=e;
ce=S;
ve=1612;
pe=ce+16|0;
do{
t[ce>>0]=0|t[ve>>0];
ce=ce+1|0;
ve=ve+1|0;
}while((0|ce)<(0|pe));
ce=F;
ve=1628;
pe=ce+16|0;
do{
t[ce>>0]=0|t[ve>>0];
ce=ce+1|0;
ve=ve+1|0;
}while((0|ce)<(0|pe));
u=_;
f=0|We(u);
$=f;
s=$;
l=0|Pe(s);
ue=l;
c=ue;
h=(0|c)!=(0|0);
if(!h){
r=4832;
oe=r;
d=de;
return 0|oe;
}
p=ue;
m=_;
y=$;
Re(p,m,y);
g=$;
b=0|Pe(g);
fe=b;
w=fe;
A=(0|w)!=(0|0);
if(!A){
r=4832;
oe=r;
d=de;
return 0|oe;
}
se=S;
le=F;
i=0;
while(1){
T=i;
E=(0|T)<16;
if(!E)break;
M=i;
k=S+M|0;
R=0|t[k>>0];
I=255&R;
O=82^I;
P=255&O;
B=se;
C=i;
L=B+C|0;
t[L>>0]=P;
N=i;
x=F+N|0;
U=0|t[x>>0];
D=255&U;
Y=82^D;
H=255&Y;
W=le;
z=i;
V=W+z|0;
t[V>>0]=H;
K=i;
X=K+1|0;
i=X;
}
G=fe;
J=ue;
q=$;
Z=se;
Q=le;
he(G,J,q,Z,Q);
n[a>>2]=0;
ee=fe;
re=$;
te=0|ke(ee,re,a);
o=te;
ie=fe;
Be(ie);
ne=ue;
Be(ne);
ae=o;
r=ae;
oe=r;
d=de;
return 0|oe;
}

function Pe(e){
e|=0;
var r=0,
t=0,
i=0,
a=0,
o=0,
u=0,
f=0,
s=0,
l=0,
c=0,
h=0,
p=0,
_=0,
m=0,
y=0,
g=0,
b=0,
w=0,
A=0,
T=0;
var E=0,
M=0,
k=0,
S=0,
R=0,
I=0,
O=0,
P=0,
B=0,
C=0,
L=0,
N=0,
x=0,
U=0,
F=0,
D=0,
Y=0,
H=0,
W=0,
z=0;
var V=0,
K=0,
X=0,
G=0,
J=0,
$=0,
q=0,
Z=0,
Q=0,
ee=0,
re=0,
te=0,
ie=0,
ne=0,
ae=0,
oe=0,
ue=0,
fe=0,
se=0,
le=0;
var ce=0,
he=0,
de=0,
ve=0,
pe=0,
_e=0,
me=0,
ye=0,
ge=0,
be=0,
we=0,
Ae=0,
Te=0,
Ee=0,
Me=0,
ke=0,
Se=0,
Re=0,
Ie=0,
Oe=0;
var Pe=0,
Be=0,
Ce=0,
Le=0,
Ne=0,
xe=0,
Ue=0,
De=0,
Ye=0,
He=0,
je=0,
We=0,
ze=0,
Ve=0,
Ke=0,
Xe=0,
Ge=0,
Je=0,
$e=0,
qe=0;
var Ze=0,
Qe=0,
er=0,
rr=0,
tr=0,
ir=0,
nr=0,
ar=0,
or=0,
ur=0,
fr=0,
sr=0,
lr=0,
cr=0,
hr=0,
dr=0,
vr=0,
pr=0,
_r=0,
mr=0;
var yr=0,
gr=0,
br=0,
wr=0,
Ar=0,
Tr=0,
Er=0,
Mr=0,
kr=0,
Sr=0,
Rr=0,
Ir=0,
Or=0,
Pr=0,
Br=0,
Cr=0,
Lr=0,
xr=0,
Ur=0,
Fr=0;
var Dr=0,
Yr=0,
Hr=0,
jr=0,
Wr=0,
zr=0,
Vr=0,
Kr=0,
Xr=0,
Gr=0,
Jr=0,
$r=0,
qr=0,
Zr=0,
Qr=0,
et=0,
rt=0,
tt=0,
it=0,
nt=0;
var at=0,
ot=0,
ut=0,
ft=0,
st=0,
lt=0,
ct=0,
ht=0,
dt=0,
vt=0,
pt=0,
_t=0,
mt=0,
yt=0,
gt=0,
bt=0,
wt=0,
At=0,
Tt=0,
Et=0;
var Mt=0,
kt=0,
St=0,
Rt=0,
It=0,
Ot=0,
Pt=0,
Bt=0,
Ct=0,
Lt=0,
Nt=0,
xt=0,
Ut=0,
Ft=0,
Dt=0,
Yt=0,
Ht=0,
jt=0,
Wt=0,
zt=0;
var Vt=0,
Kt=0,
Xt=0,
Gt=0,
Jt=0,
$t=0,
qt=0,
Zt=0,
Qt=0,
ei=0,
ri=0,
ti=0,
ii=0,
ni=0,
ai=0,
oi=0,
ui=0,
fi=0,
si=0,
li=0;
var ci=0,
hi=0,
di=0,
vi=0,
pi=0,
_i=0,
mi=0,
yi=0,
gi=0,
bi=0,
wi=0,
Ai=0,
Ti=0,
Ei=0,
Mi=0,
ki=0,
Si=0,
Ri=0,
Ii=0,
Oi=0;
var Pi=0,
Bi=0,
Ci=0,
Li=0,
Ni=0,
xi=0,
Ui=0,
Fi=0,
Di=0,
Yi=0,
Hi=0,
ji=0,
Wi=0,
zi=0,
Vi=0,
Ki=0,
Xi=0,
Gi=0,
Ji=0,
$i=0;
var qi=0,
Zi=0,
Qi=0,
en=0,
rn=0,
tn=0,
nn=0,
an=0,
on=0,
un=0,
fn=0,
sn=0,
ln=0,
cn=0,
hn=0,
dn=0,
vn=0,
pn=0,
_n=0,
mn=0;
var yn=0,
gn=0,
bn=0,
wn=0,
An=0,
Tn=0,
En=0,
Mn=0,
kn=0,
Sn=0,
Rn=0,
In=0,
On=0,
Pn=0,
Bn=0,
Cn=0,
Ln=0,
Nn=0,
xn=0,
Un=0;
var Fn=0,
Dn=0,
Yn=0,
Hn=0,
jn=0,
Wn=0,
zn=0,
Vn=0,
Kn=0,
Xn=0,
Gn=0,
Jn=0,
$n=0,
qn=0,
Zn=0,
Qn=0,
ea=0,
ra=0,
ta=0,
ia=0;
var na=0,
aa=0,
oa=0,
ua=0,
fa=0,
sa=0,
la=0,
ca=0,
ha=0,
da=0,
va=0,
pa=0,
_a=0,
ma=0,
ya=0,
ga=0,
ba=0,
wa=0,
Aa=0,
Ta=0;
var Ea=0,
Ma=0,
ka=0,
Sa=0,
Ra=0,
Ia=0,
Oa=0,
Pa=0,
Ba=0,
Ca=0,
La=0,
Na=0,
xa=0,
Ua=0,
Fa=0,
Da=0,
Ya=0,
Ha=0,
ja=0,
Wa=0;
var za=0,
Va=0,
Ka=0,
Xa=0,
Ga=0,
Ja=0,
$a=0,
qa=0,
Za=0,
Qa=0,
eo=0,
ro=0,
to=0,
io=0,
no=0,
ao=0,
oo=0,
uo=0,
fo=0,
so=0;
var lo=0,
co=0,
ho=0,
vo=0,
po=0,
_o=0,
mo=0,
yo=0,
go=0,
bo=0,
wo=0,
Ao=0,
To=0,
Eo=0,
Mo=0,
ko=0,
So=0,
Ro=0,
Io=0,
Oo=0;
var Po=0,
Bo=0,
Co=0,
Lo=0,
No=0,
xo=0,
Uo=0,
Fo=0,
Do=0,
Yo=0,
Ho=0,
jo=0,
Wo=0,
zo=0,
Vo=0,
Ko=0,
Xo=0,
Go=0,
Jo=0,
$o=0;
var qo=0,
Zo=0,
Qo=0,
eu=0,
ru=0,
tu=0,
iu=0,
nu=0,
au=0,
ou=0,
uu=0,
fu=0,
su=0,
lu=0,
cu=0,
hu=0,
du=0,
vu=0,
pu=0,
_u=0;
var mu=0,
yu=0,
gu=0,
bu=0,
wu=0,
Au=0,
Tu=0,
Eu=0,
Mu=0,
ku=0,
Su=0,
Ru=0,
Iu=0,
Ou=0,
Pu=0,
Bu=0,
Cu=0,
Lu=0,
Nu=0,
xu=0;
var Uu=0,
Fu=0,
Du=0,
Yu=0,
Hu=0,
ju=0,
Wu=0,
zu=0,
Vu=0,
Ku=0,
Xu=0,
Gu=0,
Ju=0,
$u=0,
qu=0,
Zu=0,
Qu=0,
ef=0,
rf=0,
tf=0;
var nf=0,
af=0,
of=0,
uf=0,
ff=0,
sf=0,
lf=0,
cf=0,
hf=0,
df=0,
vf=0,
pf=0,
_f=0,
mf=0,
yf=0,
gf=0,
bf=0,
wf=0,
Af=0,
Tf=0;
var Ef=0,
Mf=0,
kf=0,
Sf=0,
Rf=0,
If=0,
Of=0,
Pf=0,
Bf=0,
Cf=0,
Lf=0,
Nf=0,
xf=0,
Uf=0,
Ff=0,
Df=0,
Yf=0,
Hf=0,
jf=0,
Wf=0;
var zf=0,
Vf=0,
Kf=0,
Xf=0,
Gf=0,
Jf=0,
$f=0,
qf=0,
Zf=0,
Qf=0,
es=0,
rs=0,
ts=0,
is=0,
ns=0,
as=0,
os=0,
us=0,
fs=0,
ss=0;
var ls=0,
cs=0,
hs=0,
ds=0,
vs=0,
ps=0,
_s=0,
ms=0,
ys=0,
gs=0,
bs=0,
ws=0,
As=0,
Ts=0,
Es=0,
Ms=0,
ks=0,
Ss=0,
Rs=0,
Is=0;
var Os=0,
Ps=0,
Bs=0,
Cs=0,
Ls=0,
Ns=0,
xs=0,
Us=0,
Fs=0,
Ds=0,
Ys=0,
Hs=0,
js=0,
Ws=0,
zs=0,
Vs=0,
Ks=0,
Xs=0,
Gs=0,
Js=0;
var $s=0,
qs=0,
Zs=0,
Qs=0,
el=0,
rl=0,
tl=0,
il=0,
nl=0,
al=0,
ol=0,
ul=0,
fl=0,
sl=0,
ll=0,
cl=0,
hl=0,
dl=0,
vl=0,
pl=0;
var _l=0,
ml=0,
yl=0,
gl=0,
bl=0,
wl=0,
Al=0,
Tl=0,
El=0,
Ml=0,
kl=0,
Sl=0,
Rl=0,
Il=0,
Ol=0,
Pl=0,
Bl=0,
Cl=0,
Ll=0,
Nl=0;
var xl=0,
Ul=0,
Fl=0,
Dl=0,
Yl=0,
Hl=0,
jl=0,
Wl=0,
zl=0,
Vl=0,
Kl=0,
Xl=0,
Gl=0,
Jl=0,
$l=0,
ql=0,
Zl=0,
Ql=0,
ec=0,
rc=0;
var tc=0,
ic=0,
nc=0,
ac=0,
oc=0,
uc=0,
fc=0,
sc=0,
lc=0,
cc=0,
hc=0,
dc=0,
vc=0,
pc=0,
_c=0,
mc=0,
yc=0,
gc=0,
bc=0,
wc=0;
var Ac=0,
Tc=0,
Ec=0,
Mc=0,
kc=0,
Sc=0,
Rc=0,
Ic=0,
Oc=0,
Pc=0,
Bc=0,
Cc=0,
Lc=0,
Nc=0,
xc=0,
Uc=0,
Fc=0,
Dc=0,
Yc=0,
Hc=0;
var jc=0,
Wc=0,
zc=0,
Vc=0,
Kc=0,
Xc=0,
Gc=0,
Jc=0,
$c=0,
qc=0,
Zc=0,
Qc=0,
eh=0,
rh=0,
th=0,
ih=0,
nh=0,
ah=0,
oh=0,
uh=0;
var fh=0,
sh=0,
lh=0,
ch=0,
hh=0,
dh=0,
vh=0,
ph=0,
_h=0,
mh=0,
yh=0,
gh=0,
bh=0,
wh=0,
Ah=0,
Th=0,
Eh=0,
Mh=0,
kh=0,
Sh=0;
var Rh=0,
Ih=0,
Oh=0,
Ph=0,
Bh=0,
Ch=0,
Lh=0,
Nh=0,
xh=0,
Uh=0,
Fh=0,
Dh=0,
Yh=0,
Hh=0,
jh=0,
Wh=0,
zh=0,
Vh=0,
Kh=0,
Xh=0;
var Gh=0,
Jh=0,
$h=0,
qh=0,
Zh=0,
Qh=0,
ed=0,
rd=0,
td=0,
id=0,
nd=0,
ad=0,
od=0,
ud=0,
fd=0,
sd=0,
ld=0,
cd=0,
hd=0,
dd=0;
var vd=0,
pd=0,
_d=0,
md=0,
yd=0,
gd=0,
bd=0,
wd=0,
Ad=0,
Td=0,
Ed=0,
Md=0,
kd=0,
Sd=0,
Rd=0,
Id=0,
Od=0,
Pd=0,
Bd=0,
Cd=0;
var Ld=0,
Nd=0,
xd=0,
Ud=0,
Fd=0,
Dd=0,
Yd=0,
Hd=0,
jd=0,
Wd=0,
zd=0,
Vd=0,
Kd=0,
Xd=0,
Gd=0,
Jd=0,
$d=0,
qd=0,
Zd=0,
Qd=0;
var ev=0,
rv=0,
tv=0,
iv=0,
nv=0,
av=0,
ov=0,
uv=0,
fv=0,
sv=0,
lv=0,
cv=0,
hv=0,
dv=0,
vv=0,
pv=0,
_v=0,
mv=0,
yv=0,
gv=0;
var bv=0,
wv=0,
Av=0,
Tv=0,
Ev=0,
Mv=0,
kv=0,
Sv=0,
Rv=0,
Iv=0,
Ov=0,
Pv=0,
Bv=0,
Cv=0,
Lv=0,
Nv=0,
xv=0,
Uv=0,
Fv=0,
Dv=0;
var Yv=0,
Hv=0,
jv=0,
Wv=0,
zv=0,
Vv=0,
Kv=0,
Xv=0,
Gv=0,
Jv=0,
$v=0,
qv=0,
Zv=0,
Qv=0,
ep=0,
rp=0,
tp=0,
ip=0,
np=0,
ap=0;
var op=0,
up=0,
fp=0,
sp=0,
lp=0,
cp=0,
hp=0,
dp=0,
vp=0,
pp=0,
_p=0,
mp=0,
yp=0,
gp=0,
bp=0,
wp=0,
Ap=0,
Tp=0,
Ep=0,
Mp=0;
var kp=0,
Sp=0,
Rp=0,
Ip=0,
Op=0,
Pp=0,
Bp=0,
Cp=0,
Lp=0,
Np=0,
xp=0,
Up=0,
Fp=0,
Dp=0,
Yp=0,
Hp=0,
jp=0,
Wp=0,
zp=0,
Vp=0;
var Kp=0,
Xp=0,
Gp=0,
Jp=0,
$p=0,
qp=0,
Zp=0,
Qp=0,
e_=0,
r_=0,
t_=0,
i_=0,
n_=0,
a_=0,
o_=0,
u_=0,
f_=0,
s_=0,
l_=0,
c_=0;
var h_=0,
d_=0,
v_=0,
p_=0,
__=0,
m_=0,
y_=0,
g_=0,
b_=0,
w_=0,
A_=0,
T_=0,
E_=0,
M_=0,
k_=0,
S_=0,
R_=0,
I_=0,
O_=0,
P_=0;
var B_=0,
C_=0,
L_=0,
N_=0,
x_=0,
U_=0,
F_=0,
D_=0,
Y_=0,
H_=0,
j_=0,
W_=0,
z_=0,
V_=0,
K_=0,
X_=0,
G_=0,
J_=0,
$_=0,
q_=0;
var Z_=0,
Q_=0,
em=0,
rm=0,
tm=0,
im=0,
nm=0,
am=0,
om=0,
um=0,
fm=0,
sm=0,
lm=0,
cm=0,
hm=0,
dm=0,
vm=0,
pm=0,
_m=0,
mm=0;
var ym=0,
gm=0,
bm=0,
wm=0,
Am=0,
Tm=0,
Em=0,
Mm=0,
km=0,
Sm=0,
Rm=0,
Im=0,
Om=0,
Pm=0,
Bm=0,
Cm=0,
Lm=0,
Nm=0,
xm=0,
Um=0;
var Fm=0,
Dm=0,
Ym=0,
Hm=0,
jm=0,
Wm=0,
zm=0,
Vm=0,
Km=0,
Xm=0,
Gm=0,
Jm=0,
$m=0,
qm=0,
Zm=0,
Qm=0,
ey=0,
ry=0,
ty=0,
iy=0;
var ny=0,
ay=0,
oy=0,
uy=0,
fy=0,
sy=0,
ly=0,
cy=0,
hy=0,
dy=0,
vy=0,
py=0,
_y=0,
my=0,
yy=0,
gy=0,
by=0,
wy=0,
Ay=0,
Ty=0;
var Ey=0,
My=0,
ky=0,
Sy=0,
Ry=0,
Iy=0,
Oy=0,
Py=0,
By=0,
Cy=0,
Ly=0,
Ny=0,
xy=0,
Uy=0,
Fy=0,
Dy=0,
Yy=0,
Hy=0,
jy=0,
Wy=0;
var zy=0,
Vy=0,
Ky=0,
Xy=0,
Gy=0,
Jy=0,
$y=0,
qy=0,
Zy=0,
Qy=0,
eg=0,
rg=0,
tg=0,
ig=0,
ng=0,
ag=0,
og=0,
ug=0,
fg=0,
sg=0;
var lg=0,
cg=0;
cg=d;
d=d+16|0;
if((0|d)>=(0|v))j(16|0);
xe=cg;
Ht=e>>>0<245;
do{
if(Ht){
Vn=e>>>0<11;
Jo=e+11|0;
Qf=-8&Jo;
tc=Vn?16:Qf;
ad=tc>>>3;
fp=0|n[1021];
cm=fp>>>ad;
Ue=3&cm;
Je=0==(0|Ue);
if(!Je){
or=1&cm;
mr=1^or;
Rr=mr+ad|0;
Yr=Rr<<1;
qr=4124+(Yr<<2)|0;
ft=qr+8|0;
gt=0|n[ft>>2];
Ot=gt+8|0;
jt=0|n[Ot>>2];
Qt=(0|qr)==(0|jt);
if(Qt){
li=1<<Rr;
wi=-1^li;
Bi=fp&wi;
n[1021]=Bi;
}else{
Wi=jt+12|0;
n[Wi>>2]=qr;
n[ft>>2]=jt;
}
en=Rr<<3;
hn=3|en;
Tn=gt+4|0;
n[Tn>>2]=hn;
Ln=gt+en|0;
Kn=Ln+4|0;
ia=0|n[Kn>>2];
va=1|ia;
n[Kn>>2]=va;
u=Ot;
d=cg;
return 0|u;
}
Ma=0|n[4092>>2];
xa=tc>>>0>Ma>>>0;
if(xa){
Xa=0==(0|cm);
if(!Xa){
no=cm<<ad;
_o=2<<ad;
So=0-_o|0;
Fo=_o|So;
$o=no&Fo;
uu=0-$o|0;
yu=$o&uu;
Iu=yu+-1|0;
Yu=Iu>>>12;
qu=16&Yu;
sf=Iu>>>qu;
bf=sf>>>5;
Pf=8&bf;
jf=Pf|qu;
es=sf>>>Pf;
cs=es>>>2;
As=4&cs;
Cs=jf|As;
zs=es>>>As;
rl=zs>>>1;
hl=2&rl;
Tl=Cs|hl;
Ll=zs>>>hl;
Vl=Ll>>>1;
ic=1&Vl;
vc=Tl|ic;
Mc=Ll>>>ic;
xc=vc+Mc|0;
Xc=xc<<1;
nh=4124+(Xc<<2)|0;
ph=nh+8|0;
kh=0|n[ph>>2];
Uh=kh+8|0;
Gh=0|n[Uh>>2];
od=(0|nh)==(0|Gh);
if(od){
md=1<<xc;
Rd=-1^md;
Dd=fp&Rd;
n[1021]=Dd;
hm=Dd;
}else{
$d=Gh+12|0;
n[$d>>2]=nh;
n[ph>>2]=Gh;
hm=fp;
}
uv=xc<<3;
yv=uv-tc|0;
Iv=3|tc;
Yv=kh+4|0;
n[Yv>>2]=Iv;
qv=kh+tc|0;
sp=1|yv;
bp=qv+4|0;
n[bp>>2]=sp;
Pp=qv+yv|0;
n[Pp>>2]=yv;
jp=0==(0|Ma);
if(!jp){
Qp=0|n[4104>>2];
l_=Ma>>>3;
w_=l_<<1;
B_=4124+(w_<<2)|0;
W_=1<<l_;
em=hm&W_;
Tm=0==(0|em);
if(Tm){
Lm=hm|W_;
n[1021]=Lm;
ge=B_+8|0;
b=B_;
Ie=ge;
}else{
Vm=B_+8|0;
ty=0|n[Vm>>2];
b=ty;
Ie=Vm;
}
n[Ie>>2]=Qp;
dy=b+12|0;
n[dy>>2]=Qp;
Ey=Qp+8|0;
n[Ey>>2]=b;
Ny=Qp+12|0;
n[Ny>>2]=B_;
}
n[4092>>2]=yv;
n[4104>>2]=qv;
u=Uh;
d=cg;
return 0|u;
}
Uy=0|n[4088>>2];
Fy=0==(0|Uy);
if(Fy)g=tc;else
{
De=0-Uy|0;
Ye=Uy&De;
He=Ye+-1|0;
je=He>>>12;
We=16&je;
ze=He>>>We;
Ve=ze>>>5;
Ke=8&Ve;
Xe=Ke|We;
Ge=ze>>>Ke;
$e=Ge>>>2;
qe=4&$e;
Ze=Xe|qe;
Qe=Ge>>>qe;
er=Qe>>>1;
rr=2&er;
tr=Ze|rr;
ir=Qe>>>rr;
nr=ir>>>1;
ar=1&nr;
ur=tr|ar;
fr=ir>>>ar;
sr=ur+fr|0;
lr=4388+(sr<<2)|0;
cr=0|n[lr>>2];
hr=cr+4|0;
dr=0|n[hr>>2];
vr=-8&dr;
pr=vr-tc|0;
_r=cr+16|0;
yr=0|n[_r>>2];
Jy=(0|yr)==(0|0);
Be=1&Jy;
gr=(cr+16|0)+(Be<<2)|0;
br=0|n[gr>>2];
wr=(0|br)==(0|0);
if(wr){
p=cr;
m=pr;
}else{
_=cr;
y=pr;
Tr=br;
while(1){
Ar=Tr+4|0;
Er=0|n[Ar>>2];
Mr=-8&Er;
kr=Mr-tc|0;
Sr=kr>>>0<y>>>0;
t=Sr?kr:y;
r=Sr?Tr:_;
Ir=Tr+16|0;
Or=0|n[Ir>>2];
Wy=(0|Or)==(0|0);
Oe=1&Wy;
Pr=(Tr+16|0)+(Oe<<2)|0;
Br=0|n[Pr>>2];
Cr=(0|Br)==(0|0);
if(Cr){
p=r;
m=t;
break;
}else{
_=r;
y=t;
Tr=Br;
}
}
}
Lr=p+tc|0;
xr=p>>>0<Lr>>>0;
if(xr){
Ur=p+24|0;
Fr=0|n[Ur>>2];
Dr=p+12|0;
Hr=0|n[Dr>>2];
jr=(0|Hr)==(0|p);
do{
if(jr){
Xr=p+20|0;
Gr=0|n[Xr>>2];
Jr=(0|Gr)==(0|0);
if(Jr){
$r=p+16|0;
Zr=0|n[$r>>2];
Qr=(0|Zr)==(0|0);
if(Qr){
ie=0;
break;
}else{
W=Zr;
z=$r;
}
}else{
W=Gr;
z=Xr;
}
while(1){
et=W+20|0;
rt=0|n[et>>2];
tt=(0|rt)==(0|0);
if(!tt){
W=rt;
z=et;
continue;
}
it=W+16|0;
nt=0|n[it>>2];
at=(0|nt)==(0|0);
if(at)break;else
{
W=nt;
z=it;
}
}
n[z>>2]=0;
ie=W;
}else{
Wr=p+8|0;
zr=0|n[Wr>>2];
Vr=zr+12|0;
n[Vr>>2]=Hr;
Kr=Hr+8|0;
n[Kr>>2]=zr;
ie=Hr;
}
}while(0);
ot=(0|Fr)==(0|0);
do{
if(!ot){
ut=p+28|0;
st=0|n[ut>>2];
lt=4388+(st<<2)|0;
ct=0|n[lt>>2];
ht=(0|p)==(0|ct);
if(ht){
n[lt>>2]=ie;
Dy=(0|ie)==(0|0);
if(Dy){
dt=1<<st;
vt=-1^dt;
pt=Uy&vt;
n[4088>>2]=pt;
break;
}
}else{
_t=Fr+16|0;
mt=0|n[_t>>2];
Xy=(0|mt)!=(0|p);
Ce=1&Xy;
yt=(Fr+16|0)+(Ce<<2)|0;
n[yt>>2]=ie;
bt=(0|ie)==(0|0);
if(bt)break;
}
wt=ie+24|0;
n[wt>>2]=Fr;
At=p+16|0;
Tt=0|n[At>>2];
Et=(0|Tt)==(0|0);
if(!Et){
Mt=ie+16|0;
n[Mt>>2]=Tt;
kt=Tt+24|0;
n[kt>>2]=ie;
}
St=p+20|0;
Rt=0|n[St>>2];
It=(0|Rt)==(0|0);
if(!It){
Pt=ie+20|0;
n[Pt>>2]=Rt;
Bt=Rt+24|0;
n[Bt>>2]=ie;
}
}
}while(0);
Ct=m>>>0<16;
if(Ct){
Lt=m+tc|0;
Nt=3|Lt;
xt=p+4|0;
n[xt>>2]=Nt;
Ut=p+Lt|0;
Ft=Ut+4|0;
Dt=0|n[Ft>>2];
Yt=1|Dt;
n[Ft>>2]=Yt;
}else{
Wt=3|tc;
zt=p+4|0;
n[zt>>2]=Wt;
Vt=1|m;
Kt=Lr+4|0;
n[Kt>>2]=Vt;
Xt=Lr+m|0;
n[Xt>>2]=m;
Gt=0==(0|Ma);
if(!Gt){
Jt=0|n[4104>>2];
$t=Ma>>>3;
qt=$t<<1;
Zt=4124+(qt<<2)|0;
ei=1<<$t;
ri=fp&ei;
ti=0==(0|ri);
if(ti){
ii=fp|ei;
n[1021]=ii;
be=Zt+8|0;
f=Zt;
Re=be;
}else{
ni=Zt+8|0;
ai=0|n[ni>>2];
f=ai;
Re=ni;
}
n[Re>>2]=Jt;
oi=f+12|0;
n[oi>>2]=Jt;
ui=Jt+8|0;
n[ui>>2]=f;
fi=Jt+12|0;
n[fi>>2]=Zt;
}
n[4092>>2]=m;
n[4104>>2]=Lr;
}
si=p+8|0;
u=si;
d=cg;
return 0|u;
}else g=tc;
}
}else g=tc;
}else{
ci=e>>>0>4294967231;
if(ci)g=-1;else
{
hi=e+11|0;
di=-8&hi;
vi=0|n[4088>>2];
pi=0==(0|vi);
if(pi)g=di;else
{
_i=0-di|0;
mi=hi>>>8;
yi=0==(0|mi);
if(yi)x=0;else
{
gi=di>>>0>16777215;
if(gi)x=31;else
{
bi=mi+1048320|0;
Ai=bi>>>16;
Ti=8&Ai;
Ei=mi<<Ti;
Mi=Ei+520192|0;
ki=Mi>>>16;
Si=4&ki;
Ri=Si|Ti;
Ii=Ei<<Si;
Oi=Ii+245760|0;
Pi=Oi>>>16;
Ci=2&Pi;
Li=Ri|Ci;
Ni=14-Li|0;
xi=Ii<<Ci;
Ui=xi>>>15;
Fi=Ni+Ui|0;
Di=Fi<<1;
Yi=Fi+7|0;
Hi=di>>>Yi;
ji=1&Hi;
zi=ji|Di;
x=zi;
}
}
Vi=4388+(x<<2)|0;
Ki=0|n[Vi>>2];
Xi=(0|Ki)==(0|0);
e:do{
if(Xi){
te=0;
ae=0;
oe=_i;
lg=57;
}else{
Gi=31==(0|x);
Ji=x>>>1;
$i=25-Ji|0;
qi=Gi?0:$i;
Zi=di<<qi;
P=0;
L=_i;
N=Ki;
F=Zi;
Y=0;
while(1){
Qi=N+4|0;
rn=0|n[Qi>>2];
tn=-8&rn;
nn=tn-di|0;
an=nn>>>0<L>>>0;
if(an){
on=0==(0|nn);
if(on){
le=N;
de=0;
_e=N;
lg=61;
break e;
}else{
G=N;
J=nn;
}
}else{
G=P;
J=L;
}
un=N+20|0;
fn=0|n[un>>2];
sn=F>>>31;
ln=(N+16|0)+(sn<<2)|0;
cn=0|n[ln>>2];
dn=(0|fn)==(0|0);
vn=(0|fn)==(0|cn);
ag=dn|vn;
$=ag?Y:fn;
pn=(0|cn)==(0|0);
$y=1^pn;
_n=1&$y;
U=F<<_n;
if(pn){
te=$;
ae=G;
oe=J;
lg=57;
break;
}else{
P=G;
L=J;
N=cn;
F=U;
Y=$;
}
}
}
}while(0);
if(57==(0|lg)){
mn=(0|te)==(0|0);
yn=(0|ae)==(0|0);
Zy=mn&yn;
if(Zy){
gn=2<<x;
bn=0-gn|0;
wn=gn|bn;
An=vi&wn;
En=0==(0|An);
if(En){
g=di;
break;
}
Mn=0-An|0;
kn=An&Mn;
Sn=kn+-1|0;
Rn=Sn>>>12;
In=16&Rn;
On=Sn>>>In;
Pn=On>>>5;
Bn=8&Pn;
Cn=Bn|In;
Nn=On>>>Bn;
xn=Nn>>>2;
Un=4&xn;
Fn=Cn|Un;
Dn=Nn>>>Un;
Yn=Dn>>>1;
Hn=2&Yn;
jn=Fn|Hn;
Wn=Dn>>>Hn;
zn=Wn>>>1;
Xn=1&zn;
Gn=jn|Xn;
Jn=Wn>>>Xn;
$n=Gn+Jn|0;
qn=4388+($n<<2)|0;
Zn=0|n[qn>>2];
se=0;
pe=Zn;
}else{
se=ae;
pe=te;
}
Qn=(0|pe)==(0|0);
if(Qn){
fe=se;
he=oe;
}else{
le=se;
de=oe;
_e=pe;
lg=61;
}
}
if(61==(0|lg))
while(1){
lg=0;
ea=_e+4|0;
ra=0|n[ea>>2];
ta=-8&ra;
na=ta-di|0;
aa=na>>>0<de>>>0;
a=aa?na:de;
ve=aa?_e:le;
oa=_e+16|0;
ua=0|n[oa>>2];
Gy=(0|ua)==(0|0);
Le=1&Gy;
fa=(_e+16|0)+(Le<<2)|0;
sa=0|n[fa>>2];
la=(0|sa)==(0|0);
if(la){
fe=ve;
he=a;
break;
}else{
le=ve;
de=a;
_e=sa;
lg=61;
}
}
ca=(0|fe)==(0|0);
if(ca)g=di;else
{
ha=0|n[4092>>2];
da=ha-di|0;
pa=he>>>0<da>>>0;
if(pa){
_a=fe+di|0;
ma=fe>>>0<_a>>>0;
if(!ma){
u=0;
d=cg;
return 0|u;
}
ya=fe+24|0;
ga=0|n[ya>>2];
ba=fe+12|0;
wa=0|n[ba>>2];
Aa=(0|wa)==(0|fe);
do{
if(Aa){
Ra=fe+20|0;
Ia=0|n[Ra>>2];
Oa=(0|Ia)==(0|0);
if(Oa){
Pa=fe+16|0;
Ba=0|n[Pa>>2];
Ca=(0|Ba)==(0|0);
if(Ca){
ue=0;
break;
}else{
q=Ba;
Z=Pa;
}
}else{
q=Ia;
Z=Ra;
}
while(1){
La=q+20|0;
Na=0|n[La>>2];
Ua=(0|Na)==(0|0);
if(!Ua){
q=Na;
Z=La;
continue;
}
Fa=q+16|0;
Da=0|n[Fa>>2];
Ya=(0|Da)==(0|0);
if(Ya)break;else
{
q=Da;
Z=Fa;
}
}
n[Z>>2]=0;
ue=q;
}else{
Ta=fe+8|0;
Ea=0|n[Ta>>2];
ka=Ea+12|0;
n[ka>>2]=wa;
Sa=wa+8|0;
n[Sa>>2]=Ea;
ue=wa;
}
}while(0);
Ha=(0|ga)==(0|0);
do{
if(Ha)Mu=vi;else
{
ja=fe+28|0;
Wa=0|n[ja>>2];
za=4388+(Wa<<2)|0;
Va=0|n[za>>2];
Ka=(0|fe)==(0|Va);
if(Ka){
n[za>>2]=ue;
Hy=(0|ue)==(0|0);
if(Hy){
Ga=1<<Wa;
Ja=-1^Ga;
$a=vi&Ja;
n[4088>>2]=$a;
Mu=$a;
break;
}
}else{
qa=ga+16|0;
Za=0|n[qa>>2];
Ky=(0|Za)!=(0|fe);
Ne=1&Ky;
Qa=(ga+16|0)+(Ne<<2)|0;
n[Qa>>2]=ue;
eo=(0|ue)==(0|0);
if(eo){
Mu=vi;
break;
}
}
ro=ue+24|0;
n[ro>>2]=ga;
to=fe+16|0;
io=0|n[to>>2];
ao=(0|io)==(0|0);
if(!ao){
oo=ue+16|0;
n[oo>>2]=io;
uo=io+24|0;
n[uo>>2]=ue;
}
fo=fe+20|0;
so=0|n[fo>>2];
lo=(0|so)==(0|0);
if(lo)Mu=vi;else
{
co=ue+20|0;
n[co>>2]=so;
ho=so+24|0;
n[ho>>2]=ue;
Mu=vi;
}
}
}while(0);
vo=he>>>0<16;
do{
if(vo){
po=he+di|0;
mo=3|po;
yo=fe+4|0;
n[yo>>2]=mo;
go=fe+po|0;
bo=go+4|0;
wo=0|n[bo>>2];
Ao=1|wo;
n[bo>>2]=Ao;
}else{
To=3|di;
Eo=fe+4|0;
n[Eo>>2]=To;
Mo=1|he;
ko=_a+4|0;
n[ko>>2]=Mo;
Ro=_a+he|0;
n[Ro>>2]=he;
Io=he>>>3;
Oo=he>>>0<256;
if(Oo){
Po=Io<<1;
Bo=4124+(Po<<2)|0;
Co=0|n[1021];
Lo=1<<Io;
No=Co&Lo;
xo=0==(0|No);
if(xo){
Uo=Co|Lo;
n[1021]=Uo;
Ee=Bo+8|0;
H=Bo;
Se=Ee;
}else{
Do=Bo+8|0;
Yo=0|n[Do>>2];
H=Yo;
Se=Do;
}
n[Se>>2]=_a;
Ho=H+12|0;
n[Ho>>2]=_a;
jo=_a+8|0;
n[jo>>2]=H;
Wo=_a+12|0;
n[Wo>>2]=Bo;
break;
}
zo=he>>>8;
Vo=0==(0|zo);
if(Vo)D=0;else
{
Ko=he>>>0>16777215;
if(Ko)D=31;else
{
Xo=zo+1048320|0;
Go=Xo>>>16;
qo=8&Go;
Zo=zo<<qo;
Qo=Zo+520192|0;
eu=Qo>>>16;
ru=4&eu;
tu=ru|qo;
iu=Zo<<ru;
nu=iu+245760|0;
au=nu>>>16;
ou=2&au;
fu=tu|ou;
su=14-fu|0;
lu=iu<<ou;
cu=lu>>>15;
hu=su+cu|0;
du=hu<<1;
vu=hu+7|0;
pu=he>>>vu;
_u=1&pu;
mu=_u|du;
D=mu;
}
}
gu=4388+(D<<2)|0;
bu=_a+28|0;
n[bu>>2]=D;
wu=_a+16|0;
Au=wu+4|0;
n[Au>>2]=0;
n[wu>>2]=0;
Tu=1<<D;
Eu=Mu&Tu;
ku=0==(0|Eu);
if(ku){
Su=Mu|Tu;
n[4088>>2]=Su;
n[gu>>2]=_a;
Ru=_a+24|0;
n[Ru>>2]=gu;
Ou=_a+12|0;
n[Ou>>2]=_a;
Pu=_a+8|0;
n[Pu>>2]=_a;
break;
}
Bu=0|n[gu>>2];
Cu=31==(0|D);
Lu=D>>>1;
Nu=25-Lu|0;
xu=Cu?0:Nu;
Uu=he<<xu;
B=Uu;
C=Bu;
while(1){
Fu=C+4|0;
Du=0|n[Fu>>2];
Hu=-8&Du;
ju=(0|Hu)==(0|he);
if(ju){
lg=97;
break;
}
Wu=B>>>31;
zu=(C+16|0)+(Wu<<2)|0;
Vu=B<<1;
Ku=0|n[zu>>2];
Xu=(0|Ku)==(0|0);
if(Xu){
lg=96;
break;
}else{
B=Vu;
C=Ku;
}
}
if(96==(0|lg)){
n[zu>>2]=_a;
Gu=_a+24|0;
n[Gu>>2]=C;
Ju=_a+12|0;
n[Ju>>2]=_a;
$u=_a+8|0;
n[$u>>2]=_a;
break;
}else if(97==(0|lg)){
Zu=C+8|0;
Qu=0|n[Zu>>2];
ef=Qu+12|0;
n[ef>>2]=_a;
n[Zu>>2]=_a;
rf=_a+8|0;
n[rf>>2]=Qu;
tf=_a+12|0;
n[tf>>2]=C;
nf=_a+24|0;
n[nf>>2]=0;
break;
}
}
}while(0);
af=fe+8|0;
u=af;
d=cg;
return 0|u;
}else g=di;
}
}
}
}
}while(0);of=0|n[4092>>2];
uf=of>>>0<g>>>0;
if(!uf){
ff=of-g|0;
lf=0|n[4104>>2];
cf=ff>>>0>15;
if(cf){
hf=lf+g|0;
n[4104>>2]=hf;
n[4092>>2]=ff;
df=1|ff;
vf=hf+4|0;
n[vf>>2]=df;
pf=hf+ff|0;
n[pf>>2]=ff;
_f=3|g;
mf=lf+4|0;
n[mf>>2]=_f;
}else{
n[4092>>2]=0;
n[4104>>2]=0;
yf=3|of;
gf=lf+4|0;
n[gf>>2]=yf;
wf=lf+of|0;
Af=wf+4|0;
Tf=0|n[Af>>2];
Ef=1|Tf;
n[Af>>2]=Ef;
}
Mf=lf+8|0;
u=Mf;
d=cg;
return 0|u;
}
kf=0|n[4096>>2];
Sf=kf>>>0>g>>>0;
if(Sf){
Rf=kf-g|0;
n[4096>>2]=Rf;
If=0|n[4108>>2];
Of=If+g|0;
n[4108>>2]=Of;
Bf=1|Rf;
Cf=Of+4|0;
n[Cf>>2]=Bf;
Lf=3|g;
Nf=If+4|0;
n[Nf>>2]=Lf;
xf=If+8|0;
u=xf;
d=cg;
return 0|u;
}
Uf=0|n[1139];
Ff=0==(0|Uf);
if(Ff){
n[4564>>2]=4096;
n[4560>>2]=4096;
n[4568>>2]=-1;
n[4572>>2]=-1;
n[4576>>2]=0;
n[4528>>2]=0;
Df=xe;
Yf=-16&Df;
Hf=1431655768^Yf;
n[xe>>2]=Hf;
n[1139]=Hf;
Kf=4096;
}else{
Te=0|n[4564>>2];
Kf=Te;
}
Wf=g+48|0;
zf=g+47|0;
Vf=Kf+zf|0;
Xf=0-Kf|0;
Gf=Vf&Xf;
Jf=Gf>>>0>g>>>0;
if(!Jf){
u=0;
d=cg;
return 0|u;
}
$f=0|n[4524>>2];
qf=0==(0|$f);
if(!qf){
Zf=0|n[4516>>2];
rs=Zf+Gf|0;
ts=rs>>>0<=Zf>>>0;
is=rs>>>0>$f>>>0;
Qy=ts|is;
if(Qy){
u=0;
d=cg;
return 0|u;
}
}
ns=0|n[4528>>2];
as=4&ns;
os=0==(0|as);
e:do{
if(os){
us=0|n[4108>>2];
fs=(0|us)==(0|0);
r:do{
if(fs)lg=118;else
{
c=4532;
while(1){
ss=0|n[c>>2];
ls=ss>>>0>us>>>0;
if(!ls){
hs=c+4|0;
ds=0|n[hs>>2];
vs=ss+ds|0;
ps=vs>>>0>us>>>0;
if(ps)break;
}
_s=c+8|0;
ms=0|n[_s>>2];
ys=(0|ms)==(0|0);
if(ys){
lg=118;
break r;
}else c=ms;
}
Ws=Vf-kf|0;
Vs=Ws&Xf;
Ks=Vs>>>0<2147483647;
if(Ks){
Xs=0|Nr(0|Vs);
Gs=0|n[c>>2];
Js=0|n[hs>>2];
$s=Gs+Js|0;
qs=(0|Xs)==(0|$s);
if(qs){
Zs=(0|Xs)==(-1|0);
if(Zs)Q=Vs;else
{
me=Vs;
ye=Xs;
lg=135;
break e;
}
}else{
ee=Xs;
re=Vs;
lg=126;
}
}else Q=0;
}
}while(0);
do{
if(118==(0|lg)){
gs=0|Nr(0);
bs=(0|gs)==(-1|0);
if(bs)Q=0;else
{
ws=gs;
Ts=0|n[4560>>2];
Es=Ts+-1|0;
Ms=Es&ws;
ks=0==(0|Ms);
Ss=Es+ws|0;
Rs=0-Ts|0;
Is=Ss&Rs;
Os=Is-ws|0;
Ps=ks?0:Os;
o=Ps+Gf|0;
Bs=0|n[4516>>2];
Ls=o+Bs|0;
Ns=o>>>0>g>>>0;
xs=o>>>0<2147483647;
qy=Ns&xs;
if(qy){
Us=0|n[4524>>2];
Fs=0==(0|Us);
if(!Fs){
Ds=Ls>>>0<=Bs>>>0;
Ys=Ls>>>0>Us>>>0;
ng=Ds|Ys;
if(ng){
Q=0;
break;
}
}
Hs=0|Nr(0|o);
js=(0|Hs)==(0|gs);
if(js){
me=o;
ye=gs;
lg=135;
break e;
}else{
ee=Hs;
re=o;
lg=126;
}
}else Q=0;
}
}
}while(0);
do{
if(126==(0|lg)){
Qs=0-re|0;
el=(0|ee)!=(-1|0);
tl=re>>>0<2147483647;
sg=tl&el;
il=Wf>>>0>re>>>0;
eg=il&sg;
if(!eg){
vl=(0|ee)==(-1|0);
if(vl){
Q=0;
break;
}else{
me=re;
ye=ee;
lg=135;
break e;
}
}
nl=0|n[4564>>2];
al=zf-re|0;
ol=al+nl|0;
ul=0-nl|0;
fl=ol&ul;
sl=fl>>>0<2147483647;
if(!sl){
me=re;
ye=ee;
lg=135;
break e;
}
ll=0|Nr(0|fl);
cl=(0|ll)==(-1|0);
if(cl){
0|Nr(0|Qs);
Q=0;
break;
}else{
dl=fl+re|0;
me=dl;
ye=ee;
lg=135;
break e;
}
}
}while(0);
pl=0|n[4528>>2];
_l=4|pl;
n[4528>>2]=_l;
ce=Q;
lg=133;
}else{
ce=0;
lg=133;
}
}while(0);
if(133==(0|lg)){
ml=Gf>>>0<2147483647;
if(ml){
yl=0|Nr(0|Gf);
gl=0|Nr(0);
bl=(0|yl)!=(-1|0);
wl=(0|gl)!=(-1|0);
ug=bl&wl;
Al=yl>>>0<gl>>>0;
rg=Al&ug;
El=gl;
Ml=yl;
kl=El-Ml|0;
Sl=g+40|0;
Rl=kl>>>0>Sl>>>0;
i=Rl?kl:ce;
tg=1^rg;
Il=(0|yl)==(-1|0);
Vy=1^Rl;
Ol=Il|Vy;
og=Ol|tg;
if(!og){
me=i;
ye=yl;
lg=135;
}
}
}
if(135==(0|lg)){
Pl=0|n[4516>>2];
Bl=Pl+me|0;
n[4516>>2]=Bl;
Cl=0|n[4520>>2];
Nl=Bl>>>0>Cl>>>0;
if(Nl)n[4520>>2]=Bl;
xl=0|n[4108>>2];
Ul=(0|xl)==(0|0);
do{
if(Ul){
Fl=0|n[4100>>2];
Dl=(0|Fl)==(0|0);
Yl=ye>>>0<Fl>>>0;
ig=Dl|Yl;
if(ig)n[4100>>2]=ye;
n[4532>>2]=ye;
n[4536>>2]=me;
n[4544>>2]=0;
Hl=0|n[1139];
n[4120>>2]=Hl;
n[4116>>2]=-1;
h=0;
while(1){
jl=h<<1;
Wl=4124+(jl<<2)|0;
zl=Wl+12|0;
n[zl>>2]=Wl;
Kl=Wl+8|0;
n[Kl>>2]=Wl;
Xl=h+1|0;
jy=32==(0|Xl);
if(jy)break;else
h=Xl;
}
Gl=me+-40|0;
Jl=ye+8|0;
$l=Jl;
ql=7&$l;
Zl=0==(0|ql);
Ql=0-$l|0;
ec=7&Ql;
rc=Zl?0:ec;
nc=ye+rc|0;
ac=Gl-rc|0;
n[4108>>2]=nc;
n[4096>>2]=ac;
oc=1|ac;
uc=nc+4|0;
n[uc>>2]=oc;
fc=nc+ac|0;
sc=fc+4|0;
n[sc>>2]=40;
lc=0|n[4572>>2];
n[4112>>2]=lc;
}else{
M=4532;
while(1){
cc=0|n[M>>2];
hc=M+4|0;
dc=0|n[hc>>2];
pc=cc+dc|0;
_c=(0|ye)==(0|pc);
if(_c){
lg=145;
break;
}
mc=M+8|0;
yc=0|n[mc>>2];
gc=(0|yc)==(0|0);
if(gc)break;else
M=yc;
}
if(145==(0|lg)){
bc=M+12|0;
wc=0|n[bc>>2];
Ac=8&wc;
Tc=0==(0|Ac);
if(Tc){
Ec=xl>>>0>=cc>>>0;
kc=xl>>>0<ye>>>0;
fg=kc&Ec;
if(fg){
Sc=dc+me|0;
n[hc>>2]=Sc;
Rc=0|n[4096>>2];
Ic=xl+8|0;
Oc=Ic;
Pc=7&Oc;
Bc=0==(0|Pc);
Cc=0-Oc|0;
Lc=7&Cc;
Nc=Bc?0:Lc;
Uc=xl+Nc|0;
Fc=me-Nc|0;
Dc=Rc+Fc|0;
n[4108>>2]=Uc;
n[4096>>2]=Dc;
Yc=1|Dc;
Hc=Uc+4|0;
n[Hc>>2]=Yc;
jc=Uc+Dc|0;
Wc=jc+4|0;
n[Wc>>2]=40;
zc=0|n[4572>>2];
n[4112>>2]=zc;
break;
}
}
}
Vc=0|n[4100>>2];
Kc=ye>>>0<Vc>>>0;
if(Kc)n[4100>>2]=ye;
Gc=ye+me|0;
V=4532;
while(1){
Jc=0|n[V>>2];
$c=(0|Jc)==(0|Gc);
if($c){
lg=153;
break;
}
qc=V+8|0;
Zc=0|n[qc>>2];
Qc=(0|Zc)==(0|0);
if(Qc)break;else
V=Zc;
}
if(153==(0|lg)){
eh=V+12|0;
rh=0|n[eh>>2];
th=8&rh;
ih=0==(0|th);
if(ih){
n[V>>2]=ye;
ah=V+4|0;
oh=0|n[ah>>2];
uh=oh+me|0;
n[ah>>2]=uh;
fh=ye+8|0;
sh=fh;
lh=7&sh;
ch=0==(0|lh);
hh=0-sh|0;
dh=7&hh;
vh=ch?0:dh;
_h=ye+vh|0;
mh=Gc+8|0;
yh=mh;
gh=7&yh;
bh=0==(0|gh);
wh=0-yh|0;
Ah=7&wh;
Th=bh?0:Ah;
Eh=Gc+Th|0;
Mh=Eh;
Sh=_h;
Rh=Mh-Sh|0;
Ih=_h+g|0;
Oh=Rh-g|0;
Ph=3|g;
Bh=_h+4|0;
n[Bh>>2]=Ph;
Ch=(0|Eh)==(0|xl);
do{
if(Ch){
Lh=0|n[4096>>2];
Nh=Lh+Oh|0;
n[4096>>2]=Nh;
n[4108>>2]=Ih;
xh=1|Nh;
Fh=Ih+4|0;
n[Fh>>2]=xh;
}else{
Dh=0|n[4104>>2];
Yh=(0|Eh)==(0|Dh);
if(Yh){
Hh=0|n[4092>>2];
jh=Hh+Oh|0;
n[4092>>2]=jh;
n[4104>>2]=Ih;
Wh=1|jh;
zh=Ih+4|0;
n[zh>>2]=Wh;
Vh=Ih+jh|0;
n[Vh>>2]=jh;
break;
}
Kh=Eh+4|0;
Xh=0|n[Kh>>2];
Jh=3&Xh;
$h=1==(0|Jh);
if($h){
qh=-8&Xh;
Zh=Xh>>>3;
Qh=Xh>>>0<256;
e:do{
if(Qh){
ed=Eh+8|0;
rd=0|n[ed>>2];
td=Eh+12|0;
id=0|n[td>>2];
nd=(0|id)==(0|rd);
if(nd){
ud=1<<Zh;
fd=-1^ud;
sd=0|n[1021];
ld=sd&fd;
n[1021]=ld;
break;
}else{
cd=rd+12|0;
n[cd>>2]=id;
hd=id+8|0;
n[hd>>2]=rd;
break;
}
}else{
dd=Eh+24|0;
vd=0|n[dd>>2];
pd=Eh+12|0;
_d=0|n[pd>>2];
yd=(0|_d)==(0|Eh);
do{
if(yd){
Td=Eh+16|0;
Ed=Td+4|0;
Md=0|n[Ed>>2];
kd=(0|Md)==(0|0);
if(kd){
Sd=0|n[Td>>2];
Id=(0|Sd)==(0|0);
if(Id){
ne=0;
break;
}else{
K=Sd;
X=Td;
}
}else{
K=Md;
X=Ed;
}
while(1){
Od=K+20|0;
Pd=0|n[Od>>2];
Bd=(0|Pd)==(0|0);
if(!Bd){
K=Pd;
X=Od;
continue;
}
Cd=K+16|0;
Ld=0|n[Cd>>2];
Nd=(0|Ld)==(0|0);
if(Nd)break;else
{
K=Ld;
X=Cd;
}
}
n[X>>2]=0;
ne=K;
}else{
gd=Eh+8|0;
bd=0|n[gd>>2];
wd=bd+12|0;
n[wd>>2]=_d;
Ad=_d+8|0;
n[Ad>>2]=bd;
ne=_d;
}
}while(0);
xd=(0|vd)==(0|0);
if(xd)break;
Ud=Eh+28|0;
Fd=0|n[Ud>>2];
Yd=4388+(Fd<<2)|0;
Hd=0|n[Yd>>2];
jd=(0|Eh)==(0|Hd);
do{
if(jd){
n[Yd>>2]=ne;
Yy=(0|ne)==(0|0);
if(!Yy)break;
Wd=1<<Fd;
zd=-1^Wd;
Vd=0|n[4088>>2];
Kd=Vd&zd;
n[4088>>2]=Kd;
break e;
}else{
Xd=vd+16|0;
Gd=0|n[Xd>>2];
zy=(0|Gd)!=(0|Eh);
Pe=1&zy;
Jd=(vd+16|0)+(Pe<<2)|0;
n[Jd>>2]=ne;
qd=(0|ne)==(0|0);
if(qd)break e;
}
}while(0);
Zd=ne+24|0;
n[Zd>>2]=vd;
Qd=Eh+16|0;
ev=0|n[Qd>>2];
rv=(0|ev)==(0|0);
if(!rv){
tv=ne+16|0;
n[tv>>2]=ev;
iv=ev+24|0;
n[iv>>2]=ne;
}
nv=Qd+4|0;
av=0|n[nv>>2];
ov=(0|av)==(0|0);
if(ov)break;
fv=ne+20|0;
n[fv>>2]=av;
sv=av+24|0;
n[sv>>2]=ne;
}
}while(0);
lv=Eh+qh|0;
cv=qh+Oh|0;
s=lv;
k=cv;
}else{
s=Eh;
k=Oh;
}
hv=s+4|0;
dv=0|n[hv>>2];
vv=-2&dv;
n[hv>>2]=vv;
pv=1|k;
_v=Ih+4|0;
n[_v>>2]=pv;
mv=Ih+k|0;
n[mv>>2]=k;
gv=k>>>3;
bv=k>>>0<256;
if(bv){
wv=gv<<1;
Av=4124+(wv<<2)|0;
Tv=0|n[1021];
Ev=1<<gv;
Mv=Tv&Ev;
kv=0==(0|Mv);
if(kv){
Sv=Tv|Ev;
n[1021]=Sv;
Ae=Av+8|0;
I=Av;
ke=Ae;
}else{
Rv=Av+8|0;
Ov=0|n[Rv>>2];
I=Ov;
ke=Rv;
}
n[ke>>2]=Ih;
Pv=I+12|0;
n[Pv>>2]=Ih;
Bv=Ih+8|0;
n[Bv>>2]=I;
Cv=Ih+12|0;
n[Cv>>2]=Av;
break;
}
Lv=k>>>8;
Nv=0==(0|Lv);
do{
if(Nv)O=0;else
{
xv=k>>>0>16777215;
if(xv){
O=31;
break;
}
Uv=Lv+1048320|0;
Fv=Uv>>>16;
Dv=8&Fv;
Hv=Lv<<Dv;
jv=Hv+520192|0;
Wv=jv>>>16;
zv=4&Wv;
Vv=zv|Dv;
Kv=Hv<<zv;
Xv=Kv+245760|0;
Gv=Xv>>>16;
Jv=2&Gv;
$v=Vv|Jv;
Zv=14-$v|0;
Qv=Kv<<Jv;
ep=Qv>>>15;
rp=Zv+ep|0;
tp=rp<<1;
ip=rp+7|0;
np=k>>>ip;
ap=1&np;
op=ap|tp;
O=op;
}
}while(0);
up=4388+(O<<2)|0;
lp=Ih+28|0;
n[lp>>2]=O;
cp=Ih+16|0;
hp=cp+4|0;
n[hp>>2]=0;
n[cp>>2]=0;
dp=0|n[4088>>2];
vp=1<<O;
pp=dp&vp;
_p=0==(0|pp);
if(_p){
mp=dp|vp;
n[4088>>2]=mp;
n[up>>2]=Ih;
yp=Ih+24|0;
n[yp>>2]=up;
gp=Ih+12|0;
n[gp>>2]=Ih;
wp=Ih+8|0;
n[wp>>2]=Ih;
break;
}
Ap=0|n[up>>2];
Tp=31==(0|O);
Ep=O>>>1;
Mp=25-Ep|0;
kp=Tp?0:Mp;
Sp=k<<kp;
S=Sp;
R=Ap;
while(1){
Rp=R+4|0;
Ip=0|n[Rp>>2];
Op=-8&Ip;
Bp=(0|Op)==(0|k);
if(Bp){
lg=194;
break;
}
Cp=S>>>31;
Lp=(R+16|0)+(Cp<<2)|0;
Np=S<<1;
xp=0|n[Lp>>2];
Up=(0|xp)==(0|0);
if(Up){
lg=193;
break;
}else{
S=Np;
R=xp;
}
}
if(193==(0|lg)){
n[Lp>>2]=Ih;
Fp=Ih+24|0;
n[Fp>>2]=R;
Dp=Ih+12|0;
n[Dp>>2]=Ih;
Yp=Ih+8|0;
n[Yp>>2]=Ih;
break;
}else if(194==(0|lg)){
Hp=R+8|0;
Wp=0|n[Hp>>2];
zp=Wp+12|0;
n[zp>>2]=Ih;
n[Hp>>2]=Ih;
Vp=Ih+8|0;
n[Vp>>2]=Wp;
Kp=Ih+12|0;
n[Kp>>2]=R;
Xp=Ih+24|0;
n[Xp>>2]=0;
break;
}
}
}while(0);
Ty=_h+8|0;
u=Ty;
d=cg;
return 0|u;
}
}
l=4532;
while(1){
Gp=0|n[l>>2];
Jp=Gp>>>0>xl>>>0;
if(!Jp){
$p=l+4|0;
qp=0|n[$p>>2];
Zp=Gp+qp|0;
e_=Zp>>>0>xl>>>0;
if(e_)break;
}
r_=l+8|0;
t_=0|n[r_>>2];
l=t_;
}
i_=Zp+-47|0;
n_=i_+8|0;
a_=n_;
o_=7&a_;
u_=0==(0|o_);
f_=0-a_|0;
s_=7&f_;
c_=u_?0:s_;
h_=i_+c_|0;
d_=xl+16|0;
v_=h_>>>0<d_>>>0;
p_=v_?xl:h_;
__=p_+8|0;
m_=p_+24|0;
y_=me+-40|0;
g_=ye+8|0;
b_=g_;
A_=7&b_;
T_=0==(0|A_);
E_=0-b_|0;
M_=7&E_;
k_=T_?0:M_;
S_=ye+k_|0;
R_=y_-k_|0;
n[4108>>2]=S_;
n[4096>>2]=R_;
I_=1|R_;
O_=S_+4|0;
n[O_>>2]=I_;
P_=S_+R_|0;
C_=P_+4|0;
n[C_>>2]=40;
L_=0|n[4572>>2];
n[4112>>2]=L_;
N_=p_+4|0;
n[N_>>2]=27;
n[__>>2]=0|n[4532>>2];
n[__+4>>2]=0|n[4532+4>>2];
n[__+8>>2]=0|n[4532+8>>2];
n[__+12>>2]=0|n[4532+12>>2];
n[4532>>2]=ye;
n[4536>>2]=me;
n[4544>>2]=0;
n[4540>>2]=__;
U_=m_;
while(1){
x_=U_+4|0;
n[x_>>2]=7;
F_=U_+8|0;
D_=F_>>>0<Zp>>>0;
if(D_)U_=x_;else
break;
}
Y_=(0|p_)==(0|xl);
if(!Y_){
H_=p_;
j_=xl;
z_=H_-j_|0;
V_=0|n[N_>>2];
K_=-2&V_;
n[N_>>2]=K_;
X_=1|z_;
G_=xl+4|0;
n[G_>>2]=X_;
n[p_>>2]=z_;
J_=z_>>>3;
$_=z_>>>0<256;
if($_){
q_=J_<<1;
Z_=4124+(q_<<2)|0;
Q_=0|n[1021];
rm=1<<J_;
tm=Q_&rm;
im=0==(0|tm);
if(im){
nm=Q_|rm;
n[1021]=nm;
we=Z_+8|0;
T=Z_;
Me=we;
}else{
am=Z_+8|0;
om=0|n[am>>2];
T=om;
Me=am;
}
n[Me>>2]=xl;
um=T+12|0;
n[um>>2]=xl;
fm=xl+8|0;
n[fm>>2]=T;
sm=xl+12|0;
n[sm>>2]=Z_;
break;
}
lm=z_>>>8;
dm=0==(0|lm);
if(dm)E=0;else
{
vm=z_>>>0>16777215;
if(vm)E=31;else
{
pm=lm+1048320|0;
_m=pm>>>16;
mm=8&_m;
ym=lm<<mm;
gm=ym+520192|0;
bm=gm>>>16;
wm=4&bm;
Am=wm|mm;
Em=ym<<wm;
Mm=Em+245760|0;
km=Mm>>>16;
Sm=2&km;
Rm=Am|Sm;
Im=14-Rm|0;
Om=Em<<Sm;
Pm=Om>>>15;
Bm=Im+Pm|0;
Cm=Bm<<1;
Nm=Bm+7|0;
xm=z_>>>Nm;
Um=1&xm;
Fm=Um|Cm;
E=Fm;
}
}
Dm=4388+(E<<2)|0;
Ym=xl+28|0;
n[Ym>>2]=E;
Hm=xl+20|0;
n[Hm>>2]=0;
n[d_>>2]=0;
jm=0|n[4088>>2];
Wm=1<<E;
zm=jm&Wm;
Km=0==(0|zm);
if(Km){
Xm=jm|Wm;
n[4088>>2]=Xm;
n[Dm>>2]=xl;
Gm=xl+24|0;
n[Gm>>2]=Dm;
Jm=xl+12|0;
n[Jm>>2]=xl;
$m=xl+8|0;
n[$m>>2]=xl;
break;
}
qm=0|n[Dm>>2];
Zm=31==(0|E);
Qm=E>>>1;
ey=25-Qm|0;
ry=Zm?0:ey;
iy=z_<<ry;
w=iy;
A=qm;
while(1){
ny=A+4|0;
ay=0|n[ny>>2];
oy=-8&ay;
uy=(0|oy)==(0|z_);
if(uy){
lg=216;
break;
}
fy=w>>>31;
sy=(A+16|0)+(fy<<2)|0;
ly=w<<1;
cy=0|n[sy>>2];
hy=(0|cy)==(0|0);
if(hy){
lg=215;
break;
}else{
w=ly;
A=cy;
}
}
if(215==(0|lg)){
n[sy>>2]=xl;
vy=xl+24|0;
n[vy>>2]=A;
py=xl+12|0;
n[py>>2]=xl;
_y=xl+8|0;
n[_y>>2]=xl;
break;
}else if(216==(0|lg)){
my=A+8|0;
yy=0|n[my>>2];
gy=yy+12|0;
n[gy>>2]=xl;
n[my>>2]=xl;
by=xl+8|0;
n[by>>2]=yy;
wy=xl+12|0;
n[wy>>2]=A;
Ay=xl+24|0;
n[Ay>>2]=0;
break;
}
}
}
}while(0);
My=0|n[4096>>2];
ky=My>>>0>g>>>0;
if(ky){
Sy=My-g|0;
n[4096>>2]=Sy;
Ry=0|n[4108>>2];
Iy=Ry+g|0;
n[4108>>2]=Iy;
Oy=1|Sy;
Py=Iy+4|0;
n[Py>>2]=Oy;
By=3|g;
Cy=Ry+4|0;
n[Cy>>2]=By;
Ly=Ry+8|0;
u=Ly;
d=cg;
return 0|u;
}
}
xy=0|Fe();
n[xy>>2]=12;
u=0;
d=cg;
return 0|u;
}

function Be(e){
e|=0;
var r=0,
t=0,
i=0,
a=0,
o=0,
u=0,
f=0,
s=0,
l=0,
c=0,
h=0,
d=0,
v=0,
p=0,
_=0,
m=0,
y=0,
g=0;
var b=0,
w=0,
A=0,
T=0,
E=0,
M=0,
k=0,
S=0,
R=0,
I=0,
O=0,
P=0,
B=0,
C=0,
L=0,
N=0,
x=0,
U=0,
F=0,
D=0;
var Y=0,
H=0,
j=0,
W=0,
z=0,
V=0,
K=0,
X=0,
G=0,
J=0,
$=0,
q=0,
Z=0,
Q=0,
ee=0,
re=0,
te=0,
ie=0,
ne=0,
ae=0;
var oe=0,
ue=0,
fe=0,
se=0,
le=0,
ce=0,
he=0,
de=0,
ve=0,
pe=0,
_e=0,
me=0,
ye=0,
ge=0,
be=0,
we=0,
Ae=0,
Te=0,
Ee=0,
Me=0;
var ke=0,
Se=0,
Re=0,
Ie=0,
Oe=0,
Pe=0,
Be=0,
Ce=0,
Le=0,
Ne=0,
xe=0,
Ue=0,
Fe=0,
De=0,
Ye=0,
He=0,
je=0,
We=0,
ze=0,
Ve=0;
var Ke=0,
Xe=0,
Ge=0,
Je=0,
$e=0,
qe=0,
Ze=0,
Qe=0,
er=0,
rr=0,
tr=0,
ir=0,
nr=0,
ar=0,
or=0,
ur=0,
fr=0,
sr=0,
lr=0,
cr=0;
var hr=0,
dr=0,
vr=0,
pr=0,
_r=0,
mr=0,
yr=0,
gr=0,
br=0,
wr=0,
Ar=0,
Tr=0,
Er=0,
Mr=0,
kr=0,
Sr=0,
Rr=0,
Ir=0,
Or=0,
Pr=0;
var Br=0,
Cr=0,
Lr=0,
Nr=0,
xr=0,
Ur=0,
Fr=0,
Dr=0,
Yr=0,
Hr=0,
jr=0,
Wr=0,
zr=0,
Vr=0,
Kr=0,
Xr=0,
Gr=0,
Jr=0,
$r=0,
qr=0;
var Zr=0,
Qr=0,
et=0,
rt=0,
tt=0,
it=0,
nt=0,
at=0,
ot=0,
ut=0,
ft=0,
st=0,
lt=0,
ct=0,
ht=0,
dt=0,
vt=0,
pt=0,
_t=0,
mt=0;
var yt=0,
gt=0,
bt=0,
wt=0,
At=0,
Tt=0,
Et=0,
Mt=0,
kt=0,
St=0,
Rt=0,
It=0,
Ot=0,
Pt=0,
Bt=0,
Ct=0,
Lt=0,
Nt=0;
var xt=0,
Ut=0,
Ft=0,
Dt=0,
Yt=0,
Ht=0,
jt=0,
Wt=0,
zt=0,
Vt=0,
Kt=0,
Xt=0,
Gt=0,
Jt=0,
$t=0,
qt=0,
Zt=0,
Qt=0,
ei=0,
ri=0;
var ti=0,
ii=0,
ni=0,
ai=0,
oi=0,
ui=0,
fi=0,
si=0,
li=0,
ci=0,
hi=0,
di=0,
vi=0,
pi=0,
_i=0,
mi=0,
yi=0,
gi=0,
bi=0,
wi=0;
var Ai=0,
Ti=0,
Ei=0,
Mi=0,
ki=0,
Si=0,
Ri=0,
Ii=0,
Oi=0,
Pi=0,
Bi=0,
Ci=0,
Li=0,
Ni=0,
xi=0,
Ui=0,
Fi=0,
Di=0,
Yi=0,
Hi=0;
var ji=0,
Wi=0,
zi=0,
Vi=0,
Ki=0,
Xi=0,
Gi=0,
Ji=0,
$i=0,
qi=0,
Zi=0,
Qi=0,
en=0,
rn=0,
tn=0,
nn=0,
an=0,
on=0,
un=0,
fn=0;
var sn=0;
g=(0|e)==(0|0);
if(g)return;
Ar=e+-8|0;
Nt=0|n[4100>>2];
Kt=e+-4|0;
ii=0|n[Kt>>2];
vi=-8&ii;
Mi=Ar+vi|0;
xi=1&ii;
Xi=0==(0|xi);
do{
if(Xi){
b=0|n[Ar>>2];
P=3&ii;
j=0==(0|P);
if(j)return;
Q=0-b|0;
le=Ar+Q|0;
we=b+vi|0;
Be=le>>>0<Nt>>>0;
if(Be)return;
We=0|n[4104>>2];
er=(0|le)==(0|We);
if(er){
Li=Mi+4|0;
Ni=0|n[Li>>2];
Ui=3&Ni;
Fi=3==(0|Ui);
if(!Fi){
o=le;
u=we;
Wi=le;
break;
}
Di=le+we|0;
Yi=le+4|0;
Hi=1|we;
ji=-2&Ni;
n[4092>>2]=we;
n[Li>>2]=ji;
n[Yi>>2]=Hi;
n[Di>>2]=we;
return;
}
cr=b>>>3;
Tr=b>>>0<256;
if(Tr){
Lr=le+8|0;
Vr=0|n[Lr>>2];
tt=le+12|0;
dt=0|n[tt>>2];
Et=(0|dt)==(0|Vr);
if(Et){
Pt=1<<cr;
Bt=-1^Pt;
Ct=0|n[1021];
Lt=Ct&Bt;
n[1021]=Lt;
o=le;
u=we;
Wi=le;
break;
}else{
xt=Vr+12|0;
n[xt>>2]=dt;
Ut=dt+8|0;
n[Ut>>2]=Vr;
o=le;
u=we;
Wi=le;
break;
}
}
Ft=le+24|0;
Dt=0|n[Ft>>2];
Yt=le+12|0;
Ht=0|n[Yt>>2];
jt=(0|Ht)==(0|le);
do{
if(jt){
Gt=le+16|0;
Jt=Gt+4|0;
$t=0|n[Jt>>2];
qt=(0|$t)==(0|0);
if(qt){
Zt=0|n[Gt>>2];
Qt=(0|Zt)==(0|0);
if(Qt){
d=0;
break;
}else{
f=Zt;
s=Gt;
}
}else{
f=$t;
s=Jt;
}
while(1){
ei=f+20|0;
ri=0|n[ei>>2];
ti=(0|ri)==(0|0);
if(!ti){
f=ri;
s=ei;
continue;
}
ni=f+16|0;
ai=0|n[ni>>2];
oi=(0|ai)==(0|0);
if(oi)break;else
{
f=ai;
s=ni;
}
}
n[s>>2]=0;
d=f;
}else{
Wt=le+8|0;
zt=0|n[Wt>>2];
Vt=zt+12|0;
n[Vt>>2]=Ht;
Xt=Ht+8|0;
n[Xt>>2]=zt;
d=Ht;
}
}while(0);
ui=(0|Dt)==(0|0);
if(ui){
o=le;
u=we;
Wi=le;
}else{
fi=le+28|0;
si=0|n[fi>>2];
li=4388+(si<<2)|0;
ci=0|n[li>>2];
hi=(0|le)==(0|ci);
if(hi){
n[li>>2]=d;
an=(0|d)==(0|0);
if(an){
di=1<<si;
pi=-1^di;
_i=0|n[4088>>2];
mi=_i&pi;
n[4088>>2]=mi;
o=le;
u=we;
Wi=le;
break;
}
}else{
yi=Dt+16|0;
gi=0|n[yi>>2];
fn=(0|gi)!=(0|le);
m=1&fn;
bi=(Dt+16|0)+(m<<2)|0;
n[bi>>2]=d;
wi=(0|d)==(0|0);
if(wi){
o=le;
u=we;
Wi=le;
break;
}
}
Ai=d+24|0;
n[Ai>>2]=Dt;
Ti=le+16|0;
Ei=0|n[Ti>>2];
ki=(0|Ei)==(0|0);
if(!ki){
Si=d+16|0;
n[Si>>2]=Ei;
Ri=Ei+24|0;
n[Ri>>2]=d;
}
Ii=Ti+4|0;
Oi=0|n[Ii>>2];
Pi=(0|Oi)==(0|0);
if(Pi){
o=le;
u=we;
Wi=le;
}else{
Bi=d+20|0;
n[Bi>>2]=Oi;
Ci=Oi+24|0;
n[Ci>>2]=d;
o=le;
u=we;
Wi=le;
}
}
}else{
o=Ar;
u=vi;
Wi=Ar;
}
}while(0);
zi=Wi>>>0<Mi>>>0;
if(!zi)return;
Vi=Mi+4|0;
Ki=0|n[Vi>>2];
Gi=1&Ki;
Ji=0==(0|Gi);
if(Ji)return;
$i=2&Ki;
qi=0==(0|$i);
if(qi){
Zi=0|n[4108>>2];
Qi=(0|Mi)==(0|Zi);
en=0|n[4104>>2];
if(Qi){
rn=0|n[4096>>2];
tn=rn+u|0;
n[4096>>2]=tn;
n[4108>>2]=o;
nn=1|tn;
w=o+4|0;
n[w>>2]=nn;
A=(0|o)==(0|en);
if(!A)return;
n[4104>>2]=0;
n[4092>>2]=0;
return;
}
T=(0|Mi)==(0|en);
if(T){
E=0|n[4092>>2];
M=E+u|0;
n[4092>>2]=M;
n[4104>>2]=Wi;
k=1|M;
S=o+4|0;
n[S>>2]=k;
R=Wi+M|0;
n[R>>2]=M;
return;
}
I=-8&Ki;
O=I+u|0;
B=Ki>>>3;
C=Ki>>>0<256;
do{
if(C){
L=Mi+8|0;
N=0|n[L>>2];
x=Mi+12|0;
U=0|n[x>>2];
F=(0|U)==(0|N);
if(F){
D=1<<B;
Y=-1^D;
H=0|n[1021];
W=H&Y;
n[1021]=W;
break;
}else{
z=N+12|0;
n[z>>2]=U;
V=U+8|0;
n[V>>2]=N;
break;
}
}else{
K=Mi+24|0;
X=0|n[K>>2];
G=Mi+12|0;
J=0|n[G>>2];
$=(0|J)==(0|Mi);
do{
if($){
te=Mi+16|0;
ie=te+4|0;
ne=0|n[ie>>2];
ae=(0|ne)==(0|0);
if(ae){
oe=0|n[te>>2];
ue=(0|oe)==(0|0);
if(ue){
v=0;
break;
}else{
l=oe;
c=te;
}
}else{
l=ne;
c=ie;
}
while(1){
fe=l+20|0;
se=0|n[fe>>2];
ce=(0|se)==(0|0);
if(!ce){
l=se;
c=fe;
continue;
}
he=l+16|0;
de=0|n[he>>2];
ve=(0|de)==(0|0);
if(ve)break;else
{
l=de;
c=he;
}
}
n[c>>2]=0;
v=l;
}else{
q=Mi+8|0;
Z=0|n[q>>2];
ee=Z+12|0;
n[ee>>2]=J;
re=J+8|0;
n[re>>2]=Z;
v=J;
}
}while(0);
pe=(0|X)==(0|0);
if(!pe){
_e=Mi+28|0;
me=0|n[_e>>2];
ye=4388+(me<<2)|0;
ge=0|n[ye>>2];
be=(0|Mi)==(0|ge);
if(be){
n[ye>>2]=v;
on=(0|v)==(0|0);
if(on){
Ae=1<<me;
Te=-1^Ae;
Ee=0|n[4088>>2];
Me=Ee&Te;
n[4088>>2]=Me;
break;
}
}else{
ke=X+16|0;
Se=0|n[ke>>2];
un=(0|Se)!=(0|Mi);
y=1&un;
Re=(X+16|0)+(y<<2)|0;
n[Re>>2]=v;
Ie=(0|v)==(0|0);
if(Ie)break;
}
Oe=v+24|0;
n[Oe>>2]=X;
Pe=Mi+16|0;
Ce=0|n[Pe>>2];
Le=(0|Ce)==(0|0);
if(!Le){
Ne=v+16|0;
n[Ne>>2]=Ce;
xe=Ce+24|0;
n[xe>>2]=v;
}
Ue=Pe+4|0;
Fe=0|n[Ue>>2];
De=(0|Fe)==(0|0);
if(!De){
Ye=v+20|0;
n[Ye>>2]=Fe;
He=Fe+24|0;
n[He>>2]=v;
}
}
}
}while(0);
je=1|O;
ze=o+4|0;
n[ze>>2]=je;
Ve=Wi+O|0;
n[Ve>>2]=O;
Ke=0|n[4104>>2];
Xe=(0|o)==(0|Ke);
if(Xe){
n[4092>>2]=O;
return;
}else h=O;
}else{
Ge=-2&Ki;
n[Vi>>2]=Ge;
Je=1|u;
$e=o+4|0;
n[$e>>2]=Je;
qe=Wi+u|0;
n[qe>>2]=u;
h=u;
}
Ze=h>>>3;
Qe=h>>>0<256;
if(Qe){
rr=Ze<<1;
tr=4124+(rr<<2)|0;
ir=0|n[1021];
nr=1<<Ze;
ar=ir&nr;
or=0==(0|ar);
if(or){
ur=ir|nr;
n[1021]=ur;
p=tr+8|0;
a=tr;
_=p;
}else{
fr=tr+8|0;
sr=0|n[fr>>2];
a=sr;
_=fr;
}
n[_>>2]=o;
lr=a+12|0;
n[lr>>2]=o;
hr=o+8|0;
n[hr>>2]=a;
dr=o+12|0;
n[dr>>2]=tr;
return;
}
vr=h>>>8;
pr=0==(0|vr);
if(pr)i=0;else
{
_r=h>>>0>16777215;
if(_r)i=31;else
{
mr=vr+1048320|0;
yr=mr>>>16;
gr=8&yr;
br=vr<<gr;
wr=br+520192|0;
Er=wr>>>16;
Mr=4&Er;
kr=Mr|gr;
Sr=br<<Mr;
Rr=Sr+245760|0;
Ir=Rr>>>16;
Or=2&Ir;
Pr=kr|Or;
Br=14-Pr|0;
Cr=Sr<<Or;
Nr=Cr>>>15;
xr=Br+Nr|0;
Ur=xr<<1;
Fr=xr+7|0;
Dr=h>>>Fr;
Yr=1&Dr;
Hr=Yr|Ur;
i=Hr;
}
}
jr=4388+(i<<2)|0;
Wr=o+28|0;
n[Wr>>2]=i;
zr=o+16|0;
Kr=o+20|0;
n[Kr>>2]=0;
n[zr>>2]=0;
Xr=0|n[4088>>2];
Gr=1<<i;
Jr=Xr&Gr;
$r=0==(0|Jr);
do{
if($r){
qr=Xr|Gr;
n[4088>>2]=qr;
n[jr>>2]=o;
Zr=o+24|0;
n[Zr>>2]=jr;
Qr=o+12|0;
n[Qr>>2]=o;
et=o+8|0;
n[et>>2]=o;
}else{
rt=0|n[jr>>2];
it=31==(0|i);
nt=i>>>1;
at=25-nt|0;
ot=it?0:at;
ut=h<<ot;
r=ut;
t=rt;
while(1){
ft=t+4|0;
st=0|n[ft>>2];
lt=-8&st;
ct=(0|lt)==(0|h);
if(ct){
sn=73;
break;
}
ht=r>>>31;
vt=(t+16|0)+(ht<<2)|0;
pt=r<<1;
_t=0|n[vt>>2];
mt=(0|_t)==(0|0);
if(mt){
sn=72;
break;
}else{
r=pt;
t=_t;
}
}
if(72==(0|sn)){
n[vt>>2]=o;
yt=o+24|0;
n[yt>>2]=t;
gt=o+12|0;
n[gt>>2]=o;
bt=o+8|0;
n[bt>>2]=o;
break;
}else if(73==(0|sn)){
wt=t+8|0;
At=0|n[wt>>2];
Tt=At+12|0;
n[Tt>>2]=o;
n[wt>>2]=o;
Mt=o+8|0;
n[Mt>>2]=At;
kt=o+12|0;
n[kt>>2]=t;
St=o+24|0;
n[St>>2]=0;
break;
}
}
}while(0);
Rt=0|n[4116>>2];
It=Rt+-1|0;
n[4116>>2]=It;
Ot=0==(0|It);
if(Ot);else
return;
n[4116>>2]=-1;
return;
}

function Ce(){
return 4580|0;
}

function Le(e){
e|=0;
var r=0,
t=0,
i=0,
a=0,
o=0,
u=0,
f=0;
f=d;
d=d+16|0;
if((0|d)>=(0|v))j(16|0);
u=f;
r=e+60|0;
t=0|n[r>>2];
i=0|He(t);
n[u>>2]=i;
a=0|G(6,0|u);
o=0|Ue(a);
d=f;
return 0|o;
}

function Ne(e,r,t){
e|=0;
r|=0;
t|=0;
var i=0,
a=0,
o=0,
u=0,
f=0,
s=0,
l=0,
c=0,
h=0,
p=0,
_=0,
m=0,
y=0,
g=0,
b=0,
w=0,
A=0,
T=0,
E=0,
M=0;
var k=0,
S=0,
R=0,
I=0,
O=0,
P=0,
B=0,
C=0,
L=0,
N=0,
x=0,
U=0,
F=0,
D=0,
Y=0,
H=0,
W=0,
z=0,
V=0,
K=0;
var X=0,
G=0,
J=0,
$=0,
q=0,
Z=0,
Q=0,
re=0,
te=0,
ie=0,
ne=0,
ae=0,
oe=0,
ue=0,
fe=0,
se=0,
le=0,
ce=0,
he=0,
de=0;
var ve=0,
pe=0,
_e=0;
_e=d;
d=d+48|0;
if((0|d)>=(0|v))j(48|0);
le=_e+16|0;
se=_e;
C=_e+32|0;
V=e+28|0;
ie=0|n[V>>2];
n[C>>2]=ie;
ae=C+4|0;
oe=e+20|0;
ue=0|n[oe>>2];
fe=ue-ie|0;
n[ae>>2]=fe;
c=C+8|0;
n[c>>2]=r;
h=C+12|0;
n[h>>2]=t;
p=fe+t|0;
_=e+60|0;
m=0|n[_>>2];
y=C;
n[se>>2]=m;
ce=se+4|0;
n[ce>>2]=y;
he=se+8|0;
n[he>>2]=2;
g=0|ee(146,0|se);
b=0|Ue(g);
w=(0|p)==(0|b);
e:do{
if(w)pe=3;else
{
a=2;
o=p;
u=C;
R=b;
while(1){
I=(0|R)<0;
if(I)break;
F=o-R|0;
D=u+4|0;
Y=0|n[D>>2];
H=R>>>0>Y>>>0;
W=u+8|0;
l=H?W:u;
z=H<<31>>31;
s=z+a|0;
K=H?Y:0;
i=R-K|0;
X=0|n[l>>2];
G=X+i|0;
n[l>>2]=G;
J=l+4|0;
$=0|n[J>>2];
q=$-i|0;
n[J>>2]=q;
Z=0|n[_>>2];
Q=l;
n[le>>2]=Z;
de=le+4|0;
n[de>>2]=Q;
ve=le+8|0;
n[ve>>2]=s;
re=0|ee(146,0|le);
te=0|Ue(re);
ne=(0|F)==(0|te);
if(ne){
pe=3;
break e;
}else{
a=s;
o=F;
u=l;
R=te;
}
}
O=e+16|0;
n[O>>2]=0;
n[V>>2]=0;
n[oe>>2]=0;
P=0|n[e>>2];
B=32|P;
n[e>>2]=B;
L=2==(0|a);
if(L)f=0;else
{
N=u+4|0;
x=0|n[N>>2];
U=t-x|0;
f=U;
}
}
}while(0);
if(3==(0|pe)){
A=e+44|0;
T=0|n[A>>2];
E=e+48|0;
M=0|n[E>>2];
k=T+M|0;
S=e+16|0;
n[S>>2]=k;
n[V>>2]=T;
n[oe>>2]=T;
f=t;
}
d=_e;
return 0|f;
}

function xe(e,r,t){
e|=0;
r|=0;
t|=0;
var i=0,
a=0,
o=0,
u=0,
f=0,
s=0,
l=0,
c=0,
h=0,
p=0,
_=0,
m=0,
y=0,
g=0,
b=0;
b=d;
d=d+32|0;
if((0|d)>=(0|v))j(32|0);
p=b;
o=b+20|0;
u=e+60|0;
f=0|n[u>>2];
s=o;
n[p>>2]=f;
_=p+4|0;
n[_>>2]=0;
m=p+8|0;
n[m>>2]=r;
y=p+12|0;
n[y>>2]=s;
g=p+16|0;
n[g>>2]=t;
l=0|$(140,0|p);
c=0|Ue(l);
h=(0|c)<0;
if(h){
n[o>>2]=-1;
a=-1;
}else{
i=0|n[o>>2];
a=i;
}
d=b;
return 0|a;
}

function Ue(e){
e|=0;
var r=0,
t=0,
i=0,
a=0;
t=e>>>0>4294963200;
if(t){
i=0-e|0;
a=0|Fe();
n[a>>2]=i;
r=-1;
}else r=e;
return 0|r;
}

function Fe(){
var e=0,
r=0;
e=0|De();
r=e+64|0;
return 0|r;
}

function De(){
var e=0;
e=0|Ye();
return 0|e;
}

function Ye(){
return 8|0;
}

function He(e){
e|=0;
return 0|e;
}

function je(e,r,i){
e|=0;
r|=0;
i|=0;
var a=0,
o=0,
u=0,
f=0,
s=0,
l=0,
c=0,
h=0,
p=0,
_=0,
m=0,
y=0,
g=0,
b=0,
w=0,
A=0;
A=d;
d=d+32|0;
if((0|d)>=(0|v))j(32|0);
g=A;
l=A+16|0;
c=e+36|0;
n[c>>2]=5;
h=0|n[e>>2];
p=64&h;
_=0==(0|p);
if(_){
m=e+60|0;
y=0|n[m>>2];
a=l;
n[g>>2]=y;
b=g+4|0;
n[b>>2]=21523;
w=g+8|0;
n[w>>2]=a;
o=0|Z(54,0|g);
u=0==(0|o);
if(!u){
f=e+75|0;
t[f>>0]=-1;
}
}
s=0|Ne(e,r,i);
d=A;
return 0|s;
}

function We(e){
e|=0;
var r=0,
i=0,
a=0,
o=0,
u=0,
f=0,
s=0,
l=0,
c=0,
h=0,
d=0,
v=0,
p=0,
_=0,
m=0,
y=0,
g=0,
b=0,
w=0,
A=0;
var T=0,
E=0,
M=0,
k=0,
S=0,
R=0,
I=0,
O=0,
P=0,
B=0,
C=0;
l=e;
w=3&l;
k=0==(0|w);
e:do{
if(k){
i=e;
C=4;
}else{
a=e;
M=l;
while(1){
S=0|t[a>>0];
R=S<<24>>24==0;
if(R){
s=M;
break e;
}
I=a+1|0;
O=I;
P=3&O;
B=0==(0|P);
if(B){
i=I;
C=4;
break;
}else{
a=I;
M=O;
}
}
}
}while(0);
if(4==(0|C)){
r=i;
while(1){
c=0|n[r>>2];
h=c+-16843009|0;
d=-2139062144&c;
v=-2139062144^d;
p=v&h;
_=0==(0|p);
m=r+4|0;
if(_)r=m;else
break;
}
y=255&c;
g=y<<24>>24==0;
if(g)o=r;else
{
u=r;
while(1){
b=u+1|0;
f=0|t[b>>0];
A=f<<24>>24==0;
if(A){
o=b;
break;
}else u=b;
}
}
T=o;
s=T;
}
E=s-l|0;
return 0|E;
}

function ze(e){
e|=0;
var r=0,
t=0,
i=0,
a=0;
r=0|Ve();
t=r+188|0;
i=0|n[t>>2];
a=0|Ke(e,i);
return 0|a;
}

function Ve(){
var e=0;
e=0|Ye();
return 0|e;
}

function Ke(e,r){
e|=0;
r|=0;
var i=0,
a=0,
o=0,
u=0,
f=0,
s=0,
l=0,
c=0,
h=0,
d=0,
v=0,
p=0,
_=0,
m=0,
y=0,
g=0,
b=0,
w=0,
A=0,
T=0;
var E=0;
o=0;
while(1){
m=1644+o|0;
y=0|t[m>>0];
g=255&y;
b=(0|g)==(0|e);
if(b){
E=2;
break;
}
w=o+1|0;
A=87==(0|w);
if(A){
a=1732;
f=87;
E=5;
break;
}else o=w;
}
if(2==(0|E)){
_=0==(0|o);
if(_)i=1732;else
{
a=1732;
f=o;
E=5;
}
}
if(5==(0|E))
while(1){
E=0;
u=a;
while(1){
T=0|t[u>>0];
s=T<<24>>24==0;
l=u+1|0;
if(s)break;else
u=l;
}
c=f+-1|0;
h=0==(0|c);
if(h){
i=l;
break;
}else{
a=l;
f=c;
E=5;
}
}
d=r+20|0;
v=0|n[d>>2];
p=0|Xe(i,v);
return 0|p;
}

function Xe(e,r){
e|=0;
r|=0;
var t=0;
t=0|Ge(e,r);
return 0|t;
}

function Ge(e,r){
e|=0;
r|=0;
var t=0,
i=0,
a=0,
o=0,
u=0,
f=0,
s=0,
l=0;
i=(0|r)==(0|0);
if(i)t=0;else
{
a=0|n[r>>2];
o=r+4|0;
u=0|n[o>>2];
f=0|Je(a,u,e);
t=f;
}
s=(0|t)!=(0|0);
l=s?t:e;
return 0|l;
}

function Je(e,r,i){
e|=0;
r|=0;
i|=0;
var a=0,
o=0,
u=0,
f=0,
s=0,
l=0,
c=0,
h=0,
d=0,
v=0,
p=0,
_=0,
m=0,
y=0,
g=0,
b=0,
w=0,
A=0,
T=0,
E=0;
var M=0,
k=0,
S=0,
R=0,
I=0,
O=0,
P=0,
B=0,
C=0,
L=0,
N=0,
x=0,
U=0,
F=0,
D=0,
Y=0,
H=0,
j=0,
W=0,
z=0;
var V=0,
K=0,
X=0,
G=0,
J=0,
$=0,
q=0,
Z=0,
Q=0,
ee=0,
re=0,
te=0,
ie=0,
ne=0,
ae=0,
oe=0,
ue=0,
fe=0,
se=0,
le=0;
var ce=0,
he=0,
de=0,
ve=0,
pe=0,
_e=0,
me=0,
ye=0,
ge=0,
be=0,
we=0;
P=0|n[e>>2];
j=P+1794895138|0;
Q=e+8|0;
le=0|n[Q>>2];
_e=0|$e(le,j);
me=e+12|0;
ye=0|n[me>>2];
c=0|$e(ye,j);
h=e+16|0;
d=0|n[h>>2];
v=0|$e(d,j);
p=r>>>2;
_=_e>>>0<p>>>0;
e:do{
if(_){
m=_e<<2;
y=r-m|0;
g=c>>>0<y>>>0;
b=v>>>0<y>>>0;
ge=g&b;
if(ge){
w=v|c;
A=3&w;
T=0==(0|A);
if(T){
E=c>>>2;
M=v>>>2;
o=0;
u=_e;
while(1){
k=u>>>1;
S=o+k|0;
R=S<<1;
I=R+E|0;
O=e+(I<<2)|0;
B=0|n[O>>2];
C=0|$e(B,j);
L=I+1|0;
N=e+(L<<2)|0;
x=0|n[N>>2];
U=0|$e(x,j);
F=U>>>0<r>>>0;
D=r-U|0;
Y=C>>>0<D>>>0;
be=F&Y;
if(!be){
l=0;
break e;
}
H=U+C|0;
W=e+H|0;
z=0|t[W>>0];
V=z<<24>>24==0;
if(!V){
l=0;
break e;
}
K=e+U|0;
X=0|qe(i,K);
G=0==(0|X);
if(G)break;
de=1==(0|u);
ve=(0|X)<0;
pe=u-k|0;
s=ve?k:pe;
f=ve?o:S;
if(de){
l=0;
break e;
}else{
o=f;
u=s;
}
}
J=R+M|0;
$=e+(J<<2)|0;
q=0|n[$>>2];
Z=0|$e(q,j);
ee=J+1|0;
re=e+(ee<<2)|0;
te=0|n[re>>2];
ie=0|$e(te,j);
ne=ie>>>0<r>>>0;
ae=r-ie|0;
oe=Z>>>0<ae>>>0;
we=ne&oe;
if(we){
ue=e+ie|0;
fe=ie+Z|0;
se=e+fe|0;
ce=0|t[se>>0];
he=ce<<24>>24==0;
a=he?ue:0;
l=a;
}else l=0;
}else l=0;
}else l=0;
}else l=0;
}while(0);
return 0|l;
}

function $e(e,r){
e|=0;
r|=0;
var t=0,
i=0,
n=0;
i=0==(0|r);
n=0|Fr(0|e);
t=i?e:n;
return 0|t;
}

function qe(e,r){
e|=0;
r|=0;
var i=0,
n=0,
a=0,
o=0,
u=0,
f=0,
s=0,
l=0,
c=0,
h=0,
d=0,
v=0,
p=0,
_=0,
m=0,
y=0,
g=0,
b=0,
w=0;
h=0|t[e>>0];
d=0|t[r>>0];
v=h<<24>>24!=d<<24>>24;
p=h<<24>>24==0;
w=p|v;
if(w){
a=d;
o=h;
}else{
i=r;
n=e;
while(1){
_=n+1|0;
m=i+1|0;
y=0|t[_>>0];
g=0|t[m>>0];
u=y<<24>>24!=g<<24>>24;
f=y<<24>>24==0;
b=f|u;
if(b){
a=g;
o=y;
break;
}else{
i=m;
n=_;
}
}
}
s=255&o;
l=255&a;
c=s-l|0;
return 0|c;
}

function Ze(e,r,i){
e|=0;
r|=0;
i|=0;
var a=0,
o=0,
u=0,
f=0,
s=0,
l=0,
c=0,
h=0,
d=0,
v=0,
p=0,
_=0,
m=0,
y=0,
g=0,
b=0,
w=0,
A=0,
T=0,
E=0;
var M=0,
k=0,
S=0,
R=0,
I=0,
O=0,
P=0,
B=0,
L=0,
N=0,
x=0,
U=0,
F=0,
D=0,
Y=0,
H=0,
j=0,
W=0,
z=0,
V=0;
var K=0,
X=0,
G=0,
J=0,
$=0,
q=0,
Z=0,
Q=0,
ee=0,
re=0,
te=0,
ie=0,
ne=0,
ae=0,
oe=0;
H=255&r;
Z=e;
Q=3&Z;
ee=0!=(0|Q);
re=0!=(0|i);
ae=re&ee;
e:do{
if(ae){
te=255&r;
f=e;
c=i;
while(1){
ie=0|t[f>>0];
b=ie<<24>>24==te<<24>>24;
if(b){
u=f;
l=c;
oe=6;
break e;
}
w=f+1|0;
A=c+-1|0;
T=w;
E=3&T;
M=0!=(0|E);
k=0!=(0|A);
ne=k&M;
if(ne){
f=w;
c=A;
}else{
o=w;
s=A;
g=k;
oe=5;
break;
}
}
}else{
o=e;
s=i;
g=re;
oe=5;
}
}while(0);
if(5==(0|oe))
if(g){
u=o;
l=s;
oe=6;
}else{
_=o;
y=0;
}e:do{
if(6==(0|oe)){
S=0|t[u>>0];
R=255&r;
I=S<<24>>24==R<<24>>24;
if(I){
_=u;
y=l;
}else{
O=0|C(H,16843009);
P=l>>>0>3;
r:do{
if(P){
h=u;
v=l;
while(1){
B=0|n[h>>2];
L=B^O;
N=L+-16843009|0;
x=-2139062144&L;
U=-2139062144^x;
F=U&N;
D=0==(0|F);
if(!D)break;
Y=h+4|0;
j=v+-4|0;
W=j>>>0>3;
if(W){
h=Y;
v=j;
}else{
a=Y;
d=j;
oe=11;
break r;
}
}
p=h;
m=v;
}else{
a=u;
d=l;
oe=11;
}
}while(0);
if(11==(0|oe)){
z=0==(0|d);
if(z){
_=a;
y=0;
break;
}else{
p=a;
m=d;
}
}
while(1){
V=0|t[p>>0];
K=V<<24>>24==R<<24>>24;
if(K){
_=p;
y=m;
break e;
}
X=p+1|0;
G=m+-1|0;
J=0==(0|G);
if(J){
_=X;
y=0;
break;
}else{
p=X;
m=G;
}
}
}
}
}while(0);
$=0!=(0|y);
q=$?_:0;
return 0|q;
}

function Qe(e){
return 0;
}

function er(e,r,t){
e|=0;
r|=0;
t|=0;
var i=0,
a=0,
o=0;
o=d;
d=d+16|0;
if((0|d)>=(0|v))j(16|0);
i=o;
n[i>>2]=t;
a=0|rr(e,r,i);
d=o;
return 0|a;
}

function rr(e,r,t){
e|=0;
r|=0;
t|=0;
var i=0;
i=0|tr(e,2147483647,r,t);
return 0|i;
}

function tr(e,r,i,a){
e|=0;
r|=0;
i|=0;
a|=0;
var o=0,
u=0,
f=0,
s=0,
l=0,
c=0,
h=0,
p=0,
_=0,
m=0,
y=0,
g=0,
b=0,
w=0,
A=0,
T=0,
E=0,
M=0,
k=0,
S=0;
var R=0,
I=0,
O=0,
P=0,
B=0,
C=0,
L=0,
N=0,
x=0,
U=0,
F=0;
x=d;
d=d+128|0;
if((0|d)>=(0|v))j(128|0);
R=x+124|0;
I=x;
L=I;
U=380;
F=L+124|0;
do{
n[L>>2]=0|n[U>>2];
L=L+4|0;
U=U+4|0;
}while((0|L)<(0|F));
O=r+-1|0;
P=O>>>0>2147483646;
if(P){
B=0==(0|r);
if(B){
f=R;
s=1;
N=4;
}else{
C=0|Fe();
n[C>>2]=75;
u=-1;
}
}else{
f=e;
s=r;
N=4;
}
if(4==(0|N)){
l=f;
c=-2-l|0;
h=s>>>0>c>>>0;
o=h?c:s;
p=I+48|0;
n[p>>2]=o;
_=I+20|0;
n[_>>2]=f;
m=I+44|0;
n[m>>2]=f;
y=f+o|0;
g=I+16|0;
n[g>>2]=y;
b=I+28|0;
n[b>>2]=y;
w=0|ir(I,i,a);
A=0==(0|o);
if(A)u=w;else
{
T=0|n[_>>2];
E=0|n[g>>2];
M=(0|T)==(0|E);
k=M<<31>>31;
S=T+k|0;
t[S>>0]=0;
u=w;
}
}
d=x;
return 0|u;
}

function ir(e,r,i){
e|=0;
r|=0;
i|=0;
var a=0,
o=0,
u=0,
f=0,
s=0,
l=0,
c=0,
h=0,
p=0,
_=0,
m=0,
y=0,
g=0,
b=0,
w=0,
A=0,
T=0;
var E=0,
M=0,
k=0,
S=0,
R=0,
I=0,
O=0,
P=0,
B=0,
C=0,
L=0,
N=0,
x=0,
U=0,
F=0,
D=0,
Y=0,
H=0;
var W=0,
z=0,
V=0,
K=0,
X=0;
K=d;
d=d+224|0;
if((0|d)>=(0|v))j(224|0);
R=K+120|0;
F=K+80|0;
D=K;
Y=K+136|0;
V=F;
X=V+40|0;
do{
n[V>>2]=0|0;
V=V+4|0;
}while((0|V)<(0|X));
z=0|n[i>>2];
n[R>>2]=z;
H=0|nr(0,r,R,D,F);
W=(0|H)<0;
if(W)o=-1;else
{
s=0|n[e>>2];
l=32&s;
c=e+74|0;
h=0|t[c>>0];
p=h<<24>>24<1;
if(p){
_=-33&s;
n[e>>2]=_;
}
m=e+48|0;
y=0|n[m>>2];
g=0==(0|y);
if(g){
w=e+44|0;
A=0|n[w>>2];
n[w>>2]=Y;
T=e+28|0;
n[T>>2]=Y;
E=e+20|0;
n[E>>2]=Y;
n[m>>2]=80;
M=Y+80|0;
k=e+16|0;
n[k>>2]=M;
S=0|nr(e,r,R,D,F);
I=(0|A)==(0|0);
if(I)u=S;else
{
O=e+36|0;
P=0|n[O>>2];
0|zr[7&P](e,0,0);
B=0|n[E>>2];
C=(0|B)==(0|0);
a=C?-1:S;
n[w>>2]=A;
n[m>>2]=0;
n[k>>2]=0;
n[T>>2]=0;
n[E>>2]=0;
u=a;
}
}else{
b=0|nr(e,r,R,D,F);
u=b;
}
L=0|n[e>>2];
N=32&L;
x=0==(0|N);
f=x?u:-1;
U=L|l;
n[e>>2]=U;
o=f;
}
d=K;
return 0|o;
}

function nr(e,r,a,o,u){
e|=0;
r|=0;
a|=0;
o|=0;
u|=0;
var f=0,
l=0,
c=0,
h=0,
p=0,
_=0,
m=0,
g=0,
b=0,
w=0,
A=0,
T=0,
E=0,
M=0,
k=0,
S=0,
R=0,
I=0,
O=0,
P=0;
var B=0,
C=0,
L=0,
N=0,
x=0,
U=0,
F=0,
D=0,
Y=0,
H=0,
W=0,
z=0,
V=0,
K=0,
X=0,
G=0,
J=0,
$=0,
q=0,
Z=0;
var Q=0,
ee=0,
re=0,
te=0,
ie=0,
ne=0,
ae=0,
oe=0,
ue=0,
fe=0,
se=0,
le=0,
ce=0,
he=0,
de=0,
ve=0,
pe=0,
_e=0,
me=0,
ye=0;
var ge=0,
be=0,
we=0,
Ae=0,
Te=0,
Ee=0,
Me=0,
ke=0,
Se=0,
Re=0,
Ie=0,
Oe=0,
Pe=0,
Be=0,
Ce=0,
Le=0,
Ne=0,
xe=0,
Ue=0,
De=0;
var Ye=0,
He=0,
je=0,
We=0,
Ve=0,
Ke=0,
Xe=0,
Ge=0,
Je=0,
$e=0,
qe=0,
Qe=0,
er=0,
rr=0,
tr=0,
ir=0,
nr=0;
var vr=0,
pr=0,
_r=0,
mr=0,
yr=0,
gr=0,
br=0,
wr=0,
Ar=0,
Tr=0,
Er=0,
Mr=0,
kr=0,
Rr=0,
Ir=0,
Or=0,
Pr=0,
Br=0,
Cr=0,
Lr=0;
var Nr=0,
xr=0,
Ur=0,
Fr=0,
Dr=0,
Yr=0,
Hr=0,
jr=0,
Wr=0,
zr=0,
Vr=0,
Kr=0,
Xr=0,
Gr=0,
Jr=0,
$r=0,
qr=0,
Zr=0,
Qr=0,
et=0;
var rt=0,
tt=0,
it=0,
nt=0,
at=0,
ot=0,
ut=0,
ft=0,
st=0,
lt=0,
ct=0,
ht=0,
dt=0,
vt=0,
pt=0,
_t=0,
mt=0,
yt=0,
gt=0,
bt=0;
var wt=0,
At=0,
Tt=0,
Et=0,
Mt=0,
kt=0,
St=0,
Rt=0,
It=0,
Ot=0,
Pt=0,
Bt=0,
Ct=0,
Lt=0,
Nt=0,
xt=0,
Ut=0,
Ft=0,
Dt=0,
Yt=0;
var Ht=0,
jt=0,
Wt=0,
zt=0,
Vt=0,
Kt=0,
Xt=0,
Gt=0,
Jt=0,
$t=0,
qt=0,
Zt=0,
Qt=0,
ei=0,
ri=0,
ti=0,
ii=0,
ni=0,
ai=0,
oi=0;
var ui=0,
fi=0,
si=0,
li=0,
ci=0,
hi=0,
di=0,
vi=0,
pi=0,
_i=0,
mi=0,
yi=0,
gi=0,
bi=0,
wi=0,
Ai=0,
Ti=0,
Ei=0,
Mi=0,
ki=0;
var Si=0,
Ri=0,
Ii=0,
Oi=0,
Pi=0,
Bi=0,
Ci=0,
Li=0,
Ni=0,
xi=0,
Ui=0,
Fi=0,
Di=0,
Yi=0,
Hi=0,
ji=0,
Wi=0,
zi=0,
Vi=0,
Ki=0;
var Xi=0,
Gi=0,
Ji=0,
$i=0,
qi=0,
Zi=0,
Qi=0,
en=0,
rn=0,
tn=0,
nn=0,
an=0,
on=0,
un=0,
fn=0,
sn=0,
ln=0;
var cn=0,
hn=0,
dn=0,
vn=0,
pn=0,
_n=0,
mn=0,
yn=0,
gn=0,
bn=0,
wn=0,
An=0,
Tn=0,
En=0,
Mn=0,
kn=0,
Sn=0;
var Rn=0,
In=0,
On=0,
Pn=0,
Bn=0,
Cn=0,
Ln=0,
Nn=0,
xn=0,
Un=0,
Fn=0,
Dn=0,
Yn=0,
Hn=0,
jn=0,
Wn=0,
zn=0,
Vn=0,
Kn=0,
Xn=0;
var Gn=0,
Jn=0,
$n=0,
qn=0,
Zn=0,
Qn=0,
ea=0,
ra=0,
ta=0,
ia=0,
na=0,
aa=0,
oa=0,
ua=0,
fa=0,
sa=0,
la=0,
ca=0,
ha=0,
da=0;
var va=0,
pa=0,
_a=0,
ma=0,
ya=0,
ga=0,
ba=0,
wa=0,
Aa=0,
Ta=0,
Ea=0,
Ma=0,
ka=0,
Sa=0,
Ra=0,
Ia=0,
Oa=0,
Pa=0,
Ba=0,
Ca=0;
var La=0,
Na=0,
xa=0,
Ua=0,
Fa=0,
Da=0,
Ya=0,
Ha=0,
ja=0,
Wa=0,
za=0,
Va=0,
Ka=0,
Xa=0,
Ga=0,
Ja=0,
$a=0,
qa=0,
Za=0,
Qa=0;
var eo=0,
ro=0,
to=0,
io=0,
no=0,
ao=0,
oo=0,
uo=0,
fo=0,
so=0,
lo=0,
co=0,
ho=0,
vo=0,
po=0,
_o=0,
mo=0;
var yo=0,
go=0,
bo=0,
wo=0,
Ao=0,
To=0,
Eo=0,
Mo=0,
ko=0,
So=0,
Ro=0,
Io=0,
Oo=0,
Po=0,
Bo=0,
Co=0,
Lo=0,
No=0,
xo=0,
Uo=0;
var Fo=0,
Do=0,
Yo=0,
Ho=0,
jo=0,
Wo=0,
zo=0,
Vo=0,
Ko=0,
Xo=0,
Go=0,
Jo=0,
$o=0,
qo=0,
Zo=0,
Qo=0,
eu=0,
ru=0,
tu=0,
iu=0;
var nu=0,
au=0,
ou=0,
uu=0,
fu=0,
su=0,
lu=0,
cu=0,
hu=0,
du=0,
vu=0,
pu=0;
pu=d;
d=d+64|0;
if((0|d)>=(0|v))j(64|0);
Da=pu+16|0;
$a=pu;
uo=pu+24|0;
_o=pu+8|0;
So=pu+20|0;
n[Da>>2]=r;
Be=(0|e)!=(0|0);
Ve=uo+40|0;
er=Ve;
br=uo+39|0;
Br=_o+4|0;
I=0;
O=0;
Y=0;
ri=r;
e:while(1){
Wr=(0|O)>-1;
do{
if(Wr){
et=2147483647-O|0;
ct=(0|I)>(0|et);
if(ct){
At=0|Fe();
n[At>>2]=75;
$=-1;
break;
}else{
Ct=I+O|0;
$=Ct;
break;
}
}else $=O;
}while(0);
zt=0|t[ri>>0];
hi=zt<<24>>24==0;
if(hi){
vu=87;
break;
}else{
Ti=zt;
Vi=ri;
}
r:while(1){
switch(Ti<<24>>24){
case 37:
B=Vi;
cn=Vi;
vu=9;
break r;
break;
case 0:
P=Vi;
Ra=Vi;
break r;
break;
default:}

Li=Vi+1|0;
n[Da>>2]=Li;
Se=0|t[Li>>0];
Ti=Se;
Vi=Li;
}
r:do{
if(9==(0|vu))
while(1){
vu=0;
tn=cn+1|0;
An=0|t[tn>>0];
On=An<<24>>24==37;
if(!On){
P=B;
Ra=cn;
break r;
}
Hn=B+1|0;
Zn=cn+2|0;
n[Da>>2]=Zn;
sa=0|t[Zn>>0];
ba=sa<<24>>24==37;
if(ba){
B=Hn;
cn=Zn;
vu=9;
}else{
P=Hn;
Ra=Zn;
break;
}
}
}while(0);
Ta=P;
Ea=ri;
Ma=Ta-Ea|0;
if(Be)ar(e,ri,Ma);
ka=0==(0|Ma);
if(!ka){
H=Y;
I=Ma;
O=$;
ri=Ra;
Y=H;
continue;
}
Sa=Ra+1|0;
Ia=0|t[Sa>>0];
Oa=Ia<<24>>24;
ru=Oa+-48|0;
Zo=ru>>>0<10;
if(Zo){
Pa=Ra+2|0;
Ba=0|t[Pa>>0];
Ca=Ba<<24>>24==36;
La=Ra+3|0;
we=Ca?La:Sa;
p=Ca?1:Y;
tu=Ca?ru:-1;
L=tu;
te=p;
lu=we;
}else{
L=-1;
te=Y;
lu=Sa;
}
n[Da>>2]=lu;
Na=0|t[lu>>0];
xa=Na<<24>>24;
Ua=xa+-32|0;
Fa=Ua>>>0<32;
r:do{
if(Fa){
D=0;
ga=Na;
Ha=Ua;
cu=lu;
while(1){
Ya=1<<Ha;
ja=75913&Ya;
Wa=0==(0|ja);
if(Wa){
F=D;
ke=ga;
Qa=cu;
break r;
}
za=Ya|D;
Va=cu+1|0;
n[Da>>2]=Va;
Ka=0|t[Va>>0];
Xa=Ka<<24>>24;
Ga=Xa+-32|0;
Ja=Ga>>>0<32;
if(Ja){
D=za;
ga=Ka;
Ha=Ga;
cu=Va;
}else{
F=za;
ke=Ka;
Qa=Va;
break;
}
}
}else{
F=0;
ke=Na;
Qa=lu;
}
}while(0);
qa=ke<<24>>24==42;
if(qa){
Za=Qa+1|0;
eo=0|t[Za>>0];
ro=eo<<24>>24;
nu=ro+-48|0;
eu=nu>>>0<10;
if(eu){
to=Qa+2|0;
io=0|t[to>>0];
no=io<<24>>24==36;
if(no){
ao=u+(nu<<2)|0;
n[ao>>2]=10;
oo=0|t[Za>>0];
fo=oo<<24>>24;
so=fo+-48|0;
lo=o+(so<<3)|0;
co=lo;
ho=co;
vo=0|n[ho>>2];
po=Qa+3|0;
U=vo;
de=1;
hu=po;
}else vu=23;
}else vu=23;
if(23==(0|vu)){
vu=0;
mo=0==(0|te);
if(!mo){
g=-1;
break;
}
if(Be){
Fo=0|n[a>>2];
yo=Fo;
go=0+4|0;
Go=go;
jo=Go-1|0;
bo=yo+jo|0;
wo=0+4|0;
qo=wo;
$o=qo-1|0;
Jo=-1^$o;
Ao=bo&Jo;
To=Ao;
Eo=0|n[To>>2];
Yo=To+4|0;
n[a>>2]=Yo;
U=Eo;
de=0;
hu=Za;
}else{
U=0;
de=0;
hu=Za;
}
}
n[Da>>2]=hu;
Mo=(0|U)<0;
ko=8192|F;
Ro=0-U|0;
h=Mo?ko:F;
c=Mo?Ro:U;
Q=c;
ee=h;
ge=de;
Bo=hu;
}else{
Io=0|or(Da);
Oo=(0|Io)<0;
if(Oo){
g=-1;
break;
}
Re=0|n[Da>>2];
Q=Io;
ee=F;
ge=te;
Bo=Re;
}
Po=0|t[Bo>>0];
Co=Po<<24>>24==46;
do{
if(Co){
Lo=Bo+1|0;
No=0|t[Lo>>0];
xo=No<<24>>24==42;
if(!xo){
pr=Bo+1|0;
n[Da>>2]=pr;
_r=0|or(Da);
Oe=0|n[Da>>2];
N=_r;
Ie=Oe;
break;
}
Uo=Bo+2|0;
Ce=0|t[Uo>>0];
Le=Ce<<24>>24;
iu=Le+-48|0;
Qo=iu>>>0<10;
if(Qo){
Ne=Bo+3|0;
xe=0|t[Ne>>0];
Ue=xe<<24>>24==36;
if(Ue){
De=u+(iu<<2)|0;
n[De>>2]=10;
Ye=0|t[Uo>>0];
He=Ye<<24>>24;
je=He+-48|0;
We=o+(je<<3)|0;
Ke=We;
Xe=Ke;
Ge=0|n[Xe>>2];
Je=Bo+4|0;
n[Da>>2]=Je;
N=Ge;
Ie=Je;
break;
}
}
$e=0==(0|ge);
if(!$e){
g=-1;
break e;
}
if(Be){
Do=0|n[a>>2];
qe=Do;
Qe=0+4|0;
zo=Qe;
Wo=zo-1|0;
rr=qe+Wo|0;
tr=0+4|0;
Xo=tr;
Ko=Xo-1|0;
Vo=-1^Ko;
ir=rr&Vo;
nr=ir;
vr=0|n[nr>>2];
Ho=nr+4|0;
n[a>>2]=Ho;
wa=vr;
}else wa=0;
n[Da>>2]=Uo;
N=wa;
Ie=Uo;
}else{
N=-1;
Ie=Bo;
}
}while(0);
C=0;
yr=Ie;
while(1){
mr=0|t[yr>>0];
gr=mr<<24>>24;
wr=gr+-65|0;
Ar=wr>>>0>57;
if(Ar){
g=-1;
break e;
}
Tr=yr+1|0;
n[Da>>2]=Tr;
Er=0|t[yr>>0];
Mr=Er<<24>>24;
kr=Mr+-65|0;
Rr=(3536+(58*C|0)|0)+kr|0;
Ir=0|t[Rr>>0];
Or=255&Ir;
Pr=Or+-1|0;
Cr=Pr>>>0<8;
if(Cr){
C=Or;
yr=Tr;
}else break;
}
Lr=Ir<<24>>24==0;
if(Lr){
g=-1;
break;
}
Nr=Ir<<24>>24==19;
xr=(0|L)>-1;
do{
if(Nr){
if(xr){
g=-1;
break e;
}else vu=49;}else
{
if(xr){
Ur=u+(L<<2)|0;
n[Ur>>2]=Or;
Fr=o+(L<<3)|0;
Dr=Fr;
Yr=Dr;
Hr=0|n[Yr>>2];
jr=Dr+4|0;
zr=jr;
Vr=0|n[zr>>2];
Kr=$a;
Xr=Kr;
n[Xr>>2]=Hr;
Gr=Kr+4|0;
Jr=Gr;
n[Jr>>2]=Vr;
vu=49;
break;
}
if(!Be){
g=0;
break e;
}
ur($a,Or,a);
}
}while(0);
if(49==(0|vu)){
vu=0;
if(!Be){
I=0;
O=$;
Y=ge;
ri=Tr;
continue;
}
}
$r=0|t[yr>>0];
qr=$r<<24>>24;
Zr=0!=(0|C);
Qr=15&qr;
rt=3==(0|Qr);
uu=Zr&rt;
tt=-33&qr;
E=uu?tt:qr;
it=8192&ee;
nt=0==(0|it);
at=-65537&ee;
re=nt?ee:at;
r:do{
switch(0|E){
case 110:
du=255&C;
switch(du<<24>>24){
case 0:
dt=0|n[$a>>2];
n[dt>>2]=$;
I=0;
O=$;
Y=ge;
ri=Tr;
continue e;
break;
case 1:
vt=0|n[$a>>2];
n[vt>>2]=$;
I=0;
O=$;
Y=ge;
ri=Tr;
continue e;
break;
case 2:
pt=(0|$)<0;
_t=pt<<31>>31;
mt=0|n[$a>>2];
yt=mt;
gt=yt;
n[gt>>2]=$;
bt=yt+4|0;
wt=bt;
n[wt>>2]=_t;
I=0;
O=$;
Y=ge;
ri=Tr;
continue e;
break;
case 3:
Tt=65535&$;
Et=0|n[$a>>2];
i[Et>>1]=Tt;
I=0;
O=$;
Y=ge;
ri=Tr;
continue e;
break;
case 4:
Mt=255&$;
kt=0|n[$a>>2];
t[kt>>0]=Mt;
I=0;
O=$;
Y=ge;
ri=Tr;
continue e;
break;
case 6:
St=0|n[$a>>2];
n[St>>2]=$;
I=0;
O=$;
Y=ge;
ri=Tr;
continue e;
break;
case 7:
Rt=(0|$)<0;
It=Rt<<31>>31;
Ot=0|n[$a>>2];
Pt=Ot;
Bt=Pt;
n[Bt>>2]=$;
Lt=Pt+4|0;
Nt=Lt;
n[Nt>>2]=It;
I=0;
O=$;
Y=ge;
ri=Tr;
continue e;
break;
default:
I=0;
O=$;
Y=ge;
ri=Tr;
continue e;}

break;
case 112:
xt=N>>>0>8;
Ut=xt?N:8;
Ft=8|re;
K=120;
Z=Ut;
ye=Ft;
vu=61;
break;
case 88:
case 120:
K=E;
Z=N;
ye=re;
vu=61;
break;
case 111:
ti=$a;
ii=ti;
ni=0|n[ii>>2];
ai=ti+4|0;
oi=ai;
ui=0|n[oi>>2];
fi=0|sr(ni,ui,Ve);
si=8&re;
li=0==(0|si);
ci=fi;
di=er-ci|0;
vi=(0|N)>(0|di);
pi=di+1|0;
_i=li|vi;
x=_i?N:pi;
b=fi;
V=0;
X=4e3;
se=x;
Te=re;
ji=ni;
zi=ui;
vu=67;
break;
case 105:
case 100:
mi=$a;
yi=mi;
gi=0|n[yi>>2];
bi=mi+4|0;
wi=bi;
Ai=0|n[wi>>2];
Ei=(0|Ai)<0;
if(Ei){
Mi=0|Sr(0,0,0|gi,0|Ai);
ki=y;
Si=$a;
Ri=Si;
n[Ri>>2]=Mi;
Ii=Si+4|0;
Oi=Ii;
n[Oi>>2]=ki;
T=1;
M=4e3;
Ui=Mi;
Fi=ki;
vu=66;
break r;
}else{
Pi=2048&re;
Bi=0==(0|Pi);
Ci=1&re;
Ni=0==(0|Ci);
f=Ni?4e3:4002;
l=Bi?f:4001;
xi=2049&re;
au=0!=(0|xi);
ve=1&au;
T=ve;
M=l;
Ui=gi;
Fi=Ai;
vu=66;
break r;
}
break;
case 117:
ot=$a;
ut=ot;
ft=0|n[ut>>2];
st=ot+4|0;
lt=st;
ht=0|n[lt>>2];
T=0;
M=4e3;
Ui=ft;
Fi=ht;
vu=66;
break;
case 99:
rn=$a;
nn=rn;
an=0|n[nn>>2];
on=255&an;
t[br>>0]=on;
ie=br;
ne=0;
ae=4e3;
fe=Ve;
Ee=1;
Me=at;
break;
case 109:
un=0|Fe();
fn=0|n[un>>2];
sn=0|ze(fn);
W=sn;
vu=71;
break;
case 115:
ln=0|n[$a>>2];
hn=(0|ln)!=(0|0);
dn=hn?ln:4010;
W=dn;
vu=71;
break;
case 67:
bn=$a;
wn=bn;
Tn=0|n[wn>>2];
n[_o>>2]=Tn;
n[Br>>2]=0;
n[$a>>2]=_o;
Ae=-1;
Aa=_o;
vu=75;
break;
case 83:
Pe=0|n[$a>>2];
En=0==(0|N);
if(En){
cr(e,32,Q,0,re);
S=0;
vu=84;
}else{
Ae=N;
Aa=Pe;
vu=75;
}
break;
case 65:
case 71:
case 70:
case 69:
case 97:
case 103:
case 102:
case 101:
Gn=+s[$a>>3];
Jn=0|dr(e,Gn,Q,N,re,E);
I=Jn;
O=$;
Y=ge;
ri=Tr;
continue e;
break;
default:
ie=ri;
ne=0;
ae=4e3;
fe=Ve;
Ee=N;
Me=re;}

}while(0);
r:do{
if(61==(0|vu)){
vu=0;
Dt=$a;
Yt=Dt;
Ht=0|n[Yt>>2];
jt=Dt+4|0;
Wt=jt;
Vt=0|n[Wt>>2];
Kt=32&K;
Xt=0|fr(Ht,Vt,Ve,Kt);
Gt=0==(0|Ht);
Jt=0==(0|Vt);
$t=Gt&Jt;
qt=8&ye;
Zt=0==(0|qt);
fu=Zt|$t;
Qt=K>>4;
ei=4e3+Qt|0;
pe=fu?4e3:ei;
_e=fu?0:2;
b=Xt;
V=_e;
X=pe;
se=Z;
Te=ye;
ji=Ht;
zi=Vt;
vu=67;
}else if(66==(0|vu)){
vu=0;
Di=0|lr(Ui,Fi,Ve);
b=Di;
V=T;
X=M;
se=N;
Te=re;
ji=Ui;
zi=Fi;
vu=67;
}else if(71==(0|vu)){
vu=0;
vn=0|Ze(W,0,N);
pn=(0|vn)==(0|0);
_n=vn;
mn=W;
yn=_n-mn|0;
gn=W+N|0;
me=pn?N:yn;
q=pn?gn:vn;
ie=W;
ne=0;
ae=4e3;
fe=q;
Ee=me;
Me=at;
}else if(75==(0|vu)){
vu=0;
A=Aa;
R=0;
J=0;
while(1){
Mn=0|n[A>>2];
kn=0==(0|Mn);
if(kn){
k=R;
ue=J;
break;
}
Sn=0|hr(So,Mn);
Rn=(0|Sn)<0;
In=Ae-R|0;
Pn=Sn>>>0>In>>>0;
su=Rn|Pn;
if(su){
k=R;
ue=Sn;
break;
}
Bn=A+4|0;
Cn=Sn+R|0;
Ln=Ae>>>0>Cn>>>0;
if(Ln){
A=Bn;
R=Cn;
J=Sn;
}else{
k=Cn;
ue=Sn;
break;
}
}
Nn=(0|ue)<0;
if(Nn){
g=-1;
break e;
}
cr(e,32,Q,k,re);
xn=0==(0|k);
if(xn){
S=0;
vu=84;
}else{
z=Aa;
G=0;
while(1){
Un=0|n[z>>2];
Fn=0==(0|Un);
if(Fn){
S=k;
vu=84;
break r;
}
Dn=0|hr(So,Un);
Yn=Dn+G|0;
jn=(0|Yn)>(0|k);
if(jn){
S=k;
vu=84;
break r;
}
Wn=z+4|0;
ar(e,So,Dn);
zn=Yn>>>0<k>>>0;
if(zn){
z=Wn;
G=Yn;
}else{
S=k;
vu=84;
break;
}
}
}
}
}while(0);
if(67==(0|vu)){
vu=0;
Yi=(0|se)>-1;
Hi=-65537&Te;
_=Yi?Hi:Te;
Wi=0!=(0|ji);
Ki=0!=(0|zi);
Xi=Wi|Ki;
Gi=0!=(0|se);
ou=Gi|Xi;
Ji=b;
$i=er-Ji|0;
qi=1^Xi;
Zi=1&qi;
Qi=Zi+$i|0;
en=(0|se)>(0|Qi);
le=en?se:Qi;
ce=ou?le:se;
w=ou?b:Ve;
ie=w;
ne=V;
ae=X;
fe=Ve;
Ee=ce;
Me=_;
}else if(84==(0|vu)){
vu=0;
Vn=8192^re;
cr(e,32,Q,S,Vn);
Kn=(0|Q)>(0|S);
Xn=Kn?Q:S;
I=Xn;
O=$;
Y=ge;
ri=Tr;
continue;
}
$n=fe;
qn=ie;
Qn=$n-qn|0;
ea=(0|Ee)<(0|Qn);
m=ea?Qn:Ee;
ra=m+ne|0;
ta=(0|Q)<(0|ra);
he=ta?ra:Q;
cr(e,32,he,ra,Me);
ar(e,ae,ne);
ia=65536^Me;
cr(e,48,he,ra,ia);
cr(e,48,m,Qn,0);
ar(e,ie,Qn);
na=8192^Me;
cr(e,32,he,ra,na);
I=he;
O=$;
Y=ge;
ri=Tr;
}
e:do{
if(87==(0|vu)){
aa=(0|e)==(0|0);
if(aa){
oa=0==(0|Y);
if(oa)g=0;else
{
oe=1;
while(1){
ua=u+(oe<<2)|0;
fa=0|n[ua>>2];
la=0==(0|fa);
if(la){
be=oe;
break;
}
ca=o+(oe<<3)|0;
ur(ca,fa,a);
ha=oe+1|0;
da=(0|ha)<10;
if(da)oe=ha;else
{
g=1;
break e;
}
}
while(1){
_a=u+(be<<2)|0;
ma=0|n[_a>>2];
ya=0==(0|ma);
va=be+1|0;
if(!ya){
g=-1;
break e;
}
pa=(0|va)<10;
if(pa)be=va;else
{
g=1;
break;
}
}
}
}else g=$;
}
}while(0);
d=pu;
return 0|g;
}

function ar(e,r,t){
e|=0;
r|=0;
t|=0;
var i=0,
a=0,
o=0;
i=0|n[e>>2];
a=32&i;
o=0==(0|a);
if(o)0|gr(r,t,e);
return;
}

function or(e){
e|=0;
var r=0,
i=0,
a=0,
o=0,
u=0,
f=0,
s=0,
l=0,
c=0,
h=0,
d=0,
v=0,
p=0,
_=0,
m=0,
y=0;
a=0|n[e>>2];
o=0|t[a>>0];
u=o<<24>>24;
m=u+-48|0;
p=m>>>0<10;
if(p){
i=0;
c=a;
y=m;
while(1){
f=10*i|0;
s=y+f|0;
l=c+1|0;
n[e>>2]=l;
h=0|t[l>>0];
d=h<<24>>24;
_=d+-48|0;
v=_>>>0<10;
if(v){
i=s;
c=l;
y=_;
}else{
r=s;
break;
}
}
}else r=0;
return 0|r;
}

function ur(e,r,t){
e|=0;
r|=0;
t|=0;
var i=0,
a=0,
o=0,
u=0,
f=0,
l=0,
c=0,
h=0,
d=0,
v=0,
p=0,
_=0,
m=0,
y=0,
g=0,
b=0,
w=0,
A=0,
T=0,
E=0;
var M=0,
k=0,
S=0,
R=0,
I=0,
O=0,
P=0,
B=0,
C=0,
L=0,
N=0,
x=0,
U=0,
F=0,
D=0,
Y=0,
H=0,
j=0,
W=0,
z=0;
var V=0,
K=0,
X=0,
G=0,
J=0,
$=0,
q=0,
Z=0,
Q=0,
ee=0,
re=0,
te=0,
ie=0,
ne=0,
ae=0,
oe=0,
ue=0,
fe=0,
se=0,
le=0;
var ce=0,
he=0,
de=0,
ve=0,
pe=0,
_e=0,
me=0,
ye=0,
ge=0,
be=0,
we=0,
Ae=0,
Te=0,
Ee=0,
Me=0,
ke=0,
Se=0,
Re=0,
Ie=0,
Oe=0;
var Pe=0,
Be=0,
Ce=0,
Le=0,
Ne=0,
xe=0,
Ue=0,
Fe=0,
De=0,
Ye=0,
He=0,
je=0,
We=0,
ze=0,
Ve=0,
Ke=0,
Xe=0,
Ge=0,
Je=0,
$e=0;
var qe=0,
Ze=0,
Qe=0,
er=0,
rr=0,
tr=0,
ir=0,
nr=0,
ar=0,
or=0,
ur=0,
fr=0,
sr=0,
lr=0,
cr=0,
hr=0,
dr=0,
vr=0,
pr=0,
_r=0;
var mr=0,
yr=0,
gr=0,
br=0,
wr=0,
Ar=0,
Tr=0,
Er=0,
Mr=0,
kr=0,
Sr=0,
Rr=0,
Ir=0,
Or=0,
Pr=0,
Br=0,
Cr=0,
Lr=0,
Nr=0,
xr=0;
var Ur=0,
Fr=0,
Dr=0,
Yr=0,
Hr=0,
jr=0,
Wr=0,
zr=0,
Vr=0,
Kr=0,
Xr=0,
Gr=0,
Jr=0,
$r=0,
qr=0,
Zr=0,
Qr=0,
et=0,
rt=0,
tt=0;
var it=0,
nt=0,
at=0,
ot=0,
ut=0,
ft=0,
st=0,
lt=0,
ct=0,
ht=0,
dt=0,
vt=0,
pt=0,
_t=0,
mt=0,
yt=0,
gt=0,
bt=0,
wt=0,
At=0;
var Tt=0,
Et=0,
Mt=0,
kt=0,
St=0,
Rt=0;
z=r>>>0>20;
e:do{
if(!z)
do{
switch(0|r){
case 9:
dr=0|n[t>>2];
re=dr;
he=0+4|0;
Lr=he;
Cr=Lr-1|0;
Te=re+Cr|0;
Le=0+4|0;
Ur=Le;
xr=Ur-1|0;
Nr=-1^xr;
Ve=Te&Nr;
tr=Ve;
o=0|n[tr>>2];
Tr=tr+4|0;
n[t>>2]=Tr;
n[e>>2]=o;
break e;
break;
case 10:
mr=0|n[t>>2];
y=mr;
k=0+4|0;
Dr=k;
Fr=Dr-1|0;
S=y+Fr|0;
R=0+4|0;
jr=R;
Hr=jr-1|0;
Yr=-1^Hr;
I=S&Yr;
O=I;
P=0|n[O>>2];
Or=O+4|0;
n[t>>2]=Or;
B=(0|P)<0;
C=B<<31>>31;
L=e;
N=L;
n[N>>2]=P;
x=L+4|0;
U=x;
n[U>>2]=C;
break e;
break;
case 11:
wr=0|n[t>>2];
F=wr;
D=0+4|0;
zr=D;
Wr=zr-1|0;
Y=F+Wr|0;
H=0+4|0;
Xr=H;
Kr=Xr-1|0;
Vr=-1^Kr;
j=Y&Vr;
W=j;
V=0|n[W>>2];
Pr=W+4|0;
n[t>>2]=Pr;
K=e;
X=K;
n[X>>2]=V;
G=K+4|0;
J=G;
n[J>>2]=0;
break e;
break;
case 12:
Ar=0|n[t>>2];
$=Ar;
q=0+8|0;
Jr=q;
Gr=Jr-1|0;
Z=$+Gr|0;
Q=0+8|0;
Zr=Q;
qr=Zr-1|0;
$r=-1^qr;
ee=Z&$r;
te=ee;
ie=te;
ne=ie;
ae=0|n[ne>>2];
oe=ie+4|0;
ue=oe;
fe=0|n[ue>>2];
Br=te+8|0;
n[t>>2]=Br;
se=e;
le=se;
n[le>>2]=ae;
ce=se+4|0;
de=ce;
n[de>>2]=fe;
break e;
break;
case 13:
vr=0|n[t>>2];
ve=vr;
pe=0+4|0;
et=pe;
Qr=et-1|0;
_e=ve+Qr|0;
me=0+4|0;
it=me;
tt=it-1|0;
rt=-1^tt;
ye=_e&rt;
ge=ye;
be=0|n[ge>>2];
Er=ge+4|0;
n[t>>2]=Er;
we=65535&be;
Ae=we<<16>>16;
Ee=(0|Ae)<0;
Me=Ee<<31>>31;
ke=e;
Se=ke;
n[Se>>2]=Ae;
Re=ke+4|0;
Ie=Re;
n[Ie>>2]=Me;
break e;
break;
case 14:
pr=0|n[t>>2];
Oe=pr;
Pe=0+4|0;
at=Pe;
nt=at-1|0;
Be=Oe+nt|0;
Ce=0+4|0;
ft=Ce;
ut=ft-1|0;
ot=-1^ut;
Ne=Be&ot;
xe=Ne;
Ue=0|n[xe>>2];
Mr=xe+4|0;
n[t>>2]=Mr;
a=65535&Ue;
Fe=e;
De=Fe;
n[De>>2]=a;
Ye=Fe+4|0;
He=Ye;
n[He>>2]=0;
break e;
break;
case 15:
_r=0|n[t>>2];
je=_r;
We=0+4|0;
lt=We;
st=lt-1|0;
ze=je+st|0;
Ke=0+4|0;
dt=Ke;
ht=dt-1|0;
ct=-1^ht;
Xe=ze&ct;
Ge=Xe;
Je=0|n[Ge>>2];
kr=Ge+4|0;
n[t>>2]=kr;
$e=255&Je;
qe=$e<<24>>24;
Ze=(0|qe)<0;
Qe=Ze<<31>>31;
er=e;
rr=er;
n[rr>>2]=qe;
ir=er+4|0;
nr=ir;
n[nr>>2]=Qe;
break e;
break;
case 16:
yr=0|n[t>>2];
ar=yr;
or=0+4|0;
pt=or;
vt=pt-1|0;
ur=ar+vt|0;
fr=0+4|0;
yt=fr;
mt=yt-1|0;
_t=-1^mt;
sr=ur&_t;
lr=sr;
cr=0|n[lr>>2];
Sr=lr+4|0;
n[t>>2]=Sr;
i=255&cr;
hr=e;
u=hr;
n[u>>2]=i;
f=hr+4|0;
l=f;
n[l>>2]=0;
break e;
break;
case 17:
gr=0|n[t>>2];
c=gr;
h=0+8|0;
bt=h;
gt=bt-1|0;
d=c+gt|0;
v=0+8|0;
Tt=v;
At=Tt-1|0;
wt=-1^At;
p=d&wt;
_=p;
m=+s[_>>3];
Rr=_+8|0;
n[t>>2]=Rr;
s[e>>3]=m;
break e;
break;
case 18:
br=0|n[t>>2];
g=br;
b=0+8|0;
Mt=b;
Et=Mt-1|0;
w=g+Et|0;
A=0+8|0;
Rt=A;
St=Rt-1|0;
kt=-1^St;
T=w&kt;
E=T;
M=+s[E>>3];
Ir=E+8|0;
n[t>>2]=Ir;
s[e>>3]=M;
break e;
break;
default:
break e;}

}while(0);
}while(0);
return;
}

function fr(e,r,i,n){
e|=0;
r|=0;
i|=0;
n|=0;
var a=0,
o=0,
u=0,
f=0,
s=0,
l=0,
c=0,
h=0,
d=0,
v=0,
p=0,
_=0,
m=0,
g=0,
b=0,
w=0,
A=0,
T=0,
E=0;
g=0==(0|e);
b=0==(0|r);
w=g&b;
if(w)a=i;else
{
o=i;
h=r;
T=e;
while(1){
A=15&T;
E=4052+A|0;
u=0|t[E>>0];
f=255&u;
s=f|n;
l=255&s;
c=o+-1|0;
t[c>>0]=l;
d=0|Or(0|T,0|h,4);
v=y;
p=0==(0|d);
_=0==(0|v);
m=p&_;
if(m){
a=c;
break;
}else{
o=c;
h=v;
T=d;
}
}
}
return 0|a;
}

function sr(e,r,i){
e|=0;
r|=0;
i|=0;
var n=0,
a=0,
o=0,
u=0,
f=0,
s=0,
l=0,
c=0,
h=0,
d=0,
v=0,
p=0,
_=0,
m=0,
g=0,
b=0;
d=0==(0|e);
v=0==(0|r);
p=d&v;
if(p)n=i;else
{
a=i;
u=r;
m=e;
while(1){
_=255&m;
g=7&_;
b=48|g;
o=a+-1|0;
t[o>>0]=b;
f=0|Or(0|m,0|u,3);
s=y;
l=0==(0|f);
c=0==(0|s);
h=l&c;
if(h){
n=o;
break;
}else{
a=o;
u=s;
m=f;
}
}
}
return 0|n;
}

function lr(e,r,i){
e|=0;
r|=0;
i|=0;
var n=0,
a=0,
o=0,
u=0,
f=0,
s=0,
l=0,
c=0,
h=0,
d=0,
v=0,
p=0,
_=0,
m=0,
g=0,
b=0,
w=0,
A=0,
T=0;
var E=0,
M=0,
k=0,
S=0,
R=0,
I=0,
O=0,
P=0,
B=0,
C=0,
L=0,
N=0;
I=r>>>0>0;
O=e>>>0>4294967295;
P=0==(0|r);
B=P&O;
C=I|B;
if(C){
u=i;
L=e;
N=r;
while(1){
l=0|xr(0|L,0|N,10,0);
c=255&l;
h=48|c;
d=u+-1|0;
t[d>>0]=h;
v=0|Lr(0|L,0|N,10,0);
p=y;
_=N>>>0>9;
m=L>>>0>4294967295;
g=9==(0|N);
b=g&m;
w=_|b;
if(w){
u=d;
L=v;
N=p;
}else break;
}
n=v;
o=d;
}else{
n=e;
o=i;
}
A=0==(0|n);
if(A)f=o;else
{
a=n;
s=o;
while(1){
T=(a>>>0)%10&-1;
E=48|T;
M=255&E;
k=s+-1|0;
t[k>>0]=M;
S=(a>>>0)/10&-1;
R=a>>>0<10;
if(R){
f=k;
break;
}else{
a=S;
s=k;
}
}
}
return 0|f;
}

function cr(e,r,t,i,n){
e|=0;
r|=0;
t|=0;
i|=0;
n|=0;
var a=0,
o=0,
u=0,
f=0,
s=0,
l=0,
c=0,
h=0,
p=0,
_=0,
m=0,
y=0,
g=0,
b=0,
w=0,
A=0;
A=d;
d=d+256|0;
if((0|d)>=(0|v))j(256|0);
_=A;
m=73728&n;
y=0==(0|m);
g=(0|t)>(0|i);
w=g&y;
if(w){
b=t-i|0;
u=b>>>0<256;
f=u?b:256;
0|Ir(0|_,0|r,0|f);
s=b>>>0>255;
if(s){
l=t-i|0;
o=b;
while(1){
ar(e,_,256);
c=o+-256|0;
h=c>>>0>255;
if(h)o=c;else
break;
}
p=255&l;
a=p;
}else a=b;
ar(e,_,a);
}
d=A;
return;
}

function hr(e,r){
e|=0;
r|=0;
var t=0,
i=0,
n=0;
i=(0|e)==(0|0);
if(i)t=0;else
{
n=0|mr(e,r);
t=n;
}
return 0|t;
}

function dr(e,r,i,a,o,u){
e|=0;
r=+r;
i|=0;
a|=0;
o|=0;
u|=0;
var f=0,
s=0,
l=0,
c=0,
h=0,
p=0,
_=0,
m=0,
g=0,
b=0,
w=0,
A=0,
T=0,
E=0,
M=0,
k=0,
S=0,
R=0,
I=0,
O=0;
var P=0,
B=0,
L=0,
N=0,
x=0,
U=0,
F=0,
D=0,
Y=0,
H=0,
W=0,
z=0,
V=0,
K=0,
X=0,
G=0,
J=0,
$=0,
q=0,
Z=0;
var Q=0,
ee=0,
re=0,
te=0,
ie=0,
ne=0,
ae=0,
oe=0,
ue=0,
fe=0,
se=0,
le=0,
ce=0,
he=0,
de=0,
ve=0,
pe=0,
_e=0,
me=0,
ye=0;
var ge=0,
be=0,
we=0,
Ae=0,
Te=0,
Ee=0,
Me=0,
ke=0,
Se=0,
Re=0,
Ie=0,
Oe=0,
Pe=0,
Be=0,
Ce=0,
Le=0,
Ne=0,
xe=0,
Ue=0,
Fe=0;
var De=0,
Ye=0,
He=0,
je=0,
We=0,
ze=0,
Ve=0,
Ke=0,
Xe=0,
Ge=0,
Je=0,
$e=0,
qe=0,
Ze=0,
Qe=0,
er=0,
rr=0,
tr=0,
ir=0,
nr=0;
var or=0,
ur=0,
fr=0,
sr=0,
hr=0,
dr=0,
_r=0,
mr=0,
yr=0,
gr=0,
br=0,
wr=0,
Ar=0,
Tr=0,
Er=0,
Mr=0,
kr=0,
Sr=0,
Or=0,
Br=0;
var Cr=0,
Nr=0,
Ur=0,
Fr=0,
Dr=0,
Yr=0,
Hr=0,
jr=0,
Wr=0,
zr=0,
Vr=0,
Kr=0,
Xr=0,
Gr=0,
Jr=0,
$r=0,
qr=0,
Zr=0,
Qr=0,
et=0;
var rt=0,
tt=0,
it=0,
nt=0,
at=0,
ot=0,
ut=0,
ft=0,
st=0,
lt=0,
ct=0,
ht=0,
dt=0,
vt=0,
pt=0,
_t=0,
mt=0,
yt=0;
var gt=0,
bt=0,
wt=0,
At=0,
Tt=0,
Et=0,
Mt=0,
kt=0,
St=0,
Rt=0,
It=0,
Ot=0,
Pt=0,
Bt=0,
Ct=0,
Lt=0,
Nt=0,
xt=0,
Ut=0,
Ft=0;
var Dt=0,
Yt=0,
Ht=0,
jt=0,
Wt=0,
zt=0,
Vt=0,
Kt=0,
Xt=0,
Gt=0,
Jt=0,
$t=0,
qt=0,
Zt=0,
Qt=0,
ei=0,
ri=0,
ti=0,
ii=0,
ni=0;
var ai=0,
oi=0,
ui=0,
fi=0,
si=0,
li=0,
ci=0,
hi=0,
di=0,
vi=0,
pi=0,
_i=0,
mi=0,
yi=0,
gi=0,
bi=0,
wi=0,
Ai=0,
Ti=0,
Ei=0;
var Mi=0,
ki=0,
Si=0,
Ri=0,
Ii=0,
Oi=0,
Pi=0,
Bi=0,
Ci=0,
Li=0,
Ni=0,
xi=0,
Ui=0,
Fi=0,
Di=0,
Yi=0,
Hi=0,
ji=0,
Wi=0,
zi=0;
var Vi=0,
Ki=0,
Xi=0,
Gi=0,
Ji=0,
$i=0,
qi=0,
Zi=0,
Qi=0,
en=0,
rn=0,
tn=0,
nn=0,
an=0,
on=0,
un=0,
fn=0,
sn=0,
ln=0,
cn=0;
var hn=0,
dn=0,
vn=0,
pn=0,
_n=0,
mn=0,
yn=0,
gn=0,
bn=0,
wn=0,
An=0,
Tn=0,
En=0,
Mn=0,
kn=0,
Sn=0,
Rn=0,
In=0,
On=0,
Pn=0;
var Bn=0,
Cn=0,
Ln=0,
Nn=0,
xn=0,
Un=0,
Fn=0,
Dn=0,
Yn=0,
Hn=0,
jn=0,
Wn=0,
zn=0,
Vn=0,
Kn=0,
Xn=0,
Gn=0,
Jn=0,
$n=0,
qn=0;
var Zn=0,
Qn=0,
ea=0,
ra=0,
ta=0,
ia=0,
na=0,
aa=0,
oa=0,
ua=0,
fa=0,
sa=0,
la=0,
ca=0,
ha=0,
da=0,
va=0,
pa=0,
_a=0,
ma=0;
var ya=0,
ga=0,
ba=0,
wa=0,
Aa=0,
Ta=0,
Ea=0,
Ma=0,
ka=0,
Sa=0,
Ra=0,
Ia=0,
Oa=0,
Pa=0,
Ba=0,
Ca=0,
La=0,
Na=0,
xa=0,
Ua=0;
var Fa=0,
Da=0,
Ya=0,
Ha=0,
ja=0,
Wa=0,
za=0,
Va=0,
Ka=0,
Xa=0,
Ga=0,
Ja=0,
$a=0,
qa=0,
Za=0,
Qa=0,
eo=0,
ro=0,
to=0,
io=0;
var no=0,
ao=0,
oo=0,
uo=0,
fo=0,
so=0,
lo=0,
co=0,
ho=0,
vo=0,
po=0,
_o=0,
mo=0,
yo=0,
go=0,
bo=0,
wo=0,
Ao=0,
To=0,
Eo=0;
var Mo=0,
ko=0,
So=0,
Ro=0,
Io=0,
Oo=0,
Po=0,
Bo=0,
Co=0,
Lo=0,
No=0,
xo=0,
Uo=0,
Fo=0,
Do=0,
Yo=0,
Ho=0,
jo=0,
Wo=0,
zo=0;
var Vo=0,
Ko=0,
Xo=0,
Go=0,
Jo=0,
$o=0,
qo=0,
Zo=0,
Qo=0,
eu=0,
ru=0,
tu=0,
iu=0,
nu=0,
au=0,
ou=0,
uu=0,
fu=0,
su=0,
lu=0;
var cu=0,
hu=0,
du=0,
vu=0,
pu=0,
_u=0,
mu=0,
yu=0,
gu=0,
bu=0,
wu=0,
Au=0,
Tu=0,
Eu=0,
Mu=0,
ku=0,
Su=0,
Ru=0,
Iu=0,
Ou=0;
var Pu=0,
Bu=0,
Cu=0,
Lu=0,
Nu=0,
xu=0,
Uu=0,
Fu=0,
Du=0,
Yu=0,
Hu=0,
ju=0,
Wu=0,
zu=0,
Vu=0,
Ku=0,
Xu=0,
Gu=0,
Ju=0,
$u=0;
var qu=0,
Zu=0,
Qu=0,
ef=0,
rf=0,
tf=0,
nf=0,
af=0,
of=0,
uf=0,
ff=0,
sf=0,
lf=0,
cf=0,
hf=0,
df=0,
vf=0,
pf=0,
_f=0,
mf=0;
var yf=0,
gf=0,
bf=0,
wf=0,
Af=0,
Tf=0,
Ef=0,
Mf=0,
kf=0,
Sf=0,
Rf=0,
If=0,
Of=0,
Pf=0,
Bf=0,
Cf=0,
Lf=0,
Nf=0,
xf=0,
Uf=0;
var Ff=0,
Df=0,
Yf=0,
Hf=0,
jf=0,
Wf=0,
zf=0,
Vf=0,
Kf=0,
Xf=0,
Gf=0,
Jf=0,
$f=0,
qf=0;
qf=d;
d=d+560|0;
if((0|d)>=(0|v))j(560|0);
Ku=qf+8|0;
nf=qf;
pf=qf+524|0;
kf=pf;
kr=qf+512|0;
n[nf>>2]=0;
jr=kr+12|0;
0|vr(r);
Qr=y;
lt=(0|Qr)<0;
if(lt){
gt=-r;
M=gt;
D=1;
Y=4017;
}else{
Ot=2048&o;
Ht=0==(0|Ot);
Zt=1&o;
si=0==(0|Zt);
f=si?4018:4023;
s=Ht?f:4020;
bi=2049&o;
Ff=0!=(0|bi);
Ye=1&Ff;
M=r;
D=Ye;
Y=s;
}
0|vr(M);
Pi=y;
ji=2146435072&Pi;
Qi=ji>>>0<2146435072;
cn=0<0;
An=2146435072==(0|ji);
Cn=An&cn;
zn=Qi|Cn;
do{
if(zn){
xo=+pr(M,nf);
Xo=2*xo;
nu=0!=Xo;
if(nu){
pu=0|n[nf>>2];
Mu=pu+-1|0;
n[nf>>2]=Mu;
}
ku=32|u;
Su=97==(0|ku);
if(Su){
Ru=32&u;
Iu=0==(0|Ru);
Ou=Y+9|0;
H=Iu?Y:Ou;
Pu=2|D;
Bu=a>>>0>11;
Cu=12-a|0;
Lu=0==(0|Cu);
Nu=Bu|Lu;
do{
if(Nu)Z=Xo;else
{
N=8;
ae=Cu;
while(1){
xu=ae+-1|0;
Uu=16*N;
Fu=0==(0|xu);
if(Fu)break;else
{
N=Uu;
ae=xu;
}
}
Du=0|t[H>>0];
Yu=Du<<24>>24==45;
if(Yu){
Hu=-Xo;
ju=Hu-Uu;
Wu=Uu+ju;
zu=-Wu;
Z=zu;
break;
}else{
Vu=Xo+Uu;
Xu=Vu-Uu;
Z=Xu;
break;
}
}
}while(0);
Gu=0|n[nf>>2];
Ju=(0|Gu)<0;
$u=0-Gu|0;
qu=Ju?$u:Gu;
Zu=(0|qu)<0;
Qu=Zu<<31>>31;
ef=0|lr(qu,Qu,jr);
rf=(0|ef)==(0|jr);
if(rf){
tf=kr+11|0;
t[tf>>0]=48;
U=tf;
}else U=ef;
af=Gu>>31;of=2&af;
uf=of+43|0;
ff=255&uf;
sf=U+-1|0;
t[sf>>0]=ff;
lf=u+15|0;
cf=255&lf;
hf=U+-2|0;
t[hf>>0]=cf;
Hf=(0|a)<1;
df=8&o;
vf=0==(0|df);
W=pf;
_e=Z;
while(1){
_f=~~_e;
mf=4052+_f|0;
yf=0|t[mf>>0];
gf=255&yf;
bf=gf|Ru;
wf=255&bf;
Af=W+1|0;
t[W>>0]=wf;
Tf=+(0|_f);
Ef=_e-Tf;
Mf=16*Ef;
Sf=Af;
Rf=Sf-kf|0;
If=1==(0|Rf);
if(If){
Yf=0==Mf;
Wf=Hf&Yf;
jf=vf&Wf;
if(jf)se=Af;else
{
Of=W+2|0;
t[Af>>0]=46;
se=Of;
}
}else se=Af;
Pf=0!=Mf;
if(Pf){
W=se;
_e=Mf;
}else break;
}
Bf=0!=(0|a);
Cf=hf;
Lf=jr;
Nf=se;
xf=Nf-kf|0;
Sr=Lf-Cf|0;
Or=xf+-2|0;
Br=(0|Or)<(0|a);
zf=Bf&Br;
Cr=a+2|0;
_r=zf?Cr:xf;
z=Sr+Pu|0;
Nr=z+_r|0;
cr(e,32,i,Nr,o);
ar(e,H,Pu);
Ur=65536^o;
cr(e,48,i,Nr,Ur);
ar(e,pf,xf);
Fr=_r-xf|0;
cr(e,48,Fr,0,0);
ar(e,hf,Sr);
Dr=8192^o;
cr(e,32,i,Nr,Dr);
Mr=Nr;
break;
}
Yr=(0|a)<0;
He=Yr?6:a;
if(nu){
Hr=268435456*Xo;
Wr=0|n[nf>>2];
zr=Wr+-28|0;
n[nf>>2]=zr;
ke=Hr;
yr=zr;
}else{
br=0|n[nf>>2];
ke=Xo;
yr=br;
}
Vr=(0|yr)<0;
Kr=Ku+288|0;
qe=Vr?Ku:Kr;
L=qe;
Ce=ke;
while(1){
Xr=~~Ce>>>0;
n[L>>2]=Xr;
Gr=L+4|0;
Jr=+(Xr>>>0);
$r=Ce-Jr;
qr=1e9*$r;
Zr=0!=qr;
if(Zr){
L=Gr;
Ce=qr;
}else break;
}
et=(0|yr)>0;
if(et){
re=qe;
ne=Gr;
rt=yr;
while(1){
tt=(0|rt)<29;
it=tt?rt:29;
I=ne+-4|0;
nt=I>>>0<re>>>0;
if(nt)be=re;else
{
O=I;
B=0;
while(1){
at=0|n[O>>2];
ot=0|Pr(0|at,0,0|it);
ut=y;
ft=0|Rr(0|ot,0|ut,0|B,0);
st=y;
ct=0|xr(0|ft,0|st,1e9,0);
n[O>>2]=ct;
ht=0|Lr(0|ft,0|st,1e9,0);
R=O+-4|0;
dt=R>>>0<re>>>0;
if(dt)break;else
{
O=R;
B=ht;
}
}
vt=0==(0|ht);
if(vt)be=re;else
{
pt=re+-4|0;
n[pt>>2]=ht;
be=pt;
}
}
we=ne;
while(1){
_t=we>>>0>be>>>0;
if(!_t)break;
mt=we+-4|0;
yt=0|n[mt>>2];
bt=0==(0|yt);
if(bt)we=mt;else
break;
}
wt=0|n[nf>>2];
At=wt-it|0;
n[nf>>2]=At;
Tt=(0|At)>0;
if(Tt){
re=be;
ne=we;
rt=At;
}else{
ee=be;
ie=we;
gr=At;
break;
}
}
}else{
ee=qe;
ie=Gr;
gr=yr;
}
Et=(0|gr)<0;
if(Et){
Mt=He+25|0;
kt=(0|Mt)/9&-1;
St=kt+1|0;
Rt=102==(0|ku);
Ie=ee;
Pe=ie;
Pt=gr;
while(1){
It=0-Pt|0;
Bt=(0|It)<9;
Ct=Bt?It:9;
Lt=Ie>>>0<Pe>>>0;
if(Lt){
Ft=1<<Ct;
Dt=Ft+-1|0;
Yt=1e9>>>Ct;
S=0;
te=Ie;
while(1){
jt=0|n[te>>2];
Wt=jt&Dt;
zt=jt>>>Ct;
Vt=zt+S|0;
n[te>>2]=Vt;
Kt=0|C(Wt,Yt);
Xt=te+4|0;
Gt=Xt>>>0<Pe>>>0;
if(Gt){
S=Kt;
te=Xt;
}else break;
}
Jt=0|n[Ie>>2];
$t=0==(0|Jt);
qt=Ie+4|0;
c=$t?qt:Ie;
Qt=0==(0|Kt);
if(Qt){
p=c;
Ue=Pe;
}else{
ei=Pe+4|0;
n[Pe>>2]=Kt;
p=c;
Ue=ei;
}
}else{
Nt=0|n[Ie>>2];
xt=0==(0|Nt);
Ut=Ie+4|0;
h=xt?Ut:Ie;
p=h;
Ue=Pe;
}
ri=Rt?qe:p;
ti=Ue;
ii=ri;
ni=ti-ii|0;
ai=ni>>2;
oi=(0|ai)>(0|St);
ui=ri+(St<<2)|0;
m=oi?ui:Ue;
fi=0|n[nf>>2];
li=fi+Ct|0;
n[nf>>2]=li;
ci=(0|li)<0;
if(ci){
Ie=p;
Pe=m;
Pt=li;
}else{
Re=p;
Oe=m;
break;
}
}
}else{
Re=ee;
Oe=ie;
}
hi=Re>>>0<Oe>>>0;
di=qe;
if(hi){
vi=Re;
pi=di-vi|0;
_i=pi>>2;
mi=9*_i|0;
yi=0|n[Re>>2];
gi=yi>>>0<10;
if(gi)fe=mi;else
{
F=mi;
G=10;
while(1){
wi=10*G|0;
Ai=F+1|0;
Ti=yi>>>0<wi>>>0;
if(Ti){
fe=Ai;
break;
}else{
F=Ai;
G=wi;
}
}
}
}else fe=0;
Ei=102!=(0|ku);
Mi=Ei?fe:0;
ki=He-Mi|0;
Si=103==(0|ku);
Ri=0!=(0|He);
Ii=Ri&Si;
hr=Ii<<31>>31;
Oi=ki+hr|0;
Bi=Oe;
Ci=Bi-di|0;
Li=Ci>>2;
Ni=9*Li|0;
xi=Ni+-9|0;
Ui=(0|Oi)<(0|xi);
if(Ui){
Fi=qe+4|0;
Di=Oi+9216|0;
Yi=(0|Di)/9&-1;
Hi=Yi+-1024|0;
Wi=Fi+(Hi<<2)|0;
zi=(0|Di)%9&-1;
K=zi+1|0;
Vi=(0|K)<9;
if(Vi){
X=K;
de=10;
while(1){
Ki=10*de|0;
V=X+1|0;
Uf=9==(0|V);
if(Uf){
he=Ki;
break;
}else{
X=V;
de=Ki;
}
}
}else he=10;
Xi=0|n[Wi>>2];
Gi=(Xi>>>0)%(he>>>0)&-1;
Ji=0==(0|Gi);
$i=Wi+4|0;
qi=(0|$i)==(0|Oe);
Vf=qi&Ji;
if(Vf){
xe=Wi;
Fe=fe;
ur=Re;
}else{
Zi=(Xi>>>0)/(he>>>0)&-1;
en=1&Zi;
rn=0==(0|en);
We=rn?9007199254740992:9007199254740994;
tn=(0|he)/2&-1;
nn=Gi>>>0<tn>>>0;
an=(0|Gi)==(0|tn);
Kf=qi&an;
Ze=Kf?1:1.5;
b=nn?.5:Ze;
on=0==(0|D);
if(on){
$=b;
q=We;
}else{
un=0|t[Y>>0];
fn=un<<24>>24==45;
sn=-We;
ln=-b;
g=fn?sn:We;
l=fn?ln:b;
$=l;
q=g;
}
hn=Xi-Gi|0;
n[Wi>>2]=hn;
dn=q+$;
vn=dn!=q;
if(vn){
pn=hn+he|0;
n[Wi>>2]=pn;
_n=pn>>>0>999999999;
if(_n){
Xe=Re;
Er=Wi;
while(1){
mn=Er+-4|0;
n[Er>>2]=0;
yn=mn>>>0<Xe>>>0;
if(yn){
gn=Xe+-4|0;
n[gn>>2]=0;
er=gn;
}else er=Xe;
bn=0|n[mn>>2];
wn=bn+1|0;
n[mn>>2]=wn;
Tn=wn>>>0>999999999;
if(Tn){
Xe=er;
Er=mn;
}else{
Ke=er;
Tr=mn;
break;
}
}
}else{
Ke=Re;
Tr=Wi;
}
En=Ke;
Mn=di-En|0;
kn=Mn>>2;
Sn=9*kn|0;
Rn=0|n[Ke>>2];
In=Rn>>>0<10;
if(In){
xe=Tr;
Fe=Sn;
ur=Ke;
}else{
Te=Sn;
Me=10;
while(1){
On=10*Me|0;
Pn=Te+1|0;
Bn=Rn>>>0<On>>>0;
if(Bn){
xe=Tr;
Fe=Pn;
ur=Ke;
break;
}else{
Te=Pn;
Me=On;
}
}
}
}else{
xe=Wi;
Fe=fe;
ur=Re;
}
}
Ln=xe+4|0;
Nn=Oe>>>0>Ln>>>0;
_=Nn?Ln:Oe;
Je=Fe;
or=_;
fr=ur;
}else{
Je=fe;
or=Oe;
fr=Re;
}
ir=or;
while(1){
xn=ir>>>0>fr>>>0;
if(!xn){
sr=0;
break;
}
Un=ir+-4|0;
Fn=0|n[Un>>2];
Dn=0==(0|Fn);
if(Dn)ir=Un;else
{
sr=1;
break;
}
}
Yn=0-Je|0;
do{
if(Si){
Df=1^Ri;
Hn=1&Df;
je=Hn+He|0;
jn=(0|je)>(0|Je);
Wn=(0|Je)>-5;
Gf=jn&Wn;
if(Gf){
Vn=u+-1|0;
dr=je+-1|0;
Kn=dr-Je|0;
k=Vn;
me=Kn;
}else{
Xn=u+-2|0;
Gn=je+-1|0;
k=Xn;
me=Gn;
}
Jn=8&o;
$n=0==(0|Jn);
if($n){
if(sr){
qn=ir+-4|0;
Zn=0|n[qn>>2];
Qn=0==(0|Zn);
if(Qn)Ee=9;else
{
ea=(Zn>>>0)%10&-1;
ta=0==(0|ea);
if(ta){
ce=0;
Be=10;
while(1){
ia=10*Be|0;
na=ce+1|0;
aa=(Zn>>>0)%(ia>>>0)&-1;
oa=0==(0|aa);
if(oa){
ce=na;
Be=ia;
}else{
Ee=na;
break;
}
}
}else Ee=0;
}
}else Ee=9;
ua=32|k;
fa=102==(0|ua);
sa=ir;
la=sa-di|0;
ca=la>>2;
da=9*ca|0;
va=da+-9|0;
if(fa){
pa=va-Ee|0;
_a=(0|pa)>0;
ze=_a?pa:0;
ma=(0|me)<(0|ze);
ye=ma?me:ze;
Q=k;
Se=ye;
wr=0;
break;
}else{
ya=va+Je|0;
ga=ya-Ee|0;
ba=(0|ga)>0;
Ve=ba?ga:0;
wa=(0|me)<(0|Ve);
ge=wa?me:Ve;
Q=k;
Se=ge;
wr=0;
break;
}
}else{
Q=k;
Se=me;
wr=Jn;
}
}else{
Ar=8&o;
Q=u;
Se=He;
wr=Ar;
}
}while(0);
Aa=Se|wr;
Ea=0!=(0|Aa);
Ma=1&Ea;
ka=32|Q;
Sa=102==(0|ka);
if(Sa){
Ra=(0|Je)>0;
Ia=Ra?Je:0;
Ae=0;
mr=Ia;
}else{
Oa=(0|Je)<0;
Pa=Oa?Yn:Je;
Ba=(0|Pa)<0;
Ca=Ba<<31>>31;
Na=0|lr(Pa,Ca,jr);
xa=jr;
Ua=Na;
Fa=xa-Ua|0;
Da=(0|Fa)<2;
if(Da){
ue=Na;
while(1){
Ya=ue+-1|0;
t[Ya>>0]=48;
Ha=Ya;
ja=xa-Ha|0;
Wa=(0|ja)<2;
if(Wa)ue=Ya;else
{
oe=Ya;
break;
}
}
}else oe=Na;
za=Je>>31;
Ka=2&za;
Xa=Ka+43|0;
Ga=255&Xa;
Ja=oe+-1|0;
t[Ja>>0]=Ga;
$a=255&Q;
qa=oe+-2|0;
t[qa>>0]=$a;
Za=qa;
Qa=xa-Za|0;
Ae=qa;
mr=Qa;
}
eo=D+1|0;
ro=eo+Se|0;
le=ro+Ma|0;
io=le+mr|0;
cr(e,32,i,io,o);
ar(e,Y,D);
no=65536^o;
cr(e,48,i,io,no);
if(Sa){
ao=fr>>>0>qe>>>0;
P=ao?qe:fr;
oo=pf+9|0;
uo=oo;
fo=pf+8|0;
Ge=P;
while(1){
so=0|n[Ge>>2];
lo=0|lr(so,0,oo);
co=(0|Ge)==(0|P);
if(co){
go=(0|lo)==(0|oo);
if(go){
t[fo>>0]=48;
J=fo;
}else J=lo;
}else{
ho=lo>>>0>pf>>>0;
if(ho){
po=lo;
_o=po-kf|0;
0|Ir(0|pf,48,0|_o);
E=lo;
while(1){
mo=E+-1|0;
yo=mo>>>0>pf>>>0;
if(yo)E=mo;else
{
J=mo;
break;
}
}
}else J=lo;
}
bo=J;
wo=uo-bo|0;
ar(e,J,wo);
Ao=Ge+4|0;
To=Ao>>>0>qe>>>0;
if(To)break;else
Ge=Ao;
}
Eo=0==(0|Aa);
if(!Eo)ar(e,4068,1);
ko=Ao>>>0<ir>>>0;
So=(0|Se)>0;
Ro=ko&So;
if(Ro){
Ne=Se;
rr=Ao;
while(1){
Io=0|n[rr>>2];
Oo=0|lr(Io,0,oo);
Po=Oo>>>0>pf>>>0;
if(Po){
Bo=Oo;
Co=Bo-kf|0;
0|Ir(0|pf,48,0|Co);
T=Oo;
while(1){
Lo=T+-1|0;
No=Lo>>>0>pf>>>0;
if(No)T=Lo;else
{
A=Lo;
break;
}
}
}else A=Oo;
Uo=(0|Ne)<9;
Fo=Uo?Ne:9;
ar(e,A,Fo);
Do=rr+4|0;
Yo=Ne+-9|0;
Ho=Do>>>0<ir>>>0;
jo=(0|Ne)>9;
Wo=Ho&jo;
if(Wo){
Ne=Yo;
rr=Do;
}else{
Le=Yo;
break;
}
}
}else Le=Se;
zo=Le+9|0;
cr(e,48,zo,9,0);
}else{
Vo=fr+4|0;
nr=sr?ir:Vo;
Ko=(0|Se)>-1;
if(Ko){
Go=pf+9|0;
Jo=0==(0|wr);
$o=Go;
qo=0-kf|0;
Zo=pf+8|0;
Qe=Se;
tr=fr;
while(1){
Qo=0|n[tr>>2];
eu=0|lr(Qo,0,Go);
ru=(0|eu)==(0|Go);
if(ru){
t[Zo>>0]=48;
w=Zo;
}else w=eu;
tu=(0|tr)==(0|fr);
do{
if(tu){
uu=w+1|0;
ar(e,w,1);
fu=(0|Qe)<1;
Xf=Jo&fu;
if(Xf){
pe=uu;
break;
}
ar(e,4068,1);
pe=uu;
}else{
iu=w>>>0>pf>>>0;
if(!iu){
pe=w;
break;
}
Jf=w+qo|0;
$f=Jf;
0|Ir(0|pf,48,0|$f);
ve=w;
while(1){
au=ve+-1|0;
ou=au>>>0>pf>>>0;
if(ou)ve=au;else
{
pe=au;
break;
}
}
}
}while(0);
su=pe;
lu=$o-su|0;
cu=(0|Qe)>(0|lu);
hu=cu?lu:Qe;
ar(e,pe,hu);
du=Qe-lu|0;
vu=tr+4|0;
_u=vu>>>0<nr>>>0;
mu=(0|du)>-1;
yu=_u&mu;
if(yu){
Qe=du;
tr=vu;
}else{
De=du;
break;
}
}
}else De=Se;
gu=De+18|0;
cr(e,48,gu,18,0);
bu=jr;
wu=Ae;
Au=bu-wu|0;
ar(e,Ae,Au);
}
Tu=8192^o;
cr(e,32,i,io,Tu);
Mr=io;
}else{
ra=32&u;
ha=0!=(0|ra);
Ta=ha?4036:4040;
La=M!=M|0!=0;
Va=ha?4044:4048;
x=La?Va:Ta;
to=D+3|0;
vo=-65537&o;
cr(e,32,i,to,vo);
ar(e,Y,D);
ar(e,x,3);
Mo=8192^o;
cr(e,32,i,to,Mo);
Mr=to;
}
}while(0);
Eu=(0|Mr)<(0|i);
$e=Eu?i:Mr;
d=qf;
return 0|$e;
}

function vr(e){
e=+e;
var r=0,
t=0;
s[c>>3]=e;
r=0|n[c>>2];
t=0|n[c+4>>2];
y=t;
return 0|r;
}

function pr(e,r){
e=+e;
r|=0;
var t=0;
t=+_r(e,r);
return+t;
}

function _r(e,r){
e=+e;
r|=0;
var t=0,
i=0,
a=0,
o=0,
u=0,
f=0,
l=0,
h=0,
d=0,
v=0,
p=0,
_=0,
m=0,
y=0,
g=0,
b=0,
w=0,
A=0;
s[c>>3]=e;
v=0|n[c>>2];
p=0|n[c+4>>2];
_=0|Or(0|v,0|p,52);
m=65535&_;
A=2047&m;
switch(A<<16>>16){
case 0:
y=0!=e;
if(y){
g=0x10000000000000000*e;
b=+_r(g,r);
a=0|n[r>>2];
o=a+-64|0;
i=b;
w=o;
}else{
i=e;
w=0;
}
n[r>>2]=w;
t=i;
break;
case 2047:
t=e;
break;
default:
u=2047&_;
f=u+-1022|0;
n[r>>2]=f;
l=-2146435073&p;
h=1071644672|l;
n[c>>2]=v;
n[c+4>>2]=h;
d=+s[c>>3];
t=d;}

return+t;
}

function mr(e,r,i){
e|=0;
r|=0;
var a=0,
o=0,
u=0,
f=0,
s=0,
l=0,
c=0,
h=0,
d=0,
v=0,
p=0,
_=0,
m=0,
y=0,
g=0,
b=0,
w=0,
A=0,
T=0,
E=0;
var M=0,
k=0,
S=0,
R=0,
I=0,
O=0,
P=0,
B=0,
C=0,
L=0,
N=0,
x=0,
U=0,
F=0,
D=0,
Y=0,
H=0,
j=0,
W=0,
z=0;
var V=0,
K=0,
X=0,
G=0,
J=0,
$=0,
q=0,
Z=0,
Q=0,
ee=0,
re=0,
te=0,
ie=0,
ne=0,
ae=0,
oe=0,
ue=0;
k=(0|e)==(0|0);
do{
if(k)a=1;else
{
U=r>>>0<128;
if(U){
G=255&r;
t[e>>0]=G;
a=1;
break;
}
te=0|yr();
ie=te+188|0;
ne=0|n[ie>>2];
ae=0|n[ne>>2];
oe=(0|ae)==(0|0);
if(oe){
o=-128&r;
u=57216==(0|o);
if(u){
s=255&r;
t[e>>0]=s;
a=1;
break;
}else{
f=0|Fe();
n[f>>2]=84;
a=-1;
break;
}
}
l=r>>>0<2048;
if(l){
c=r>>>6;
h=192|c;
d=255&h;
v=e+1|0;
t[e>>0]=d;
p=63&r;
_=128|p;
m=255&_;
t[v>>0]=m;
a=2;
break;
}
y=r>>>0<55296;
g=-8192&r;
b=57344==(0|g);
ue=y|b;
if(ue){
w=r>>>12;
A=224|w;
T=255&A;
E=e+1|0;
t[e>>0]=T;
M=r>>>6;
S=63&M;
R=128|S;
I=255&R;
O=e+2|0;
t[E>>0]=I;
P=63&r;
B=128|P;
C=255&B;
t[O>>0]=C;
a=3;
break;
}
L=r+-65536|0;
N=L>>>0<1048576;
if(N){
x=r>>>18;
F=240|x;
D=255&F;
Y=e+1|0;
t[e>>0]=D;
H=r>>>12;
j=63&H;
W=128|j;
z=255&W;
V=e+2|0;
t[Y>>0]=z;
K=r>>>6;
X=63&K;
J=128|X;
$=255&J;
q=e+3|0;
t[V>>0]=$;
Z=63&r;
Q=128|Z;
ee=255&Q;
t[q>>0]=ee;
a=4;
break;
}else{
re=0|Fe();
n[re>>2]=84;
a=-1;
break;
}
}
}while(0);
return 0|a;
}

function yr(){
var e=0;
e=0|Ye();
return 0|e;
}

function gr(e,r,i){
e|=0;
r|=0;
i|=0;
var a=0,
o=0,
u=0,
f=0,
s=0,
l=0,
c=0,
h=0,
d=0,
v=0,
p=0,
_=0,
m=0,
y=0,
g=0,
b=0,
w=0,
A=0,
T=0,
E=0;
var M=0,
k=0,
S=0,
R=0,
I=0,
O=0,
P=0,
B=0,
C=0,
L=0,
N=0,
x=0,
U=0,
F=0,
D=0,
Y=0,
H=0,
j=0,
W=0,
z=0;
var V=0;
C=i+16|0;
D=0|n[C>>2];
Y=(0|D)==(0|0);
if(Y){
j=0|br(i);
W=0==(0|j);
if(W){
c=0|n[C>>2];
p=c;
V=5;
}else u=0;
}else{
H=D;
p=H;
V=5;
}
e:do{
if(5==(0|V)){
z=i+20|0;
d=0|n[z>>2];
v=p-d|0;
_=v>>>0<r>>>0;
m=d;
if(_){
y=i+36|0;
g=0|n[y>>2];
b=0|zr[7&g](i,e,r);
u=b;
break;
}
w=i+75|0;
A=0|t[w>>0];
T=A<<24>>24>-1;
r:do{
if(T){
a=r;
while(1){
E=0==(0|a);
if(E){
f=0;
s=e;
l=r;
N=m;
break r;
}
M=a+-1|0;
k=e+M|0;
S=0|t[k>>0];
R=S<<24>>24==10;
if(R)break;else
a=M;
}
I=i+36|0;
O=0|n[I>>2];
P=0|zr[7&O](i,e,a);
B=P>>>0<a>>>0;
if(B){
u=P;
break e;
}
L=e+a|0;
o=r-a|0;
h=0|n[z>>2];
f=a;
s=L;
l=o;
N=h;
}else{
f=0;
s=e;
l=r;
N=m;
}
}while(0);
0|Ur(0|N,0|s,0|l);
x=0|n[z>>2];
U=x+l|0;
n[z>>2]=U;
F=f+l|0;
u=F;
}
}while(0);
return 0|u;
}

function br(e){
e|=0;
var r=0,
i=0,
a=0,
o=0,
u=0,
f=0,
s=0,
l=0,
c=0,
h=0,
d=0,
v=0,
p=0,
_=0,
m=0,
y=0,
g=0,
b=0,
w=0,
A=0;
var T=0;
i=e+74|0;
p=0|t[i>>0];
m=p<<24>>24;
y=m+255|0;
g=y|m;
b=255&g;
t[i>>0]=b;
w=0|n[e>>2];
A=8&w;
T=0==(0|A);
if(T){
o=e+8|0;
n[o>>2]=0;
u=e+4|0;
n[u>>2]=0;
f=e+44|0;
s=0|n[f>>2];
l=e+28|0;
n[l>>2]=s;
c=e+20|0;
n[c>>2]=s;
h=e+48|0;
d=0|n[h>>2];
v=s+d|0;
_=e+16|0;
n[_>>2]=v;
r=0;
}else{
a=32|w;
n[e>>2]=a;
r=-1;
}
return 0|r;
}

function wr(e,r,t){
e|=0;
r|=0;
t|=0;
var i=0,
a=0,
o=0,
u=0,
f=0,
s=0,
l=0,
c=0,
h=0,
d=0;
u=e+16|0;
f=0|n[u>>2];
s=e+20|0;
l=0|n[s>>2];
c=l;
h=f-c|0;
d=h>>>0>t>>>0;
i=d?t:h;
0|Ur(0|l,0|r,0|i);
a=0|n[s>>2];
o=a+i|0;
n[s>>2]=o;
return 0|t;
}

function Ar(){
X(4644|0);
return 4652|0;
}

function Tr(){
Q(4644|0);
return;
}

function Er(e){
e|=0;
var r=0,
t=0,
i=0,
a=0,
o=0,
u=0,
f=0,
s=0,
l=0,
c=0,
h=0,
d=0,
v=0,
p=0,
_=0,
m=0;
var y=0,
g=0,
b=0,
w=0,
A=0,
T=0,
E=0,
M=0,
k=0,
S=0,
R=0,
I=0,
O=0,
P=0,
B=0;
s=(0|e)==(0|0);
do{
if(s){
O=0|n[94];
P=(0|O)==(0|0);
if(P)E=0;else
{
l=0|n[94];
c=0|Er(l);
E=c;
}
h=0|Ar();
i=0|n[h>>2];
d=(0|i)==(0|0);
if(d)o=E;else
{
a=i;
u=E;
while(1){
v=a+20|0;
p=0|n[v>>2];
m=a+28|0;
y=0|n[m>>2];
g=p>>>0>y>>>0;
if(g){
b=0|Mr(a);
w=b|u;
f=w;
}else f=u;
A=a+56|0;
t=0|n[A>>2];
T=(0|t)==(0|0);
if(T){
o=f;
break;
}else{
a=t;
u=f;
}
}
}
Tr();
r=o;
}else{
_=e+76|0;
M=0|n[_>>2];
k=(0|M)>-1;
if(!k){
S=0|Mr(e);
r=S;
break;
}
R=0|Qe();
B=0==(0|R);
I=0|Mr(e);
if(B)r=I;else
r=I;
}
}while(0);
return 0|r;
}

function Mr(e){
e|=0;
var r=0,
t=0,
i=0,
a=0,
o=0,
u=0,
f=0,
s=0,
l=0,
c=0,
h=0,
d=0,
v=0,
p=0,
_=0,
m=0,
y=0,
g=0,
b=0,
w=0;
var A=0,
T=0;
t=e+20|0;
v=0|n[t>>2];
_=e+28|0;
m=0|n[_>>2];
y=v>>>0>m>>>0;
if(y){
g=e+36|0;
b=0|n[g>>2];
0|zr[7&b](e,0,0);
w=0|n[t>>2];
A=(0|w)==(0|0);
if(A)r=-1;else
T=3;
}else T=3;
if(3==(0|T)){
i=e+4|0;
a=0|n[i>>2];
o=e+8|0;
u=0|n[o>>2];
f=a>>>0<u>>>0;
if(f){
s=a;
l=u;
c=s-l|0;
h=e+40|0;
d=0|n[h>>2];
0|zr[7&d](e,c,1);
}
p=e+16|0;
n[p>>2]=0;
n[_>>2]=0;
n[t>>2]=0;
n[o>>2]=0;
n[i>>2]=0;
r=0;
}
return 0|r;
}

function kr(){}

function Sr(e,r,t,i){
e|=0;
r|=0;
t|=0;
i|=0;
var n=0,
a=0;
n=e-t>>>0;
a=r-i>>>0;
a=r-i-(t>>>0>e>>>0|0)>>>0;
return 0|(y=a,0|n);
}

function Rr(e,r,t,i){
e|=0;
r|=0;
t|=0;
i|=0;
var n=0,
a=0;
n=e+t>>>0;
a=r+i+(n>>>0<e>>>0|0)>>>0;
return 0|(y=a,0|n);
}

function Ir(e,r,i){
e|=0;
r|=0;
i|=0;
var a=0,
o=0,
u=0,
f=0;
a=e+i|0;
r&=255;
if((0|i)>=67){
while(0!=(3&e)){
t[e>>0]=r;
e=e+1|0;
}
o=-4&a|0;
u=o-64|0;
f=r|r<<8|r<<16|r<<24;
while((0|e)<=(0|u)){
n[e>>2]=f;
n[e+4>>2]=f;
n[e+8>>2]=f;
n[e+12>>2]=f;
n[e+16>>2]=f;
n[e+20>>2]=f;
n[e+24>>2]=f;
n[e+28>>2]=f;
n[e+32>>2]=f;
n[e+36>>2]=f;
n[e+40>>2]=f;
n[e+44>>2]=f;
n[e+48>>2]=f;
n[e+52>>2]=f;
n[e+56>>2]=f;
n[e+60>>2]=f;
e=e+64|0;
}
while((0|e)<(0|o)){
n[e>>2]=f;
e=e+4|0;
}
}
while((0|e)<(0|a)){
t[e>>0]=r;
e=e+1|0;
}
return a-i|0;
}

function Or(e,r,t){
e|=0;
r|=0;
t|=0;
var i=0;
if((0|t)<32){
i=(1<<t)-1|0;
y=r>>>t;
return e>>>t|(r&i)<<32-t;
}
y=0;
return r>>>t-32|0;
}

function Pr(e,r,t){
e|=0;
r|=0;
t|=0;
var i=0;
if((0|t)<32){
i=(1<<t)-1|0;
y=r<<t|(e&i<<32-t)>>>32-t;
return e<<t;
}
y=e<<t-32;
return 0;
}

function Br(e){
e|=0;
var r=0;
r=0|t[p+(255&e)>>0];
if((0|r)<8)return 0|r;
r=0|t[p+(e>>8&255)>>0];
if((0|r)<8)return r+8|0;
r=0|t[p+(e>>16&255)>>0];
if((0|r)<8)return r+16|0;
return(0|t[p+(e>>>24)>>0])+24|0;
}

function Cr(e,r,t,i,a){
e|=0;
r|=0;
t|=0;
i|=0;
a|=0;
var o=0,
u=0,
f=0,
s=0,
l=0,
c=0,
h=0,
d=0,
v=0,
p=0,
_=0,
m=0,
g=0,
b=0,
w=0,
A=0,
T=0,
E=0,
M=0,
k=0,
S=0,
R=0,
I=0,
O=0,
P=0,
B=0,
C=0,
L=0,
N=0,
U=0,
F=0,
D=0,
Y=0,
H=0,
j=0,
W=0,
z=0,
V=0,
K=0,
X=0,
G=0,
J=0,
$=0,
q=0,
Z=0,
Q=0,
ee=0,
re=0,
te=0,
ie=0,
ne=0,
ae=0,
oe=0,
ue=0,
fe=0,
se=0,
le=0,
ce=0,
he=0,
de=0,
ve=0,
pe=0,
_e=0,
me=0;
o=e;
u=r;
f=u;
s=t;
l=i;
c=l;
if(0==(0|f)){
h=0!=(0|a);
if(0==(0|c)){
if(h){
n[a>>2]=(o>>>0)%(s>>>0);
n[a+4>>2]=0;
}
me=0;
_e=(o>>>0)/(s>>>0)>>>0;
return 0|(y=me,_e);
}else{
if(!h){
me=0;
_e=0;
return 0|(y=me,_e);
}
n[a>>2]=-1&e;
n[a+4>>2]=0&r;
me=0;
_e=0;
return 0|(y=me,_e);
}
}
d=0==(0|c);
do{
if(0==(0|s)){
if(d){
if(0!=(0|a)){
n[a>>2]=(f>>>0)%(s>>>0);
n[a+4>>2]=0;
}
me=0;
_e=(f>>>0)/(s>>>0)>>>0;
return 0|(y=me,_e);
}
if(0==(0|o)){
if(0!=(0|a)){
n[a>>2]=0;
n[a+4>>2]=(f>>>0)%(c>>>0);
}
me=0;
_e=(f>>>0)/(c>>>0)>>>0;
return 0|(y=me,_e);
}
v=c-1|0;
if(0==(v&c|0)){
if(0!=(0|a)){
n[a>>2]=0|-1&e;
n[a+4>>2]=v&f|0&r;
}
me=0;
_e=f>>>((0|Br(0|c))>>>0);
return 0|(y=me,_e);
}
p=0|x(0|c);
_=p-(0|x(0|f))|0;
if(_>>>0<=30){
m=_+1|0;
g=31-_|0;
D=m;
F=f<<g|o>>>(m>>>0);
U=f>>>(m>>>0);
N=0;
L=o<<g;
break;
}
if(0==(0|a)){
me=0;
_e=0;
return 0|(y=me,_e);
}
n[a>>2]=0|-1&e;
n[a+4>>2]=u|0&r;
me=0;
_e=0;
return 0|(y=me,_e);
}else{
if(!d){
I=0|x(0|c);
O=I-(0|x(0|f))|0;
if(O>>>0<=31){
P=O+1|0;
B=31-O|0;
C=O-31>>31;
D=P;
F=o>>>(P>>>0)&C|f<<B;
U=f>>>(P>>>0)&C;
N=0;
L=o<<B;
break;
}
if(0==(0|a)){
me=0;
_e=0;
return 0|(y=me,_e);
}
n[a>>2]=0|-1&e;
n[a+4>>2]=u|0&r;
me=0;
_e=0;
return 0|(y=me,_e);
}
b=s-1|0;
if(0!=(b&s|0)){
A=(0|x(0|s))+33|0;
T=A-(0|x(0|f))|0;
E=64-T|0;
M=32-T|0;
k=M>>31;
S=T-32|0;
R=S>>31;
D=T;
F=M-1>>31&f>>>(S>>>0)|(f<<M|o>>>(T>>>0))&R;
U=R&f>>>(T>>>0);
N=o<<E&k;
L=(f<<E|o>>>(S>>>0))&k|o<<M&T-33>>31;
break;
}
if(0!=(0|a)){
n[a>>2]=b&o;
n[a+4>>2]=0;
}
if(1==(0|s)){
me=u|0&r;
_e=0|-1&e;
return 0|(y=me,_e);
}else{
w=0|Br(0|s);
me=0|f>>>(w>>>0);
_e=f<<32-w|o>>>(w>>>0)|0;
return 0|(y=me,_e);
}
}
}while(0);
if(0==(0|D)){
he=L;
ce=N;
le=U;
se=F;
fe=0;
ue=0;
}else{
Y=0|-1&t;
H=l|0&i;
j=0|Rr(0|Y,0|H,-1,-1);
W=y;
J=L;
G=N;
X=U;
K=F;
V=D;
z=0;
while(1){
$=G>>>31|J<<1;
q=z|G<<1;
Z=0|(K<<1|J>>>31);
Q=K>>>31|X<<1|0;
0|Sr(0|j,0|W,0|Z,0|Q);
ee=y;
re=ee>>31|((0|ee)<0?-1:0)<<1;
te=1&re;
ie=0|Sr(0|Z,0|Q,re&Y|0,(((0|ee)<0?-1:0)>>31|((0|ee)<0?-1:0)<<1)&H|0);
ne=ie;
ae=y;
oe=V-1|0;
if(0==(0|oe))break;else
{
J=$;
G=q;
X=ae;
K=ne;
V=oe;
z=te;
}
}
he=$;
ce=q;
le=ae;
se=ne;
fe=0;
ue=te;
}
de=ce;
ve=0;
pe=he|ve;
if(0!=(0|a)){
n[a>>2]=0|se;
n[a+4>>2]=0|le;
}
me=(0|de)>>>31|pe<<1|0&(ve<<1|de>>>31)|fe;
_e=-2&(de<<1|0>>>31)|ue;
return 0|(y=me,_e);
}

function Lr(e,r,t,i){
e|=0;
r|=0;
t|=0;
i|=0;
var n=0;
n=0|Cr(e,r,t,i,0);
return 0|n;
}

function Nr(e){
e|=0;
var r=0;
var t=0;
var i=0;
e=e+15&-16|0;
r=0|n[l>>2];
t=r+e|0;
if((0|e)>0&(0|t)<(0|r)|(0|t)<0){
0|H();
J(12);
return-1;
}
n[l>>2]=t;
i=0|Y();
if((0|t)>(0|i))
if(0==(0|D())){
n[l>>2]=r;
J(12);
return-1;
}return 0|r;
}

function xr(e,r,t,i){
e|=0;
r|=0;
t|=0;
i|=0;
var a=0,
o=0;
o=d;
d=d+16|0;
a=0|o;
0|Cr(e,r,t,i,a);
d=o;
return 0|(y=0|n[a+4>>2],0|n[a>>2]);
}

function Ur(e,r,i){
e|=0;
r|=0;
i|=0;
var a=0;
var o=0;
var u=0;
var f=0;
if((0|i)>=8192)return 0|q(0|e,0|r,0|i);
a=0|e;
f=e+i|0;
if((3&e)==(3&r)){
while(3&e){
if(0==(0|i))return 0|a;
t[e>>0]=0|t[r>>0];
e=e+1|0;
r=r+1|0;
i=i-1|0;
}
o=-4&f|0;
u=o-64|0;
while((0|e)<=(0|u)){
n[e>>2]=0|n[r>>2];
n[e+4>>2]=0|n[r+4>>2];
n[e+8>>2]=0|n[r+8>>2];
n[e+12>>2]=0|n[r+12>>2];
n[e+16>>2]=0|n[r+16>>2];
n[e+20>>2]=0|n[r+20>>2];
n[e+24>>2]=0|n[r+24>>2];
n[e+28>>2]=0|n[r+28>>2];
n[e+32>>2]=0|n[r+32>>2];
n[e+36>>2]=0|n[r+36>>2];
n[e+40>>2]=0|n[r+40>>2];
n[e+44>>2]=0|n[r+44>>2];
n[e+48>>2]=0|n[r+48>>2];
n[e+52>>2]=0|n[r+52>>2];
n[e+56>>2]=0|n[r+56>>2];
n[e+60>>2]=0|n[r+60>>2];
e=e+64|0;
r=r+64|0;
}
while((0|e)<(0|o)){
n[e>>2]=0|n[r>>2];
e=e+4|0;
r=r+4|0;
}
}else{
o=f-4|0;
while((0|e)<(0|o)){
t[e>>0]=0|t[r>>0];
t[e+1>>0]=0|t[r+1>>0];
t[e+2>>0]=0|t[r+2>>0];
t[e+3>>0]=0|t[r+3>>0];
e=e+4|0;
r=r+4|0;
}
}
while((0|e)<(0|f)){
t[e>>0]=0|t[r>>0];
e=e+1|0;
r=r+1|0;
}
return 0|a;
}

function Fr(e){
e|=0;
return(255&e)<<24|(e>>8&255)<<16|(e>>16&255)<<8|e>>>24|0;
}

function Dr(e,r){
e|=0;
r|=0;
return 0|Wr[1&e](0|r);
}

function Yr(e,r,t,i){
e|=0;
r|=0;
t|=0;
i|=0;
return 0|zr[7&e](0|r,0|t,0|i);
}

function Hr(e){
W(0);
return 0;
}

function jr(e,r,t){
z(1);
return 0;
}
var Wr=[Hr,Le];
var zr=[jr,jr,je,xe,wr,Ne,jr,jr];
return{
_llvm_bswap_i32:Fr,
_loadtoken:Oe,
_i64Subtract:Sr,
___udivdi3:Lr,
setThrew:ae,
_bitshift64Lshr:Or,
_bitshift64Shl:Pr,
_fflush:Er,
___errno_location:Fe,
_memset:Ir,
_sbrk:Nr,
_memcpy:Ur,
stackAlloc:re,
___uremdi3:xr,
getTempRet0:ue,
setTempRet0:oe,
_i64Add:Rr,
dynCall_iiii:Yr,
_emscripten_get_global_libc:Ce,
dynCall_ii:Dr,
stackSave:te,
_free:Be,
runPostSets:kr,
_getsign:Ie,
establishStackSpace:ne,
stackRestore:ie,
_malloc:Pe};

}(Module.asmGlobalArg,Module.asmLibraryArg,buffer);
var real__llvm_bswap_i32=asm["_llvm_bswap_i32"];
asm["_llvm_bswap_i32"]=function(){
assert(runtimeInitialized,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
assert(!runtimeExited,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
return real__llvm_bswap_i32.apply(null,arguments);
};
var real__loadtoken=asm["_loadtoken"];
asm["_loadtoken"]=function(){
assert(runtimeInitialized,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
assert(!runtimeExited,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
return real__loadtoken.apply(null,arguments);
};
var real_getTempRet0=asm["getTempRet0"];
asm["getTempRet0"]=function(){
assert(runtimeInitialized,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
assert(!runtimeExited,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
return real_getTempRet0.apply(null,arguments);
};
var real____udivdi3=asm["___udivdi3"];
asm["___udivdi3"]=function(){
assert(runtimeInitialized,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
assert(!runtimeExited,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
return real____udivdi3.apply(null,arguments);
};
var real_setThrew=asm["setThrew"];
asm["setThrew"]=function(){
assert(runtimeInitialized,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
assert(!runtimeExited,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
return real_setThrew.apply(null,arguments);
};
var real__bitshift64Lshr=asm["_bitshift64Lshr"];
asm["_bitshift64Lshr"]=function(){
assert(runtimeInitialized,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
assert(!runtimeExited,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
return real__bitshift64Lshr.apply(null,arguments);
};
var real__bitshift64Shl=asm["_bitshift64Shl"];
asm["_bitshift64Shl"]=function(){
assert(runtimeInitialized,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
assert(!runtimeExited,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
return real__bitshift64Shl.apply(null,arguments);
};
var real__fflush=asm["_fflush"];
asm["_fflush"]=function(){
assert(runtimeInitialized,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
assert(!runtimeExited,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
return real__fflush.apply(null,arguments);
};
var real__sbrk=asm["_sbrk"];
asm["_sbrk"]=function(){
assert(runtimeInitialized,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
assert(!runtimeExited,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
return real__sbrk.apply(null,arguments);
};
var real____errno_location=asm["___errno_location"];
asm["___errno_location"]=function(){
assert(runtimeInitialized,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
assert(!runtimeExited,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
return real____errno_location.apply(null,arguments);
};
var real____uremdi3=asm["___uremdi3"];
asm["___uremdi3"]=function(){
assert(runtimeInitialized,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
assert(!runtimeExited,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
return real____uremdi3.apply(null,arguments);
};
var real_stackAlloc=asm["stackAlloc"];
asm["stackAlloc"]=function(){
assert(runtimeInitialized,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
assert(!runtimeExited,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
return real_stackAlloc.apply(null,arguments);
};
var real__i64Subtract=asm["_i64Subtract"];
asm["_i64Subtract"]=function(){
assert(runtimeInitialized,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
assert(!runtimeExited,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
return real__i64Subtract.apply(null,arguments);
};
var real_setTempRet0=asm["setTempRet0"];
asm["setTempRet0"]=function(){
assert(runtimeInitialized,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
assert(!runtimeExited,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
return real_setTempRet0.apply(null,arguments);
};
var real__i64Add=asm["_i64Add"];
asm["_i64Add"]=function(){
assert(runtimeInitialized,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
assert(!runtimeExited,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
return real__i64Add.apply(null,arguments);
};
var real__emscripten_get_global_libc=asm["_emscripten_get_global_libc"];
asm["_emscripten_get_global_libc"]=function(){
assert(runtimeInitialized,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
assert(!runtimeExited,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
return real__emscripten_get_global_libc.apply(null,arguments);
};
var real_stackSave=asm["stackSave"];
asm["stackSave"]=function(){
assert(runtimeInitialized,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
assert(!runtimeExited,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
return real_stackSave.apply(null,arguments);
};
var real__free=asm["_free"];
asm["_free"]=function(){
assert(runtimeInitialized,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
assert(!runtimeExited,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
return real__free.apply(null,arguments);
};
var real__getsign=asm["_getsign"];
asm["_getsign"]=function(){
assert(runtimeInitialized,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
assert(!runtimeExited,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
return real__getsign.apply(null,arguments);
};
var real_establishStackSpace=asm["establishStackSpace"];
asm["establishStackSpace"]=function(){
assert(runtimeInitialized,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
assert(!runtimeExited,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
return real_establishStackSpace.apply(null,arguments);
};
var real_stackRestore=asm["stackRestore"];
asm["stackRestore"]=function(){
assert(runtimeInitialized,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
assert(!runtimeExited,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
return real_stackRestore.apply(null,arguments);
};
var real__malloc=asm["_malloc"];
asm["_malloc"]=function(){
assert(runtimeInitialized,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
assert(!runtimeExited,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
return real__malloc.apply(null,arguments);
};
var _llvm_bswap_i32=Module["_llvm_bswap_i32"]=asm["_llvm_bswap_i32"];
var _loadtoken=Module["_loadtoken"]=asm["_loadtoken"];
var getTempRet0=Module["getTempRet0"]=asm["getTempRet0"];
var ___udivdi3=Module["___udivdi3"]=asm["___udivdi3"];
var setThrew=Module["setThrew"]=asm["setThrew"];
var _bitshift64Lshr=Module["_bitshift64Lshr"]=asm["_bitshift64Lshr"];
var _bitshift64Shl=Module["_bitshift64Shl"]=asm["_bitshift64Shl"];
var _fflush=Module["_fflush"]=asm["_fflush"];
var _memset=Module["_memset"]=asm["_memset"];
var _sbrk=Module["_sbrk"]=asm["_sbrk"];
var _memcpy=Module["_memcpy"]=asm["_memcpy"];
var ___errno_location=Module["___errno_location"]=asm["___errno_location"];
var ___uremdi3=Module["___uremdi3"]=asm["___uremdi3"];
var stackAlloc=Module["stackAlloc"]=asm["stackAlloc"];
var _i64Subtract=Module["_i64Subtract"]=asm["_i64Subtract"];
var setTempRet0=Module["setTempRet0"]=asm["setTempRet0"];
var _i64Add=Module["_i64Add"]=asm["_i64Add"];
var _emscripten_get_global_libc=Module["_emscripten_get_global_libc"]=asm["_emscripten_get_global_libc"];
var stackSave=Module["stackSave"]=asm["stackSave"];
var _free=Module["_free"]=asm["_free"];
var runPostSets=Module["runPostSets"]=asm["runPostSets"];
var _getsign=Module["_getsign"]=asm["_getsign"];
var establishStackSpace=Module["establishStackSpace"]=asm["establishStackSpace"];
var stackRestore=Module["stackRestore"]=asm["stackRestore"];
var _malloc=Module["_malloc"]=asm["_malloc"];
var dynCall_ii=Module["dynCall_ii"]=asm["dynCall_ii"];
var dynCall_iiii=Module["dynCall_iiii"]=asm["dynCall_iiii"];
Runtime.stackAlloc=Module["stackAlloc"];
Runtime.stackSave=Module["stackSave"];
Runtime.stackRestore=Module["stackRestore"];
Runtime.establishStackSpace=Module["establishStackSpace"];
Runtime.setTempRet0=Module["setTempRet0"];
Runtime.getTempRet0=Module["getTempRet0"];
Module["asm"]=asm;

function ExitStatus(e){
this.name="ExitStatus";
this.message="Program terminated with exit("+e+")";
this.status=e;
}
ExitStatus.prototype=new Error();
ExitStatus.prototype.constructor=ExitStatus;
var initialStackTop;
var preloadStartTime=null;
dependenciesFulfilled=function e(){
if(!Module["calledRun"])run();
if(!Module["calledRun"])dependenciesFulfilled=e;
};
Module["callMain"]=Module.callMain=function e(r){
assert(0==runDependencies,"cannot call main when async dependencies remain! (listen on __ATMAIN__)");
assert(0==__ATPRERUN__.length,"cannot call main when preRun functions remain to be called");
r=r||[];
ensureInitRuntime();
var t=r.length+1;

function i(){
for(var e=0;e<4-1;e++){n.push(0);}
}
var n=[allocate(intArrayFromString(Module["thisProgram"]),"i8",ALLOC_NORMAL)];
i();
for(var a=0;a<t-1;a+=1){
n.push(allocate(intArrayFromString(r[a]),"i8",ALLOC_NORMAL));
i();
}
n.push(0);
n=allocate(n,"i32",ALLOC_NORMAL);
try{
var o=Module["_main"](t,n,0);
exit(o,true);
}catch(e){
if(e instanceof ExitStatus)return;else
if("SimulateInfiniteLoop"==e){
Module["noExitRuntime"]=true;
return;
}else{
var u=e;
if(e&&"object"===typeof e&&e.stack)u=[e,e.stack];
Module.printErr("exception thrown: "+u);
Module["quit"](1,e);
}
}
};

function run(e){
e=e||Module["arguments"];
if(null===preloadStartTime)preloadStartTime=Date.now();
if(runDependencies>0)return;
writeStackCookie();
preRun();
if(runDependencies>0)return;
if(Module["calledRun"])return;

function r(){
if(Module["calledRun"])return;
Module["calledRun"]=true;
if(ABORT)return;
ensureInitRuntime();
preMain();
if(ENVIRONMENT_IS_WEB&&null!==preloadStartTime)Module.printErr("pre-main prep time: "+(Date.now()-preloadStartTime)+" ms");
if(Module["onRuntimeInitialized"])Module["onRuntimeInitialized"]();
if(Module["_main"]&&shouldRunNow)Module["callMain"](e);
postRun();
}
if(Module["setStatus"]){
Module["setStatus"]("Running...");
setTimeout(function(){
setTimeout(function(){
Module["setStatus"]("");
},1);
r();
},1);
}else r();
checkStackCookie();
}
Module["run"]=Module.run=run;

function exit(e,r){
if(r&&Module["noExitRuntime"]){
Module.printErr("exit("+e+") implicitly called by end of main(), but noExitRuntime, so not exiting the runtime (you can use emscripten_force_exit, if you want to force a true shutdown)");
return;
}
if(Module["noExitRuntime"])Module.printErr("exit("+e+") called, but noExitRuntime, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)");else
{
ABORT=true;
STACKTOP=initialStackTop;
exitRuntime();
if(Module["onExit"])Module["onExit"](e);
}
if(ENVIRONMENT_IS_NODE)process["exit"](e);
Module["quit"](e,new ExitStatus(e));
}
Module["exit"]=Module.exit=exit;
var abortDecorators=[];

function abort(e){
if(Module["onAbort"])Module["onAbort"](e);
if(void 0!==e){
Module.print(e);
Module.printErr(e);
e=JSON.stringify(e);
}else e="";
ABORT=true;
var r="";
var t="abort("+e+") at "+stackTrace()+r;
if(abortDecorators)abortDecorators.forEach(function(r){
t=r(t,e);
});
throw t;
}
Module["abort"]=Module.abort=abort;
if(Module["preInit"]){
if("function"==typeof Module["preInit"])Module["preInit"]=[Module["preInit"]];
while(Module["preInit"].length>0){Module["preInit"].pop()();}
}
var shouldRunNow=true;
if(Module["noInitialRun"])shouldRunNow=false;
run();
module.exports=Module;
});var
JsonLoad=/*#__PURE__*/function(){
function JsonLoad(e){_classCallCheck(this,JsonLoad);
this.init();
this.set=e;
this.data={};
}_createClass(JsonLoad,[{key:"init",value:function init()
{}},{key:"getVodJson",value:function getVodJson()
{var _this=this;var

e=
this.set.vid;
var r="https://player.polyv.net/secure/".concat(e,".js");
return new Promise(function(e,t){
ajxa.request(r).then(function(r){
e(_this.cleanData(r));
});
});
}},{key:"cleanData",value:function(){var _cleanData=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee(
e){var r;return _regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:
r=Object.assign({},e);
r.poster=this.proxy(e.first_image);
r.teaserUrl=this.proxy(e.teaser_url);
r.adMatter=this.proxy(e.adMatter,"matterurl");
this.data=r;_context.next=7;return(
this.handleSrc());case 7:return _context.abrupt("return",
this.data);case 8:case"end":return _context.stop();}}},_callee,this);}));function cleanData(_x){return _cleanData.apply(this,arguments);}return cleanData;}()},{key:"handleSrc",value:function(){var _handleSrc=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee2(){return _regeneratorRuntime.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:


this.setUrl();
this.setEncryptUrl();_context2.next=4;return(
this.setWxaUrl());case 4:
this.setPreviewUrl();
this.setAudioUrl();
this.setKeepSourceUrl();case 7:case"end":return _context2.stop();}}},_callee2,this);}));function handleSrc(){return _handleSrc.apply(this,arguments);}return handleSrc;}()},{key:"setUrl",value:function setUrl()

{
this.data.src=this.data.mp4;
}},{key:"setEncryptUrl",value:function setEncryptUrl()
{var _this$data=



this.data,e=_this$data.seed,r=_this$data.hls;var _this$set=



this.set,t=_this$set.ts,i=_this$set.sign;
if(1!==e)return;
this.data.src=r;
if(!t||!i)return;
r.forEach(function(e,n){
var a=e.indexOf("?")>-1?"&":"?";
r[n]="".concat(e).concat(a,"ts=").concat(t,"&sign=").concat(i);
});
}},{key:"setWxaUrl",value:function(){var _setWxaUrl=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee3(){var _this$data2,e,r,_this$set2,t,i,n,a,o;return _regeneratorRuntime.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_this$data2=




this.data,e=_this$data2.seed,r=_this$data2.hls;_this$set2=



this.set,t=_this$set2.wxApp,i=_this$set2.pid;if(!(
1!==e||!(t&&t.isWx))){_context3.next=4;break;}return _context3.abrupt("return");case 4:_context3.next=6;return(
this.getWxToken());case 6:n=_context3.sent;
a=miniapp.ccall("loadtoken","string",["string"],[n]);
o=JSON.parse(a).data.token;
r.forEach(function(e,t){
var n=e.indexOf("?")>-1?"&":"?";
r[t]="".concat(e).concat(n,"token=").concat(o,"&iswxa=1&pid=").concat(i);
});case 10:case"end":return _context3.stop();}}},_callee3,this);}));function setWxaUrl(){return _setWxaUrl.apply(this,arguments);}return setWxaUrl;}()},{key:"getWxToken",value:function(){var _getWxToken=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee4(){var _this$set3,e,r,t,i,n,a,o,u;return _regeneratorRuntime.wrap(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:


if(!miniapp)console.warn("###请联系客服获取小程序授权加密SDK");_this$set3=



this.set,e=_this$set3.wxApp,r=_this$set3.vid;

t=
e.wxAppUrl;
i=e.wxUserId||"";
n=e.expires||"";
a="1554867859459";
o=miniapp.ccall("getsign","string",["string","string","string"],[i,r,a.toString()]);
u={
iswxa:1,
isWx:true,
vid:r,
ts:a,
sign:o,
wxAppUrl:t,
wxUserId:i,
expires:n};return _context4.abrupt("return",

new Promise(function(e){
ajxa.request(t,"GET",u).then(function(r){
e(r);
});
}));case 9:case"end":return _context4.stop();}}},_callee4,this);}));function getWxToken(){return _getWxToken.apply(this,arguments);}return getWxToken;}()},{key:"setPreviewUrl",value:function setPreviewUrl()

{var _this$set4=



this.set,e=_this$set4.vid,r=_this$set4.isPreviewMode;var _this$data3=



this.data,t=_this$data3.src,i=_this$data3.seed;
if(!i||!r)return;
t.forEach(function(r,i){
var n=e.substring(0,32);
t[i]=r.replace(n,"p_".concat(n));
});
}},{key:"setAudioUrl",value:function setAudioUrl()
{var

e=
this.set.useAudio;
var r=this.data.aac_link;
if(!e||!r)return;
this.data.src=r;
}},{key:"setKeepSourceUrl",value:function setKeepSourceUrl()
{var

e=
this.data.keepsource;
if("1"!==e)return;
this.data.src=this.data.play_source_url;
}},{key:"proxy",value:function proxy(
e,r){var _this2=this;
if("undefined"===typeof e||0===e.length)return;
if("string"===typeof e)return this.proxyUrl(e);
if(r){
e.forEach(function(e){
e[r]=_this2.proxyUrl(e[r]);
});
return e;
}
}},{key:"proxyUrl",value:function proxyUrl(
e){
if(!e)return"";
e=e.replace(/^.*?:\/\//g,"");
return"https://router.polyv.net/proxy/".concat(e);
}}]);return JsonLoad;}();var

ErrorPanel=/*#__PURE__*/function(){
function ErrorPanel(e){_classCallCheck(this,ErrorPanel);
this.set=e;
this.initErrorEvent();
}_createClass(ErrorPanel,[{key:"initErrorEvent",value:function initErrorEvent()
{
this.event=new Map([
[1001,{
event:"VID_EMPTY"}],

[1002,{
event:"OUT_FLOW"}],

[1003,{
event:"TIME_OUT_FLOW"}],

[1004,{
event:"LOAD_JSON_FAIL"}],

[1005,{
event:"LOAD_TOKEN_FAIL"}]]);


}},{key:"emit",value:function emit(
e){var

r=
this.set.callback;
var t={
type:"error"};

t=Object.assign(t,this.event.get(e));
if("function"===typeof r)r(t);
console.error("#polyv_sdk_error:",t);
}}]);return ErrorPanel;}();

var crypt=createCommonjsModule(function(e){
(function(){
var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
t={
rotl:function rotl(e,r){
return e<<r|e>>>32-r;
},
rotr:function rotr(e,r){
return e<<32-r|e>>>r;
},
endian:function endian(e){
if(e.constructor==Number)return 16711935&t.rotl(e,8)|4278255360&t.rotl(e,24);
for(var r=0;r<e.length;r++){e[r]=t.endian(e[r]);}
return e;
},
randomBytes:function randomBytes(e){
for(var r=[];e>0;e--){r.push(Math.floor(256*Math.random()));}
return r;
},
bytesToWords:function bytesToWords(e){
for(var r=[],t=0,i=0;t<e.length;t++,i+=8){r[i>>>5]|=e[t]<<24-i%32;}
return r;
},
wordsToBytes:function wordsToBytes(e){
for(var r=[],t=0;t<32*e.length;t+=8){r.push(e[t>>>5]>>>24-t%32&255);}
return r;
},
bytesToHex:function bytesToHex(e){
for(var r=[],t=0;t<e.length;t++){
r.push((e[t]>>>4).toString(16));
r.push((15&e[t]).toString(16));
}
return r.join("");
},
hexToBytes:function hexToBytes(e){
for(var r=[],t=0;t<e.length;t+=2){r.push(parseInt(e.substr(t,2),16));}
return r;
},
bytesToBase64:function bytesToBase64(e){
for(var t=[],i=0;i<e.length;i+=3){
var n=e[i]<<16|e[i+1]<<8|e[i+2];
for(var a=0;a<4;a++){
if(8*i+6*a<=8*e.length)t.push(r.charAt(n>>>6*(3-a)&63));else
t.push("=");}
}
return t.join("");
},
base64ToBytes:function base64ToBytes(e){
e=e.replace(/[^A-Z0-9+\/]/gi,"");
for(var t=[],i=0,n=0;i<e.length;n=++i%4){
if(0==n)continue;
t.push((r.indexOf(e.charAt(i-1))&Math.pow(2,-2*n+8)-1)<<2*n|r.indexOf(e.charAt(i))>>>6-2*n);
}
return t;
}};

e.exports=t;
})();
});
var charenc={
utf8:{
stringToBytes:function stringToBytes(e){
return charenc.bin.stringToBytes(unescape(encodeURIComponent(e)));
},
bytesToString:function bytesToString(e){
return decodeURIComponent(escape(charenc.bin.bytesToString(e)));
}},

bin:{
stringToBytes:function stringToBytes(e){
for(var r=[],t=0;t<e.length;t++){r.push(255&e.charCodeAt(t));}
return r;
},
bytesToString:function bytesToString(e){
for(var r=[],t=0;t<e.length;t++){r.push(String.fromCharCode(e[t]));}
return r.join("");
}}};


var charenc_1=charenc;
var isBuffer_1=function isBuffer_1(e){
return null!=e&&(isBuffer(e)||isSlowBuffer(e)||!!e._isBuffer);
};

function isBuffer(e){
return!!e.constructor&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e);
}

function isSlowBuffer(e){
return"function"===typeof e.readFloatLE&&"function"===typeof e.slice&&isBuffer(e.slice(0,0));
}
var md5=createCommonjsModule(function(e){
(function(){
var r=crypt,
t=charenc_1.utf8,
i=isBuffer_1,
n=charenc_1.bin,
a=function a(e,o){
if(e.constructor==String){
if(o&&"binary"===o.encoding)e=n.stringToBytes(e);else
e=t.stringToBytes(e);}else
if(i(e))e=Array.prototype.slice.call(e,0);else
if(!Array.isArray(e))e=e.toString();
var u=r.bytesToWords(e),
f=8*e.length,
s=1732584193,
l=-271733879,
c=-1732584194,
h=271733878;
for(var d=0;d<u.length;d++){u[d]=16711935&(u[d]<<8|u[d]>>>24)|4278255360&(u[d]<<24|u[d]>>>8);}
u[f>>>5]|=128<<f%32;
u[(f+64>>>9<<4)+14]=f;
var v=a._ff,
p=a._gg,
_=a._hh,
m=a._ii;
for(var d=0;d<u.length;d+=16){
var y=s,
g=l,
b=c,
w=h;
s=v(s,l,c,h,u[d+0],7,-680876936);
h=v(h,s,l,c,u[d+1],12,-389564586);
c=v(c,h,s,l,u[d+2],17,606105819);
l=v(l,c,h,s,u[d+3],22,-1044525330);
s=v(s,l,c,h,u[d+4],7,-176418897);
h=v(h,s,l,c,u[d+5],12,1200080426);
c=v(c,h,s,l,u[d+6],17,-1473231341);
l=v(l,c,h,s,u[d+7],22,-45705983);
s=v(s,l,c,h,u[d+8],7,1770035416);
h=v(h,s,l,c,u[d+9],12,-1958414417);
c=v(c,h,s,l,u[d+10],17,-42063);
l=v(l,c,h,s,u[d+11],22,-1990404162);
s=v(s,l,c,h,u[d+12],7,1804603682);
h=v(h,s,l,c,u[d+13],12,-40341101);
c=v(c,h,s,l,u[d+14],17,-1502002290);
l=v(l,c,h,s,u[d+15],22,1236535329);
s=p(s,l,c,h,u[d+1],5,-165796510);
h=p(h,s,l,c,u[d+6],9,-1069501632);
c=p(c,h,s,l,u[d+11],14,643717713);
l=p(l,c,h,s,u[d+0],20,-373897302);
s=p(s,l,c,h,u[d+5],5,-701558691);
h=p(h,s,l,c,u[d+10],9,38016083);
c=p(c,h,s,l,u[d+15],14,-660478335);
l=p(l,c,h,s,u[d+4],20,-405537848);
s=p(s,l,c,h,u[d+9],5,568446438);
h=p(h,s,l,c,u[d+14],9,-1019803690);
c=p(c,h,s,l,u[d+3],14,-187363961);
l=p(l,c,h,s,u[d+8],20,1163531501);
s=p(s,l,c,h,u[d+13],5,-1444681467);
h=p(h,s,l,c,u[d+2],9,-51403784);
c=p(c,h,s,l,u[d+7],14,1735328473);
l=p(l,c,h,s,u[d+12],20,-1926607734);
s=_(s,l,c,h,u[d+5],4,-378558);
h=_(h,s,l,c,u[d+8],11,-2022574463);
c=_(c,h,s,l,u[d+11],16,1839030562);
l=_(l,c,h,s,u[d+14],23,-35309556);
s=_(s,l,c,h,u[d+1],4,-1530992060);
h=_(h,s,l,c,u[d+4],11,1272893353);
c=_(c,h,s,l,u[d+7],16,-155497632);
l=_(l,c,h,s,u[d+10],23,-1094730640);
s=_(s,l,c,h,u[d+13],4,681279174);
h=_(h,s,l,c,u[d+0],11,-358537222);
c=_(c,h,s,l,u[d+3],16,-722521979);
l=_(l,c,h,s,u[d+6],23,76029189);
s=_(s,l,c,h,u[d+9],4,-640364487);
h=_(h,s,l,c,u[d+12],11,-421815835);
c=_(c,h,s,l,u[d+15],16,530742520);
l=_(l,c,h,s,u[d+2],23,-995338651);
s=m(s,l,c,h,u[d+0],6,-198630844);
h=m(h,s,l,c,u[d+7],10,1126891415);
c=m(c,h,s,l,u[d+14],15,-1416354905);
l=m(l,c,h,s,u[d+5],21,-57434055);
s=m(s,l,c,h,u[d+12],6,1700485571);
h=m(h,s,l,c,u[d+3],10,-1894986606);
c=m(c,h,s,l,u[d+10],15,-1051523);
l=m(l,c,h,s,u[d+1],21,-2054922799);
s=m(s,l,c,h,u[d+8],6,1873313359);
h=m(h,s,l,c,u[d+15],10,-30611744);
c=m(c,h,s,l,u[d+6],15,-1560198380);
l=m(l,c,h,s,u[d+13],21,1309151649);
s=m(s,l,c,h,u[d+4],6,-145523070);
h=m(h,s,l,c,u[d+11],10,-1120210379);
c=m(c,h,s,l,u[d+2],15,718787259);
l=m(l,c,h,s,u[d+9],21,-343485551);
s=s+y>>>0;
l=l+g>>>0;
c=c+b>>>0;
h=h+w>>>0;
}
return r.endian([s,l,c,h]);
};
a._ff=function(e,r,t,i,n,a,o){
var u=e+(r&t|~r&i)+(n>>>0)+o;
return(u<<a|u>>>32-a)+r;
};
a._gg=function(e,r,t,i,n,a,o){
var u=e+(r&i|t&~i)+(n>>>0)+o;
return(u<<a|u>>>32-a)+r;
};
a._hh=function(e,r,t,i,n,a,o){
var u=e+(r^t^i)+(n>>>0)+o;
return(u<<a|u>>>32-a)+r;
};
a._ii=function(e,r,t,i,n,a,o){
var u=e+(t^(r|~i))+(n>>>0)+o;
return(u<<a|u>>>32-a)+r;
};
a._blocksize=16;
a._digestsize=16;
e.exports=function(e,t){
if(void 0===e||null===e)throw new Error("Illegal argument "+e);
var i=r.wordsToBytes(a(e,t));
return t&&t.asBytes?i:t&&t.asString?n.bytesToString(i):r.bytesToHex(i);
};
})();
});
var lookup=[];
var revLookup=[];
var Arr="undefined"!==typeof Uint8Array?Uint8Array:Array;
var inited=false;

function init(){
inited=true;
var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for(var r=0,t=e.length;r<t;++r){
lookup[r]=e[r];
revLookup[e.charCodeAt(r)]=r;
}
revLookup["-".charCodeAt(0)]=62;
revLookup["_".charCodeAt(0)]=63;
}

function toByteArray(e){
if(!inited)init();
var r,t,i,n,a,o;
var u=e.length;
if(u%4>0)throw new Error("Invalid string. Length must be a multiple of 4");
a="="===e[u-2]?2:"="===e[u-1]?1:0;
o=new Arr(3*u/4-a);
i=a>0?u-4:u;
var f=0;
for(r=0,t=0;r<i;r+=4,t+=3){
n=revLookup[e.charCodeAt(r)]<<18|revLookup[e.charCodeAt(r+1)]<<12|revLookup[e.charCodeAt(r+2)]<<6|revLookup[e.charCodeAt(r+3)];
o[f++]=n>>16&255;
o[f++]=n>>8&255;
o[f++]=255&n;
}
if(2===a){
n=revLookup[e.charCodeAt(r)]<<2|revLookup[e.charCodeAt(r+1)]>>4;
o[f++]=255&n;
}else if(1===a){
n=revLookup[e.charCodeAt(r)]<<10|revLookup[e.charCodeAt(r+1)]<<4|revLookup[e.charCodeAt(r+2)]>>2;
o[f++]=n>>8&255;
o[f++]=255&n;
}
return o;
}

function tripletToBase64(e){
return lookup[e>>18&63]+lookup[e>>12&63]+lookup[e>>6&63]+lookup[63&e];
}

function encodeChunk(e,r,t){
var i;
var n=[];
for(var a=r;a<t;a+=3){
i=(e[a]<<16)+(e[a+1]<<8)+e[a+2];
n.push(tripletToBase64(i));
}
return n.join("");
}

function fromByteArray(e){
if(!inited)init();
var r;
var t=e.length;
var i=t%3;
var n="";
var a=[];
var o=16383;
for(var u=0,f=t-i;u<f;u+=o){a.push(encodeChunk(e,u,u+o>f?f:u+o));}
if(1===i){
r=e[t-1];
n+=lookup[r>>2];
n+=lookup[r<<4&63];
n+="==";
}else if(2===i){
r=(e[t-2]<<8)+e[t-1];
n+=lookup[r>>10];
n+=lookup[r>>4&63];
n+=lookup[r<<2&63];
n+="=";
}
a.push(n);
return a.join("");
}

function read$1(e,r,t,i,n){
var a,o;
var u=8*n-i-1;
var f=(1<<u)-1;
var s=f>>1;
var l=-7;
var c=t?n-1:0;
var h=t?-1:1;
var d=e[r+c];
c+=h;
a=d&(1<<-l)-1;
d>>=-l;
l+=u;
for(;l>0;a=256*a+e[r+c],c+=h,l-=8){;}
o=a&(1<<-l)-1;
a>>=-l;
l+=i;
for(;l>0;o=256*o+e[r+c],c+=h,l-=8){;}
if(0===a)a=1-s;else
if(a===f)return o?NaN:(d?-1:1)*(1/0);else
{
o+=Math.pow(2,i);
a-=s;
}
return(d?-1:1)*o*Math.pow(2,a-i);
}

function write(e,r,t,i,n,a){
var o,u,f;
var s=8*a-n-1;
var l=(1<<s)-1;
var c=l>>1;
var h=23===n?Math.pow(2,-24)-Math.pow(2,-77):0;
var d=i?0:a-1;
var v=i?1:-1;
var p=r<0||0===r&&1/r<0?1:0;
r=Math.abs(r);
if(isNaN(r)||r===1/0){
u=isNaN(r)?1:0;
o=l;
}else{
o=Math.floor(Math.log(r)/Math.LN2);
if(r*(f=Math.pow(2,-o))<1){
o--;
f*=2;
}
if(o+c>=1)r+=h/f;else
r+=h*Math.pow(2,1-c);
if(r*f>=2){
o++;
f/=2;
}
if(o+c>=l){
u=0;
o=l;
}else if(o+c>=1){
u=(r*f-1)*Math.pow(2,n);
o+=c;
}else{
u=r*Math.pow(2,c-1)*Math.pow(2,n);
o=0;
}
}
for(;n>=8;e[t+d]=255&u,d+=v,u/=256,n-=8){;}
o=o<<n|u;
s+=n;
for(;s>0;e[t+d]=255&o,d+=v,o/=256,s-=8){;}
e[t+d-v]|=128*p;
}
var toString={}.toString;
var isArray=Array.isArray||function(e){
return"[object Array]"==toString.call(e);
};
var INSPECT_MAX_BYTES=50;
Buffer.TYPED_ARRAY_SUPPORT=void 0!==global.TYPED_ARRAY_SUPPORT?global.TYPED_ARRAY_SUPPORT:true;
var _kMaxLength=kMaxLength();

function kMaxLength(){
return Buffer.TYPED_ARRAY_SUPPORT?2147483647:1073741823;
}

function createBuffer(e,r){
if(kMaxLength()<r)throw new RangeError("Invalid typed array length");
if(Buffer.TYPED_ARRAY_SUPPORT){
e=new Uint8Array(r);
e.__proto__=Buffer.prototype;
}else{
if(null===e)e=new Buffer(r);
e.length=r;
}
return e;
}

function Buffer(e,r,t){
if(!Buffer.TYPED_ARRAY_SUPPORT&&!(this instanceof Buffer))return new Buffer(e,r,t);
if("number"===typeof e){
if("string"===typeof r)throw new Error("If encoding is specified then the first argument must be a string");
return allocUnsafe(this,e);
}
return from(this,e,r,t);
}
Buffer.poolSize=8192;
Buffer._augment=function(e){
e.__proto__=Buffer.prototype;
return e;
};

function from(e,r,t,i){
if("number"===typeof r)throw new TypeError('"value" argument must not be a number');
if("undefined"!==typeof ArrayBuffer&&r instanceof ArrayBuffer)return fromArrayBuffer(e,r,t,i);
if("string"===typeof r)return fromString(e,r,t);
return fromObject(e,r);
}
Buffer.from=function(e,r,t){
return from(null,e,r,t);
};
if(Buffer.TYPED_ARRAY_SUPPORT){
Buffer.prototype.__proto__=Uint8Array.prototype;
Buffer.__proto__=Uint8Array;
}

function assertSize(e){
if("number"!==typeof e)throw new TypeError('"size" argument must be a number');else
if(e<0)throw new RangeError('"size" argument must not be negative');
}

function alloc(e,r,t,i){
assertSize(r);
if(r<=0)return createBuffer(e,r);
if(void 0!==t)return"string"===typeof i?createBuffer(e,r).fill(t,i):createBuffer(e,r).fill(t);
return createBuffer(e,r);
}
Buffer.alloc=function(e,r,t){
return alloc(null,e,r,t);
};

function allocUnsafe(e,r){
assertSize(r);
e=createBuffer(e,r<0?0:0|checked(r));
if(!Buffer.TYPED_ARRAY_SUPPORT)
for(var t=0;t<r;++t){e[t]=0;}
return e;
}
Buffer.allocUnsafe=function(e){
return allocUnsafe(null,e);
};
Buffer.allocUnsafeSlow=function(e){
return allocUnsafe(null,e);
};

function fromString(e,r,t){
if("string"!==typeof t||""===t)t="utf8";
if(!Buffer.isEncoding(t))throw new TypeError('"encoding" must be a valid string encoding');
var i=0|byteLength(r,t);
e=createBuffer(e,i);
var n=e.write(r,t);
if(n!==i)e=e.slice(0,n);
return e;
}

function fromArrayLike(e,r){
var t=r.length<0?0:0|checked(r.length);
e=createBuffer(e,t);
for(var i=0;i<t;i+=1){e[i]=255&r[i];}
return e;
}

function fromArrayBuffer(e,r,t,i){
r.byteLength;
if(t<0||r.byteLength<t)throw new RangeError("'offset' is out of bounds");
if(r.byteLength<t+(i||0))throw new RangeError("'length' is out of bounds");
if(void 0===t&&void 0===i)r=new Uint8Array(r);else
if(void 0===i)r=new Uint8Array(r,t);else
r=new Uint8Array(r,t,i);
if(Buffer.TYPED_ARRAY_SUPPORT){
e=r;
e.__proto__=Buffer.prototype;
}else e=fromArrayLike(e,r);
return e;
}

function fromObject(e,r){
if(internalIsBuffer(r)){
var t=0|checked(r.length);
e=createBuffer(e,t);
if(0===e.length)return e;
r.copy(e,0,0,t);
return e;
}
if(r){
if("undefined"!==typeof ArrayBuffer&&r.buffer instanceof ArrayBuffer||"length"in r){
if("number"!==typeof r.length||isnan(r.length))return createBuffer(e,0);
return fromArrayLike(e,r);
}
if("Buffer"===r.type&&isArray(r.data))return fromArrayLike(e,r.data);
}
throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
}

function checked(e){
if(e>=kMaxLength())throw new RangeError("Attempt to allocate Buffer larger than maximum "+"size: 0x"+kMaxLength().toString(16)+" bytes");
return 0|e;
}

function SlowBuffer(e){
if(+e!=e)e=0;
return Buffer.alloc(+e);
}
Buffer.isBuffer=isBuffer$1;

function internalIsBuffer(e){
return!!(null!=e&&e._isBuffer);
}
Buffer.compare=function e(r,t){
if(!internalIsBuffer(r)||!internalIsBuffer(t))throw new TypeError("Arguments must be Buffers");
if(r===t)return 0;
var i=r.length;
var n=t.length;
for(var a=0,o=Math.min(i,n);a<o;++a){
if(r[a]!==t[a]){
i=r[a];
n=t[a];
break;
}}if(i<n)return-1;
if(n<i)return 1;
return 0;
};
Buffer.isEncoding=function e(r){
switch(String(r).toLowerCase()){
case"hex":
case"utf8":
case"utf-8":
case"ascii":
case"latin1":
case"binary":
case"base64":
case"ucs2":
case"ucs-2":
case"utf16le":
case"utf-16le":
return true;
default:
return false;}

};
Buffer.concat=function e(r,t){
if(!isArray(r))throw new TypeError('"list" argument must be an Array of Buffers');
if(0===r.length)return Buffer.alloc(0);
var i;
if(void 0===t){
t=0;
for(i=0;i<r.length;++i){t+=r[i].length;}
}
var n=Buffer.allocUnsafe(t);
var a=0;
for(i=0;i<r.length;++i){
var o=r[i];
if(!internalIsBuffer(o))throw new TypeError('"list" argument must be an Array of Buffers');
o.copy(n,a);
a+=o.length;
}
return n;
};

function byteLength(e,r){
if(internalIsBuffer(e))return e.length;
if("undefined"!==typeof ArrayBuffer&&"function"===typeof ArrayBuffer.isView&&(ArrayBuffer.isView(e)||e instanceof ArrayBuffer))return e.byteLength;
if("string"!==typeof e)e=""+e;
var t=e.length;
if(0===t)return 0;
var i=false;
for(;;){switch(r){
case"ascii":
case"latin1":
case"binary":
return t;
case"utf8":
case"utf-8":
case void 0:
return utf8ToBytes(e).length;
case"ucs2":
case"ucs-2":
case"utf16le":
case"utf-16le":
return 2*t;
case"hex":
return t>>>1;
case"base64":
return base64ToBytes(e).length;
default:
if(i)return utf8ToBytes(e).length;
r=(""+r).toLowerCase();
i=true;}}

}
Buffer.byteLength=byteLength;

function slowToString(e,r,t){
var i=false;
if(void 0===r||r<0)r=0;
if(r>this.length)return"";
if(void 0===t||t>this.length)t=this.length;
if(t<=0)return"";
t>>>=0;
r>>>=0;
if(t<=r)return"";
if(!e)e="utf8";
while(true){switch(e){
case"hex":
return hexSlice(this,r,t);
case"utf8":
case"utf-8":
return utf8Slice(this,r,t);
case"ascii":
return asciiSlice(this,r,t);
case"latin1":
case"binary":
return latin1Slice(this,r,t);
case"base64":
return base64Slice(this,r,t);
case"ucs2":
case"ucs-2":
case"utf16le":
case"utf-16le":
return utf16leSlice(this,r,t);
default:
if(i)throw new TypeError("Unknown encoding: "+e);
e=(e+"").toLowerCase();
i=true;}}

}
Buffer.prototype._isBuffer=true;

function swap(e,r,t){
var i=e[r];
e[r]=e[t];
e[t]=i;
}
Buffer.prototype.swap16=function e(){
var r=this.length;
if(r%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");
for(var t=0;t<r;t+=2){swap(this,t,t+1);}
return this;
};
Buffer.prototype.swap32=function e(){
var r=this.length;
if(r%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");
for(var t=0;t<r;t+=4){
swap(this,t,t+3);
swap(this,t+1,t+2);
}
return this;
};
Buffer.prototype.swap64=function e(){
var r=this.length;
if(r%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");
for(var t=0;t<r;t+=8){
swap(this,t,t+7);
swap(this,t+1,t+6);
swap(this,t+2,t+5);
swap(this,t+3,t+4);
}
return this;
};
Buffer.prototype.toString=function e(){
var r=0|this.length;
if(0===r)return"";
if(0===arguments.length)return utf8Slice(this,0,r);
return slowToString.apply(this,arguments);
};
Buffer.prototype.equals=function e(r){
if(!internalIsBuffer(r))throw new TypeError("Argument must be a Buffer");
if(this===r)return true;
return 0===Buffer.compare(this,r);
};
Buffer.prototype.inspect=function e(){
var r="";
var t=INSPECT_MAX_BYTES;
if(this.length>0){
r=this.toString("hex",0,t).match(/.{2}/g).join(" ");
if(this.length>t)r+=" ... ";
}
return"<Buffer "+r+">";
};
Buffer.prototype.compare=function e(r,t,i,n,a){
if(!internalIsBuffer(r))throw new TypeError("Argument must be a Buffer");
if(void 0===t)t=0;
if(void 0===i)i=r?r.length:0;
if(void 0===n)n=0;
if(void 0===a)a=this.length;
if(t<0||i>r.length||n<0||a>this.length)throw new RangeError("out of range index");
if(n>=a&&t>=i)return 0;
if(n>=a)return-1;
if(t>=i)return 1;
t>>>=0;
i>>>=0;
n>>>=0;
a>>>=0;
if(this===r)return 0;
var o=a-n;
var u=i-t;
var f=Math.min(o,u);
var s=this.slice(n,a);
var l=r.slice(t,i);
for(var c=0;c<f;++c){
if(s[c]!==l[c]){
o=s[c];
u=l[c];
break;
}}if(o<u)return-1;
if(u<o)return 1;
return 0;
};

function bidirectionalIndexOf(e,r,t,i,n){
if(0===e.length)return-1;
if("string"===typeof t){
i=t;
t=0;
}else if(t>2147483647)t=2147483647;else
if(t<-2147483648)t=-2147483648;
t=+t;
if(isNaN(t))t=n?0:e.length-1;
if(t<0)t=e.length+t;
if(t>=e.length){
if(n)return-1;else
t=e.length-1;}else
if(t<0)
if(n)t=0;else
return-1;
if("string"===typeof r)r=Buffer.from(r,i);
if(internalIsBuffer(r)){
if(0===r.length)return-1;
return arrayIndexOf(e,r,t,i,n);
}else if("number"===typeof r){
r&=255;
if(Buffer.TYPED_ARRAY_SUPPORT&&"function"===typeof Uint8Array.prototype.indexOf)
if(n)return Uint8Array.prototype.indexOf.call(e,r,t);else
return Uint8Array.prototype.lastIndexOf.call(e,r,t);
return arrayIndexOf(e,[r],t,i,n);
}
throw new TypeError("val must be string, number or Buffer");
}

function arrayIndexOf(e,r,t,i,n){
var a=1;
var o=e.length;
var u=r.length;
if(void 0!==i){
i=String(i).toLowerCase();
if("ucs2"===i||"ucs-2"===i||"utf16le"===i||"utf-16le"===i){
if(e.length<2||r.length<2)return-1;
a=2;
o/=2;
u/=2;
t/=2;
}
}

function f(e,r){
if(1===a)return e[r];else
return e.readUInt16BE(r*a);
}
var s;
if(n){
var l=-1;
for(s=t;s<o;s++){
if(f(e,s)===f(r,-1===l?0:s-l)){
if(-1===l)l=s;
if(s-l+1===u)return l*a;
}else{
if(-1!==l)s-=s-l;
l=-1;
}}
}else{
if(t+u>o)t=o-u;
for(s=t;s>=0;s--){
var c=true;
for(var h=0;h<u;h++){
if(f(e,s+h)!==f(r,h)){
c=false;
break;
}}if(c)return s;
}
}
return-1;
}
Buffer.prototype.includes=function e(r,t,i){
return-1!==this.indexOf(r,t,i);
};
Buffer.prototype.indexOf=function e(r,t,i){
return bidirectionalIndexOf(this,r,t,i,true);
};
Buffer.prototype.lastIndexOf=function e(r,t,i){
return bidirectionalIndexOf(this,r,t,i,false);
};

function hexWrite(e,r,t,i){
t=Number(t)||0;
var n=e.length-t;
if(!i)i=n;else
{
i=Number(i);
if(i>n)i=n;
}
var a=r.length;
if(a%2!==0)throw new TypeError("Invalid hex string");
if(i>a/2)i=a/2;
for(var o=0;o<i;++o){
var u=parseInt(r.substr(2*o,2),16);
if(isNaN(u))return o;
e[t+o]=u;
}
return o;
}

function utf8Write(e,r,t,i){
return blitBuffer(utf8ToBytes(r,e.length-t),e,t,i);
}

function asciiWrite(e,r,t,i){
return blitBuffer(asciiToBytes(r),e,t,i);
}

function latin1Write(e,r,t,i){
return asciiWrite(e,r,t,i);
}

function base64Write(e,r,t,i){
return blitBuffer(base64ToBytes(r),e,t,i);
}

function ucs2Write(e,r,t,i){
return blitBuffer(utf16leToBytes(r,e.length-t),e,t,i);
}
Buffer.prototype.write=function e(r,t,i,n){
if(void 0===t){
n="utf8";
i=this.length;
t=0;
}else if(void 0===i&&"string"===typeof t){
n=t;
i=this.length;
t=0;
}else if(isFinite(t)){
t|=0;
if(isFinite(i)){
i|=0;
if(void 0===n)n="utf8";
}else{
n=i;
i=void 0;
}
}else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
var a=this.length-t;
if(void 0===i||i>a)i=a;
if(r.length>0&&(i<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");
if(!n)n="utf8";
var o=false;
for(;;){switch(n){
case"hex":
return hexWrite(this,r,t,i);
case"utf8":
case"utf-8":
return utf8Write(this,r,t,i);
case"ascii":
return asciiWrite(this,r,t,i);
case"latin1":
case"binary":
return latin1Write(this,r,t,i);
case"base64":
return base64Write(this,r,t,i);
case"ucs2":
case"ucs-2":
case"utf16le":
case"utf-16le":
return ucs2Write(this,r,t,i);
default:
if(o)throw new TypeError("Unknown encoding: "+n);
n=(""+n).toLowerCase();
o=true;}}

};
Buffer.prototype.toJSON=function e(){
return{
type:"Buffer",
data:Array.prototype.slice.call(this._arr||this,0)};

};

function base64Slice(e,r,t){
if(0===r&&t===e.length)return fromByteArray(e);else
return fromByteArray(e.slice(r,t));
}

function utf8Slice(e,r,t){
t=Math.min(e.length,t);
var i=[];
var n=r;
while(n<t){
var a=e[n];
var o=null;
var u=a>239?4:a>223?3:a>191?2:1;
if(n+u<=t){
var f,s,l,c;
switch(u){
case 1:
if(a<128)o=a;
break;
case 2:
f=e[n+1];
if(128===(192&f)){
c=(31&a)<<6|63&f;
if(c>127)o=c;
}
break;
case 3:
f=e[n+1];
s=e[n+2];
if(128===(192&f)&&128===(192&s)){
c=(15&a)<<12|(63&f)<<6|63&s;
if(c>2047&&(c<55296||c>57343))o=c;
}
break;
case 4:
f=e[n+1];
s=e[n+2];
l=e[n+3];
if(128===(192&f)&&128===(192&s)&&128===(192&l)){
c=(15&a)<<18|(63&f)<<12|(63&s)<<6|63&l;
if(c>65535&&c<1114112)o=c;
}}

}
if(null===o){
o=65533;
u=1;
}else if(o>65535){
o-=65536;
i.push(o>>>10&1023|55296);
o=56320|1023&o;
}
i.push(o);
n+=u;
}
return decodeCodePointsArray(i);
}
var MAX_ARGUMENTS_LENGTH=4096;

function decodeCodePointsArray(e){
var r=e.length;
if(r<=MAX_ARGUMENTS_LENGTH)return String.fromCharCode.apply(String,e);
var t="";
var i=0;
while(i<r){t+=String.fromCharCode.apply(String,e.slice(i,i+=MAX_ARGUMENTS_LENGTH));}
return t;
}

function asciiSlice(e,r,t){
var i="";
t=Math.min(e.length,t);
for(var n=r;n<t;++n){i+=String.fromCharCode(127&e[n]);}
return i;
}

function latin1Slice(e,r,t){
var i="";
t=Math.min(e.length,t);
for(var n=r;n<t;++n){i+=String.fromCharCode(e[n]);}
return i;
}

function hexSlice(e,r,t){
var i=e.length;
if(!r||r<0)r=0;
if(!t||t<0||t>i)t=i;
var n="";
for(var a=r;a<t;++a){n+=toHex(e[a]);}
return n;
}

function utf16leSlice(e,r,t){
var i=e.slice(r,t);
var n="";
for(var a=0;a<i.length;a+=2){n+=String.fromCharCode(i[a]+256*i[a+1]);}
return n;
}
Buffer.prototype.slice=function e(r,t){
var i=this.length;
r=~~r;
t=void 0===t?i:~~t;
if(r<0){
r+=i;
if(r<0)r=0;
}else if(r>i)r=i;
if(t<0){
t+=i;
if(t<0)t=0;
}else if(t>i)t=i;
if(t<r)t=r;
var n;
if(Buffer.TYPED_ARRAY_SUPPORT){
n=this.subarray(r,t);
n.__proto__=Buffer.prototype;
}else{
var a=t-r;
n=new Buffer(a,void 0);
for(var o=0;o<a;++o){n[o]=this[o+r];}
}
return n;
};

function checkOffset(e,r,t){
if(e%1!==0||e<0)throw new RangeError("offset is not uint");
if(e+r>t)throw new RangeError("Trying to access beyond buffer length");
}
Buffer.prototype.readUIntLE=function e(r,t,i){
r|=0;
t|=0;
if(!i)checkOffset(r,t,this.length);
var n=this[r];
var a=1;
var o=0;
while(++o<t&&(a*=256)){n+=this[r+o]*a;}
return n;
};
Buffer.prototype.readUIntBE=function e(r,t,i){
r|=0;
t|=0;
if(!i)checkOffset(r,t,this.length);
var n=this[r+--t];
var a=1;
while(t>0&&(a*=256)){n+=this[r+--t]*a;}
return n;
};
Buffer.prototype.readUInt8=function e(r,t){
if(!t)checkOffset(r,1,this.length);
return this[r];
};
Buffer.prototype.readUInt16LE=function e(r,t){
if(!t)checkOffset(r,2,this.length);
return this[r]|this[r+1]<<8;
};
Buffer.prototype.readUInt16BE=function e(r,t){
if(!t)checkOffset(r,2,this.length);
return this[r]<<8|this[r+1];
};
Buffer.prototype.readUInt32LE=function e(r,t){
if(!t)checkOffset(r,4,this.length);
return(this[r]|this[r+1]<<8|this[r+2]<<16)+16777216*this[r+3];
};
Buffer.prototype.readUInt32BE=function e(r,t){
if(!t)checkOffset(r,4,this.length);
return 16777216*this[r]+(this[r+1]<<16|this[r+2]<<8|this[r+3]);
};
Buffer.prototype.readIntLE=function e(r,t,i){
r|=0;
t|=0;
if(!i)checkOffset(r,t,this.length);
var n=this[r];
var a=1;
var o=0;
while(++o<t&&(a*=256)){n+=this[r+o]*a;}
a*=128;
if(n>=a)n-=Math.pow(2,8*t);
return n;
};
Buffer.prototype.readIntBE=function e(r,t,i){
r|=0;
t|=0;
if(!i)checkOffset(r,t,this.length);
var n=t;
var a=1;
var o=this[r+--n];
while(n>0&&(a*=256)){o+=this[r+--n]*a;}
a*=128;
if(o>=a)o-=Math.pow(2,8*t);
return o;
};
Buffer.prototype.readInt8=function e(r,t){
if(!t)checkOffset(r,1,this.length);
if(!(128&this[r]))return this[r];
return-1*(255-this[r]+1);
};
Buffer.prototype.readInt16LE=function e(r,t){
if(!t)checkOffset(r,2,this.length);
var i=this[r]|this[r+1]<<8;
return 32768&i?4294901760|i:i;
};
Buffer.prototype.readInt16BE=function e(r,t){
if(!t)checkOffset(r,2,this.length);
var i=this[r+1]|this[r]<<8;
return 32768&i?4294901760|i:i;
};
Buffer.prototype.readInt32LE=function e(r,t){
if(!t)checkOffset(r,4,this.length);
return this[r]|this[r+1]<<8|this[r+2]<<16|this[r+3]<<24;
};
Buffer.prototype.readInt32BE=function e(r,t){
if(!t)checkOffset(r,4,this.length);
return this[r]<<24|this[r+1]<<16|this[r+2]<<8|this[r+3];
};
Buffer.prototype.readFloatLE=function e(r,t){
if(!t)checkOffset(r,4,this.length);
return read$1(this,r,true,23,4);
};
Buffer.prototype.readFloatBE=function e(r,t){
if(!t)checkOffset(r,4,this.length);
return read$1(this,r,false,23,4);
};
Buffer.prototype.readDoubleLE=function e(r,t){
if(!t)checkOffset(r,8,this.length);
return read$1(this,r,true,52,8);
};
Buffer.prototype.readDoubleBE=function e(r,t){
if(!t)checkOffset(r,8,this.length);
return read$1(this,r,false,52,8);
};

function checkInt(e,r,t,i,n,a){
if(!internalIsBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');
if(r>n||r<a)throw new RangeError('"value" argument is out of bounds');
if(t+i>e.length)throw new RangeError("Index out of range");
}
Buffer.prototype.writeUIntLE=function e(r,t,i,n){
r=+r;
t|=0;
i|=0;
if(!n){
var a=Math.pow(2,8*i)-1;
checkInt(this,r,t,i,a,0);
}
var o=1;
var u=0;
this[t]=255&r;
while(++u<i&&(o*=256)){this[t+u]=r/o&255;}
return t+i;
};
Buffer.prototype.writeUIntBE=function e(r,t,i,n){
r=+r;
t|=0;
i|=0;
if(!n){
var a=Math.pow(2,8*i)-1;
checkInt(this,r,t,i,a,0);
}
var o=i-1;
var u=1;
this[t+o]=255&r;
while(--o>=0&&(u*=256)){this[t+o]=r/u&255;}
return t+i;
};
Buffer.prototype.writeUInt8=function e(r,t,i){
r=+r;
t|=0;
if(!i)checkInt(this,r,t,1,255,0);
if(!Buffer.TYPED_ARRAY_SUPPORT)r=Math.floor(r);
this[t]=255&r;
return t+1;
};

function objectWriteUInt16(e,r,t,i){
if(r<0)r=65535+r+1;
for(var n=0,a=Math.min(e.length-t,2);n<a;++n){e[t+n]=(r&255<<8*(i?n:1-n))>>>8*(i?n:1-n);}
}
Buffer.prototype.writeUInt16LE=function e(r,t,i){
r=+r;
t|=0;
if(!i)checkInt(this,r,t,2,65535,0);
if(Buffer.TYPED_ARRAY_SUPPORT){
this[t]=255&r;
this[t+1]=r>>>8;
}else objectWriteUInt16(this,r,t,true);
return t+2;
};
Buffer.prototype.writeUInt16BE=function e(r,t,i){
r=+r;
t|=0;
if(!i)checkInt(this,r,t,2,65535,0);
if(Buffer.TYPED_ARRAY_SUPPORT){
this[t]=r>>>8;
this[t+1]=255&r;
}else objectWriteUInt16(this,r,t,false);
return t+2;
};

function objectWriteUInt32(e,r,t,i){
if(r<0)r=4294967295+r+1;
for(var n=0,a=Math.min(e.length-t,4);n<a;++n){e[t+n]=r>>>8*(i?n:3-n)&255;}
}
Buffer.prototype.writeUInt32LE=function e(r,t,i){
r=+r;
t|=0;
if(!i)checkInt(this,r,t,4,4294967295,0);
if(Buffer.TYPED_ARRAY_SUPPORT){
this[t+3]=r>>>24;
this[t+2]=r>>>16;
this[t+1]=r>>>8;
this[t]=255&r;
}else objectWriteUInt32(this,r,t,true);
return t+4;
};
Buffer.prototype.writeUInt32BE=function e(r,t,i){
r=+r;
t|=0;
if(!i)checkInt(this,r,t,4,4294967295,0);
if(Buffer.TYPED_ARRAY_SUPPORT){
this[t]=r>>>24;
this[t+1]=r>>>16;
this[t+2]=r>>>8;
this[t+3]=255&r;
}else objectWriteUInt32(this,r,t,false);
return t+4;
};
Buffer.prototype.writeIntLE=function e(r,t,i,n){
r=+r;
t|=0;
if(!n){
var a=Math.pow(2,8*i-1);
checkInt(this,r,t,i,a-1,-a);
}
var o=0;
var u=1;
var f=0;
this[t]=255&r;
while(++o<i&&(u*=256)){
if(r<0&&0===f&&0!==this[t+o-1])f=1;
this[t+o]=(r/u>>0)-f&255;
}
return t+i;
};
Buffer.prototype.writeIntBE=function e(r,t,i,n){
r=+r;
t|=0;
if(!n){
var a=Math.pow(2,8*i-1);
checkInt(this,r,t,i,a-1,-a);
}
var o=i-1;
var u=1;
var f=0;
this[t+o]=255&r;
while(--o>=0&&(u*=256)){
if(r<0&&0===f&&0!==this[t+o+1])f=1;
this[t+o]=(r/u>>0)-f&255;
}
return t+i;
};
Buffer.prototype.writeInt8=function e(r,t,i){
r=+r;
t|=0;
if(!i)checkInt(this,r,t,1,127,-128);
if(!Buffer.TYPED_ARRAY_SUPPORT)r=Math.floor(r);
if(r<0)r=255+r+1;
this[t]=255&r;
return t+1;
};
Buffer.prototype.writeInt16LE=function e(r,t,i){
r=+r;
t|=0;
if(!i)checkInt(this,r,t,2,32767,-32768);
if(Buffer.TYPED_ARRAY_SUPPORT){
this[t]=255&r;
this[t+1]=r>>>8;
}else objectWriteUInt16(this,r,t,true);
return t+2;
};
Buffer.prototype.writeInt16BE=function e(r,t,i){
r=+r;
t|=0;
if(!i)checkInt(this,r,t,2,32767,-32768);
if(Buffer.TYPED_ARRAY_SUPPORT){
this[t]=r>>>8;
this[t+1]=255&r;
}else objectWriteUInt16(this,r,t,false);
return t+2;
};
Buffer.prototype.writeInt32LE=function e(r,t,i){
r=+r;
t|=0;
if(!i)checkInt(this,r,t,4,2147483647,-2147483648);
if(Buffer.TYPED_ARRAY_SUPPORT){
this[t]=255&r;
this[t+1]=r>>>8;
this[t+2]=r>>>16;
this[t+3]=r>>>24;
}else objectWriteUInt32(this,r,t,true);
return t+4;
};
Buffer.prototype.writeInt32BE=function e(r,t,i){
r=+r;
t|=0;
if(!i)checkInt(this,r,t,4,2147483647,-2147483648);
if(r<0)r=4294967295+r+1;
if(Buffer.TYPED_ARRAY_SUPPORT){
this[t]=r>>>24;
this[t+1]=r>>>16;
this[t+2]=r>>>8;
this[t+3]=255&r;
}else objectWriteUInt32(this,r,t,false);
return t+4;
};

function checkIEEE754(e,r,t,i,n,a){
if(t+i>e.length)throw new RangeError("Index out of range");
if(t<0)throw new RangeError("Index out of range");
}

function writeFloat(e,r,t,i,n){
if(!n)checkIEEE754(e,r,t,4);
write(e,r,t,i,23,4);
return t+4;
}
Buffer.prototype.writeFloatLE=function e(r,t,i){
return writeFloat(this,r,t,true,i);
};
Buffer.prototype.writeFloatBE=function e(r,t,i){
return writeFloat(this,r,t,false,i);
};

function writeDouble(e,r,t,i,n){
if(!n)checkIEEE754(e,r,t,8);
write(e,r,t,i,52,8);
return t+8;
}
Buffer.prototype.writeDoubleLE=function e(r,t,i){
return writeDouble(this,r,t,true,i);
};
Buffer.prototype.writeDoubleBE=function e(r,t,i){
return writeDouble(this,r,t,false,i);
};
Buffer.prototype.copy=function e(r,t,i,n){
if(!i)i=0;
if(!n&&0!==n)n=this.length;
if(t>=r.length)t=r.length;
if(!t)t=0;
if(n>0&&n<i)n=i;
if(n===i)return 0;
if(0===r.length||0===this.length)return 0;
if(t<0)throw new RangeError("targetStart out of bounds");
if(i<0||i>=this.length)throw new RangeError("sourceStart out of bounds");
if(n<0)throw new RangeError("sourceEnd out of bounds");
if(n>this.length)n=this.length;
if(r.length-t<n-i)n=r.length-t+i;
var a=n-i;
var o;
if(this===r&&i<t&&t<n)
for(o=a-1;o>=0;--o){r[o+t]=this[o+i];}else
if(a<1e3||!Buffer.TYPED_ARRAY_SUPPORT)
for(o=0;o<a;++o){r[o+t]=this[o+i];}else
Uint8Array.prototype.set.call(r,this.subarray(i,i+a),t);
return a;
};
Buffer.prototype.fill=function e(r,t,i,n){
if("string"===typeof r){
if("string"===typeof t){
n=t;
t=0;
i=this.length;
}else if("string"===typeof i){
n=i;
i=this.length;
}
if(1===r.length){
var a=r.charCodeAt(0);
if(a<256)r=a;
}
if(void 0!==n&&"string"!==typeof n)throw new TypeError("encoding must be a string");
if("string"===typeof n&&!Buffer.isEncoding(n))throw new TypeError("Unknown encoding: "+n);
}else if("number"===typeof r)r&=255;
if(t<0||this.length<t||this.length<i)throw new RangeError("Out of range index");
if(i<=t)return this;
t>>>=0;
i=void 0===i?this.length:i>>>0;
if(!r)r=0;
var o;
if("number"===typeof r)
for(o=t;o<i;++o){this[o]=r;}else
{
var u=internalIsBuffer(r)?r:utf8ToBytes(new Buffer(r,n).toString());
var f=u.length;
for(o=0;o<i-t;++o){this[o+t]=u[o%f];}
}
return this;
};
var INVALID_BASE64_RE=/[^+\/0-9A-Za-z-_]/g;

function base64clean(e){
e=stringtrim(e).replace(INVALID_BASE64_RE,"");
if(e.length<2)return"";
while(e.length%4!==0){e+="=";}
return e;
}

function stringtrim(e){
if(e.trim)return e.trim();
return e.replace(/^\s+|\s+$/g,"");
}

function toHex(e){
if(e<16)return"0"+e.toString(16);
return e.toString(16);
}

function utf8ToBytes(e,r){
r=r||1/0;
var t;
var i=e.length;
var n=null;
var a=[];
for(var o=0;o<i;++o){
t=e.charCodeAt(o);
if(t>55295&&t<57344){
if(!n){
if(t>56319){
if((r-=3)>-1)a.push(239,191,189);
continue;
}else if(o+1===i){
if((r-=3)>-1)a.push(239,191,189);
continue;
}
n=t;
continue;
}
if(t<56320){
if((r-=3)>-1)a.push(239,191,189);
n=t;
continue;
}
t=(n-55296<<10|t-56320)+65536;
}else if(n)
if((r-=3)>-1)a.push(239,191,189);
n=null;
if(t<128){
if((r-=1)<0)break;
a.push(t);
}else if(t<2048){
if((r-=2)<0)break;
a.push(t>>6|192,63&t|128);
}else if(t<65536){
if((r-=3)<0)break;
a.push(t>>12|224,t>>6&63|128,63&t|128);
}else if(t<1114112){
if((r-=4)<0)break;
a.push(t>>18|240,t>>12&63|128,t>>6&63|128,63&t|128);
}else throw new Error("Invalid code point");
}
return a;
}

function asciiToBytes(e){
var r=[];
for(var t=0;t<e.length;++t){r.push(255&e.charCodeAt(t));}
return r;
}

function utf16leToBytes(e,r){
var t,i,n;
var a=[];
for(var o=0;o<e.length;++o){
if((r-=2)<0)break;
t=e.charCodeAt(o);
i=t>>8;
n=t%256;
a.push(n);
a.push(i);
}
return a;
}

function base64ToBytes(e){
return toByteArray(base64clean(e));
}

function blitBuffer(e,r,t,i){
for(var n=0;n<i;++n){
if(n+t>=r.length||n>=e.length)break;
r[n+t]=e[n];
}
return n;
}

function isnan(e){
return e!==e;
}

function isBuffer$1(e){
return null!=e&&(!!e._isBuffer||isFastBuffer(e)||isSlowBuffer$1(e));
}

function isFastBuffer(e){
return!!e.constructor&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e);
}

function isSlowBuffer$1(e){
return"function"===typeof e.readFloatLE&&"function"===typeof e.slice&&isFastBuffer(e.slice(0,0));
}
var bufferEs6=Object.freeze({
INSPECT_MAX_BYTES:INSPECT_MAX_BYTES,
kMaxLength:_kMaxLength,
Buffer:Buffer,
SlowBuffer:SlowBuffer,
isBuffer:isBuffer$1});

var base64=createCommonjsModule(function(e,r){
(function(global,r){
e.exports=r(global);
})("undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof commonjsGlobal?commonjsGlobal:commonjsGlobal,function(global){
var r=global.Base64;
var t="2.4.8";
var i;
if(e.exports)
if("undefined"!=typeof navigator&&"ReactNative"==navigator.product);else
try{
i=bufferEs6.Buffer;
}catch(e){}
var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var a=function(e){
var r={};
for(var t=0,i=e.length;t<i;t++){r[e.charAt(t)]=t;}
return r;
}(n);
var o=String.fromCharCode;
var u=function u(e){
if(e.length<2){
var r=e.charCodeAt(0);
return r<128?e:r<2048?o(192|r>>>6)+o(128|63&r):o(224|r>>>12&15)+o(128|r>>>6&63)+o(128|63&r);
}else{
var r=65536+1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320);
return o(240|r>>>18&7)+o(128|r>>>12&63)+o(128|r>>>6&63)+o(128|63&r);
}
};
var f=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
var s=function s(e){
return e.replace(f,u);
};
var l=function l(e){
var r=[0,2,1][e.length%3],
t=e.charCodeAt(0)<<16|(e.length>1?e.charCodeAt(1):0)<<8|(e.length>2?e.charCodeAt(2):0),
i=[n.charAt(t>>>18),n.charAt(t>>>12&63),r>=2?"=":n.charAt(t>>>6&63),r>=1?"=":n.charAt(63&t)];
return i.join("");
};
var c=global.btoa?function(e){
return global.btoa(e);
}:function(e){
return e.replace(/[\s\S]{1,3}/g,l);
};
var h=i?i.from&&Uint8Array&&i.from!==Uint8Array.from?function(e){
return(e.constructor===i.constructor?e:i.from(e)).toString("base64");
}:function(e){
return(e.constructor===i.constructor?e:new i(e)).toString("base64");
}:function(e){
return c(s(e));
};
var d=function d(e,r){
return!r?h(String(e)):h(String(e)).replace(/[+\/]/g,function(e){
return"+"==e?"-":"_";
}).replace(/=/g,"");
};
var v=function v(e){
return d(e,true);
};
var p=new RegExp(["[À-ß][-¿]","[à-ï][-¿]{2}","[ð-÷][-¿]{3}"].join("|"),"g");
var _=function _(e){
switch(e.length){
case 4:
var r=(7&e.charCodeAt(0))<<18|(63&e.charCodeAt(1))<<12|(63&e.charCodeAt(2))<<6|63&e.charCodeAt(3),
t=r-65536;
return o((t>>>10)+55296)+o((1023&t)+56320);
case 3:
return o((15&e.charCodeAt(0))<<12|(63&e.charCodeAt(1))<<6|63&e.charCodeAt(2));
default:
return o((31&e.charCodeAt(0))<<6|63&e.charCodeAt(1));}

};
var m=function m(e){
return e.replace(p,_);
};
var y=function y(e){
var r=e.length,
t=r%4,
i=(r>0?a[e.charAt(0)]<<18:0)|(r>1?a[e.charAt(1)]<<12:0)|(r>2?a[e.charAt(2)]<<6:0)|(r>3?a[e.charAt(3)]:0),
n=[o(i>>>16),o(i>>>8&255),o(255&i)];
n.length-=[0,0,2,1][t];
return n.join("");
};
var g=global.atob?function(e){
return global.atob(e);
}:function(e){
return e.replace(/[\s\S]{1,4}/g,y);
};
var b=i?i.from&&Uint8Array&&i.from!==Uint8Array.from?function(e){
return(e.constructor===i.constructor?e:i.from(e,"base64")).toString();
}:function(e){
return(e.constructor===i.constructor?e:new i(e,"base64")).toString();
}:function(e){
return m(g(e));
};
var w=function w(e){
return b(String(e).replace(/[-_]/g,function(e){
return"-"==e?"+":"/";
}).replace(/[^A-Za-z0-9\+\/]/g,""));
};
var A=function A(){
var e=global.Base64;
global.Base64=r;
return e;
};
global.Base64={
VERSION:t,
atob:g,
btoa:c,
fromBase64:w,
toBase64:d,
utob:s,
encode:d,
encodeURI:v,
btou:m,
decode:w,
noConflict:A};

if("function"===typeof Object.defineProperty){
var T=function T(e){
return{
value:e,
enumerable:false,
writable:true,
configurable:true};

};
global.Base64.extendString=function(){
Object.defineProperty(String.prototype,"fromBase64",T(function(){
return w(this);
}));
Object.defineProperty(String.prototype,"toBase64",T(function(e){
return d(this,e);
}));
Object.defineProperty(String.prototype,"toBase64URI",T(function(){
return d(this,true);
}));
};
}
if(global["Meteor"])Base64=global.Base64;
if(e.exports)e.exports.Base64=global.Base64;
return{
Base64:global.Base64};

});
});
var base64_1=base64.Base64;var
WatchStat=/*#__PURE__*/function(){
function WatchStat(e){_classCallCheck(this,WatchStat);
this.set=e;
this.statistics=null;
this.timeCountInterval=null;
this.currentTime=0;
this.recordCurrentTime=0;
this.playDuration=0;
this.PLAY_TYPE={
PLAY:"PLAY",
PAUSE:"PAUSE"};

this.playStat=this.PLAY_TYPE.PAUSE;
this.sendTimeStamp=Date.now();
this.isFirstSendLog=true;
this.initStatistics();
}_createClass(WatchStat,[{key:"start",value:function start()
{var _this3=this;
this.stop();
this.timeCountInterval=setInterval(function(){
if(_this3.recordCurrentTime===_this3.currentTime){
_this3.playStat=_this3.PLAY_TYPE.PAUSE;
return;
}
_this3.recordCurrentTime=_this3.currentTime;
_this3.playStat=_this3.PLAY_TYPE.PLAY;
_this3.playDuration++;
_this3.send();
},1e3);
}},{key:"initStatistics",value:function initStatistics()
{var _this$set5=




this.set,e=_this$set5.sid,r=_this$set5.params,t=_this$set5.viewerInfo;
this.statistics={
sid:this.base64(t.viewerId||e),
param1:this.base64(r.param1),
param2:this.base64(t.viewerName||r.param2),
param3:this.base64(r.param3),
param4:this.base64(r.param4),
param5:this.base64(r.param5)};

}},{key:"timeUpdate",value:function timeUpdate(
e){var

r=
this.set.useAudio;
if(r){
this.currentTime=e;
return;
}
if(e&&e.detail&&e.detail.currentTime)this.currentTime=e.detail.currentTime;
}},{key:"j2s_realPlayStatus",value:function j2s_realPlayStatus()
{var

e=
this.playDuration;var _this$set6=



this.set,r=_this$set6.pid,t=_this$set6.vid;
return{
playDuration:e,
pid:r,
vid:t};

}},{key:"send",value:function send()
{
var e=Date.now();var

r=




this.sendTimeStamp,t=this.playStat,i=this.PLAY_TYPE,n=this.playDuration,a=this.currentTime;var _this$set7=









this.set,o=_this$set7.pid,u=_this$set7.vid,f=_this$set7.uid,s=_this$set7.duration,l=_this$set7.sid,c=_this$set7.params,h=_this$set7.version,d=_this$set7.viewerInfo;
if(e-r<10*1e3||t!==i.PLAY&&n<=0)return;
this.sendTimeStamp=e;
var v="https://prtas.videocc.net/v2/view";
var p=Math.floor(a);
var _=0;
var m="rtas.net".concat(o).concat(u).concat(_).concat(n).concat(p);
var y=md5(m);
var g={
pid:o,
vid:u,
uid:f,
flow:_,
pd:n,
sd:n,
cts:p,
duration:s,
pn:"webapp_vod",
pv:h,
sign:y,
ts:e};

Object.assign(g,this.statistics);
if(this.isFirstSendLog){
this.isFirstSendLog=false;
g.ute="bop";
g.viewerAvatar=this.base64(d.viewerAvatar);
}
ajxa.request(v,"GET",g);
}},{key:"base64",value:function base64(
e){
return e?base64_1.encode(e):"";
}},{key:"stop",value:function stop()
{
if(this.timeCountInterval){
clearInterval(this.timeCountInterval);
this.timeCountInterval=null;
}
this.playDuration=0;
}}]);return WatchStat;}();var

Player=/*#__PURE__*/function(){
function Player(e){_classCallCheck(this,Player);
this.set=Object.assign({
params:{},
viewerInfo:{}},
e);
this.data={};
this.errorPanel=null;
this.jsonLoad=null;
this.watchStat=null;
this.init();
}_createClass(Player,[{key:"init",value:function(){var _init=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee5(){var e;return _regeneratorRuntime.wrap(function _callee5$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:

this.initModule();

e=
this.set.vid;if(
e){_context5.next=4;break;}return _context5.abrupt("return",this.errorPanel.emit(1001));case 4:
this.initId();_context5.next=7;return(
this.loadJson());case 7:
this.result();
this.sendStats();case 9:case"end":return _context5.stop();}}},_callee5,this);}));function init(){return _init.apply(this,arguments);}return init;}()},{key:"initId",value:function initId()

{
var e=Date.now();
var r=Math.floor(1e6*Math.random()+1e6);
var t="".concat(e,"X").concat(r);
this.set.pid=t;
this.set.uid=this.set.vid.substring(0,10);
}},{key:"initModule",value:function initModule()
{
this.errorPanel=new ErrorPanel(this.set);
this.jsonLoad=new JsonLoad(this.set);
this.watchStat=new WatchStat(this.set);
}},{key:"loadJson",value:function(){var _loadJson=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee6(){return _regeneratorRuntime.wrap(function _callee6$(_context6){while(1){switch(_context6.prev=_context6.next){case 0:_context6.next=2;return(

this.jsonLoad.getVodJson());case 2:this.data=_context6.sent;
this.set.duration=parseInt(this.data.duration);case 4:case"end":return _context6.stop();}}},_callee6,this);}));function loadJson(){return _loadJson.apply(this,arguments);}return loadJson;}()},{key:"result",value:function result()

{var _this$data4=



this.data,e=_this$data4.outflow,r=_this$data4.timeoutflow;
if("true"===e)return this.errorPanel.emit(1002);
if("true"===r)return this.errorPanel.emit(1003);
this.data.type="success";
this.set.callback(this.data);
}},{key:"sendStats",value:function sendStats()
{
this.watchStat.start();
}},{key:"timeUpdate",value:function timeUpdate(
e){
this.watchStat.timeUpdate(e);
}},{key:"destroy",value:function destroy()
{
this.watchStat.stop();
}},{key:"j2s_realPlayStatus",value:function j2s_realPlayStatus()
{
return this.watchStat.j2s_realPlayStatus();
}}]);return Player;}();

var polyvVodePlayer={
version:"v1.9.1",
buidMetaData:20200515,
getVideo:function getVideo(e){
e.version=this.version;
return new Player(e);
},
getPreviewVideo:function getPreviewVideo(e){
e.isPreviewMode=true;
e.version=this.version;
return new Player(e);
}};

return polyvVodePlayer;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../QMDownload/SoftMgr/HBuilderX/plugins/uniapp-cli/node_modules/webpack/buildin/global.js */ 3), __webpack_require__(/*! ./../../../../../../../QMDownload/SoftMgr/HBuilderX/plugins/uniapp-cli/node_modules/node-libs-browser/mock/process.js */ 18)))

/***/ }),
/* 18 */
/*!********************************************************!*\
  !*** ./node_modules/node-libs-browser/mock/process.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    setTimeout(function () {
        fn.apply(null, args);
    }, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__(/*! path */ 19);
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


/***/ }),
/* 19 */
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node-libs-browser/mock/process.js */ 18)))

/***/ }),
/* 20 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 21);

/***/ }),
/* 21 */
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 22);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 22 */
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ })
]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map