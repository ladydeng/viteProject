<template>
    <div v-if="newsInfo.value">
        <h3>{{ newsInfo.value.newsTitle }}</h3>
        <div v-html="newsInfo.value.newsContent"></div>
    </div>
    <!-- <myForm ref="myFormRef" title="我是标题" text="我是文本" :options="{ 'showIcon': true, 'type': 'success' }" @submit="submit"></myForm> -->
</template>

<script lang="ts" setup>
import { myMsgBox } from '/@/components/common/myMsgBox.ts';
// import myForm from '/@/components/common/myForm.vue';

import { onMounted, getCurrentInstance, reactive, ref } from "vue"
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

function submit(data) {
  console.log(data);
}

onMounted(() => {
    console.log("token不存在=================")
    getDeail()

    if(!store.getters.token){
        // 调用方式一：
        // const myFormRef = ref()
        // myFormRef.value.showDialog();

        // 调用方式二：
        myMsgBox('我是文本', '我是标题', {
            showIcon:true,
            type:'success',
        }).then((data)=>{
            console.log('then中获取值',data);
        }).catch(()=>{
            console.log('catch就是关闭弹窗');
        })
    }
})
</script>