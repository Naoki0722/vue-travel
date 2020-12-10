<template>
  <div class="about">
    <h2>basic</h2>
    <star-rating v-model="rating"></star-rating>
    <h2>Half Stars</h2>
    <star-rating :increment="0.1"></star-rating>
    <h2>Small Stars</h2>
    <star-rating :star-size="20"></star-rating>
    <h2>big Stars</h2>
    <star-rating :star-size="90"></star-rating>
    <star-rating :glow="10" :rtl=true></star-rating>
    <star-rating @rating-selected ="setRating"></star-rating>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rating: 0
    }
  },
  methods: {
    setRating(rating) {
      this.rating = rating;
      console.log(this.rating);
    }
  }
}
</script>
