<template>
  <div class="add-to-cell-modal">
    <div class="add-to-cell-modal__inside">
      <div
        v-for="item in items"
        @click="$emit('add', item.value)"
        :key="item.value"
        class="add-to-cell-modal__cell"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
import { items } from "./shared/chess";
export default {
  name: "AddToCellModal",
  computed: {
    items() {
      return items;
    }
  }
};
</script>

<style lang="scss">
.add-to-cell-modal {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 200;
  background-color: rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  justify-content: center;
  &__inside {
    background-color: white;

    display: grid;
    grid-template-rows: repeat(3, 100px);
    grid-template-columns: repeat(4, 100px);
    justify-items: stretch;
  }

  &__cell {
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    cursor: pointer;
    &:hover {
      background-color: #eee;
    }
  }
}
</style>
