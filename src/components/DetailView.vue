<template>
    <div class="has-background-black" style=" height: 100%;">
        <a @click="isShow = !isShow">
            <base-image :data="data" :width="width"></base-image>
            <detail-view-card v-show="isShow" :data="data"></detail-view-card>
        </a>
    </div>
</template>

<script>
    import BaseImage from './BaseImage';
    import DetailViewCard from './DetailViewCard';
    import BLoading from "buefy/src/components/loading/Loading";
    import BIcon from "buefy/src/components/icon/Icon";

    export default {
        name: 'DetailView',
        components: {BIcon, BLoading, BaseImage, DetailViewCard},
        props: {},
        created() {
            this.data = this.fetchImageById();
        },
        data() {
            return {
                width: '1024px',
                data: {},
                isLoading: true,
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
            fetchImageById() {
                /*eslint no-console: ["error", { allow: ["warn", "error"] }] */
                const url = 'https://wfc-2019.firebaseapp.com/image/';
                const id = this.$route.params.id;
                this.getData(url + id)
                    .then(response => {
                        console.log(response);
                        this.data = response.data;
                        this.isLoading = false;
                    })
                    .catch(err => {
                        console.error(err);
                    });

            }
        }
    }
</script>

<style lang="scss" scoped>
    .parent {
        display: flex;

    }
</style>