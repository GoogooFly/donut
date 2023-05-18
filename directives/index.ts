import type { App } from "vue";
import { setupLazyloadDirective } from './lazyload';

/**
 * 配置和注册全局指令
 */
export function setupGlobDirectives(app: App) {
    setupLazyloadDirective(app);
}