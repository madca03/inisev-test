<template>
  <div class="li-user-info">
    <div class="li-user-info__icon">
      <i class="fa" :class="icon"/>
    </div>
    <div class="li-user-info__text">
      {{ info }}
    </div>
  </div>
</template>

<script>
  export default {
    name: "li-user-info",
    props: {
      info: {type: String, required: true},
      icon: {type: String, required: true}
    }
  }
</script>

<style lang="scss">
  .li-user-info {
    display: flex;
    column-gap: 2rem;
    align-items: center;
    font-size: 4rem;
    font-weight: 700;

    &__icon {
      border: 2px solid black;
      padding: 1rem;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__text {
      word-break: break-all;
    }
  }

  @media (max-width: 1024px) {
    .li-user-info {
      font-size: 3rem;
    }
  }
</style>
