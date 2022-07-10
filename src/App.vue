<template>
  <main class="columns is-gaples is-multiline" :class="{'dark-mode': darkModeOn}">
    <div class="column is-one-quarter">
      <Lateral @toAlterMode="alterMode"/>
    </div>
    <div class="column is-three-quarter cont">
      <Form @toSaveTask="saveTask" />
      <div class="lista">
        <TasK v-for="(task, index) in tasks" :key="index" :task="task" />
        <BoX v-if="emptyList"> Sem tarefas por hoje. </BoX>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Lateral from "@/components/Lateral.vue";
import Form from "@/components/Form.vue";
import TasK from "@/components/Task.vue";
import ITask from "./interfaces/ITask";
import BoX from "@/components/Box.vue";
export default defineComponent({
  name: "App",
  components: {
    Lateral,
    Form,
    TasK,
    BoX,
  },
  data() {
    return {
      tasks: [] as ITask[],
      darkModeOn: false
    };
  },
  computed: {
    emptyList() : boolean {
      return this.tasks.length === 0
    }
  },
  methods: {
    saveTask(task: ITask) {
      this.tasks.push(task);
    },
    alterMode(darkModeOn: boolean){
      this.darkModeOn = darkModeOn
    }
  },
});
</script>
<style>
.lista {
  padding: 1.25rem;
}
main{
  --bg-primary: #fff;
  --text-primary: #000;
}
main.dark-mode{
  --bg-primary: #171717;
  --text-primary: #ddd;
}
.cont{
  background-color: var(--bg-primary);
}
</style>
