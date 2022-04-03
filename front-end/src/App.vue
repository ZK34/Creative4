<template>
  <div id="app">
    <div id="menu">
      <h1>Kpop Album Reviews</h1>
    </div>
    <router-view/>

    <div class="footer">
      <a class="footer-item" target="_blank" href="https://github.com/ZK34/Creative4-CS260">Github Link</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
    }
  },
  created() {
    if(this.$router.path !== "/") {
      this.$router.replace("/")
    }
  },
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  background-color: #F7F7F2;
}

#menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

img {
  height: 200px;
}

h1 {
  color: #6495ED;
}

.footer {
  display: flex;
  height: 75px;
  width: 100%;
  background-color: #F7F7F2;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}

.footer-item {
  display: flex;
  text-align: center;
  align-self: center;
  align-content: center;
  font-size: 1.4em;
  color: #000000;
}

</style>
