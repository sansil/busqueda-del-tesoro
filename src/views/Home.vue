<template>
  <div>
    <!-- <div class="background-start"></div> -->
    <div class="contenedor">
      <img src="@/assets/test2.png" alt="img-pre">
      <div class="card-inicio">
        <h1>Búsqueda del Tesoro</h1>
        <div class="btn-choose">
          <a class="button is-success" @click="goEquipoVerde">Equipo Verde</a>
          <a class="button is-danger" @click="goEquipoRojo">Equipo Rojo</a>
          <a class="button is-info" @click="goEquipoAzul">Equipo Azul</a>
        </div>
        <p>Sofi 30</p>
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
    goEquipoRojo() {
      this.$router.push({ path: "/juego/rojo" });
    },
    goEquipoAzul() {
      this.$router.push({ path: "/juego/azul" });
    }
  }
};
</script>

<style scoped>
/* .background-start {
  height: 100%;
  width: 100%;
  z-index: -1;
  background-size: 390px auto;
  background-image: url("../assets/test.png");
  background-repeat: no-repeat;
  background-position: center center;
  position: absolute;
} */

.contenedor {
  position: relative;
  text-align: center;
}
.contenedor img {
  padding-top: 3rem;
}
.card-inicio {
  /* position: relative;
  top: 190px; */
  position: absolute;
  top: 60%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
}
.card-inicio h1 {
  font-size: 1.9rem;
  margin-bottom: 0.5rem;
}

.card-inicio p {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
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