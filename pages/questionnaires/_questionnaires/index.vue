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
    if (this.questionnaire.startdate) {
      const currentDate = new Date().setHours(0, 0, 0, 0)
      const startDate = new Date(this.questionnaire.startdate).setHours(0, 0, 0, 0)
      console.log(currentDate > startDate)
      this.isEditable = currentDate < startDate
    } else {
      this.isEditable = true
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
    patchQuestionnaire () {
      if (this.validation()) {
        this.$api.questionnaire.patchQuestionnaire({ id: this.$route.params.questionnaires, form: this.$store.state.questionnaire }).then((res) => {
          console.log(res)
          this.$router.push({ path: '/questionnaires' })
        }).catch((err) => {
          console.log(err)
          this.$bvModal.msgBoxConfirm('ERROR')
        })
      } else {
        const erros = this.errorMessage()
        let errorString = null
        erros.forEach((error) => {
          if (errorString) {
            errorString = errorString + ', ' + error
          } else {
            errorString = error
          }
        })
        this.$bvModal.msgBoxOk('U heeft fouten bij de volgende invulvelden: ' + errorString)
      }
    },
    validation () {
      const check = this.$store.state.questionnaire
      if (check.title) {
        if (check.startdate) {
          if (check.enddate) {
            if (check.categories) {
              if (check.startdate < check.enddate) {
                return true
              }
            }
          }
        }
      }
      return false
    },

    errorMessage () {
      const check = this.$store.state.questionnaire
      const errors = []
      if (!check.title) {
        errors.push('Titel')
      }
      if (!check.startdate) {
        errors.push('Start datum')
      }
      if (!check.enddate) {
        errors.push('Eind datum')
      }
      if (!check.categories) {
        errors.push('Categorieën')
      }
      if (check.startdate && check.enddate) {
        if (check.startdate > check.enddate) {
          errors.push('Datums incorrect')
        }
      }
      return errors
    }
  }
}
</script>

<style scoped>

</style>
