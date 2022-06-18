<template>
  <b-card :title="title" sub-title="TBD">
    <b-card-text>
      <b-table :items="questionnaires" :fields="fields" sort-by="id" sort-icon-left>
        <template #cell(view)="row">
          <b-button size="sm" variant="primary" @click="goToQuestionnaire(row.item)">
            <b-icon icon="eye" aria-hidden="true" />
          </b-button>
        </template>
      </b-table>
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
        { key: 'startdate', label: 'Begonnen', sortable: true, formatter: 'formatDateAssigned' },
        { key: 'enddate', label: 'Eindigt', sortable: true, formatter: 'formatDateAssigned' },
        { key: 'view' }
      ]
    }
  },

  methods: {
    goToQuestionnaire (item) {
      this.$router.push({ path: '/questionnaires/' + item.id })
    },
    formatDateAssigned (value) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(value).toLocaleDateString('nl', options)
    }
  }
}
</script>

<style scoped>

</style>
