<template>
  <div class="center">
    <div class="pure-menu pure-menu-horizontal">

      <ul class="pure-menu-list">
        <li class="pure-menu-item"><a @click="choose('2022')" href="#" class="pure-menu-link">2022</a></li>
        <li class="pure-menu-item"><a @click="choose('2021')" href="#" class="pure-menu-link">2021</a></li>
        <li class="pure-menu-item"><a @click="choose('2020')" href="#" class="pure-menu-link">2020</a></li>

      </ul>

    </div>

    <ItemList :items="items" />

  </div>
</template>

<script>
  import ItemList from "../components/ItemList.vue"
  export default {
    name: 'Categories',
    components: {
      ItemList
    },
    data() {
      return {
        category: '',
      }
    },
    computed: {
      items() {
        return this.$root.$data.items.filter(item => item.category === this.category);
      }
    },
    methods: {
      choose(category) {
        this.category = category;
      }
    }
  }
</script>

<style>
  .pure-menu-horizontal {
    width: 100%;
    white-space: normal;
    text-align: center !important;
  }

</style>
