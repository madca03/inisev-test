import {MUTATE_SHOW_ERROR_NOTIFICATION, MUTATE_SHOW_USER_MODAL} from '@/store/types';

export default {
  install: function (Vue) {
    Vue.mixin({
      computed: {
        $isMobile() {
          return this.$mq.mobile;
        }
      },
      methods: {
        $showErrorNotification(textVal, duration = 5000) {
          this.$store.commit(MUTATE_SHOW_ERROR_NOTIFICATION, {showError: true, errorText: textVal})

          setTimeout(() => {
            this.$store.commit(MUTATE_SHOW_ERROR_NOTIFICATION, {showError: false})
          }, duration)
        },
        $hideErrorNotification() {
          this.$store.commit(MUTATE_SHOW_ERROR_NOTIFICATION, {showError: false})
        },
        $toggleUserModal(showModal, selectedUser = null) {
          this.$store.commit(MUTATE_SHOW_USER_MODAL, {showModal, selectedUser})
        }
      }
    })
  }
}
