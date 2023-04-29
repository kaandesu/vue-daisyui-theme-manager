import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createThemeManager } from '../src/themeManager'

const app = createApp(App)
app.use(createThemeManager({ light: 'light', dark: 'dark', watchSystemTheme: true }))

app.mount('#app')
