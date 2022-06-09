<template>
  <b-container>
    <b-row>
      <b-col>
        <b-tabs v-model="tabIndex" content-class="mt-3">
          <b-tab title="Algemeen" active>
            <GeneralTab :data="questionnaire" @nextTab="nextTab" />
          </b-tab>
          <b-tab v-if="isEditable" title="Vragen">
            <EditQuestionTab :info="questionnaire.categories" />
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
import CodeTab from '~/components/Questionnaires/_questionnaires/viewCodeTab.vue'

export default {
  components: { QuestionTab, EditQuestionTab, GeneralTab, CodeTab },
  async asyncData ({ $api, route }) {
    const questionnaire = await $api.questionnaire.getQuestionnaire(route.params.questionnaires)
    console.log(questionnaire)
    return { questionnaire }
  },
  data () {
    return {
      general: null,
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
    nextTab (general) {
      this.general = general
      console.log(this.general)
      this.tabIndex++
    },
    lastTab (categories) {
      if (this.general) {
        this.general.categories = categories
        this.tabIndex++
      }
    },
    patchQuestionnaire () {
      console.log('test')
      // this.$api.research.patchQuestionnaire({ id: this.$route.params.questionnaire, form: [] }).then((res) => {
      //   console.log(res)
      // }).catch((err) => {
      //   console.log(err)
      //   this.$bvModal.msgBoxConfirm('ERROR')
      // })
    }
  }
}
</script>

<style scoped>

</style>
