<template>
  <section class="cardsFullScreenRoot">
    <div class="cardsFullScreenMain">
      <div class="cardMain">
        <h3>113,854.56€</h3>
        <p>Disponible sur votre compte</p>
        <a href="" class="btn">Voir votre portefeuille</a>
      </div>
      <div class="cardList">
        <ul>
          <li>
            <img src="/img/icons/icon-payment.png" alt="" />
            <div>
              <h4>89,606.02€</h4>
              <p>Loaded on cards</p>
            </div>
          </li>
          <li>
            <img src="/img/icons/icon-card.png" alt="" />
            <div>
              <h4>89,606.02€</h4>
              <p>Loaded on cards</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- <div class="cardsFullScreenInfo">
      <div class="cardMain">
        <h4>Le saviez vous ?</h4>
        <p>Vous pouvez recruter Bastien Rigaud en tant que développeur web.</p>
        <a href="">En savoir plus</a>
      </div>
    </div> -->
  </section>
</template>

<script>
export default {
  name: "CardsFullScreen",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.cardsFullScreenRoot {
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;

  .cardList {
    display: flex;
    margin-top: 32px;
    @media screen and (min-width: 1024px) {
      margin-top: 0;
    }
    ul {
      display: flex;
      list-style: none;
      flex-direction: column;
      margin: 0;
      padding: 0;
      list-style: none;

      li {
        display: flex !important;
        justify-content: flex-start;
        align-items: center;
        width: 20vw;
        @media screen and (min-width: 1024px) {
          padding-left: 24px;
        }

        &:first-child {
          border-bottom: 1px solid #e8e8ed;
          padding-bottom: 24px;
        }

        &:last-child {
          padding-top: 24px;
        }

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

          h4 {
            font-size: 18px;
          }

          p {
            margin: 0;
            color: #4c4b5d;
            font-size: 16px;
          }
        }
      }
    }
  }
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    margin-top: 24px;

    .cardsFullScreenMain {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      border: 1px solid #e1e4ec;
      padding: 8px;

      .cardMain {
        background-color: #f8f8f9;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 32px 64px;

        p {
          color: #4c4b5d;
          font-size: 16px;
        }

        a {
          font-size: 16px;
        }
      }
    }

    .cardsFullScreenInfo {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #f8f8f9;
      border: 1px solid #e1e4ec;
      padding: 29px;
      margin-left: 32px;
      margin-right: 64px;

      .cardMain {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 32px 32px;

        h4 {
          color: #f3a78f;
        }

        p {
          color: #4c4b5d;
        }
      }
    }
  }
}
</style>
