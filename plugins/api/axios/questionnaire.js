export const postQuestion = $axios => (form) => {
  return $axios.$post('/question', form)
}

export const postCategory = $axios => (form) => {
  return $axios.$post('/category', form)
}

export const getCategories = $axios => () => {
  return $axios.$get('/category')
}
