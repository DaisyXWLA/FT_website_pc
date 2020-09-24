<template>
  <div>
    <Header></Header>
    <div class="banner">
      <img src="../assets/images/s-banner-profile.jpg" alt />
    </div>
    <div class="title container">
      <div class="left">{{$route.name}}</div>
      <div class="right">
        <p>
          <span>您当前的位置：</span>
          <router-link to="/home">
            首页
            <i class="fa fa-angle-right"></i>
          </router-link>
          <router-link :to="$route.path">{{$route.name}}</router-link>
        </p>
      </div>
    </div>
    <div class="list container">
      <ul>
        <router-link v-for="item in productList" :key="item.id" tag="li" :to="'/detail?id='+item.id">
          <p><img :src="item.img[0]" alt=""></p>
          <p>{{item.name}}</p>
        </router-link>
      </ul>
    </div>
    <div class="block">
      <el-pagination layout="prev, pager, next" :total="50"></el-pagination>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './home/header'
import Footer from './home/footer'
export default {
  data () {
    return {
      productList: []
    }
  },
  components: {
    Header,
    Footer
  },
  created () {
    this.getProductList()
  },
  methods: {
    getProductList () {
      this.axios({
        method: 'get',
        url: 'http://localhost:3000/product'
      }).then(res => {
        this.productList = res.data[0].product_list.slice(1, 9)
      })
    }
  }
}
</script>
<style>
.el-pagination{
  text-align: center;
}
.el-pagination .btn-next .el-icon, .el-pagination .btn-prev .el-icon{
  font-size: 30px;
}
.el-pager li{
  font-size: 30px;
  padding: 0 20px;
}
</style>
<style lang="less" scoped>
.banner {
  img {
    width: 100%;
  }
}
.title {
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  .left {
    font-size: 46px;
    color: #01415f;
    border-left: 8px solid #01415f;
    padding-left: 20px;
    margin-bottom: 80px;
  }
  .right {
    p {
      span {
        color: #999;
      }
      a {
        color: #999;
        &:last-child {
          color: #01415f;
          cursor: auto;
        }
        &:hover {
          color: #01415f;
        }
        i {
          padding: 0 10px;
        }
      }
    }
  }
}
.list{
  margin-bottom: 200px;
  ul{
    list-style: none;
    overflow: hidden;
    li{
      float: left;
      width: 23.5%;
      margin:0 2% 2% 0;
      transition: all 1s;
      &:hover{
        box-shadow: 0 3px 20px rgba(0, 0, 0,0.1);
        p{
          &:first-child{
            img{
              transform: scale(1.1);
            }
          }
          &:last-child{
            color: #01415f;
          }
        }
      }
      &:nth-child(4n){
        margin-right: 0;
      }
      p{
        &:first-child{
          height: 420px;
          overflow: hidden;
          img{
            width:100%;
            transition: all 1s;
          }
        }
        &:last-child{
          text-align: center;
          font-size: 30px;
          color: #666;
          padding: 40px 0;
          transition: all 1s;
        }
      }
    }
  }
}
</style>
