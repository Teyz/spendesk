<template>
  <section class="body">
    <Wrapper id="contact">
      <CheckList />
    </Wrapper>
  </section>
</template>

<script>
import CheckList from "./Contact/CheckList";
export default {
  name: "Contact",
  components: { CheckList },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
