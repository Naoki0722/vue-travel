import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Oita from '../views/Oita.vue'
import Pref from "../views/Pref.vue"
import Sightseeing from "../views/Sightseeing.vue"
import ReviewPost from "../views/ReviewPost.vue"
import SightseeingPost from "../views/SightseeingPost.vue"
import Thanks from "../views/Thanks.vue"
import ContactThanks from "../views/ContactThanks.vue"


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
    path: "/Thanks",
    name: "Thanks",
    component: Thanks,
  },
  {
    path: "/ContactThanks",
    name: "ContactThanks",
    component: ContactThanks,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
