<template>
  <div id="app">
    <div class="background"></div>
    <!-- <img src="@/assets/portada.jpeg"> -->
    <router-view/>
  </div>
</template>


<style scoped>
@import url("https://fonts.googleapis.com/css?family=Dosis");
@import url("https://fonts.googleapis.com/css?family=Pirata+One");

.background {
  /* Preboda-36.jpg */
  background-image: url("./assets/Preboda-36.jpg");
  filter: opacity(75%);
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #bcaaa4;
  position: absolute;
  height: 100vh;
  width: 100%;
  z-index: -1;
}

#app {
  font-family: "Pirata One", cursive;
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
