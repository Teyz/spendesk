import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import { Wrapper } from "./components";
import Toaster from '@meforma/vue-toaster';

createApp(App)
  .use(router)
  .use(Toaster)
  .component("Wrapper", Wrapper)
  .mount('#app')
