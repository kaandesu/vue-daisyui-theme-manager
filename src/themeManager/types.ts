export * from './index'
export * from './reactives'
import { useThemeManager } from './index'
declare module 'vue' {
  interface globalProperties {
    $theme: typeof useThemeManager
  }
}
