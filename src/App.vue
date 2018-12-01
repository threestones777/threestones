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
            <router-link class="nav-link" to="/home">人生</router-link>
          </li>          
          <li class="nav-item">
            <router-link class="nav-link" to="/photos">图集</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/skill">技术</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/interests">兴趣</router-link>
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