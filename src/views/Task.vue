<template>
  <Form @toSaveTask="saveTask" />
  <div class="lista">
    <TasK v-for="(task, index) in tasks" :key="index" :task="task" />
    <BoX v-if="emptyList"> Sem tarefas por hoje. </BoX>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Form from "@/components/Form.vue";
import TasK from "@/components/Task.vue";
import ITask from "../interfaces/ITask";
import BoX from "@/components/Box.vue";
export default defineComponent({
  name: "App",
  components: {
    Form,
    TasK,
    BoX,
  },
  data() {
    return {
      tasks: [] as ITask[],
    };
  },
  computed: {
    emptyList(): boolean {
      return this.tasks.length === 0;
    },
  },
  methods: {
    saveTask(task: ITask) {
      this.tasks.push(task);
    }
  },
});
</script>

