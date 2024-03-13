import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue' //
import AboutView from '../views/AboutView.vue' //
import ContactsView from '../views/ContactsView.vue' //
import LoginView from '../views/LoginView.vue' //
import EyeServiceView from '../views/EyeServiceView.vue' //
import EnServiceView from '../views/EnServiceView.vue' //
import AppointmentView from '../views/AppointmentView.vue' //
import ConsultationView from '../views/ConsultationView.vue' //
// import RegisterView from '../views/RegisterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactsView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/eyeservice',
      name: 'eyeService',
      component: EyeServiceView
    },
    {
      path: '/enservice',
      name: 'enService',
      component: EnServiceView
    },
    {
      path: '/appointment',
      name: 'appointment',
      component: AppointmentView
    },
    {
      path: '/consultation',
      name: 'consultation',
      component: ConsultationView
    },
    // {
    //   path: '/register',
    //   name: 'register',
    //   component: RegisterView
    // },
  ]
})

export default router
