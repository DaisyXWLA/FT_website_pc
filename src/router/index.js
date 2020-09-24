import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import About from '@/components/about'
import News from '@/components/news'
import Product from '@/components/product'
import Project from '@/components/project'
import Server from '@/components/server'
import Case from '@/components/case'
import Contact from '@/components/contact'

import Profile from '@/components/about/profile'
import Ability from '@/components/about/ability'
import Culture from '@/components/about/culture'

import CompanyNews from '@/components/news/company_news'
import IndustryTrends from '@/components/news/industry_trends'
import ProductKnowledge from '@/components/news/product_knowledge'

import hntjbz from '@/components/product/hntjbz'
import hntjbj from '@/components/product/hntjbj'
import hntplj from '@/components/product/hntplj'
import lxssj from '@/components/product/lxssj'
import snc from '@/components/product/snc'

import sphntjbz from '@/components/project/sphntjbz'
import gchntjbz from '@/components/project/gchntjbz'
import dxhntjbz from '@/components/project/dxhntjbz'
import xxhntjbz from '@/components/project/xxhntjbz'

import pjserver from '@/components/server/pjserver'
import shserver from '@/components/server/shserver'

import Detail from '@/components/detail'
import Newsdetail from '@/components/news/newsdetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/home',
      meta: {
        title: '专业混凝土搅拌站，混凝土搅拌机设备制造商-郑州方泰机械设备有限公司'
      }
    },
    {
      path: '/home',
      name: '首页',
      component: Home,
      meta: {
        title: '专业混凝土搅拌站，混凝土搅拌机设备制造商-郑州方泰机械设备有限公司'
      }
    },
    {
      path: '/about',
      name: '关于方泰',
      component: About,
      meta: {
        title: '关于方泰-郑州方泰机械设备有限公司'
      },
      children: [
        {
          path: '/about',
          redirect: '/about/profile'
        },
        {
          path: 'profile',
          name: '公司简介',
          component: Profile,
          meta: {
            title: '公司简介-郑州方泰机械设备有限公司'
          }
        },
        {
          path: 'ability',
          name: '生产实力',
          component: Ability,
          meta: {
            title: '生产实力-郑州方泰机械设备有限公司'
          }
        },
        {
          path: 'culture',
          name: '企业文化',
          component: Culture,
          meta: {
            title: '企业文化-郑州方泰机械设备有限公司'
          }
        }
      ]
    },
    {
      path: '/news',
      name: '新闻中心',
      component: News,
      meta: {
        title: '新闻中心-郑州方泰机械设备有限公司'
      },
      children: [
        {
          path: '/news',
          redirect: '/news/company_news'
        },
        {
          path: 'company_news',
          name: '公司新闻',
          component: CompanyNews,
          meta: {
            title: '公司新闻-郑州方泰机械设备有限公司'
          }
        },
        {
          path: 'industry_trends',
          name: '行业动态',
          component: IndustryTrends,
          meta: {
            title: '行业动态-郑州方泰机械设备有限公司'
          }
        },
        {
          path: 'product_knowledge',
          name: '产品知识',
          component: ProductKnowledge,
          meta: {
            title: '产品知识-郑州方泰机械设备有限公司'
          }
        },
        {
          path: '/newsdetail',
          name: '新闻详情',
          component: Newsdetail,
          meta: {
            title: '新闻详情-郑州方泰机械设备有限公司'
          }
        }
      ]
    },
    {
      path: '/product',
      name: '产品中心',
      component: Product,
      meta: {
        title: '产品中心-郑州方泰机械设备有限公司'
      },
      children: [
        {
          path: '/product',
          redirect: '/product/hntjbz'
        },
        {
          path: 'hntjbz',
          name: '混凝土搅拌站',
          component: hntjbz,
          meta: {
            title: '混凝土搅拌站-郑州方泰机械设备有限公司'
          }
        },
        {
          path: 'hntjbj',
          name: '混凝土搅拌机',
          component: hntjbj,
          meta: {
            title: '混凝土搅拌机-郑州方泰机械设备有限公司'
          }
        },
        {
          path: 'hntplj',
          name: '混凝土配料机',
          component: hntplj,
          meta: {
            title: '混凝土配料机-郑州方泰机械设备有限公司'
          }
        },
        {
          path: 'lxssj',
          name: '螺旋输送机',
          component: lxssj,
          meta: {
            title: '螺旋输送机-郑州方泰机械设备有限公司'
          }
        },
        {
          path: 'snc',
          name: '水泥仓',
          component: snc,
          meta: {
            title: '水泥仓-郑州方泰机械设备有限公司'
          }
        }
      ]
    },
    {
      path: '/project',
      name: '工程方案',
      component: Project,
      meta: {
        title: '工程方案-郑州方泰机械设备有限公司'
      },
      children: [
        {
          path: '/project',
          redirect: '/project/sphntjbz'
        },
        {
          path: 'sphntjbz',
          name: '商品混凝土搅拌站',
          component: sphntjbz,
          meta: {
            title: '商品混凝土搅拌站-郑州方泰机械设备有限公司'
          }
        },
        {
          path: 'gchntjbz',
          name: '工程混凝土搅拌站',
          component: gchntjbz,
          meta: {
            title: '工程混凝土搅拌站-郑州方泰机械设备有限公司'
          }
        },
        {
          path: 'dxhntjbz',
          name: '大型混凝土搅拌站',
          component: dxhntjbz,
          meta: {
            title: '大型混凝土搅拌站-郑州方泰机械设备有限公司'
          }
        },
        {
          path: 'xxhntjbz',
          name: '小型混凝土搅拌站',
          component: xxhntjbz,
          meta: {
            title: '小型混凝土搅拌站-郑州方泰机械设备有限公司'
          }
        }
      ]
    },
    {
      path: '/server',
      name: '技术服务',
      component: Server,
      meta: {
        title: '技术服务-郑州方泰机械设备有限公司'
      },
      children: [
        {
          path: '/server',
          redirect: '/server/pjserver'
        },
        {
          path: 'pjserver',
          name: '配件服务',
          component: pjserver,
          meta: {
            title: '配件服务-郑州方泰机械设备有限公司'
          }
        },
        {
          path: 'shserver',
          name: '售后服务',
          component: shserver,
          meta: {
            title: '售后服务-郑州方泰机械设备有限公司'
          }
        }
      ]
    },
    {
      path: '/case',
      name: '工程案例',
      component: Case,
      meta: {
        title: '工程案例-郑州方泰机械设备有限公司'
      }
    },
    {
      path: '/contact',
      name: '联系我们',
      component: Contact,
      meta: {
        title: '联系我们-郑州方泰机械设备有限公司'
      }
    },
    {
      path: '/detail',
      name: '产品详情',
      component: Detail,
      meta: {
        title: '产品详情-郑州方泰机械设备有限公司'
      }
    }
    // {
    //   path: '/newsdetail',
    //   name: '新闻详情',
    //   component: Newsdetail,
    //   meta: {
    //     title: '新闻详情-郑州方泰机械设备有限公司'
    //   }
    // }
  ],
  linkActiveClass: 'active'
})
