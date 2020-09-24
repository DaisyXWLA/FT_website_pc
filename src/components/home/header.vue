<template>
  <div>
    <div class="top">
      <div class="con container">
        <router-link to="/" tag="p">
          <img src="../../assets/images/logo.png" alt />
        </router-link>
        <router-link to="../contact" tag="p">
          <img src="../../assets/images/contact.png" alt />
        </router-link>
      </div>
    </div>
    <div class="nav">
      <ul class="menu container">
        <!-- <router-link :to="item.path" v-for="(item, index) in navList" :key="index" tag="li">{{item.name}}</router-link> -->
        <router-link to='/home' tag="li">首页</router-link>
        <router-link to='/about' tag="li">关于方泰</router-link>
        <router-link to='/news' tag="li">新闻中心</router-link>
        <router-link to='/product' tag="li">产品中心</router-link>
        <router-link to='/project' tag="li">工程方案</router-link>
        <router-link to='/server' tag="li">技术服务</router-link>
        <router-link to='/case' tag="li">工程案例</router-link>
        <router-link to='/contact' tag="li">联系我们</router-link>
      </ul>
    </div>
  </div>
</template>
<script>
// import router from '../../router/index'
import $ from 'jquery'
export default {
  data () {
    return {
      navList: []
    }
  },
  created () {
    // this.getRoute()
    this.scrollNav()
  },
  methods: {
    // getRoute () {
    //   this.navList = router.options.routes
    // },
    scrollNav () {
      $(window).on('scroll', function () {
        if ($(window).scrollTop() >= $('.con').height()) {
          $('.nav').addClass('fixed')
          $('.nav>.menu>li').addClass('mini')
        } else {
          $('.nav').removeClass('fixed')
          $('.nav>.menu>li').removeClass('mini')
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.fixed{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  // height: 160px!important;
  transition: all 0.5s;
}
.top {
  width: 100%;
  border-bottom: 1px solid #eee;
  .con {
    display: flex;
    height: 200px;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    p {
      img {
        width: 100%;
      }
    }
  }
}
.nav {
  width: 100%;
  height: 100px;
  background: #fff;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
  .menu{
    height: 100px;
    display: flex;
    align-items: center;
    list-style: none;
    margin:auto;
    justify-content: space-around;
    li{
      cursor: pointer;
      width: 12.5%;
      text-align: center;
      font-size: 30px;
      color: #999;
      position: relative;
      transition: all 0.2s;
      // &:first-child{
      //   width: 0;
      // }
      i{
        padding-left: 20px;
      }
      &::after{
          content: '';
          width: 0;
          height: 3px;
          background: #01415f;
          position: absolute;
          bottom: -28px;
          left: 50%;
          transform: translateX(-50%);
          transition: all 0.2s;
      }
      &:hover{
        color: #01415f;
        &::after{
          content: '';
          width: 90%;
          height: 3px;
          background: #01415f;
          position: absolute;
          bottom: -28px;
          left: 50%;
          transform: translateX(-50%);
          transition: all 1s;
        }
      }
    }
    .active{
      color: #01415f;
      &::after{
        content: '';
        width: 90%;
        height: 3px;
        background: #01415f;
        position: absolute;
        bottom: -28px;
        left: 50%;
        transform: translateX(-50%);
        transition: all 1s;
      }
    }
  }
}
</style>
