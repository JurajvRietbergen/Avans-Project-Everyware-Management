<template>
  <b-container>
    <h1> Antwoorden overzicht </h1>
    <AnswerTable :answers="answers" />
  </b-container>
</template>

<script>
import AnswerTable from '~/components/Research/AnswerTable.vue'

export default {
  components: { AnswerTable },

  async asyncData ({ $api, route }) {
    const answers = await $api.research.getAnswers({ id: route.params.research, type: 'json' })
    return { answers }
  },
  data () {
    return {
      answers: []
    }
  }
}
</script>

<style scoped>

</style>
