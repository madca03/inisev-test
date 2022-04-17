<template>
  <div class="li-side-nav">
    {{ text }}
  </div>
</template>

<script>
  export default {
    name: "li-side-nav",
    props: {
      text: {type: String, required: true}
    }
  }
</script>

<style lang="scss">
  .li-side-nav {
    padding-top: 1rem;
    padding-bottom: 1rem;
    text-transform: uppercase;
    text-align: center;
    font-size: 3rem;
    font-weight: 800;
    cursor: pointer;

    border-top: 2px solid black;
    border-bottom: 2px solid black;

    &:hover {
      background-color: darken(#fbfbfb, 50%);
    }
  }
</style>
