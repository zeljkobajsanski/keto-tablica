<template>
    <div class="row">
        <div class="col-12">
            <div class="row">
                <div class="col-12"></div>
            </div>
            <div class="row">
                <div class="col-7"></div>
                <div class="col-5">
                    <NutritionAccordion/>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import NutritionAccordion from "@/components/NutritionAccordion.vue";

    @Component({
        components: {NutritionAccordion}
    })
    export default class MealPlanner extends Vue {
    }
</script>