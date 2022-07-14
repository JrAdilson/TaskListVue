import { INotify } from "@/interfaces/INotify";
import IProject from "@/interfaces/IProject";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { ADD_PROJECT, ALTER_PROJECT, DEL_PROJECT, NOTIFY } from "./typemut";
interface State {
  projetos: IProject[];
  notify: INotify[];
}
export const key: InjectionKey<Store<State>> = Symbol()
export const store = createStore<State>({
  state: {
    projetos: [],
    notify:[]
  },
  mutations: {
    [ADD_PROJECT](state, nomeDoProjeto: string){
      const project = {
        id: new Date().toISOString(),
        nome: nomeDoProjeto
      } as IProject
      state.projetos.push(project)
    },
    [ALTER_PROJECT](state, projeto: IProject){
      const index = state.projetos.findIndex(proj => proj.id == projeto.id)
      state.projetos[index] = projeto
    },
    [DEL_PROJECT](state, id: string){
      state.projetos = state.projetos.filter(proj => proj.id != id)
    },
    [NOTIFY](state, newNotify: INotify){
      newNotify.id = new Date().getTime()
      state.notify.push(newNotify)
      setTimeout(() => {
        state.notify = state.notify.filter(notifys => notifys.id != newNotify.id)
      }, 2000)
    }
  }
});

export function useStore(): Store<State>{
  return vuexUseStore(key)
}