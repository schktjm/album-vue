<template>
    <div class="has-background-black" style=" height: 100%;">
        <div v-if="isLoading">
            <b-loading :is-full-page="true" :active.sync="isLoading" :can-cancel="true"></b-loading>
        </div>
        <div v-else class="columns">
            <base-image :data="data" :width="width" class="column is-9"></base-image>
            <detail-view-card :data="data" class="column"></detail-view-card>
        </div>
    </div>
</template>

<script>
    import BaseImage from './BaseImage';
    import DetailViewCard from './DetailViewCard';
    import BLoading from "buefy/src/components/loading/Loading";

    export default {
        name: 'DetailView',
        components: {BLoading, BaseImage, DetailViewCard},
        props: {},
        created() {
            this.data = this.fetchImageById();
        },
        data() {
            return {
                width: '1024px',
                data: {},
                isLoading: true
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
</style>