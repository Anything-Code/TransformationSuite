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
      <v-content>
        <v-container class="fill-height">
          <v-row>
            <v-col cols="12" md="6">
              <v-card>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="title">Feierliche Eröffnung der TransformationSuite Heidelberg am 01.04.2020</v-list-item-title>
                    <v-list-item-subtitle>von <b class="primary--text">Anna Romey</b></v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

                <v-img
                  class="align-end"
                  src="/blogBild1.png"
                  height="200"
                  contain
                />

                <v-card-actions>
                  <v-btn
                    text
                    color="primary accent-4"
                  >
                    Lesen
                  </v-btn>
                  
                  <v-spacer />

                  <v-btn @click="like1 = !like1" icon>
                    <v-icon :class="like1 ? 'primary--text' : ''">mdi-heart</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>mdi-share-variant</v-icon>
                  </v-btn>

                  <v-btn
                    icon
                    @click="open1 = !open1"
                  >
                    <v-icon>{{ open1 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                  </v-btn>
                </v-card-actions>

                <v-expand-transition>
                  <div v-show="open1">
                    <v-divider />
                    <v-card-text>
                      Der Digital Hub kurpfalz@bw ist hoch erfreut, Ihnen die Transformation Suite Heidelberg vorstellen zu dürfen. Die Transformation Suite ist für zwei Zielgruppen gedacht: Sie ist eine Anlaufstelle für KMU's aus der Region, die dort ihre Produkte zur digitalen Transformation ausstellen können. KMU's, die in der Digitalisierung noch nicht wirklich Fuß gefasst haben, können die Transformation Suite besuchen und werden dort von den Ausstellern bei ihren Digitalisierungsvorhaben unterstützt.
                      <br>
                      <br>
                      Das Datum der Eröffnungsveranstaltung der Transformation Suite wird bald bekannt gegeben - stay tuned!
                    </v-card-text>
                  </div>
                </v-expand-transition>
              </v-card>
            </v-col>
            
            <v-col cols="12" md="6">
              <v-card>

                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="title">Wir stellen vor: Die Transformation Suite</v-list-item-title>
                    <v-list-item-subtitle>von <b class="primary--text">Anna Romey</b></v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

                <v-img
                  class="align-end"
                  src="/blogBild2.png"
                  height="200"
                  contain
                />

                <v-card-actions>
                  <v-btn
                    text
                    color="primary accent-4"
                  >
                    Lesen
                  </v-btn>
                  
                  <v-spacer />

                  <v-btn @click="like2 = !like2" icon>
                    <v-icon :class="like2 ? 'primary--text' : ''">mdi-heart</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>mdi-share-variant</v-icon>
                  </v-btn>

                  <v-btn
                    icon
                    @click="open2 = !open2"
                  >
                    <v-icon>{{ open2 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                  </v-btn>
                </v-card-actions>

                <v-expand-transition>
                  <div v-show="open2">
                    <v-divider />
                    <v-card-text>
                      Am 01.04.2020 Ist es endlich so weit: Die Transformation Suite in Heidelberg öffnet endlich ihre Pforten. In der Transformation Suite warten innovative Unternehmen auf sie, die sich darauf spezialisiert haben, Sie auf Ihrem Weg zur digitalen Transformation zu begleiten und ihre Erfahrungen an Sie weiterzugeben. Auf unserer Website oder über die App können Sie sich über das aktuelle Angebot informieren.
                      <br>
                      <br>
                      Sie sind herzlich eingeladen, am 01.04.2020 ab 15 Uhr die Eröffnung mit zu erleben. Der Oberbürgermeister wird um 16 Uhr mit einer Rede den Beginn der Ära Transformation Suite Heidelberg einleiten. Wir freuen uns auf Ihr Kommen!
                    </v-card-text>
                  </div>
                </v-expand-transition>
              </v-card>
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
      title: 'Transformation Suite | Blog'
    }
  },
  data () {
    return {
      open1: true,
      like1: false,
      open2: true,
      like2: false
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