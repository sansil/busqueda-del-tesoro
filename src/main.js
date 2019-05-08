import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
Vue.config.productionTip = false;
import VueConfetti from "vue-confetti";

Vue.use(VueConfetti);
// import Photoswipe from 'vue-pswipe'

// Vue.use(Photoswipe)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
