<template>
    <figure class="image parent" style="height: 100%;">
        <img :src="data.url" :style="{width: width}">
    </figure>
</template>

<script>

    export default {
        name: 'BaseImage',
        props: {
            data: {
                "location": {
                    "lat": Number,
                    "lng": Number
                },
                "id": String,
                "url": String,
                "title": String,
                "description": String,
                "postDatetime": String,
                "width": Number,
                "height": Number
            },
            width: String
        }
    }
</script>

<style lang="scss" scoped>
    .parent {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>