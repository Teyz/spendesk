<template>
  <section class="orderReviewRoot">
    <div class="container">
      <form @submit.prevent="sendEmail">
        <div class="orderReviewHeader">
          <h1>Récapitulatif de la commande</h1>
          <p>Merci de prendre connaissance des informations ci-dessous.</p>
        </div>
        <div class="orderReviewContent">
          <h2>
            Vous allez rentrer en contact avec :
          </h2>
          <div class="orderReviewCard">
            <div class="cardContent">
              <span>Bastien Rigaud</span>
              <span>bastien.rigaud@live.fr</span>
              <span>0630173363</span>
              <span>ECV Digital Bordeaux</span>
              <span>14 rue Albert Pitres</span>
              <span>33000</span>
              <span>Bordeaux</span>
            </div>
            <img src="/img/tampon.png" alt="" />
          </div>
          <fieldset>
            <div class="input">
              <label for="email">Votre email</label>
              <input
                name="email"
                type="email"
                placeholder="bastien.rigaud@spendesk.com"
                v-model="email"
              />
            </div>
          </fieldset>
          <fieldset>
            <div class="input">
              <label for="message">Votre message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                cols="33"
                placeholder="Du blablabla habituel BUT ce texte sera utilisé lors de l'envoie de l'email à la prochaine étape."
                v-model="message"
              ></textarea>
            </div>
          </fieldset>
        </div>
        <div class="orderReviewFooter">
          <button class="btn btn--purple">
            Commander Bastien Rigaud
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import emailjs from "emailjs-com";
import { useToast } from "vue-toastification";
import store from "../../store/store";
import router from "@/router";
export default {
  name: "OrderReview",
  setup() {
    const toast = useToast();
    const email = ref("");
    const message = store.state.message;
    const sendEmail = (e) => {
      emailjs
        .sendForm(
          "spendesk",
          "template_f3b7iq7",
          e.target,
          "user_tcs5iwe4k2fIRxH8ZaI4J",
          {
            message: message.value,
            email: email.value,
          }
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result);
            toast("Email envoyé !", {
              toastClassName: "spendesk",
              position: "top-right",
            });
            router.push({ name: "Index" });
          },
          (error) => {
            console.log("FAILED...", error);
            toast.error("Une erreur est survenue", {
              position: "top-right",
            });
          }
        );
    };
    return {
      email,
      message,
      sendEmail,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.orderReviewRoot {
  height: calc(100vh - 92px);
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1024px) {
    height: auto;
  }
  .container {
    background-color: #fff;
    padding: 32px;
    border: 1px solid rgba($text-color, 0.2);
    width: 80vw;

    @media screen and (min-width: 1024px) {
      width: auto;
    }

    .orderReviewHeader {
      border-bottom: 1px solid rgba($text-color, 0.2);
      h1 {
        color: $text-color;
        font-size: 22px;
      }
      p {
        color: rgba($text-color, 0.5);
      }
    }
    .orderReviewContent {
      margin-top: 48px;
      h2 {
        color: $text-color;
        font-size: 18px;
        text-align: left;
      }

      .orderReviewCard {
        margin-top: 16px;
        padding: 16px;
        border: 1px solid rgba($text-color, 0.2);
        display: flex;
        justify-content: space-between;
        align-items: flex-start;

        @media screen and (min-width: 1024px) {
          padding: 32px;
        }

        .cardContent {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
        }
        img {
          width: 50px;

          @media screen and (min-width: 1024px) {
            width: 150px;
          }
        }
      }
      fieldset {
        border: none;
        margin-top: 16px;
        padding: 0;

        .input {
          display: flex;
          flex-direction: column;
          width: 100%;
        }
      }
    }

    .orderReviewFooter {
      margin-top: 32px;
    }
  }
}
</style>
