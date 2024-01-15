<template>
    <nav class="navbar">
      <!-- Left-aligned items -->
      <div class="navbar-left">
        <a class="navbar-item" to="/">Home</a>
      </div>
  
      <!-- Right-aligned items -->
      <div class="navbar-right">
        <a class="navbar-item" to="/signin">Sign In</a>
        <a class="navbar-item" to="/signup">Sign Up</a>
      </div>
    </nav>
</template>
  
  <script>
  export default {
    name: 'NavBar',
  }
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed; 
    top: 0;
    left: 0;
    right: 0; 
    background-color: #2b2b2b; /* Dark but different from the page background */
    color: white;
    padding: 0.5rem 2rem; 
    z-index: 1000; 
    border-bottom: 1px solid #474747; /* Adds a border for distinction */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5); /* Adds a shadow for a subtle 3D effect */
  }
  
  .navbar-left,
  .navbar-right {
    display: flex;
  }
  
  .navbar-item {
    padding: 0.5rem 1rem;
    color: white;
    text-decoration: none;
    margin: 0 0.5rem;
    white-space: nowrap; 
  }
  
  .navbar-right {
    margin-left: auto; 
  }
  
  .navbar-item:hover {
    background-color: #383838;
    border-radius: 4px;
  }
  
  body, html {
    margin: 0;
    padding: 0;
  }
  
  body {
    padding-top: 60px; /* Adjust to the height of your navbar */
  }
  </style>
  
  