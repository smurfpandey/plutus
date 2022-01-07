import HomePage from './components/pages/home.vue';
import NPSPage from './components/pages//nps/nps.vue';
import EPFPage from './components/pages/epf.vue';
import PPFPage from './components/pages/ppf.vue';
import StocksPage from './components/pages/stocks.vue';

const routes = [
  { path: '/', component: HomePage, name: 'Dashboard' },
  { path: '/nps', component: NPSPage, name: 'NPS' },
  { path: '/epf', component: EPFPage, name: 'EPF' },
  { path: '/ppf', component: PPFPage, name: 'PPF' },
  { path: '/stocks', component: StocksPage, name: 'Stocks' },
];

export default routes;
