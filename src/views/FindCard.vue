<template>
  <div class="yugioh-realm">
    <div class="mystical-container">
      <h1 class="realm-title">Heart of The Cards, Guide Me!</h1>
      
      <div class="search-altar">
        <input type="text" v-model="name" placeholder="Whisper the card's name..." class="mystical-input" />
        <button @click="getCard" class="summon-button">Summon Card</button>
      </div>
      
      <transition name="fade">
        <div v-if="succesful_search" class="card-revelation">
          <div class="card-frame">
            <img :src="url" alt="Card Image" loading="lazy" class="card-image" />
          </div>
          <div class="card-lore">
            <h2 class="card-name">{{ name }}</h2>
            <p class="description">{{ description }}</p>
            <div class="card-stats">
              <p><span class="stat-label">Archetype:</span> {{ archetype || 'Unknown' }}</p>
              <p><span class="stat-label">Attribute:</span> {{ attribute || 'Unknown' }}</p>
              <p><span class="stat-label">ATK:</span> {{ atk || 'N/A' }} <span class="stat-label">DEF:</span> {{ def || 'N/A' }}</p>
              <p><span class="stat-label">Level:</span> {{ level || 'N/A' }} <span class="stat-label">Type:</span> {{ type || 'Unknown' }}</p>
            </div>
            <button @click="saveImage" class="capture-button">Capture to Collection</button>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
  import axios from 'axios'
  import { ref } from 'vue'
  import { useAuthStore } from '../stores/AuthStore'

  const saveCardUrl = import.meta.env.VITE_APP_SAVE_CARD_URL

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

  const authStore = useAuthStore()

  async function getCard() {
    try {
      const response = await axios.get(
        `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${name.value}`
      )
      console.log(response.data.data[0])

      name.value = response.data.data[0].name
      description.value = response.data.data[0].desc
      archetype.value = response.data.data[0].archetype
      attribute.value = response.data.data[0].attribute
      atk.value = response.data.data[0].atk
      def.value = response.data.data[0].def
      level.value = response.data.data[0].level
      type.value = response.data.data[0].type

      if (name.value.toLowerCase() === 'dark magician') {
        url.value = response.data.data[0].card_images[2].image_url // the API doesn't return the OG Dark Magician image as the first one
        description.value = 'The ultimate wizard in terms of attack and defense.' // the API adds quotes to the description
      } else {
        url.value = response.data.data[0].card_images[0].image_url
      }
      succesful_search.value = true
    } catch (error) {
      console.error(error)
      unsuccessfull_search.value = true
    }
  }

  // Download image to firebase storage
  const saveImage = async () => {
    try {
      const response = await axios.post(`${saveCardUrl}`, {
        uid: authStore.uid,
        name: name.value,
        url: url.value,
        description: description.value,
        archetype: archetype.value,
        attribute: attribute.value,
        atk: atk.value,
        def: def.value,
        level: level.value,
        type: type.value
      })

      console.log(response.data.imageUrl)
    } catch (error) {
      console.error('Error in saveImage:', error.response ? error.response.data : error.message)
    }
  }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&family=Merriweather:wght@300;700&display=swap');

.yugioh-realm {
  background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
  min-height: 110vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Merriweather', serif;
  color: #ffd700;
  overflow: hidden; 
}

.mystical-container {
  background: rgba(0, 0, 0, 0.2); 
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 0 20px rgba(255, 215, 0, 0.1); 
  max-width: 800px;
  width: 90%;
  position: sticky; 
  overflow: hidden;
  backdrop-filter: blur(5px); 
}

.realm-title {
  font-family: 'Cinzel Decorative', cursive;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  text-shadow: 0 0 10px #ffd700;
}

.search-altar {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.mystical-input {
  padding: 0.8rem;
  font-size: 1rem;
  border: 2px solid #ffd700;
  background: rgba(0, 0, 0, 0.5);
  color: #ffd700;
  border-radius: 5px 0 0 5px;
  width: 60%;
}

.summon-button, .capture-button {
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  background: linear-gradient(45deg, #ffd700, #ff8c00);
  border: none;
  color: #000;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;
  text-transform: uppercase;
}

.summon-button {
  border-radius: 0 5px 5px 0;
}

.summon-button:hover, .capture-button:hover {
  background: linear-gradient(45deg, #ff8c00, #ffd700);
  transform: scale(1.05);
}

.card-revelation {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 2rem;
}

.card-frame {
  flex: 0 0 45%;
  position: relative;
}

.card-image {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(255, 215, 0, 0.5);
  transition: transform 0.3s ease;
}

.card-image:hover {
  transform: scale(1.05);
}

.card-lore {
  flex: 0 0 50%;
}

.card-name {
  font-family: 'Cinzel Decorative', cursive;
  font-size: 1.8rem;
  margin-bottom: 1rem;
  text-shadow: 0 0 5px #ffd700;
}

.description {
  font-style: italic;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.card-stats {
  background: rgba(255, 215, 0, 0.1);
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 1rem;
}

.stat-label {
  font-weight: bold;
  color: #ff8c00;
}

.capture-button {
  width: 100%;
  border-radius: 5px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .card-revelation {
    flex-direction: column;
  }
  
  .card-frame, .card-lore {
    flex: 0 0 100%;
  }
  
  .card-frame {
    margin-bottom: 1rem;
  }
}
</style>
