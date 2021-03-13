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
              <span><strong>Bastien Rigaud</strong></span>
              <span class="email">bastien.rigaud@live.fr</span>
              <span>06 30 17 33 63</span>
              <span>14 rue Albert Pitres</span>
              <span>33000 Bordeaux</span>
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
import router from "@/router";
export default {
  name: "OrderReview",
  setup() {
    const toast = useToast();
    const email = ref("");
    const message = ref("");
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
            router.push({ name: "Home" });
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
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1024px) {
    height: calc(100vh - 70px);
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
        font-size: 20px;
      }
      p {
        color: rgba($text-color, 0.5);
        font-size: 16px;
        margin-bottom: 24px;
      }
    }
    .orderReviewContent {
      margin-top: 24px;
      h2 {
        color: $text-color;
        font-size: 14px;
        text-align: left;
      }

      .orderReviewCard {
        margin-top: 16px;
        padding: 16px;
        border: 1px solid rgba($text-color, 0.2);
        border-radius: 8px;
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

          span {
            font-size: 16px;

            &.email {
              color: #5d21d2;
            }
          }
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
      margin-top: 24px;
    }
  }
}
</style>
