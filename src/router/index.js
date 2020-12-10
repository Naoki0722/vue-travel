import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Oita from '../views/Oita.vue'
import Pref from "../views/Pref.vue"
import Sightseeing from "../views/Sightseeing.vue"


Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/Oita",
    name: "Oita",
    component: Oita,
  },
  {
    path: "/pref/:id",
    name: "Pref",
    component: Pref,
    props: true,
  },
  {
    path: "/pref/:id/:number",
    name: "Sightseeing",
    component: Sightseeing,
    props: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
