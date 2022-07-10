<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <CronomeTro :tempoSec="tempoSec" />
    <button class="button" @click="iniciar">
      <span class="icon">
        <i class="fas fa-play"></i>
      </span>
      <span>play</span>
    </button>
    <button class="button" @click="final">
      <span class="icon">
        <i class="fas fa-stop"></i>
      </span>
      <span>stop</span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CronomeTro from "./CronomeTro.vue";
export default defineComponent({
  name: "TemporiZador",
  components: {
    CronomeTro
  },
  data(){
    return{
      tempoSec: 0,
      cron: 0
    }
  },
  methods: {
    iniciar(){
      /* Começa a contagem do cronometro
      contagem realizada por segundos 
      1 seg = 1000 mili */
      this.cron = setInterval(() => {
        this.tempoSec += 1
      }, 1000)
    },
    final(){
      clearInterval(this.cron)
    }
  }
});
</script>