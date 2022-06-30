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
    <b-modal id="copyQuestionnaire" title="" ok-only>
      <p>
        Hoeveel codes wilt u genereeren met de copy vragenlijst?
      </p>
      <b-form-input v-model="codeAmount" type="number" placeholder="Voeg hoeveelheid codes toe" />
    </b-modal>
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
        { key: 'startdate', label: 'Begonnen', sortable: true, formatter: 'formatDateAssigned' },
        { key: 'enddate', label: 'Eindigt', sortable: true, formatter: 'formatDateAssigned' },
        { key: 'view' },
        { key: 'copy' },
        { key: 'delete' }
      ],
      codeAmount: null
    }
  },
  methods: {
    goToQuestionnaire (item) {
      this.$router.push({ path: '/questionnaires/' + item.id })
    },

    copyQuestionnaire (item) {
      this.codeAmount = null
      const h = this.$createElement
      const messageVNode = h('b-input', {
        props: {
          value: this.codeAmount,
          type: 'number',
          placeholder: 'Voeg hoeveelheid codes toe'
        },
        on: { input: (value) => { this.codeAmount = value } }
      })
      this.$bvModal.msgBoxConfirm([messageVNode], { title: `Kopieer ${item.title}?` })
        .then((value) => {
          if (value) {
            console.log(item)
            const form = { id: item.id, amount: this.codeAmount }
            this.$api.questionnaire.copyQuestionnaire(form).then((res) => {
              this.$router.push({ path: '/questionnaires/' + res })
            })
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    formatDateAssigned (value) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(value).toLocaleDateString('nl', options)
    },
    deleteQuestionnaire (item) {
      this.$bvModal.msgBoxConfirm('Weet je zeker dat je ' + item.title + ' wilt verwijderen?')
        .then((value) => {
          if (value) {
            this.$api.questionnaire.deleteQuestionnaire(item.id).then((res) => {
              console.log(res)
            }).catch((err) => {
              console.log(err)
              this.$bvModal.msgBoxOk('Deze questionnaire is al gestart en kan niet worden verwijderd')
            })
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>

</style>
