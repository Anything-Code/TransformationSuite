<template>
  <v-app id="inspire">
    <v-app-bar
      app
      elevate-on-scroll
      clipped-right
      dense
      color="#231F20"
      dark
      shrink-on-scroll
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon color="white" @click.stop="drawer = !drawer" />

      <v-toolbar-title>Transformation Suite</v-toolbar-title>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab>Tab 1</v-tab>
          <v-tab>Tab 2</v-tab>
          <v-tab>Tab 3</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-sheet
      id="scrolling-techniques-3"
      class="overflow-y-auto"
      max-height="800"
    >
      <v-container style="height: 1000px;"></v-container>
    </v-sheet>

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

      <v-list expand dense>
        <v-list-item>
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

        <v-list-item>
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
        
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-exit-run</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
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