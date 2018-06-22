<template>
  <div id="home">
    <h1 class="name">Charlie Gerard</h1>
    <h2 class="title">Developer</h2>
    <div id="threejs-container"></div>
  </div>
</template>

<script>
import animation from './threeJsAnimation.js'
export default {
  name: 'Home',
  mounted () {
    animation()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "home.scss";
</style>
