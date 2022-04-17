<template>
  <div class="users-list">
    <div class="users-list__header">
      Users
    </div>

    <loading-indicator v-if="isLoading"/>
    <template v-else>
      <div class="users-list__users">
        <card-user v-for="user in users"
                   :key="user.id"
                   :user="user"/>
      </div>
    </template>
  </div>
</template>

<script>
  import CardUser from '@/components/card-user';
  import LoadingIndicator from '@/components/loading-indicator';

  export default {
    name: "users-list",
    components: {LoadingIndicator, CardUser},
    props: {
      users: {type: Array, default: () => []},
      isLoading: {type: Boolean, default: false}
    }
  }
</script>

<style lang="scss">
  .users-list {
    padding: 4rem;
    margin-left: 30rem;
    display: grid;
    grid-template-rows: auto 1fr;
    grid-row-gap: 4rem;
    min-height: 100vh;

    &__header {
      font-size: 6rem;
      font-weight: 800;
      text-decoration: underline;
      text-transform: uppercase;
      text-align: right;
    }

    &__users {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      column-gap: 10rem;
      row-gap: 5rem;
    }
  }
</style>

