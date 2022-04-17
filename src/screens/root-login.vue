<template>
  <div class="root-login">
    <div class="root-login__wrapper">
      <h1 class="root-login__header">Sign in to your account</h1>
      <div class="root-login__form">
        <div class="root-login__form-input">
          <input type="text"
                 v-model="username"
                 @keyup.enter.exact="tryDoLogin"
                 placeholder="Username"/>
        </div>
        <div class="root-login__form-input">
          <input type="password"
                 v-model="password"
                 @keyup.enter.exact="tryDoLogin"
                 placeholder="Password"/>
        </div>
      </div>

      <button class="root-login__submit"
              @click="tryDoLogin">
        Sign In
      </button>
    </div>
  </div>
</template>

<script>
  import AppConstants from '@/references/app-constants'
  import Routes from '@/references/route-constants'

  export default {
    name: 'root-login',
    data() {
      return {
        username: null,
        password: null
      }
    },
    computed: {
      isValidCredentials() {
        return (this.username === AppConstants.USERNAME && this.password === AppConstants.PASSWORD)
      }
    },
    methods: {
      tryDoLogin() {
        if (!this.isValidCredentials) {
          this.$showErrorNotification("Invalid Credentials")
        } else {
          this.$hideErrorNotification()
          this.goToUsersPage()
        }
      },
      goToUsersPage() {
        this.$router.push({
          name: Routes.ROUTE_USERS
        })
      }
    }
  }
</script>

<style lang="scss">
  .root-login {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    &__wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-width: 30rem;
    }

    &__header {
      color: #434343;
      font-size: 2rem;
      margin-bottom: 3rem;
      text-transform: uppercase;
      text-align: center;
    }

    &__submit {
      background-color: #746bde;
      padding: 1.2rem;
      color: white;
      text-transform: uppercase;
      border: none;
      border-radius: 0.3rem;
      cursor: pointer;

      &:hover {
        background-color: darken(#746bde, 50%);
      }
    }

    &__form {
      margin-bottom: 6rem;
      display: flex;
      flex-direction: column;
      row-gap: 1rem;
    }

    input[type="text"],
    input[type="password"] {
      width: 100%;
      padding: 1.5rem;
      background-color: #e5e8ed !important;
      border: none;

      &:active,
      &:focus {
        border: none;
      }
    }
  }
</style>
