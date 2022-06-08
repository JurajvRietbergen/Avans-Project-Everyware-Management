<template>
  <b-container>
    <b-row>
      <b-col>
        <b-tabs v-model="tabIndex" content-class="mt-3">
          <b-tab title="Algemeen" active>
            <GeneralTab @nextTab="nextTab" />
          </b-tab>
          <b-tab title="Vragen">
            <QuestionTab :info="[]" @switchTab="switchTab" @lastTab="lastTab" />
          </b-tab>
          <b-tab title="Codes">
            <CodeTab ref="cTab" @submitQuestionnaire="submitQuestionnaire" />
          </b-tab>
        </b-tabs>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import QuestionTab from '~/components/Questionnaires/new/QuestionTab.vue'
import GeneralTab from '~/components/Questionnaires/new/GeneralTab.vue'
import CodeTab from '~/components/Questionnaires/new/CodeTab.vue'

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
      await this.$api.questionnaire.postQuestionnaire(this.general).then((res) => {
        this.$router.push({ path: '/questionnaires/' + res })
        // this.$refs.cTab.updateCodes(res)
      })
        .catch((e) => {
          // Error handling if API is broken
          this.$bvModal.msgBoxOk('' + e)
        })
      this.$nuxt.$loading.finish()
      console.log('done')
    }

  }
}
</script>

<style scoped>

</style>
