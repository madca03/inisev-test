<template>
  <input class="login-input"
         :type="type"
         :value="value"
         @input="handleInput"
         :placeholder="placeholder"/>
</template>

<script>
  export default {
    name: "login-input",
    props: {
      value: {type: String, required: true},
      placeholder: {type: String, default: 'input'},
      type: {type: String, default: 'text'}
    },
    methods: {
      handleInput(e) {
        console.log(e)
        // this.$emit('input', e)
      }
    }
  }
</script>

<style lang="scss">
  .login-input {
    input.login-input {
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
