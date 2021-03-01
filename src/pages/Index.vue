<template>
  <section class="body">
    <Wrapper>
      <Header />
      <CardsFullScreen />
    </Wrapper>
  </section>
  <Form />
</template>

<script>
import Header from "./Index/Header";
import CardsFullScreen from "./Index/CardsFullScreen";
import Form from "../components/Form";
export default {
  name: "Index",
  components: { Header, CardsFullScreen, Form },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.body {
  position: relative;
  width: calc(100vw - 450px);
}
</style>
