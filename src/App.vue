<template>
  <div id="app">
    <FooterGuide v-show="$route.meta.show"></FooterGuide>
    <router-view/>
  </div>
</template>

<script>

import FooterGuide from './components/FootGuide/FootGuide.vue'
export default {
  mounted(){
    this.$store.dispatch('getAddress')
    this.$store.dispatch('getShops')
  },

  components: {
    FooterGuide
  },
}
</script>

<style>

</style>
