<template>
<section id="testimonials">
  <div class="container">
    <h2>Happy People</h2>
    <div class="testimonials">
      <div class="testimonial" v-for="(testimonial, index) in testimonials" :key="index">
        <img :src="testimonial.image">
        <p>"{{testimonial.text}}"</p>
        <div class="name">{{testimonial.name}}</div>
      </div>
    </div>
  </div>
</section>
</template>

<script>

export default {
  name: 'Testimonials',
  data () {
    return {
      testimonials: [
        { image: '/images/dewayu.jpg', name: 'Dewayu', text: 'Saya merekomendasikan semua model untuk mendaftar casting online di Godel; itu hal terbaik yang terjadi dalam karier saya. Saya sangat senang bahwa platform ini telah memberi saya begitu banyak peluang!' },
        { image: '/images/indah-krisna-devi.jpg', name: 'Indah Krisna Devi', text: 'Godel merupakan teknologi terdepan dalam industri fashion. Bagi saya itu membuat perbedaan besar. Saya mengupgrade akun saya ke Premium untuk memiliki akses ke semua fitur! Godel sangatlah luar biasa!' },
        { image: '/images/ida-ayu-santhi.jpg', name: 'Ida Ayu Santhi', text: 'Godel adalah hal yang anda harus ketahui. Berkat casting online mereka, saya telah mengerjakan berbagai pemotretan untuk kampanye hebat! Tentunya platform terbaik untuk menemukan tempat Anda di dunia mode' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#testimonials {
  background: #F1F1F1;
  padding: 64px 0 96px 0;
}

h2 {
  font-size: 36px;
  margin-top: 8px;
  text-align: center;
  text-transform: uppercase;

  @media only screen and (max-width: 375px) {
    font-size: 32px;
  }
}

.testimonials {
  margin-top: 48px;
}

.testimonial {
  display: inline-block;
  margin-right: 5%;
  text-align: center;
  vertical-align: top;
  width: 30%;

  @media only screen and (max-width: 640px) {
    margin-right: 0;
    margin-bottom: 56px;
    width: 100%;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &:last-child {
    margin-right: 0;
  }

  img {
    border-radius: 50%;
    height: 125px;
    object-fit: cover;
    width: 125px;
  }

  p {
    font-size: 18px;
    font-style: italic;
    line-height: 1.5;

    @media only screen and (max-width: 375px) {
      font-size: 16px;
    }
  }

  .name {
    border-top: 1px solid #ABABAB;
    font-weight: 700;
    padding-top: 16px;
  }
}
</style>
