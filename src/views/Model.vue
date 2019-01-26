<template>
  <div id="model">
    <h1>CARI MODEL IDAMANMU</h1>
    <ModelList />
  </div>
</template>

<script>
import ModelList from '@/components/pages/model/ModelList.vue'

export default {
  name: 'Model',
  components: {
    ModelList
  }
}
</script>

<style lang="scss" scoped>
#model {
  padding: 32px 0;

  h1 {
    text-align: center;
  }
}
</style>
