<template>
  <div class="formRoot">
    <div class="modal">
      <div class="formContainer">
        <div class="formContent">
          <form>
            <fieldset>
              <div class="legend">
                <h3>Remplissez ce formulaire :</h3>
              </div>
              <div class="inputs">
                <div class="input">
                  <label for="username">Prénom</label>
                  <input type="text" />
                </div>
                <div class="input">
                  <label for="name">Nom</label>
                  <input type="text" />
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Form",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.formRoot {
  margin-left: 64px;
  min-width: 496px;

  .modal {
    max-width: 496px;
    margin: 0 auto;

    .formContainer {
      border-radius: 8px;
      background: #fff;
      padding: 48px;
      box-shadow: 0 0 1px 0 rgba(0, 0, 0, 22%);
      overflow: hidden;
      z-index: 1;

      .formContent {
        form {
          margin: 0;

          fieldset {
            border: none;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;

            .inputs {
              display: flex;

              .input {
                display: flex;
                flex-direction: column;
                padding: 0 8px;
              }
            }

            h3 {
              font-size: 24px;
              margin-bottom: 24px;
              color: #040222;
            }
          }
        }
      }
    }
  }
}
</style>
