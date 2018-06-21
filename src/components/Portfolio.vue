<template>
  <div class="outer-container">
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

.outer-container{
  min-height: 0;
  background: white;
  max-height: 700px;
  overflow-y: scroll;
  width: 0;
  position: absolute;
  height: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-x: hidden;
  animation: growOuterContainer 1s ease;
  animation-fill-mode:forwards;
}

@keyframes growOuterContainer {
  from{
    width: 0;
    height: 0;
  }
  to{
    width: 95%;
    min-height: 95%;
  }
}
</style>
