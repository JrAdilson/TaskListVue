<template>
  <main class="columns is-gaples is-multiline" :class="{'dark-mode': darkModeOn}">
    <div class="column is-one-quarter">
      <Lateral @toAlterMode="alterMode"/>
    </div>
    <div class="column is-three-quarter cont">
      <!-- View ref: Tasks -->
      <router-view></router-view> 
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Lateral from "@/components/Lateral.vue";
export default defineComponent({
  name: "App",
  components: {
    Lateral
  },
  data() {
    return {
      darkModeOn: false
    };
  },
  methods: {
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
