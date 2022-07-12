<template>
  <div class="box form">
    <div class="columns">
      <div
        class="column is-5"
        role="form"
        aria-label="Formulário para criar nova tarefa"
      >
        <input
          type="text"
          class="input"
          placeholder="Descrição da tarefa a se iniciar"
          v-model="descTask"
        />
      </div>
      <div class="column is-3">
        <div class="select">
          <select v-model="idProjeto">
            <option value="">Selecione o Projeto</option>
            <option :value="projeto.id"
            v-for="projeto in projetos"
            :key="projeto.id"
          >
          {{projeto.nome}}
          </option>
        </select>
      </div>
      </div>
      <div class="column">
        <TemporiZador @tempFinal="finTask"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import TemporiZador from "./Temp.vue";
import { useStore } from "vuex";
import { key } from "@/store";

export default defineComponent({
  name: "FormHo",
  emits: ['toSaveTask'],
  components: {
    TemporiZador
  },
  data(){
    return {
      descTask: '',
      idProjeto: ''
    }
  },
  methods: {
    finTask(tempoDec: number) : void{
      this.$emit('toSaveTask', {
        tempoSec: tempoDec,
        descTask: this.descTask,
        projeto: this.projetos.find(proj => proj.id == this.idProjeto)
      })
      this.descTask = ''
    }
  },
  setup(){
    const store = useStore(key)
    return {
      projetos: computed(() => store.state.projetos)
    }
  }
});
</script>

<style>
.form{
  color: var(--text-primary);
  background-color: var(--bg-primary);
}
</style>
