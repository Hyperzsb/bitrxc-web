<template>
    <b-navbar tag="header" toggleable="md" sticky
              class="custom-navbar transition-25 header-bg-color" :class="headerBarClass">
        <b-navbar-brand href="/" :active="true" tag="h1">
            <img v-if="config.header.logo" :src="config.project.logo" :title="$t('messages.project.name')"
                 class="custom-nav-logo">
            <b v-if="config.header.name" class="transition-25 link-color">{{ $t('messages.project.name') }}</b>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse">
            <template v-slot:default="{ expanded }">
                <b-icon v-if="expanded" icon="chevron-bar-up" class="icon-color"></b-icon>
                <b-icon v-else icon="chevron-bar-down" class="icon-color"></b-icon>
            </template>
        </b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item to="/overview" replace>
                    <b class="pb-1 pt-3 pt-md-1 mr-2 custom-button" :class="navItemClass(0)">
                        {{ $t('messages.components.headerBar.overview') }}
                    </b>
                </b-nav-item>
                <b-nav-item v-if="config.components.demo.self" to="/demo" replace>
                    <b class="pb-1 pt-1 mr-2 custom-button" :class="navItemClass(1)">
                        {{ $t('messages.components.headerBar.demo') }}
                    </b>
                </b-nav-item>
                <b-nav-item v-if="config.components.documentation.self" to="/documentation" replace>
                    <b class="pb-1 pt-1 mr-2 custom-button" :class="navItemClass(2)">
                        {{ $t('messages.components.headerBar.documentation') }}
                    </b>
                </b-nav-item>
                <b-nav-item v-if="config.components.about.self" to="/about" replace>
                    <b class="pb-1 pt-1 mr-2 custom-button" :class="navItemClass(3)">
                        {{ $t('messages.components.headerBar.about') }}
                    </b>
                </b-nav-item>
                <b-nav-item v-if="config.project.github" :href="config.project.github" target="_blank">
                    <b class="pb-1 pt-1 mr-2 custom-button" :class="navItemClass(4)">
                        GitHub
                        <b-icon icon="box-arrow-up-right" class="ml-1"></b-icon>
                    </b>
                </b-nav-item>
                <div>
                    <b-nav-item-dropdown v-if="config.header.lang" right no-caret
                                         class="pb-1 pt-1 mr-3 mr-md-2 d-inline-block">
                        <template v-slot:button-content>
                            <b-icon icon="globe2" class="transition-25 icon-color"></b-icon>
                        </template>
                        <b-dropdown-item v-for="(lang, index) in config.lang" :key="index"
                                         @click="changeLanguage(lang.abbr)">
                            {{ lang.fullName }}
                        </b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item v-if="config.header.theme" :title="themeButtonText"
                                class="pb-1 pt-1 mr-2 d-inline-block">
                        <b-icon :icon="themeIcon" class="transition-25 icon-color" @click="onThemeChange()">
                        </b-icon>
                    </b-nav-item>
                </div>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>

import {mapState, mapMutations} from 'vuex'

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
    name: "HeaderBar",
    data() {
        return {
            isScrolled: false
        }
    },
    computed: {
        headerBarClass: function () {
            if (this.isScrolled)
                return {
                    'header-shadow-color': true
                };
            else
                return null;
        },
        themeIcon: function () {
            if (this.theme === 'default')
                return 'moon';
            else
                return 'sun';
        },
        themeButtonText: function () {
            if (this.theme === 'default')
                return this.$t('messages.components.headerBar.theme.default');
            else
                return this.$t('messages.components.headerBar.theme.dark');
        },
        ...mapState([
            'config',
            'navItem',
            'theme'
        ])
    },
    methods: {
        navItemClass: function (index) {
            if (index === 4)
                return {
                    'custom-button-inactive': true,
                    'header-button-inactive-color': true,
                };

            if (this.navItem === index)
                return {
                    'custom-button-active': true,
                    'header-button-active-color': true,
                };
            else
                return {
                    'custom-button-inactive': true,
                    'header-button-inactive-color': true,
                };

        },
        changeShadow() {
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            this.isScrolled = scrollTop > 10;
        },
        changeLanguage(lang) {
            // Change Language
            this.$i18n.locale = lang;
            // Change page title
            let title = document.getElementsByTagName('title')[0];
            title.innerHTML = this.$t('messages.project.name');
            // Update cookies
            this.$cookies.set('InitialLang', lang, 60 * 60);
        },
        onThemeChange() {
            removeStylesheet();
            if (this.theme === 'default') {
                loadStylesheet('css/dark-theme.css');
                this.changeTheme('dark');
                this.$cookies.set('InitialTheme', 'dark', 60 * 60);
            } else {
                loadStylesheet('css/light-theme.css');
                this.changeTheme('default');
                this.$cookies.set('InitialTheme', 'default', 60 * 60);
            }

            return false;
        },
        ...mapMutations([
            'changeTheme'
        ])
    },
    created() {
        let title = document.getElementsByTagName('title')[0];
        title.innerHTML = this.$t('messages.project.name');
    },
    mounted() {
        window.addEventListener('scroll', this.changeShadow);
    },
    destroyed() {
        window.removeEventListener('scroll', this.changeShadow);
    }
}

</script>

<style lang="scss" scoped>

.custom-navbar:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    backdrop-filter: blur(10px);
    z-index: -1;
}

.custom-nav-logo {
    height: 1.8rem;
    margin-right: 1rem;
}

.custom-button {
    display: inline-block;
    background: none;
    border: 0;
    box-sizing: border-box;
    position: relative;
    vertical-align: middle;
    transition: 0.25s;

    &:after {
        box-sizing: inherit;
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
    }
}

.custom-button-active {
    transition: 0.25s;

    &:after {
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        border-bottom: 2px solid;
    }
}

.custom-button-inactive {
    transition: 0.25s;

    &:after {
        bottom: 0;
        left: 0;
        width: 0;
        height: 0;
        border-bottom: 2px solid transparent;
        transition: border-color 0.25s ease-out 0.1s, width 0.25s ease-out 0.1s;
    }

    &:hover::after {
        width: 100%;
        height: 100%;
        transition: border-color 0.25s ease-out 0.1s, width 0.25s ease-out 0.1s;
    }
}

</style>
