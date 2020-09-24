<template>
  <div>
    <div>
      <el-carousel>
        <el-carousel-item v-for="item in imgList" :key="item.id">
          <img :src="item.url" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      imgList: [{id: 0, url: require('@/assets/images/banner.jpg')}, {id: 1, url: require('@/assets/images/banner.jpg')}, {id: 2, url: require('@/assets/images/banner.jpg')}]
    }
  }
}
// 用webpack搭建的项目不能直接使用绝对路径，要用require，如果不使用这个，必须是线上图片。http类型的
</script>
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  .el-carousel__container{
    height: 800px;
  }
  .el-carousel__arrow{
    font-size: 60px;
    width: 80px;
    height: 80px;
  }
  .el-carousel__button{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin:0 10px;
  }
  .el-carousel__item img{
    width: 100%;
    height: 100%;
  }
</style>

