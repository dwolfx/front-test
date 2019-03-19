<template>
  <div class="infos">
    <h1>{{ this.dados.customer.id }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    dados: []
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
