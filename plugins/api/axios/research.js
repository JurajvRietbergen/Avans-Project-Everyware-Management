export const getAnswers = $axios => (form) => {
  return $axios.$get('/answers', { params: form })
}

export const getExcelAnswers = $axios => (form) => {
  return $axios.$get('/answers', { params: form, responseType: 'blob' })
}
