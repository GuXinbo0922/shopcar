<template>
  <div class="container">
    <!-- 通过路由传递的值{{aaa}} -->
    {{aaa}}
    <!-- <v-haha></v-haha> -->
    <header class="header">
      <span>全选</span>
      <!-- <input type="checkbox" @click="checkAll" :checked="isAll"> -->
      <Checkbox @click.native="checkAll" :checked="isAll"></Checkbox>
    </header>
    <main class="main-product">
      <v-scroll scrollWraper="mainProduct">
        <!-- <input type="checkbox" class="proIpt" v-model="pro.isCheck" @click="checkOne(ind)"> -->
        <v-item
          class="product-item"
          v-for="(pro,ind) in proData"
          :key="pro.pid"
          :pro="pro"
          :ind="ind"
          @update="onUpdate"
        ></v-item>
      </v-scroll>
    </main>

    <v-car class="footer" :summery="summery" :total="total"></v-car>
  </div>
</template>

<script>
import vScroll from "@/components/scroll";
import vCar from "./car";
import vItem from "./item";
import { Checkbox } from "iview";
export default {
  name: "ShopCar",
  data() {
    return {
      //aaa 为 通过路由传递的值
      aaa: this.$route.query.msg,
      summery: 0,
      total: 0,
      isAll: false,
      proData: []
    };
  },
  mounted() {
    this.getProductList();
    this.calculate();
  },
  components: {
    /**单文件组件 */
    vScroll,
    Checkbox,
    vCar,
    vItem
    /** 局部 组件的平常写法 */
    // vHaha:{
    //   name:"vHaha",
    //   template:`<div>
    //   <h1>{{title}} </h1></div>`,
    //   data(){
    //     return{
    //       title:"hahaha"
    //     }
    //   },
    //   methods: {

    //   },
    //   mounted() {

    //   },
    // }
  },
  methods: {
    onUpdate(type, index) {
      switch (type) {
        case "add":
          if (this.proData[index].count >= 9) return;
          this.proData[index].count++;
          break;
        case "reduce":
          this.proData[index].count--;
          break;
        case "checkOne":
          this.proData[index].isCheck = !this.proData[index].isCheck;
          break;
        default:
          break;
      }
      this.calculate();
    },
    calculate() {
      let sum = 0;
      let tot = 0;
      this.proData.map(item => {
        if (item.isCheck == true) {
          sum += item.count * item.price;
          tot += item.count;
        }
      });
      this.summery = sum.toFixed(2);
      this.total = tot.toFixed(2);
    },
    checkAll() {
      this.isAll = !this.isAll;
      if (this.isAll == true) {
        this.proData.map(item => {
          item.isCheck = true;
          this.calculate();
        });
      } else {
        this.proData.map(item => {
          item.isCheck = false;
        });
        this.summery = 0;
        this.total = 0;
      }
    },
    getProductList() {
      this.$axios.get("/getProduct").then(res => {
        this.proData = res.data;
        this.calculate();
      });
    }
  }
};
</script>

<style>
@import url("./shopcar.css");
</style>
