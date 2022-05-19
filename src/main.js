import {
    createApp
} from 'vue'
import App from './App.vue'

import {
    store
} from "./assets/shared/store"

createApp(App).use(store).mount('#app')