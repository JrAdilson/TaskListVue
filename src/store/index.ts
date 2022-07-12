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
    }
  }
});

export function useStore(): Store<State>{
  return vuexUseStore(key)
}