import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import vuetify from '@/plugins/vuetify'

Vue.use(VueResource)

Vue.config.productionTip = false

//Vue filters
// Vue.filter('to-uppercase', function (value){
//   return value.toUpperCase();
// })

Vue.filter('snippet', function (value){
  return value.slice(0, 100) + '...';
})

Vue.filter('search', function (value){
  return value.contains()
})



new Vue({
  render: h => h(App),
  vuetify,
}).$mount('#app')
