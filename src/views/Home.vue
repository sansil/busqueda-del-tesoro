<template>
  <div class="home container">
    <!-- <img alt="Vue logo" src="../assets/map.jpg"> -->
    <!-- <chronometer></chronometer> -->
    <a class="button is-primary" @click="openModalCodigo=true, state.codigo=''">Código</a>
    <a class="button is-link" @click="openModalPista=true">Pista</a>

    <div style="padding:1rem;">
      <progress
        class="progress is-success"
        :value="state.avance"
        :max="Object.keys(this.pistasDictionary).length"
      >{{state.avance}}</progress>
    </div>

    <!-- modal Code -->
    <div id="modal-id" class="modal" :class="{ 'is-active': openModalCodigo }">
      <div class="modal-background"></div>
      <div class="modal-card animated jackInTheBox">
        <header class="modal-card-head">
          <p class="modal-card-title">Ingresar código</p>
          <button class="delete" aria-label="close" @click="openModalCodigo=false "></button>
        </header>
        <section class="modal-card-body">
          <input
            class="codigo_input"
            type="text"
            maxlength="4"
            placeholder="CÓDIGO"
            oninput="this.value=this.value.replace(/[^0-9]/g,'');"
            v-model="state.codigo"
          >
        </section>
        <footer class="modal-card-foot">
          <a class="button is-success" @click="checkCode">Probar!</a>
        </footer>
      </div>
    </div>

    <!-- modal succes -->
    <div class="modal" :class="{ 'is-active': openModalSucces }">
      <div class="modal-background"></div>
      <div class="modal-card animated heartBeat">
        <header class="modal-card-head">
          <p class="modal-card-title">Perfecto!</p>
          <button class="delete" aria-label="close" @click="openModalSucces=false "></button>
        </header>
        <section class="modal-card-body">
          <img src="@/assets/check.png">
        </section>
        <footer class="modal-card-foot">
          <a
            class="button is-success"
            @click="openModalPista=true, openModalSucces=false"
          >Siguiente pista</a>
        </footer>
      </div>
    </div>

    <!-- modal error -->
    <!-- <div class="modal" :class="{ 'is-active': openModalError }">
      <div class="modal-background"></div>
      <div class="modal-card animated shake">
        <header class="modal-card-head">
          <p class="modal-card-title">Nop, código incorrecto!</p>
          <button class="delete" aria-label="close" @click="openModalError=false "></button>
        </header>
        <section class="modal-card-body">
          <img src="@/assets/skull-crossbones-48.png">
        </section>
        <footer class="modal-card-foot">
          <a class="button is-success" @click="openModalError=false">Ops!</a>
        </footer>
      </div>
    </div>-->

    <modal-juego @change="onErrorChange" :openModalError.sync="openModalError">
      <template v-slot:title>Nop, código incorrecto!</template>
      <template v-slot:footer>Ops!</template>
    </modal-juego>

    <!-- modal win -->
    <div class="modal" :class="{ 'is-active': openModalWin }">
      <div class="modal-background"></div>
      <div class="modal-card animated flip">
        <header class="modal-card-head">
          <p class="modal-card-title">Felicitaciones!</p>
          <button class="delete" aria-label="close" @click="openModalWin=false "></button>
        </header>
        <section class="modal-card-body">
          <p class="modal-text">El tesoro contiene el siguiente mensaje:</p>
          <p class="modal-win-text">
            <b>
              <i>"Sofi cra"</i>
            </b>
          </p>
          <p class="modal-text">Lleva este mensaje a la carpa principal!</p>
          <img src="@/assets/hunt_treasure.png">
        </section>
        <footer class="modal-card-foot">
          <a class="button is-success" @click="openModalWin=false">yeah!</a>
        </footer>
      </div>
    </div>

    <!-- modal  tip -->
    <div class="modal" :class="{ 'is-active': openModalPista }">
      <div class="modal-background"></div>
      <div class="modal-card animated jackInTheBox">
        <header class="modal-card-head">
          <p class="modal-card-title">Pista</p>
          <button class="delete" aria-label="close" @click="openModalPista=false"></button>
        </header>
        <section class="modal-card-body">
          <p class="modal-text">{{state.pista}}</p>
        </section>
        <footer class="modal-card-foot">
          <a class="button is-success" @click="openModalPista=false">Listo!</a>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import modalJuego from "@/components/ModalJuego.vue";
require("@/assets/sass/main.scss");
require("@/assets/css/animate.css");
// function handleVisibilityChange() {
//   if (document.hidden) {
//     console.log("hidden");
//   } else {
//     console.log("not hidden");
//   }
// }
// document.addEventListener("visibilitychange", handleVisibilityChange, false);
export default {
  name: "home",
  components: {
    //chronometer
    modalJuego
  },
  data() {
    return {
      openModalPista: false,
      openModalCodigo: false,
      openModalSucces: false,
      openModalError: false,
      openModalWin: false,
      state: { avance: 0, codigo: "", pista: "" },
      pistasDictionary: {
        // numero de avance código pista
        0: {
          codigo: "1345",
          pista:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nihil inventore"
        },
        1: {
          codigo: "3421",
          pista:
            " Explicabo nihil inventore, iste repellat sit aspernatur dolores earum nemo!"
        }
      }
    };
  },
  methods: {
    checkCode() {
      this.openModalCodigo = false;
      if (this.state.avance > Object.keys(this.pistasDictionary).length - 1)
        return;
      if (
        this.state.codigo === this.pistasDictionary[this.state.avance].codigo
      ) {
        // pista correcta
        // muestro mensaje y aumento avance
        this.state.avance = Number(this.state.avance) + 1;
        if (this.state.avance >= Object.keys(this.pistasDictionary).length) {
          //GANO
          this.$confetti.start();
          this.openModalWin = true;
          this.openModalSucces = false;
          return;
        }
        this.openModalSucces = true;
        this.state = {
          avance: this.state.avance,
          codigo: "",
          pista: this.pistasDictionary[this.state.avance].pista
        };
      } else {
        this.openModalError = true;
      }
    },
    onErrorChange(e) {
      console.log(e);
      this.openModalError = e;
    }
  },
  mounted() {
    this.state = {
      avance: 0,
      codigo: "",
      pista: this.pistasDictionary[0].pista
    };
  }
};
</script>

<style>
.codigo_input {
  width: 40%;
  background-color: #ffff7a;
  border: 1px solid #c8ccd4;
  border-left: none;
  border-right: none;
  border-top: none;
  padding: 1rem;
  height: 3rem;
  font-size: 1.5rem;
  text-align: center;
  color: rgb(35, 153, 213);
}

.codigo_input:focus {
  outline: none;
}

.modal-win-text {
  color: white;
  font-size: 1.5rem;
  margin: 0.5rem;
}

.modal-text {
  color: #ffff7a;
  font-size: 1.4rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

