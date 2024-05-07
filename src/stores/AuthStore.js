import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    loggedIn: false,
    uid: null
  }),
  actions: {
    login(uid) {
      this.loggedIn = true
      this.uid = uid
    },
    logout() {
      this.loggedIn = false
      this.uid = null
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'auth',
        storage: localStorage
      }
    ]
  }
})
