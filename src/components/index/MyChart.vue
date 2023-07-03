<template>
    <div id="myCharts" ref="myCharts"></div>
</template>

<script lang="ts" setup>
import { onMounted, getCurrentInstance } from "vue"
import * as echarts from "echarts"
const { proxy } = getCurrentInstance() as any;

onMounted(() => {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(proxy.$refs.myCharts);
    // 绘制图表
    myChart.setOption({
        title: {
            text: "新闻发布量分析",
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            },
            formatter: (params) => {
               return '第一党支部           ' + params[0].name + '<br>' +
                    params[0].marker + ' ' + params[0].seriesName + ': ' + params[0].data + ' 次' + '<br>'
            },
        },
        xAxis: {
            data: ["党建新闻", "政策解读", "党员先锋", "组织先锋"],
        },
        yAxis: {},
        series: [
            {
                name: "月发布量",
                type: "bar",
                data: [5, 20, 36, 10],
                barWidth: "38",
                label: {
                    show: true,
                    position: 'top',
                    formatter: `{c}次`
                },
            },
        ],
    });
})
</script>

<style lang="scss" scoped>
#myCharts {
    width: 100%;
    height: 300px;
    margin-top: 50px;
}
</style>