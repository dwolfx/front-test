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
        <app-map :dados="dados" />
      </div>
    </div>
  </div>
</template>

<script>
// import infoGeral from './../services/config'
import appInfo from './../components/infos'
import appMap from './../components/map'

export default {
  created() {
    this.$dataApi('5c7552e43100009c20c23450.json').then(res => {
      this.dados = res.data
    })
  },
  data() {
    return {
      dados: []
    }
  },
  components: {
    appInfo,
    appMap
  },
}
</script>

<style lang="scss" scoped src="../scss/pages.scss"></style>
