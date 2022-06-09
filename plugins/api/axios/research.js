export const getAnswers = $axios => (form) => {
  return $axios.$get('/answers', { params: form })
}

export const getExcelAnswers = $axios => (form) => {
  return $axios.$get('/answers', { params: form, responseType: 'blob' })
}

export const getImagesAnswers = $axios => (form) => {
  return $axios.$get('/answers/images', { params: form })
}
