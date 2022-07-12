import IProject from "@/interfaces/IProject";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";

interface State {
  projetos: IProject[];
}
export const key: InjectionKey<Store<State>> = Symbol()
export const store = createStore<State>({
  state: {
    projetos: []
  },
  mutations: {
    'ADD_PROJECT'(state, nomeDoProjeto: string){
      const project = {
        id: new Date().toISOString(),
        nome: nomeDoProjeto
      } as IProject
      state.projetos.push(project)
    },
    'ALTER_PROJECT'(state, projeto: IProject){
      const index = state.projetos.findIndex(proj => proj.id == projeto.id)
      state.projetos[index] = projeto
    },
    'DEL_PROJECT'(state, id: string){
      state.projetos = state.projetos.filter(proj => proj.id != id)
    }
  }
});

export function useStore(): Store<State>{
  return vuexUseStore(key)
}