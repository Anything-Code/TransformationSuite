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

      <v-toolbar-title>Blog</v-toolbar-title>
    </v-app-bar>

    <v-sheet max-height="100vh" id="scrolling" class="overflow-y-auto">
      
    </v-sheet>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'Transformation Suite | Blog'
    }
  },
  layout: 'main',
  methods: {
    toggleDrawer () {
      this.$store.state.drawer ? this.$store.commit('SET_DRAWER', false) : this.$store.commit('SET_DRAWER', true)
    }
  },
}
</script>