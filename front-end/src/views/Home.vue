<template>
  <div>
    <div style="text-align:center;font-size:16px;padding-left:5%;padding-right:5%;padding-bottom:35px;">
      Welcome to Kpop Album Reviews! We contains some Kpop albums from 2020 to 2022. Feel free to leave your own reviews!
    </div>

    <div class="container">
      <router-link to="/Categories">
        <div class="categories">
          <button class="years">Search by Years</button>
        </div>
      </router-link>
    </div>

    <ItemList :items="items" />
  </div>

</template>

<script>
  import ItemList from "../components/ItemList.vue"
  export default {
    name: 'Home',
    components: {
      ItemList
    },
    computed: {
      items() {
        return this.$root.$data.items;
      }
    },
  }
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .years {
    background-color: #FFFAF0;
    border: 2px solid #000000;
    color: #696969;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
  }

  button {
    padding: 15px;
  }
</style>
