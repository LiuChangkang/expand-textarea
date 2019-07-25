<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <expand-textarea v-model="text" placeholder="expand-textarea"></expand-textarea>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      text: ''
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
