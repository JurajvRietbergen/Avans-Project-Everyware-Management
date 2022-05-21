<template>
  <b-list-group>
    <b-list-group-item v-for="categor in category" :key="categor.name">
      {{ categor.name }}
    </b-list-group-item>
  </b-list-group>
</template>
<script>

export default {
  props: ['category'],
  data () {
    return {
      questions: ['is de entree goed te vinden?', '']
    }
  },
  mounted () {
    console.log(this.category)
  }
}
</script>
