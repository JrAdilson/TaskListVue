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
          v-model="descTask"
        />
      </div>
      <div class="column">
        <TemporiZador @tempFinal="finTask"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TemporiZador from "./Temp.vue";
export default defineComponent({
  name: "FormHo",
  components: {
    TemporiZador
  },
  data(){
    return {
      descTask: ''
    }
  },
  methods: {
    finTask(tempoDec: number) : void{
      console.log('a',tempoDec)
      console.log('desc da task', this.descTask)
      this.descTask = ''
    }
  }
});
</script>

<style></style>
