import Vue from "vue";
import App from "./App.vue";
// import "./registerServiceWorker";

import { Fragment } from "vue-fragment";
Vue.component("Fragment", Fragment);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
