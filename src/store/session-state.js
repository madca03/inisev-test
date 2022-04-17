import {GET_SESSION_STATE, MUTATE_SHOW_ERROR_NOTIFICATION} from '@/store/types';

const state = {
  loggedIn: false,
  showErrorNotification: false,
  errorText: ''
}

const mutations = {
  [MUTATE_SHOW_ERROR_NOTIFICATION]: (state, {showError, errorText}) => {
    state.showErrorNotification = showError
    if (showError) {
      state.errorText = errorText
    } else {
      state.errorText = ''
    }
  }
}
const actions = {}
const getters = {
  [GET_SESSION_STATE]: (state) => state
}

export default {
  state,
  mutations,
  actions,
  getters
}
