<template>
  <div class="box">
    <div class="columns">
      <div
        class="column is-8"
        role="form"
        aria-label="Formulário para criar nova tarefa"
      >
        <input
          type="text"
          class="input"
          placeholder="Descrição da tarefa a se iniciar"
        />
      </div>
      <div class="column">
        <div
          class="is-flex is-align-items-center is-justify-content-space-between"
        >
          <section>
            <b>{{tempoDec}}</b>
          </section>
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
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "FormHo",
  data(){
    return{
      tempoSec: 0,
      cron: 0
    }
  },
  computed:{
    tempoDec(){
      return new Date(this.tempoSec * 1000).toISOString().substr(11, 8)
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

<style></style>
