<template>
  <!-- 双向数据绑定 -->
  <div id="demo">
    姓：
    <input type="text" placeholder="firstName" v-model="firstName">
    <br>名：
    <input type="text" placeholder="lastName" v-model="lastName">
    <br>姓名1(单向):
    <input type="text" placeholder="FullName1" v-model="fullName1">
    <br>姓名2(双向):
    <input type="text" placeholder="FullName3" v-model="fullName3">
    <br>
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
import Vue from "vue";
export default {
  name: "Two",
  data() {
    return {
      firstName: "A",
      lastName: "B",
      //fullName2: "A B"
    };   
  },
   computed: {
    //计算属性相当于data里的属性
    //什么时候执行：初始化显示/ 相关的data属性发生变化
    fullName1() {
      //计算属性中的get方法，方法的返回值就是属性值
      return this.firstName + " " + this.lastName;
    },
    fullName3: {
      get() {
        //回调函数 当需要读取当前属性值是执行，根据相关数据计算并返回当前属性的值
        return this.firstName + " " + this.lastName;
      },
      set(val) {
        //监视当前属性值的变化，当属性值发生变化时执行，更新相关的属性数据
        //val就是fullName3的最新属性值
        console.log(val);
        const names = val.split(" ");
        console.log(names);
        this.firstName = names[0];
        this.lastName = names[1];
      }
    }
  }
};
</script>

<style>
</style>
