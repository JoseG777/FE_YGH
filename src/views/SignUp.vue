<template>
  <body>
    <form class="login-form">
      <div class="field">
        <input
          type="username"
          v-model="username"
          placeholder="Username"
          required
          @input="handleInput('username')"
        />
      </div>
      <div class="field">
        <input
          type="email"
          v-model="email"
          placeholder="Email"
          required
          @input="handleInput('email')"
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

      <div class="field">
        <input
          type="password"
          v-model="confirmPassword"
          placeholder="Confirm Password"
          required
          @input="handleInput('confirmPassword')"
        />
      </div>

      <button type="submit" @click.prevent="handleSignUp" class="submit-button">Sign Up</button>
    </form>
  </body>
</template>

<script setup>
  import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
  import { ref } from 'vue'
  import axios from 'axios'
  import { useRouter } from 'vue-router'

  const router = useRouter()
  const addUserURL = import.meta.env.VITE_APP_ADD_USER_URL

  // Sign Up values
  const email = ref('')
  const password = ref('')
  const confirmPassword = ref('')
  const username = ref('')
  const uid = ref('')

  // Error message
  const error = ref('')
  const errorThrown = ref(false)

  const getPlaceholderText = (field) => {
    switch (field) {
      case 'username':
        return 'Username'
      case 'email':
        return 'Email'
      case 'password':
        return 'Password'
      case 'confirmPassword':
        return 'Confirm Password'
      default:
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

  const addUserData = async (username, email, uid) => {
    const userData = {
      username,
      email,
      uid
    }
    try {
      const response = await axios.post(import.meta.env.VITE_APP_ADD_USER_URL, userData)
      console.log(response.data)
    } catch (error) {
      console.error('Create Error:', error)
    }
  }

  const handleSignUp = async () => {
    const auth = getAuth()
    if (username.value.includes('@')) {
      errorThrown.value = true
      error.value = 'Username cannot contain @'
      return
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value)
      uid.value = userCredential.user.uid

      addUserData(username.value, email.value, uid.value)
      router.push('/sign-in')
      console.log('User successfully created', userCredential.user)
    } catch (error) {
      console.error('Error signing up:', error.code, error.message)
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
