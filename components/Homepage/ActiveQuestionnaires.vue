<template>
  <b-card title="Actieve Vragenlijsten" sub-title="TBD">
    <b-card-text>
      <b-table :items="questionnaires" :fields="fields" sort-by="id" sort-icon-left />
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  props: ['questionnaires'],
  data () {
    return {
      fields: [
        { key: 'id', sortable: true },
        { key: 'title', label: 'Titel', sortable: true },
        { key: 'active', label: 'Actief Tot', sortable: true }
      ]
    }
  }
}
</script>

<style scoped>

</style>
