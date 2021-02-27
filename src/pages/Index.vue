<template>
  <section class="body">
    <Wrapper title="Home" id="home">
      <Header />
      <CardsFullScreen />
    </Wrapper>
  </section>
</template>

<script>
import Header from "./Index/Header";
import CardsFullScreen from "./Index/CardsFullScreen";
export default {
  name: "Index",
  components: { Header, CardsFullScreen },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
