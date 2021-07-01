const config = {
    project: {
        name: {
            en: 'Technical Support Center',
            zh: '睿信社区技术保障中心'
        },
        logo: require('@/assets/img/logo.png'),
        github: 'https://github.com/Hyperzsb/bitrxc-web',
        version: '',
        description: {
            main: {
                en: 'Development and maintenance team of Ruixin community management system, ' +
                    'aiming to the development of efficient, convenient and friendly Internet software',
                zh: '睿信社区综合网络管理系统开发维护团队，致力开发高效、便捷和友好的互联网软件，给广大同学提供高质量的社区服务'
            },
            details: {
                en: '',
                zh: '睿信社区技术保障中心成立于2020年10月，隶属于睿信书院自管委员会，是睿信书院主要的技术驱动型 组织之一。\n' +
                    '本中心成立的首要目的是使用计算机和互联网相关技术，打造一个服务全体睿信书院同学乃至全校同学\n' +
                    '的北京理工大学睿信社区管理系统。该系统将主要包括场地预约、新闻推送、社区服务、信息发布等功\n' +
                    '能，将极大地方便我们同学使用我们功能强大的社区空间，享受丰富多彩的社区生活。\n' +
                    '同时，随着本中心的发展壮大，我们也将在中心内部同时开展技术学习、经验交流和项目孵化等活动，\n' +
                    '帮助成员提升技术水平、丰富项目经历，增强在实习、就业时的竞争力。'
            },
            features: [{
                name: {
                    en: 'Extensible',
                    zh: '可扩展'
                },
                details: {
                    en: 'Extensibility is very important for the continuous development and wide application of the system. ' +
                        'Through the powerful extensibility of the system, we can make it adapt to different application scenarios, ' +
                        'and finally achieve a wide range of applications of the product.',
                    zh: '可扩展性对于系统的持续发展和广泛应用是极为重要的。通过系统强大的可扩展性，我们可以让其适应不同的应用场景，最终实现产品的大范围应用。'
                }
            }, {
                name: {
                    en: 'Maintainable',
                    zh: '可维护'
                },
                details: {
                    en: 'For most of the staff who are not proficient in full stack development and maintenance,' +
                        ' it is not easy to maintain a complete network system.' +
                        ' Fortunately, we will make the system simple enough,' +
                        ' only need a simple configuration to start and update the whole system.',
                    zh: '对于大多数并不精通全栈开发和维护的人员来说，维护一套完整的网络系统并不容易，好在我们将该系统做的足够简单，只需要简单的配置即可启动和更新整个系统。'
                }
            }, {
                name: {
                    en: 'Sustainable',
                    zh: '可持续'
                },
                details: {
                    en: 'As application scenarios change and requirements change, ' +
                        'obsolescence may be inevitable. ' +
                        'However, through thorough design, the system can flexibly switch between multiple roles and scenarios to adapt to the rapid development of the times.',
                    zh: '随着应用场景的变化和需求的更替，淘汰或许是不可避免的。但是，通过周全的设计，系统可以在多个角色和场景之间灵活转换，以适应时代的快速发展。'
                }
            }]
        },
        readMe: require('@/assets/markdown/documentation-en.md'),
    },
    header: {
        logo: true,
        name: true,
        lang: false,
        theme: false
    },
    footer: {
        logo: true,
        linkListLeft: {
            title: {
                en: 'Links',
                zh: '相关链接'
            },
            links: [{
                name: {
                    en: 'Server',
                    zh: '服务端'
                },
                href: 'https://vuejs.org/'
            }, {
                name: {
                    en: 'Admin Web Client',
                    zh: '管理员中台'
                },
                href: 'https://bootstrap-vue.org/'
            }, {
                name: {
                    en: 'User Mini Program',
                    zh: '用户小程序'
                },
                href: 'https://github.com/markdown-it/markdown-it/'
            }]
        },
        linkListRight: {
            title: {
                en: 'About Us',
                zh: '关于我们'
            },
            links: [{
                name: {
                    en: 'GitHub',
                    zh: 'GitHub'
                },
                href: 'https://github.com/Hyperzsb/bitrxc-web'
            }, {
                name: {
                    en: 'Contact Us',
                    zh: '联系我们'
                },
                href: 'mailto:hyperzsb@outlook.com'
            }]
        },
        recordText: '京ICP备20005820号-3'
    },
    components: {
        overview: {
            scrollToTop: false
        },
        demo: {
            self: false,
            scrollToTop: false,
            toc: true
        },
        documentation: {
            self: true,
            scrollToTop: true,
            toc: true
        },
        about: {
            self: false,
            scrollToTop: false,
            members: [{
                name: {
                    en: 'Hyperzsb',
                    zh: 'Hyperzsb'
                },
                description: {
                    en: 'That\'s right, it\'s me, and only me right now.',
                    zh: '没错，这就是我，而且目前只有我。'
                },
                headPortrait: null
            }, {
                name: {
                    en: 'More members...',
                    zh: '还可以有更多成员......'
                },
                description: {
                    en: 'Waiting for someone.',
                    zh: '等风来。'
                },
                headPortrait: null
            }]
        },
    },
    lang: [{
        abbr: 'en',
        fullName: 'English'
    }, {
        abbr: 'zh',
        fullName: '简体中文'
    }]
}

export {config};
