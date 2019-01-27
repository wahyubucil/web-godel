<template>
<header class="header">
  <div class="container">
    <div class="logo">
      <img src="@/assets/logo.png">
    </div>
    <nav v-if="isDesktopMenu" id="desktop-menu">
      <router-link
        :to="menu.url"
        v-for="(menu, index) in menuList"
        :key="index"
        :class="{ active: menu.url === $route.path }"
      >
        {{menu.name}}
      </router-link>
    </nav>
    <a v-else href="javascript:void(0)" @click="openMobileMenu" class="open-mobile-menu">&#9776;</a>
  </div>
  <MobileMenu
    v-if="!isDesktopMenu"
    :menu-list="menuList"
    :open="mobileMenuOpen"
    @close="closeMobileMenu" />
</header>
</template>

<script>
import MobileMenu from './MobileMenu.vue'

export default {
  name: 'Header',
  data () {
    return {
      menuList: [
        { name: 'Home', url: '/' },
        { name: 'Model', url: '/model' },
        { name: 'Casting', url: '#' },
        { name: 'Rankings', url: '#' },
        { name: 'Industry Members', url: '#' }
      ],
      mobileMenuOpen: false
    }
  },
  computed: {
    isDesktopMenu () {
      return window.innerWidth > 768
    }
  },
  components: {
    MobileMenu
  },
  methods: {
    openMobileMenu () {
      this.mobileMenuOpen = true
    },
    closeMobileMenu () {
      this.mobileMenuOpen = false
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  background: #ffffff;
  box-shadow: 1px 0px 5px rgba(0, 0, 0, .5);
  height: 70px;
  padding: 5px 0;
  position: fixed;
  width: 100%;
  z-index: 999;
}

.container {
  align-items: center;
  display: flex;
  height: 100%;
}

.logo {
  height: 100%;

  @media only screen and (max-width: 768px) {
    flex-grow: 1;
    order: 2;
    text-align: center;
  }

  img {
    display: inline-block;
    height: 100%;
  }
}

#desktop-menu {
  flex-grow: 1;
  text-align: right;

  a {
    color: $textColorPrimary;
    font-size: 18px;
    margin-right: 32px;
    text-decoration: none;
    transition: all .3s ease-in-out;

    &:hover, &.active {
      color: $colorPrimary;
    }

    &:last-child {
      margin-right: 0;
    }
  }
}

.open-mobile-menu {
  color: $colorPrimary;
  font-size: 32px;
  order: 1;
  text-decoration: none;
}
</style>
