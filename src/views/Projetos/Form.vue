<template>
  <section>
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
import { ADD_PROJECT, ALTER_PROJECT, NOTIFY} from "@/store/typemut";
import { TypeNotify } from "@/interfaces/INotify"
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
        this.store.commit(ALTER_PROJECT, {
            id: this.id,
            nome: this.nomeDoProjeto
        })
      }else{
      this.store.commit(ADD_PROJECT, this.nomeDoProjeto)
      }
      this.nomeDoProjeto = "";
      this.store.commit(NOTIFY,{
        title: 'Projeto salvo corretamente',
        text: 'Projeto disponível para uso.',
        type: TypeNotify.SUCCESS
      })
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
