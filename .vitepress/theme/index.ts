// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import { useData } from 'vitepress'
import './style/index.css'
import './style/scrollbar.css';
import 'virtual:windi.css'

import NaiveUI from 'naive-ui';

export default {
  ...Theme,
  Layout: () => {
    const props: Record<string, any> = {}

    const { frontmatter } = useData()

    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass
    }
    return h(Theme.Layout, props)
  },
  enhanceApp({ app, router, siteData }) {
    app.use(NaiveUI);
  }
}
