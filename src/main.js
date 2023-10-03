import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from '../src/components/router/router'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { sweetAlert } from 'sweetalert2/dist/sweetalert2';

const app = createApp(App)
app.use(router)
app.use(VueSweetalert2)
app.mount('#app')
