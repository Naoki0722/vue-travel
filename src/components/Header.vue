<template>
  <div>
    <v-app-bar
      color="light-green accent-2"
      elevate-on-scroll
      height="100px"
    >
      <div class="hidden-sm-and-up">
        <v-menu
          left
          bottom
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              v-bind="attrs"
              v-on="on"
            >
              <v-app-bar-nav-icon></v-app-bar-nav-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item @click="$router.push('/')">
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
            <v-list-item @click="$router.push('/about')">
              <v-list-item-title>About</v-list-item-title>
            </v-list-item>
            <v-list-item @click="$router.push('/about')">
              <v-list-item-title>Contact</v-list-item-title>
            </v-list-item>
            <v-list-item @click="$router.push('/about')">
              <v-list-item-title>Search</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <div class="title">
        <v-toolbar-title class="text-h3 hidden-sm-and-down">Travel-Review</v-toolbar-title>
        <v-toolbar-title class="display-1 hidden-sm-and-up">Travel-Review</v-toolbar-title>
        <p>〜旅の思い出はシェアから〜</p>
      </div>

      <v-spacer></v-spacer>

      <v-btn rounded color="light-blue accent-1" class="mx-4 hidden-sm-and-down" @click="$router.push('/')">Home</v-btn>
      <v-btn rounded color="light-blue accent-1" class="mx-4 hidden-sm-and-down" @click="$router.push('/about')">About</v-btn>
      <v-btn rounded color="light-blue accent-1" class="mx-4 hidden-sm-and-down">Contact</v-btn>
      <v-btn rounded color="light-blue accent-1" class="ml-4 mr-10 hidden-sm-and-down">Search</v-btn>
    </v-app-bar>
  </div>
</template>

<script>

</script>

<style scoped>
.title p {
  font-size: 1rem;
  margin: 0;
}
.title {
  text-align: center;
  margin-left: 10%;
}

.title v-toolbar-title {
  font-size: 1.6rem;
}
</style>