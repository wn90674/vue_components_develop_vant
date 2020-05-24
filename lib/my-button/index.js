"use strict";

exports.__esModule = true;
exports.default = void 0;

require("./index-sfc.css");

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "button"
  }, [_c('button', {
    on: {
      "click": _vm.onClick
    }
  }, [_vm._t("default")], 2)]);
};

var __vue_staticRenderFns__ = [];
var _default = {
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__,
  name: 'my-button',
  props: {
    text: {
      type: String,
      default: '按钮'
    }
  },
  methods: {
    onClick: function onClick() {
      console.log('click');
      window.alert('click');
      this.$emit('click');
    }
  }
};
exports.default = _default;