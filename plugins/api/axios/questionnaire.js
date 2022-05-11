export const postQuestion = $axios => (form) => {
  return $axios.$post('/questions', form)
}
