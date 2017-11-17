export const state = () => ({
  currentTab: 'fe'
})

export const mutations = {
  SET_CUR_TAB(state, val) {
    state.currentTab = val
  }
}
