<template>
  <section id="product-info">
    <h2>MODELLING UNTUK SEMUA ORANG</h2>
    <router-link :to="product.url" class="product-list" v-for="(product, index) in productList" :key="index">
      <img :src="product.image">
      <h3>{{product.text}}</h3>
    </router-link>
  </section>
</template>

<script>
export default {
  name: 'ProductInfo',
  data () {
    return {
      productList: [
        { image: '/images/pevita.jpg', text: 'Telusuri', url: '/model' },
        { image: '/images/v-bts.jpg', text: 'Casting', url: '#' },
        { image: '/images/jennie.jpg', text: 'Bookings', url: '#' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#product-info {
  margin: auto;
  max-width: 960px;
  padding: 64px 0;

  @media only screen and (max-width: 1024px) {
    padding-left: 16px;
    padding-right: 16px;
  }

  h2 {
    font-size: 32px;
    margin-bottom: 36px;
    margin-top: 0;
    text-align: center;

    @media only screen and (max-width: 600px) {
      font-size: 24px;
    }
  }
}

.product-list {
  display: inline-block;
  height: 300px;
  margin-right: 5%;
  position: relative;
  transition: all .3s ease-in-out;
  width: 30%;

  @media only screen and (max-width: 640px) {
    margin-bottom: 24px;
    margin-right: 0;
    width: 100%;
  }

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    box-shadow: 0px 0px 20px 2px rgba(#000000, .5);
  }

  img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

  h3 {
    align-items: center;
    background: rgba($textColorPrimary, .45);
    color: #ffffff;
    display: flex;
    font-size: 24px;
    height: 100%;
    justify-content: center;
    left: 0;
    margin: 0;
    position: absolute;
    top: 0;
    text-decoration: none;
    text-align: center;
    width: 100%;
  }
}
</style>
