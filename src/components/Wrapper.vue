<template>
  <section class="wrapperRoot">
    <slot />
  </section>
</template>

<script>
export default {
  name: "Wrapper",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.wrapperRoot {
  z-index: 1;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 80px 0 0 0;

  @media screen and (min-width: 1024px) {
    justify-content: center;
    align-items: center;
    margin: 0;
    margin-top: 72px;
    height: calc(100vh - 92px);
  }
}
</style>
