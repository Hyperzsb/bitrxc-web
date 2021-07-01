<template>
    <div>
        <div v-html="markDownText" v-highlight class="markdown-container markdown-color"></div>
        <b-sidebar v-if="this.toc" id="toc-sidebar" title="Content" shadow backdrop backdrop-variant="dark"
                   header-class="sidebar-header-color" body-class="sidebar-body-color">
            <div id="toc-container" v-html="tocHtml" class="pl-3"></div>
        </b-sidebar>
    </div>
</template>

<script>

import Vue from 'vue';
import {mapState} from 'vuex';
import hljs from 'highlight.js';

Vue.directive('highlight', function (el) {
    let blocks = el.querySelectorAll('pre code');
    blocks.forEach((block) => {
        hljs.highlightBlock(block)
    });
});

function loadStylesheet(url) {
    let head = document.getElementsByTagName('head')[0];
    let link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = url;
    link.setAttribute('name', 'hljs-stylesheet');
    head.appendChild(link);
}

function removeStylesheet() {
    let head = document.getElementsByTagName('head')[0];
    for (let i = 0; i < head.children.length; i++)
        if (head.children[i].tagName === 'LINK' && head.children[i].getAttribute('name') === 'hljs-stylesheet')
            head.removeChild(head.children[i]);
}

let externalTocHtml = '';

