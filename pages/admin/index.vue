<template>
  <v-app>
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card dark>
              <v-toolbar class="secondary--text" flat>Login</v-toolbar>
              <v-card-text class="pb-0 pt-5">
                <v-form>
                  <v-text-field
                    @keyup.enter="login"
                    v-model="username"
                    label="Benutzername"
                    prepend-icon="mdi-account"
                    type="text"
                  />

                  <v-text-field
                    @keyup.enter="login"
                    v-model="password"
                    label="Password"
                    prepend-icon="mdi-lock"
                    :type="passwordVisible ? 'text' : 'password'"
                    :append-icon="passwordVisible ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="passwordVisible = !passwordVisible"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  class="secondary--text"
                  @click="login"
                  block
                  :large="$vuetify.breakpoint.xsOnly ? true : false"
                >Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  head () {
    return {
      title: 'Transformation Suite | Login'
    }
  },
  middleware: 'auth',
  data () {
    return {
      username: '',
      password: '',
      error: null,
      passwordVisible: false
    }
  },
  methods: {
    async login () {
      try {
        await this.$store.dispatch('login', {
          username: this.username,
          password: this.password
        })

        this.$router.push('/')
      } catch (error) {
        this.error = error.message
      }
    }
  }
}
</script>