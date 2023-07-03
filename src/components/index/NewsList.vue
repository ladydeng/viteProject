<template>
    <div class="newslist">
        <div class="cate-name">{{ cateName }}</div>
        <div class="news-item" v-for="(item, index) in newsList.value" :key="index" @click="toDetail(item)">
            {{ item.news_title }}
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue"
import { useRouter } from "vue-router"
const router  = useRouter()

interface Props {
    newsList: array,
    cateName: string
}

const props = withDefaults(defineProps<Props>(), {
    newsList: () => [],
    cateName: ""
})

const toDetail = (item: object) => {
    router.push({
        path:"/newsDetail",
        query:{
            cateId: item.cate_id,
            newsId: item.news_id
        }
    })
}
</script>

<style lang="scss" scoped>
.newslist{
    .cate-name{
        font-size: 18px;
        font-weight: bold;
        text-decoration: underline;
        text-align: left;
    }
    .news-item{
        padding: 10px 0;
        text-align: left;
    }
}

</style>