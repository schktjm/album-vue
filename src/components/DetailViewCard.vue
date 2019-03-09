<template>
    <base-card class="is-4 flexbox">
        <p class="title is-4">{{data.title}}</p>
        <p>*{{data.description}}</p>
        <p>*{{data.postDatetime}}</p>
        <p>*{{data.location.lat}}:{{data.location.lng}}</p>
        <p>*{{data.width}}x{{data.height}}</p>
    </base-card>
</template>

<script>
    import BaseCard from './BaseCard';

    export default {
        name: 'DetailViewCard',
        components: {BaseCard},
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
            }
        },
        data() {
            return {}
        }
    }
</script>

<style lang="scss" scoped>
    .flexbox {
        display: flex;
        flex-direction: column;
    }
</style>