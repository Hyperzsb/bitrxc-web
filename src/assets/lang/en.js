import store from '@/store';

let messages = {
    components: {
        headerBar: {
            overview: 'Overview',
            demo: 'Demo',
            documentation: 'Docs',
            about: 'About',
            theme: {
                default: 'Default theme',
                dark: 'Dark theme'
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
                'Page designed and built with',
                'Currently',
                'Code licensed'
            ]
        },
        overview: {
            getStart: 'Get Start',
            viewInGitHub: 'View in GitHub',
            whatIs: 'Overview',
            whyIs: 'Development Goals',
            getStartNow: 'Get Start NOW',
            documentation: 'Documentation'
        },
        about: {
            teamMembers: 'Team Members',
            members: []
        }
    },
    project: {
        name: store.state.config.project.name.en,
        description: {
            main: store.state.config.project.description.main.en,
            details: store.state.config.project.description.details.en
        }
    }
}

messages.project.description.features = [];

let projectFeatures = store.state.config.project.description.features;

for (let i = 0; i < projectFeatures.length; i++)
    messages.project.description.features.push({
        name: projectFeatures[i].name.en,
        details: projectFeatures[i].details.en
    });

messages.components.footerBar.linkListLeft.title = store.state.config.footer.linkListLeft.title.en;

for (let i = 0; i < store.state.config.footer.linkListLeft.links.length; i++)
    messages.components.footerBar.linkListLeft.links.push({
        name: store.state.config.footer.linkListLeft.links[i].name.en
    });

messages.components.footerBar.linkListRight.title = store.state.config.footer.linkListRight.title.en;

for (let i = 0; i < store.state.config.footer.linkListRight.links.length; i++)
    messages.components.footerBar.linkListRight.links.push({
        name: store.state.config.footer.linkListRight.links[i].name.en
    });

for (let i = 0; i < store.state.config.components.about.members.length; i++)
    messages.components.about.members.push({
        name: store.state.config.components.about.members[i].name.en,
        description: store.state.config.components.about.members[i].description.en
    })

export {messages};
