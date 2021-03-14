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
                    <div class="radio-list">
                      <div class="radio-container">
                        <input
                          class="radio-select"
                          type="radio"
                          name="radio"
                          value="hour"
                          checked
                        />
                        <div class="icon-container">
                          <div class="icon-container-header">
                            <img
                              src="/img/icons/icon-payment-blue.png"
                              alt=""
                            />
                            <span>Contrat de professionnalisation</span>
                          </div>
                          <p>
                            Sur un rythme de 4 jours en entreprise et 1 jour en
                            formation.
                          </p>
                        </div>
                      </div>
                      <div class="radio-container">
                        <input
                          class="radio-select"
                          type="radio"
                          name="radio"
                          value="ship"
                          disabled
                        />
                        <div class="icon-container">
                          <div class="icon-container-header">
                            <img src="/img/icons/icon-reload.png" alt="" />
                            <span>Contrat d'apprentissage</span>
                          </div>
                          <p>
                            Ce contrat est indisponible actuellement.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset>
                <div class="inputs">
                  <div class="input">
                    <label for="price">Cadre de la formation</label>
                    <input
                      name="price"
                      type="text"
                      disabled
                      placeholder="Mastère Développement web"
                    />
                  </div>
                </div>
              </fieldset>
              <fieldset>
                <div class="inputs">
                  <div class="input">
                    <label for="fournisseur">Fournisseur</label>
                    <div class="input-container">
                      <input
                        name="fournisseur"
                        type="text"
                        disabled
                        placeholder="ECV Digital Bordeaux"
                        class="fournisseurInput"
                      />
                      <img src="/img/ecv-black.svg" class="input_img" />
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset>
                <div class="inputs">
                  <div class="input">
                    <label for="formation">Code analytiques</label>
                    <select>
                      <option value="" selected disabled hidden
                        >Rencontre avec un candidat</option
                      >
                      <option value="1" disabled>Prendre un café</option>
                    </select>
                  </div>
                </div>
              </fieldset>
              <fieldset>
                <div class="inputs">
                  <div class="submit">
                    <button class="btn btn--white" @click="showForm()">
                      Annuler
                    </button>

                    <button
                      to="/commande"
                      @click="saveForm()"
                      class="btn btn--purple"
                    >
                      Confirmer
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
import router from "@/router";
export default {
  name: "Form",
  setup() {
    let showAction = ref(true);
    const showForm = () => {
      event.preventDefault();
      showAction.value = !showAction.value;
    };
    const saveForm = () => {
      event.preventDefault();
      router.push({ name: "Commande" });
    };

    return {
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
            width: 32px;
            height: 32px;
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
              font-size: 14px;
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

              .input-container {
                position: relative;
                display: flex;
                flex-direction: column;
                width: 100%;

                input {
                  padding-left: 48px;
                }
                .input_img {
                  position: absolute;
                  top: 50%;
                  left: 12px;
                  transform: translateY(-50%);
                  width: 32px;
                  height: 32px;
                }
              }

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
    height: calc(100vh - 70px);
    overflow-y: scroll;
    width: 370px;
    background-color: #fff;
    position: absolute;
    top: 70px;
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
              width: 32px;
              height: 32px;
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
              margin-top: 10px;

              .inputs {
                display: flex;
                width: 100%;

                .input {
                  display: flex;
                  flex-direction: column;
                  padding: 0 8px;
                  width: 100%;

                  .input-container {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    width: 100%;

                    input {
                      padding-left: 48px;
                    }
                    .input_img {
                      position: absolute;
                      top: 50%;
                      left: 12px;
                      transform: translateY(-50%);
                      width: 32px;
                      height: 32px;
                    }
                  }

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
$white: #ffffff;
$bg: #6ebdf9;
.radio-list {
  display: flex;
  flex-wrap: wrap;
}
.radio-container {
  &:first-child {
    margin-bottom: 16px;
  }
  position: relative;
  width: 100%;

  & .icon-container {
    padding: 16px;
    border: 1px $bg solid;
    border-radius: 5px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    .icon-container-header {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 4px;

      img {
        width: 18px;
        height: 18px;
      }
    }
  }

  & span {
    margin-left: 8px;
    font-size: 14px;
    text-align: left;
    font-weight: 800;
  }

  & p {
    font-size: 12px;
    text-align: left;
    margin: 0;
    line-height: 16px;
    color: #9090a3;
  }

  & .radio-select {
    margin: 0;
    padding: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    width: 100%;
    height: 100%;

    $trans: all 0.3s ease-in-out;
    &:checked + .icon-container {
      background-color: #f0f9fe;
    }

    &:disabled + .icon-container {
      background-color: #fafafa;
      border: 1px solid #c0c0c7;

      span {
        color: #908f9e;
      }
    }
  }
}
</style>
