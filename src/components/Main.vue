<template>
  <div class="main">
    <header class="main__header">
      Chess Check Mate Checker
    </header>
    <main class="main__content">
      <BoardContainer />
    </main>
    <footer class="main__footer">
      <a href="https://github.com/pmzi/checkMate" target="_blank">Github</a>
    </footer>
  </div>
</template>

<script>
import BoardContainer from "./BoardContainer";
export default {
  name: "Main",
  data() {
    return {};
  },
  components: {
    BoardContainer
  }
};
</script>

<style lang="scss">
.main {
  display: flex;
  flex-direction: column;

  min-height: 100vh;

  &__header {
    flex-basis: 80px;

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
  }

  &__content {
    flex: 1;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__footer {
    flex-basis: 50px;

    display: flex;
    justify-content: center;
    align-items: flex-start;
    font-size: 14px;
  }
}
</style>
