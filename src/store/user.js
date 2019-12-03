// eslint-disable-next-line no-unused-vars
const state = {
  // 保存用户登录后的基本信息
  user: JSON.parse(sessionStorage.getItem('$user')) || {}
}

const getters = {
  // 获取登录信息
  getUser: state => {
    return state.user
  }
}

const actions = {
  setUser ({ commit }, item) {
    commit('setUser', item)
  }
}

const mutations = {
  // 设置登录信息
  setUser (state, item) {
    state.user = item
    sessionStorage.setItem('$user', JSON.stringify(state.user))
  },
  // 注销登录
  clearUser (state) {
    state.user = {}
    sessionStorage.setItem('$user', JSON.stringify(state.user))
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
