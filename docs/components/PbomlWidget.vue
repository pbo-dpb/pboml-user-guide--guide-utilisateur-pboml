<template>
    <figure>

        <nav>
            <figcaption v-if="title">{{ title }}</figcaption>

        </nav>

        <div>
            <pboml-parser v-if="rawPboml" :payload="rawPboml" standalone="true" :edit="'true'"></pboml-parser>
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

    },
    data() {
        return {
            rawPboml: null,
        }
    },
    created() {
    },
    mounted() {
        this.retrieveSample();

    },
    components: {
    },
    methods: {
        async retrieveSample() {
            const response = await fetch(this.sample);
            const pboml = await response.text();
            this.rawPboml = pboml;
        },
    }


}

</script>
<style scoped>
figure {
    border: 2px solid #0ea5e9;
    padding: 0 1em 1em 1em;
    border-radius: 1em;
    margin: 1em -1em;
    box-shadow: 0 0 1em #e0f2fe;
    overflow: hidden
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