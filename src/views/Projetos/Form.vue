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
import { ADD_PROJECT, ALTER_PROJECT} from "@/store/typemut";
import { TypeNotify } from "@/interfaces/INotify"
import { notifyMixins} from "@/mixins/notificar"
export default defineComponent({
  name: "ForM",
  props: {
    id: {
        type: String
    }
  },
  mixins: [notifyMixins],
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
      this.notificar(TypeNotify.SUCCESS, 'Excelente!', 'O projeto foi cadastrado com sucesso')
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
