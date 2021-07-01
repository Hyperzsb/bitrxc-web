<template>
    <div class="custom-toolbar">
        <scroll-to-top v-if="this.scrollToTop" class="mb-3"/>
        <div v-if="this.toc" v-b-toggle.toc-sidebar class="custom-toggle side-toolbar-toggle-color">
            <b-icon icon="justify" class="rounded-circle p-2 custom-icon side-toolbar-icon-bg-color"></b-icon>
        </div>
    </div>
</template>

<script>

import ScrollToTop from "@/components/SideToolbar/ScrollToTop";

export default {
    name: "index",
    props: {
        scrollToTop: Boolean,
        toc: Boolean
    },
    components: {
        ScrollToTop
    }
}
</script>

<style lang="scss" scoped>

@mixin mobile {
    @media screen and (max-width: 768px) {
        @content;
    }
}

.custom-toolbar {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 10vh;
    right: 5vw;
    z-index: 1;

    @include mobile {
        bottom: 5vh;
        right: 10vw;
    }
}

.custom-toggle {
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    text-align: center;
    cursor: pointer;
    transition: 0.25s;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border-radius: 50%;
        backdrop-filter: blur(2px);
        z-index: -1;
    }
}

.custom-icon {
    height: 3rem;
    width: 3rem;
}

</style>
