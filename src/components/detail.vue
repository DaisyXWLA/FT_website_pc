<template>
  <div>
    <Header></Header>
    <div class="con">
      <div class="mininav">
        <div class="container">
          <p>
            <span>您当前的位置：</span>
            <router-link to="/home">首页<i class="fa fa-angle-right"></i></router-link>
            <router-link to="/product">产品中心<i class="fa fa-angle-right"></i></router-link>
            <router-link :to="$route.path">{{name}}</router-link>
          </p>
        </div>
      </div>
      <div class="detail container">
        <div class="pic">
          <p class="bigpic"><img :src="productImg[0]" alt=""></p>
          <ul>
            <li><img :src="productImg[0]" alt=""></li>
            <li><img :src="productImg[1]" alt=""></li>
            <li><img :src="productImg[2]" alt=""></li>
            <li><img :src="productImg[3]" alt=""></li>
          </ul>
        </div>
        <div class="param">
          <p>{{name}}</p>
          <p>【理论生产率】：{{rate}}</p>
          <p>【搅拌机型号】：{{type}}</p>
          <p>【搅拌机容量】：{{capacity}}</p>
          <p>【搅拌站简介】：{{desc}}</p>
          <p>全国24小时销售热线 : <span>185 3926 9555</span></p>
          <p><i class="fa fa-comments-o"></i>点击咨询</p>
        </div>
      </div>
      <div class="about container">
        <el-tabs v-model="activeName">
          <el-tab-pane label="产品简介" name="first">
            <div class="profile">
              <p>{{desc}}</p>
              <p>{{title}}</p>
              <p v-for="(item,index) in txt" :key="index">{{item}}</p>
            </div>
          </el-tab-pane>
          <el-tab-pane label="性能优势" name="second">
            <ul class="property">
              <li>
                <p><img src="../assets/images/protab1.jpg" alt=""></p>
                <p>
                  <span>四重轴端密封</span>
                  <span>在侧搅拌臂与轴头之间采用二个钢质轴承保护圈,可防止较粗沙进入。在钢圈中开有气道，当往气道通以一定压力的空气时会在侧搅拌臂与轴头接触面处形成一个气压保护垫，使水及泥浆不接近轴头，延长搅拌机使用寿命。</span>
                </p>
              </li>
              <li>
                <p><img src="../assets/images/protab2.jpg" alt=""></p>
                <p>
                  <span>电动润滑油泵</span>
                  <span>采用380V强力电机，可迅速将润滑油泵注至轴头；可使用NLGI 二级或三级润滑油，使轴端密封更好、更省油；采用四个泵芯分别向四个轴头供油，不需使用分流阀，避免了分流阀的堵塞，能保证将黄油供到轴头，减少维修和保养的工作量。</span>
                </p>
              </li>
              <li>
                <p><img src="../assets/images/protab3.jpg" alt=""></p>
                <p>
                  <span>独有的监控系统</span>
                  <span>可监测减速箱油量、温度；可监测卸料泵油量、温度；可监测润滑油泵工作状态；备有监控器和可加设在操作房内的警报器，当运行状态出现异常时警报器自动报警，可实现在操作房内远程监控。</span>
                </p>
              </li>
              <li>
                <p><img src="../assets/images/protab4.jpg" alt=""></p>
                <p>
                  <span>卸料闸</span>
                  <span>采用先进的液压驱动设备，避免了气动门卸料时由于气动不足致使搅拌机无法卸料。卸料闸有多个停留点作一般开关，方便灌注搅拌车。双重卸料方式，停电时，可启用手动卸料控制，安全可靠。</span>
                </p>
              </li>
              <li>
                <p><img src="../assets/images/protab5.jpg" alt=""></p>
                <p>
                  <span>耐磨衬板</span>
                  <span>搅拌筒内部设置有防止磨损的耐磨衬板，使用寿命长，其性能符合JG/T5045.2-93规定，经久耐用，而且方便更换。</span>
                </p>
              </li>
              <li>
                <p><img src="../assets/images/protab6.jpg" alt=""></p>
                <p>
                  <span>减速器</span>
                  <span>减速器及油封系统均是国外标准生产厂专为方泰搅拌机设计生产，更能配合搅拌机运作顺畅，使用寿命长、噪音低、不漏油。</span>
                </p>
              </li>
              <li>
                <p><img src="../assets/images/protab7.jpg" alt=""></p>
                <p>
                  <span>多种搅刀角度</span>
                  <span>目前市场上搅拌臂分别为45°、60°、90°等多种形式，90°搅拌臂适用于水工型搅拌机及商品混凝搅拌机，45°、60°搅拌臂适用于各种用途的搅拌机，方泰不仅可以向用户提供搅拌臂为45°、60°、90°的搅拌机，还开发了多臂型设计的搅拌机以迎合用户的特殊需求，使搅拌更加均匀。</span>
                </p>
              </li>
              <li>
                <p><img src="../assets/images/protab8.jpg" alt=""></p>
                <p>
                  <span>保护箍圈</span>
                  <span>护箍圈采用优质钢材铸造而成，耐磨、耐腐蚀。当搅拌轴转动时可带动保护箍圈转动，通过保护圈和搅拌轴之间的磨擦减少混凝土在搅拌轴表面上的 附着。从而防止混凝土凝固在搅拌轴上，防止混凝土结块。在延长了搅拌轴 的使用寿命的同时减轻了搅拌机马达的负荷，延长了搅拌机的使用寿命。</span>
                </p>
              </li>
            </ul>
          </el-tab-pane>
          <el-tab-pane label="产品参数" name="third">
            <table class="parameter">
              <tr>
                <th colspan="4">{{parameter_title}}</th>
              </tr>
              <tr v-for="(item,index) in parameter_data" :key="index">
                <td>{{item.name1}}</td>
                <td>{{item.value1}}</td>
                <td>{{item.name2}}</td>
                <td>{{item.value2}}</td>
              </tr>
            </table>
          </el-tab-pane>
          <el-tab-pane label="配套设备" name="fourth">
            <table class="equipment">
              <tr>
                <th colspan="3">{{equipment_title}}</th>
              </tr>
              <tr>
                <td>储料系统</td>
                <td>水泥仓用于搅拌站做散装水泥储存的设备，可代替土建料仓，具有防水、防潮、防止水泥流失及环境污染，占地面积小，适用寿命长，造价低等特点。</td>
                <td><img src="../assets/images/eq1.jpg" alt=""></td>
              </tr>
              <tr>
                <td rowspan="2">输送系统</td>
                <td>带式输送机是混凝土搅拌站.理想的高效连续运输设备，具有输送距离长、运量大、连续输送等优点，而且运行可靠，易于实现自动化和集中化控制，拆装十分方便。</td>
                <td><img src="../assets/images/eq2.jpg" alt=""></td>
              </tr>
              <tr>
                <td>螺旋输送机采用优质钢管刚性好；双节距叶片，减少物料输送压缩程度；优质减速箱，重型设计，转矩大、噪音低；可选万向球接，使安装调节转向方便；配品质优良的中吊轴承及尾部轴承，且方便安装。</td>
                <td><img src="../assets/images/eq3.jpg" alt=""></td>
              </tr>
              <tr>
                <td>控制系统</td>
                <td>控制系统是搅拌站的中枢，整机采用计算机控制，既可自动控制，也能手动操作，操作简单，易于掌握。动态面板显示，能清楚了解各部件的运行情况，同时可以存储和打印报表资料。</td>
                <td><img src="../assets/images/eq4.jpg" alt=""></td>
              </tr>
              <tr>
                <td rowspan="2">计量系统</td>
                <td>传感器，称量精确，响应迅速，是实现自动检测和自动控制的首要环节。</td>
                <td><img src="../assets/images/eq5.jpg" alt=""></td>
              </tr>
              <tr>
                <td>气动蝶阀密封严密，动作可靠，结构简单，体积小，重量轻，性价比高。</td>
                <td><img src="../assets/images/eq6.jpg" alt=""></td>
              </tr>
              <tr>
                <td>气动系统</td>
                <td>气动系统是HZS120混凝土搅拌站动作的执行装置，它的作用是按产业微机所发出的的指令及时开关各仓门，对水泥仓内水泥破拱，对添加剂吹起搅拌，保证各种骨料、水泥、添加剂的精确计量，并完成成品料的装车任务。</td>
                <td><img src="../assets/images/eq7.jpg" alt=""></td>
              </tr>
            </table>
          </el-tab-pane>
          <el-tab-pane label="应用案例" name="five">
            <ul class="case">
              <router-link :to="'/detail?id='+item.id" tag="li" v-for="item in productList" :key="item.id">
                <p><img :src="item.img[0]" alt=""></p>
                <p>{{item.name}}</p>
              </router-link>
            </ul>
          </el-tab-pane>
        </el-tabs>
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
  components: {
    Header,
    Footer
  },
  data () {
    return {
      activeName: 'first',
      id: this.$route.query.id,
      productImg: [],
      name: '',
      rate: '',
      type: '',
      capacity: '',
      desc: '',
      title: '',
      txt: [],
      parameter_data: [],
      parameter_title: '',
      equipment_title: '',
      productList: []
    }
  },
  created () {
    // console.log(this.id)
    this.getProductData()
    this.getProductList()
  },
  mounted () {
    $('.detail>.pic>ul>li>img').mouseenter(function () {
      $('.detail>.pic>.bigpic>img').attr('src', this.src)
      $(this).parent().css('border', '1px solid #01415f').siblings().css('border', '1px solid #ccc')
    })
  },
  methods: {
    getProductData () {
      this.axios({
        method: 'get',
        url: `http://localhost:3000/productInfo?id=${this.id}`
      }).then(res => {
        // console.log(res.data.data.img)
        this.productImg = res.data.data.img
        this.name = res.data.data.name
        this.rate = res.data.data.rate
        this.type = res.data.data.type
        this.capacity = res.data.data.capacity
        this.desc = res.data.data.desc
        this.title = res.data.data.profile[0].feature_title
        this.txt = res.data.data.profile[0].feature
        this.parameter = res.data.data.parameter[0]
        this.parameter_data = res.data.data.parameter[0].parameter_data
        this.parameter_title = res.data.data.parameter[0].parameter_title
        this.equipment_title = res.data.data.equipment[0].eq_title
      })
    },
    getProductList () {
      this.axios({
        method: 'get',
        url: 'http://localhost:3000/product'
      }).then(res => {
        this.productList = res.data[0].product_list
      })
    }
  }
}
</script>
<style>
.el-tabs__nav{
  width: 100%;
}
.el-tabs__item {
  color: #999;
  font-size: 36px;
  width: 20%;
  text-align: center;
  margin-bottom: 20px;
  transition: all 0.5s;
}
.el-tabs__item.is-active {
  color: #01415f;
}
.el-tabs__item:hover {
  color: #01415f;
}
.el-tabs__active-bar {
  background: #01415f;
  height: 4px;
}
.el-tabs__content {
  margin-top: 50px;
}
</style>
<style lang="less" scoped>
.con {
  .mininav {
    border-bottom: 1px solid #eee;
    overflow: hidden;
    p{
      line-height: 100px;
      float: right;
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
  .detail{
    display:flex;
    margin-top: 100px;
    .pic{
      margin-right: 60px;
      .bigpic{
        width: 1200px;
        height: 750px;
        overflow:hidden;
        img{
          width: 100%;
        }
      }
      ul{
        margin-top: 40px;
        list-style: none;
        display: flex;
        width: 1200px;
        li{
          width:24.25%;
          height: 220px;
          margin-right: 1%;
          border: 1px solid #ccc;
          padding: 5px;
          box-sizing: border-box;
          overflow: hidden;
          &:last-child{
            margin-right: 0;
          }
          img{
            width: 100%;
            display: block;
          }
        }
      }
    }
    .param{
      width: 100%;
      p{
        font-size: 32px;
        line-height: 100px;
        text-align: justify;
        &:first-child{
          font-size: 50px;
          color: #01415f;
          border-bottom: 1px solid #ccc;
          margin-bottom:50px;
        }
        &:nth-child(5){
          line-height: 70px;
        }
        &:nth-child(6){
          padding: 30px 0;
          span{
            font-weight: bold;
            color:red;
          }
        }
        &:nth-child(7){
          width:300px;
          line-height: 80px;
          text-align: center;
          background: #ccc;
          transition: 0.5s;
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
  .about{
    margin-top: 160px;
    .profile{
      p{
        line-height: 80px;
        font-size: 30px;
        &:first-child{
          font-size: 30px;
          line-height: 60px;
        }
        &:nth-child(2){
          font-size: 32px;
          font-weight: bold;
          line-height: 100px;
        }
      }
    }
    .property{
      list-style: none;
      overflow: hidden;
      li{
        width:48%;
        float: left;
        display: flex;
        &:nth-child(2n){
          margin:0 0 1% 2%;
        }
        p{
          &:first-child{
            width: 30%;
            margin-right: 2%;
            img{
              width:100%;
            }
          }
          &:last-child{
            width: 68%;
            span{
              display: block;
              font-size: 30px;
              &:first-child{
                font-size: 32px;
                font-weight: bold;
                padding-bottom: 20px;
              }
            }
          }
        }
      }
    }
    .parameter{
      border-collapse: collapse;
      width: 100%;
      font-size: 32px;
      line-height: 100px;
      th{
        font-size: 34px;
        border:1px solid #ccc;
      }
      td{
        border:1px solid #ccc;
        padding:0 32px;
      }
    }
    .equipment{
      border-collapse: collapse;
      width: 100%;
      font-size: 32px;
      line-height: 60px;
      tr{
        th{
          font-size: 34px;
          border:1px solid #ccc;
          line-height: 100px;
        }
        td{
          border:1px solid #ccc;
          &:first-child{
            width:20%;
            text-align: center;
            font-weight: bold;
          }
          &:nth-child(2){
            width:60%;
            text-align: justify;
            text-indent: 2em;
            padding: 60px;
          }
          &:last-child{
            width: 20%;
            text-align: center;
          }
        }
        &:nth-child(4){
          td{
            &:first-child{
              text-align: justify;
              text-indent: 2em;
              padding: 60px;
              font-weight: normal;
            }
          }
        }
        &:nth-child(6){
          td{
            &:nth-child(2){
              text-align: center;
            }
          }
        }
        &:nth-child(7){
          td{
            &:first-child{
              font-weight: normal;
            }
          }
        }
      }
    }
    .case{
      list-style: none;
      overflow: hidden;
      li{
        float: left;
        width: 23.5%;
        margin-right: 2%;
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
              color:#01415f;
            }
          }
        }
        &:nth-child(4n){
          margin-right: 0;
        }
        p{
          &:first-child{
            height: 340px;
            overflow: hidden;
            img{
              width: 100%;
              transition: all 1s;
            }
          }
          &:last-child{
            font-size: 30px;
            color: #999;
            text-align: center;
            line-height: 100px;
            transition: all 0.5s;
          }
        }
      }
    }
  }
}
</style>
