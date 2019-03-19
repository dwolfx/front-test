<template>
  <div id="container" :dados="dados">
    <p>{{this.dados.customer_tracking_number}}</p>
    <comp1 :dados="dados"/>
  </div>
</template>

<script>
import infoGeral from './../services/infos'
import comp1 from './../components/geral'

export default {
  mounted(){
    infoGeral.listar().then(resposta => {
      this.dados = resposta.data
    });
  },
  data() {
    return {
      dados: []
    }
  },
  components: {
    comp1
  },
}
</script>

<style lang="scss">
  
</style>
