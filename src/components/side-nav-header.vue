<template>
  <div class="side-nav-header">
    <img class="side-nav-header__logo"
         :src="$options.logoUrl"
         alt="logo"
         v-for="i in 3"
         :key="i"/>
    <div>logoipsum</div>
  </div>
</template>

<script>
  export default {
    name: "side-nav-header",
    logoUrl: 'https://w7.pngwing.com/pngs/402/203/png-transparent-picasa-encapsulated-postscript-logo-random-icons-miscellaneous-angle-text.png'
  }
</script>

<style lang="scss">
  .side-nav-header {
    font-weight: 800;
    font-size: 1.5rem;
    cursor: pointer;

    &__logo {
      width: 2rem;
    }
  }
</style>
