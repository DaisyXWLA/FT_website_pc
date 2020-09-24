<template>
  <div>
    <ul class="list">
      <router-link :to="'/detail?id='+item.id" tag="li" v-for="item in productList" :key="item.id">
        <p><img :src="item.img[0]" alt=""></p>
        <p>{{item.name}}</p>
      </router-link>
    </ul>
    <!-- <div class="block">
      <el-pagination layout="prev, pager, next" :total="50"></el-pagination>
    </div> -->
  </div>
</template>
<script>
export default {
  data () {
    return {
      productList: []
    }
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
        this.productList = res.data[3].product_list
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
.list{
  list-style:none;
  overflow: hidden;
  li{
    float: left;
    width: 30%;
    margin:0 5% 5% 0;
    transition: all 1s;
    &:hover{
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
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
    &:nth-child(3n){
      margin-right: 0;
    }
    p{
      &:first-child{
        height: 390px;
        overflow: hidden;
        img{
          width: 100%;
          transition: all 1s;
        }
      }
      &:last-child{
        font-size: 30px;
        color:#999;
        padding: 30px 0;
        text-align: center;
        transition: all 0.5s;
      }
    }
  }
}
</style>
