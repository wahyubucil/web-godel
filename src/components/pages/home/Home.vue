<template>
  <div id="home">
    <Banner />
    <ProductInfo />
    <Trusted />
    <Testimonials />
    <SocialMedia />
    <Infographic />
  </div>
</template>

<script>
import Banner from './Banner.vue'
import ProductInfo from './ProductInfo.vue'
import Trusted from './Trusted.vue'
import Testimonials from './Testimonials.vue'
import SocialMedia from './SocialMedia.vue'
import Infographic from './Infographic.vue'

export default {
  name: 'Home',
  components: {
    Banner,
    ProductInfo,
    Trusted,
    Testimonials,
    SocialMedia,
    Infographic
  }
}
</script>

<style lang="scss" scoped>

</style>
