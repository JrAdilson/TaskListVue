<template>
  <header>
    <h1>
      <img src="../assets/logo.png" alt="logo" />
    </h1>
    <button class="button" style="text-align: center; margin-left: 155px" @click="altMode">
      {{textButton}}
    </button>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Lateral-Ho",
  emits: ['toAlterMode'],
  data(){
    return{
      darkModeOn: false
    }
  },
  computed: {
    textButton(){
      if(this.darkModeOn){
        return 'Light mode'
      }
      return 'Dark mode'
    }
  },
  methods: {
    altMode(){
      this.darkModeOn = !this.darkModeOn
      this.$emit('toAlterMode', this.darkModeOn)
    }
  }
});
</script>

<style>
header {
  padding: 1rem;
  background: #daa520;
  width: 120%;
  height: 100vh;
}
img {
  padding-left: 75px;
  height: 190px;
}
@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
</style>
