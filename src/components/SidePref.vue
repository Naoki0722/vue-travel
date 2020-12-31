<template>
  <div class="text-center pr-3">
    <h2>{{prefecture}}</h2>
    <img :src=img width="150" class="d-block mx-auto">
    <h3 class="py-7">{{prefecture}}とは？</h3>
    <p class="text-left">{{description}}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["parentData"],
  data() {
    return {
          prefecture:"",
          img: "",
          description: ""
    }
  },
  async created() {
    let item = await axios.get(
      `http://localhost:8001/api/prefectures/${this.parentData}`);
    this.prefecture = item.data.data.pref_name;
    this.img = item.data.data.pref_image_path;
    this.description = item.data.data.pref_description;
  }
}
</script>