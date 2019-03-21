<template>
  <div class="comp-status">
    <div class="title">
        <i class="material-icons">timeline</i> 
        <h3>Status</h3> 
      </div>
    <div class="content">
      <div class="status">
        <div class="statusTitle">
          <i class="material-icons" v-if="this.dados.status_history[3]">check_circle</i>
          <div class="circle" :class="[{'active' : this.dados.status_history[2]}]"></div>
          <h2>Agendado</h2>
        </div>
        <div class="arrow" :class="[{'active': this.dados.status_history[3], 'completed': this.dados.status_history[4] }]"></div>
        <div class="statusText" v-if="this.dados.status_history[2]">
          <p>{{timeConvert(this.dados.status_history[2].at) }}</p>
        </div>
      </div>

      <div class="status">
        <div class="statusTitle">
          <i class="material-icons" v-if="this.dados.status_history[4]">check_circle</i>
          <div class="circle" :class="[{'active' : this.dados.status_history[3]}]"></div>
          <h2>Indo Coletar</h2>
        </div>
        <div class="arrow" :class="[{'active': this.dados.status_history[4], 'completed': this.dados.status_history[5] }]"></div>
        <div class="statusText" v-if="this.dados.status_history[3]">
          <p>{{timeConvert(this.dados.status_history[3].at) }}</p>
        </div>
      </div>

      <div class="status">
        <div class="statusTitle">
          <i class="material-icons" v-if="this.dados.status_history[5]">check_circle</i>
          <div class="circle" :class="[{'active' : this.dados.status_history[4]}]"></div>
          <h2>Fila coleta</h2>
        </div>
        <div class="arrow" :class="[{'active': this.dados.status_history[5], 'completed': this.dados.status_history[6] }]"></div>
        <div class="statusText" v-if="this.dados.status_history[4]">
          <p>{{timeConvert(this.dados.status_history[4].at) }}</p>
        </div>
      </div>

      <div class="status">
        <div class="statusTitle">
          <i class="material-icons" v-if="this.dados.status_history[6]">check_circle</i>
          <div class="circle" :class="[{'active' : this.dados.status_history[5]}]"></div>
          <h2>Carregando</h2>
        </div>
        <div class="arrow" :class="[{'active': this.dados.status_history[6], 'completed': this.dados.status_history[7] }]"></div>
        <div class="statusText" v-if="this.dados.status_history[5]">
          <p>{{timeConvert(this.dados.status_history[5].at) }}</p>
        </div>
      </div>

      <div class="status">
        <div class="statusTitle">
          <i class="material-icons" v-if="this.dados.status_history[7]">check_circle</i>
          <div class="circle" :class="[{'active' : this.dados.status_history[6]}]"></div>
          <h2>Em Trânsito</h2>
        </div>
        <div class="arrow" :class="[{'active': this.dados.status_history[7], 'completed': this.dados.status_history[8] }]"></div>
        <div class="statusText" v-if="this.dados.status_history[6]">
          <p>{{timeConvert(this.dados.status_history[6].at) }}</p>
        </div>
      </div>

      <div class="status">
        <div class="statusTitle">
          <i class="material-icons" v-if="this.dados.status_history[8]">check_circle</i>
          <div class="circle" :class="[{'active' : this.dados.status_history[7]}]"></div>
          <h2>Fila Descarga</h2>
        </div>
        <div class="arrow" :class="[{'active': this.dados.status_history[8], 'completed': this.dados.status_history[9] }]"></div>
        <div class="statusText" v-if="this.dados.status_history[7]">
          <p>{{timeConvert(this.dados.status_history[7].at) }}</p>
        </div>
      </div>
      
      <div class="status">
        <div class="statusTitle">
          <i class="material-icons" v-if="this.dados.status_history[9]">check_circle</i>
          <div class="circle" :class="[{'active' : this.dados.status_history[8]}]"></div>
          <h2>Descarregando</h2>
        </div>
        <div class="arrow" :class="[{'active': this.dados.status_history[9], 'completed': this.dados.status_history[10] }]"></div>
        <div class="statusText" v-if="this.dados.status_history[8]">
          <p>{{timeConvert(this.dados.status_history[8].at) }}</p>
        </div>
      </div>

      <div class="status">
        <div class="statusTitle">
          <i class="material-icons" v-if="this.dados.status_history[10]">check_circle</i>
          <div class="circle" :class="[{'active' : this.dados.status_history[9]}]"></div>
          <h2>Entregue</h2>
        </div>
        <div class="statusText" v-if="this.dados.status_history[9]">
          <p>{{timeConvert(this.dados.status_history[9].at) }}</p>
        </div>
      </div>
    </div>    
  </div>
</template>

<script>
export default {
  props: {
    dados: []
  },
  methods: {
    timeConvert(timestamp) {
      if(timestamp) {
        var a = new Date(timestamp * 1000);
        var months = ['01','02','03','04','05','06','07','08','09','10','11','12'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        if(hour < 10){
          hour = '0'+hour
        }
        if(min < 10){
          min = '0'+min
        }
        if(sec < 10){
          sec = '0'+sec
        }
        var time = date + '/' + month + '/' + year + ' ' + hour + ':' + min;
        return time;
      } else {
        return 'Sem Data'
      }
    },
  }
}
</script>

<style scoped lang="scss" src="../scss/status.scss">

</style>