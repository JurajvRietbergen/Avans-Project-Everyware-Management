<template>
  <b-list-group>
    <b-list-group-item v-for="category in categories" :key="category.name">
      {{ category.name }}
    </b-list-group-item>
  </b-list-group>
</template>
<script>

export default {
  props: ['categories'],
  data () {
    return {
      questions: ['is de entree goed te vinden?', '']
    }
  },
  mounted () {
    console.log(this.categories)
  }
}
</script>
