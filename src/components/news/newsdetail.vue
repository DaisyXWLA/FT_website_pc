<template>
  <div>
    <div class="detail">
      <p>{{news_title}}</p>
      <p>
        <span>责任编辑：{{news_editor}}</span>
        <span>来源：{{news_source}}</span>
      </p>
      <p v-for="(item,index) in news_con" :key="index">{{item}}</p>
    </div>
    <div class="contact">
      <p>郑州方泰 专业搅拌设备生产厂家</p>
      <p>
        <span>立即拨打电话享优惠</span>
        <span>销售热线：185 3926 9555 (24小时)</span>
        <span><a href="http://pct.zoosnet.net/lr/chatpre.aspx?id=pct13581584&lng=cn&r=&r=http%3A//www.zzebjt.com/&p=http%3A//www.zzebjt.com/lxwm/&cid=301a387c210f4cf499367e3c314722f5&sid=e1134f88717d43c3bbccf3a19b80bbee">点击咨询报价</a></span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      id: this.$route.query.id,
      news_title: '',
      news_time: '',
      news_editor: '',
      news_source: '',
      news_pic: '',
      news_con: ''
    }
  },
  created () {
    this.getNewsInfo()
  },
  methods: {
    getNewsInfo () {
      this.axios({
        method: 'get',
        url: `http://localhost:3000/newsInfo?id=${this.id}`
      }).then(res => {
        this.news_title = res.data.data.news_title
        this.news_time = res.data.data.news_time
        this.news_editor = res.data.data.news_editor
        this.news_source = res.data.data.news_source
        this.news_pic = res.data.data.news_pic
        this.news_con = res.data.data.news_con
      })
    }
  }
}
</script>
<style lang="less" scoped>
.detail{
  p{
    font-size: 30px;
    line-height: 70px;
    text-indent: 2em;
    &:first-child{
      font-size: 50px;
      color: #01415f;
      text-align: center;
      padding-bottom: 50px;
      text-indent: 0;
    }
    &:nth-child(2){
      font-size: 26px;
      padding-bottom: 30px;
      text-indent: 0;
      span{
        color: #999;
        padding-right: 20px;
      }
    }
  }
}
.contact{
  margin-top: 50px;
  height: 700px;
  padding: 80px 0;
  background: #EFE2C0;
  text-align: center;
  position: relative;
  P{
    &:first-child{
      font-size: 56px;
    }
    &:nth-child(2){
      width: 1600px;
      height: 350px;
      border: 8px dashed #cc970f;
      position: absolute;
      top: 230px;
      left: 50%;
      transform: translateX(-50%);
      span{
        display: block;
        &:first-child{
          font-size: 50px;
          font-weight: bold;
          background: #EFE2C0;
          padding:0 50px;
          position: absolute;
          top: -40px;
          left: 50%;
          transform: translateX(-50%);
        }
        &:nth-child(2){
          margin-top: 60px;
          font-size: 70px;
          color: #c50f26;
          font-weight: bold;
        }
        &:last-child{
          font-size: 40px;
          color: #fff;
          background: #c50f26;
          width: 500px;
          line-height: 100px;
          margin: 20px auto;
          transition: all 1s;
          a{
            color: inherit;
          }
          &:hover{
            cursor: pointer;
            background: #930002;
          }
        }
      }
    }
  }
}
</style>
