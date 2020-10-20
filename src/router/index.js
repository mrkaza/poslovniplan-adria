import Vue from 'vue'
import VueRouter from 'vue-router'
import Pocetna from '../views/Pocetna.vue'
import ProvjeraProjekta from '../views/ProvjeraProjekta.vue'
import Kontakt from '../views/Kontakt.vue'
import PoslovniPlan from '../views/PoslovniPlan.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Pocetna',
    component: Pocetna
  },
  {
    path: '/provjera-projekta',
    name: 'Provjera projekta',
    component: ProvjeraProjekta
  },
  {
    path: '/kontakt',
    name: 'Kontakt',
    component: Kontakt
  },
  {
    path: '/poslovni-plan',
    name: 'Poslovni plan',
    component: PoslovniPlan
  },
  {
    path: '/usluge',
    name: 'Usluge',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to,from,savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
