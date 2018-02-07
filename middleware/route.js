export default function ({ store, route, redirect }) {
  store.commit('SET_CUR_TAB', route.path.replace(/\/category\/|\//, ''))
}
