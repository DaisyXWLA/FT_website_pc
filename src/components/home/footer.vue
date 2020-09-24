<template>
  <div class="footer">
    <div class="con">
      <div class="about">
        <ul class="container">
          <li>
            <p class="title">关于方泰</p>
            <router-link to="/about#profile" tag="p">公司简介</router-link>
            <router-link to="/about#ability" tag="p">生产实力</router-link>
            <router-link to="/about#culture" tag="p">企业文化</router-link>
          </li>
          <li>
            <p class="title">产品中心</p>
            <router-link to="/product#hntjbz" tag="p">混凝土搅拌站</router-link>
            <router-link to="/product#hntjbj" tag="p">混凝土搅拌机</router-link>
            <router-link to="/product#hntplj" tag="p">混凝土配料机</router-link>
            <router-link to="/product#lxssj" tag="p">螺旋输送机</router-link>
            <router-link to="/product#snc" tag="p">水泥仓</router-link>
          </li>
          <li>
            <p class="title">技术服务</p>
            <router-link to="/server#pjfw" tag="p">配件服务</router-link>
            <router-link to="/server#shfw" tag="p">售后服务</router-link>
          </li>
          <li>
            <p class="title">新闻中心</p>
            <router-link to="/news#gsxw" tag="p">公司新闻</router-link>
            <router-link to="/news#hydt" tag="p">行业动态</router-link>
            <router-link to="/news#cpzs" tag="p">产品知识</router-link>
          </li>
          <li>
            <p class="title">联系我们</p>
            <p>24小时热线：185 3926 9555</p>
            <p>统一服务热线：0371-8881 2288</p>
            <p>公司地址：河南恒信机械产业园</p>
          </li>
        </ul>
      </div>
      <div class="link container">
        <p>专业混凝土搅拌设备生产厂家-郑州市方泰机械设备有限公司(方泰建机) 版权所有 Copyright(c)2010</p>
        <p>友情链接：<a href="javascript:;">二手装载机</a><a href="#">制砂机价格</a><a href="#">破碎机</a><a href="#">uv喷绘机</a><a href="#">力士乐变量柱塞泵</a><a href="#">液压机厂家</a><a href="#">混凝试验搅拌机</a><a href="#">划线平板</a><a href="#">卷扬机</a><a href="#">卷板机</a><a href="#">木材粉碎机</a><a href="#">矿用振动筛</a><a href="#">鹤管</a><a href="#">燃油锅炉型号</a><a href="#">镀锌网片</a><a href="#">淘金机器</a><a href="#">机械水表</a><a href="#">低氮锅炉</a><a href="#">工业除尘设备</a><a href="#">无人售货机</a><a href="#">高空作业平台</a><a href="#">蒸汽流量计</a><a href="#">细石混凝土泵</a><a href="#">VOCs治理</a><a href="#">箱式变电站</a><a href="#">随车吊厂家</a></p>
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.footer{
  margin-top: 200px;
  padding-top: 100px;
  background: #01415f;
  color: rgba(255, 255, 255, 0.8);
  .about{
    border-bottom: 1px solid rgba(255, 255, 255, 0.8);
    ul{
      list-style: none;
      display: flex;
      margin-bottom: 60px;
      // justify-content: space-between;
      li{
        margin-right: 240px;
        .title{
          font-size: 40px;
          margin-bottom: 20px;
        }
        p{
          font-size: 28px;
          line-height: 60px;
          letter-spacing: 3px;
          cursor: pointer;
        }
      }
    }
  }
  .link{
    p{
      &:first-child{
        text-align: center;
        font-size: 30px;
        padding: 50px 0;
      }
      &:last-child{
        font-size: 24px;
        a{
          color: inherit;
          padding-right: 20px;
        }
      }
    }
  }
}
</style>
