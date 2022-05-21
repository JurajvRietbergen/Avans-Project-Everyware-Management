export const state = () => ({
  questionnaires: [],
  counter: 0
})

export const mutations = {
  increment (state) {
    state.counter++
  },
  ADD_QUESTIONNAIRE (state, questionnaire) {
    if (state.questionnaires.find(q => q.id === questionnaire.id)) {
      console.log('Exists already')
    } else {
      state.questionnaires.push(questionnaire)
    }
  },
  ADD_QUESTIONNAIRES (state, questionnaires) {
    console.log('state', state.questionnaires.length)
    if (state.questionnaires.length > 0) {
      console.log('WARNING QUESTIONNAIRES EXIST!')
    } else {
      state.questionnaires = questionnaires
    }
  },
  ADD_QUESTIONS (state, questionnaire) {
    if (state.questionnaires.length > 0) {
      // To make
      console.log(state.questionnaires.find(q => q.id === questionnaire.id))
    }
  }
}
