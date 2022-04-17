<template>
  <div class="loading-indicator">
    Loading...
  </div>
</template>

<script>
  export default {
    name: "loading-indicator"
  }
</script>

<style lang="scss">
  .loading-indicator {
    text-transform: uppercase;
    width: 100%;
    height: 100%;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
  }
</style>
