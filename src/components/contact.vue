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
            <router-link :to="$route.path">{{$route.name}}</router-link>
          </p>
        </div>
      </div>
      <div class="contact">
        <ul>
          <li><img src="../assets/images/company.jpg" alt=""></li>
          <li>
            <p>郑州方泰机械设备有限公司</p>
            <p>官方统一手机热线：185 3926 9555</p>
            <p>24小时服务热线：0371-8881 2288</p>
            <p>生产基地：河南恒信机械产业园</p>
            <p>邮箱：group@cljbjx.com</p>
            <p><a href="http://pct.zoosnet.net/lr/chatpre.aspx?id=pct13581584&lng=cn&r=&r=http%3A//www.zzebjt.com/&p=http%3A//www.zzebjt.com/lxwm/&cid=301a387c210f4cf499367e3c314722f5&sid=e1134f88717d43c3bbccf3a19b80bbee"><i class="fa fa-envelope-o"></i>获取报价</a></p>
          </li>
        </ul>
      </div>
      <div class="map">
        <img src="../assets/images/map.png" alt="">
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  .contact{
    ul{
      list-style: none;
      display: flex;
      height: 500px;
      overflow: hidden;
      align-items:center;
      &:hover{
        li{
          &:last-child{
            p{
              &:last-child{
                background: #01415f;
                a{
                  color: #fff;
                }
              }
            }
          }
        }
      }
      li{
        &:first-child{
          width: 50%;
          margin-right: 50px;
          img{
            width: 100%;
          }
        }
        &:last-child{
          p{
            line-height: 60px;
            font-size: 34px;
            letter-spacing: 2px;
            &:first-child{
              font-size: 60px;
              color: #01415f;
              font-weight: bold;
              margin-bottom: 50px;
            }
            &:last-child{
              width: 300px;
              line-height: 80px;
              text-align: center;
              background: #ccc;
              border-radius: 4px;
              margin-top: 30px;
              transition: all 1s;
              a{
                font-size: 30px;
                color: #333;
                transition: all 1s;
                i{
                  padding-right: 10px;
                }
              }
            }
          }
        }
      }
    }
  }
  .map{
    margin-top: 100px;
    img{
      width: 100%;
    }
  }
}
</style>
