<template>
  <div id="app">
    <NavBar />
    <div class="page-content">
      <router-view />
    </div>
  </div>
</template>

<script setup>
  import NavBar from './components/NavBar.vue'
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&family=Merriweather:wght@300;700&display=swap');

:root {
  --bg-gradient: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body, html {
  height: 100%;
}

body {
  font-family: 'Merriweather', serif;
  color: #ffd700;
  background: var(--bg-gradient);
  background-attachment: fixed;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: var(--navbar-height); /* This pushes content below the navbar */
}

.mystical-container {
  /* ... other styles ... */
  max-height: calc(100vh - var(--navbar-height) - 4rem); /* Adjust for navbar height */
}

.realm-title {
  font-family: 'Cinzel Decorative', cursive;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  text-shadow: 0 0 10px #ffd700;
}
</style>
