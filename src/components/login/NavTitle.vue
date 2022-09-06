<template>
  <div>父组件传给子组件的值</div>
  <div style="color: red">网站标题：{{ title }}</div>
</template>

<script lang="ts">
import { onMounted } from "vue"

export default {
    props:{
        title:String
    },

    setup(props, context){
        onMounted(() => {
            console.log(props.title)
        })
    }
}
</script>

<style>

</style>