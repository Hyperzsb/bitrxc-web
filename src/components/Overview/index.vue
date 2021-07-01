<template>
    <b-container tag="section" fluid class="transition-25 bg-color">
        <b-row class="pb-4 pb-md-0">
            <b-col cols="12">
                <b-row align-v="center" class="jumbotron-logo-row">
                    <b-col cols="12" md="5" offset-md="2" order="2" order-md="1">
                        <h1 class="jumbotron-name colorful-text text-color">
<!--                            {{ $t('messages.project.name') }}-->
                          睿信社区<br/>技术保障中心
                        </h1>
                        <h5 class="jumbotron-description light-text-color">
                            {{ $t('messages.project.description.main') }}
                        </h5>
                        <b-badge pill class="jumbotron-version">{{ config.project.version }}</b-badge>
                    </b-col>
                    <b-col cols="12" md="3" order="1" order-md="2" class="pt-3 pt-md-0">
                        <b-img center class="custom-img" :src="config.project.logo"
                               :alt="$t('messages.project.name')" :title="$t('messages.project.name')"></b-img>
                    </b-col>
                </b-row>
                <b-row align-v="center" class="jumbotron-button-row">
                    <b-col cols="10" offset="1" md="3" offset-md="3">
                        <b-button pill block size="lg" :to="getStartTo" variant="outline-success">
                            {{ $t('messages.components.overview.getStart') }}
                        </b-button>
                    </b-col>
                    <b-col cols="10" offset="1" md="3" offset-md="0" class="mt-4 mt-md-0">
                        <b-button pill block size="lg" variant="outline-secondary"
                                  :href="config.project.github">
                            {{ $t('messages.components.overview.viewInGitHub') }}
                            <b-icon icon="box-arrow-up-right" class="ml-1"></b-icon>
                        </b-button>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
        <hr class="custom-hr hr-color"/>
        <b-row class="pt-3 pt-md-4 pb-3">
            <b-col cols="12" md="8" offset-md="2" class="text-center">
                <h3 class="custom-section-title text-color">
                    <span class="colorful-text">{{ $t('messages.project.name') }}</span>
                    {{ $t('messages.components.overview.whatIs') }}
                </h3>
                <div class="custom-section-text light-text-color">
                    {{ $t('messages.project.description.details') }}
                </div>
            </b-col>
        </b-row>
        <hr class="custom-hr hr-color"/>
        <b-row class="pt-3 pt-md-4 pb-5 pb-md-3">
            <b-col cols="12" md="8" offset-md="2" class="text-center">
                <h3 class="custom-section-title text-color">
                    <span class="colorful-text">{{ $t('messages.project.name') }}</span>
                    {{ $t('messages.components.overview.whyIs') }}
                </h3>
                <b-card-group deck>
                    <b-card v-for="(feature, index) in config.project.description.features" :key="index" no-body
                            class="custom-card overview-card-pseudo-color">
                        <b-card-body>
                            <b-card-title class="custom-card-title text-color">
                                {{ $t(`messages.project.description.features[${index}].name`) }}
                            </b-card-title>
                            <b-card-text class="custom-card-text light-text-color">
                                {{ $t(`messages.project.description.features[${index}].details`) }}
                            </b-card-text>
                        </b-card-body>
                    </b-card>
                </b-card-group>
            </b-col>
        </b-row>
        <hr class="custom-hr hr-color"/>
        <b-row class="pt-3 pt-md-4 pb-5">
            <b-col cols="12" md="8" offset-md="2" class="text-center">
                <h3 class="custom-section-title text-color">
                    {{ $t('messages.components.overview.getStartNow') }}
                </h3>
                <b-button v-if="config.components.demo.self" to="/demo"
                          pill size="lg" variant="outline-success" class="m-3">
                    {{ $t('messages.components.overview.getStart') }}
                </b-button>
                <b-button v-if="config.components.documentation.self" to="/documentation"
                          pill size="lg" variant="outline-primary" class="m-3">
                    {{ $t('messages.components.overview.documentation') }}
                </b-button>
            </b-col>
        </b-row>
        <side-toolbar v-if="config.components.overview.scrollToTop" scroll-to-top/>
    </b-container>
</template>

<script>

import {mapState, mapMutations} from 'vuex'
import SideToolbar from '@/components/SideToolbar'

export default {
    name: "index",
    computed: {
        getStartTo: function () {
            if (this.config.components.demo.self)
                return '/demo';
            else
                return '/documentation';
        },
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
        this.changeNavItem(0);
    },
    components: {
        SideToolbar
    }
}

</script>

<style lang="scss" scoped>

@mixin mobile {
    @media screen and (max-width: 768px) {
        @content;
    }
}

.colorful-text {
    background: linear-gradient(to right, #7928CA, #FF0080);
    -webkit-background-clip: text;
    color: transparent;
}

.custom-hr {
    display: block;
    margin: 3rem auto;
    width: 80%;

    @include mobile {
        width: 96%;
    }
}

.custom-img {
    height: 30vh;
}

.jumbotron-logo-row {
    height: 70vh;
    text-align: right;

    @include mobile {
        height: auto;
        text-align: center;
    }
}

.jumbotron-name {
    display: block;
    margin: 0.5rem 0;
    padding: 1rem 0;
    font-size: 5rem;
    font-weight: bold;

    @include mobile {
        margin: 0 0;
        font-size: 2.3rem;
    }
}

.jumbotron-description {
    display: block;
    margin: 0.5rem 0;
    padding: 0;
    font-size: 1.3rem;
    line-height: 2rem;

    @include mobile {
        font-size: 0.9rem;
        line-height: 1.5rem;
        padding: 0 1rem;
    }
}

.jumbotron-version {
    font-size: 1rem;
    margin: 1rem 0 1.5rem;

    @include mobile {
        font-size: 0.8rem;
    }
}

.jumbotron-button-row {
    height: 20vh;

    @include mobile {
        height: auto;
    }
}

.custom-section-title {
    padding: 0 1rem;
    margin-bottom: 2rem;
    font-weight: bold;
    line-height: 2.5rem;
    text-decoration-line: underline;
}

.custom-section-text {
    padding: 0 2rem;
    margin-bottom: 0.5rem;
    line-height: 2rem;
}

.custom-card {
    background-color: transparent;
    border: 0;
    margin-left: 2rem;
    margin-right: 2rem;
    margin-bottom: 3rem;
    line-height: 2rem;

    &:last-child {
        @include mobile {
            margin-bottom: 0;
        }
    }

    &:before {
        content: '';
        position: absolute;
        bottom: -1rem;
        left: 0;
        height: 1px;
        width: 50%;
        transform: skew(0deg, 6deg);
    }

    &:after {
        content: '';
        position: absolute;
        bottom: -1rem;
        right: 0;
        height: 1px;
        width: 50%;
        transform: skew(0deg, -6deg);
    }
}

.custom-card-title {
    margin: 0 0 1.5rem;
    font-weight: bold;
}

</style>
