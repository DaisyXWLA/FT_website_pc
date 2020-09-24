<template>
  <div class="container">
    <div class="con">
      <div class="left">
        <p class="title">公司简介</p>
        <p class="profile">郑州方泰机械设备有限公司成立于2014年，公司总部位于河南省郑州市国家大学科技园（东区），生产基地坐落在陈氏太极拳发源地河南省焦作市温县产业集聚区谷黄路中段，厂区占地面积约6万平方米，建筑面积约2.8万平方米。目前工厂拥有员工200余名，其中教授级高级工程师1名，高级工程师5名，专业技术人员……</p>
        <p class="btn">
          <router-link to="/about#profile" tag="button">查看更多<i class="fa fa-angle-double-right"></i></router-link>
        </p>
      </div>
      <div class="right">
        <img src="../../assets/images/company.jpg" alt="">
      </div>
    </div>
  </div>
</template>
<script>
</script>
<style lang="less" scoped>
.con{
  margin-top: 200px;
  display: flex;
  .left{
    margin-right: 100px;
    .title{
      font-size: 46px;
      color: #01415f;
      border-left: 8px solid #01415f;
      padding-left: 20px;
    }
    .profile{
      margin-top: 60px;
      font-size: 30px;
      line-height: 60px;
    }
    .btn{
      text-align: center;
      button{
        width: 400px;
        line-height: 80px;
        border: 1px solid #ccc;
        color: #999;
        font-size: 30px;
        margin-top: 80px;
        background: none;
        transition: all 0.5s;
        outline: none;
        &:hover{
          background: #01415f;
          color: #fff;
          border: 1px solid #01415f;
        }
        i{
          padding-left: 20px;
        }
      }
    }

  }
  .right{
    img{
      width: 1200px;
    }
  }
}

</style>
