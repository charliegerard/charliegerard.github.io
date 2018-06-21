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
import store from '../store/index.js'

export default {
  name: 'Navbar',
  data () {
    return {
      menu: [
        {url: 'projects', title: 'Work', target: ''},
        {url: 'about', title: 'About', target: ''},
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
.navbar{
  font-family: 'Source Sans Pro', sans-serif;
  width: auto;
  display: block;
  text-align: right;
  //margin-right: -20px;
  margin-top: 20px;
  position: relative;
  float: right;
  z-index: 20;
  opacity: 0;
  animation: fadeIn 0.5s ease;
  animation-fill-mode: forwards;
  animation-delay: 1.2s;
}

.link{
  display: block;
  float: right;
  clear: both;
  // margin-right: -180px;
  transition-timing-function: ease-out;
  transition: 0.5s;
  // transform: translateX(180px);
}

@keyframes fadeIn{
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
}
a {
  font-size: 14px;
  font-weight: 200;
  color: rgb(255, 28, 0);
  margin-right: 10px;
  display: block;
  margin-bottom: 5px;
}
</style>
