<template>
  <section class="slideRoot">
    <div class="sliderContainer">
      <div class="cardList" v-if="showAction">
        <ul>
          <a href="" @click="showForm()">
            <li>
              <img src="/img/icons/icon-card-purple.png" alt="" />
              <div>
                <h4>Générer une carte virtuelle</h4>
                <p>Pour débloquer un nouvel alternant</p>
              </div>
            </li>
          </a>
          <li>
            <img src="/img/icons/icon-remboursement.png" alt="" />
            <div>
              <h4>Demander un remboursement</h4>
              <p>Pour être remboursé</p>
            </div>
          </li>
          <li>
            <img src="/img/icons/icon-facture.png" alt="" />
            <div>
              <h4>Soumettre une facture</h4>
              <p>Pour payer un fournisseur</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="modal" v-else>
        <div class="formContainer">
          <div class="formHeader">
            <h3>Recruter un nouvel alternant</h3>
            <img @click="showForm()" src="/img/icons/cross2.svg" alt="" />
          </div>
          <div class="formContent">
            <form>
              <fieldset>
                <div class="inputs">
                  <div class="input">
                    <label for="alternance">Type d'alternance</label>
                    <input
                      name="alternance"
                      type="text"
                      placeholder="Contrat de professionnalisation"
                    />
                  </div>
                </div>
              </fieldset>
              <fieldset>
                <div class="inputs">
                  <div class="input">
                    <label for="price">Coup de la formation</label>
                    <input
                      name="price"
                      type="text"
                      disabled
                      placeholder="8000€"
                    />
                  </div>
                </div>
              </fieldset>
              <fieldset>
                <div class="inputs">
                  <div class="input">
                    <label for="formation">Lieu de la formation</label>
                    <select>
                      <option value="" selected disabled hidden
                        >ECV Digital Bordeaux</option
                      >
                      <option value="1" disabled
                        >Hop hop doucement ! Je compte rester à l'ECV.</option
                      >
                    </select>
                  </div>
                </div>
              </fieldset>
              <fieldset>
                <div class="inputs">
                  <div class="input">
                    <label for="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      cols="33"
                      placeholder="Du blablabla habituel BUT ce texte sera utilisé lors de l'envoie de l'email à la prochaine étape."
                      v-model="message"
                    ></textarea>
                  </div>
                </div>
              </fieldset>
              <fieldset>
                <div class="inputs">
                  <div class="submit">
                    <button class="btn btn--white" @click="showForm()">
                      Cancel
                    </button>

                    <button
                      to="/commande"
                      @click="saveForm()"
                      class="btn btn--purple"
                    >
                      Confirmer ma demande
                    </button>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import store from "../store/store";
import router from "@/router";
export default {
  name: "Form",
  setup() {
    let message = ref("");
    let showAction = ref(true);
    const showForm = () => {
      event.preventDefault();
      showAction.value = !showAction.value;
    };
    const saveForm = () => {
      event.preventDefault();
      store.state.message = message.value;
      router.push({ name: "Commande" });
    };
    return {
      message,
      showAction,
      showForm,
      saveForm,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.slideRoot {
  z-index: 1;
  position: relative;

  display: block;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 32px 0 0 0;
  background-color: #fff;

  .sliderContainer {
    .cardList {
      display: flex;
      background-color: white;
      width: auto;
      ul {
        display: flex;
        list-style: none;
        flex-direction: column;
        padding: 0;
        margin: 0;

        li {
          width: auto;
        }

        a {
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }
        }

        li {
          display: flex !important;
          justify-content: flex-start;
          align-items: center;
          padding: 24px;
          border-bottom: 1px solid rgba(#4c4b5d, 0.2);
          width: auto;

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
              font-size: 16px;
            }

            p {
              font-size: 16px;
              text-align: left;
              margin: 0;
              color: #4c4b5d;
            }
          }
        }
      }
    }

    .formContainer {
      .formHeader {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid rgba(#4c4b5d, 0.5);
        padding: 24px;

        h3 {
          font-size: 20px;
          color: rgba(#4c4b5d, 0.8);
          text-align: left;
        }
      }
      .formContent {
        form {
          margin: 0;

          fieldset {
            border: none;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            margin-top: 16px;

            .inputs {
              display: flex;
              width: 100%;

              .input {
                display: flex;
                flex-direction: column;
                padding: 0 8px;
                width: 100%;

                .error {
                  color: red;
                  text-align: left;
                  font-size: 14px;
                }
              }

              .submit {
                display: flex;
                padding: 0 8px;
                width: 100%;
              }
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 1024px) {
    margin: 0;
    height: calc(100vh - 92px);
    width: 450px;
    background-color: #fff;
    position: absolute;
    top: 92px;
    right: 0;

    .sliderContainer {
      .cardList {
        display: flex;
        background-color: white;
        ul {
          display: flex;
          list-style: none;
          flex-direction: column;
          padding: 0;
          margin: 0;
          width: 100%;

          a {
            text-decoration: none;

            &:hover {
              text-decoration: underline;
            }
          }

          li {
            display: flex !important;
            justify-content: flex-start;
            align-items: center;
            padding: 24px;
            border-bottom: 1px solid rgba(#4c4b5d, 0.2);
            width: 100%;

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

      .formContainer {
        .formHeader {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(#4c4b5d, 0.5);
          padding: 24px;

          h3 {
            font-size: 20px;
            color: rgba(#4c4b5d, 0.8);
            text-align: left;
          }
        }
        .formContent {
          form {
            margin: 0;

            fieldset {
              border: none;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: flex-start;
              margin-top: 16px;

              .inputs {
                display: flex;
                width: 100%;

                .input {
                  display: flex;
                  flex-direction: column;
                  padding: 0 8px;
                  width: 100%;

                  .error {
                    color: red;
                    text-align: left;
                    font-size: 14px;
                  }
                }

                .submit {
                  display: flex;
                  padding: 0 8px;
                  width: 100%;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
