<template>
  <div id="app">
    <FooterGuide></FooterGuide>
    <router-view/>
  </div>
</template>

<script>

import FooterGuide from './components/FootGuide/FootGuide.vue'
export default {
  name: 'App',
  components: {
    FooterGuide
  }
}
</script>

<style>

</style>
