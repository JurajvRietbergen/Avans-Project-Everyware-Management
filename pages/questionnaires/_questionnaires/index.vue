<template>
  <b-container>
    <b-row>
      <b-col>
        <b-tabs v-model="tabIndex" content-class="mt-3">
          <b-tab title="Algemeen" active>
            <GeneralTab :data="questionnaire" />
          </b-tab>
          <b-tab title="Vragen">
            <QuestionTab :info="questionnaire.categories" />
          </b-tab>
          <b-tab title="Codes">
            <CodeTab :codes="questionnaire.codes" />
          </b-tab>
        </b-tabs>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import QuestionTab from '~/components/Questionnaires/_questionnaires/viewQuestionTab.vue'
import GeneralTab from '~/components/Questionnaires/_questionnaires/viewGeneralTab.vue'
import CodeTab from '~/components/Questionnaires/_questionnaires/viewCodeTab.vue'

export default {
  components: { QuestionTab, GeneralTab, CodeTab },
  async asyncData ({ $api, route }) {
    const questionnaire = await $api.questionnaire.getQuestionnaire(route.params.questionnaires)
    console.log(questionnaire)
    return { questionnaire }
  },
  data () {
    return {
      general: null,
      categories: null,
      tabIndex: 1
    }
  },
  methods: {
    switchTab (index) {
      console.log(this.categories)
      if (index > 0) {
        this.tabIndex++
      } else {
        this.tabIndex--
      }
    }
  }
}
</script>

<style scoped>

</style>
