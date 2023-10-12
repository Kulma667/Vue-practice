import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from '../src/components/router/router'
import { createStore } from 'vuex'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { sweetAlert } from 'sweetalert2/dist/sweetalert2';
import axios from 'axios';

const app = createApp(App)
const store = createStore({
    state () {
        title:null
    },
    mutations:{
        update(state, title)
        {
            state.title = title
        }
    },
    getters:{
        async geter(state)
        {  
            return state.title;   
        }
    },
    actions:{
        async getreq(ctx){
        var title;
        await axios
        .get('https://dummyjson.com/products/1')
        .then(response => response)
        .then(data =>{
             title = data.data.title;
        }) 
        ctx.commit('update', title)
        }   
    },
  })
  

app.use(router)
app.use(VueSweetalert2)
app.mount('#app')
app.use(store)

  
