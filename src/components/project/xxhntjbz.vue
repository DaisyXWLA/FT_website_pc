<template>
  <div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="小型站简介" name="first">
        <div class="txt">
          <h3>商混站电源的标准</h3>
          <p>系统采用380V、50HZ三相四线制（TN-S)供电。</p>
          <h3>商混站操作手职责</h3>
          <p>负责混凝土搅拌站的操作控制。操作人员必须是经过培训的熟练工人，操作时应情绪稳定、头脑清醒、反应敏捷。</p>
          <h3>商混站设备动作部件</h3>
          <p>混凝土甲板战主要部件包括搅拌主机、平匹带机、斜皮带机等，设备在运行时，请远离他们，以免及其伤人。</p>
          <h3>商混站控制系统的操作与检查</h3>
          <p>1.请不要在雷电天气生产，应关闭系统并断开总电源；</p>
          <p>2.搅拌主机及传送带避免带负荷启动；</p>
          <p>3.请定期将数据备份到其他存储介质；</p>
          <p>4.更换传感器后，秤必须重新标定；</p>
          <p>5.合上动力柜里的总电源开关及其它需要的断路器，关上柜门，旋转柜门上的电压万能转换开关，观察各相电压是否正常。</p>
        </div>
      </el-tab-pane>
      <el-tab-pane label="小型站组成" name="second">
        <div class="txt">
          <h2>商品混凝土搅拌站由搅拌系统，骨料供给系统，粉料储存系统，计量系统，控制系统和外配套设备组成。</h2>
          <h3><i class="fa fa-circle"></i>搅拌系统</h3>
          <p>强制式搅拌机是国内外搅拌站使用的主流，它可以搅拌流动性、半干硬性和干硬性等多种混凝土。方泰建机商品混凝土搅拌机多为双卧轴强制式搅拌机，其综合使用性能更好。</p>
          <h3><i class="fa fa-circle"></i>骨料供给系统</h3>
          <p>骨料供给系统由骨料储存仓、骨料计量斗及骨料输送三个部分组成。</p>
          <h3><i class="fa fa-circle"></i>粉料输送系统</h3>
          <p>混凝土可用的粉料主要是水泥、粉煤灰和矿粉。普遍采用的粉料输送方式是螺旋输送机输送。</p>
          <h3><i class="fa fa-circle"></i>液料输送系统</h3>
          <p>主要指水和液体外加剂，它们是分别由水泵输送的。</p>
          <h3><i class="fa fa-circle"></i>计量系统</h3>
          <p>计量系统是影响混凝土质量和混凝土生产成本的关键部件，主要分为骨料称量、粉料称量和液体称量三部分。</p>
          <h3><i class="fa fa-circle"></i>控制系统</h3>
          <p>商混站的控制系统是整套设备的中枢神经。控制系统根据用户不同要求和搅拌站的大小而有不同的功能和配制，一般情况下施工现场可用的小型搅拌站控制系统简单一些，而大型搅拌站的系统相对复杂。</p>
        </div>
      </el-tab-pane>
      <el-tab-pane label="小型站选购事项" name="third">
        <div class="txt">
          <p><strong>1.根据施工混凝土的性能标号来选择用什么样的搅拌主机。</strong></p>
        <p><strong>2.根据施工混凝土的任务量大小及其工期长短来选择用多大规格的搅拌站。</strong></p>
        <p><strong>3.施工环境和施工对象：</strong><br/>在选择购买混凝土搅拌站时，应充分考虑施工对象和施工环境的影响，从而保证施工顺利和施工质量。在下列情况下我们建议您最好有备无患：<br/>
          <span>a.当工地需一次性浇注的量较大（按可选搅拌需搅拌12小时以上），质量要求较高，且附近没有可增援的搅拌站时，最好选择两台规格小一点的搅拌站，或者选择一主一副的双机配制。</span><br/>
          <span>b.当工地交通不便，维修人员进出工地需要花费大量时间时，最好选择用相同较小规格的双机站，或准备足够的备件，从而保证施工进度顺利。</span><br/>
          <span>c.当施工地较分散，但工地之间距离不太远，混凝土输送车的输送半径不超过半小时车程，翻斗车输送不超过10分钟车程。最好采用多工号集中搅拌，以提高搅拌站的利用率和施工经济效益。</span>
        </p>
        <p><strong>4.操作人员素质：</strong>小型搅拌站对操作维修人员要求较低。大型混凝土搅拌站结构复杂，自动化程度高，对操作人员的要求较高。所以您在购买搅拌站时除考虑前面几项因素之外，还应考虑本条因素。</p>
        <p><strong>5.配制选择：</strong>在一般情况下，生产厂家有成熟的产品配制，如规格、数量、品种等。您在产品订购时可提出您的特殊要求。我们会尽力满足您的要求。</p>
        </div>
      </el-tab-pane>
      <el-tab-pane label="小型站常见问题" name="fourth">
        <div class="txt">
          <h3>1.混凝土搅拌机械好安装么？</h3>
          <p>答：如果是单机设备，一般都比较简单，如果是成套设备，生产厂家多会安排技术人员现场指导安装和调试，并进行设备的操作，维护等技术培训。</p>
          <h3>2.一般混凝土搅拌站需要建多大的功率?</h3>
          <p>答：搅拌站的用电功率，和选择的搅拌站型号以及配置有直接关系，有一个主要的原则，就是变压器的选择，一定要稍大于所有电器功率只和，确保变压器不会超负荷运转。</p>
          <h3>3.混凝土搅拌站税率是多少？</h3>
          <p>答：根据其经营规模的大小而定，详情咨询当地税务单位。</p>
          <h3>4.混凝土搅拌站选址有什么要求？</h3>
          <p>答：场地选择应该遵循，土地平整，交通运输便利，距离施工现场较近，远离居民区，临近原材料地等原则。</p>
          <h3>5.混凝土搅拌站都需要招聘什么样的人？</h3>
          <p>答：需要招聘，实验室人员，搅拌站操作人员，铲车司机，运输车司机，过磅员，后勤人员等。</p>
        </div>
      </el-tab-pane>
    </el-tabs>
    <div class="list">
      <p class="title">相关产品</p>
      <ul>
        <router-link :to="'/detail?id='+item.id" v-for="item in productList" :key="item.id" tag="li">
          <p><img :src="item.img[0]" alt=""></p>
          <p>{{item.name}}</p>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'first',
      productList: []
    }
  },
  created () {
    this.getProductData()
  },
  methods: {
    getProductData () {
      this.axios({
        method: 'get',
        url: 'http://localhost:3000/product'
      }).then(res => {
        this.productList = res.data[0].product_list.slice(1, 5)
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
  width: 25%;
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
.right {
  width: 100%;
  .txt{
    line-height: 70px;
    h3{
      margin: 30px 0 10px;
      i{
        font-size: 20px;
        padding-right: 30px;
      }
    }
    p{
      span{
        display: inline-block;
        text-indent: 2em;
      }
    }
  }
  .list{
    margin-top: 300px;
    .title{
      font-size: 40px;
      color:#01415f;
      border-bottom: 1px solid #ccc;
      position: relative;
      padding: 0 20px 10px;
      &::after{
        content: '';
        width: 200px;
        height: 4px;
        background: #01415f;
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }
    ul{
      list-style: none;
      display: flex;
      margin-top: 50px;
      li{
        width: 25%;
        margin-right: 30px;
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
        &:last-child{
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
