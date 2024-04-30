<template>
    <nav class="navbar">
        <div class="navbar-container">
            <router-link to="/" class="navbar-brand">Home</router-link>
            <div class="navbar-right">
                <router-link to="/signin" class="navbar-item">Sign In</router-link>
                <router-link to="/signup" class="navbar-item">Sign Up</router-link>
            </div>
        </div>
    </nav>
</template>

<script setup>
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
