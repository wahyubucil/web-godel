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
import Banner from '@/components/pages/home/Banner.vue'
import ProductInfo from '@/components/pages/home/ProductInfo.vue'
import Trusted from '@/components/pages/home/Trusted.vue'
import Testimonials from '@/components/pages/home/Testimonials.vue'
import SocialMedia from '@/components/pages/home/SocialMedia.vue'
import Infographic from '@/components/pages/home/Infographic.vue'

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
