<template>
    <div>
        <!--<button class="button" @click="fetchImage">Get</button>-->
        <!--<button class="button" @click="fetchImageById">from ID</button>-->
        <div class="columns is-multiline">
            <div v-for="image in images" :key="image.id" class="column is-4">
                <base-image :data="image" width="256px"></base-image>
            </div>
        </div>
    </div>
</template>

<script>

    import BaseImage from './BaseImage';

    export default {
        name: 'Layout',
        components: {BaseImage},
        props: {BaseImage},
        data() {
            return {
                images: [],
                isShow: false
            }
        },
        created() {
            this.fetchImage();
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
                const url = 'https://wfc-2019.firebaseapp.com/images?';
                const limit = 'limit=' + 30 + '&';
                const offset = 'offset=' + 0;
                this.getData(url + limit + offset)
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