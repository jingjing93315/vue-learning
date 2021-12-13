import Vue from 'vue'
import App from './App.vue'

import store from './store/index';

// 全局混入
// import { mixin } from './mixin';
// Vue.mixin(mixin)

// 插件
// import plugins from './plugins';

// 应用插件
// Vue.use(plugins)

Vue.config.productionTip = false

// Vue.prototype.$eventBus = new Vue()


new Vue({
  render: h => h(App),
  store,
  beforeCreate(){
    Vue.prototype.$bus = this //安装全局事件总线 
  },
}).$mount('#app')