import { useData, inBrowser } from 'vitepress'
import { watchEffect } from 'vue'
import DefaultTheme from 'vitepress/theme'



export default {
    ...DefaultTheme,
    setup() {

        const { lang } = useData()
        watchEffect(() => {
            if (inBrowser) {
                document.cookie = `nf_lang=${lang.value}; expires=Mon, 1 Jan 2099 00:00:00 UTC; path=/`
            }
        })
    }
}