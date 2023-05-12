// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import { useData } from 'vitepress'
import './style/index.css'
import './style/scrollbar.css';
import 'virtual:windi.css'
import { NConfigProvider, darkTheme, lightTheme, NMessageProvider } from 'naive-ui';

export default {
  ...Theme,
  Layout: () => {
    const props: Record<string, any> = {}
    // const {} = useTheme();
    const { frontmatter } = useData()

    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass
    }

    return h(NConfigProvider, { theme: darkTheme }, () => h(NMessageProvider, null, () => h(Theme.Layout, props)))
  },
  enhanceApp({ app, router, siteData }) {
    // app.use(NaiveUI);
  }
}
