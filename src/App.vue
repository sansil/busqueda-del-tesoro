<template>
  <div id="app">
    <div class="background"></div>
    <div id="nav">
      <router-link to="/">Búesqueda del tesoro!</router-link>|
      <router-link to="/about">Start</router-link>
|
    </div>
    <router-view/>
  </div>
</template>


<style>
@import url("https://fonts.googleapis.com/css?family=Dosis");

.background {
  background-color: #bcaaa4;
  position: absolute;
  height: 100vh;
  width: 100%;
  z-index: -1;
}

#app {
  font-family: "Dosis", sans-serif;
  font-size: 1.6rem;
  line-height: 1.6rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: Black;
}
</style>
