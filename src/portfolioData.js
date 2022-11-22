const portfolio_types = {
  PROJECT_TYPES: {
    GAME: "Game Projects",
    WRITING: "Writing projects"
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

const blogs = 
[  
  {
    id:'howheadturn',
    span:'2',
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
      },
    ],
    time:"November 11, 2022",
    index:0,
    title: '[DEV POST]How I made a creepy-head-follow-you mechanic',
    image:{
      link: 'https://img.itch.zone/aW1hZ2UvMTI0Njk5OS83MjY4NDQwLnBuZw==/original/GLRXLU.png'
    },
    externallink:"/blog/howheadturn",
    blogsections:[
      {
        blogsectiontitle:"asdad",
        blogsectiontext: "dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
        bloggridsections :[
            {
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
        ]
      },
      {
        blogsectiontitle:"asdad",
        blogsectiontext: "asdasdasdadasdadad",
        bloggridsections :[
            {
              image: {
                link: 'https://img.itch.zone/aW1hZ2UvMTI0Njk5OS83MjY4NDQwLnBuZw==/original/GLRXLU.png'
              }
            }
        ]
      }
    ]
  }
]

const portfolioData = {

  // My Profile Data
  title: 'Gourav Acharya',
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

  //The projects
  projects: [
    {
      id: 'letsstartatthebeginning',
      time: "1 week",
      team: "Gourav Acharya, Shayne Dsouza",
      links: [
        {
          title: 'Itch',
          icon: 'itch',
          link: 'https://shaynedsouza.itch.io/lets-start-at-the-beginning'
        }
      ],
      image: {
        link: 'https://img.itch.zone/aW1hZ2UvMTI0Njk5OS83MjY4NDQwLnBuZw==/original/GLRXLU.png'
      },

      //Grid Data for home page
      title: 'Let\'s start at the beginning',
      span: 1,
      externallink: "/project/letsstartatthebeginning",
      description: 'A PT like short horror game that explores themes of guilt and penance.',

      // Grid Data for Detail Project Page
      sections: [
        {
          
          title: 'Officia',

        },
        {
          
          title: 'Officia minim eiusmod commodo consectetur anim sum deserunt qui elit nostrud quis veniam. Esse anim et reprehenderit proident mollit sit commodo sit in mollit qui voluptate dolore.',

        },
        {
          
          title: 'Officia minim eiusmod commodo consectetur anim sint quis proident pariatur velit culpa consequat nisi cillum. Consectetur id aliquip cillum ipsum deserunt qui elit nostrud quis veniam. Esse anim et reprehenderit proident mollit sit commodo sit in mollit qui voluptate dolore.',

        },
        {
          
          title: 'Officia minim eiusmod commodo consectetur anim sint quis proident pariatur velit culpa consequat nisi cillum. Consectetur id aliquip cillum ipsum deserunt qui elit nostrud quis veniam. Esse anim et reprehenderit proident mollit sit commodo sit in mollit qui voluptate dolore.',
        },
        {
          
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
          image: {
            link: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f?w=162&auto=format'
          }
        },
        {
          video: {
            link: 'https://www.youtube.com/embed/SzL25FVRmLQ'
          },
          
          span: 2
        },
        {
          ...blogs[0]
        },
        // {
        //   video: {
        //     link: 'https://v6p9d9t4.ssl.hwcdn.net/html/4381277/WebGl/index.html'
        //   },
        //   span: 2
        // }
      ]
    },
   
  ],
  blogs
}

export default portfolioData;

