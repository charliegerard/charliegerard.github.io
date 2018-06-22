<template>
  <section id="projects-container">
    <h2>Work</h2>
    <div v-for="project in projects">
        {{project.title}}
      </div>
  </section>
</template>

<script>
import projects from './projectsDetails.js'

export default {
  name: 'Projects',
  data () {
    return {'projects': projects}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "projects.scss";
</style>
