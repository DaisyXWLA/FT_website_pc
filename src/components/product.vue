<template>
  <div>
    <Header></Header>
    <div class="banner"><img src="../assets/images/s-banner-ability.jpg" alt=""></div>
    <div class="con container">
      <div class="title">
        <div class="left">{{$route.name}}</div>
        <div class="right">
          <p>
            <span>您当前的位置：</span>
            <router-link to="/home">首页<i class="fa fa-angle-right"></i></router-link>
            <router-link to="/product">产品中心<i class="fa fa-angle-right"></i></router-link>
            <router-link :to="$route.path">{{$route.name}}</router-link>
          </p>
        </div>
      </div>
      <div class="list">
        <div class="left">
          <div class="menu">
            <p>产品类别</p>
            <ul>
              <router-link to="/product/hntjbz" tag="li" class="name">
                <span>混凝土搅拌站<i class="fa fa-angle-right"></i></span>
                <ul class="subMenu">
                  <router-link :to="'/detail?id='+item.id" tag="li" v-for="item in hntjbz" :key="item.id">
                    {{item.name}}
                  </router-link>
                </ul>
              </router-link>
            </ul>
            <ul>
              <router-link to="/product/hntjbj" tag="li" class="name">
                <span>混凝土搅拌机<i class="fa fa-angle-right"></i></span>
                <ul class="subMenu">
                  <router-link :to="'/detail?id='+item.id" tag="li" v-for="item in hntjbj" :key="item.id">
                    {{item.name}}
                  </router-link>
                </ul>
              </router-link>
            </ul>
            <ul>
              <router-link to="/product/hntplj" tag="li" class="name">
                <span>混凝土配料机<i class="fa fa-angle-right"></i></span>
                <ul class="subMenu">
                  <router-link :to="'/detail?id='+item.id" tag="li" v-for="item in hntplj" :key="item.id">
                    {{item.name}}
                  </router-link>
                </ul>
              </router-link>
            </ul>
            <ul>
              <router-link to="/product/lxssj" tag="li" class="name">
                <span>螺旋输送机<i class="fa fa-angle-right"></i></span>
                <ul class="subMenu">
                  <router-link :to="'/detail?id='+item.id" tag="li" v-for="item in lxssj" :key="item.id">
                    {{item.name}}
                  </router-link>
                </ul>
              </router-link>
            </ul>
            <ul>
              <router-link to="/product/snc" tag="li" class="name">
                <span>水泥仓<i class="fa fa-angle-right"></i></span>
                <ul class="subMenu">
                  <router-link :to="'/detail?id='+item.id" tag="li" v-for="item in snc" :key="item.id">
                    {{item.name}}
                  </router-link>
                </ul>
              </router-link>
            </ul>
          </div>
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
import $ from 'jquery'
export default {
  data () {
    return {
      hntjbz: [],
      hntjbj: [],
      hntplj: [],
      lxssj: [],
      snc: []
    }
  },
  components: {
    Header,
    Footer
  },
  created () {
    this.getProductList()
  },
  mounted () {
    $('.name').first().children('.subMenu').css('display', 'block')
    $('.name').first().children('span').children('i').addClass('rotate')
    $('span').click(function () {
      $(this).siblings('.subMenu').slideToggle()
      $(this).children('i').toggleClass('rotate')
    })
  },
  methods: {
    getProductList () {
      this.axios({
        method: 'get',
        url: 'http://localhost:3000/product'
      }).then(res => {
        this.hntjbz = res.data[0].product_list
        this.hntjbj = res.data[1].product_list
        this.hntplj = res.data[2].product_list
        this.lxssj = res.data[3].product_list
        this.snc = res.data[4].product_list
      })
    }
  }
}
</script>
<style lang="less" scoped>
.banner{
  img{
    width: 100%;
  }
}
.active{
  color: #01415f!important;
}
.rotate{
  transform: rotate(90deg);
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
      margin-right: 100px;
      .menu{
        width: 400px;
        p{
          font-size: 36px;
          color: #fff;
          text-align: center;
          line-height: 100px;
          background: #01415f;
        }
        ul{
          list-style: none;
          .name{
            cursor: pointer;
            font-size: 36px;
            color: #999;
            &:hover{
              color: #01415f;
              border-color: #01415f;
            }
            span{
              display: block;
              border-bottom:1px solid #ccc;
              transition: all 0.5s;
              width: 100%;
              line-height: 100px;
              padding: 0 40px;
              overflow: hidden;
              i{
                padding: 34px 0;
                float: right;
              }
            }
            .subMenu{
              display: none;
              font-size: 26px;
              color:#999;
              li{
                padding: 20px 40px;
                &:last-child{
                  border-bottom: 1px solid #ccc;
                }
                &:hover{
                  color: #01415f;
                }
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
