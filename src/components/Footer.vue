<template>
  <footer>
    <v-footer padless app>
      <v-card
        flat
        tile
        width="100%"
        class="light-green accent-2 text-center"
      >
        <v-card-text class="d-md-none">
          <v-btn
            v-for="(icon,index) in icons"
            :key="index"
            class="mx-4"
            icon
          >
            <v-icon size="24px" @click="$router.push(icon.name)">
              {{icon.img}}
            </v-icon>
          </v-btn>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text>
          2020-TravelReview
        </v-card-text>
      </v-card>
    </v-footer>
  </footer>
</template>


<script>
export default {
  data() {
    return {
      icons: [
        {
          name: "/",
          img: "mdi-home"
        },
        {
          name: "contact",
          img: "mdi-email"
        },
      ]
    }
  },
  
}
</script>

<style scoped>

</style>