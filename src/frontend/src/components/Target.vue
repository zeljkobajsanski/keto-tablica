<template>
    <div>
        <b-card class="overflow-hidden" no-body style="margin-bottom: 5px">
            <b-row no-gutters>
                <b-col md="6">
                    <b-card-body>
                        <b-card-text>
                            <table class="table table-light m-b-0">
                                <tbody>
                                <tr>
                                    <td colspan="2">Dnevni unos kalorija</td>
                                    <td></td>
                                    <td class="text-right">{{target.cals}}&nbsp;kcal</td>
                                </tr>
                                </tbody>
                            </table>
                            <table class="table table-light m-b-0">
                                <thead class="text-right">
                                <tr>
                                    <th>Proteini</th>
                                    <th>Ugljeni hidrati</th>
                                    <th>Masti</th>
                                </tr>
                                </thead>
                                <tbody class="text-right">
                                <tr>
                                    <td class="p-0">{{target.protein}} g</td>
                                    <td class="p-0">{{target.carbs}} g</td>
                                    <td class="p-0">{{target.fat}} g</td>
                                </tr>
                                <tr>
                                    <td>{{target.protein}} %</td>
                                    <td>{{target.carbs}} %</td>
                                    <td>{{target.fat}} %</td>
                                </tr>
                                </tbody>
                            </table>
                        </b-card-text>
                    </b-card-body>
                </b-col>
                <b-col md="6">
                    <div>
                        <Chart :data="series"
                               :options="{series:{pie:{show:true}}}"
                               height="250"/>
                    </div>
                </b-col>
            </b-row>
        </b-card>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Chart from "@/components/Chart.vue";
    import axios from 'axios';

    @Component({components: {Chart}})
    export default class Target extends Vue {
        target: any = {cals: 0, protein: 0, carbs: 0, fat: 0};
        series: Array<any> = [];

        async mounted() {
            const {data} = await axios.get('my-target.json');
            this.target = data;
            this.target.total = this.target.fat + this.target.carbs + this.target.protein;
            this.series = [
                {label: 'Masti', data: Math.round(this.target.fat / this.target.total * 100)},
                {label: 'Proteini', data: Math.round(this.target.protein / this.target.total * 100)},
                {label: 'Ugljeni hidrati', data: Math.round(this.target.carbs / this.target.total * 100)},
            ];
        }
    }
</script>
