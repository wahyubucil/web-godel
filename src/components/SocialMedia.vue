<template>
  <section id="social-media">
    <div class="content">
      <h2>Connect Socially With Us</h2>
      <a
        href="#"
        v-for="(socialMedia, index) in socialMediaList"
        :key="index"
        :style="{ backgroundImage: 'url(' + socialMedia.icon + ')', backgroundColor: socialMedia.background }">
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SocialMedia',
  data () {
    return {
      socialMediaList: [
        { icon: '/images/icons/facebook.svg', background: '#7281af' },
        { icon: '/images/icons/twitter.svg', background: '#67bee5' },
        { icon: '/images/icons/instagram.svg', background: '#688cb3' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#social-media {
  background: url('../assets/photoshoot.jpg') no-repeat center fixed;
  background-size: cover;
  margin-top: 32px;
  padding: 64px 0;
  position: relative;

  &::after {
    background: rgba($textColorPrimary, .5);
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
}

.content {
  position: relative;
  text-align: center;
  z-index: 1;

  h2 {
    color: #ffffff;
    font-size: 32px;
    text-transform: uppercase;
  }

  a {
    background-repeat: no-repeat;
    background-position: center;
    background-size: 32px;
    display: inline-block;
    height: 56px;
    margin-right: 24px;
    transition: all .3s ease-in-out;
    width: 56px;

    &:hover {
      opacity: .8;
    }

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
