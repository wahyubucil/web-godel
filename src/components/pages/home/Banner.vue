<template>
  <section id="banner">
    <parallax :speed-factor="0.3">
      <img src="@/assets/banner-photo.jpg">
    </parallax>
    <div class="banner-content">
      <h1>Famous Is Easy!</h1>
      <h2>Cara Mudah <i>Menjadi</i> dan <i>Mencari</i> Model</h2>
      <div class="button-content">
        <router-link :to="button.url" v-for="(button, index) in buttonText" :key="index">{{button.text}}</router-link>
      </div>
    </div>
  </section>
</template>

<script>
import Parallax from 'vue-parallaxy'

export default {
  name: 'Banner',
  data () {
    return {
      buttonText: [
        { url: '#', text: 'Saya Seorang Model' },
        { url: '/model', text: 'Saya Mencari Model' }
      ]
    }
  },
  components: {
    Parallax
  }
}
</script>

<style lang="scss" scoped>
#banner {
  height: calc(100vh - 70px);
  overflow: hidden;
  position: relative;
}

.banner-content {
  align-items: center;
  background: rgba($textColorPrimary, .7);
  color: #ffffff;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;

  h1 {
    font-size: 58px;
    margin: 0;
    text-transform: uppercase;
  }

  h2 {
    font-size: 24px;
    margin-top: 10px;
  }
}

.button-content {
  a {
    background: #af0404;
    color: #ffffff;
    display: inline-block;
    font-size: 18px;
    margin-right: 16px;
    padding: 15px 30px;
    text-decoration: none;
    text-transform: uppercase;
    transition: all .3s ease-in-out;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      background: $colorPrimary;
    }
  }
}
</style>
