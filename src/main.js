import Vue from 'vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ru-RU'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import App from './App.vue'

Vue.use(ElementUI, { locale })
Vue.use(router)

new Vue({
  el: '#app',
  ElementUI,
  router,
  render: h => h(App)
})
