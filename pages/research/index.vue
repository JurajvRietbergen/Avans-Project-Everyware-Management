<template>
  <b-container>
    <h1> Research Page TBD </h1>
    <ResearchQuestionnaires :questionnaires="questionnaires" />
  </b-container>
</template>

<script>
import ResearchQuestionnaires from '~/components/Research/ResearchTable.vue'

export default {
  components: { ResearchQuestionnaires },

  async asyncData ({ $api, store }) {
    const questionnaires = await $api.questionnaire.getQuestionnaire()
    const test = await $api.research.getAnswers({ id: 1, type: 'Bram was hier' })
    console.log(test)
    return { questionnaires }
  },
  data () {
    return {
      questionnaires: []
    }
  }
}
</script>

<style scoped>

</style>
