<template>
  <nav class="navbar">
    <div class="navbar-container">
      <router-link to="/" class="navbar-brand"> Home </router-link>

      <div class="navbar-right">
        <!-- Show these links only if the user is not logged in -->
        <router-link v-if="!authStore.isLoggedIn" to="/signin" class="navbar-item"> Sign In </router-link>
        <router-link v-if="!authStore.isLoggedIn" to="/signup" class="navbar-item"> Sign Up </router-link>
  
        <!-- Show these links only if the user is logged in -->
        <router-link v-if="authStore.isLoggedIn" to="/search" class="navbar-item"> Search </router-link>
        <router-link v-if="authStore.isLoggedIn" to="/profile" class="navbar-item"> Profile </router-link>
        <a v-if="authStore.isLoggedIn" class="navbar-item logout-link" @click="logout"> Logout </a>
      </div>
    </div>
  </nav>
</template>
    
<script>
import { useAuthStore } from '../authStore';

export default {
  setup() {
    const authStore = useAuthStore();
    authStore.checkAuth();

    return { authStore };
  },
  methods: {
    logout() {
      const authStore = useAuthStore();
      authStore.logOut();
      this.$router.push('/');
    }
  }
};

</script>
  
<style scoped>
  .navbar {
    background-color: #333333;
    overflow: hidden;
    position: fixed;
    top: 0;
    width: 100%;
    box-shadow: 0 2px 4px rgba(0,0,0,.1);
  }
  
  .navbar-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
  }
  
  .navbar-brand {
    margin-right: auto;
    color: #ffffff;
    text-decoration: none;
    font-weight: 500;
    padding: 10px 15px;
    display: inline-block;
  }
  
  .navbar-right {
    margin-left: auto;
  }
  
  .navbar-item, .logout-link {
    margin-left: 20px;
    text-decoration: none;
    color: #ffffff;
    font-weight: 500;
    padding: 10px 15px;
    display: inline-block;
    cursor: pointer;
  }

  .navbar-item:hover, .logout-link:hover, .navbar-brand:hover {
    text-decoration: underline;
    background-color: #474747;
  }
</style>
