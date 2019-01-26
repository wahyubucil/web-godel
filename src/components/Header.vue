<template>
<header class="header">
  <div class="container">
    <img src="@/assets/logo.png" class="logo">
    <nav id="desktop-menu">
      <a
        href="#"
        v-for="(menu, index) in menuList"
        :key="index"
        :class="{ active: menu === activeMenu }"
      >
        {{menu}}
      </a>
    </nav>
  </div>
</header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      menuList: ['Home', 'Model', 'Casting', 'Rankings', 'Industry Members'],
      activeMenu: 'Home'
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
  margin: auto;
  max-width: 1280px;
}

.logo {
  display: inline-block;
  height: 100%;
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
</style>
