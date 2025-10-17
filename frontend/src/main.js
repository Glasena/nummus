import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'unfonts.css'

//I18n - Traduções
import { i18n } from './i18n.js'

// Fonte padrão (Roboto)
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'

// Icones Material Design
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

const app = createApp(App)

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
  },
})

app.use(router);
app.use(vuetify);
app.use(i18n);
app.mount('#app');
