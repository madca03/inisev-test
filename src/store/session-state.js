import {GET_SESSION_STATE, MUTATE_SHOW_ERROR_NOTIFICATION, MUTATE_SHOW_USER_MODAL} from '@/store/types';

const state = {
  loggedIn: false,
  showErrorNotification: false,
  errorText: '',
  showModal: false,
  selectedUser: null
}

const mutations = {
  [MUTATE_SHOW_ERROR_NOTIFICATION]: (state, {showError, errorText}) => {
    state.showErrorNotification = showError
    if (showError) {
      state.errorText = errorText
    } else {
      state.errorText = ''
    }
  },
  [MUTATE_SHOW_USER_MODAL]: (state, {showModal, selectedUser}) => {
    state.showModal = showModal
    if (showModal) {
      state.selectedUser = selectedUser
    } else {
      state.selectedUser = null
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
