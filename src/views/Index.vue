<template>
    <div class="container">
        <TabControl :tabList="list" @tabClick="tabClick"/>
        <NewsList :newsList="newsList" :cateName="cateName"/>
    </div>
    <MyChart />
</template>

<script lang="ts" setup>
import { reactive, ref,  onMounted, getCurrentInstance } from "vue"
import { TabItem } from "@/types/index"

import TabControl from "/@/components/index/TabControl.vue"
import MyChart from "/@/components/index/MyChart.vue"
import NewsList from "/@/components/index/NewsList.vue"

const { proxy } = getCurrentInstance() as any

const list = reactive<TabItem>([
    { cateName:"党建要闻", cateId:2 },
    { cateName:"政策解读", cateId:186 },
    { cateName:"党员先锋", cateId:24 },
    { cateName:"组织先锋", cateId:10 },
])

const newsList = reactive({})
const cateName = ref("")

const tabClick = (item, index) => {
    getNewsList(index)
}

const getNewsList = async ( index:number = 0) => {
    let params = {
        cate_id: list[index].cateId,
        page: 1,
        pageSize: 10
    }
    let res = await proxy.$axios.post("/lencon/pc/index/index_news_list", params)
    if(res.data.code == 1){
        newsList.value = res.data.res
        cateName.value = res.data.cate_name
    }
}


onMounted(() => {
    getNewsList()
})

</script>

<style lang="scss" scoped>
.container{
    display: flex;
    align-items: flex-start;
}
</style>
