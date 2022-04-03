<template>

    <AllReviews :reviews="reviews" />

</template>

<script>
  import AllReviews from "../components/AllReviews.vue"
  export default {
    name: 'Product',
    components: {
      AllReviews
    },
    computed: {
      reviews() {
        return this.$root.$data.items[this.$root.$data.reviewItem.id - 1].reviews;
      }
    },
    methods: {

    }
  }
</script>
