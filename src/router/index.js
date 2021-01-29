import Vue from 'vue'
import router from 'vue-router'
import profile from '../components/profile.vue'
import table from '../components/table.vue'
Vue.use(router)
export default new router({
  routes: [
    {
      path: '/profile',
      name: 'profile',
      component: profile
    },
    {
      path: '/',
      name: 'table',
      component: table
    }
  ]
})