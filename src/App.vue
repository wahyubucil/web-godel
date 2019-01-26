<template>
  <div id="app">
    <Header />
    <main id="main">
      <Home />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

import Home from '@/components/pages/home/Home.vue'

export default {
  name: 'app',
  components: {
    Header,
    Footer,
    Home
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

.container {
  margin: auto;
  max-width: 1280px;
}

#main {
  padding-top: 70px;
}
</style>
