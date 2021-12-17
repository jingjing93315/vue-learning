// 求和功能相关配置
export default  {
  namespaced: true,
  state: {
    sum: 0,
    school: '河北大学',
    subject: '计算机',
  },
  getters: {
    bigSum(state) {
      return state.sum * 10
    }
  },
  mutations: {
    ADDNUM(state, value) {
      state.sum += value
    },
    MINUSNUM(state, value) {
      state.sum -= value
    },
  },
  actions: {
    addNumOdd(context, value) {
      if (context.state.sum % 2) {
        context.commit('ADDNUM', value)
      }
    },
    addNumWait(context, value) {
      setTimeout(() => {
        context.commit('ADDNUM', value)
      }, 500)
    },
  },
}