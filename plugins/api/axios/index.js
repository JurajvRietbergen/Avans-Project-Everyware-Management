
import * as questionnaire from './questionnaire'
import * as research from './research'

const axios = ($axios) => {
  const api = $axios.create({
    auth: { username: 'user', password: 'nodeRed!Access' }
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
  questionnaire: configureEndpoints($axios, questionnaire),
  research: configureEndpoints($axios, research)
})
