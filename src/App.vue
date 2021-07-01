<template>
    <div class="transition-25 bg-color">
        <header-bar/>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
        <footer-bar/>
    </div>
</template>

<script>

import {mapState} from 'vuex'

import HeaderBar from "@/components/HeaderBar";
import FooterBar from "@/components/FooterBar";

function loadStylesheet(url) {
    let head = document.getElementsByTagName('head')[0];
    let link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = url;
    link.setAttribute('name', 'theme-stylesheet');
    head.appendChild(link);
}

function removeStylesheet() {
    let head = document.getElementsByTagName('head')[0];
    for (let i = 0; i < head.children.length; i++)
        if (head.children[i].tagName === 'LINK' && head.children[i].getAttribute('name') === 'theme-stylesheet')
            head.removeChild(head.children[i]);
}

export default {
    name: 'App',
    computed: {
        ...mapState([
            'config',
            'theme'
        ])
    },
    created() {
        removeStylesheet();
        if (this.theme === 'default')
            loadStylesheet('css/light-theme.css');
        else
            loadStylesheet('css/dark-theme.css');
    },
    components: {
        HeaderBar,
        FooterBar
    }
}

</script>

<style lang="scss" scoped>

.fade-enter-active {
    transition: opacity .3s;
}

.fade-enter {
    opacity: 0;
}

.fade-leave {
    opacity: 1;
}

.fade-leave-active {
    opacity: 0;
    transition: opacity .3s;
}

</style>
