<template>
  <b-container>
    <b-row>
      <b-col>
        <b-tabs v-model="tabIndex" content-class="mt-3">
          <b-tab title="Algemeen" active>
            <GeneralTab @nextTab="nextTab" />
          </b-tab>
          <b-tab title="Vragen">
            <QuestionTab @switchTab="switchTab" />
          </b-tab>
          <b-tab title="Codes">
            <p>I'm a disabled tab!</p>
          </b-tab>
        </b-tabs>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import QuestionTab from '~/components/Questionnaires/_questionnaires/QuestionTab.vue'
import GeneralTab from '~/components/Questionnaires/_questionnaires/GeneralTab.vue'

export default {
  components: { QuestionTab, GeneralTab },
  data () {
    return {
      general: null,
      categories: null,
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
    nextTab (form) {
      if (form) {
        this.$store.commit('NEW_QUESTIONNAIRE', form)
        console.log(this.$store.state)
      }
    }

  }
}
</script>

<style scoped>

</style>
