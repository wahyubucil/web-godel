<template>
  <section id="trusted">
    <h2>Trusted By</h2>
    <div class="brands"></div>
  </section>
</template>

<script>
export default {
  name: 'Trusted'
}
</script>

<style lang="scss" scoped>
#trusted {
  background: #F1F1F1;
  padding: 32px 0;
  width: 100%;
}

h2 {
  color: #ABABAB;
  font-weight: 400;
  margin: 0;
  text-align: center;
  text-transform: uppercase;
}

.brands {
  background: url('../assets/trust.gif') no-repeat center;
  height: 52px;
  margin-top: 32px;
  width: 100%;
}
</style>
