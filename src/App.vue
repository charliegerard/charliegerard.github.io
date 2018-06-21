<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body{
  margin: 0;
  width: 100%;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #f3f1f1;
  display: block;
  width: 0;
  position: absolute;
  height: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-delay: 1s;
  animation: grow 1s ease;
  animation-fill-mode:forwards;
}

@keyframes grow {
  from{
    width: 0;
    height: 0;
  }
  to{
    width: 100%;
    height: 100%;
  }
}

</style>
