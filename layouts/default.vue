<template>
  <div>
    <Nav />
    <Nuxt />
  </div>
</template>

<script>
import Nav from '~/components/NavBar/NavLayouts.vue'

export default {
  components: {
    Nav
  }
}
</script>

<style>
html,
body,
#__nuxt,
#__layout {
  height: 100% !important;
  width: 100% !important;
}
</style>

