<template>
    <div>
        <b-card class="mb-1" no-body v-for="(group, index) in groups" v-key="group">
            <b-card-header class="p-1" header-tag="header" role="tab">
                <b-button block href="#" v-b-toggle="'accordion-' + index">{{group}}</b-button>
            </b-card-header>
            <b-collapse :id="'accordion-' + index" accordion="my-accordion" role="tabpanel" visible>
                <b-card-body>
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
                        <tr :key="n.name" v-for="n in data[group]">
                            <td>{{n.name}}</td>
                            <td>{{n.cals}}</td>
                            <td>{{n.protein}}</td>
                            <td>{{n.carbs}}</td>
                            <td>{{n.fat}}</td>
                        </tr>
                        </tbody>
                    </table>
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
            this.data = _.groupBy(data, 'group');
            this.groups = _.keys(this.data);
        }


    }
</script>

<style scoped>
    .table {
        font-size: 12px;
    }
</style>