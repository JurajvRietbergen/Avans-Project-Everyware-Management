export const getAnswers = $axios => (form) => {
  return $axios.$get('/answers', { params: form })
}
