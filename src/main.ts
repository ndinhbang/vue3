import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import DevUI from 'vue-devui';
import 'vue-devui/style.css';
import '@devui-design/icons/icomoon/devui-icon.css';
import { ThemeServiceInit, Theme, devuiLightTheme } from 'devui-theme';

const themeService = ThemeServiceInit();

const myLightTheme: Theme = new Theme({
    id: 'my-light-theme',
    name: 'My Light Theme',
    data: Object.assign({}, devuiLightTheme.data, {
        'b-global-bg': '#ccc',
    }),
    isDark: false,
});

console.log(devuiLightTheme)

themeService?.applyTheme(myLightTheme);

// ThemeServiceInit({
//     'my-light-theme': myLightTheme
// }, 'my-light-theme');

// import './assets/css/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(DevUI)

app.mount('#app')
