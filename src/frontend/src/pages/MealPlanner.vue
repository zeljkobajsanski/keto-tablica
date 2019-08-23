<template>
    <div class="row">
        <div class="col-12">
            <div class="row">
                <div class="col-12"></div>
            </div>
            <div class="row">
                <div class="col-8"></div>
                <div class="col-4">
                    <NutritionAccordion/>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop, Watch, Emit} from 'vue-property-decorator'
    import NutritionAccordion from "@/components/NutritionAccordion.vue";

    @Component({
        components: {NutritionAccordion}
    })
    export default class MealPlanner extends Vue {
    }
</script>