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

export const patchQuestionnaire = $axios => (form) => {
  return $axios.$post('/questionnaires/' + form.id, form.form)
}

export const copyQuestionnaire = $axios => (form) => {
  return $axios.$get('/copyQuestionnaire/' + form.id + '/' + form.amount)
}

export const deleteQuestionnaire = $axios => (id) => {
  return $axios.$delete('/questionnaires/' + id)
}
