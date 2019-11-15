<template>
  <div class="board">
    <div
      class="board__row"
      v-for="(rowItems, rowIndex) of items"
      :key="rowIndex"
    >
      <Cell
        class="board__cell"
        v-for="(cell, columnIndex) of rowItems"
        :row="rowIndex"
        :column="columnIndex"
        :key="rowIndex * 8 + columnIndex"
        :value="cell"
        :is-colored="isColored(rowIndex, columnIndex)"
        @showModal="showModal"
      />
    </div>
  </div>
</template>

<script>
import Cell from "./Cell";
export default {
  name: "Board",
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    isColored(row, column) {
      if (row % 2) {
        return Boolean(column % 2);
      } else {
        return !(column % 2);
      }
    },
    showModal(row, column) {
      this.$emit("showModal", row, column);
    }
  },
  components: {
    Cell
  }
};
</script>

<style lang="scss">
.board {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 1px solid black;
  &__row {
    display: flex;
  }
}
</style>
