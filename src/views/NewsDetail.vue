<template>
    <div v-if="newsInfo.value">
        <h3>{{ newsInfo.value.newsTitle }}</h3>
        <div v-html="newsInfo.value.newsContent"></div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, getCurrentInstance, reactive } from "vue"
import { useStore } from "vuex"
import { useRoute } from "vue-router"

const { proxy } = getCurrentInstance() as any
const store = useStore()
const route = useRoute()

const newsInfo = reactive({})
const getDeail = async () => {
    let params = {
        cateId: route.query.cateId,
        newsId: route.query.newsId
    }
    let res = await proxy.$axios.post("/lencon/pc/news/newsDetail", params)
    if(res.data.code == 1){
        newsInfo.value = res.data.data
    }

}

onMounted(() => {
    console.log(proxy.$tipPop)
    // // if(!store.getters.token){
    //     proxy.$tipPop.show(true)
    // // }
    getDeail()
})
</script>