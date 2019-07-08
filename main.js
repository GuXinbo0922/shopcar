// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios"
import "@/common/css/index.css"
import lazyLoad from "vue-lazyload";
import iview from "iview"
//import "iview/dist/styles/iview.css"

//全局挂载iview
Vue.use(iview);
/**利用vue.use使用组件 在components里注册haha组件 */
import haha from "@/components/haha"
Vue.use(haha)

Vue.use(lazyLoad, {
    preLoad: 1.3,
    attempt: 1,
    loading: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1300413479,1375388101&fm=27&gp=0.jpg"
})
Vue.prototype.$axios = axios;
Vue.config.productionTip = false

/**全局组件 */
// Vue.component("v-haha", {

//     name: "vHaha",
//     template: `<div>
//         <h1>{{title}} </h1></div>`,
//     data() {
//         return {
//             title: "hahaha"
//         }
//     },
//     methods: {

//     },
//     mounted() {

//     },

// });
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})