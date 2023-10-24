<template>
    <figure ref="figure" :style="{ 'margin-right': setToMargin }" style="z-index: 100; background-color: white;">

        <nav>
            <figcaption v-if="title">{{ title }}</figcaption>

        </nav>

        <div>
            <pboml-parser v-if="rawPboml && mode === 'edit'" :payload="rawPboml" standalone="true"
                edit="true"></pboml-parser>
            <pboml-parser v-if="rawPboml && mode === 'preview'" :payload="rawPboml" standalone="true"></pboml-parser>
        </div>

    </figure>
</template>
<script>
export default {
    props: {
        sample: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: false
        },
        mode: {
            type: String,
            required: false,
            default: 'edit',
            validator(value) {
                if (!value) return true;
                return ['preview', 'edit'].includes(value)
            }
        }
    },
    data() {
        return {
            rawPboml: null,
            setToMargin: null
        }
    },
    mounted() {
        this.retrieveSample();
        this.setBringToMargin();
        window.addEventListener('resize', this.setBringToMargin);
        this.setAsideContentZIndex();
    },
    components: {
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.setBringToMargin);
    },
    methods: {
        async retrieveSample() {
            const response = await fetch(this.sample);
            const pboml = await response.text();
            this.rawPboml = pboml;
        },
        setBringToMargin() {
            const parentNode = this.$refs.figure.parentNode;
            const containerNode = this.$refs.figure.closest(".container");
            const contentNode = this.$refs.figure.closest(".content");
            if (!parentNode || !containerNode || !contentNode)
                return '0';

            const parentWidth = parentNode.offsetWidth;
            const container = containerNode.offsetWidth;
            const padding = parseFloat(window.getComputedStyle(contentNode, null).getPropertyValue('padding-left'));

            this.setToMargin = `-${container - parentWidth - (2 * padding)}px`
        },
        setAsideContentZIndex() {
            const asideContents = document.querySelectorAll(".aside-content");
            asideContents.forEach(asideContent => {
                let parentEl = asideContent.closest('.aside');
                if (parentEl) parentEl.style.zIndex = -100;
            })
        }
    },


}

</script>
<style scoped>
figure {
    border: 2px solid #0ea5e9;
    padding: 0 1em 1em 1em;
    border-radius: 1em;
    margin: 1em -1em;
    box-shadow: 0 0 1em #e0f2fe;
    overflow: hidden;
}

nav {
    background: #0ea5e9;
    margin: 0 -1em 0.5em -1em;
    padding: 0.5em 1em;
    color: #fff;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
}

nav>figcaption {
    font-size: 1.25em;
    font-weight: 400
}
</style>