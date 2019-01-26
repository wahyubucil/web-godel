<template>
  <div id="app">
    <Header />
    <main id="main">
      <Banner />
      <ProductInfo />
      <Trusted />
      <Testimonials />
      <SocialMedia />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Banner from '@/components/Banner.vue'
import ProductInfo from '@/components/ProductInfo.vue'
import Trusted from '@/components/Trusted.vue'
import Testimonials from '@/components/Testimonials.vue'
import SocialMedia from '@/components/SocialMedia.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    Banner,
    ProductInfo,
    Trusted,
    Testimonials,
    SocialMedia,
    Footer
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
