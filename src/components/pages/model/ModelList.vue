<template>
  <section id="model-list">
    <div class="container">
      <div class="model-item" v-for="(model, index) in models" :key="index" @click="openDialog(model)">
        <img :src="model.image">
        <div class="text">
          <span>{{model.name}}</span>
          <span>{{model.age}} Tahun</span>
        </div>
      </div>
    </div>
    <Dialog v-show="showDialog" :model="selectedModel" @close="closeDialog" />
  </section>
</template>

<script>
import Dialog from './Dialog.vue'

export default {
  name: 'ModelList',
  data () {
    return {
      models: [
        { name: 'Jennie', age: 23, image: '/images/jennie.jpg', desc: 'Artis Korea yang berasal dari grup Blackpink ini juga memiliki passion terhadap dunia mode' },
        { name: 'Taehyung', age: 23, image: '/images/v-bts.jpg', desc: 'Anggota BTS ini memiliki daya tarik yang luar biasa sebagai model dan pastinya banyak menarik perhatian wanita' },
        { name: 'Pevita Pearce', age: 26, image: '/images/pevita.jpg', desc: 'Artis dari Indonesia yang sangat populer. Bahkan telah menjadi Brand Ambassador salah satu platform fashion' },
        { name: 'Dewayu', age: 19, image: '/images/dewayu.jpg', desc: 'Model favorit STMIK Primakara. Pengalamannya sebagai brand ambassador STMIK Primakara sudah tidak diragukan lagi' },
        { name: 'Twinda Rarasati', age: 25, image: '/images/twinda.png', desc: 'Presenter, model, artis dari Indonesia yang kembar ini merupakan influencer yang luar biasa' },
        { name: 'Kristina', age: 21, image: '/images/kristina.jpg', desc: 'Gaya kasual adalah yang terbaik menurutnya' },
        { name: 'Cahya', age: 20, image: '/images/cahya.jpg', desc: 'Modelling dan olahraga. Dua hobi favoritnya' },
        { name: 'Luhde', age: 22, image: '/images/luhde.jpg', desc: 'Sangat senang menjadi model Video Clip dengan konsep yang menarik' },
        { name: 'Nabila', age: 21, image: '/images/nabila.jpg', desc: 'Photoshoot sambil berpetualang, mengapa tidak?' },
        { name: 'Reni', age: 22, image: '/images/reni.jpg', desc: 'Sederhana namun elegan' },
        { name: 'Santhi', age: 19, image: '/images/santhi.jpg', desc: 'Musik dan Modelling, hal yang menyatukan jiwanya' },
        { name: 'Sinta', age: 20, image: '/images/sinta.jpg', desc: 'Muda, imut, enerjik, sesuatu langka yang dimilikinya' },
        { name: 'Vita', age: 21, image: '/images/vita.jpg', desc: 'Fashion dan modelling sudah menjadi bagian hidupnya' }
      ],
      showDialog: false,
      selectedModel: {}
    }
  },
  components: {
    Dialog
  },

  methods: {
    openDialog (model) {
      this.showDialog = true
      this.selectedModel = model
    },
    closeDialog () {
      this.showDialog = false
      this.selectedModel = {}
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
    box-shadow: 0 0 15px rgba(#000, .5);
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
