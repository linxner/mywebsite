<template>
    <div>
        <div class="carousel">
            <el-carousel :interval="5000" arrow="hover" height="700px">
                <el-carousel-item v-for="(item,index) in imglist" :key="index">
                    <img :src="item.url" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                imglist:[
                    {
                        name:'',
                        url:require('../../assets/images/carousel1.jpeg')
                    },
                    {
                        name:'',
                        url:require('../../assets/images/carousel2.jpeg')
                    },
                    {
                        name:'',
                        url:require('../../assets/images/carousel3.jpeg')
                    },
                    {
                        name:'',
                        url:require('../../assets/images/carousel4.jpeg')
                    },
                    {
                        name:'',
                        url:require('../../assets/images/carousel5.jpeg')
                    }
                ]
            }
        }
    }
</script>
<style>
</style>

