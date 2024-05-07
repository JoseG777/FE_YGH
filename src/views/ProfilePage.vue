<template>
  <div>
    <h1>My Cards:</h1>

    <div class="cards-container">
      <div v-for="card in cards" :key="card.id" class="card">
        <img :src="card.imageUrl" alt="Card Image" />
      </div>
    </div>
  </div>
</template>

<script setup>
  import axios from 'axios'
  import { useAuthStore } from '../stores/AuthStore'
  import { ref, onMounted } from 'vue'

  const authStore = useAuthStore()

  const cards = ref([])

  const getCards = async () => {
    try {
      console.log('Button pressed')
      const uid = authStore.uid
      const response = await axios.get(
        `http://127.0.0.1:1115/yugioh-saver/us-central1/api/getCards`,
        {
          params: { uid }
        }
      )

      console.log(response.data)

      cards.value = response.data.map((card) => ({
        id: card.name,
        imageUrl: card.imageUrl
      }))
    } catch (error) {
      console.log(error)
    }
  }

  onMounted(getCards)
</script>

<style scoped>
  .cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 10px;
  }

  .card {
    flex-basis: 20%;
    margin: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  .card img {
    width: 100%;
    height: auto;
  }
</style>
