<template>
  <div class="news container">
    <div class="title">新闻中心</div>
    <div class="con">
      <div class="left">
        <div class="block">
          <el-carousel :interval="2000" arrow="always">
            <el-carousel-item  v-for="item in imgList" :key="item.id">
              <img :src="item.url" alt="">
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <div class="right">
        <el-tabs v-model="activeName">
          <el-tab-pane label="公司新闻" name="first">
            <ul>
              <router-link :to="'/newsdetail?id='+news.news_id" v-for="(news,index) in companyNews" :key="index" tag="li"><i class="fa fa-caret-right"></i>{{news.news_title}}<span>{{news.news_time}}</span></router-link>
            </ul>
          </el-tab-pane>
          <el-tab-pane label="行业动态" name="second">
            <ul>
              <router-link :to="'/newsdetail?id='+trends.news_id" v-for="(trends,index) in industryTrends" :key="index" tag="li"><i class="fa fa-caret-right"></i>{{trends.news_title}}<span>{{trends.news_time}}</span></router-link>
            </ul>
          </el-tab-pane>
          <el-tab-pane label="产品知识" name="third">
            <ul>
              <router-link :to="'/newsdetail?id='+knowledge.news_id" v-for="(knowledge,index) in productKnowledge" :key="index" tag="li"><i class="fa fa-caret-right"></i>{{knowledge.news_title}}<span>{{knowledge.news_time}}</span></router-link>
            </ul>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <div class="btn">
      <router-link to="/news" tag="button">查看更多<i class="fa fa-angle-double-right"></i></router-link>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      imgList: [
        {id: 0, url: require('@/assets/images/1.jpg')},
        {id: 1, url: require('@/assets/images/2.jpg')},
        {id: 2, url: require('@/assets/images/3.jpg')},
        {id: 3, url: require('@/assets/images/4.jpg')},
        {id: 4, url: require('@/assets/images/5.jpg')},
        {id: 5, url: require('@/assets/images/6.jpg')}
      ],
      activeName: 'first',
      companyNews: [],
      industryTrends: [],
      productKnowledge: []
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
        this.companyNews = res.data[0].news_list
        this.industryTrends = res.data[1].news_list
        this.productKnowledge = res.data[0].news_list
        // console.log(this.companyNews)
      })
    }
  }
}
</script>
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
  .left .el-carousel{
    width: 1100px;
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
  .el-tabs__item{
    color: #999;
    font-size: 36px;
    padding:0 100px 50px 0;
    transition: all 0.5s;
  }
  .el-tabs__item.is-active{
    color: #01415f;
  }
  .el-tabs__item:hover{
    color:#01415f;
  }
  .el-tabs__active-bar{
    background: #01415f;
    height: 4px;
  }
  .el-tabs__content{
    margin-top: 50px;
  }
</style>
<style lang="less" scoped>
.news{
  margin-top: 200px;
  .title{
    font-size: 46px;
    color: #01415f;
    border-left: 8px solid #01415f;
    padding-left: 20px;
    margin-bottom: 80px;
  }
  .con{
    display: flex;
    .left{
      margin-right: 100px;
    }
    .right{
      width: 1200px;
      ul{
        list-style: none;
        li{
          font-size: 30px;
          color: #888;
          line-height: 70px;
          i{
            padding-right: 20px;
          }
          span{
            font-size: 26px;
            color:#b6b6b6;
            float: right;
          }
          &:hover{
            color: #01415f;
            cursor: pointer;
            span{
              color: #01415f;
            }
          }
        }
      }
    }
  }
  .btn{
    text-align: center;
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
