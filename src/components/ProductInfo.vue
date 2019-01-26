<template>
  <section id="product-info">
    <h2>MODELLING UNTUK SEMUA ORANG</h2>
    <a href="#" class="product-list" v-for="(product, index) in productList" :key="index">
      <img :src="product.image">
      <h3>{{product.text}}</h3>
    </a>
  </section>
</template>

<script>
export default {
  name: 'ProductInfo',
  data () {
    return {
      productList: [
        { image: '/images/pevita.jpg', text: 'Telusuri' },
        { image: '/images/v-bts.jpg', text: 'Casting' },
        { image: '/images/jennie.jpg', text: 'Bookings' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#product-info {
  margin: auto;
  padding: 64px 0;
  width: 960px;

  h2 {
    font-size: 32px;
    margin-bottom: 36px;
    margin-top: 0;
    text-align: center;
  }
}

.product-list {
  display: inline-block;
  height: 300px;
  margin-right: 5%;
  position: relative;
  transition: all .3s ease-in-out;
  width: 30%;

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
