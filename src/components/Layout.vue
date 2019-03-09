<template>
    <div>
        <div class="columns is-multiline">
            <div v-for="image in images" :key="image.id" class="column is-4">
                <router-link :to="'/detail/'+image.id">
                    <base-image :data="image" width="256px" @click="Log('test')"></base-image>
                </router-link>
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
            Log(val) {
                console.log(val);
            },
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
        }
    }
</script>

<style lang="scss" scoped></style>