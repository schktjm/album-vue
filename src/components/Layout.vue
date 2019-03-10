<template>
    <div class="has-background-black">
        <div class="columns is-multiline is-centered">
            <div v-for="(image, idx) in images" :key="idx"
                 class="column  is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
                <a @click="actievModal(image)">
                    <base-image :data="image" class="is-1by1"></base-image>
                </a>
                <!--<router-link :to="'/detail/'+image.id">-->
                <!--<base-image :data="image" class="is-1by1"></base-image>-->
                <!--</router-link>-->
            </div>
            <b-modal :active.aync="isModalActive" has-modal-card scroll="keep" @close="isModalActive=false">
                <modal-view :data="activeModalImg" style="max-width: 512px;"></modal-view>
            </b-modal>
            <infinite-loading spinner="spiral" @infinite="fetchImage" class="column is-full"></infinite-loading>
        </div>
    </div>
</template>

<script>

    import BaseImage from './BaseImage';
    import InfiniteLoading from 'vue-infinite-loading';
    import ModalView from './ModalView';
    import BModal from "buefy/src/components/modal/Modal";

    export default {
        name: 'Layout',
        components: {BModal, BaseImage, InfiniteLoading, ModalView},
        props: {BaseImage},
        data() {
            return {
                images: [],
                page: 0,
                isModalActive: false,
                activeModalImg: {}
            }
        },
        computed: {},
        created() {
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
                const url = 'https://wfc-2019.firebaseapp.com/images?';
                const limit = 'limit=' + 12 + '&';
                const offset = 'offset=' + this.page;
                this.getData(url + limit + offset)
                    .then(res => {
                        if (res.data.images.length) {
                            this.page += 12;
                            this.images.push(...res.data.images);
                            $state.loaded();
                        } else {
                            $state.complete();
                        }
                    })
                    .catch(err => {
                        console.error(err);
                    });
            },
            actievModal(img) {
                this.isModalActive = true;
                this.activeModalImg = img;
            }
        }
    }
</script>

<style lang="scss" scoped></style>