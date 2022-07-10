<template>
    <div class="box has-text-weight-bold">
        <div class="columns">
            <div class="column is-7">
                Task Description
            </div>
            <div class="column">
                <CronomeTro tempoSec="15"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CronomeTro from './CronomeTro.vue'
export default defineComponent({
    name: 'TasK',
    components: {
        CronomeTro
    }
})
</script>