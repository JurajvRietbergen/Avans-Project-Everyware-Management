<template>
  <b-card title="Generated Codes">
    <hr>
    <b-list-group>
      <b-list-group-item v-for="(code) in generatedCodes" :key="code">
        {{ code }}
      </b-list-group-item>
    </b-list-group>
  </b-card>
</template>

<script>
export default {
  props: ['codes'],
  data () {
    return {
      generatedCodes: null
    }
  },
  mounted () {
    this.generatedCodes = this.codes
  }
}
</script>

<style scoped>

</style>
