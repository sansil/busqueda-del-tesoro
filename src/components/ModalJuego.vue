<template>
  <div class="modal" :class="{ 'is-active': openModalFlag }">
    <div class="modal-background"></div>
    <div class="modal-card" :class="effect">
      <header class="modal-card-head">
        <p class="modal-card-title">
          <slot name="title"></slot>
        </p>
        <button class="delete" aria-label="close" @click="modalevent "></button>
      </header>
      <section class="modal-card-body">
        <slot name="body-text"></slot>
        <slot name="img"></slot>
        <slot name="input"></slot>
      </section>
      <footer class="modal-card-foot">
        <a class="button is-success" @click="modalevent">
          <slot name="footer-btn"></slot>
        </a>
        <span style="margin-left:1rem; color: yellow; font-size:22px;">
          <slot name="footer"></slot>
        </span>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    openModalFlag: {
      type: Boolean,
      default: false
    },
    effect: {
      type: String,
      default: "animated shake"
    }
  },
  data() {
    return {};
  },
  methods: {
    modalevent() {
      console.log("event");
      let modifiedList = this.openModalFlag;
      modifiedList = false;
      this.$emit("change", modifiedList);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>