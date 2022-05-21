<template>
  <b-container>
    <b-row>
      <b-col>
        <b-table :items="questionnaires" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  props: ['questionnaires'],
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
