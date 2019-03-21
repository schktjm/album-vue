<template>
    <div id="app">
        <navbar @getWord="val => this.searchWord = val"></navbar>
        <router-view :searchWord="searchWord"/>
    </div>
</template>

<script>
    import Navbar from './components/Navbar';

    export default {
        name: 'App',
        components: {Navbar},
        data() {
            return {
                searchWord: ''
            }
        }
    }
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        height: 100vh;
    }

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
