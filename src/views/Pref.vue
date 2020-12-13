<template>
  <div class="pref_detail">
    <SidePref></SidePref>
    <div class="tourism_place_list">
      <v-container>
        <v-row align="center">
          <v-col >
            <v-text-field
              label="検索キーワード"
              width="40%"
              prepend-icon="mdi-clipboard-search"
            ></v-text-field>
          </v-col>
          <v-col cols="1" sm="1" md="2">
            <v-btn
              rounded
              color="green accent-2"
              class="px-3"
              right
            >
              検索
            </v-btn>
          </v-col>
          <v-col cols="12" sm="3" md="4" class="text-center">
            <v-btn
              rounded
              color="green accent-2"
              class="px-3"
              right
              @click="PostRev"
            >
              評価投稿
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
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
    },
    PostRev() {
      this.$router.push({name: "SightseeingPost", params: {id:1}})
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