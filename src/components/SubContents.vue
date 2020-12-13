<template>
  <div>
    <div class="text-center">
      <p class="nav-title">口コミランキング</p>
    </div>
    <v-card class="mt-5 mx-auto" v-for="(list, index) in lists" :key="index">
      <v-card-title>{{ list.title }}</v-card-title>
      <v-card-subtitle>{{ list.subtitle }}</v-card-subtitle>
      <v-card-text>{{ list.text }}</v-card-text>
      <v-card-actions>
        <v-btn>詳しくみる</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [
        {
          title: "太宰府天満宮",
          subtitle: "福岡県太宰府市",
          text: "３号線沿いにある人気観光地"
        },
        {
          title: "太宰府天満宮",
          subtitle: "福岡県太宰府市",
          text: "３号線沿いにある人気観光地"
        },
        {
          title: "太宰府天満宮",
          subtitle: "福岡県太宰府市",
          text: "３号線沿いにある人気観光地"
        },
        {
          title: "福岡タワー",
          subtitle: "福岡県福岡市",
          text: "イルミネーションがきれい"
        },
      ]
    }
  },
}
</script>

<style scoped>
  .nav-title {
    text-align: center;
    margin: 5% 10% 3%;
    background-color: #c8ff84;
    border: none;
    border-radius: 10px;

  }
</style>