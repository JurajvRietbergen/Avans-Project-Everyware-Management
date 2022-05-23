<template>
  <b-card title="Questionnaires" sub-title="TBD">
    <b-card-text>
      <b-table :items="questionnaires" :fields="fields" sort-by="id" sort-icon-left>
        <template #cell(view)="row">
          <b-button size="sm" variant="primary" @click="goToQuestionnaire(row.item)">
            <b-icon icon="eye" aria-hidden="true" />
          </b-button>
        </template>
        <template #cell(copy)="row">
          <b-button size="sm" variant="primary" @click="copyQuestionnaire(row.item)">
            <b-icon icon="clipboard-plus" aria-hidden="true" />
          </b-button>
        </template>
        <template #cell(delete)="row">
          <b-button size="sm" variant="primary" @click="deleteQuestionnaire(row.item)">
            <b-icon icon="trash" aria-hidden="true" />
          </b-button>
        </template>
      </b-table>
    </b-card-text>
    <b-button size="sm" variant="primary" to="/questionnaires/new">
      Nieuwe Vragenlijst
    </b-button>
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
        { key: 'startdate', label: 'Begonnen', sortable: true },
        { key: 'enddate', label: 'Eindigt', sortable: true },
        { key: 'view' },
        { key: 'copy' },
        { key: 'delete' }
      ]
    }
  },
  methods: {
    goToQuestionnaire (item) {
      this.$router.push({ path: '/questionnaires/' + item.id })
    },

    copyQuestionnaire (item) {

    },

    deleteQuestionnaire (item) {

    }
  }
}
</script>

<style scoped>

</style>
