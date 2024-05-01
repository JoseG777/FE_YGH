<template>
  <h1> Find Card </h1>

  <input type="text" v-model="name" placeholder="Enter card name" />

  <button @click="getCard"> Find Card </button>
</template>

<script setup>
  import axios from 'axios'
  import { ref } from 'vue'

  const name = ref('')

  async function getCard() {
    try {
      const response = await axios.get(
        `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${name.value}`
      )
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }
</script>

<style scoped></style>
