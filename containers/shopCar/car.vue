<template>
  <div>
    <div class="summery">
      <span>总价</span>
      <span v-text="summery"></span>
    </div>
    <div class="total">
      <span>总个数</span>
      <span v-text="total"></span>
    </div>
  </div>
</template>

<script>
export default {
    name:"vCar",
    props:{
        summery:{
            default:0,
        },
         total:{
            default:0,
        }
    }
};
</script>

<style>
@import url("./shopcar.css");
</style>
