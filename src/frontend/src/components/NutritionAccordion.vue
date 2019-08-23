<template>
    <div>
        <b-card class="mb-1" no-body v-for="(group, index) in groups" v-key="group">
            <b-card-header class="p-1" header-tag="header" role="tab">
                <b-button block href="#" v-b-toggle="'accordion-' + index" variant="success">{{group}}</b-button>
            </b-card-header>
            <b-collapse :id="'accordion-' + index" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                    <div class="my-card-body">
                        <table class="table">
                            <thead>
                            <tr>
                                <th></th>
                                <th>Kalorije</th>
                                <th>Proteini</th>
                                <th>UH</th>
                                <th>Masti</th>
                            </tr>
                            </thead>
                            <tbody>
                            <drag :key="n.name" :transfer-data="n" effect-allowed="copy" tag="tr"
                                  v-for="n in data[group]">
                                <td>{{n.name}}</td>
                                <td>{{n.cals}}</td>
                                <td>{{n.protein}}</td>
                                <td>{{n.carbs}}</td>
                                <td>{{n.fat}}</td>
                            </drag>
                            </tbody>
                        </table>
                    </div>

                </b-card-body>
            </b-collapse>
        </b-card>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import axios from 'axios';
    import * as _ from 'lodash';

    @Component({})
    export default class NutritionAccordion extends Vue {
        data: any = {};
        groups: Array<string> = [];

        async created() {
            const {data} = await axios.get('nutrition-facts.json');
            this.data = _.groupBy(data.filter((x: any) => x.visible), 'group');
            this.groups = _.keys(this.data);
        }


    }
</script>

<style scoped>
    .table {
        font-size: 12px;
    }

    .my-card-body {
        overflow-y: auto;
        max-height: 400px;
    }
</style>
