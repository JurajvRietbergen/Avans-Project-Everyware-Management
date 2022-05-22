<template>
  <b-container>
    <b-row>
      <b-col>
        <HomepageTable :questionnaires="questionnaires" title="Recent Begonnen" />
      </b-col>
      <b-col>
        <HomepageTable :questionnaires="questionnaires" title="Recent Afgesloten" />
      </b-col>
      <b-row />
    </b-row>
  </b-container>
</template>

<script>
import HomepageTable from '~/components/Homepage/HomepageTable.vue'

export default {
  components: { HomepageTable },
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
