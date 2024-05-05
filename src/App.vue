<template>
  <div id="app">

    <NavBar />
    <p v-if="authStore.isLoggedIn">User is logged in</p>
    <p v-else>User is not logged in</p>
    <div class="page-content">

      <router-view/>

    </div>

  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import { useAuthStore } from '@/store/auth';

const authStore = useAuthStore();
</script>

<style>
:root {
  --text-color: rgba(255, 255, 255, 0.87);
  --background-color: #242424;
  --link-color: #646cff;
  --link-hover-color: #535bf2;
  --button-bg-color: #1a1a1a;
  --button-hover-border-color: #646cff;
  --font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  --font-size-large: 3.2em;
  --font-weight-normal: 400;
  --font-weight-bold: 500;
  --border-radius: 8px;

  font-family: var(--font-family);
  line-height: 1.5;
  font-weight: var(--font-weight-normal);
  color-scheme: light dark;
  color: var(--text-color);
  background-color: var(--background-color);

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html, body, #app {
  margin: 0;
  padding: 0;
  height: 100%;
  min-height: 100vh; 
  width: 100%;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-color);
  background-color: var(--background-color);
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  max-width: 1280px;
  margin: 0 auto;
}

.page-content {
  width: 100%; 
  max-width: 960px; 
  margin-top: 60px; 
  flex: 1; 
  display: flex;
  align-items: center; 
  justify-content: center; 
  padding: 20px;
}

a {
  font-weight: var(--font-weight-bold);
  color: var(--link-color);
  text-decoration: inherit;
}

a:hover {
  color: var(--link-hover-color);
}

h1 {
  font-size: var(--font-size-large);
  line-height: 1.1;
}

button {
  border-radius: var(--border-radius);
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: var(--font-weight-bold);
  font-family: var(--font-family);
  background-color: var(--button-bg-color);
  cursor: pointer;
  transition: border-color 0.25s;
}

button:hover {
  border-color: var(--button-hover-border-color);
}

button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

.card {
  padding: 2em;
}

@media (prefers-color-scheme: light) {
  :root {
    --text-color: #213547;
    --background-color: #ffffff;
    --button-bg-color: #f9f9f9;

    color: var(--text-color);
    background-color: var(--background-color);
  }

  a:hover {
    color: #747bff;
  }

  button {
    background-color: var(--button-bg-color);
  }
}

</style>
