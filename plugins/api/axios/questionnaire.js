export const postQuestion = $axios => (form) => {
  return $axios.$post('/questions', form)
}

export const postCategory = $axios => (form) => {
  return $axios.$post('/categories', form)
}
