<template>
  <section class="projetos">
    <h1 class="title">Projetos</h1>
    <form @submit.prevent="salvar">
      <div class="field">
        <label for="nomeDoProjeto" class="label"> Nome do Projeto </label>
        <input
          type="text"
          class="input"
          v-model="nomeDoProjeto"
          id="nomedoProjeto"
        />
      </div>
      <div class="field">
        <button class="button" type="submit">Salvar</button>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
import {useStore} from "@/store";
import { defineComponent } from "vue";
export default defineComponent({
  name: "ForM",
  props: {
    id: {
        type: String
    }
  },
  mounted(){
    if(this.id){
        const projeto = this.store.state.projetos.find(proj => proj.id == this.id)
        this.nomeDoProjeto = projeto?.nome || ''
    }
  },
  data() {
    return {
      nomeDoProjeto: "",
    };
  },
  methods: {
    salvar() {
      if(this.id){
        this.store.commit('ALTER_PROJECT', {
            id: this.id,
            nome: this.nomeDoProjeto
        })
      }else{
      this.store.commit('ADD_PROJECT', this.nomeDoProjeto)
      }
      this.nomeDoProjeto = "";
      this.$router.push('/projetos')
    },
  },
  setup (){
    const store = useStore()
    return {
      store
    }
  }
});
</script>
<style scoped>
.projetos {
  padding: 1.25rem;
}
.table{
  margin-top: 35px;
}
</style>
