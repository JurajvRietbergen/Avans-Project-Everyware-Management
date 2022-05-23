<template>
  <b-card :title="title" sub-title="TBD">
    <b-card-text>
      <b-table :items="questionnaires" :fields="fields" sort-by="id" sort-icon-left />
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  props: ['questionnaires', 'title'],
  data () {
    return {
      fields: [
        { key: 'id', sortable: true },
        { key: 'title', label: 'Titel', sortable: true },
        { key: 'startdate', label: 'Begonnen', sortable: true },
        { key: 'enddate', label: 'Eindigt', sortable: true }
      ]
    }
  }
}
</script>

<style scoped>

</style>
