<template>
  <section class="headerRoot">
    <div class="headerMain">
      <div class="headerImage">
        <img src="/img/index/cafe.png" alt="" />
      </div>
      <div class="headerContent">
        <h2>Good morning Guilhem</h2>
        <p>Here's a few things to do today:</p>
        <div class="ctaContent">
          <button>
            <strong>1</strong>
            Application to review
          </button>
          <button>
            <strong>1</strong>
            Student to recruit
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Header",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.headerRoot {
  margin-top: 64px;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;

  @media screen and (min-width: 1024px) {
    margin-top: 32px !important;
    margin-left: 72px;

    .headerMain {
      display: flex;
      justify-content: center;
      align-items: center;

      .headerImage {
        img {
          width: 150px;
        }
        margin-right: 32px;
      }

      .headerContent {
        justify-content: center;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        .ctaContent {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
}
</style>
