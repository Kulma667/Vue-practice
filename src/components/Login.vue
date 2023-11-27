<template>
<body>
<div id="app">
    <form @submit.prevent="login">
        <div>
            <label for="username">Username:</label>
            <input type="text" id="username" v-model="username" required>
        </div>

        <div>
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password" required>
        </div>
        <button type="submit">Login</button>
    </form>
</div>
</body>
</template>
<script>
import axios from 'axios';
import VueCookies from 'vue-cookies';
export default {
        el: '#app',
        data(){ return{
            username: '',
            password: '',
            errorMessage: ''
        }},
        methods: {
            login() 
            {
                const headers = new Headers();
                headers.append('Access-Control-Allow-Origin', 'http://localhost:5173');
                const requestOptions = {
                  method: 'POST',
                  headers: headers,
                  mode: 'no-cors'
                };
                fetch('https://localhost:7196/Home/Token?Login='+String(this.username)+'&Password='+String(this.password), requestOptions)
                .then((response) => {response => response.text(); console.log(response)})
                .then(result => document.cookie = result);
            //     .then((data) => {
            //         document.cookie = 'token='+data});
            // }
        }}
    }
</script>