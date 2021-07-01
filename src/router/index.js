import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

Vue.use(VueRouter);

const Overview = () => import('@/components/Overview');
const Demo = () => import('@/components/Demo');
const Documentation = () => import('@/components/Documentation');
const About = () => import('@/components/About');
const Error404 = () => import('@/components/Error/Error404')

let routes = [{
    path: '/',
    redirect: '/overview'
}, {
    path: '/overview',
    component: Overview
}, {
    path: '/404',
    component: Error404
}]

if (store.state.config.components.demo.self)
    routes.push({
        path: '/demo',
        component: Demo
    })

if (store.state.config.components.documentation.self)
    routes.push({
        path: '/documentation',
        component: Documentation
    })

if (store.state.config.components.about.self)
    routes.push({
        path: '/about',
        component: About
    })

routes.push({
    path: '*',
    redirect: '/404'
})

const index = new VueRouter({
    routes
});

export default index;
