<template>
    <div v-wave class="chip" :style="{ background: active? background: '#FF5E56', color: active? color: 'white'}">
        {{text}}
    </div>
</template>

<script>
    export default {
        name: "Chip",
        props: {
            text: {
                type: String,
            },
            background: {
                type: String,
                default: '#EEF0F2'
            },
            color: {
                type: String,
                default: '#000'
            },
            active: {
                type: Boolean,
                default: false
            },
        },
        methods: {
        },
    };
</script>

<style scoped>
    .chip {
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        padding: 20px 12px;
        margin-right: 8px;

        position: static;
        height: 24px;

        border-radius: 50px;
        font-weight: 400;
        font-size: 13px;
        line-height: 16px;
        cursor: pointer;
    }
</style>