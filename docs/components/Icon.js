import { h } from 'vue'

export default {
    props: {
        hero: {
            type: String,
            required: true
        },
    },

    render() {
        return h('img', { src: `/heroicons/${this.hero}.svg`, alt: this.hero, style: { height: '20px', display: 'inline', verticalAlign: 'sub' } })
    }
}