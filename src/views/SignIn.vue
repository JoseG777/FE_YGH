<template>
  <body>
    <form class="login-form">
      <div class="field">
        <input
          type="text"
          v-model="emailOrUsername"
          placeholder=" "
          required
          @focus="togglePlaceholder('emailOrUsername')"
          @blur="togglePlaceholder('emailOrUsername')"
        />
        <span class="placeholder" :class="{ 'placeholder-visible': showEmailOrUsernamePlaceholder }"
          >Email/Username</span
        >
      </div>

      <div class="field">
        <input
          type="password"
          v-model="password"
          placeholder=" "
          required
          @focus="togglePlaceholder('password')"
          @blur="togglePlaceholder('password')"
        />
        <span class="placeholder" :class="{ 'placeholder-visible': showPasswordPlaceholder }"
          >Password</span
        >
      </div>
      <button type="submit" @click.prevent="handleSignIn">Sign In</button>
    </form>
  </body>
</template>

<script setup>
  import { ref } from 'vue'
  import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
  import axios from 'axios'
  import { useAuthStore } from '../stores/AuthStore'
  import { useRouter } from 'vue-router'
  
  const findEmailUrl = import.meta.env.VITE_APP_FIND_EMAIL_URL;
  const router = useRouter()
  const emailOrUsername = ref('')
  const password = ref('')
  const showEmailOrUsernamePlaceholder = ref(true)
  const showPasswordPlaceholder = ref(true)
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
      // console.log('User signed in:', userCredential.user)
      // console.log('User ID:', userCredential.user.uid)
      authStore.login(userCredential.user.uid)
      router.push('/')
    } catch (error) {
      console.error('Error signing in:', error)
    }
  }
  //comment
  const getUserEmail = async (username) => {
    try {
      const response = await axios.get(
        `${findEmailUrl}`,
        {
          params: { username }
        }
      )
      return response.data.email
    } catch (error) {
      console.error('Error getting user email:', error)
      return ''
    }
  }

  const togglePlaceholder = (field) => {
    if (field === 'emailOrUsername' && !showEmailOrUsernamePlaceholder.value) {
      showEmailOrUsernamePlaceholder.value = true
    } else if (field === 'password' && !showPasswordPlaceholder.value) {
      showPasswordPlaceholder.value = true
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

  .placeholder {
    position: absolute;
    top: 10px;
    left: 10px;
    color: #ccc;
    transition: all 0.3s ease;
    opacity: 0;
  }

  .placeholder-visible {
    opacity: 1;
  }

  input:focus + .placeholder,
  input:not(:placeholder-shown) + .placeholder {
    top: -20px;
    left: 0;
    font-size: 12px;
  }

  button {
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #f1f1f1;
    color: #333;
    cursor: pointer;
    transition: opacity 0.3s ease;
  }

  button:hover {
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

  .placeholder,
  input,
  button {
    transition: all 0.3s ease;
  }
</style>
