<template>
  <div id="app">
    <Header />
    <main id="main">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
@import './styles/normalize';
@import '~nprogress/nprogress.css';

*, *::before, *::after {
  box-sizing: border-box;
}

#app {
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $textColorPrimary;
}

#nprogress .bar {
  background: $colorPrimary;
}

#nprogress .spinner-icon {
  border-top-color: $colorPrimary;
  border-left-color: $colorPrimary;
}

.container {
  margin: auto;
  max-width: 1280px;

  @media only screen and (max-width: 1300px) {
    padding: 0 16px;
  }
}

#main {
  padding-top: 70px;
}
</style>
