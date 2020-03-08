<template>
  <div class="container">
    <h1>Login</h1>
    <form v-if="!$store.state.authUser" @submit.prevent="login">
      <p v-if="formError" class="error">
        {{ formError }}
      </p>
      <p><i>Benutzername und Passwort: <b>demo</b></i></p>
      <p>Benutzername: <input v-model="formUsername" type="text" name="username"></p>
      <p>Passwort: <input v-model="formPassword" type="password" name="password"></p>
      <button type="submit">
        Login
      </button>
    </form>
    <div v-else>
      Hallo {{ $store.state.authUser.username }}!
      <p>
        <NuxtLink to="/admin/secret">
          Top Secret Seite nur für Admins
        </NuxtLink>
      </p>
      <p><i>Trotz Seite neu Laden immer noch eingeloggt!</i></p>
      <button @click="logout">
        Logout
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formError: null,
      formUsername: '',
      formPassword: ''
    }
  },
  methods: {
    async login () {
      try {
        await this.$store.dispatch('login', {
          username: this.formUsername,
          password: this.formPassword
        })
        this.formUsername = ''
        this.formPassword = ''
        this.formError = null
      } catch (e) {
        this.formError = e.message
      }
    },
    async logout () {
      try {
        await this.$store.dispatch('logout')
      } catch (e) {
        this.formError = e.message
      }
    }
  }
}
</script>

<style>
.container {
  padding: 100px;
}
.error {
  color: red;
}
</style>
