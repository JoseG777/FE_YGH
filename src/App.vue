<template>

  <div id="app">

    <NavBar/>

    <div class="page-content">

      <router-view/>
      
    </div>

  </div>

</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
html, body, #app {
  margin: 0;
  padding: 0;
  height: 100%;
  min-height: 100vh; /* Ensures the app fills at least the whole viewport */
  width: 100%;
}

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
  background-color: #333333;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* Changed to flex-start to start content after navbar */
  text-align: center;
}

.page-content {
  width: 100%; /* Full width */
  max-width: 960px; /* Maximum width, can adjust as needed */
  margin-top: 60px; /* Push content down from the navbar */
  flex: 1; /* Flex grow to take up remaining space */
  display: flex;
  align-items: center; /* Aligns vertically */
  justify-content: center; /* Aligns horizontally */
  padding: 20px; /* Padding inside the content area */
  box-sizing: border-box;
}

</style>
