export const getAllAnswers = $axios => () => {
  return $axios.$get('/answers')
}

export const getAnswers = $axios => (form) => {
  return $axios.$get('/answers/' + form.id, { params: form.type })
}

export const getExcelAnswers = $axios => (form) => {
  return $axios.$get('/answers', { params: form, responseType: 'blob' })
}

export const getImagesAnswers = $axios => (form) => {
  return $axios.$get('/images', { params: form })
}
