<template>
    <b-container tag="section" fluid class="transition-25 bg-color">
        <b-row class="pt-0 pt-md-4 pb-4">
            <b-col cols="10" offset="1" md="8" offset-md="2">
                <markdown-renderer :src="require(`@/assets/markdown/demo-${this.$i18n.locale}.md`)"
                                   :toc="config.components.demo.toc"/>
            </b-col>
        </b-row>
        <side-toolbar :scroll-to-top="config.components.demo.scrollToTop"
                      :toc="config.components.demo.toc"/>
    </b-container>
</template>

<script>

import {mapState, mapMutations} from 'vuex'

import SideToolbar from '@/components/SideToolbar'
import MarkdownRenderer from "@/components/MarkdownRenderer";

export default {
    name: "index",
    computed: {
        ...mapState([
            'config'
        ])
    },
    methods: {
        ...mapMutations([
            'changeNavItem'
        ])
    },
    created() {
        //Change nav item activity
        this.changeNavItem(1);
    },
    components: {
        SideToolbar,
        MarkdownRenderer
    }
}

</script>

<style lang="scss" scoped>

</style>
