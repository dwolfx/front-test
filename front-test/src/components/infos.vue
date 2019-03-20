<template>
  <div class="infos">

    <div class="item">
      <div class="title">
        <i class="material-icons">assessment</i> 
        <h3>ID do frete CargoX</h3> 
      </div>
      <div class="content">
        <p>{{ this.dados.customer.id }}</p>
      </div>
    </div>

    <div class="item">
      <div class="title">
        <i class="material-icons">assignment</i> 
        <h3>Nº de pedido do cliente</h3> 
      </div>
      <div class="content">
        <p>{{ this.dados.customer_tracking_number }}</p>
      </div>
    </div>

    <div class="item">
      <div class="title">
        <i class="material-icons">assignment_ind</i> 
        <h3>Motorista</h3> 
      </div>
      <div class="content">
        <p style="text-transform: uppercase">{{ this.dados.trucker.name | nameFix }}</p>
      </div>
    </div>

    <div class="item">
      <div class="title">
        <i class="material-icons">phone</i> 
        <h3>Telefone</h3> 
      </div>
      <div class="content">
        <p>{{ this.dados.trucker.phone | phoneFix }}</p>
      </div>
    </div>

    <div class="item" v-if="this.dados.trucker.has_app">
      <div class="title">
        <i class="material-icons">mobile_friendly</i>
        <h3>Aplicativo</h3> 
      </div>
      <div class="content">
        <ul>
          <li v-if="this.dados.trucker.last_app_open_at">
            Acesso {{ dataFix(this.dados.trucker.last_app_open_at) }}
          </li>
          <li v-if="this.dados.trucker.trackable_app_status">
            GPS atualizado {{converterDate(this.dados.trucker.last_app_position_at)}}
          </li>
          <li>
            Primeiro acesso em {{this.dados.trucker.first_login_at}}
          </li>
          <li>
            Versão {{this.dados.trucker.app_version}}
          </li>
        </ul>
      </div>
    </div>

    <div class="item">
      <div class="title">
        <i class="material-icons">local_shipping</i> 
        <h3>Veículo</h3> 
      </div>
      <div class="content">
        <p v-for="(item, index) in this.dados.trucks" :key="index">
          {{ item.type.name }} - {{ item.plate }}
        </p>
      </div>
    </div>

    <div class="item">
      <div class="title">
        <i class="material-icons">place</i> 
        <h3>Origem</h3> 
      </div>
      <div class="content">
        <p>
          {{this.dados.origin.address}}, {{this.dados.origin.number}}
        </p>
        <p>
          {{this.dados.origin.city}} - {{this.dados.origin.state}} - CEP: {{this.dados.origin.zip_code}}
        </p>
      </div>
    </div>

    <div class="item">
      <div class="title">
        <i class="material-icons">flag</i> 
        <h3>Destino</h3> 
      </div>
      <div class="content">
        <p>
          {{this.dados.destination.address}}, {{this.dados.destination.number}}
        </p>
        <p>
          {{this.dados.destination.city}} - {{this.dados.destination.state}} - CEP: {{this.dados.destination.zip_code}}
        </p>
      </div>
    </div>

    <div class="item">
      <div class="title">
        <i class="material-icons">account_box</i> 
        <h3>Operação</h3> 
      </div>
      <div class="content">
        <p>{{ this.dados.trucker_seeker.name }}</p>
      </div>
    </div>

    <div class="item">
      <div class="title">
        <i class="material-icons">account_circle</i> 
        <h3>Venda</h3> 
      </div>
      <div class="content">
        <p>{{ this.dados.salesperson.name }}</p>
      </div>
    </div>

    <div class="item">
      <div class="title">
        <i class="material-icons">event_note</i> 
        <h3>Coleta agendada</h3> 
      </div>
      <div class="content">
        <p>{{ this.dados.pickup_date }}</p>
      </div>

      <div class="title">
        <h3>Entrega agendada</h3> 
        <i class="material-icons">help</i> 
      </div>
      <div class="content">
        <p>{{ timeConvert(this.dados.delivery_date) }}</p>
      </div>

      <div class="title">
        <h3>Entrega calculada</h3> 
        <i class="material-icons">help</i> 
      </div>
      <div class="content">
        <p>{{ timeConvert(this.dados.delivery_date) }}</p>
      </div>

      <div class="title">
        <h3>Entrega manual</h3> 
        <i class="material-icons">help</i> 
      </div>
      <div class="content">
        <p>{{ timeConvert(this.dados.manual_input_estimated_time_of_arrival) }}</p>
      </div>
    </div>

    <div class="item">
      <div class="title">
        <i class="material-icons">file_copy</i> 
        <h3>Documentos</h3> 
      </div>
      <div class="content">
        <button :disabled="!this.dados.documents[0].status">CTe</button>
        <button :disabled="!this.dados.documents[1].status">MDFe</button>
        <button :disabled="!this.dados.documents[2].status">Contrato</button>
        <button :disabled="!this.dados.documents[3].status">CIOT</button>
      </div>
    </div>

    <div class="item">
      <div class="title">
        <i class="material-icons">monetization_on</i> 
        <h3>Pagamentos</h3> 
      </div>
      <div class="content">
        <button :disabled="this.dados.payments[0].status == 'not_ok' ">Adiantamento</button>
        <button :disabled="this.dados.payments[1].status == 'not_ok' ">Canhoto</button>
        <button :disabled="this.dados.payments[2].status == 'not_ok' ">Saldo</button>
      </div>
    </div>

    <div class="item">
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
          <div class="statusText" v-if="this.dados.status_history[2].at">
            <p>{{timeConvert(this.dados.status_history[2].at) }}</p>
          </div>
        </div>
        <div class="status">
          <div class="statusTitle">
            <i class="material-icons" v-if="this.dados.status_history[4]">check_circle</i>
            <div class="circle" :class="[{'active' : this.dados.status_history[3]}]"></div>
            <h2>Indo Coletar</h2>
          </div>
          <div class="statusText" v-if="this.dados.status_history[3].at">
            <p>{{timeConvert(this.dados.status_history[3].at) }}</p>
          </div>
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
    dataFix(nameee){
      const regex = nameee.replace(/(\d{4})-(\d\d)-(\d\d)/, "$3-$2-$1");
      return regex
    },
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
    converterDate(dataString){
      const teste = Date.parse(dataString)
      return this.timeConvert(teste)
    }
  },
  filters: {
    phoneFix(value) {
      const arr = value.split('')
      arr.splice(0, 0, '+')
      arr.splice(3, 0, ' (')
      arr.splice(6, 0, ') ')
      arr.splice(13, 0, '-')
      return arr.join('')
    },
    nameFix(value){
      const arr = value.split('')
      arr.splice(15, 3, '')
      return arr.join('')
    },
    // dataFix(value){
    //   const arr = value.split('')
    //   arr.splice(10, 20, '')
    //   let newDate = arr[3] + '/' + arr[2] + '/' + arr[1]
    //   console.log(arr)
    //   arr.splice(4, 1, '/')
    //   arr.splice(7, 1, '/')
      
    //   return arr.join('')
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="../scss/infos.scss">

</style>
