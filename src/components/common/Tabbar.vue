<template>
    <div class="tabbar">
        <div class="item" v-for="(item, index) in tabbar" :key="index">{{ item.title }}</div>
    </div>
</template>

<script lang="ts" setup>
    const tabbar = [
        { title:"首页" },
        { title:"新闻" },
        { title:"学习" },
        { title:"我的" },
    ]
</script>

<style lang="scss" scoped>

</style>