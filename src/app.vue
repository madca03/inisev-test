<template>
  <div id="app">
    <router-view/>
    <error-notification-alert
      :text="sessionState.errorText"
      v-show="sessionState.showErrorNotification"/>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {GET_SESSION_STATE} from '@/store/types';
  import ErrorNotificationAlert from '@/components/error-notification-alert';

  export default {
    name: 'app',
    components: {ErrorNotificationAlert},
    computed: {
      ...mapGetters({
        sessionState: GET_SESSION_STATE
      })
    }
  }
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  @media (max-width: 1440px) {
    html {
      font-size: 50%;
    }
  }

  @media (max-width: 768px) {
    html {
      font-size: 40%;
    }
  }

</style>
