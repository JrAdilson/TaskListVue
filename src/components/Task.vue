<template>
    <BoX>
        <div class="columns">
            <div class="column is-7">
                {{task.descTask || 'Task with no description'}}
            </div>
            <div class="column">
                <CronomeTro :tempoSec="task.tempoSec"/>
            </div>
        </div>
    </BoX>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import CronomeTro from './CronomeTro.vue'
import ITask from '../interfaces/ITask'
import BoX from './Box.vue'
export default defineComponent({
    name: 'TasK',
    components: {
        CronomeTro,
        BoX
    },
    props: {
        task: {
            type: Object as PropType<ITask>,
            required: true
        }
    }
})
</script>
