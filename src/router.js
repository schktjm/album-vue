import Vue from 'vue'
import Router from 'vue-router'
import Layout from './components/Layout';
import DetailView from './components/DetailView';


Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'layout',
            component: Layout
        },
        {
            path: '/detail/:id',
            name: 'detail',
            component: DetailView
        },
    ]
})
