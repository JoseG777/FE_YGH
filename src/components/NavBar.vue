<template>
  <nav class="navbar">
    <div class="navbar-container">
      <router-link to="/" class="navbar-brand">Home</router-link>
      <div class="navbar-right">
        <router-link v-if="!authStore.loggedIn" to="/sign-in" class="navbar-item"
          >Sign In</router-link
        >
        <router-link v-if="!authStore.loggedIn" to="/sign-up" class="navbar-item"
          >Sign Up</router-link
        >
        <a v-if="authStore.loggedIn" @click="handleLogout" class="navbar-item">Sign Out</a>
      </div>
    </div>
  </nav>
</template>

<script setup>
  import { useAuthStore } from '../stores/AuthStore'
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const handleLogout = () => {
    authStore.logout()
    router.push('/')
  }

  const authStore = useAuthStore()
</script>

<style scoped>
  .navbar {
    background-color: #333333;
    overflow: hidden;
    position: fixed;
    top: 0;
    width: 100%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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

  .navbar-item,
  .logout-link {
    margin-left: 20px;
    text-decoration: none;
    color: #ffffff;
    font-weight: 500;
    padding: 10px 15px;
    display: inline-block;
    cursor: pointer;
  }

  .navbar-item:hover,
  .logout-link:hover,
  .navbar-brand:hover {
    text-decoration: underline;
    background-color: #474747;
  }
</style>
