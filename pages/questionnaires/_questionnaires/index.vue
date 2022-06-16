<template>
  <b-container>
    <b-row>
      <b-col>
        <b-tabs v-model="tabIndex" content-class="mt-3">
          <b-tab v-if="!isEditable" title="Algemeen" active>
            <GeneralTab :data="questionnaire" />
          </b-tab>
          <b-tab v-if="isEditable" title="Algemeen" active>
            <EditGeneralTab :data="questionnaire" @switchTab="switchTab" />
          </b-tab>
          <b-tab v-if="isEditable" title="Vragen">
            <EditQuestionTab :info="questionnaire.categories" @switchTab="switchTab" />
          </b-tab>
          <b-tab v-if="!isEditable" title="Vragen">
            <QuestionTab :info="questionnaire.categories" />
          </b-tab>
          <b-tab title="Codes">
            <CodeTab :codes="questionnaire.codes" />
          </b-tab>
        </b-tabs>
        <b-button v-if="isEditable" class="mt-2" variant="primary" @click="patchQuestionnaire()">
          Sla op
        </b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import QuestionTab from '~/components/Questionnaires/_questionnaires/viewQuestionTab.vue'
import EditQuestionTab from '~/components/Questionnaires/new/QuestionTab.vue'
import GeneralTab from '~/components/Questionnaires/_questionnaires/viewGeneralTab.vue'
import EditGeneralTab from '~/components/Questionnaires/new/GeneralTab.vue'
import CodeTab from '~/components/Questionnaires/_questionnaires/viewCodeTab.vue'

export default {
  components: { QuestionTab, EditQuestionTab, GeneralTab, EditGeneralTab, CodeTab },
  async asyncData ({ $api, route, store }) {
    const res = await $api.questionnaire.getQuestionnaire(route.params.questionnaires)
    store.commit('NEW_QUESTIONNAIRE', res)
    const questionnaire = JSON.parse(JSON.stringify(res))
    return { questionnaire }
  },
  data () {
    return {
      categories: null,
      tabIndex: 1,
      isEditable: false
    }
  },
  mounted () {
    const currentDate = new Date().setHours(0, 0, 0, 0)
    const startDate = new Date(this.questionnaire.startdate).setHours(0, 0, 0, 0)
    console.log(currentDate > startDate)
    this.isEditable = currentDate < startDate
  },
  methods: {
    switchTab (index) {
      if (index > 0) {
        this.tabIndex++
      } else {
        this.tabIndex--
      }
    },
    patchQuestionnaire () {
      this.$api.questionnaire.patchQuestionnaire({ id: this.$route.params.questionnaires, form: this.$store.state.questionnaire }).then((res) => {
        console.log(res)
        this.$router.push({ path: '/questionnaires' })
      }).catch((err) => {
        console.log(err)
        this.$bvModal.msgBoxConfirm('ERROR')
      })
    }
  }
}
</script>

<style scoped>

</style>
