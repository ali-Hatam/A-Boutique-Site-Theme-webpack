import {
    createApp
} from 'vue'
import App from './App.vue'
import {
    router
} from "./routes";
import {
    store
} from "./assets/shared/store"

createApp(App).use(router).use(store).mount('#app')