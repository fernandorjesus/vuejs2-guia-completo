import Vue from "vue";
import axios from "axios";

Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios.create({
      baseUrl: "https://stock-trade-4010a.firebaseio.com/"
    });
  }
});
