<template>
  <b-container>
    <b-row>
      <b-col>
        <QuestionnaireTable :questionnaires="questionnaires" />
      </b-col>
      <b-row />
    </b-row>
  </b-container>
</template>

<script>
import QuestionnaireTable from '~/components/Questionnaires/QuestionnaireTable.vue'

export default {
  components: { QuestionnaireTable },
  async asyncData ({ $api }) {
    const questionnaires = await $api.questionnaire.getQuestionnaires()
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
