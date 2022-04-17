<template>
  <div class="root-users">
    <side-nav class="root-users__side-nav"/>
    <div class="root-users__user-list">
      <users-list :users="users"
                  :is-loading="isLoading"/>
      <modal-user
        v-if="sessionState.showModal"
        :user="sessionState.selectedUser"
        @close="closeModal"/>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import API from '@/references/api-endpoints'
  import SideNav from '@/components/side-nav';
  import UsersList from '@/components/users-list';
  import ModalUser from '@/components/modal-user'
  import {mapGetters} from 'vuex';
  import {GET_SESSION_STATE} from '@/store/types';

  export default {
    name: "root-users",
    components: {UsersList, SideNav, ModalUser},
    data() {
      return {
        users: [],
        isLoading: true
      }
    },
    computed: {
      ...mapGetters({
        sessionState: GET_SESSION_STATE
      })
    },
    methods: {
      closeModal() {
        this.$toggleUserModal(false)
      },
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
    display: grid;
    max-height: 100vh;
    grid-template-columns: 30rem 1fr;

    &__user-list {
      position: relative;
    }
  }
</style>
