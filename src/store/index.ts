import IProject from "@/interfaces/IProject";
import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";

interface State {
  projetos: IProject[];
}
export const key: InjectionKey<Store<State>> = Symbol()
export const store = createStore<State>({
  state: {
    projetos: [
      {
        id: new Date().toISOString(),
        nome: "TypeScript",
      },
      {
        id: new Date().toISOString(),
        nome: "Vue",
      },
      {
        id: new Date().toISOString(),
        nome: "Vuex",
      }
    ]
  },
});
