<template>
  <div id="app">
    <FooterGuide v-show="$route.meta.show"></FooterGuide>
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
