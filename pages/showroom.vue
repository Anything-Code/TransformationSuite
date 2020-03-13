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

      <v-toolbar-title>Aktuelle Ausstellung</v-toolbar-title>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab to="/" @click="$event.preventDefault()" href="infos">Infos</v-tab>
          <v-tab to="/showroom" @click="$event.preventDefault()" href="showroom">Aktuelle Ausstellung</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-sheet max-height="100vh" id="scrolling" class="overflow-y-auto">
      <v-content>
        <v-container class="fill-height">
          <v-row class="mx-0">
            <v-col cols="12" md="6">
              <v-hover>
                <template v-slot:default="{ hover }">
                  <v-card>
                    <v-img src="/ameria.jpg"></v-img>

                    <v-fade-transition>
                      <v-overlay
                        v-if="hover"
                        absolute
                        color="#036358"
                      >
                        <v-btn>Details</v-btn>
                      </v-overlay>
                    </v-fade-transition>
                  </v-card>
                </template>
              </v-hover>
            </v-col>
          </v-row>
        </v-container>
      </v-content>
    </v-sheet>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'Transformation Suite | Aktuelle Ausstellung'
    }
  },
  layout: 'main',
  data: () => ({
      hover: false,
      tabs: 'showroom'
  }),
  methods: {
    toggleDrawer () {
      this.$store.state.drawer ? this.$store.commit('SET_DRAWER', false) : this.$store.commit('SET_DRAWER', true)
    }
  },
}
</script>