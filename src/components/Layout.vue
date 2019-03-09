<template>
    <div>
        <button class="button" @click="fetchImage">Get</button>
        <button class="button" @click="fetchImageById">from ID</button>
        <div v-for="image in images" :key="image.id">
            <figure class="image">
                <img :src="image.url">
            </figure>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Layout',
        data() {
            return {
                images: [],
                isShow: false
            }
        },
        methods: {
            getData(url) {
                return fetch(url, {
                    method: 'GET',
                    mode: "cors",
                })
                    .then(response => response.json())

            },
            fetchImage() {
                console.log('get');
                const url = 'https://wfc-2019.firebaseapp.com/images?limit=&offset=';
                this.getData(url)
                    .then(res => {
                        this.images = res.data.images;
                        console.log(this.images);
                        this.isShow = true;
                    })
                    .catch(err => {
                        console.error(err)
                    });
            },
            fetchImageById() {
                const url = 'https://wfc-2019.firebaseapp.com/image/';
                const id = '4034688';
                this.getData(url + id)
                    .then(response => console.log(response))
                    .catch(err => console.error(err));

            }
        }
    }
</script>

<style lang="scss" scoped></style>