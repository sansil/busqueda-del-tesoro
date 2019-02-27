<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <chronometer></chronometer>
    <a class="button is-primary" @click="openModal=true">Código</a>
    <a class="button is-link">Pista</a>
    <div class="modal" :class="{ 'is-active': openModal }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Pista</p>
          <button class="delete" aria-label="close" @click="openModal=false"></button>
        </header>
        <section class="modal-card-body">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nihil inventore, iste repellat sit aspernatur dolores earum nemo!</p>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" @click="openModal=false">Listo!</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import chronometer from "@/components/Chronometer.vue";
require("@/assets/sass/main.scss");

var hidden, visibilityChange;
if (typeof document.hidden !== "undefined") {
  // Opera 12.10 and Firefox 18 and later support
  hidden = "hidden";
  visibilityChange = "visibilitychange";
  console.log(hidden);
  console.log(visibilityChange);
} else if (typeof document.msHidden !== "undefined") {
  hidden = "msHidden";
  visibilityChange = "msvisibilitychange";
  console.log(hidden);
  console.log(visibilityChange);
} else if (typeof document.webkitHidden !== "undefined") {
  hidden = "webkitHidden";
  visibilityChange = "webkitvisibilitychange";
  console.log(hidden);
  console.log(visibilityChange);
}

function handleVisibilityChange() {
  if (document.hidden) {
    console.log("hidden");
  } else {
    console.log("not hidden");
  }
}
document.addEventListener("visibilitychange", handleVisibilityChange, false);
export default {
  name: "home",
  components: {
    HelloWorld,
    chronometer
  },
  data() {
    return {
      openModal: false
    };
  }
};
</script>

<style>
</style>

