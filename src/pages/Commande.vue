<template>
  <section class="body">
    <Wrapper>
      <OrderReview />
    </Wrapper>
  </section>
</template>

<script>
import OrderReview from "./Commande/OrderReview";
export default {
  name: "Commande",
  components: {
    OrderReview,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.body {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
}
</style>
