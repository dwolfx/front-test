<template>
  <div id="container" :dados="dados">
    <div class="header">
      <h1>{{this.dados.customer.name}}</h1>
      <h3>ID do cliente {{this.dados.id}}</h3>
    </div>
    <div class="content">
      <div class="infos">
        <app-info :dados="dados"/>
      </div>
      <div class="maps">

      </div>
    </div>
  </div>
</template>

<script>
import infoGeral from './../services/data'
import appInfo from './../components/infos'
// import appMap from './../components/map'

export default {
  mounted(){
    infoGeral.listar().then(resposta => {
      this.dados = resposta.data
    });
  },
  data() {
    return {
      dados: [],
    }
  },
  components: {
    appInfo,
    // appMap
  },
}
</script>

<style lang="scss" src="../scss/pages.scss"></style>
