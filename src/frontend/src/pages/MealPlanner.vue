<template>
    <div class="row">
        <div class="col-12">
            <Target/>
        </div>
        <div class="col-6">
            <NutritionSelection/>
        </div>
        <div class="col-6">
            <NutritionAccordion/>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import NutritionAccordion from "@/components/NutritionAccordion.vue";
    import NutritionSelection from "@/components/NutritionSelection.vue";
    import Target from "@/components/Target.vue";

    @Component({
        components: {NutritionAccordion, NutritionSelection, Target}
    })
    export default class MealPlanner extends Vue {

        handleDrop(data: any) {
            console.log(data);
        }
    }
</script>
