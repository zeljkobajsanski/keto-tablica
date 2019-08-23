<template>
    <div>
        <drop @drop="handleDrop" id="meals">
            <table class="table table-light" v-if="items.length > 0">
                <tbody>
                <tr :key="item.name" v-for="(item, index) in items">
                    <td class="half-width">{{item.name}}</td>
                    <td class="half-width">
                        <vue-slider :interval="10" :max="1000" useKeyboard="true" v-model="item.quantity"></vue-slider>
                    </td>
                    <td>
                        <span>{{item.quantity}}&nbsp;g</span>
                    </td>
                    <td>
                        <button @click="removeItem(index)" class="btn btn-danger btn-sm">
                            <i class="fa fa-trash-o"></i>
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
            <div class="p-3" v-else>
                <b-alert show variant="primary">
                    Izaberite namirnice (drag and drop)
                </b-alert>
            </div>
        </drop>
        <div>
            <table class="table table-light summary-table">
                <tbody>
                <tr>
                    <td class="p-0 bold"> Kalorije</td>
                    <td :class="{'text-danger': calculated.cals > target.cals}" class="text-right p-0">
                        {{calculated.cals}} kcal
                    </td>
                </tr>
                <tr>
                    <td class="p-0 bold">Proteini</td>
                    <td :class="{'text-danger': calculated.protein > target.protein}" class="text-right p-0">
                        {{calculated.protein}} g ({{calculated.proteinPerc}} %)
                    </td>
                </tr>
                <tr>
                    <td class="p-0 bold">Ugljeni hidrati</td>
                    <td :class="{'text-danger': calculated.carbs > target.carbs}" class="text-right p-0">
                        {{calculated.carbs}} g ({{calculated.carbsPerc}} %)
                    </td>
                </tr>
                <tr>
                    <td class="p-0 bold">Masti</td>
                    <td :class="{'text-danger': calculated.fat > target.fat}" class="text-right p-0">{{calculated.fat}}
                        g ({{calculated.fatPerc}} %)
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <div class="clearfix"></div>
        <div>
            <div id="legend"></div>
            <Chart :data="series" :options="chartOptions" height="400"/>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from 'vue-property-decorator';
    import Chart from "@/components/Chart.vue";
    import axios from 'axios';

    @Component({components: {Chart}})
    export default class NutritionSelection extends Vue {
        items: Array<any> = [];
        calculated: any = {cals: 0, protein: 0, carbs: 0, fat: 0};
        target: any = {cals: 0, protein: 0, carbs: 0, fat: 0};
        // series: Array<any> = [];
        chartOptions = {
            series: {
                bars: {show: true, align: 'center'}
            },
            xaxis: {
                mode: "categories",
                showTicks: false,
                gridLines: false
            },
            legend: {show: false}
        };


        async created() {
            const {data} = await axios.get('my-target.json');
            this.target = data;
        }

        get series() {
            return [
                {
                    label: 'Target',
                    data: [['Proteini', this.target.protein], ['Ugljeni hidrati', this.target.carbs], ['Masti', this.target.fat]]
                },
                {
                    label: 'Calculated',
                    data: [['Proteini', this.calculated.protein], ['Ugljeni hidrati', this.calculated.carbs], ['Masti', this.calculated.fat]]
                },
            ];
        }

        @Watch('items', {deep: true})
        onItemsChanged(items: Array<any>) {
            this.calculate(items);
        }

        handleDrop(data: any, evt: Event) {
            this.items.push({...data, quantity: 0});
        }

        removeItem(index: number) {
            this.items.splice(index, 1);
        }

        calculate(items: Array<any>) {
            this.calculated = items.reduce((acc, item) => ({
                    cals: Math.round(acc.cals + item.quantity * item.cals / 100),
                    protein: Math.round(acc.protein + item.quantity * item.protein / 100),
                    carbs: Math.round(acc.carbs + item.quantity * item.carbs / 100),
                    fat: Math.round(acc.fat + item.quantity * item.fat / 100),
                    get total() {
                        return this.protein + this.carbs + this.fat;
                    },
                    get proteinPerc() {
                        return Math.round(this.protein ? this.protein / this.total * 100 : 0)
                    },
                    get carbsPerc() {
                        return Math.round(this.carbs ? this.carbs / this.total * 100 : 0)
                    },
                    get fatPerc() {
                        return Math.round(this.fat ? this.fat / this.total * 100 : 0)
                    }
                }),
                {cals: 0, protein: 0, carbs: 0, fat: 0});
        }
    }
</script>

<style>
    #meals {
        width: 100%;
        height: 100%;
        min-height: 100px;
        border: 1px solid rgba(0, 0, 0, 0.125);
    }

    .half-width {
        width: 50%;
    }

    .summary-table {
        width: 280px;
        float: right;
        margin-top: 10px;
    }

    .bold {
        font-weight: bold;
    }
</style>
