<template>
  <div class="ability">
    <ul>
      <li>
        <p><img src="../../assets/images/p-1.jpg" alt=""> </p>
        <p>
          <span>生产厂区显实力</span>
          <span>作为专业的混凝土搅拌设备生产厂家，郑州方泰拥有现代化的生产厂区，占地面积约6万平方米，设施齐全，设备过硬，生产能力强。</span>
        </p>
      </li>
      <li>
        <p><img src="../../assets/images/p-2.jpg" alt=""> </p>
        <p>
          <span>多道工序来把关</span>
          <span>方泰建机始终将质量管理工作放在重要位置，吸收先进的管理经验，不断完善质量管理体系，保证生产的所有设备的每一道生产工序都经过部门检。</span>
        </p>
      </li>
      <li>
        <p><img src="../../assets/images/p-3.jpg" alt=""> </p>
        <p>
          <span>数字化生产车间</span>
          <span>方泰建机以高精尖数控设备为基础，打造信息化、数据化、智能化于一体的数字化车间，从而提升产品加工精度与品质，最终推动制造模式的深刻变革。</span>
        </p>
      </li>
      <li>
        <p><img src="../../assets/images/p-4.jpg" alt=""> </p>
        <p>
          <span>完善的科研体系</span>
          <span>郑州方泰研发实力雄厚，创新能力强，成立有研发部门，经过持续多年的经营、人才积累及经费投入，颇具规模，为生产先进设备打下扎实的基础。</span>
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
</script>
<style lang="less" scoped>
.ability{
  ul{
    list-style: none;
    li{
      display: flex;
      margin-bottom:30px;
      align-items: center;
      transition: all 0.5s;
      p{
        &:first-child{
          width: 30%;
          height: 360px;
          margin-right:30px;
          overflow: hidden;
          img{
            width: 100%;
            transition: all 1s;
          }
        }
        &:last-child{
          width: 70%;
          span{
            display: block;
            &:first-child{
              font-size: 40px;
              margin-bottom: 30px;
              transition: all 0.5s;
            }
            &:last-child{
              color: #999;
              transition: all 0.5s;
            }
          }
        }
      }
      &:hover{
        box-shadow: 0 3px 20px rgba(0, 0, 0, 0.1);
        p{
          span{
            &:first-child{
              color: #333;
            }
            &:last-child{
              color: #666;
            }
          }
          img{
            transform: scale(1.1);
          }
        }

      }
    }
  }
}
</style>
