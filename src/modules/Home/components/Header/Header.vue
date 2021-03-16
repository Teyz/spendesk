<template>
  <section class="headerRoot">
    <div class="headerMain">
      <div class="headerImage">
        <img src="/img/index/cafe.png" alt="" />
      </div>
      <div class="headerContent">
        <h2>Bonjour Spendesk</h2>
        <p>Vous avez des choses à faire aujourd'hui:</p>
        <div class="ctaContent">
          <button class="button-arrow">
            <strong>1</strong>
            Candidature non lue
          </button>
          <button class="button-arrow">
            <strong>1</strong>
            Alternant à recruter
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
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;

  .headerMain {
    margin-top: 48px;
    .headerImage {
      img {
        width: 150px;
      }
    }
  }

  .headerContent {
    p {
      color: #7e7e8f;
    }
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;

    .headerMain {
      display: flex;
      justify-content: flex-start;
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

    .cardList {
      margin-left: 110px;
      display: flex;
      background-color: white;
      ul {
        display: flex;
        list-style: none;
        flex-direction: column;
        padding: 0;
        margin: 0;

        a {
          text-decoration: none;

          &:hover {
            background: red;
            z-index: 2;
          }
        }

        li {
          display: flex !important;
          justify-content: flex-start;
          align-items: center;
          width: 34vw;
          padding: 24px;

          img {
            width: 50px;
            height: 50px;
          }

          div {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            flex-direction: column;
            margin-left: 16px;

            p {
              margin: 0;
              color: #4c4b5d;
            }
          }
        }
      }
    }
  }
}
</style>
