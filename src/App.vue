<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#/">一土振三石</a>
      <button id="collapse" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div @click="show" class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#/home">人生<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#/photos" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">图集</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#/plant">植物</a>
              <a class="dropdown-item" href="#/animal">动物</a>
              <a class="dropdown-item" href="#/travel">旅行</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#/skill" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">技术</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#/mechanical">机械</a>
              <a class="dropdown-item" href="#/computer">计算机</a>
              <a class="dropdown-item" href="#/web">前端</a>
              <a class="dropdown-item" href="#/project">项目</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#/interests" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">兴趣</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#/epub">电子书</a>
              <a class="dropdown-item" href="#/movie">电影</a>
              <a class="dropdown-item" href="#/financial">理财</a>
              <a class="dropdown-item" href="#/game">游戏</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/one">one</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/two">two</a>
          </li>
          
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    show(){
      console.log("show");
      $('#collapse').addClass("collapsed");
      $('#collapse').attr("aria-expanded",false);
      $("#navbarNavDropdown").removeClass("show");
    }
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;  
}
</style>