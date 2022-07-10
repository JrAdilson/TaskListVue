<template>
  <section>
    <b>{{tempoDec}}</b>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'CronomeTro',
    props: {
        tempoSec: {
            type: Number,
            default: 0,
        }
    },
    computed:{
    tempoDec(): string{
      return new Date(this.tempoSec * 1000).toISOString().substr(11, 8)
    }
  }
})
</script>

<style>
</style>
