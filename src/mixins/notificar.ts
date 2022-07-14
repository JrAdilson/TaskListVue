import { TypeNotify } from "@/interfaces/INotify";
import { NOTIFY } from "@/store/typemut"
import { store } from "@/store"
export const notifyMixins = {
  methods: {
    notificar(type: TypeNotify, title: string, text: string) : void {
        store.commit(NOTIFY, {
        title,
        text,
        type,
      });
    },
  },
};
