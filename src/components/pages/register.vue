<template>
  <div class="register">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="昵称:">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码:">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码:">
        <el-input v-model="form.password1" type="password"></el-input>
      </el-form-item>
      <el-form-item label="生日:">
        <el-col :span="15">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="性别:">
        <el-radio-group v-model="form.resource">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">立即注册</el-button>
        <el-button @click="hideLogin">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      hideLogin(){
        this.$emit('hideLogin')
      }
    }
  }
</script>
<style>
.register {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
</style>
