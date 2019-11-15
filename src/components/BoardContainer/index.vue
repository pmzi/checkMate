<template>
  <Fragment>
    <AddToCellModal v-if="shouldShowModal" @add="processItem" />
    <Board :items="cells" @showModal="openModal" />
    <Result :from="result.from" :to="result.to" :is-mate="result.isMate" />
  </Fragment>
</template>

<script>
import AddToCellModal from "./AddToCellModal";
import Board from "./Board";
import Result from "./Result";

import {
  validateForNumbers,
  isCheck,
  getItemName,
  isMate
} from "./shared/chess";

const initialCell = () => {
  return [
    new Array(8).fill(""),
    new Array(8).fill(""),
    new Array(8).fill(""),
    new Array(8).fill(""),
    new Array(8).fill(""),
    new Array(8).fill(""),
    new Array(8).fill(""),
    new Array(8).fill("")
  ];
};
export default {
  name: "BoradContainer",
  components: {
    Board,
    AddToCellModal,
    Result
  },
  data() {
    return {
      cells: initialCell(),
      row: -1,
      column: -1,
      shouldShowModal: false,
      result: {
        from: "",
        to: "",
        isMate: false
      }
    };
  },
  methods: {
    openModal(row, column) {
      this.shouldShowModal = true;
      this.row = row;
      this.column = column;
    },
    processItem(id) {
      const cells = [...this.cells.map(item => item)];
      cells[this.row][this.column] = id;
      if (validateForNumbers(cells)) {
        this.cells = cells;
        this.shouldShowModal = false;
        const result = isCheck(this.cells);
        if (result) {
          this.result.from = getItemName(result.from);
          this.result.to = getItemName(result.to);
          if (isMate(cells)) {
            this.result.isMate = true;
          } else {
            this.result.isMate = false;
          }
        }
      } else {
        alert("تعداد مهره‌ها نامعتبر است.");
      }
    }
  }
};
</script>
