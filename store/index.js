export const state = () => ({
  questionnaire: {},
  codes: [],
  counter: 0
})

export const mutations = {
  increment (state) {
    state.counter++
  },
  NEW_QUESTIONNAIRE (state, questionnaire) {
    state.questionnaire = questionnaire
  },
  UPDATE_CATEGORIES (state, categories) {
    state.questionnaire.categories = categories
  },
  ADD_CODES (state, codes) {
    state.codes = codes
  }
}
