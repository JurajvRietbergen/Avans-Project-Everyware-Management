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
