<template>
  <div>
    <div id="left"></div>
    <div id="right"></div>
  </div>
</template>

<script>
import nipplejs from "nipplejs";
export default {
  data() {
    return {
      options: ""
    };
  },
  mounted() {
    var joystickL = nipplejs.create({
      zone: document.getElementById("left"),
      mode: "static",
      position: { left: "30%", top: "50%" },
      color: "green",
      size: 150,
      lockY: true
    });

    var joystickR = nipplejs.create({
      zone: document.getElementById("right"),
      mode: "static",
      position: { right: "30%", top: "50%" },
      color: "rgb(35, 153, 213)",
      size: 150,
      lockX: true
    });
    console.log(joystickR);

    joystickL.on("move", function(evt, data) {
      // Do something.
      console.log(data.direction);
      //console.log(evt);
    });
  }
};
</script>
<style scoped>
</style>