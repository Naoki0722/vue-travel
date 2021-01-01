import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Pref from "../views/Pref.vue"
import Sightseeing from "../views/Sightseeing.vue"
import ReviewPost from "../views/ReviewPost.vue"
import SightseeingPost from "../views/SightseeingPost.vue"
import Thanks from "../views/Thanks.vue"
import ContactThanks from "../views/ContactThanks.vue"
import NotFound from "../views/404.vue"
//下記はテスト用
import Oita from '../views/Oita.vue'
import Test from "../views/Test.vue"


Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
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
  {
    path: "/ReviewPost/:id/:number",
    name: "ReviewPost",
    component: ReviewPost,
    props: true,
  },
  {
    path: "/SightseeingPost/:id",
    name: "SightseeingPost",
    component: SightseeingPost,
    props: true,
  },
  {
    path: "/thanks/:id/:number",
    name: "Thanks",
    component: Thanks,
    props: true
  },
  {
    path: "/ContactThanks",
    name: "ContactThanks",
    component: ContactThanks,
  },
  {
    path: "*",
    name: "notFound",
    component: NotFound
  },
  {
    path: "/Oita",
    name: "Oita",
    component: Oita,
  },
  {
    path: "/Test",
    name: "Test",
    component: Test,
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      sessionStorage.setItem('positionY', savedPosition.y);
      return sessionStorage
    } else {
      sessionStorage.setItem('positionY', 0);
      return { x: 0, y: 0 }
    }
  },
  routes
})

export default router
