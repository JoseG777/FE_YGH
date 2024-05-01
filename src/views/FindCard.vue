<template>
  <div class="container">
    <h1>Find Card</h1>

    <input type="text" v-model="name" placeholder="Enter card name" />

    <button @click="getCard">Find Card</button>

    <div class="card-details" v-show="succesful_search">
      <img :src="url" alt="Card Image" loading="lazy" />
      <p>{{ description }}</p>
      <p>Archetype: {{ archetype }}</p>
      <p>Attribute: {{ attribute }}</p>
      <p>ATK: {{ atk }}</p>
      <p>DEF: {{ def }}</p>
      <p>Level: {{ level }}</p>
      <p>Type: {{ type }}</p>
    </div>
  </div>
</template>

<script setup>
  import axios from 'axios'
  import { ref } from 'vue'

  const name = ref('')
  const description = ref('')
  const archetype = ref('')
  const attribute = ref('')
  const atk = ref('')
  const def = ref('')
  const level = ref('')
  const type = ref('')
  const url = ref('')

  const succesful_search = ref(false)

  const unsuccessfull_search = ref(false)

  async function getCard() {
    try {
      const response = await axios.get(
        `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${name.value}`
      )
      console.log(response.data.data[0])
      description.value = response.data.data[0].desc
      archetype.value = response.data.data[0].archetype
      attribute.value = response.data.data[0].attribute
      atk.value = response.data.data[0].atk
      def.value = response.data.data[0].def
      level.value = response.data.data[0].level
      type.value = response.data.data[0].type
      url.value = response.data.data[0].card_images[0].image_url
      succesful_search.value = true
    } catch (error) {
      console.error(error)
      unsuccessfull_search.value = true
    }
  }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    width: 100%;
  }

  input {
    padding: 8px;
    margin: 10px 0;
    width: 80%;
    max-width: 500px;
    border: 2px solid #ccc;
    border-radius: 4px;
  }

  button {
    padding: 10px 20px;
    border: none;
    background-color: #007bff;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #0056b3;
  }

  .card-details {
    margin-top: 20px;
    text-align: center;
    line-height: 1.6;
    width: 100%;
  }

  .card-details img {
    width: 100%;
    max-width: 320px;
    border-radius: 8px;
    margin-bottom: 10px;
  }

  .card-details p {
    margin: 4px 0;
  }
</style>
