<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <chronometer></chronometer> -->
    <a class="button is-primary" @click="openModalCodigo=true, state.codigo=''">Código</a>

    <!-- modal Code -->
    <div class="modal" :class="{ 'is-active': openModalCodigo }">
      <div class="modal-background"></div>
      <div class="modal-card">
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
      <div class="modal-card">
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
    <div class="modal" :class="{ 'is-active': openModalError }">
      <div class="modal-background"></div>
      <div class="modal-card">
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
    </div>

    <!-- modal win -->
    <div class="modal" :class="{ 'is-active': openModalWin }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Felicitaciones!</p>
          <button class="delete" aria-label="close" @click="openModalWin=false "></button>
        </header>
        <section class="modal-card-body">
          <p style="color:yellow;">El tesoro contiene el siguiente mensaje:</p>
          <p style="color:white;">
            <b>
              <i>"Sofi cra"</i>
            </b>
          </p>
          <p style="color:yellow;">Lleva este mensaje a la carpa principal!</p>
          <img src="@/assets/hunt_treasure.png">
        </section>
        <footer class="modal-card-foot">
          <a class="button is-success" @click="openModalWin=false">yeah!</a>
        </footer>
      </div>
    </div>

    <!-- modal  tip -->
    <a class="button is-link" @click="openModalPista=true">Pista</a>
    <div class="modal" :class="{ 'is-active': openModalPista }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Pista</p>
          <button class="delete" aria-label="close" @click="openModalPista=false"></button>
        </header>
        <section class="modal-card-body">
          <p style="color:yellow;">{{state.pista}}</p>
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
//import chronometer from "@/components/Chronometer.vue";
require("@/assets/sass/main.scss");

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
  border: 1px solid #c8ccd4;
  border-left: none;
  border-right: none;
  border-top: none;
  padding: 1rem;
  height: 3rem;
  font-size: 1.5rem;
  text-align: center;
}

.codigo_input:focus {
  outline: none;
}
</style>

