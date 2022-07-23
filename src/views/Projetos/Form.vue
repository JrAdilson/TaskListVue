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
import { useStore } from "@/store";
import { defineComponent } from "vue";
import { TypeNotify } from "@/interfaces/INotify";
import useNotificador from "@/hooks/notificador";
import { POST_PROJECTS, PUT_PROJECTS } from "@/store/typactions";

export default defineComponent({
  name: "ForM",
  props: {
    id: {
      type: String,
    },
  },

  mounted() {
    if (this.id) {
      const projeto = this.store.state.projetos.find(
        (proj) => proj.id == this.id
      );
      this.nomeDoProjeto = projeto?.nome || "";
    }
  },
  data() {
    return {
      nomeDoProjeto: "",
    };
  },
  methods: {
    salvar() {
      if (this.id) {
        this.store.dispatch(PUT_PROJECTS, {
          id: this.id,
          nome: this.nomeDoProjeto,
        }).then(() => this.takeSucess());
      } else {
        this.store.dispatch(POST_PROJECTS, this.nomeDoProjeto).then(() => this.takeSucess());
      }
    },
    takeSucess() {
      this.nomeDoProjeto = "";
      this.notificar(
        TypeNotify.SUCCESS,
        "Excelente!",
        "O projeto foi cadastrado com sucesso"
      );
      this.$router.push("/projetos");
    },
  },
  setup() {
    const store = useStore();
    const { notificar } = useNotificador();
    return {
      store,
      notificar,
    };
  },
});
</script>
