import { TypeNotify } from "@/interfaces/INotify"
import { NOTIFY } from "@/store/typemut"
import { store } from "@/store"
type Notificador = {
    notificar: (type: TypeNotify, title: string, text: string) => void
}

export default () : Notificador => {
    const notificar = (type: TypeNotify, title: string, text: string) : void => {
        store.commit(NOTIFY, {
        title,
        text,
        type,
      });
    }
    return {
        notificar
    }
  }