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
  UPDATE_CATEGORIES (state, categories) {
    state.questionnaire.categories = categories
  }
}
