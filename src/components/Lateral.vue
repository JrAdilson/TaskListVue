<template>
    <header>
        <h1>
            <img src="../assets/logo.png" alt="logo">
        </h1>
    </header>
</template>

<script lang="ts">
    import {defineComponent} from 'vue'
    export default defineComponent({
        name: 'Lateral-Ho'
    })
</script>

<style>
header {
  padding: 1rem;
  background: #DAA520;
  width: 100%;
  height: 100vh;
}
img{
    padding-left: 75px;
    height: 190px
}
@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
</style>