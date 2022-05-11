import api from '~/plugins/api/axios'
export default ({ $axios }, inject) => {
  inject('api', api($axios))
}
