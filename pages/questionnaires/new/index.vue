<template>
  <b-container>
    <b-row>
      <b-col>
        <b-tabs v-model="tabIndex" content-class="mt-3">
          <b-tab title="Algemeen" active>
            <GeneralTab @nextTab="nextTab" />
          </b-tab>
          <b-tab title="Vragen">
            <QuestionTab @switchTab="switchTab" @lastTab="lastTab" />
          </b-tab>
          <b-tab title="Codes">
            <CodeTab @submitQuestionnaire="submitQuestionnaire" />
          </b-tab>
        </b-tabs>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import QuestionTab from '~/components/Questionnaires/_questionnaires/QuestionTab.vue'
import GeneralTab from '~/components/Questionnaires/_questionnaires/GeneralTab.vue'
import CodeTab from '~/components/Questionnaires/_questionnaires/CodeTab.vue'

export default {
  components: { QuestionTab, GeneralTab, CodeTab },
  data () {
    return {
      general: null,
      tabIndex: 1
    }
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
    async submitQuestionnaire (data) {
      this.$nuxt.$loading.start()
      this.general.amount = data
      console.log('here')
      await this.$api.questionnaire.postQuestionnaire(this.general).then((res) => {
        console.log(res)
        this.$store.commit('ADD_CODES', res)
      })
        .catch((e) => {
          // Error handling if API is broken
          this.$bvModal.msgBoxOk('' + e)
        })
      this.$nuxt.$loading.finish()
    }

  }
}
</script>

<style scoped>

</style>
