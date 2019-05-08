<template>
  <div>
    <div class="background-start"></div>
    <div class="card-inicio">
      <div class="btn-choose">
        <a class="button is-success" @click="goEquipoVerde">Equipo Verde</a>
        <a class="button is-warning" @click="goEquipoAmarillo">Equipo Amarillo</a>
        <a class="button is-danger" @click="goEquipoRojo">Equipo Rojo</a>
      </div>
    </div>
    <!-- <p>ppp</p> -->
  </div>
</template>

<script>
require("@/assets/sass/main.scss");
require("@/assets/css/animate.css");
export default {
  data() {
    return {};
  },
  methods: {
    goEquipoVerde() {
      this.$router.push({ path: "/juego/verde" });
    },
    goEquipoAmarillo() {
      this.$router.push({ path: "/juego/amarillo" });
    },
    goEquipoRojo() {
      this.$router.push({ path: "/juego/rojo" });
    }
  }
};
</script>

<style scoped>
.background-start {
  height: 100%;
  width: 100%;
  z-index: -1;
  background-size: 390px auto;
  background-image: url("../assets/test.png");
  background-repeat: no-repeat;
  background-position: center center;
  position: absolute;
}

.card-inicio {
  position: relative;
  top: 190px;
}

.btn-choose {
  display: flex;
  margin: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}
.btn-choose a {
  max-width: 40%;
  margin-bottom: 1rem;
}
</style>