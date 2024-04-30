<template>
  <div>
    <h2>Sign Up</h2>
    <form @submit.prevent="handleSignUp">
        <input type="email" v-model="email" placeholder="Email">
        <input type="password" v-model="password" placeholder="Password">
        <input type="password" v-model="confirmPassword" placeholder="Confirm Password">
        <button type="submit">Sign Up</button>
    </form>
  </div>
</template>
  
<script setup>
    import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

    import { ref } from "vue";

    const email = ref('');
    const password = ref('');
    const confirmPassword = ref('');

    const handleSignUp = async () => {
  const auth = getAuth();
  if (password.value !== confirmPassword.value) {
    console.error("Passwords do not match");
    return;
  }
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
  