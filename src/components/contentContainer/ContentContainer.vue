<template>
  <div class="navbar">
    <home v-if="content === ''"></home>
    <about v-if="content === 'About'"></about>
    <projects v-if="content === 'Work'"></projects>
  </div>
</template>

<script>
import store from '../../store/index.js'
import Home from '../home/Home.vue'
import About from '../about/About.vue'
import Projects from '../projects/Projects.vue'

export default {
  name: 'ContentContainer',
  store,
  props: ['contentToDisplay'],
  computed: {
    content () {
      return store.state.contentDisplayed || this.contentToDisplay
    }
  },
  components: {
    'home': Home,
    'about': About,
    'projects': Projects
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
