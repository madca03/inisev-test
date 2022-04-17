<template>
  <div class="card-user"
       :style="computedStyles"
       @mouseover="toggleShowUserInfo(true)"
       @mouseleave="toggleShowUserInfo(false)"
       @mouseout="toggleShowUserInfo(false)">
    <div class="card-user__info"
         v-show="showUserInfo">
      <div class="card-user__info-name"
           v-if="hasUsername">
        {{ user.name }}
      </div>
      <div class="card-user__info-city"
           v-if="hasAddress">
        {{ user.address.city }}
      </div>
    </div>
  </div>
</template>

<script>
  import StringUtil from '@/util/string-util'

  export default {
    name: "card-user",
    props: {
      user: {type: Object, required: true}
    },
    data() {
      return {
        showUserInfo: false
      }
    },
    computed: {
      computedStyles() {
        return {backgroundImage: `url(${this.user.image})`}
      },
      hasUsername() {
        return !StringUtil.isNullOrEmpty(this.user.name)
      },
      hasAddress() {
        return !StringUtil.isNullOrEmpty(this.user.address?.city)
      }
    },
    methods: {
      toggleShowUserInfo(val) {
        this.showUserInfo = val
      }
    }
  }
</script>

<style lang="scss">
  .card-user {
    width: 25rem;
    height: 37rem;
    background-size: cover;
    border-radius: 2rem;
    cursor: pointer;

    &__info {
      color: white;
      display: flex;
      flex-direction: column;
      row-gap: 1rem;
      justify-content: center;
      align-items: center;
      text-align: center;
      z-index: 100;
      height: 100%;
      width: 100%;
      border-radius: 2rem;
      background-color: rgba(0, 0, 0, 0.5);
    }

    &__info-name {
      font-weight: 700;
      font-size: 3rem;
    }

    &__info-city {
      font-size: 2.3rem;
    }
  }
</style>
