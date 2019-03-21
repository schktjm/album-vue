<template>
    <nav class="navbar is-dark is-fixed-top" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <router-link class="navbar-item" to="/">
                <img src="../assets/logo.png" height="28">
            </router-link>
        </div>

        <!--<a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">-->
        <!--<span aria-hidden="true"></span>-->
        <!--<span aria-hidden="true"></span>-->
        <!--<span aria-hidden="true"></span>-->
        <!--</a>-->
        <div class="navbar-menu">
            <div class="navbar-end" style="display: flex; align-items: center;">
                <b-field style="margin-right: 10px;">
                    <b-input placeholder="Search..."
                             type="search"
                             icon-pack="fas"
                             icon="search"
                             v-model="word"
                             @input="$emit('getWord',word)">
                    </b-input>
                </b-field>
            </div>
        </div>
    </nav>
</template>

<script>
    import BField from "buefy/src/components/field/Field";
    import BInput from "buefy/src/components/input/Input";

    export default {
        name: 'Navbar',
        components: {BInput, BField},
        data() {
            return {
                word: ''
            }
        },
        methods: {
        }
    }
</script>

<style></style>
