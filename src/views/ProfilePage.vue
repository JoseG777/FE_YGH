<template>
    <div class="binder">
      <div class="card" v-for="card in cards" :key="card.cardId">
        <img :src="'data:image/png;base64,' + card.imageData" alt="Card Image">
      </div>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
  data() {
    return {
      cards: []
    };
  },
  async created() {
    await this.fetchUserCards();
  },
  methods: {
    async fetchUserCards() {
      try {
        const response = await axios.get('http://localhost:5052/api/image/user/cards', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        this.cards = response.data;
      } catch (error) {
        console.error('Error fetching cards:', error);
      }
    }
  }
};
</script>

<style>
.binder {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
  background-color: #f8f8f8; /* Light grey background */
  border-radius: 10px; /* Rounded corners for the binder */
  max-width: 1000px; /* Adjust the max-width as needed */
  margin: auto; /* Center the binder */
}

.card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Card shadow */
  border-radius: 10px; /* Rounded corners for cards */
  overflow: hidden; /* Ensures the image fits within the border radius */
}

.card img {
  width: 100%; /* Make image take full width of the card */
  height: auto; /* Maintain image aspect ratio */
  display: block; /* Removes any extra space below the image */
}
</style>