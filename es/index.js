import "core-js/modules/es.array.for-each";
import "core-js/modules/es.function.name";
import "core-js/modules/web.dom-collections.for-each";
import MyButton from './my-button';
var version = '0.1.0';

function install(Vue) {
  var components = [MyButton];
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

export { install, version, MyButton };
export default {
  install: install,
  version: version
};