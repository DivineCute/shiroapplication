<!-- App.vue -->
<template>
  <div id="app">
    <nav class="navbar fixed-top shadow-sm navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5">
      <a href="index.html" class="navbar-brand ml-lg-3">
        <h1 class="m-0 display-5"><span class="text-primary">Free</span>Folio</h1>
      </a>
      <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse px-lg-3" id="navbarCollapse">
        <div class="navbar-nav m-auto py-0">
          <a href="#home" class="nav-item nav-link active">Home</a>
          <a href="#about" class="nav-item nav-link">About</a>
          <a href="#qualification" class="nav-item nav-link">Quality</a>
          <a href="#skill" class="nav-item nav-link">Skill</a>
          <a href="#service" class="nav-item nav-link">Service</a>
          <a href="#portfolio" class="nav-item nav-link">Portfolio</a>
          <a href="#testimonial" class="nav-item nav-link">Review</a>
          <a href="#blog" class="nav-item nav-link">Blog</a>
          <a href="#contact" class="nav-item nav-link">Contact</a>
        </div>
        <router-link to="/portFolio">Portfolio</router-link>
      </div>
    </nav>
    <!-- <router-link to="/portFolio">Portfolio</router-link>

    <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
