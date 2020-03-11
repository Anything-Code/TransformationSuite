<template>
  <div>
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

      <v-toolbar-title>Transformation Suite</v-toolbar-title>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab>Infos</v-tab>
          <v-tab>Die Produkte</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-content id="scrolling" style="height: 100vh">
      <v-container class="fill-height p-relative pa-0">
        <v-row
          justify="center"
          align="center"
          class="ma-0"
        >
          <v-col style="max-width: 800px" class="text-center">
            <h1 class="center headline" id="typewriter"></h1>
          </v-col>
        </v-row>

        <div id="particles"></div>
      </v-container>
    </v-content>
  </div>
</template>

<script>
export default {
  layout: 'main',
  methods: {
    toggleDrawer () {
      this.$store.state.drawer ? this.$store.commit('SET_DRAWER', false) : this.$store.commit('SET_DRAWER', true)
    }
  },
  mounted () {
    this.$particles();
    this.$typewriter();
  }
}
</script>