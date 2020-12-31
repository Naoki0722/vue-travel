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
        <!-- ボタンのメソッドでのデータを親に渡す処理に変更した -->
        <!-- <v-btn @click="$router.push({ path: `/pref/${list.pref_id}/${list.id}` });">詳しくみる</v-btn> -->
        <v-btn @click="sendData(list.pref_id,list.id)">詳しくみる</v-btn>
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
    console.log('通っています');
    let items =await axios.get('https://desolate-chamber-49342.herokuapp.com/api/tourists')
    this.lists.push(items.data.data);
    console.log(this.lists[0]);
  },
  methods: {
    sendData(prefId,listId) {
      this.$router.push({ path: `/pref/${prefId}/${listId}` })
      this.$emit("getChildText", listId);
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