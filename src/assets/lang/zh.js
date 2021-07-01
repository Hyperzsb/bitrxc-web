import store from '@/store';

const messages = {
    components: {
        headerBar: {
            overview: '概览',
            demo: '样例',
            documentation: '加入我们',
            about: '关于',
            theme: {
                default: '默认主题',
                dark: '暗色主题'
            }
        },
        footerBar: {
            linkListLeft: {
                title: '',
                links: []
            },
            linkListRight: {
                title: '',
                links: []
            },
            footnotes: [
                '页面设计和开发使用',
                '当前版本',
                '代码许可'
            ]
        },
        overview: {
            getStart: '加入我们',
            viewInGitHub: '在 GitHub 中浏览',
            whatIs: '简介',
            whyIs: '开发目标',
            getStartNow: '加入我们',
            documentation: '招新声明'
        },
        about: {
            teamMembers: '团队成员',
            members: []
        }
    },
    project: {
        name: store.state.config.project.name.zh,
        description: {
            main: store.state.config.project.description.main.zh,
            details: store.state.config.project.description.details.zh
        }
    }
}

messages.project.description.features = [];

let projectFeatures = store.state.config.project.description.features;

for (let i = 0; i < projectFeatures.length; i++)
    messages.project.description.features.push({
        name: projectFeatures[i].name.zh,
        details: projectFeatures[i].details.zh
    });

messages.components.footerBar.linkListLeft.title = store.state.config.footer.linkListLeft.title.zh;

for (let i = 0; i < store.state.config.footer.linkListLeft.links.length; i++)
    messages.components.footerBar.linkListLeft.links.push({
        name: store.state.config.footer.linkListLeft.links[i].name.zh
    });

messages.components.footerBar.linkListRight.title = store.state.config.footer.linkListRight.title.zh;

for (let i = 0; i < store.state.config.footer.linkListRight.links.length; i++)
    messages.components.footerBar.linkListRight.links.push({
        name: store.state.config.footer.linkListRight.links[i].name.zh
    });

for (let i = 0; i < store.state.config.components.about.members.length; i++)
    messages.components.about.members.push({
        name: store.state.config.components.about.members[i].name.zh,
        description: store.state.config.components.about.members[i].description.zh
    })

export {messages};
