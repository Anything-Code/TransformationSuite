<template>
  <div>
    <v-dialog v-model="dialog" max-width="600">
      <v-card class="pa-4">
        <h1 class="title">{{ message }}</h1>
      </v-card>
    </v-dialog>

    <v-app-bar
      app
      elevate-on-scroll
      clipped-right
      dense
      color="#231F20"
      dark
      shrink-on-scroll
      prominent
      src="/thumbnail.png"
      fade-img-on-scroll
      scroll-target="#scrolling"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon color="white" @click="toggleDrawer" />

      <v-toolbar-title>FAQ</v-toolbar-title>

      <template v-slot:extension>
        <v-tabs v-model="tabs" align-with-title>
          <v-tab to="/faq" @click="$event.preventDefault()" href="faq">Fragen</v-tab>
          <v-tab to="/answer" @click="$event.preventDefault()" href="answer" v-if="$store.state.user">Antworten</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-sheet max-height="100vh" id="scrolling" class="overflow-y-auto">
      <v-content>
        <v-container class="fill-height">

          <v-row>
            <v-col>
              <h1 v-if="questions.length > 0" class="headline">Häufig gestellte Fragen</h1>
              <h1 v-else class="subtitle-2">Es wurden leider noch keine Fragen gestellt.</h1>
            </v-col>
          </v-row>

          <v-row v-if="questions.length > 0">
            <v-col>
              <v-expansion-panels active-class="grey lighten-4" accordion>
                <v-expansion-panel
                  v-for="(question, key) in questions"
                  :key="key"
                >
                  <v-expansion-panel-header>
                    <span><b>Frage:</b> {{ question.text }}</span>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <b>Antwort:</b> {{ question.answer }}
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12">
              <v-expansion-panels accordion>
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    <b>Jetzt eine Frage formulieren</b>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-form ref="form" @submit="submit">
                      <v-textarea
                        filled
                        v-model="question"
                        :rules="[rules.required, rules.counter]"
                        :counter="400"
                        label="Frage"
                        required
                      />
                      <v-btn
                        :disabled="loading"
                        :large="$vuetify.breakpoint.xsOnly ? true : false"
                        block
                        class="primary white--text"
                        type="submit"
                      >
                        <v-icon class="loader" v-if="loading">mdi-cached</v-icon>
                        <span v-else>Abschicken</span>
                      </v-btn>
                    </v-form>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>
          </v-row>
          
        </v-container>
      </v-content>
    </v-sheet>
  </div>
</template>

<style lang="scss">
.fix-expansion .v-expansion-panel-content__wrap {
  padding: 16px 24px;
}
</style>

<script>
export default {
  layout: 'main',
  asyncData ({ $axios }) {
    return $axios.$get(`/api/questions`).then(response => {
      return response
    })
  },
  data () {
    return {
      rules: {
        required (value) {
          if (value) {
            return !!value || 'Eine Frage ist erforderlich!s'
          } else return false
        },
        counter (value) {
          if (value) {
            return value.length <= 400 || 'Ihre Frage darf maximal 400 Zeichen enthalten!'
          } else return false
        }
      },
      tabs: 'faq',
      dialog: false,
      message: '',
      loading: false,
      question: '',
    }
  },
  methods: {
    submit (event) {
      event.preventDefault()
      if (this.$refs.form.validate()) {
        this.loading = true
        this.$store.dispatch('postQuestion', this.question).then(response => {
          this.message = response.message
          this.dialog = true
          this.loading = false

          this.$refs.form.reset()
        });
      }
    },
    toggleDrawer () {
      this.$store.state.drawer ? this.$store.commit('SET_DRAWER', false) : this.$store.commit('SET_DRAWER', true)
    }
  },
}
</script>