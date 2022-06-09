export const postQuestion = $axios => (form) => {
  return $axios.$post('/questions', form)
}

export const getQuestionnaires = $axios => () => {
  return $axios.$get('/questionnaires')
}

export const getQuestionnaire = $axios => (id) => {
  return $axios.$get('/questionnaires/' + id)
}

export const postQuestionnaire = $axios => (form) => {
  return $axios.$post('/questionnaires', form)
}

export const postCategory = $axios => (form) => {
  return $axios.$post('/categories', form)
}

export const patchQuestionnaire = $axios => (id, form) => {
  return $axios.$patch('/questionnaires/' + id, form)
}
