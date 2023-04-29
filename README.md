# Vue Daisy UI Theme Manager Plugin

This plugin allows you to change the theme of your application at runtime. It also allows you to watch for system theme changes and update the theme accordingly.

[live-demo](https://kaandesu.github.io/vue-daisyui-theme-manager/)

Install:

```bash
npm i vue-daisyui-theme-manager
```

## Setup

As you install `theme-manager.config.ts` will be automatically created and added to the root folder of your project. <br> You can set up the available themes in this file. It will be also used as type definition. But don't forget to specify the list of themes in `tailwind.config.js` as well. More information about setting up the themes at [DaisyUI Themes Setup](https://daisyui.com/docs/themes/).

# API

## Initial Setup

As you insts

## Plugin Setup: `createThemeManager`

Initiate the plugin with the default theme and the dark theme. Theme options are from Daisiy UI themes as well as some custom added themes. Check all the built-in [DaisyUI Themes](https://daisyui.com/docs/themes/). <br> Create your own custom daisy ui theme [here](https://daisyui.com/theme-generator/) and add it to the `tailwind.config.js` file! <br>

```ts
type DaisyThemes = "light" | "default" | "dark" | "cupcake" |
 "bumblebee" | "emerald" | "corporate" | "synthwave" | "retro" | "cyberpunk" |
  "valentine" | "halloween" | "garden" |  'forest' | 'aqua' | 'lofi' | 'pastel' |
  'fantasy' | 'wireframe' | 'black' | 'luxury' | 'dracula' | 'cmyk' | 'autumn' |
  'business' | 'acid' | 'lemonade' | 'night' | 'coffee' | | "winter"
```

### Type definition

```ts
export type ThemeOptions = {
  light: DaisyThemes
  dark: DaisyThemes
  watchSystemTheme: boolean
}

createThemeManager(options?: ThemeOptions): (app: App) => void
```

### Usage in main.ts

The `light` and `dark` options are the default themes that will be used when "`toggleDark()`" is called. Or when "`set({theme:'default'})`" is being called.

```ts
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import { createThemeManager } from '@/plugins/themeManager'

const app = createApp(App)
app.use(
  createThemeManager({
    light: 'aqua',
    dark: 'coffee',
    watchSystemTheme: true,
  })
)

app.mount('#app')
```

<hr />

## Usage in the component: `useThemeManager()`

### Type definition

```ts
const themeManagerInstance = {
  set,
  get,
  toggleDark,
  setDefaults,
  getDefaults,
  watchSystemTheme,
  isDark,
}
```

### Installation

```ts
import { useThemeManager } from '@/plugins/themeManager'
const $theme = useThemeManager()
```

### Methods

- `set` - Set a theme from the daisy theme options defined in the `tailwind.config.js`<br> Type definition:
  ```ts
  set({theme: DaisyThemes}): void
  ```
  usage example:
  ```ts
  $theme.set({theme:'light'})
  ```
- `get` - Get the current active theme <br> Type definition:
  ```ts
  get(): DaisyThemes
  ```
  Usage example:
  ```ts
  $theme.get() // ie: 'coffee'
  ```
- `toggleDark` - Toggle between the default light and dark themes that were defined in the plugin setup <br> Type definition:
  ```ts
  toggleDark(): void
  ```
  Usage example:
  ```ts
  $theme.toggleDark()
  ```
- `setDefaults` - Set the default light and dark themes after the plugin has been initiated. <br> Type definition:
  ```ts
  setDefaults(themes: { light?: DaisyThemes; dark?: DaisyThemes }): void
  ```
  Usage example:
  ```ts
  $theme.setDefaults({ light: 'aqua', dark: 'business' })
  ```
- `getDefaults` - Get the default light and dark themes <br> Type definition:
  ```ts
  getDefaults(): { light: DaisyThemes; dark: DaisyThemes }
  ```
  Usage example:
  ```ts
  $theme.getDefaults() // ie: { light: 'aqua', dark: 'business' }
  ```
- `watchSystemTheme` - Watch for system theme changes, and set if you want it to update the theme `immediately` to the default theme that corresponds to the system mode (light/dark). `updateTheme` is set to `true` by default. <br> Type definition:
  ```ts
  watchSystemTheme(bool?: boolean, updateTheme: boolean = true): boolean
  ```
  Usage example:
  ```ts
  /* Returns if the theme manager watching the active system theme */
  $theme.watchSystemTheme() // ie: true
  /*
    Theme will change to the default theme that corresponds
    to the system mode (light/dark)
  */
  $theme.watchSystemTheme(true)
  /* theme will remain the same even if the system theme changes */
  $theme.watchSystemTheme(false)
  /* theme will not change immidiatly to the default theme that corresponds to the system mode (light/dark)
     it will change if the theme of the system changes again
  */
  $theme.watchSystemTheme(true, false)
  ```
- `isDark` - Get the current system theme <br> Type definition:
  ```ts
  isDark(): boolean
  ```
  Usage example:
  ```ts
  $theme.isDark() // ie: true
  ```

<hr>

## Contributing

Contributions to the project is highly appreciated. If you have any suggestions/questions/requests please consider [opening an issue](https://github.com/kaandesu/vue-daisyui-theme-manager/issues/new). If you want to contribute to the project, fixing an open issue is greatly recommended and appreciated. To see the all contribution rules please check the [contribution rules](CONTRIBUTING.md).

## License

This project is licensed under `MIT License` if you want to see more, please check [LICENSE](LICENSE) for more information.

## Credits

This project is created and actively maintained by [kaandesu](https://github.com/kaandesu)
