import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn: false
  }),
  actions: {
    logIn(token) {
      localStorage.setItem('token', token);
      this.isLoggedIn = true;
    },
    logOut() {
      localStorage.removeItem('token');
      this.isLoggedIn = false;
    },
    checkAuth() {
      this.isLoggedIn = !!localStorage.getItem('token');
    }
  }
});
