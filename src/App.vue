<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Búesqueda del tesoro!</router-link>|
      <router-link to="/about">Start</router-link>|
      <router-link to="/joystick">RC</router-link>
    </div>
    <router-view/>
  </div>
</template>


<style>
@import url("https://fonts.googleapis.com/css?family=Dosis");
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
  color: #42b983;
}
</style>
