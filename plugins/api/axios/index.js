
import * as questionnaire from './questionnaire'

const axios = ($axios) => {
  const api = $axios.create({
  })
  return api
}
const configureEndpoints = ($axios, api) => {
  const obj = {}
  Object.keys(api).forEach((key) => {
    obj[key] = api[key](axios($axios))
  })
  return obj
}
export default $axios => ({
  questionnaire: configureEndpoints($axios, questionnaire)
})
