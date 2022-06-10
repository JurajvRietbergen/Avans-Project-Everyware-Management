<template>
  <b-container>
    <b-row>
      <b-col>
        <b-tabs v-model="tabIndex" content-class="mt-3">
          <b-tab title="Algemeen" active>
            <GeneralTab @switchTab="switchTab" />
          </b-tab>
          <b-tab title="Vragen">
            <QuestionTab @switchTab="switchTab" />
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
      tabIndex: 1
    }
  },
  mounted () {
    this.$store.commit('NEW_QUESTIONNAIRE', {})
  },
  methods: {
    switchTab (index) {
      if (index > 0) {
        this.tabIndex++
      } else {
        this.tabIndex--
      }
    },
    async submitQuestionnaire (data) {
      this.$nuxt.$loading.start()
      this.$store.commit('ADD_CODE', data)
      await this.$api.questionnaire.postQuestionnaire(this.$store.state.questionnaire).then((res) => {
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
