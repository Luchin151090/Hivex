import { createApp } from 'vue'
import App from './App.vue'
import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css' 

// VISTAS
import Login from './components/Login.vue'
import DashPanel from './components/DashPanel.vue'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi', // This is already the default value - only for display purposes
  },
})
const routes = [
  { path: '/', component: Login },
  { path: '/panel', component: DashPanel },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})


createApp(App).use(vuetify).use(router).mount('#app')
