<template>
  <div class="modal" :class="{ 'is-active': openModalError }">
    <div class="modal-background"></div>
    <div class="modal-card animated shake">
      <header class="modal-card-head">
        <p class="modal-card-title">
          <slot name="title"></slot>
        </p>
        <button class="delete" aria-label="close" @click="modalevent "></button>
      </header>
      <section class="modal-card-body">
        <img src="@/assets/skull-crossbones-48.png">
      </section>
      <footer class="modal-card-foot">
        <a class="button is-success" @click="modalevent">
          <slot name="footer"></slot>
        </a>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    openModalError: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {
    modalevent() {
      let modifiedList = this.openModalError;
      modifiedList = false;
      this.$emit(("update:openModalError", modifiedList));
    }
  }
};
</script>

<style lang="scss" scoped>
</style>