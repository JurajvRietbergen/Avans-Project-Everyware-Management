<template>
  <b-table :items="questionnaires" :fields="fields" sort-by="id" sort-icon-left>
    <template #cell(view)="row">
      <b-button size="sm" variant="primary" @click="goToResearch(row.item)">
        <b-icon icon="eye" aria-hidden="true" />
      </b-button>
    </template>
  </b-table>
</template>

<script>
export default {
  props: ['questionnaires'],
  data () {
    return {
      fields: [
        { key: 'id', sortable: true },
        { key: 'title', label: 'Titel', sortable: true },
        { key: 'active', label: 'Actief Tot', sortable: true },
        { key: 'view' }
      ]
    }
  },
  methods: {
    goToResearch (item) {
      this.$router.push({ path: '/research/' + item.id })
    }
  }
}
</script>

<style scoped>

</style>
