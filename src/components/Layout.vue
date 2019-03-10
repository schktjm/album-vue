<template>
    <div class="has-background-black">
        <div class="columns is-multiline">
            <div v-for="image in images" :key="image.id" class="column is-4">
                <router-link :to="'/detail/'+image.id">
                    <base-image :data="image" class="is-1by1"></base-image>
                </router-link>
            </div>
            <infinite-loading spinner="spiral" @infinite="fetchImage" class="column is-full"></infinite-loading>
        </div>
    </div>
</template>

<script>

    import BaseImage from './BaseImage';
    import InfiniteLoading from 'vue-infinite-loading';

    export default {
        name: 'Layout',
        components: {BaseImage, InfiniteLoading},
        props: {BaseImage},
        data() {
            return {
                images: [],
                page: 0
            }
        },
        computed: {},
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
            fetchImage($state) {
                /*eslint no-console: ["error", { allow: ["warn", "error"] }] */
                console.log('get');
                const url = 'https://wfc-2019.firebaseapp.com/images?';
                const limit = 'limit=' + 10 + '&';
                const offset = 'offset=' + this.page;
                this.getData(url + limit + offset)
                    .then(res => {
                        console.log('res', res);
                        if (res.data.images.length) {
                            this.page += 10;
                            this.images.push(...res.data.images);
                            $state.loaded();
                        } else {
                            $state.complete();
                        }
                    })
                    .catch(err => {
                        console.log('aaa');
                        console.error(err);
                    });
            },
        }
    }
</script>

<style lang="scss" scoped></style>