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
            unixTime2ymd(intTime) {
                let d = new Date(intTime);
                let y = new Date(intTime * 1000);
                let year = y.getFullYear();
                let month = d.getMonth() + 1;
                let day = d.getDate();
                let hour = ('0' + d.getHours()).slice(-2);
                let min = ('0' + d.getMinutes()).slice(-2);
                let sec = ('0' + d.getSeconds()).slice(-2);
                return (year + '-' + month + '-' + day + ' ' + hour + ':' + min + ':' + sec);

            }
        }
    }
</script>

<style></style>