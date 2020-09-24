<template>
  <div class="con container">
    <div class="title">工程案例</div>
    <div class="list">
      <ul>
        <router-link v-for="(item,index) in caselist" :key="index" :to="'/detail?id='+item.id" tag="li">
          <p><img :src="item.img[0]" alt=""></p>
          <p>{{item.name}}</p>
        </router-link>
      </ul>
      <router-link to="/case" tag="button">查看更多<i class="fa fa-angle-double-right"></i></router-link>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      caselist: []
    }
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {
      this.axios({
        method: 'get',
        url: 'http://localhost:3000/product'
      }).then(res => {
        // console.log(res.data)
        this.caselist = res.data[0].product_list.slice(1, 5)
      })
    }
  }

}
</script>
<style lang="less" scoped>
.con{
  margin-top: 200px;
  .title{
    font-size: 46px;
    color: #01415f;
    border-left: 8px solid #01415f;
    padding-left: 20px;
    margin-bottom: 80px;
  }
  .list{
    margin-top: 80px;
    text-align:center;
    ul{
      list-style: none;
      display: flex;
      justify-content: space-around;
      li{
        width: 580px;
        overflow: hidden;
        text-align: center;
        transition: all 0.5s;
        p{
          &:first-child{
            height: 400px;
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
}

</style>
