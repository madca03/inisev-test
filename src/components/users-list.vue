<template>
  <div class="users-list">
    <div class="users-list__header">
      Users
    </div>
    <div class="users-list__users">
      <card-user v-for="user in users"
                 :key="user.id"
                 :user="user"/>
    </div>
  </div>
</template>

<script>
  import CardUser from '@/components/card-user';

  export default {
    name: "users-list",
    components: {CardUser},
    props: {
      users: {type: Array, default: () => []}
    }
  }
</script>

<style lang="scss">
  .users-list {
    padding: 4rem;
    margin-left: 30rem;

    &__header {
      font-size: 6rem;
      font-weight: 800;
      text-decoration: underline;
      text-transform: uppercase;
      text-align: right;
      margin-bottom: 4rem;
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

