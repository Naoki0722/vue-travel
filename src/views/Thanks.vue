<template>
  <div class="thanks mx-auto my-10 text-center" width="100%">
    <p class="display-1 my-15">投稿ありがとうございました！</p>
    <v-btn
      rounded
      color="green accent-2"
      @click="PrefPage"
      class="mt-10"
    >
      一覧へ戻る
    </v-btn>
  </div>
</template>

<script>
export default {
  methods: {
    PrefPage() {
      this.$router.push({name: "Pref" ,params: {id:1}})
    }
  }
}
</script>