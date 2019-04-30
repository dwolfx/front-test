import Vue from 'vue'
import axios from 'axios'


// axios.defaults.baseURL = 'http://www.mocky.io/v2/'
// axios.defaults.baseURL = 'http://www.mocky.io/v2/'

Vue.use({
  install(Vue) {
    Vue.prototype.$dataApi = axios.create({
      baseURL: 'http://www.mocky.io/v2/'
    })
  }
})