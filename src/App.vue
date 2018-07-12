<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>
<script>
import API from './api/api'
export default {
  name: 'App',
  created: function () {
    this.$axios.post(API.api.getUserInfo, {'uid': 10001}).then((res) => {
      console.log(res)
    })
  },
  watch: {
    '$route' (to, from) {
      // console.log(to, from)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
