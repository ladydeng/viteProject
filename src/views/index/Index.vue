<template>
    <el-row>
        <el-button :icon="Search" size="large" circle />
        <el-button :icon="Search" circle />
        <el-button :icon="Search" size="small" circle />
    </el-row>
    <el-row>
        <el-button type="success" disabled>Success</el-button>
        <el-button type="info" disabled>Info</el-button>
    </el-row>
    <div id="myCharts"></div>
</template>

<script lang="ts" setup>
import { Search } from '@element-plus/icons-vue'
import { onMounted, defineComponent } from "vue"
import * as echarts from "echarts"

// export default defineComponent({
//   setup(props, context){
      onMounted(() => {
        // console.log(context)
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById("myCharts"));
        // 绘制图表
        myChart.setOption({
            title: {
                text: "ECharts 入门示例",
            },
            tooltip: {},
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
            },
            yAxis: {},
            series: [
                {
                    name: "销量",
                    type: "bar",
                    data: [5, 20, 36, 10, 10, 20],
                },
            ],
        });
      })
    // }
// })


</script>
<style lang="scss" scoped>
#myCharts {
    width: 600px;
    height: 300px;
    border: 1px solid red;
}
</style>
