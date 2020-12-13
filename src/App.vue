<template>
  <v-app>
    <Header></Header>
    <v-main>
      <router-view />
    </v-main>
    <v-footer>
    </v-footer>
  </v-app>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'App',
  components: {
    Header
  },
  data: () => ({
    //
  }),
};
</script>
