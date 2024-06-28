<template>
  <nav class="navbar">
    <div class="navbar-container">
      <router-link to="/" class="navbar-brand">Home</router-link>

      <div class="navbar-right" v-if="!authStore.loggedIn">
        <router-link to="/sign-in" class="navbar-item">Sign In</router-link>
        <router-link to="/sign-up" class="navbar-item">Sign Up</router-link>
      </div>

      <div class="navbar-right" v-if="authStore.loggedIn">
        <router-link to="/find-card" class="navbar-item"> Find Cards </router-link>
        <router-link to="/profile-page" class="navbar-item">Profile</router-link>
        <a @click="handleLogout" class="navbar-item">Sign Out</a>
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
  :root {
    --bg-gradient: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
    --navbar-height: 60px; /* Match this with the navbar.vue file */
  }

  .navbar {
    background-color: #333333;
    overflow: hidden;
    position: fixed;
    top: 0;
    width: 100%;
    height: var(--navbar-height);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 1000;
  }

  .navbar-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    height: 100%;
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
