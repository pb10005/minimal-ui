import Vue from "vue";
import App from "./App.vue";

import MinimalUI from "../index.js";
Vue.use(MinimalUI);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
