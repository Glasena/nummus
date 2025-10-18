import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'unfonts.css'
import { VDateInput } from 'vuetify/labs/VDateInput'

//I18n - Traduções
import { i18n } from './i18n.js'

// Fonte padrão (Roboto)
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'

// Icones Material Design
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

// Pinia - State Management
import { createPinia } from 'pinia'

const app = createApp(App)

const vuetify = createVuetify({
  components: {
    ...components, // mantém todos os componentes padrão
    VDateInput,    // adiciona o manualmente
  },
  directives,
  icons: {
    defaultSet: 'mdi',
  },
})

const pinia = createPinia();

app.use(router);
app.use(vuetify);
app.use(i18n);
app.use(pinia);
app.mount('#app');
