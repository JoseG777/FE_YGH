<template>
    <div>

      <input v-model="login" placeholder="Username / Email">
      <br/>

      <input type="password" v-model="password" placeholder="Password">
      <br/>

      <button @click="signin">Sign In</button>

    </div>
</template>
  
<script>
import axios from 'axios';
import { useAuthStore } from '../authStore';

export default {
  data() {
    return {
      login: '',
      password: ''
    };
  },
  methods: {
    signin() {
      axios.post('http://localhost:5052/api/auth/signin', {
        login: this.login,
        password: this.password
      })
      .then(response => {
        const authStore = useAuthStore();
        authStore.logIn(response.data.token);
        this.$router.push('/');
      })
      .catch(error => console.error(error));
    }
  }
}

</script>
  
  