<template>
  <div>
    <div class="text-center">
      <p class="nav-title">口コミランキング</p>
    </div>
    <v-card class="mt-5 mx-auto" v-for="(list, index) in lists[0]" :key="index">
      <v-card-title>{{ list.place_name }}</v-card-title>
      <v-card-subtitle>{{ list.description }}</v-card-subtitle>
      <v-rating
        background-color="warning lighten-1"
        color="warning"
        half-increments
        hover
        length="5"
        size="25"
        :value="list.review"
        readonly
      ></v-rating>
      <v-card-actions>
        <v-btn @click="$router.push({ path: `/pref/${list.pref_id}/${list.id}` })">詳しくみる</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      lists: []
    }
  },
  async created() {
    let items =await axios.get('http://localhost:8001/api/tourists')
    this.lists.push(items.data.data);
    console.log(this.lists[0]);
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