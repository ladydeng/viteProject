<template>
  <div style="color: red">网站标题：{{ title }}</div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue"

interface Props {
    title: string
}

const props = withDefaults(defineProps<Props>(),{
    title:"网站标题"
})

</script>

<style>

</style>