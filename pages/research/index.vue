<template>
  <b-container>
    <b-row>
      <b-col>
        <ResearchQuestionnaires :questionnaires="questionnaires" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import ResearchQuestionnaires from '~/components/Research/ResearchTable.vue'

export default {
  components: { ResearchQuestionnaires },

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
