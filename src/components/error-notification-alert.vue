<template>
  <div class="error-notification-alert">
    <div>
      {{ text }}
    </div>
  </div>
</template>

<script>
  export default {
    name: "error-notification-alert",
    props: {
      text: {type: String, required: true}
    }
  }
</script>

<style lang="scss">
  .error-notification-alert {
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: center;
    top: 1rem;

    & > div {
      width: 50rem;
      font-size: 2rem;
      background-color: #d92c2c;
      color: white;
      text-align: center;
      border-radius: 0.3rem;
      padding: 0.5rem;
    }
  }
</style>
