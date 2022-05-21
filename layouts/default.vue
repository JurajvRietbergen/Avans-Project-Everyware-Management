<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <Nav />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <Nuxt />
      </b-col>
    </b-row>
  </b-container>
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
.container-fluid {
  padding: 0;
}

.row {
  margin-bottom: 2%;
}
</style>
