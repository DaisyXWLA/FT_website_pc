<template>
  <div>
    <div class="list">
      <ul v-for="item in newsList" :key="item.news_id">
        <li><img :src="item.news_pic" alt=""></li>
        <li>
          <p>{{item.news_time}}</p>
          <p>{{item.news_title}}</p>
          <p>{{item.news_con}}</p>
          <router-link :to="'/newsdetail?id='+item.news_id" tag="button">查看更多</router-link>
        </li>
      </ul>
    </div>
    <div class="block">
      <el-pagination layout="prev, pager, next" :total="20"></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      newsList: []
    }
  },
  created () {
    this.getNewsList()
  },
  methods: {
    getNewsList () {
      this.axios({
        method: 'get',
        url: 'http://localhost:3000/news'
      }).then(res => {
        this.newsList = res.data[0].news_list.slice(1, 6)
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
  margin-bottom: 200px;
  ul{
    list-style: none;
    display: flex;
    height: 320px;
    margin-bottom: 50px;
    li{
      &:first-child{
        width: 25%;
        // height: 320px;
        overflow: hidden;
        margin-right: 50px;
        img{
          width: 100%;
          transition: all 1s;
        }
      }
      &:last-child{
        width: 75%;
        p{
          &:first-child{
            font-size: 36px;
            color: #999;
          }
          &:nth-child(2){
            font-size: 38px;
            color: #01415f;
            position: relative;
            margin:10px 0 30px;
            &::after{
              content: '';
              width: 80px;
              height: 4px;
              background: #01415f;
              position: absolute;
              bottom: -5px;
              left: 0;
            }
          }
           &:nth-child(3){
             color: #999;
             display: -webkit-box;
             overflow: hidden;
             text-overflow: ellipsis;
             -webkit-box-orient: vertical;
             -webkit-line-clamp:2;
             transition: all 0.5s;
           }
        }
        button{
          background: none;
          border: 1px solid #ccc;
          width: 220px;
          line-height: 56px;
          color: #666;
          margin-top: 30px;
          transition: all 0.5s;
        }
      }
    }
    &:hover{
      li{
        &:first-child{
          img{
            transform: scale(1.1);
          }
        }
        &:last-child{
          p{
            &:nth-child(3){
              color: #666;
            }
          }
          button{
            border-color: #01415f;
            background: #01415f;
            color: #fff;
            cursor: pointer;
          }
        }
      }
    }
  }
}

</style>
