<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <CronomeTro :tempoSec="tempoSec" />
    <button class="button" @click="iniciar" :disabled="cronRun">
      <span class="icon">
        <i class="fas fa-play"></i>
      </span>
      <span>play</span>
    </button>
    <button class="button" @click="final" :disabled="!cronRun">
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
  emits: ['tempFinal'],
  components: {
    CronomeTro,
  },
  data() {
    return {
      tempoSec: 0,
      cron: 0,
      cronRun: false,
    };
  },
  methods: {
    iniciar() {
      /* Começa a contagem do cronometro
      contagem realizada por segundos 
      1 seg = 1000 mili */
      this.cronRun = true;
      this.cron = setInterval(() => {
        this.tempoSec += 1;
      }, 1000);
    },
    final() {
      this.cronRun = false;
      clearInterval(this.cron);
      this.$emit('tempFinal', this.tempoSec)
      this.tempoSec = 0
    },
  },
});
</script>
