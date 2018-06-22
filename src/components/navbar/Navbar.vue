<template>
  <div class="navbar">
    <ul v-for="item in menu" v-bind:key="item.url">
      <li class="link">
        <a :href="item.url"
            v-on:click.stop="setContentType(item.title)"
            :target="item.target"
        >{{ item.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import store from '../../store/index.js'

export default {
  name: 'Navbar',
  data () {
    return {
      menu: [
        {url: '#projects', title: 'Work', target: ''},
        {url: '#about', title: 'About', target: ''},
        {url: 'https://medium.com/@devdevcharlie', title: 'Blog', target: '_blank'},
        {url: '', title: 'Contact', target: '_blank'}
      ]
    }
  },
  methods: {
    setContentType: function (title) {
      store.commit('setContentType', title)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "navbar.scss";
</style>
