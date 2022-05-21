<template>
  <b-container>
    <b-row>
      <b-col>
        <ActiveQuestionnaires :questionnaires="questionnaires" />
      </b-col>
      <b-col>
        <FinishedQuestionnaires :questionnaires="questionnaires" />
      </b-col>
      <b-row />
    </b-row>
  </b-container>
</template>

<script>
import ActiveQuestionnaires from '~/components/Homepage/ActiveQuestionnaires.vue'
import FinishedQuestionnaires from '~/components/Homepage/FinishedQuestionnaires.vue'
export default {
  components: { ActiveQuestionnaires, FinishedQuestionnaires },
  async asyncData ({ $api, store }) {
    const questionnaires = await $api.questionnaire.getQuestionnaire()
    store.commit('ADD_QUESTIONNAIRES', questionnaires)
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
