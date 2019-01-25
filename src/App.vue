<template>
  <div id="app">
    <Header />
    <div id="main"></div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style lang="scss">
@import './styles/normalize';

*, *::before, *::after {
  box-sizing: border-box;
}

#app {
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $textColorPrimary;
}

#main {
  padding-top: 70px;
}
</style>
