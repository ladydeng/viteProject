<!-- myForm.vue -->
<template>
    <el-dialog v-model="dialogVisible" class="customer-container" :title="title" width="30%" @close="dialogClose">
        <el-alert style="margin-bottom: 10px" :show-icon="options.showIcon" :title="text" :type="options.type" :closable="false">
        </el-alert>
        <el-form label-width="100px" ref="formRef" :model="formData" :rules="formRules">
            <el-form-item label="用户名" prop="username">
                <el-input v-model="formData.username" />
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="formData.password" />
            </el-form-item>
        </el-form>
        <template #footer>
            <span>
                <el-button @click="dialogVisible = false">取消</el-button>
                <el-button type="primary" @click="submitForm"> 确认 </el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script setup>
    import {
        ref,
        defineProps,
        defineExpose,
        defineEmits
    } from 'vue';
    import {
        ElMessageBox
    } from 'element-plus';

    // 定义props
    const {
        title,
        text,
        options
    } = defineProps({
        title: {
            type: String,
            default: '标题',
        },
        text: {
            type: String,
            default: '文本',
        },
        options: {
            type: Object,
            default:{
                type:'success',
                showIcon:true,
            }
        }
    });
    // 定义emits
    const emit = defineEmits(['submit','closed']);

    // 定义表单数据
    let dialogVisible = ref(false);
    let formData = ref({
        username: '',
        password: '',
    });
    let formRef = ref();
    let formRules = ref({
        username: [{
            required: true,
            message: '请输入账号',
            trigger: 'blur',
        }, ],
        password: [{
            required: true,
            message: '请输入密码',
            trigger: 'blur',
        }, ],
    });

    // 重置表单
    function resetForm(params) {
        formData.value = {
            username: '',
            password: '',
        };
    }

    // 提交数据
    function submitForm(params) {
        formRef.value.validate((valid, fields) => {
            if (valid) {
                dialogVisible.value = false;
                emit('submit', JSON.parse(JSON.stringify(formData.value)));
            }
        });
    }

    // 关闭弹窗
    function dialogClose(){
        emit('closed');
    }

    defineExpose({
        showDialog: () => {
            resetForm();
            dialogVisible.value = true;
        },
        hideDialog: () => {
            dialogVisible.value = false;
        },
    });
</script>
<style>
    /* 由于直接添加到body所以没有使用scoped */
    .customer-container .el-dialog__body {
        padding-top: 0;
        padding-bottom: 0;
    }
</style>
