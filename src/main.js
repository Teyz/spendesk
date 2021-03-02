import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import { Wrapper } from "./components";
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
import store from "./store/store";

createApp(App)
  .use(router)
  .use(store)
  .use(Toast)
  .component("Wrapper", Wrapper)
  .mount('#app')
