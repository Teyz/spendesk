<template>
  <section class="checkListRoot">
    <div class="checkListMain">
      <div class="checkListHeader">
        <h1>Découvrez Bastien Rigaud</h1>
        <p>
          Spendesk est la solution qui donne aux entreprises 100% de contrôle et
          visibilité sur l’ensemble des dépenses des salariés.
        </p>
      </div>
      <div class="checkListContent">
        <ul>
          <li>
            <div class="img">
              <img src="/img/icons/Phone_Turquoise.svg" alt="" />
            </div>
            <div>
              <h2>Nous vous rappelons dans l'heure (entre 8h30 et 19h).</h2>
              <p>
                Pour mieux comprendre vos besoins et répondre à vos questions.
              </p>
            </div>
          </li>
          <li>
            <div class="img">
              <img src="/img/icons/Phone_Turquoise.svg" alt="" />
            </div>
            <div>
              <h2>Nous vous rappelons dans l'heure (entre 8h30 et 19h).</h2>
              <p>
                Pour mieux comprendre vos besoins et répondre à vos questions.
              </p>
            </div>
          </li>
          <li>
            <div class="img">
              <img src="/img/icons/Phone_Turquoise.svg" alt="" />
            </div>
            <div>
              <h2>Nous vous rappelons dans l'heure (entre 8h30 et 19h).</h2>
              <p>
                Pour mieux comprendre vos besoins et répondre à vos questions.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <Form />
  </section>
</template>

<script>
import Form from "./Form";
export default {
  name: "CheckList",
  components: { Form },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.checkListRoot {
  margin-top: 64px;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;

  h1,
  h2,
  p {
    color: white !important;
  }

  @media screen and (min-width: 1024px) {
    margin-top: 0;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100vw;
    height: calc(100vh - 120px);
    background: radial-gradient(
      100% 110.92% at 100% 0,
      #5d21d2 17.19%,
      #4b1baf 100%
    );

    .checkListMain {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      margin-left: 80px;

      .checkListHeader {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        max-width: 50vw;

        h1 {
          font-weight: 800;
          font-size: 56px;
        }

        p {
          text-align: left;
        }
      }

      .checkListContent {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        ul {
          list-style: none;
          padding: 0;

          li {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding: 12px 0;

            .img {
              border-radius: 8px;
              height: 32px;
              width: 32px;
              background: hsla(0, 0%, 100%, 0.05);
              position: relative;
              margin-right: 16px;

              img {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
              }
            }

            div {
              display: flex;
              justify-content: center;
              align-items: flex-start;
              flex-direction: column;

              h2 {
                font-size: 18px;
              }

              p {
                color: #cabee9 !important;
                margin-bottom: 0;
                margin-top: 8px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
