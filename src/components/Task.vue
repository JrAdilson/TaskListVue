<template>
    <div class="box has-text-weight-bold">
        <div class="columns">
            <div class="column is-7">
                {{task.descTask}}
            </div>
            <div class="column">
                <CronomeTro :tempoSec="task.tempoSec"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import CronomeTro from './CronomeTro.vue'
import ITask from '../interfaces/ITask'
export default defineComponent({
    name: 'TasK',
    components: {
        CronomeTro
    },
    props: {
        task: {
            type: Object as PropType<ITask>,
            required: true
        }
    }
})
</script>
<style scoped> 
    .box{
        background: #FAF0CA;
    }
</style>