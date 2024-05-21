<template>
  <body>
    <form class="login-form">
      <div class="field">
        <input
          type="text"
          v-model="emailOrUsername"
          placeholder="Email/Username"
          required
          @input="handleInput('emailOrUsername')"
        />
      </div>

      <div class="field">
        <input
          type="password"
          v-model="password"
          placeholder="Password"
          required
          @input="handleInput('password')"
        />
      </div>
      <button type="submit" @click.prevent="handleSignIn" class="submit-button">Sign In</button>
    </form>
  </body>
</template>


<script setup>
  import { ref } from 'vue'
  import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
  import axios from 'axios'
  import { useAuthStore } from '../stores/AuthStore'
  import { useRouter } from 'vue-router'

  const findEmailUrl = import.meta.env.VITE_APP_FIND_EMAIL_URL

  const router = useRouter()
  const emailOrUsername = ref('')
  const password = ref('')
  const authStore = useAuthStore()

  const handleSignIn = async () => {
    const auth = getAuth()

    let email = emailOrUsername.value

    if (!emailOrUsername.value.includes('@')) {
      const username = emailOrUsername.value
      email = await getUserEmail(username)
      if (!email) {
        error.value = 'Username not found'
        return
      }
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password.value)
      authStore.login(userCredential.user.uid)
      router.push('/')
    } catch (error) {
      console.error('Error signing in:', error)
    }
  }

  const getUserEmail = async (username) => {
    try {
      const response = await axios.get(`${findEmailUrl}`, {
        params: { username }
      })
      return response.data.email
    } catch (error) {
      console.error('Error getting user email:', error)
      return ''
    }
  }

  const handleInput = (field) => {
    const inputField = document.querySelector(`input[placeholder="${getPlaceholderText(field)}"]`)
    if (inputField.value.length > 0) {
      inputField.placeholder = ''
    } else {
      inputField.placeholder = getPlaceholderText(field)
    }
  }

  const getPlaceholderText = (field) => {
    switch (field) {
      case 'emailOrUsername':
        return 'Email/Username'
      case 'password':
        return 'Password'
      default:
        return ''
    }
  }
</script>

<style scoped>
input {
  width: 100%;
  padding: 10px;
  background-color: transparent;
  border: 2px solid #666;
  border-radius: 5px;
  color: white;
}

input:focus {
  outline: none;
  border-color: #ccc;
}

.submit-button {
  width: 108%; 
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #f1f1f1;
  color: #333;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.submit-button:hover {
  opacity: 0.8;
}

body {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
}

.login-form {
  width: 300px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 8px;
  font-family: 'Poppins', sans-serif;
}

.field {
  margin: 20px 0;
  position: relative;
}
</style>