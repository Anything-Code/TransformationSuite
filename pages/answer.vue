<template>
  <div>
    <v-dialog v-model="dialog" max-width="600">
      <v-card class="pa-4">
        
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
            <v-col cols="12" sm="11">
              <h1 class="headline">Gestellte Fragen:</h1>
            </v-col>
            <v-col cols="12" sm="1">
              <v-btn
                :text="$vuetify.breakpoint.xsOnly ? false : true"
                :class="$vuetify.breakpoint.xsOnly ? 'primary white--text' : ''"
                class="float-right"
                :block="$vuetify.breakpoint.xsOnly ? true : false"
                :large="$vuetify.breakpoint.xsOnly ? true : false"
                type="submit"
              >Speichern</v-btn>
            </v-col>
          </v-row>
          
          <v-row>
            <v-col class="pt-0">
              <v-data-table
                :headers="headers"
                :items="questions"
                no-data-text="Keine Fragen gefunden!"
                class="elevation-1"
              >
                <template v-slot:item.text="{ item }">
                  {{ item.text.substring(0, 20) }}{{ item.text.length > 20 ? '...' : '' }}
                </template>
                <template v-slot:item.edit="{ item }">
                  <v-btn icon><v-icon>mdi-pen</v-icon></v-btn>
                </template>
                <template v-slot:item.visible="{ item }">
                  <v-btn icon><v-icon>{{ item.visible ? 'mdi-checkbox-marked' : 'mdi-checkbox-blank-outline' }}</v-icon></v-btn>
                </template>
                <template v-slot:item.delete="{ item }">
                  <v-btn @click="deleteQuestion(item.id)" icon><v-icon>mdi-trash-can-outline</v-icon></v-btn>
                </template>
              </v-data-table>
            </v-col>
          </v-row>
          
        </v-container>
      </v-content>
    </v-sheet>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  middleware: 'auth',
  layout: 'main',
  asyncData ({ $axios }) {
    return $axios.$get(`/api/admin/questions`).then(response => {
      return response
    })
  },
  data () {
    return {
      rules: {
        required (value) {
          if (value) {
            return !!value || 'Required.'
          } else return false
        },
        counter (value) {
          if (value) {
            return value.length <= 400 || 'Ihre Frage darf maximal 400 Zeichen enthalten!'
          } else return false
        }
      },
      headers: [
        { text: 'ID', align: 'start', value: 'id' },
        { text: 'Frage', value: 'text' },
        { text: 'Bearbeiten', value: 'edit', sortable: false },
        { text: 'Sichtbar', value: 'visible', sortable: false },
        { text: 'Löschen', value: 'delete', sortable: false }
      ],
      tabs: 'answer',
      dialog: false
    }
  },
  methods: {
    submit (event) {
      event.preventDefault()
      if (this.$refs.form.validate()) {
        this.$store.dispatch('postQuestionAdmin', this.questions).then(response => {
          console.log(response.data)
        });
      }
    },
    deleteQuestion (id) {
      this.$store.dispatch('deleteQuestion', id).then(response => {
        console.log(response)
        this.questions = response.questions
      });
    },
    toggleDrawer () {
      this.$store.state.drawer ? this.$store.commit('SET_DRAWER', false) : this.$store.commit('SET_DRAWER', true)
    }
  },
}
</script>