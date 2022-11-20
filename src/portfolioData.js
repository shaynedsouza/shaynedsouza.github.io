const portfolio_types = {
  PROJECT_TYPES:{
    GAME:"Game Projects",
    WRITING :"Writing projects"
  },
  ICON_TYPES: {
    RESUME: {
      title: 'Resume',
      icon: 'resume'
    },
    GITHUB: {
      title: 'Github',
      icon: 'github',
    },
    LINKEDIN: {
      title: 'LinkedIn',
      icon: 'linkedin',
    }
  }
}

const BLOGS=
  {
    blog1:{
      id:"blog1",
      title:"How I made a fishline arrow direction system for an isometric project"
    },
    blog2:{
      id:"blog2",
      title:"How I made an arrow guide system for a VR project"
    }

  }

const portfolioData = {
  title: 'Gourav Acharya',
  image: '',
  subtitle: 'I tell stories. Currently through games.',
  links: [
    {
      ...portfolio_types.ICON_TYPES.RESUME,
      link: 'https://drive.google.com/file/d/1TeSsqsNpOI3QtdA-86nEfs4M6WwNNvoL/view?usp=sharing'
    },
    {
      ...portfolio_types.ICON_TYPES.GITHUB,
      link: 'https://www.github.com/kvoththebloodless'
    },
    {
      ...portfolio_types.ICON_TYPES.LINKEDIN,
      link: 'https://www.linkedin.com/in/gourav-acharya/'
    }
  ],
  projects: [
    {
      id: 'letsstartatthebeginning',
      title: 'Let\'s start at the beginning',
      subtitle: 'A short game that explores themes of guilt and penance. We had a fun time building it out. We aimed for the visual here and the small number of interactive elements hopefully help drive the story forward.',
      type:portfolio_types.PROJECT_TYPES.GAME,
      links: [
        {
          title: 'Itch',
          icon: 'itch',
          link: 'https://shaynedsouza.itch.io/lets-start-at-the-beginning'
        }
      ],
      images: [
        {
          link: 'https://img.itch.zone/aW1hZ2UvMTI0Njk5OS83MjY4NDQwLnBuZw==/original/GLRXLU.png',
          title: ''
        },
        {
          link: '',
          title: ''
        },
        {
          link: '',
          title: ''
        }
      ],
      video: {
        link: '',
        title: '',
        type: 'youtube'
      },
      sections: [
        {
          title: 'Planning',
          description: 'Officia minim eiusmod commodo consectetur anim sint quis proident pariatur velit culpa consequat nisi cillum. Consectetur id aliquip cillum ipsum deserunt qui elit nostrud quis veniam. Esse anim et reprehenderit proident mollit sit commodo sit in mollit qui voluptate dolore.',
          image: {
            link: '',
            title: ''
          },
          video: {
            link: '',
            title: '',
            type: 'youtube'
          },
          list: [
            {
              label: '',
              link: 'url'
            }
          ]
        },
        {
          title: 'Tech used',
          list: [
            {
              label: 'html'
            },
            {
              label: 'java'
            },
            {
              label: 'unity'
            }
          ]
        }
      ],
      bloglist:[
        {...BLOGS.blog1}, {...BLOGS.blog2}
      ]
    },
    {
      id: 'letsstartatthebeginning1',
      title: 'Let\'s start at the beginning',
      subtitle: 'A short game that explores themes of guilt and penance. We had a fun time building it out. We aimed for the visual here and the small number of interactive elements hopefully help drive the story forward.',
      type:portfolio_types.PROJECT_TYPES.GAME,
      links: [
        {
          title: 'Itch',
          icon: 'itch',
          link: 'https://shaynedsouza.itch.io/lets-start-at-the-beginning'
        },
        {
          title: 'Itch',
          icon: 'itch',
          link: 'https://shaynedsouza.itch.io/lets-start-at-the-beginning'
        },
        {
          title: 'Itch',
          icon: 'itch',
          link: 'https://shaynedsouza.itch.io/lets-start-at-the-beginning'
        },
        {
          title: 'Itch',
          icon: 'itch',
          link: 'https://shaynedsouza.itch.io/lets-start-at-the-beginning'
        },
        {
          title: 'Itch',
          icon: 'itch',
          link: 'https://shaynedsouza.itch.io/lets-start-at-the-beginning'
        },
        {
          title: 'Itch',
          icon: 'itch',
          link: 'https://shaynedsouza.itch.io/lets-start-at-the-beginning'
        },
        {
          title: 'Itch',
          icon: 'itch',
          link: 'https://shaynedsouza.itch.io/lets-start-at-the-beginning'
        },
        {
          title: 'Itch',
          icon: 'itch',
          link: 'https://shaynedsouza.itch.io/lets-start-at-the-beginning'
        }
      ],
      images: [
        {
          link: 'https://img.itch.zone/aW1hZ2UvMTI0Njk5OS83MjY4NDQwLnBuZw==/original/GLRXLU.png',
          title: ''
        },
        {
          link: '',
          title: ''
        },
        {
          link: '',
          title: ''
        }
      ],
      video: {
        link: '',
        title: '',
        type: 'youtube'
      },
      sections: [
        {
          title: 'Planning',
          description: 'Officia minim eiusmod commodo consectetur anim sint quis proident pariatur velit culpa consequat nisi cillum. Consectetur id aliquip cillum ipsum deserunt qui elit nostrud quis veniam. Esse anim et reprehenderit proident mollit sit commodo sit in mollit qui voluptate dolore.',
          image: {
            link: '',
            title: ''
          },
          video: {
            link: '',
            title: '',
            type: 'youtube'
          },
          list: [
            {
              label: '',
              link: 'url'
            }
          ]
        },
        {
          title: 'Tech used',
          list: [
            {
              label: 'html'
            },
            {
              label: 'java'
            },
            {
              label: 'unity'
            }
          ]
        }
      ],
      bloglist:[
        {...BLOGS.blog1}, {...BLOGS.blog2}
      ]
    }
  ]
}

export default portfolioData;
