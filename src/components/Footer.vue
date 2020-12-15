<template>
  <footer>
    <v-footer
      padless
      app
      color="light-green accent-2"
    >
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
            class="mx-10"
            icon
          >
            <v-icon size="22px" @click="$router.push(icon.name)">
              {{icon.img}}
            </v-icon>
          </v-btn>
        </v-card-text>
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
      ],
      links: [
        'Home',
        'About Us',
      ],
    }
  },
  
}
</script>


<style scoped>

/* デザイン(タブレット) */
@media screen and (max-width: 960px) {
/* タブレット用レイアウト 960px以下の範囲 */
  .v-card__text {
    padding: 0px;
  }
}
/* デザイン(スマホ) */
@media screen and (max-width: 600px) {
/* スマホ用レイアウト 600px以下の範囲 */
  .v-card__text {
    padding: 1px;
  }
}
</style>