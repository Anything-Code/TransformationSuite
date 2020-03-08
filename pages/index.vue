<template>
  <v-app id="inspire">
    <v-app-bar
      app
      clipped-right
      color="white"
      dark
    >
      <v-app-bar-nav-icon color="black" @click.stop="drawer = !drawer" />
      <v-toolbar-title>
        <NuxtLink to="/">
          <v-img :max-width="150" src="/icon_long.png"></v-img>
        </NuxtLink>
      </v-toolbar-title>
      <v-spacer />
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>FAQ</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>BLog</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          justify="center"
          align="center"
        >
          <v-col class="shrink">
          </v-col>
        </v-row>
      </v-container>
    </v-content>

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
  export default {
    props: {
      source: String,
    },

    data: () => ({
      drawer: null
    }),
  }
</script>