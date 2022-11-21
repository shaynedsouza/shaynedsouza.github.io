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

const blogs= [
  {
    id: 'letsstartatthebeginning',
    title: 'Let\'s start at the beginning',
    date: '11/23/2021',
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
        title: 'Somethign better than nothing'
      },
      {
        link: 'https://img.itch.zone/aW1hZ2UvMTI0Njk5OS83MjY4NDQwLnBuZw==/original/GLRXLU.png',
        title: ''
      },
      {
        link: 'https://img.itch.zone/aW1hZ2UvMTI0Njk5OS83MjY4NDQwLnBuZw==/original/GLRXLU.png',
        title: ''
      },
      {
        link: 'https://img.itch.zone/aW1hZ2UvMTI0Njk5OS83MjY4NDQwLnBuZw==/original/GLRXLU.png',
        title: ''
      },
      {
        link: 'https://img.itch.zone/aW1hZ2UvMTI0Njk5OS83MjY4NDQwLnBuZw==/original/GLRXLU.png',
        title: ''
      },
      {
        link: 'https://img.itch.zone/aW1hZ2UvMTI0Njk5OS83MjY4NDQwLnBuZw==/original/GLRXLU.png',
        title: ''
      },
      {
        link: 'https://img.itch.zone/aW1hZ2UvMTI0Njk5OS83MjY4NDQwLnBuZw==/original/GLRXLU.png',
        title: ''
      },
      {
        link: 'https://img.itch.zone/aW1hZ2UvMTI0Njk5OS83MjY4NDQwLnBuZw==/original/GLRXLU.png',
        title: ''
      },
      {
        link: 'https://img.itch.zone/aW1hZ2UvMTI0Njk5OS83MjY4NDQwLnBuZw==/original/GLRXLU.png',
        title: ''
      },
      {
        link: 'https://img.itch.zone/aW1hZ2UvMTI0Njk5OS83MjY4NDQwLnBuZw==/original/GLRXLU.png',
        title: ''
      },
    ],
    videos: [{
      id: 'SzL25FVRmLQ',
      title: ''
    }],
    sections: [
      {
        title: 'Planning',
        description: 'Officia minim eiusmod commodo consectetur anim sint quis proident pariatur velit culpa consequat nisi cillum. Consectetur id aliquip cillum ipsum deserunt qui elit nostrud quis veniam. Esse anim et reprehenderit proident mollit sit commodo sit in mollit qui voluptate dolore.',
        image: {
          link: 'https://img.itch.zone/aW1hZ2UvMTI0Njk5OS83MjY4NDQwLnBuZw==/original/GLRXLU.png',
          title: 'This was my planning'
        },
        video: {
          id: 'SzL25FVRmLQ',
          title: 'video'
        }
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
      "blog1","blog2"
    ]
  }
]

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
      date: '11/23/2021',
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
          title: 'Somethign better than nothing'
        },
        {
          link: 'https://img.itch.zone/aW1hZ2UvMTI0Njk5OS83MjY4NDQwLnBuZw==/original/GLRXLU.png',
          title: ''
        },
        {
          link: 'https://img.itch.zone/aW1hZ2UvMTI0Njk5OS83MjY4NDQwLnBuZw==/original/GLRXLU.png',
          title: ''
        },
        {
          link: 'https://img.itch.zone/aW1hZ2UvMTI0Njk5OS83MjY4NDQwLnBuZw==/original/GLRXLU.png',
          title: ''
        },
        {
          link: 'https://img.itch.zone/aW1hZ2UvMTI0Njk5OS83MjY4NDQwLnBuZw==/original/GLRXLU.png',
          title: ''
        },
        {
          link: 'https://img.itch.zone/aW1hZ2UvMTI0Njk5OS83MjY4NDQwLnBuZw==/original/GLRXLU.png',
          title: ''
        },
        {
          link: 'https://img.itch.zone/aW1hZ2UvMTI0Njk5OS83MjY4NDQwLnBuZw==/original/GLRXLU.png',
          title: ''
        },
        {
          link: 'https://img.itch.zone/aW1hZ2UvMTI0Njk5OS83MjY4NDQwLnBuZw==/original/GLRXLU.png',
          title: ''
        },
        {
          link: 'https://img.itch.zone/aW1hZ2UvMTI0Njk5OS83MjY4NDQwLnBuZw==/original/GLRXLU.png',
          title: ''
        },
        {
          link: 'https://img.itch.zone/aW1hZ2UvMTI0Njk5OS83MjY4NDQwLnBuZw==/original/GLRXLU.png',
          title: ''
        },
      ],
      videos: [{
        id: 'SzL25FVRmLQ',
        title: ''
      }],
      sections: [
        { height :"10",
          description: 'Officia ',
    
        },
        { height :"85",
          description: 'Officia minim eiusmod commodo consectetur anim sum deserunt qui elit nostrud quis veniam. Esse anim et reprehenderit proident mollit sit commodo sit in mollit qui voluptate dolore.',
    
        },
        { height :"300",
          description: 'Officia minim eiusmod commodo consectetur anim sint quis proident pariatur velit culpa consequat nisi cillum. Consectetur id aliquip cillum ipsum deserunt qui elit nostrud quis veniam. Esse anim et reprehenderit proident mollit sit commodo sit in mollit qui voluptate dolore.',
      
        },
        { height :"400",
          description: 'Officia minim eiusmod commodo consectetur anim sint quis proident pariatur velit culpa consequat nisi cillum. Consectetur id aliquip cillum ipsum deserunt qui elit nostrud quis veniam. Esse anim et reprehenderit proident mollit sit commodo sit in mollit qui voluptate dolore.',
        },
        { height :"300",
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
        },
        
        {
          span: 2,
          height :"300",
          image: {
            link: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f?w=162&auto=format'
          }
        },
        {
          video: {
            id: 'SzL25FVRmLQ'
          },
          height :"300",
          span: 2
        }
      ],
      bloglist:[
        "blog1","blog2"
      ]
    },
  ],
  blogs
}

export default portfolioData;
