<template>
  <NavTitle title="信息管理系统"/>
  <div class="login">登录页 【token】</div>
</template>

<script lang="ts">
import { onMounted, getCurrentInstance  } from "vue"
import NavTitle from "/@/components/login/NavTitle.vue"

export default {
  components:{
    NavTitle
  },
  setup(props, context){

    const { ctx } = getCurrentInstance() as any

    onMounted(() => {
      console.log(context.attrs.$title)
      // console.log(ctx)
      console.log(ctx.$store)
    })
  }
}
</script>

<style>

</style>