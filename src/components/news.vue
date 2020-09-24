<template>
  <div>
    <Header></Header>
    <div class="banner"><img src="../assets/images/s-banner-culture.jpg" alt=""></div>
    <div class="con container">
      <div class="title">
        <div class="left">{{$route.name}}</div>
        <div class="right">
          <p>
            <span>您当前的位置：</span>
            <router-link to="/home">首页<i class="fa fa-angle-right"></i></router-link>
            <router-link to="/news">新闻中心<i class="fa fa-angle-right"></i></router-link>
            <router-link :to="$route.path">{{$route.name}}</router-link>
          </p>
        </div>
      </div>
      <div class="list">
        <div class="left">
          <ul class="menu">
            <li>分类</li>
            <router-link to="/news/company_news" tag="li"><span>公司新闻</span></router-link>
            <router-link to="/news/industry_trends" tag="li"><span>行业动态</span></router-link>
            <router-link to="/news/product_knowledge" tag="li"><span>产品知识</span></router-link>
          </ul>
          <ul class="contact">
            <li>联系我们</li>
            <li><img src="../assets/images/left_contact.jpg" alt=""></li>
            <li>郑州方泰机械设备有限公司</li>
            <li>手机：185 3926 9555</li>
            <li>邮箱：contact@cljbjx.com</li>
            <li>总厂地址：河南恒信机械产业园</li>
            <li>
              <a href="http://pct.zoosnet.net/lr/chatpre.aspx?id=pct13581584&lng=cn&r=&r=http%3A//www.zzebjt.com/&p=http%3A//www.zzebjt.com/lxwm/&cid=301a387c210f4cf499367e3c314722f5&sid=e1134f88717d43c3bbccf3a19b80bbee"><i class="fa fa-comments-o"></i>在线咨询</a>
              <a href="http://pct.zoosnet.net/lr/chatpre.aspx?id=pct13581584&lng=cn&r=&r=http%3A//www.zzebjt.com/&p=http%3A//www.zzebjt.com/lxwm/&cid=301a387c210f4cf499367e3c314722f5&sid=e1134f88717d43c3bbccf3a19b80bbee"><i class="fa fa-envelope-o"></i>获取报价</a>
            </li>
          </ul>
        </div>
        <router-view class="right"></router-view>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './home/header'
import Footer from './home/footer'
export default {
  components: {
    Header,
    Footer
  }
}
</script>
<style lang="less" scoped>
.banner{
  img{
    width: 100%;
  }
}
.con{
  margin-top: 100px;
  .title{
    display: flex;
    justify-content: space-between;
    .left{
      font-size: 46px;
      color: #01415f;
      border-left: 8px solid #01415f;
      padding-left: 20px;
      margin-bottom: 80px;
    }
    .right{
      p{
        span{
          color:#999;
        }
        a{
          color:#999;
          &:last-child{
            color: #01415f;
            cursor: auto;
          }
          &:hover{
            color: #01415f;
          }
          i{
            padding: 0 10px;
          }
        }
      }
    }
  }
  .list{
    display:flex;
    justify-content: space-between;
    .left{
      width: 400px;
      margin-right: 100px;
      .menu{
        width: 400px;
        list-style: none;
        margin-bottom: 200px;
        li{
          cursor: pointer;
          text-align: center;
          border-bottom: 1px solid rgba(0, 0, 0, 0.3);
          line-height: 100px;
          font-size: 30px;
          color: #999;
          transition: all 0.5s;
          span{
            display: inline-block;
            transition: all 0.5s;
          }
          &:first-child{
            cursor:auto;
            background: #01415f;
            line-height: 100px;
            color:#fff;
            font-size: 36px;
            &:hover{
              color:#fff;
            }
          }
          &:hover{
            color: #01415f;
            border-bottom: 1px solid #01415e;
            span{
              transform: translateX(20px);
            }
          }
        }
        .active{
          color: #01415e;
          border-bottom: 1px solid #01415f;
        }
      }
      .contact{
        list-style: none;
        li{
          line-height: 50px;
          img{
            width: 100%;
          }
          &:first-child{
            font-size: 30px;
            text-align: center;
            background: #01415f;
            line-height: 80px;
            color: #fff;
          }
          &:last-child{
            margin-top: 30px;
            display: flex;
            justify-content: space-between;
            a{
              display: inline-block;
              width: 190px;
              line-height: 60px;
              background: #d1d1d1;
              text-align: center;
              color: #333;
              border-radius: 4px;
              transition: all 0.5s;
              &:hover{
                color: #fff;
                background: #01415f;
              }
              i{
                padding-right: 10px;
              }
            }
          }

        }
      }
    }
    .right{
      width: 100%;
    }
  }
}
</style>
