<template>
  <div class="pref_detail">
    <SidePref></SidePref>
    <div class="tourism_place_list">
      <v-card
        elevation="2"
        max-width="600"
        class="my-5"
        style="position: relative"
      >
        <v-card-title>太宰府天満宮</v-card-title>
        <v-card-text class="pb-10">
          説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文ですよ
        </v-card-text>
        <v-card-actions>
          <v-btn absolute bottom right @click="sightseeing">続きをみる</v-btn>
        </v-card-actions>
      </v-card>
      <v-card
        elevation="2"
        max-width="600"
        class="my-5"
      >
        <v-card-title>太宰府天満宮</v-card-title>
        <v-card-text class="pb-10">
          説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文ですよ
        </v-card-text>
        <v-card-actions>
          <v-btn absolute bottom right>続きをみる</v-btn>
        </v-card-actions>
      </v-card>
      <v-card
        elevation="2"
        max-width="600"
        class="my-5"
      >
        <v-card-title>太宰府天満宮</v-card-title>
        <v-card-text class="pb-10">
          説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文ですよ
        </v-card-text>
        <v-card-actions>
          <v-btn absolute bottom right>続きをみる</v-btn>
        </v-card-actions>
      </v-card>
    </div>
    <SubContents></SubContents>
  </div>
</template>

<script>
import SubContents from "../components/SubContents"
import SidePref from "../components/SidePref"
export default {
  props: ["id"],
  components: {
    SubContents,
    SidePref
  },
  methods: {
    sightseeing() {
      this.$router.push({name: "Sightseeing", params: {number:1}})
    }
  }
}
</script>

<style scoped>
.pref_detail {
  display: flex;
  justify-content: space-around;
}
</style>