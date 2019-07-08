<template>
  <div class="right-view">
    <v-scroll scrollWraper="rightScroll" ref="rightScroll">
      <!-- 将显示点击传递的下标对应的页面 -->
      <div v-for="vie in viewList" :key="vie.categoryId" class="right-item">
        <div>
          <div class="title" @click="show">{{vie.name}}</div>
          <!-- 点击图片时 将数据对应的id传递到父组件 -->
          <dl v-for="list in vie.lists" :key="list.pid" class="right-item-content">
            <dt>
              <img :src="list.imgUrl" alt @click="address(vie.categoryId)">
            </dt>
            <dd>{{list.pname}}</dd>
          </dl>
        </div>
      </div>
    </v-scroll>
  </div>
</template>

<script>
import vScroll from "@/components/scroll";
export default {
  name: "RightView",
  //   接收父组件传值
  props: {
    viewList: {
      type: Array
    },
    current: {
      type: Number
    }
  },
  data() {
    return {};
  },
  components: {
    vScroll
  },
  mounted() {
    this.scroll = this.$refs.rightScroll;
  },
  methods: {
    address(id) {
      //组件传值
      this.$emit("getId", id);
    },
    show() {
      //this.$refs.rightScroll.$el 找到当前元素的属性 大盒子 scroll-wrapper
      //.firstElementChild ==> scroll-container
      //.childrn 所有的小盒子 数组
      //console.log(this.$refs.rightScroll.$el.firstElementChild.children);
      console.log(this.$refs.rightScroll.$el)
      
    }
  },
  watch: {
    current(current) {    
      /**找到所有小盒子组成的数组 点击nav时滚动到对应下标的元素 */
      let target = this.$refs.rightScroll.$el.firstElementChild.children    
     this.scroll.scrollToElement(target[current], 500);
    }
  }
};
</script>

<style>
</style>
