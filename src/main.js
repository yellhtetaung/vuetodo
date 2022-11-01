import Vue from "vue";
import App from "./App.vue";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./assets/App.css";
import Notifications from "vue-notification";
import "animate.css";

Vue.use(Notifications);
Vue.config.productionTip = false;

new Vue({ store, render: (h) => h(App) }).$mount("#app");
