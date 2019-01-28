<template>
  <footer id="footer">
    <div class="container">
      <div class="about">
        <h4>Apa itu Godel?</h4>
        <p>Godel merupakan sebuah startup yang bergerak dalam bidang jasa dimana jasa yang ditawarkan yaitu pencarian model untuk endorsment, model untuk sebuah video clip, dan segala jenis promosi yang membutuhkan seorang model. Disamping menjadi tempat pencarian model, Godel juga membuka peluang kerja untuk yang berminat menjadi model.</p>
      </div>
      <div class="footer-info">
        <div class="copyright">&copy; 2019 Godel</div>
        <div class="email">Contact us at: <a href="mailto:hello.godel@gmail.com"><b>hello.godel@gmail.com</b></a></div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
#footer {
  background: #f1f1f1;
  color: #999999;
  padding: 16px 0;
}

h4 {
  font-size: 14px;
}

p {
  font-size: 12px;
  line-height: 1.5;
}

.about {
  width: 70%;
}

.footer-info {
  border-top: 1px solid #e8e7e7;
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  padding-top: 24px;

  .copyright, .email {
    font-size: 12px;
  }

  .email a {
    color: #999999;
    text-decoration: none;
  }
}
</style>
