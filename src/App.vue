<template>
  <div id="nav" class="topnav">
    <div class="navbar">
      <a class="nav-item" href="/">
        <img src="/img/logo.png" alt="" />
      </a>
      <p class="nav-item active" href="/#">Request</p>
      <p class="nav-item" href="/#">Payments</p>
      <p class="nav-item" href="/#">Subscriptions</p>
      <p class="nav-item" href="/#">Cards</p>
      <p class="nav-item" href="/#">Invoices</p>
      <p class="nav-item" href="/#">Settings</p>
    </div>
    <div class="profile">
      <a href="" class="btn btn--download">Visit my CV</a>
      <img src="/img/icons/pp.jpg" alt="" />
    </div>
  </div>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
#app {
  font-family: "GTAmerica";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  .profile {
    margin-right: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 1024px) {
    .topnav {
      display: flex;
      justify-content: space-between;

      .navbar {
        display: flex;
        justify-content: center;
        align-items: center;

        .nav-item {
          color: #9f9faf;
          padding: 8px 24px;
          font-weight: 800;

          &.active {
            color: white;
          }
        }
      }

      .profile {
        margin-right: 40px;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 50px;
          height: 50px;
        }
      }
    }
  }
}
</style>
