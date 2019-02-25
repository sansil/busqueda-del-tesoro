<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <chronometer></chronometer>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import chronometer from "@/components/Chronometer.vue";
export default {
  name: "home",
  components: {
    HelloWorld,
    chronometer
  }
};
</script>

<style>
</style>

