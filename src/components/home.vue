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
            <div style="width:100%;height:340px;background:orange;"></div>
            <div class="carousel-caption">
              <h3>第一张图片描述标题</h3>
              <p>描述文字!</p>
            </div>
          </div>
          <div class="carousel-item">
            <div style="width:100%;height:340px;background:red"></div>
            <div class="carousel-caption">
              <h3>第二张图片描述标题</h3>
              <p>描述文字!</p>
            </div>
          </div>
          <div class="carousel-item">
            <div style="width:100%;height:340px;background:blue"></div>
            <div class="carousel-caption">
              <h3>第三张图片描述标题</h3>
              <p>描述文字!</p>
            </div>
          </div>
          <div class="carousel-item">
            <div style="width:100%;height:340px;background:green"></div>
            <div class="carousel-caption">
              <h3>第四张图片描述标题</h3>
              <p>描述文字!</p>
            </div>
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
.carousel-inner {
  text-align: center;
  background:orange;
}
</style>
