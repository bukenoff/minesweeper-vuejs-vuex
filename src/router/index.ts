import Vue from 'vue';
import VueRouter from 'vue-router';
import Game from '../views/Game.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Game',
    component: Game,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
