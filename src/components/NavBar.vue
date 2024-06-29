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
  }

  .navbar {
    background: linear-gradient(90deg, rgba(15, 12, 41, 0.9), rgba(48, 43, 99, 0.9), rgba(36, 36, 62, 0.9));
    backdrop-filter: blur(5px);
    overflow: hidden;
    position: fixed;
    top: 0;
    width: 100%;
    height: var(--navbar-height);
    box-shadow: 0 2px 10px rgba(255, 215, 0, 0.1);
    z-index: 1000;
  }

  .navbar-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    height: 100%;
    max-width: 2000px;
    margin: 0 auto;
  }

  .navbar-brand {
    margin-right: auto;
    color: #ffd700;
    text-decoration: none;
    font-weight: 700;
    font-size: 2.5rem;
    padding: 10px 15px;
    display: inline-block;
    text-shadow: 0 0 5px rgba(255, 215, 0, 0.5);
    transition: all 0.3s ease;
  }

  .navbar-right {
    margin-left: auto;
  }

  .navbar-item,
  .logout-link {
    margin-left: 20px;
    text-decoration: none;
    color: #ffd700;
    font-weight: 500;
    padding: 10px 15px;
    display: inline-block;
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 5px;
  }

  .navbar-item:hover,
  .logout-link:hover,
  .navbar-brand:hover {
    text-decoration: none;
    background-color: rgba(255, 215, 0, 0.1);
    box-shadow: 0 0 10px rgba(255, 215, 0, 0.2);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    .navbar-container {
      flex-direction: column;
      padding: 10px;
    }

    .navbar-right {
      margin-top: 10px;
    }

    .navbar-item,
    .logout-link {
      margin-left: 10px;
      margin-right: 10px;
    }
  }
</style>
