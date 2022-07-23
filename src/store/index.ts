import { INotify } from "@/interfaces/INotify";
import IProject from "@/interfaces/IProject";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { ADD_PROJECT, ALTER_PROJECT, DEL_PROJECT, NOTIFY, DEF_PROJECT} from "./typemut";
import { GET_PROJECTS, POST_PROJECTS, PUT_PROJECTS } from "./typactions";
import http from "@/http";
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
    [DEF_PROJECT](state, projetos: IProject[]){
      state.projetos = projetos
    },
    [NOTIFY](state, newNotify: INotify){
      newNotify.id = new Date().getTime()
      state.notify.push(newNotify)
      setTimeout(() => {
        state.notify = state.notify.filter(notifys => notifys.id != newNotify.id)
      }, 2000)
    }
  },
  actions: {
    [GET_PROJECTS] ({ commit }){
      http.get('projetos')
        .then(res => commit(DEF_PROJECT, res.data))
    },
    [POST_PROJECTS] (contexto, nomeDoProjeto: string){
      return http.post('/projetos', {
        nome: nomeDoProjeto
      })
    },
    [PUT_PROJECTS] (contexto, projeto: IProject){
      return http.put(`/projetos/${projeto.id}`, projeto)
    }
  }
});

export function useStore(): Store<State>{
  return vuexUseStore(key)
}