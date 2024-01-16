<template>
  <div>

    <input v-model="username" placeholder="Username">
    <br/>

    <input v-model="email" placeholder="Email">
    <br/>

    <input type="password" v-model="password" placeholder="Password">
    <br/>

    <button @click="signup">Sign Up</button>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      email: '',
      password: ''
    };
  },
  methods: {
    signup() {
      axios.post('http://localhost:5052/api/auth/signup', {
        username: this.username,
        email: this.email,
        password: this.password
      })
      .then(response => {
        localStorage.setItem('token', response.data.token);
        this.$router.push('/'); 
      })
      .catch(error => console.error(error));
    }
  }
}
</script>
