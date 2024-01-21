<template>
    <div>
      <input type="text" v-model="searchedCard" placeholder="Enter card name"/>
      <br />
      <button @click="search">Search</button>
  
      <div v-if="showDiv">

        <p>{{ cardDescription }}</p>

        <button @click="saveCardImage"> Save Image </button>
      </div>
    </div>
</template>
    
<script>
import axios from 'axios';
  
export default {
    data() {
      return {
        imageURL: '',
        cardDescription: '',
        cardName: '',
        cardLevel: '',
        cardAttribute: '',
        cardType: '',
        searchedCard: '',
        showDiv: false
      };
    },
    methods: {
      async search() {
        try {
          const response = await axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${this.searchedCard}`);

          this.cardDescription = response.data.data[0].desc;

          this.imageURL = response.data.data[0].card_images[0].image_url;
          this.cardName = response.data.data[0].name;
          this.cardLevel = response.data.data[0].level;
          this.cardAttribute = response.data.data[0].attribute;
          this.cardType = response.data.data[0].type;

          this.showDiv = true;
        } catch (error) {
          console.error(error);
          alert('Failed to fetch card data.');
        }
      },
  
      async saveCardImage() {
        const token = localStorage.getItem('token');
        if (!token) {
          alert('You must be logged in to save images.');
          return;
        }
  
        try {
          await axios.post('http://localhost:5052/api/image/save-card-image', {

            imageUrl: this.imageURL,
            cardId: this.cardName, 
            cardLevel: this.cardLevel,
            cardAttribute: this.cardAttribute,
            cardType: this.cardType

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
  