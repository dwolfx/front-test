<template>
  <div class="maps">
    <iframe :src="src()" frameborder="0"></iframe>
    <div class="lastActualization">
      <p>Última Atualização: {{this.dados.trucker.last_app_update_at}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dados: []
  },
  data() {
    return{
      urlMap: "https://www.google.com/maps/embed/v1/directions?key=AIzaSyAHMpBqO0VLDlgNd9fDsp4T36hRk-xpvc8",
      origin: [this.dados.origin.latitude, this.dados.origin.longitude],
      destination: [this.dados.destination.latitude, this.dados.destination.longitude]
    }
  },
  methods:{
    src() {
      return "https://www.google.com/maps/embed/v1/directions?key=AIzaSyAHMpBqO0VLDlgNd9fDsp4T36hRk-xpvc8&origin=" + this.origin + "&destination=" + this.destination;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="../scss/maps.scss">

</style>
