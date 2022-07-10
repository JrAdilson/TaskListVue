<template>
  <main class="columns is-gaples is-multiline">
    <div class="column is-one-quarter">
      <Lateral/>
    </div>
    <div class="column is-three-quarter">
      <Form/>
      <div class="lista">
        <TasK/>
        <TasK/>
        <TasK/>
        <TasK/>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Lateral from "@/components/Lateral.vue"
import Form from "@/components/Form.vue"
import TasK from "@/components/Task.vue"
export default defineComponent({
  name: 'App',
  components: {
    Lateral,
    Form,
    TasK
  }
});
</script>

