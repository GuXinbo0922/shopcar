<template>
    <div class="scroll-wraper" :ref="scrollWraper">
        <div class="scroll-container">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BScroll from "better-scroll"
export default {
    name:"v-scroll",
    props:{
        enableToElement:false,
        scrollWraper:{
            type:String,
            default:"scrollWraper"
        }
    },
    mounted(){
        this.scroll=new BScroll(this.$refs[this.scrollWraper],{
            click:document.body.width>768?false:true,
            scrollbar:this.isScrll,
            mouseWheel:true,
        })
    },
    methods:{
        refresh(){
            if(this.scroll){
                this.scroll.refresh()
            }
        },
        scrollToElement(){
            this.scroll&&this.scroll.scrollToElement.apply(this.scroll,arguments)
        }
    }
}
</script>

<style>
.scroll-wraper{
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    overflow: hidden;
}
</style>
