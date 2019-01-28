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
        { name: 'Indah Krisna Devi', age: 20, image: '/images/indah-krisna-devi.jpg', desc: 'Gaya kasual adalah yang terbaik menurutnya' },
        { name: 'Ida Ayu Santhi', age: 20, image: '/images/ida-ayu-santhi.jpg', desc: 'Sangat senang menjadi model Video Clip dengan konsep yang menarik' },
        { name: 'Victor', age: 20, image: '/images/victor.jpg', desc: 'Photoshoot sambil berpetualang, mengapa tidak?' },
        { name: 'Ida Ayu Aprilia', age: 20, image: '/images/ida-ayu-aprilia.jpg', desc: 'Sederhana namun elegan' },
        { name: 'Nitya Wirasari', age: 20, image: '/images/nitya-wirasari.jpg', desc: 'Musik dan Modelling, hal yang menyatukan jiwanya' }
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

@media only screen and (max-width: 1024px) {
  .container {
    max-width: 860px;
  }
}

@media only screen and (max-width: 640px) {
  .container {
    max-width: 480px;
  }
}

@media only screen and (max-width: 420px) {
  .container {
    max-width: 100%;
  }
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

  @media only screen and (min-width: 1025px) {
    &:nth-child(4n) {
      margin-right: 0;
    }
  }

  &:hover {
    box-shadow: 0 0 15px rgba(#000, .5);
  }

  @media only screen and (min-width: 641px) and (max-width: 1024px) {
    margin-right: 5%;
    width: 30%;

    &:nth-child(3n) {
      margin-right: 0;
    }
  }

  @media only screen and (min-width: 421px) and (max-width: 640px) {
    margin-right: 4%;
    width: 48%;

    &:nth-child(2n) {
      margin-right: 0;
    }
  }

  @media only screen and (max-width: 420px) {
    margin-right: 0;
    width: 100%;
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
