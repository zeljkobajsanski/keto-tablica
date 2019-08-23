import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'jquery'
import 'bootstrap/dist/js/bootstrap.min'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from "@/router";
import VueDragDrop from 'vue-drag-drop';
import 'font-awesome/css/font-awesome.min.css'
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(VueDragDrop);
Vue.component('VueSlider', VueSlider)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
