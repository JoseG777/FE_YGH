<template>
  <div class="home-container">
    <div class="content">
      <h1>Hello, Yu-Gi-Oh!</h1>
      <p>Welcome to our Yu-Gi-Oh card saver web app!</p>
      <p>Currently this web app is a work in progress. We're planning to add the following:</p>
      <ul>
        <li>Better styling! We're focusing on functionality for now</li>
        <li>Creating / uploading decks for everyone to see</li>
        <li>Adding favorites</li>
        <li>Deleting cards from saved</li>
        <li>Numerous small little bugs / quality of life improvements</li>
      </ul>
      <p class="update-date">Last updated: May 7th, 2024</p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>

.home-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
  min-height: 100vh;
}

.content {
  max-width: 600px;
  background: rgba(15, 12, 41, 0.7);
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(255, 215, 0, 0.1);
  justify-content: center;
}

h1 {
  color: #ffd700;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
}

p {
  color: #ffffff;
  margin-bottom: 1rem;
}

ul {
  text-align: left;
  color: #ffffff;
  margin-bottom: 1rem;
  padding-left: 2rem;
}

li {
  margin-bottom: 0.5rem;
}

.update-date {
  font-style: italic;
  color: #ffd700;
  margin-top: 1.5rem;
}
</style>

