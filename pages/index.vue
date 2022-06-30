<template>
  <b-container>
    <b-row>
      <b-col>
        <HomepageTable :questionnaires="unstarted" title="Onbegonnen Vragenlijsten" />
      </b-col>
      <b-col>
        <HomepageTable :questionnaires="recentlyEnded" title="Recent Afgesloten Vragenlijsten" />
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
      questionnaires: [],
      unstarted: [],
      recentlyEnded: []
    }
  },

  mounted () {
    const currDate = new Date()
    this.questionnaires.forEach((questionnaire) => {
      console.log(new Date(questionnaire.enddate) + ' - ' + currDate)
      if (questionnaire.startdate) {
        if (currDate > new Date(questionnaire.startdate)) {
          if (currDate > new Date(questionnaire.enddate)) {
            const tempDate = new Date()
            tempDate.setDate(currDate.getDate() - 7)
            if (new Date(questionnaire.enddate) > tempDate) {
              this.recentlyEnded.push(questionnaire)
            }
          }
        } else {
          console.log('this')
          this.unstarted.push(questionnaire)
        }
      } else {
        this.unstarted.push(questionnaire)
      }
    })
  }
}
</script>

<style scoped>

</style>
