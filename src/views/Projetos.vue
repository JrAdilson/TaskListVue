<template>
  <div class="projetos">
    <h1 class="title">Projetos</h1>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'ProjetoS'
  })
</script>

<style scoped>
.projetos {
  padding: 1.25rem;
}
.table {
  margin-top: 35px;
}
</style>