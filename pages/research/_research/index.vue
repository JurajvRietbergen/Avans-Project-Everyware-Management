<template>
  <b-container>
    <b-row>
      <b-col>
        <AnswerTable :answers="answers" />
      </b-col>
    </b-row>
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
