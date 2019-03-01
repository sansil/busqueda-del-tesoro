<template>
  <div>
    <div class="background-start"></div>
    <div class="card-cont container">
      <div class="card" style="z-index:100">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="@/assets/mapa_intro.jpg" alt="Placeholder image">
          </figure>
        </div>
        <div class="card-content"></div>
      </div>
    </div>
    <!-- <p>ppp</p> -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.background-start {
  height: 100%;
  width: 100%;
  z-index: -1;
  background-image: linear-gradient(to bottom right, #00c5a7, #007966);
  opacity: 0.9;
  position: absolute;
}

.card-cont {
  max-width: 30%;
  padding-top: 3rem;
}
</style>
