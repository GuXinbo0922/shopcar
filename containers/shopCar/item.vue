<template>
  <div>
    <!-- 使用iview ui库的checkbox -->
    <!-- 找到对应的下标 传回父组件 精心数据的更改 -->
    <!-- {{ind}} -->
    <Checkbox class="proIpt" v-model="pro.isCheck" @click.native="checkOne(ind)"></Checkbox>
    <div class="img-box">
      <img v-lazy="pro.imgSrc" alt>
    </div>
    <div class="pro-content">
      <div class="pro-tit">{{pro.tit}}</div>
      <div class="pro-price">{{pro.price}}</div>
    </div>
    <div class="pro-car">
      <div class="car-minus" v-show="pro.count>0" @click="reduce(ind)">
        <span>-</span>
      </div>
      <div class="car-count" v-show="pro.count>0">
        <span v-text="pro.count"></span>
      </div>
      <div class="car-plus" @click="add(ind)">
        <span>+</span>
      </div>
    </div>
  </div>
</template>

<script>
import { Checkbox } from "iview";

export default {
  name: "Item",
  props: {
    pro: {
      type: Object
    },
    ind: {
      type: Number
    }
  },
  methods: {
    add(ind) {     
      this.$emit("update","add",ind);
    },
    reduce(ind) {
       this.$emit("update","reduce",ind);
    },
    checkOne(ind) {     
      this.$emit("update","checkOne",ind);
    }
  },
  components: {
    Checkbox
  }
};
</script>

<style>
</style>
