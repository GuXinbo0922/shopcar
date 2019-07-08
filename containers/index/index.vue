<template>
  <div class="container">
    <!-- 通过路由传递的值{{aaa}} -->
    <header class="header">
      <!-- 组件传值 接收子组件传来的id 进行相应数据的渲染 -->
      <input type="text" :placeholder="ipt" class="ipt" @getId="getIds">
    </header>
    <main class="main">
      <nav class="nav">
        <v-scroll scrollWraper="navScroll">
          <!-- 将请求到的数据进行渲染 点击进行传值 -->
          <li
            v-for="(nav,ind) in navList"
            :key="nav.categoryId"
            @click="show(ind)"
            :class="{active:current==ind}"
          >
            <span>{{nav.name}}</span>
          </li>
        </v-scroll>
      </nav>
      <!-- 将显示点击传递的下标对应的页面 -->
      <!-- rightView组件 -->
      <!-- 组件传值  -->
      <RightView :viewList="viewList" :current="current" @getId="getIds"></RightView>
    </main>

    <footer class="footer"></footer>
  </div>
</template>

<script>
import RightView from "@/components/RightView";
import vScroll from "@/components/scroll";
export default {
  name: "Index",
  components: {
    RightView,
    vScroll
  },
  data() {
    return {
      //aaa 为 通过路由传递的值
      aaa: this.$route.params.msg,
      navList: [],
      viewList: [],
      current: 0,
      ipt: "搜索品牌或商品"
    };
  },
  methods: {
    getNavList() {
      //请求数据
      this.$axios.get("/getList").then(res => {
        //console.log(res.data);
        this.navList = res.data;
        this.viewList = res.data;
      });
    },
    show(num) {
      this.current = num;
    },
    address(id) {
      this.viewList.map(item => {
        if (item.categoryId == id) {
          this.ipt = item.image;
        }
      });
    },
    getIds(index) {
      console.log(index);
      this.viewList.map(item => {
        if (item.categoryId == index) {
          this.ipt = item.image;
          console.log(item.image);
        }
      });
    }
  },
  mounted() {
    this.getNavList();
  }
};
</script>

<style>
.active {
  border-left: 1px solid tomato;
  background: tomato;
}
</style>
