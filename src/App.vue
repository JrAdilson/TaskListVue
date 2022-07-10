<template>
  <main class="columns is-gaples is-multiline">
    <div class="column is-one-quarter">
      <Lateral/>
    </div>
    <div class="column is-three-quarter">
      <Form @toSaveTask="saveTask"/>
      <div class="lista">
        <TasK v-for="(task,index) in tasks" :key="index" :task="task"/>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Lateral from "@/components/Lateral.vue"
import Form from "@/components/Form.vue"
import TasK from "@/components/Task.vue"
import ITask from "./interfaces/ITask"
export default defineComponent({
  name: 'App',
  components: {
    Lateral,
    Form,
    TasK
  },
  data(){
    return {
      tasks: [] as ITask[]
    }
  },
  methods: {
    saveTask (task: ITask){
      this.tasks.push(task)
    }
  }
});
</script>
<style>
  .lista{
    padding: 1.25rem;
  }
</style>

