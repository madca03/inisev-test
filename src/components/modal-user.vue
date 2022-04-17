<template>
  <div class="modal-user"
       @click="doCloseModal">
    <div class="modal-user__content"
         @click.stop>
      <div class="modal-user__close"
           @click="doCloseModal">
        <i class="fa fa-times"/>
      </div>
      <div class="modal-user__image"
           :style="computedStyles"/>
      <div class="modal-user__info">
        <li-user-info icon="fa-user" :info="user.name"/>
        <li-user-info @click.native="doSendEmail"
                      class="modal-user__email"
                      icon="fa-envelope"
                      :info="user.email"/>
        <li-user-info icon="fa-phone" :info="user.phone"/>
        <li-user-info icon="fa-home" :info="userAddress"/>
        <li-user-info icon="fa-globe" :info="user.website"/>
      </div>
    </div>
  </div>
</template>

<script>
  import LiUserInfo from '@/components/li-user-info';
  import StringUtil from '@/util/string-util'

  export default {
    name: "modal-user",
    components: {LiUserInfo},
    props: {
      user: {type: Object, required: true}
    },
    computed: {
      computedStyles() {
        return {backgroundImage: `url(${this.user.image})`}
      },
      userAddress() {
        const sb = []
        if (!StringUtil.isNullOrEmpty(this.user.address?.city)) sb.push(this.user.address.city)
        if (!StringUtil.isNullOrEmpty(this.user.address?.street)) sb.push(this.user.address.street)
        return sb.join(', ')
      }
    },
    methods: {
      doCloseModal() {
        this.$emit('close')
      },
      doSendEmail() {
        let subject = "We are hiring!"
        let message = `Hello ${this.user.name}. We'd like to propose you an offer.`
        let href = `mailto:${this.user.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`

        window.location.href = href
      }
    }
  }
</script>

<style lang="scss">
  .modal-user {
    position: absolute;
    top: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    &__email {
      cursor: pointer;
    }

    &__close {
      position: absolute;
      top: 3rem;
      right: 4rem;
      font-size: 4rem;
      cursor: pointer;
    }

    &__content {
      width: 70%;
      height: 60%;
      display: grid;
      grid-template-columns: 30% 1fr;
      background-color: white;
      border-radius: 1rem;
      position: relative;
    }

    &__image {
      background-size: cover;
      background-position: center;
      border-top-right-radius: 1rem;
      border-bottom-right-radius: 1rem;
    }

    &__info {
      padding: 5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      row-gap: 3rem;
    }
  }
</style>
