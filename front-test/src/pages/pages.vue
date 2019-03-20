<template>
  <div id="container">
    <div class="header">
      <h1>{{this.dados.customer.name}}</h1>
      <h3>ID do cliente {{this.dados.id}}</h3>
    </div>
    <div class="content">
      <div class="content-info">
        <app-info :dados="dados"/>
      </div>
      <div class="content-maps">

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

<style lang="scss" scoped src="../scss/pages.scss"></style>
