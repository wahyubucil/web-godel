<template>
  <section id="model-list">
    <div class="container">
      <div class="model-item" v-for="(model, index) in models" :key="index">
        <img :src="model.image">
        <div class="text">
          <span>{{model.name}}</span>
          <span>{{model.age}} Tahun</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ModelList',
  data () {
    return {
      models: [
        { name: 'Jennie', age: 23, image: '/images/jennie.jpg' },
        { name: 'Taehyung', age: 23, image: '/images/v-bts.jpg' },
        { name: 'Pevita Pearce', age: 26, image: '/images/pevita.jpg' },
        { name: 'Dewayu', age: 19, image: '/images/dewayu.jpg' },
        { name: 'Twinda Rarasati', age: 25, image: '/images/twinda.png' },
        { name: 'Kristina', age: 21, image: '/images/kristina.jpg' },
        { name: 'Cahya', age: 20, image: '/images/cahya.jpg' },
        { name: 'Luhde', age: 22, image: '/images/luhde.jpg' },
        { name: 'Nabila', age: 21, image: '/images/nabila.jpg' },
        { name: 'Reni', age: 22, image: '/images/reni.jpg' },
        { name: 'Santhi', age: 19, image: '/images/santhi.jpg' },
        { name: 'Sinta', age: 20, image: '/images/sinta.jpg' },
        { name: 'Vita', age: 21, image: '/images/vita.jpg' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

#model-list {
  margin-top: 42px;
}

.model-item {
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 0 5px rgba(#000, .5);
  cursor: pointer;
  display: inline-block;
  margin-bottom: 32px;
  margin-right: 4%;
  overflow: hidden;
  text-align: center;
  transition: all .3s ease-in-out;
  width: 22%;

  &:nth-child(4n) {
    margin-right: 0;
  }

  &:hover {
    box-shadow: 0 0 10px rgba(#000, .5);
  }

  img {
    height: 300px;
    object-fit: cover;
    width: 100%;
  }

  .text {
    margin: 12px 0;
    span {
      display: block;
    }

    span:first-child {
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 5px;
    }

    span:last-child {
      font-size: 14px;
    }
  }
}
</style>
