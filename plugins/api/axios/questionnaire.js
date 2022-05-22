export const postQuestion = $axios => (form) => {
  return $axios.$post('/questions', form)
}

export const getQuestionnaire = $axios => () => {
  return $axios.$get('/questionnaires')
}

export const postQuestionnaire = $axios => (form) => {
  return $axios.$post('/questionnaires', form)
}

export const postCategory = $axios => (form) => {
  return $axios.$post('/categories', form)
}
