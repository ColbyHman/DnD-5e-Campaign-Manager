// router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Players from './views/Players.vue';
import Inventory from './views/Inventory.vue'
import ItemLibrary from './views/ItemLibrary.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/players', component: Players },
  { path: '/inventory', component: Inventory },
  { path: '/item-library', component: ItemLibrary },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
