<template>
  <body>
    <form class="login-form">
      <div class="field">
        <input
          type="email"
          v-model="email"
          placeholder=" "
          required
          @focus="togglePlaceholder('email')"
          @blur="togglePlaceholder('email')"
        />
        <span class="placeholder" :class="{ 'placeholder-visible': showEmailPlaceholder }"
          >Email</span
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

      <div class="field">
        <input
          type="password"
          v-model="confirmPassword"
          placeholder=" "
          required
          @focus="togglePlaceholder('confirmPassword')"
          @blur="togglePlaceholder('confirmPassword')"
        />

        <span class="placeholder" :class="{ 'placeholder-visible': showConfirmPasswordPlaceholder }"
          >Confirm Password</span
        >
      </div>

      <button type="submit" @click.prevent="handleSignUp">Sign Up</button>
    </form>
  </body>
</template>

<script setup>
  import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
  import { ref } from 'vue'

  const email = ref('')
  const password = ref('')
  const confirmPassword = ref('')
  const showEmailPlaceholder = ref(true)
  const showPasswordPlaceholder = ref(true)
  const showConfirmPasswordPlaceholder = ref(true)

  const handleSignUp = async () => {
    const auth = getAuth()
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value)
      console.log('User successfully created', userCredential.user)
    } catch (error) {
      console.error('Error signing up:', error.code, error.message)
    }
  }

  const togglePlaceholder = (field) => {
    if (field === 'email' && !showEmailPlaceholder.value) {
      showEmailPlaceholder.value = true
    } else if (field === 'password' && !showPasswordPlaceholder.value) {
      showPasswordPlaceholder.value = true
    } else if (field === 'confirmPassword' && !showConfirmPasswordPlaceholder.value) {
      showConfirmPasswordPlaceholder.value = true
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
