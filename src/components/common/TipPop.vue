<template>
    <el-dialog title="标题" v-model="visible" width="500" @closed="close">
        <div class="dialog-content">系统提示</div>
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="visible = false">取 消</el-button>
                <el-button type="primary" @click="submit">确 认</el-button>
            </div>
        </template>
    </el-dialog>
</template>
<script lang='ts' setup>
import { ref } from "vue";

const emit = defineEmits<{(e: "submit", data: any): void;}>();

let visible = ref(false);

// 打开
const show = (data?: any) => {
    visible.value = true;
};
// 提交
const submit = () => {
    emit("submit", "数据");
    visible.value = false;
};
// 关闭
const close = () => {
    visible.value = false;
};

defineExpose({
    show,
    close
});
</script>