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
              <v-toolbar flat>Login</v-toolbar>
              <v-card-text class="pb-0 pt-8">
                <v-form>
                  <v-text-field
                    @keyup.enter="login"
                    v-model="username"
                    outlined
                    label="Benutzername"
                    name="username"
                    prepend-icon="mdi-account"
                    type="text"
                  />

                  <v-text-field
                    @keyup.enter="login"
                    v-model="password"
                    outlined
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    :type="passwordVisible ? 'text' : 'password'"
                    :append-icon="passwordVisible ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="passwordVisible = !passwordVisible"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  @click="login"
                  block
                  :large="$vuetify.breakpoint.mdAndDown ? true : false"
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

        // this.$router.push('/admin/home')
        } catch (error) {
          this.error = error.message
        }
      },
      async logout () {
        try {
          await this.$store.dispatch('logout')
        } catch (error) {
          this.error = error.message
        }
      }
    }
  }
</script>