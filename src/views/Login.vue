<template>
    <NavTitle :title="$title" />
    <div class="login">请登录！</div>
    <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm" status-icon>
        <el-form-item label="用户名：" prop="phoneNumber">
            <el-input v-model="ruleForm.phoneNumber" />
        </el-form-item>
        <el-form-item label="密码：" prop="password">
            <el-input v-model="ruleForm.password" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
            <el-button @click="resetForm(ruleFormRef)">重置</el-button>
        </el-form-item>
    </el-form>
</template>

<script lang="ts" setup>
import NavTitle from "/@/components/login/NavTitle.vue";
import { JSEncrypt } from "jsencrypt";
let decrypt = new JSEncrypt();

import { onMounted, getCurrentInstance, reactive, ref } from "vue";
const { proxy } = getCurrentInstance();
import type { FormInstance, FormRules } from "element-plus";
const ruleFormRef = ref<FormInstance>();

import { useStore } from "vuex";
import { useRouter } from "vue-router";
const store = useStore();
const router = useRouter();

type RuleForm = {
    phoneNumber: string;
    password: string;
};
let ruleForm = reactive<RuleForm>({
    phoneNumber: "",
    password: "",
});

const rules = reactive<FormRules>({
    phoneNumber: [{ required: true, message: "请输入用户名", trigger: "blur" }],
    password: [{ required: true, message: "请输入密码", trigger: "blur" }],
});

const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    await formEl.validate((valid, fields) => {
        if (valid) {
            console.log("submit!");
            handleLogin();
        } else {
            console.log("error submit!", fields);
        }
    });
};

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    formEl.resetFields();
};

let publicKey = ref("");
// 获取公钥
const getPublcKey = async () => {
    let res = await proxy.$post("/lencon/pc/login/getPublicKey");
    if (res.code == 1) {
        publicKey.value = res.publicKeyString;
        decrypt.setPublicKey(res.publicKeyString);
    }
};

const handleLogin = async () => {
    let params = {
        phone: decrypt.encrypt(ruleForm.phoneNumber),
        password: decrypt.encrypt(ruleForm.password),
        publicKey: publicKey.value,
    };
    let res = await proxy.$axios.post("/lencon/pc/login/login", params);
    if (res.data.code == 1) {
        let token = res.data.token;
        localStorage.setItem("token", token);
        store.commit("setToken", token);
        router.push("/");
    }
};

onMounted(() => {
    getPublcKey();
});
</script>

<style>
</style>