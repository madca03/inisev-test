import {MUTATE_SHOW_ERROR_NOTIFICATION} from '@/store/types';

export default {
  install: function (Vue) {
    Vue.mixin({
      methods: {
        $showErrorNotification(textVal, duration = 5000) {
          this.$store.commit(MUTATE_SHOW_ERROR_NOTIFICATION, {showError: true, errorText: textVal})

          setTimeout(() => {
            this.$store.commit(MUTATE_SHOW_ERROR_NOTIFICATION, {showError: false})
          }, duration)
        }
      }
    })
  }
}
