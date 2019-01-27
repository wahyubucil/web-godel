<template>
  <div id="mobile-menu" :class="{ active: open }">
    <nav>
      <router-link
        :to="menu.url"
        v-for="(menu, index) in menuList"
        :key="index"
        :class="{ active: menu.url === $route.path }"
        @click.native="closeMenu"
      >
        {{menu.name}}
      </router-link>
    </nav>
    <div class="close-menu" @click="closeMenu">&times;</div>
  </div>
</template>

<script>
export default {
  name: 'MobileMenu',
  props: {
    menuList: Array,
    open: Boolean
  },
  methods: {
    closeMenu () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
#mobile-menu {
  background: $textColorPrimary;
  height: 100vh;
  left: -50vw;
  position: absolute;
  padding-top: 48px;
  top: 0;
  transition: left .3s ease-in-out;
  width: 50vw;
  will-change: left;

  @media only screen and (max-width: 375px) {
    left: -70vw;
    width: 70vw;
  }

  &.active {
    left: 0;
  }
}

nav {
  a {
    color: #ffffff;
    display: block;
    padding: 16px;
    text-decoration: none;

    &.active {
      background: #ffffff;
      color: $colorPrimary;
    }
  }
}

.close-menu {
  color: #ffffff;
  cursor: pointer;
  font-size: 32px;
  position: absolute;
  top: 4px;
  right: 16px;
}
</style>
