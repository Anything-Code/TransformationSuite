<template>
  <div class="container">
    <h1>Nur für Admins</h1>
    
    <v-btn small @click="logout">Logout</v-btn>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  methods: {
    async logout () {
      try {
        await this.$store.dispatch('logout')

        // this.$router.push('/admin')
      } catch (error) {
        this.error = error.message
      }
    }
  }
}
</script>
