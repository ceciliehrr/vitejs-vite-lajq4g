import Vue from 'vue';
import App from './App.vue';
import './assets/main.scss';
//import PktVue from "@oslokommune/punkt-vue2";
import {
  PktHeader,
  PktFooterSimple,
  PktIcon,
  PktButton,
} from '@oslokommune/punkt-vue2';
import { faker } from '@faker-js/faker';

// Importerer enkeltkomponenter
Vue.component('pkt-header', PktHeader);
Vue.component('pkt-footer-simple', PktFooterSimple);
Vue.component('pkt-button', PktButton);
Vue.component('pkt-icon', PktIcon); // for ikoner

// Importerer alle komponenter
// Vue.use(PktVue);

Vue.use(faker);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
