<template>
  <header>
    <h1>
      <img src="../assets/logo.png" alt="logo" />
    </h1>
    <button class="button" style="text-align: center; margin-left: 155px" @click="altMode">
      {{textButton}}
    </button>
    <nav class="panel mt-5">
      <ul>
        <li>
          <router-link to="/" class="link" id="task">
            <i class="fas fa-tasks"></i>
            Tarefas
          </router-link>
        </li>
        <li>
          <router-link to="/projetos" class="link" id="project">
            <i class="fas fa-project-diagram"></i>
            Projetos
          </router-link>
        </li>
      </ul>
    </nav>
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
.panel li{
  margin: 8px 0;
}
.link{
  height: 35px;
  background-color: #daa520;
  color: #fff; 
  display: flex;
  justify-content: center;
  margin-right: 90px;
  margin-top: 10px;
}
.link:hover{
  color: #FAF0CA;
}
.link.router-link-active{
  color: #FAF0CA
}
</style>
