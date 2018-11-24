<template>
  <div>
    <div id="demo" class="carousel slide" data-ride="carousel">
 
        <!-- 指示符 -->
        <ul class="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" class="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
          <li data-target="#demo" data-slide-to="3"></li>
        </ul>
       
        <!-- 轮播图片 -->
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="./../assets/images/banner/1.jpg">
          </div>
          <div class="carousel-item">
            <img src="./../assets/images/banner/2.jpg">
          </div>
          <div class="carousel-item">
            <img src="./../assets/images/banner/3.jpg">
          </div>
          <div class="carousel-item">
            <img src="./../assets/images/banner/4.jpg">
          </div>
        </div>
       
        <!-- 左右切换按钮 -->
        <a class="carousel-control-prev" href="#demo" data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#demo" data-slide="next">
          <span class="carousel-control-next-icon"></span>
        </a>
       
      </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      
    }
  },
  mounted(){    
    $('.carousel').carousel({
        interval: 2000
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
