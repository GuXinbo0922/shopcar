<template>
  <div>
    <button @click="shopcar">购物车</button>
    <button @click="tab">tab、better-scroll</button>
    <button @click="login">登录注册</button>
    <router-link to="/two">双向数据绑定</router-link>
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      num:1,
    }
  },
  methods: {
    shopcar() {
      //相当于get传值
      this.$router.history.push({
        path: "/shopcar",
        query: {
          // msg: "This is shopcar"
          msg:this.num
        }
      });
    },
    tab() {
      //相当于push传值
      this.$router.history.push({
        name: "Index",
        params: {
          msg: "This is Tab"
        }
      });
    },
    login(){
         //相当于get传值
      this.$router.history.push({
        path: "/login",
        query: {
          msg: "This is login"
        }
      });
    }
  }
};
</script>

<style>
</style>
