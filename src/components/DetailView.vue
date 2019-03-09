<template>
    <div class="has-background-black columns" style=" height: 100%;">
        <base-image :data="data" :width="width" class="column is-9"></base-image>
        <detail-view-card :data="data" class="column"></detail-view-card>
    </div>
</template>

<script>
    import BaseImage from './BaseImage';
    import DetailViewCard from './DetailViewCard';

    export default {
        name: 'DetailView',
        components: {BaseImage, DetailViewCard},
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
            return {
                width: '1024px'
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>