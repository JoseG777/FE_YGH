<template>
  <div>
    <h2>Sign Up</h2>
    <form @submit.prevent="handleSignUp">
      <input type="email" v-model="email" placeholder="Email">
      <input type="password" v-model="password" placeholder="Password">
      <button type="submit">Sign Up</button>
    </form>
  </div>
</template>
  
<script setup>
    import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

    const email = ref('');
    const password = ref('');

    const handleSignUp = async () => {
    const auth = getAuth();
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
        console.log("Sign up successful", userCredential.user);
    } catch (error) {
        console.error("Error signing up:", error.code, error.message);
    }
    };
</script>
  
<style scoped>


</style>
  