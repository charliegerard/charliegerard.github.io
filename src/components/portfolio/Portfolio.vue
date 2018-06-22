<template>
  <div id="app-container" class="container-grow">
    <div class="outer-container outer-container-grow">
      <a href="#" id="home-link">
        <div class="description">
          <h1>CHARLIE GERARD</h1>
          <h3>Developer</h3>
        </div>
      </a>
      <navbar></navbar>
      <content-container :contentToDisplay="contentToDisplay"></content-container>
    </div>
  </div>
</template>

<script>
import Navbar from '../navbar/Navbar.vue'
import ContentContainer from '../contentContainer/ContentContainer.vue'

let contentToDisplayOnReload = ''

export default {
  name: 'Portfolio',
  props: ['content'],
  beforeRouteEnter (to, from, next) {
    // need to refactor that :/
    let type = ''
    switch (to.hash) {
      case '#about':
        type = 'About'
        break
      case '#projects':
        type = 'Work'
        break
      default:
        type = ''
        break
    }
    contentToDisplayOnReload = type
    next()
  },
  mounted () {
    if (contentToDisplayOnReload === '') {
      let homeLink = document.getElementById('home-link')
      homeLink.style.display = 'none'
    }
  },
  watch: {
    $route (to, from) {
      console.log('from', from)
    }
  },
  data () {
    return {
      contentToDisplay: this.content || contentToDisplayOnReload
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
@import "portfolio.scss";
</style>
