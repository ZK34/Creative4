<template>
  <div class="wrapper">
    <div class="listItems">
      <div class="product" v-for="item in items" :key="item.id">

        <div class="image">
          <img :src="'/images/' + item.image">
        </div>

        <div class="info">
          <h1>{{item.name}}</h1>
        <div>
          <h2>Description:</h2>
          <p>
            {{item.description}}
          </p>
        </div>

          <div class="price">
            <h3>Price: {{item.price}}</h3>
          </div>

          <router-link to="/Product">
              <button @click="selectItem(item.id)" class="categories">Review this album</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ItemList',
    props: {
      items: Array
    },
    methods: {
        selectItem(id) {
            this.$root.$data.reviewItem = this.$root.$data.items[id - 1];
        }
     }
  }
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.listItems {
  margin:10px;
  margin-right: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.product {
  display: flex;
  justify-content: center;
  margin-left: 20px;
  margin-top: 50px;
  align-items: center;
}

.product img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  flex-direction: column;
  justify-content: space-between;
  margin-left: 25px;
}

.info h1 {
  font-size: 32px;
}

.info h2 {
  font-size: 24px;
  color: #00008B;
}

.info p {
  font-size: 18px;
}

.price {
  display: flex;
}

button {
  height: 50px;
  background: #add8e6;
  color: 	#006400;
  border: 2px solid #000000;
}

.auto {
  margin-left: auto;
}
</style>
