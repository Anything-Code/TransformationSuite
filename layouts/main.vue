<template>
  <v-app id="inspire">

    <!-- <v-app-bar
      app
      clipped-right
      color="white"
      dark
      dense
    >
      <v-app-bar-nav-icon color="black" @click.stop="drawer = !drawer" />
      <v-toolbar-title>
      </v-toolbar-title>
      <v-spacer />
    </v-app-bar> -->

    <v-navigation-drawer
      v-model="drawer"
      app
    >
    
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            <NuxtLink to="/">
              <v-img contain :height="75" src="/icon_long.png"></v-img>
            </NuxtLink>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <v-list class="pa-0" expand dense>
        <v-list-item to="/">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Startseite</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- <v-list-group
          no-action
          prepend-icon="mdi-comment-multiple"
          value="true"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>FAQ</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>FAQ Seite</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Fragen beantworten</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group> -->
        
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-book-open-page-variant</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Blog</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-bookshelf</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Bewerben</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-calendar-month</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Besuch buchen</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/faq">
          <v-list-item-action>
            <v-icon>mdi-comment-multiple</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>FAQ</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- <v-list-group
          no-action
          prepend-icon="mdi-book-open-page-variant"
          value="true"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Blog</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Blog Seite</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Eintrag verfassen</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group> -->
        
        <v-list-item v-if="$store.state.user" link @click="logout">
          <v-list-item-action>
            <v-icon>mdi-exit-run</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <nuxt />

    <v-footer
      app
      inset
      color="white"
      class="black--text"
    >
      <span>Transformation Suite</span>
      <v-spacer />
      <span>&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    drawer: {
      get () {
        return this.$store.state.drawer
      },
      set (drawer) {
        this.$store.commit('SET_DRAWER', drawer)
      }
    }
  },
  methods: {
    async logout () {
      try {
        await this.$store.dispatch('logout')

        this.$router.push('/')
      } catch (error) {
        this.error = error.message
      }
    }
  }
}
</script>