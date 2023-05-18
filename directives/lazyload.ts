import type { App, Directive } from 'vue';

const lazyloadDirective: Directive = {
  mounted(el, binding) {
    const imgEl = el.children[0] as HTMLImageElement;

    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        imgEl.src = binding.value;
        observer.unobserve(el);
      }
    });
    observer.observe(el);
  }
}

export function setupLazyloadDirective(app: App) {
  app.directive('lazyload', lazyloadDirective);
}