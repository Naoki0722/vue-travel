<template>
  <header>
    <v-app-bar
      color="light-green accent-2"
      elevate-on-scroll
      app
      
    >
      <v-row align="center">
        <v-col cols="1">
          <v-app-bar-nav-icon @click="drawer = true" class="d-md-none"></v-app-bar-nav-icon>
        </v-col>
        <v-col cols="10" sm="10" md="4">
          <div class="title text-center flex">
            <!-- デスクトップのタイトル -->
            <v-toolbar-title class="display-1 hidden-sm-and-down">Travel-Review</v-toolbar-title>
            <!-- スマホのタイトル(小さい) -->
            <v-toolbar-title class="headline hidden-md-and-up">Travel-Review</v-toolbar-title>
            <p class="body-2">〜旅の思い出をシェア〜</p>
          </div>
        </v-col>
          <v-spacer></v-spacer>
        <v-col cols="1" sm="1" md="5" lg="4">
          <v-btn rounded color="light-blue accent-1" class="mx-4 hidden-sm-and-down" @click="$router.push('/')">Home</v-btn>
          <v-btn rounded color="light-blue accent-1" class="mx-4 hidden-sm-and-down" @click="$router.push('/contact')">Contact</v-btn>
          <v-btn rounded color="light-blue accent-1" class="ml-4 mr-10 hidden-sm-and-down">Search</v-btn>
        </v-col>
      </v-row>

    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="light-green--text text--darken-3"
        >
          <v-list-item class="mb-2" @click="$router.push('/')">
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          <v-list-item class="mb-2" @click="$router.push('/contact')">
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item>
          <v-list-item class="mb-2" @click="$router.push('/about')">
            <v-list-item-title>Search</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>

    </v-navigation-drawer>
  </header>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      group: null
    }
  },
  watch: {
    group() {
      this.drawer = false
    }
  }
}
</script>

<style scoped>

.title p {
  font-size: 1rem;
  margin: 0;
}


</style>