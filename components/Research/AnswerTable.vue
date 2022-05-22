<template>
  <b-container>
    <b-pagination
      v-model="currentPage"
      :per-page="perPage"
      :total-rows="totalRows"
      align="fill"
      size="sm"
      class="my-0"
    />
    <b-table
      :items="answers"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
    />
  </b-container>
</template>

<script>
export default {
  props: ['answers'],
  data () {
    return {
      fields: [
        { key: 'category', label: 'Categorie' },
        { key: 'question_nr', label: 'Vraag Nummer' },
        { key: 'question', label: 'Vraag' },
        { key: 'type', label: 'Vraagtype' },
        { key: 'usercode_id', label: 'Gebruiker' },
        { key: 'text', label: 'Antwoord' }
      ],
      currentPage: 1,
      perPage: 12,
      totalRows: this.answers.length
    }
  }
}
</script>

<style scoped>

</style>
