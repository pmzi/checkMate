<template>
  <div class="main">
    <header class="main__header"></header>
    <main class="main__content">
      <BoardContainer />
    </main>
    <footer class="main__footer"></footer>
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
    flex-basis: 50px;
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
  }
}
</style>
