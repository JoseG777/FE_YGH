<template>
  <div id="app">

    <NavBar/>

    <router-view/>
    
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

html, body, #app, div {
  margin: 0;
  padding: 0;
  height: 100%;
}

html, body {
  min-height: 100vh;
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
  justify-content: center;
  text-align: center;
}

*, *::before, *::after {
  box-sizing: border-box;
}

</style>
