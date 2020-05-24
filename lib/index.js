"use strict";

var _interopRequireDefault = require("/Users/sukidayo/Documents/vue_components_develop_vant/node_modules/@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.function.name");

require("core-js/modules/web.dom-collections.for-each");

exports.__esModule = true;
exports.install = install;
exports.default = exports.version = void 0;

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.function.name");

require("core-js/modules/web.dom-collections.for-each");

var _myButton = _interopRequireDefault(require("./my-button"));

exports.MyButton = _myButton.default;
var version = '0.1.0';
exports.version = version;

function install(Vue) {
  var components = [_myButton.default];
  components.forEach(function (item) {
    if (item.install) {
      Vue.use(item);
    } else if (item.name) {
      Vue.component(item.name, item);
    }
  });
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

var _default = {
  install: install,
  version: version
};
exports.default = _default;