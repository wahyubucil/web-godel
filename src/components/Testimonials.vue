<template>
<section id="testimonials">
  <div class="container">
    <h2>Happy People</h2>
    <div class="testimonials">
      <div class="testimonial" v-for="(testimonial, index) in testimonials" :key="index">
        <img :src="testimonial.image">
        <p>{{testimonial.text}}</p>
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
        { image: '/images/testimoni1.jpg', name: 'Kristina', text: 'Godel merupakan teknologi terdepan dalam industri fashion. Bagi saya itu membuat perbedaan besar. Saya mengupgrade akun saya ke Premium untuk memiliki akses ke semua fitur! Godel sangatlah luar biasa!' },
        { image: '/images/testimoni2.jpg', name: 'Cahya', text: 'Godel adalah hal yang anda harus ketahui. Berkat casting online mereka, saya telah mengerjakan berbagai pemotretan untuk kampanye hebat! Tentunya platform terbaik untuk menemukan tempat Anda di dunia mode' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#testimonials {
  padding: 64px 0;
}

h2 {
  font-size: 36px;
  margin-top: 0;
  text-align: center;
  text-transform: uppercase;
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
  }

  .name {
    border-top: 1px solid #f1f1f1;
    font-weight: 700;
    padding-top: 16px;
  }
}
</style>
