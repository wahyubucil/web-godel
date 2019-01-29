<template>
  <div id="home">
    <Banner />
    <ProductInfo />
    <Testimonials />
    <SocialMedia />
  </div>
</template>

<script>
import Banner from '@/components/pages/home/Banner.vue'
import ProductInfo from '@/components/pages/home/ProductInfo.vue'
import Testimonials from '@/components/pages/home/Testimonials.vue'
import SocialMedia from '@/components/pages/home/SocialMedia.vue'

export default {
  name: 'Home',
  components: {
    Banner,
    ProductInfo,
    Testimonials,
    SocialMedia
  }
}
</script>

<style lang="scss" scoped>

</style>
