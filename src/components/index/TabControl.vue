<template>
    <div class="tab-control">
        <div :class="['tab-item', activeIndex == index? 'active-tab':'']" v-for="(item, index) in tabList" :key="index" @click="tabClick(item, index)">
            {{ item.cateName }}
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits, getCurrentInstance } from "vue"
import { TabItem } from "@/types/index"
const { proxy } = getCurrentInstance() as any

interface Props {
    tabList:TabItem[]
}

const props = withDefaults(defineProps<Props>(), {
    tabList:[]
});

const activeIndex = ref(0)

const emits = defineEmits(["tabClick"]);
const tabClick = (item,index) => {
    activeIndex.value = index
    emits("tabClick", item, index)
}

</script>

<style lang="scss" scoped>
.tab-control{
    flex-shrink: 0;
    width: 200px;
    margin-right: 50px;
    border-right: 1px solid #f5f5f5;
    .tab-item{
        width: 80%;
        background: #f5f5f5;
        text-align: center;
        line-height: 50px;
        &.active-tab{
            background: #cccccc;
        }
    }
}
</style>