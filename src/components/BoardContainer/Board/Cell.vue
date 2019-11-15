<template>
  <div @click="emitShowModal" :class="['cell', { 'cell--colored': isColored }]">
    {{ name }}
  </div>
</template>

<script>
import { getItemName } from "../shared/chess";
export default {
  name: "Cell",
  props: {
    row: {
      required: true,
      type: Number
    },
    column: {
      required: true,
      type: Number
    },
    value: {
      required: true,
      type: String
    },
    isColored: {
      required: true,
      type: Boolean
    }
  },
  computed: {
    name() {
      return getItemName(this.value);
    }
  },
  methods: {
    emitShowModal() {
      this.$emit("showModal", this.row, this.column);
    }
  }
};
</script>

<style lang="scss">
.cell {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100px;
  height: 100px;

  &--colored {
    background-color: gray;
  }
}
</style>
