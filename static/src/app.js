'use strict';

import 'animate.css';
import './app.css';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import * as dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import VueApp from './vue/App.vue';
import AppRoutes from './vue/routes';

dayjs.extend(relativeTime);

function App() {

  this.init = () => {
    const router = createRouter({
      // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
      history: createWebHistory(),
      routes: AppRoutes,
    });

    const mainApp = createApp(VueApp);
    mainApp.config.globalProperties.$filters = {
      epochToHuman: (value) => {
        if (!value) return '';
        const dtTimestamp = dayjs.unix(value);
        return dtTimestamp.format('DD-MMM-YYYY');
      },
      epochToRelative: (value) => {
        if (!value) return '';

        const dtTimestamp = dayjs.unix(value);
        return dtTimestamp.fromNow();
      },
    };
    mainApp.use(router);
    mainApp.mount('#app');

  };
};
(() => {
  const app = new App();
  app.init('home');
})();
