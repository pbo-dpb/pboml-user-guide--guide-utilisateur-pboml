import { useData, inBrowser } from 'vitepress'
import { watchEffect } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './custom.css'

import PbomlWidget from '../../components/PbomlWidget.vue'
import Icon from '../../components/Icon.js'

const pbomlDomain = "https://pboml.opbo-bdpb.ca/"
async function fetchPbomlParserScriptUrl() {
    const response = await fetch(`${pbomlDomain}manifest.json`);
    const payload = await response.json();
    let mainScript;
    Object.values(payload).forEach((file) => {
        if (file?.isEntry)
            mainScript = file.file
    })
    return mainScript;
}
const mainScriptPath = await fetchPbomlParserScriptUrl();

try {
    const scriptEl = document.createElement('script');
    scriptEl.setAttribute('src', `${pbomlDomain}${mainScriptPath}`);
    scriptEl.setAttribute('type', "module");
    scriptEl.setAttribute('crossorigin', 'anonymous');
    document.body.appendChild(scriptEl);
} catch (error) {

}


export default {
    ...DefaultTheme,
    setup() {

        const { lang } = useData()
        watchEffect(() => {
            if (inBrowser) {
                document.cookie = `nf_lang=${lang.value}; expires=Mon, 1 Jan 2099 00:00:00 UTC; path=/`
            }
        })
    },
    enhanceApp(ctx) {
        ctx.app.component('PbomlWidget', PbomlWidget)
        ctx.app.component('Icon', Icon)
    }
}