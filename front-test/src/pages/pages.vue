<template>
  <div id="container" :dados="dados">
    <h1>{{this.dados.customer.name}}</h1>
    <p>ID do cliente {{this.dados.id}}</p>
    <app-info :dados="dados"/>
  </div>
</template>

<script>
import infoGeral from './../services/data'
import appInfo from './../components/infos'

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
    appInfo
  },
}
</script>

<style lang="scss">
  
</style>
