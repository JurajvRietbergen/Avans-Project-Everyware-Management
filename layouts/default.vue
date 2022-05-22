<template>
  <div>
    <Nav />
    <div class="main">
      <Nuxt />
    </div>
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

#__layout {
    /* Uitvogelen hoe background aanpassen */
    background-color: #EBF4FA
}
</style>

<style scoped>
.main {
  margin-top: 2%;
}
</style>
