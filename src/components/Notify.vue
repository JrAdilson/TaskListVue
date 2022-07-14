<template>
  <div class="notify">
    <article class="message"
    :class="context[notifys.type]"
    v-for="notifys in notify" :key="notifys.id">
      <div class="message-header">{{notifys.title}}</div>
      <div class="message-body">{{ notifys.text}}</div>
    </article>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "@/store";
import { TypeNotify } from "@/interfaces/INotify";
export default defineComponent({
  name: "NotifY",
  data(){
    return {
      context:{
        [TypeNotify.SUCCESS]: 'is-success',
        [TypeNotify.FAIL]: 'is-danger',
        [TypeNotify.ATTENTION]: 'is-warning',
      } 
    }
  },
  setup(){
    const store = useStore()
    return {
        notify: computed(() => store.state.notify)
    }
  }
});
</script>

<style scoped>
.notify {
  position: absolute;
  right: 0;
  width: 300px;
  padding: 8px;
  z-index: 105
}
</style>
