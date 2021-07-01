<template>
    <b-container tag="footer" fluid class="mt-5 text-center transition-25 bg-color footer-shadow-color">
        <b-row class="pt-5 pb-1">
            <b-col cols="12" class="p-3">
                <b-row v-if="!config.footer.logo" class="pt-3 pb-3 pl-4 pl-md-0 pr-4 pr-md-0 mt-3 mb-5 text-left">
                    <b-col cols="6" offset-md="3" md="3" class="pb-1 pt-1">
                        <div class="custom-footer-container">
                            <div class="pb-1 font-weight-bolder font-size-101 text-color">
                                {{ $t('messages.components.footerBar.linkListLeft.title') }}
                            </div>
                            <div v-for="(link, index) in config.footer.linkListLeft.links" :key="index"
                                 class="pt-1 pl-3">
                                <b-link :href="link.href" class="custom-link link-color">
                                    {{ $t(`messages.components.footerBar.linkListLeft.links[${index}].name`) }}
                                </b-link>
                            </div>
                        </div>
                    </b-col>
                    <b-col cols="6" md="3" class="pb-1 pt-1">
                        <div class="custom-footer-container">
                            <div class="pb-1 font-weight-bolder font-size-101 text-color">
                                {{ $t('messages.components.footerBar.linkListRight.title') }}
                            </div>
                            <div v-for="(link, index) in config.footer.linkListRight.links" :key="index"
                                 class="pt-1 pl-3">
                                <b-link :href="link.href" class="custom-link link-color">
                                    {{ $t(`messages.components.footerBar.linkListRight.links[${index}].name`) }}
                                </b-link>
                            </div>
                        </div>
                    </b-col>
                </b-row>
                <b-row v-if="config.footer.logo" align-v="center" class="mt-3 mb-5">
                    <b-col cols="12" order-md="1" md="5" offset-md="2" order="2">
                        <b-row class="pt-3 pb-3 pl-4 pl-md-0 pr-4 pr-md-0 text-left">
                            <b-col cols="6">
                                <div class="custom-footer-container">
                                    <div class="pb-1 font-weight-bolder font-size-101 text-color">
                                        {{ $t('messages.components.footerBar.linkListLeft.title') }}
                                    </div>
                                    <div v-for="(link, index) in config.footer.linkListLeft.links" :key="index"
                                         class="pt-1 pl-3">
                                        <b-link :href="link.href" class="custom-link link-color">
                                            {{ $t(`messages.components.footerBar.linkListLeft.links[${index}].name`) }}
                                        </b-link>
                                    </div>
                                </div>
                            </b-col>
                            <b-col cols="6">
                                <div class="custom-footer-container">
                                    <div class="pb-1 font-weight-bolder font-size-101 text-color">
                                        {{ $t('messages.components.footerBar.linkListRight.title') }}
                                    </div>
                                    <div v-for="(link, index) in config.footer.linkListRight.links" :key="index"
                                         class="pt-1 pl-3">
                                        <b-link :href="link.href" class="custom-link link-color">
                                            {{ $t(`messages.components.footerBar.linkListRight.links[${index}].name`) }}
                                        </b-link>
                                    </div>
                                </div>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col cols="12" order="1" md="3" order-md="2" class="mb-5 mb-md-0">
                        <b-img :src="config.project.logo" :alt="$t('messages.project.name')"
                               :title="$t('messages.project.name')" center style="height: 10rem"></b-img>
                    </b-col>
                </b-row>
                <b-row class="pt-3">
                    <b-col cols="10" offset="1" :md="footnoteCols" :offset-md="footnoteOffset"
                           class="border-top-1 p-3 footer-border-color">
                        <div class="pt-3 font-size-09 light-text-color">
<!--                            {{ $t('messages.components.footerBar.footnotes[0]') }}&nbsp;-->
<!--                            <b-link href="https://cn.vuejs.org/" class="custom-link link-color">-->
<!--                                Vue.js-->
<!--                            </b-link>-->
<!--                            <br/>-->
<!--                            {{ $t('messages.components.footerBar.footnotes[1]') }}&nbsp;<b>{{-->
<!--                                config.project.version-->
<!--                            }}</b>-->
<!--                            &nbsp;{{ $t('messages.components.footerBar.footnotes[2]') }}&nbsp;-->
<!--                            <b-link href="https://www.mit-license.org/" class="custom-link link-color">-->
<!--                                MIT-->
<!--                            </b-link>-->
                            <div v-if="config.footer.recordText" class="">
                                <b-link href="https://beian.miit.gov.cn"
                                        class="custom-link link-color">
                                    {{ config.footer.recordText }}
                                </b-link>
                            </div>
                        </div>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>

import {mapState} from 'vuex'

export default {
    name: "FooterBar",
    computed: {
        footnoteCols: function () {
            if (this.config.footer.logo)
                return 8;
            else
                return 6;
        },
        footnoteOffset: function () {
            if (this.config.footer.logo)
                return 2;
            else
                return 3;
        },
        ...mapState([
            'config'
        ])
    }
}

</script>

<style lang="scss" scoped>

.font-size-101 {
    font-size: 1.1rem;
}

.font-size-09 {
    font-size: 0.9em;
}

.custom-footer-container {
    width: max-content;
    margin: auto;
}

.custom-link {
    @extend .font-size-09;

    font-weight: bold;
    transition: 0.25s;
}

</style>
