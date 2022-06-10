export const state = () => ({
  questionnaire: {},
  counter: 0
})

export const mutations = {
  increment (state) {
    state.counter++
  },
  NEW_QUESTIONNAIRE (state, questionnaire) {
    state.questionnaire = questionnaire
  },
  UPDATE_GENERAL (state, questionnaire) {
    state.questionnaire.title = questionnaire.title
    state.questionnaire.introduction = questionnaire.introduction
    state.questionnaire.startdate = questionnaire.startdate
    state.questionnaire.enddate = questionnaire.enddate
  },
  UPDATE_CATEGORIES (state, categories) {
    state.questionnaire.categories = categories
  },

  ADD_CODE (state, codeAmount) {
    state.questionnaire.amount = codeAmount
  }
}
