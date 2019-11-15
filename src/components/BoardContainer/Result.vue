<template>
  <span class="result">
    {{ result }}
  </span>
</template>

<script>
export default {
  name: "Result",
  props: {
    from: {
      type: String,
      required: true
    },
    to: {
      type: String,
      required: true
    },
    isMate: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    result() {
      if (!this.from) return "";
      if (this.isMate)
        return `${this.to} توسط ${this.from} تهدید می‌شود و کیش و مات است.`;
      return `${this.to} توسط ${this.from} تهدید می‌شود.`;
    }
  }
};
</script>

<style lang="scss">
.result {
  height: 80px;
  line-height: 80px;
}
</style>
