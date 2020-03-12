import axios from 'axios'

export const state = () => ({
  drawer: null,
  user: null
})

export const mutations = {
  SET_DRAWER (state, drawer) {
    state.drawer = drawer
  },
  SET_USER (state, user) {
    state.user = user
  }
}

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  nuxtServerInit ({ commit }, { req }) {
    if (req.session && req.session.user) {
      commit('SET_USER', req.session.user)
    }
  },
  async login ({ commit }, { username, password }) {
    try {
      const { data } = await axios.post('/api/login', { username, password })
      commit('SET_USER', data)
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Falscher Benutzername oder Passwort!')
      }
      throw error
    }
  },
  postQuestionAdmin (store, question) {
    return new Promise((resolve, reject) => {
      axios.post('/api/admin/questions', { question }).then(response => {
        resolve(response.data)
      }).catch(error => {
        reject(error.response.data)
      })
    })
  },
  deleteQuestion (store, id) {
    return new Promise((resolve, reject) => {
      axios.delete('/api/admin/question/' + id).then(response => {
        resolve(response.data)
      }).catch(error => {
        reject(error.response.data)
      })
    })
  },
  postQuestion (store, question) {
    return new Promise((resolve, reject) => {
      axios.post('/api/question', { question }).then(response => {
        resolve(response.data)
      }).catch(error => {
        reject(error.response.data)
      })
    })
  },

  async logout ({ commit }) {
    await axios.post('/api/logout')
    commit('SET_USER', null)
  }

}