export default {
    name: "MarkdownRenderer",
    props: {
        src: String,
        toc: Boolean
    },
    data() {
        return {
            markdownItRenderer: null,
            markDownText: '',
            sidebarVisible: false
        }
    },
    watch: {
        src: function () {
            this.markDownText = this.markdownItRenderer.render(this.src);
        },
        theme: function () {
            removeStylesheet();
            if (this.theme === 'default')
                loadStylesheet('css/atom-one-light.css');
            else
                loadStylesheet('css/atom-one-dark.css');

            this.markDownText = this.markdownItRenderer.render(this.src);
        }
    },
    computed: {
        tocHtml: function () {
            return externalTocHtml;
        },
        ...mapState([
            'theme'
        ])
    },
    created() {
        removeStylesheet();
        if (this.theme === 'default')
            loadStylesheet('css/atom-one-light.css');
        else
            loadStylesheet('css/atom-one-dark.css');

        // markdown-it plugins
        const markdownItAbbr = require('markdown-it-abbr');
        const markdownItAttrs = require('markdown-it-attrs');
        const markdownItClass = require('@toycode/markdown-it-class');
        const markdownItContainer = require('markdown-it-container');
        const markdownItDeflist = require('markdown-it-deflist');
        const markdownItEmoji = require('markdown-it-emoji');
        const markdownItFootnote = require('markdown-it-footnote');
        const markdownItIns = require('markdown-it-ins');
        const markdownItMark = require('markdown-it-mark');
        const markdownItSub = require('markdown-it-sub');
        const markdownItSup = require('markdown-it-sup');

        // Class Mapping for markdown-it-class plugin
        const classMapping = {
            code: 'markdown-code',
            h1: ['markdown-h1', 'markdown-h-color'],
            h2: ['markdown-h2', 'markdown-h-color'],
            h3: ['markdown-h3', 'markdown-h-color'],
            h4: ['markdown-h4', 'markdown-h-color'],
            h5: ['markdown-h5', 'markdown-h-color'],
            h6: ['markdown-h6', 'markdown-h-color'],
            p: ['markdown-p', 'markdown-p-color'],
            a: ['markdown-a', 'markdown-a-color'],
            ul: ['markdown-ul', 'markdown-list-color'],
            ol: ['markdown-ol', 'markdown-list-color'],
            dl: 'markdown-list-color',
            li: ['markdown-li', 'markdown-list-color'],
            img: 'markdown-img',
            table: ['markdown-table', 'markdown-table-color'],
            blockquote: ['markdown-blockquote', 'markdown-blockquote-color'],
            strong: 'markdown-strong-color'
        };

        // markdown-it config
        const markDownIt = require('markdown-it')({
            html: true,
            linkify: false,
            xhtmlOut: true,
            typographer: true,
            highlight: function (str, lang) {
                if (lang && hljs.getLanguage(lang)) {
                    try {
                        return '<pre class="hljs markdown-block-code"><code>' +
                            hljs.highlight(lang, str, true).value +
                            '</code></pre>';
                    } catch (__) {
                        return '<pre class="hljs markdown-block-code"><code>' + markDownIt.utils.escapeHtml(str) + '</code></pre>';
                    }
                }
                return '<pre class="hljs markdown-block-code"><code>' + markDownIt.utils.escapeHtml(str) + '</code></pre>';
            }
        }).use(markdownItAbbr)
            .use(markdownItAttrs)
            .use(markdownItClass, classMapping)
            .use(markdownItContainer, 'hint')
            .use(markdownItContainer, 'warning')
            .use(markdownItContainer, 'fatal')
            .use(markdownItDeflist)
            .use(markdownItEmoji)
            .use(markdownItFootnote)
            .use(markdownItIns)
            .use(markdownItMark)
            .use(markdownItSub)
            .use(markdownItSup);

        // If toc is enabled
        if (this.toc) {
            const markdownItTocAndAnchor = require('markdown-it-toc-and-anchor').default;
            markDownIt.use(markdownItTocAndAnchor, {
                tocClassName: 'markdown-toc',
                anchorLinkSymbol: '¶',
                anchorLinkBefore: false,
                anchorClassName: 'markdown-anchor markdown-a-color',
            });
            markDownIt.set({
                tocCallback: function (tocMarkdown, tocArray, tocHtml) {
                    externalTocHtml = tocHtml;
                }
            });
        }

        this.markdownItRenderer = markDownIt;
        // Render the markdown file
        this.markDownText = markDownIt.render(this.src);
    },
    mounted() {
        // This part of functions are aimed to simulate anchor behavior by using click event handler

        // Footnotes' click event handler

        // Footnote references links
        let footnoteRefLinks = document.getElementsByClassName('footnote-ref');
        for (let i = 0; i < footnoteRefLinks.length; i++) {
            let link = footnoteRefLinks.item(i).children[0];
            link.onclick = function () {
                window.scrollTo({
                    top: document.getElementById(link.attributes['href'].value.substr(1)).offsetTop,
                    behavior: "smooth"
                });
                return false;
            };
        }

        // Footnote back-to references links
        let footnoteBackRefLinks = document.getElementsByClassName('footnote-backref');

        for (let i = 0; i < footnoteBackRefLinks.length; i++) {
            let link = footnoteBackRefLinks.item(i);
            link.onclick = function () {
                window.scrollTo({
                    top: document.getElementById(link.attributes['href'].value.substr(1)).parentNode.offsetTop,
                    behavior: "smooth"
                });
                return false;
            }
        }

        // Toc's click event handler

        // Define recursive function for event listener adding
        function addTocClickListener(node) {
            if (node.tagName.toString() === 'A') {
                node.onclick = function () {
                    window.scrollTo({
                        top: document.getElementById(node.attributes['href'].value.substr(1)).offsetTop,
                        behavior: "smooth"
                    });
                    return false;
                };
                return null;
            }

            for (let i = 0; i < node.children.length; i++)
                addTocClickListener(node.children[i]);
        }

        // If toc is enabled
        if (this.toc) {
            let anchors = document.getElementsByClassName('markdown-anchor');
            for (let i = 0; i < anchors.length; i++) {
                anchors.item(i).onclick = function () {
                    window.scrollTo({
                        top: document.getElementById(anchors.item(i).attributes['href'].value.substr(1)).offsetTop,
                        behavior: "smooth"
                    });
                    return false;
                }
            }

            addTocClickListener(document.getElementById('toc-container'));
        }
    }
}
</script>

<style lang="scss" scoped>

@mixin mobile {
    @media screen and (max-width: 768px) {
        @content;
    }
}

.markdown-container {
    line-height: 2rem;

    @include mobile {
        line-height: 1.8rem;
    }
}

</style>
