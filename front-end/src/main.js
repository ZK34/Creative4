import Vue from 'vue';
import App from './App.vue';
import router from "./router";
import catalog from './catalog.js'

Vue.config.productionTip = false;

let data = {
  items: catalog,
  itemId: 0,
  reveiwerName: "",
  reviewItem: {
    itemId: 0,
    description: "Please go back to the main page and select an item to review."
  },
  itemReviews: []
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
