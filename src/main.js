import { createApp } from 'vue';
import store from '@/store';
import vAutoFocus from '@/directives/vAtuoFocus.js';
import App from '@/App.vue';
import router from '@/router';

const app = createApp(App);

app.directive('auto-focus', vAutoFocus);

app.use(router).use(store).mount('#app');
