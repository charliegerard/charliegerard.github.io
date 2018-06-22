<template>
  <div class="navbar">
    <p>charlie Gerard</p>
  </div>
</template>

<script>
import store from '../../store/index.js'

export default {
  name: 'Home',
  store,
  props: ['contentToDisplay'],
  // data () {
  //   return {
  //     content: this.contentToDisplay
  //   }
  // },
  computed: {
    content () {
      return store.state.contentDisplayed || this.contentToDisplay
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
