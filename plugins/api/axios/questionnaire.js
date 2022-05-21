export const postQuestion = $axios => (form) => {
  return $axios.$post('/questions', form)
}

export const getQuestionnaire = $axios => () => {
  return $axios.$get('/questionnaires')
}

export const postCategory = $axios => (form) => {
  return $axios.$post('/categories', form)
}
