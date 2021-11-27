import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 导入全局样式表
import './assets/css/golobal.css'
// 引用Element-UI框架
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引用axios
import axios from 'axios'
import VueAxios from 'vue-axios'
// 引用Echarts
import * as echarts from 'echarts'
// main.js中引入外部字体
import './assets/fonts/fonts.css'
import 'echarts-gl'
import './assets/js/purple-passion'
import VueParticles from 'vue-particles'
Vue.use(VueParticles)
Vue.prototype.$echarts = echarts
Vue.use(VueAxios, axios)
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
