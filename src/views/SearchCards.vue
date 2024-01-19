<template>
    <div>
      <input type="text" v-model="searchedCard" placeholder="Enter card name"/>
      <br />
      <button @click="search">Search</button>
  
      <div v-if="showDiv">
        <p>{{ cardDescription }}</p>
        <button @click="saveCardImage(imageURL, 'uniqueCardId')">Save Image</button>
      </div>
    </div>
</template>
    
<script>
import axios from 'axios';
  
export default {
    data() {
      return {
        imageURL: null,
        cardDescription: null,
        searchedCard: '',
        showDiv: false
      };
    },
    methods: {
      async search() {
        try {
          const response = await axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${this.searchedCard}`);
          this.imageURL = response.data.data[0].card_images[0].image_url;
          this.cardDescription = response.data.data[0].desc;
          this.showDiv = true;
        } catch (error) {
          console.error(error);
          alert('Failed to fetch card data.');
        }
      },
  
      async saveCardImage(imageUrl, cardId) {
        const token = localStorage.getItem('token');
        if (!token) {
          alert('You must be logged in to save images.');
          return;
        }
  
        try {
          await axios.post('http://localhost:5052/api/image/save-card-image', {
            imageUrl,
            cardId
          }, {
            headers: { Authorization: `Bearer ${token}` }
          });
          alert('Image saved successfully!');
        } catch (error) {
          console.error('Error saving the image:', error);
          alert('Failed to save the image.');
        }
      }
    }
  }
</script>
  
<style>

</style>
  