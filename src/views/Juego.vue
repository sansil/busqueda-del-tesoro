<template>
  <div class="hero-body home">
    <div class="container">
      <h1 class="title">
        <span :class="equipo">Equipo {{equipo}}</span>
      </h1>
      <!-- <h2 class="subtitle">Grupo {{equipo}}</h2> -->
    </div>

    <!-- <img alt="Vue logo" src="../assets/map.jpg"> -->
    <!-- <chronometer></chronometer> -->
    <a class="button is-primary" @click="openModalCodigo=true, state.codigo=''">Código</a>
    <a class="button is-link" @click="openModalPista=true">Pista</a>

    <div style="padding:1rem;">
      <progress
        class="progress is-success"
        :value="state.avance"
        :max="Object.keys(this.pistasDictionary).length"
      ></progress>
      {{state.avance}}/{{Object.keys(this.pistasDictionary).length}}
    </div>

    <!-- <Photoswipe>
      <img :src="srcMapaImg" :data-pswp-src="srcMapaImg">
    </Photoswipe>-->
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
            maxlength="8"
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
    <modal-juego
      v-on:change="onSuccesChange"
      :openModalFlag="openModalSucces"
      effect="animated heartBeat"
    >
      <template v-slot:footer-btn>Siguiente pista</template>
      <template v-slot:img>
        <img src="@/assets/check.png">
      </template>
    </modal-juego>

    <!-- modal error -->
    <modal-juego
      v-on:change="onErrorChange"
      :openModalFlag="openModalError"
      effect="animated shake"
    >
      <template v-slot:title>Nop, código incorrecto!</template>
      <template v-slot:footer-btn>Ops!</template>
      <template v-slot:img>
        <img src="@/assets/skull-crossbones-48.png">
      </template>
    </modal-juego>

    <!-- modal win -->
    <modal-juego v-on:change="onWinChange" :openModalFlag="openModalWin" effect="animated flip">
      <template v-slot:title>Felicitaciones!</template>
      <template v-slot:footer-btn>yeah!</template>
      <template v-slot:img>
        <p class="modal-text">El tesoro contiene el siguiente mensaje:</p>
        <p class="modal-win-text">
          <b>
            <i>"30 años no son nada! "</i>
          </b>
        </p>
        <p class="modal-text">Lleva este mensaje a la Explanada!</p>
        <img src="@/assets/hunt_treasure.png">
      </template>
    </modal-juego>

    <!-- modal  tip -->
    <modal-juego
      v-on:change="onPistaChange"
      :openModalFlag="openModalPista"
      effect="animated jackInTheBox"
    >
      <template v-slot:title>Pista</template>
      <template v-slot:footer-btn>Listo!</template>
      <template v-slot:footer>{{state.footer}}</template>
      <template v-slot:body-text>
        <p class="modal-text" v-html="state.pista"></p>
      </template>
      <template v-slot:img>
        <div v-if="state.con_img">
          <img :src="getImgUrl(state.img)">
        </div>
      </template>
    </modal-juego>
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
  props: ["equipo"],
  name: "juego",
  components: {
    //chronometer
    modalJuego
  },
  data() {
    return {
      srcMapaImg: "",
      openModalPista: false,
      openModalCodigo: false,
      openModalSucces: false,
      openModalError: false,
      openModalWin: false,
      state: {
        avance: 0,
        codigo: "",
        pista: "",
        img: "",
        con_img: false,
        footer: ""
      },
      pistasDictionary: {}
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
          pista: this.pistasDictionary[this.state.avance].pista,
          img: this.pistasDictionary[this.state.avance].img,
          con_img: this.pistasDictionary[this.state.avance].con_img,
          footer: this.pistasDictionary[this.state.avance].footer
        };
      } else {
        this.openModalError = true;
      }
    },
    onErrorChange(e) {
      this.openModalError = e;
    },
    onCodigoChange(e) {
      this.openModalCodigo = e;
    },
    onSuccesChange(e) {
      this.openModalSucces = e;
    },
    onWinChange(e) {
      this.openModalWin = e;
    },
    onPistaChange(e) {
      this.openModalPista = e;
    },
    getImgUrl(pic) {
      return require("../assets/" + pic);
    }
  },
  mounted() {
    //this.srcMapaImg = this.getImgUrl("mapa.jpg");
    var pistas = {};
    if (String(this.equipo) === String("azul")) {
      pistas = require("../pistas/grupoAzul.json");
    } else if (String(this.equipo) === String("rojo")) {
      pistas = require("../pistas/grupoRojo.json");
    } else if (String(this.equipo) === String("verde")) {
      pistas = require("../pistas/grupoVerde.json");
    }
    this.pistasDictionary = pistas;
    this.state = {
      avance: 0,
      codigo: "",
      pista: this.pistasDictionary[0].pista,
      img: this.pistasDictionary[0].img,
      con_img: this.pistasDictionary[0].con_img,
      footer: this.pistasDictionary[0].footer
    };
  }
};
</script>

<style>
.home {
  width: 100%;
}

.container h1 {
  margin-bottom: 2rem;
  margin-top: 3rem;
}
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
  margin-bottom: 1rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.pista-div {
  text-align: center;
  color: black;
}

.pregunta {
  color: red;
}

/* .rojo {
  color: #ff2a56;
}
.verde {
  color: #07500c;
} */
</style>

