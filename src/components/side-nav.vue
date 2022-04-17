<template>
  <div class="side-nav">
    <side-nav-header class="side-nav__header"/>
    <li-side-nav class="side-nav__menu-item"
                 v-for="item in $options.navMenus"
                 :key="item.id"
                 :text="item.label"/>
    <div class="side-nav__spacer"/>
    <div class="side-nav__logout"
         @click="doLogout">
      <i class="fa fa-sign-out" aria-hidden="true"></i>
      <div>Admin</div>
    </div>
  </div>
</template>

<script>
  import NavMenus from '@/references/nav-menus';
  import LiSideNav from '@/components/li-side-nav'
  import SideNavHeader from '@/components/side-nav-header'
  import Routes from '@/references/route-constants'

  export default {
    name: "side-nav",
    components: {LiSideNav, SideNavHeader},
    methods: {
      doLogout() {
        this.goToLoginPage()
      },
      goToLoginPage() {
        this.$router.push({
          name: Routes.ROUTE_LOGIN
        })
      }
    },
    navMenus: NavMenus
  }
</script>

<style lang="scss">
  .side-nav {
    background-color: #fbfbfb;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    height: 100vh;
    min-width: 30rem;
    position: fixed;
    left: 0;

    &__header {
      margin-bottom: 6rem;
    }

    &__menu-item {
      margin-bottom: 4rem;
    }

    &__spacer {
      flex: 1;
    }

    &__logout {
      display: flex;
      column-gap: 1rem;
      align-items: center;
      font-size: 2rem;
      cursor: pointer;
    }
  }
</style>
