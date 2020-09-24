<template>
  <div>
    <div class="nav container">
      <div class="left">产品中心</div>
      <div class="right">
        <router-link to="" tag="p">全部</router-link>
        <router-link :to="{path:'/product/hntjbz'}" tag="p">混凝土搅拌站</router-link>
        <router-link :to="{path:'/product/hntjbj'}" tag="p">混凝土搅拌机</router-link>
        <router-link to="/product" tag="p">更多</router-link>
      </div>
    </div>
    <div class="list container">
      <ul>
        <router-link v-for="(item,index) in productList" :key="index" tag="li" :to="'/detail?id='+item.id">
          <p><img :src="item.img[0]" alt=""></p>
          <p>{{item.name}}</p>
        </router-link>
      </ul>
      <router-link to="/product" tag="button">查看更多<i class="fa fa-angle-double-right"></i></router-link>
    </div>
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

  },
  mounted () {
    this.getList()
  },
  methods: {
    getList () {
      this.axios({
        method: 'get',
        url: 'http://localhost:3000/product'
      }).then(res => {
        // console.log(res.data)
        this.productList = res.data[0].product_list.slice(0, 3)
      })
    }
  }
}
</script>
<style lang="less" scoped>
  .nav{
    margin-top: 100px;
    display: flex;
    justify-content: space-between;
    font-size: 30px;
    color: #999;
    .left{
      font-size: 46px;
      color: #01415f;
      border-left: 8px solid #01415f;
      padding-left: 20px;
    }
    .right{
      display: flex;
      p{
        margin-left: 20px;
        padding: 15px 30px;
        &:first-child{
          color: #fff;
          background: #01415f;
        }
        &:nth-child(2), &:nth-child(3), &:nth-child(4){
          cursor: pointer;
          transition: all 0.5s;
          &:hover{
            color: #fff;
            background: #01415f;
          }
        }
        &:nth-child(4){
          &:hover{
            color: #01415f;
            background: none;
          }
        }
      }
    }
  }
  .list{
    margin-top: 80px;
    text-align:center;
    ul{
      list-style: none;
      display: flex;
      justify-content: space-around;
      li{
        width: 760px;
        overflow: hidden;
        text-align: center;
        transition: all 0.5s;
        p{
          &:first-child{
            height: 500px;
            overflow: hidden;
            img{
              width: 100%;
              transition: all 0.5s;
            }
          }
          &:last-child{
            font-size: 36px;
            color: #999;
            padding: 50px 0;
            transition: all 0.5s;
          }
        }
        &:hover{
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          p{
            &:first-child{
              img{
                transform: scale(1.1)
              }
            }
            &:last-child{
              color: #01415f;
            }
          }
        }
      }
    }
    button{
      width: 460px;
      line-height: 90px;
      border: 1px solid #ccc;
      color: #999;
      font-size: 30px;
      margin-top: 120px;
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

</style>
