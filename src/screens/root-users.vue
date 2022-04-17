<template>
  <div class="root-users">
    <side-nav class="root-users__side-nav"/>
    <users-list :users="users"/>
  </div>
</template>

<script>
  import axios from 'axios'
  import API from '@/references/api-endpoints'
  import SideNav from '@/components/side-nav';
  import UsersList from '@/components/users-list';

  export default {
    name: "root-users",
    components: {UsersList, SideNav},
    data() {
      return {
        users: [],
        isLoading: true
      }
    },
    methods: {
      fetchUserData() {
        return new Promise((resolve, reject) => {
          axios.get(API.GET_USERS).then(data => {
            if (!Array.isArray(data.data)) {
              reject(data)
              return
            }
            this.users = data.data
            resolve()
          }).catch(reject)
        })
      }
    },
    created() {
      this.fetchUserData().then(() => {
        this.isLoading = false
      })
    }
  }
</script>

<style lang="scss">
  .root-users {
    &__user-list {
      background-color: white;
    }
  }
</style>
