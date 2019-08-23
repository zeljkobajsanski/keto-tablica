<template>
    <div>
        <div :style="{width: width + 'px', height: height + 'px'}" ref="placeholder"></div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
    import 'flot/source/jquery.canvaswrapper';
    import 'flot/source/jquery.colorhelpers';
    import 'flot/source/jquery.flot';
    import 'flot/source/jquery.flot.saturated';
    import 'flot/source/jquery.flot.browser';
    import 'flot/source/jquery.flot.drawSeries';
    import 'flot/source/jquery.flot.errorbars';
    import 'flot/source/jquery.flot.uiConstants';
    import 'flot/source/jquery.flot.flatdata';
    import 'flot/source/jquery.flot.navigate';
    import 'flot/source/jquery.flot.fillbetween';
    import 'flot/source/jquery.flot.stack';
    import 'flot/source/jquery.flot.hover';
    import 'flot/source/jquery.flot.touch';
    import 'flot/source/jquery.flot.axislabels';
    import 'flot/source/jquery.flot.selection';
    import 'flot/source/jquery.flot.pie';
    import 'flot/source/jquery.flot.composeImages';
    import 'flot/source/jquery.flot.legend';
    import 'flot/source/jquery.flot.categories';

    declare const $: any;

    @Component({})
    export default class Chart extends Vue {
        @Prop({default: () => []}) data!: Array<any>;
        @Prop() options!: any;
        @Prop() width!: number;
        @Prop() height!: number;

        @Watch('data')
        onDataChanged(newData: []) {
            $.plot(this.$refs['placeholder'], newData, this.options);
        }
    }
</script>
