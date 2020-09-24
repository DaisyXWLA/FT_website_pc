<template>
  <div>
    <Header></Header>
    <Carousel></Carousel>
    <ProductCenter></ProductCenter>
    <News></News>
    <CompanyProfile></CompanyProfile>
    <ProjectCase></ProjectCase>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './home/header'
import Carousel from './home/carousel'
import ProductCenter from './home/productCenter'
import News from './home/newsCenter'
import CompanyProfile from './home/companyProfile'
import ProjectCase from './home/projectCase'
import Footer from './home/footer'
export default {
  components: {
    Header,
    Carousel,
    ProductCenter,
    News,
    CompanyProfile,
    ProjectCase,
    Footer
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
