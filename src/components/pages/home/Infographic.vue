<template>
  <section id="infographic">
    <div class="content">
      <div class="infographic" v-for="(infographic, index) in infographics" :key="index">
        <span>{{infographic.number}}</span>
        <span>{{infographic.name}}</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Infographic',
  data () {
    return {
      infographics: [
        { name: 'Model', number: '2702' },
        { name: 'Para profesional industri', number: '2019' },
        { name: 'Gambar', number: '2601' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#infographic {
  background: $textColorPrimary;
  padding: 24px 0;
  width: 100%;
}

.content {
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  margin: auto;
  max-width: 960px;

  @media only screen and (max-width: 1024px) {
    padding-left: 16px;
    padding-right: 16px;
  }
}

.infographic {
  text-align: center;

  span {
    display: block;

    &:first-child {
      font-weight: 700;
      font-size: 32px;
      margin-bottom: 6px;

      @media only screen and (max-width: 480px) {
        font-size: 24px;
      }

      @media only screen and (max-width: 375px) {
        font-size: 18px;
      }
    }

    &:last-child {
      @media only screen and (max-width: 375px) {
        font-size: 12px;
      }
    }
  }
}
</style>
