<template>
    <div>
        <b-card class="mb-1" no-body v-for="(group, index) in groups" v-key="group">
            <b-card-header class="p-1" header-tag="header" role="tab">
                <b-button block href="#">{{group}}</b-button>
            </b-card-header>
            <b-collapse :id="'accordion-' + index" accordion="my-accordion" role="tabpanel" visible>
                <b-card-body>
                    <b-card-text>I start opened because <code>visible</code> is <code>true</code></b-card-text>
                    <b-card-text></b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop, Watch, Emit} from 'vue-property-decorator'
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