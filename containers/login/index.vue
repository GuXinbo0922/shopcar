<template>
  <div class="wrapper">
    <!-- {{aaa}} -->
    <div class="main-wraper">
      <div class="wrapper-left">
        <Form ref="formInline" :model="formInline" :rules="ruleInline" inline class="form-content">
          <FormItem prop="user">
            <Input type="text" v-model="formInline.user" placeholder="您的邮箱手机号">
              <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="password">
            <Input type="password" v-model="formInline.password" placeholder="您的密码">
              <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem>
            <Button type="primary" @click="handleSubmit('formInline')" class="loginBtn">登录</Button>
          </FormItem>
        </Form>
        <div class="wrapper-lb">
          <div class="lb-item">
            <span class="item-img"></span>
            <span>新浪微博</span>
          </div>
          <div class="lb-item">
            <span class="item-qq-img"></span>
            <span>QQ</span>
          </div>
          <div class="lb-item">
            <span class="item-wx-img"></span>
            <span>微信</span>
             
          </div>
        </div>
      </div>
      <div class="wrapper-right">
        <div class="img-box">
          <img src="https://images.mafengwo.net/mobile/images/omc/login-omc/code.jpg" alt>
        </div>
        <div class="tit-box">
          <p>扫一扫</p>
          <p>下载马蜂窝App</p>
        </div>
      </div>
    </div>
  </div>
 
</template>

<script>
//https://images.mafengwo.net/images/signup/wallpaper/33.jpg
export default {
  name: "Login",
  data() {
    return {
      //组件传值
      aaa:this.$route.query.msg,
      formInline: {
        user: "",
        password: ""
      },
      ruleInline: {
        user: [
          {
            required: true,
            message: "请输入用户名！",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "请输入密码！",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: "密码至少为6位",
            trigger: "blur"
          }
        ]
      }
    };
  },

  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          //   const url = `/user/login?user=${this.formInline.user}&pwd=${
          //     this.formInline.password
          //   }`;
          //   fetch(url)
          //     .then(res => {
          //        console.log(res)
          //       return res.json();
          //     }).then(resl => {
          //       console.log(resl);
          //     });
          this.$axios
            .get("/user/register",{
              params:{
                user:this.formInline.user,
                pwd: this.formInline.password,
              }
            })
            .then(res => {
              console.log(res.data);
            });
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    }
  }
};
</script>

<style>
@import url("./css/index.css");
</style>
