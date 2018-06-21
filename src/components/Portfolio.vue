<template>
  <div class="hello">
    <navbar></navbar>
    <content-container :contentToDisplay="contentToDisplay"></content-container>
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
import ContentContainer from './ContentContainer.vue'

export default {
  name: 'Portfolio',
  props: ['content'],
  data () {
    return {
      contentToDisplay: this.content
    }
  },
  components: {
    'navbar': Navbar,
    'content-container': ContentContainer
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
