<template>
  <div id="nav" class="topnav">
    <div class="navbar">
      <a class="nav-item" href="/#home">
        <img src="/img/logo.png" alt="" />
      </a>
      <a class="nav-item active" href="/#home">Request</a>
      <a class="nav-item" href="/#aboutme">Payments</a>
      <a class="nav-item" href="/#portfolio">Subscriptions</a>
      <a class="nav-item" href="/#experiences">Cards</a>
      <a class="nav-item" href="/#contact">Invoices</a>
      <a class="nav-item" href="/#contact">Settings</a>
      <svg viewBox="0 0 100 80" width="40" height="40" v-on:click="showMenu()">
        <rect width="100" height="10" rx="4" fill="white"></rect>
        <rect y="30" width="100" height="10" rx="4" fill="white"></rect>
        <rect y="60" width="100" height="10" rx="4" fill="white"></rect>
      </svg>
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

  .topnav {
    display: flex;
    justify-content: space-between;

    .navbar {
      display: flex;
      justify-content: center;
      align-items: center;
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
</style>
