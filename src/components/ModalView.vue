<template>
    <div class="card" style="overflow: scroll;">
        <div class="card-image">
            <figure class="image is-4by3">
                <img :src="data.url" alt="Image">
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-content">
                    <p class="title is-4">{{data.title}}</p>
                    <p class="subtitle is-6">{{data.author}}</p>
                </div>
            </div>

            <div class="content">
                id : {{data.id}}<br>
                link : <a :href="data.url"
                          style="display: block; width: 90%; white-space: nowrap; text-overflow: ellipsis; overflow: hidden">{{data.url}}</a>
                <br>
                <small>{{unixTime2ymd(data.postDatetime)}}</small>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ModalCard',
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
        },
        methods: {
            unixTime2ymd(time) {
                return Date(parseInt(time));
            }
        }
    }
</script>

<style></style>
