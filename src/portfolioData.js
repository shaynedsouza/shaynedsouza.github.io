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
      
    ],
    time:"November 11, 2022",
    index:0,
    title: 'How a couple of lines of code brought so many scares!',
    image:{
      link: 'https://github.com/kvoththebloodless/MediaDump/blob/master/Lets/letsblogneck.JPG?raw=true'
    },
    externallink:"/blog/howheadturn",
    blogsections:[
      {
        blogsectiontitle:"Situation",
        blogsectiontext: "It's the scream game jam 2021 and you are looking to put in some good scares. What do you do? What creeps people out? The answer: Creepy still figures with glowing eyes staring into your soul and whose head turn as you move and Lightning!"
        +"\n On the surface all my friends said that it was such a cool mechanic and must have taken the most time! The truth is, it's all smokes and mirrors!",
        bloggridsections:[]
      },
      {
        blogsectiontitle:"Task",
        blogsectiontext: "The steps to achieve head following and lightning were as follows",
        bloggridsections :[
            { title: "For Head turn",
              list: [
                {label: "Have a skinned and rigged mesh available."},
                {label: "Find and locate the neck bone in the model"},
                {label: "Write code to rotate the neck bone as the player moves"},
                {label: "Bonus: Make glowy eyes to make it look extra creepy"}
              ]
            },
            { title: "For Lightning",
              list: [
                {label: "Figure out how Lightning effect will be viewed inside the house."},
                {label: "Find matching audio"},
              ]
            }
        ]
      },
      {
        blogsectiontitle:"Approach - Head Turn",
        blogsectiontext: "The first thing was to find a freely available 3d model of the characters. There are tons of resources and we got our man model from - Renderpeople's 3d models. \n The next step was to skin and rig it. Now that procedure is particularly painful and is made very painless by Mixamo."
        +"Mixamo is a library of freely available animations online and has this pipeline where you upload a 3d model and as long as it's humanoid-ish. then you can get a really well rigged model.\n Once that's done, you'll see a neck bone inside the bone heirarchy of the model which will flow somewhat like hip->spine->neck"
        +" Now comes the simplest part, the code! And all it is, is telling the neck bone to rotate to look at the camera",
        bloggridsections :[
            {
              list: [
                {label: "NeckBone.transform.lookAt(Camera.main.transform,Vector3.up)"}
              ]
            }
        ]
      },
      {
        blogsectiontitle:"Approach - Lightning",
        blogsectiontext: "Lightning happens intermittently and there's a flashing with a sound delayed. The only place it'll be witnessed is near an open window. \n Now if there was a light outside the window which flickered with the same varying intensity over"+
        "different random intervals, we'll have ourselves a lightning effect! \n \n In the following snippet of code we can see that the Flickr coroutine oscillates between max and min intensity to give the flashing effect and then it dies down for a few seconds as we yield and starts again"+
        " after a while hence giving the lightning effect via a spotlight aimed at the window!",
        bloggridsections :[
            {
              image:{link:"https://raw.githubusercontent.com/kvoththebloodless/MediaDump/master/Lets/letsbloglightining.JPG"}
            }
        ]
      },
      {
        blogsectiontitle:"Results",
        blogsectiontext: "You can see both the lightning and head effect in the following gifs",
        bloggridsections :[
            {
              image:{link:"https://github.com/kvoththebloodless/MediaDump/blob/master/Lets/letsheadturn.gif?raw=true"}
            },
            {
              image:{link: 'https://github.com/kvoththebloodless/MediaDump/blob/master/Lets/letscrawlies.gif?raw=true'}
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
          
          title: '\"This is an absolutely amazing game! It gave me the chills the whole time! This is how you do a horror game!\"- A reviewer for the jam',

        },
        {
          title:'Made using',
          list: [
            {
              label: 'Unity'
            },
            {
              label: 'Mixamo'
            },
            {
              label: 'Blender'
            }
          ]
        },
        {
          span: 2, 
          image: {
            link: 'https://github.com/kvoththebloodless/MediaDump/blob/master/Lets/letsallred.jpg?raw=true'
          }
        },
        {
          span: 2, 
          image: {
            link: 'https://github.com/kvoththebloodless/MediaDump/blob/master/Lets/letscrawlies.gif?raw=true'
          }
        },
        {
          
          title: 'Ranked 13 in Horror and Story out of 221 entries for Scream Jam 2021!'

        },
        {
          span: 2, 
          image: {
            link: 'https://github.com/kvoththebloodless/MediaDump/blob/master/Lets/letsdevil.jpg?raw=true'
          }
        },
        {
          span: 2, 
          image: {
            link: 'https://github.com/kvoththebloodless/MediaDump/blob/master/Lets/letseyesred.gif?raw=true'
          }
        },
        {
          
          title: '\"Pretty cool game.  I like how the story unfolds as the character walks through the house over and over again - it gave me the feeling that he was in some kind of purgatory. Scares were well done and not too over the top.\"- A reviewer for the jam',

        },
        {
          span: 2, 
          image: {
            link: 'https://github.com/kvoththebloodless/MediaDump/blob/master/Lets/letsheadturn.gif?raw=true'
          }
        },

        {
          video: {
            link: 'https://www.youtube.com/embed/SzL25FVRmLQ'
          },
          
          span: 2
        },
        {
          title:'Made using',
          list: [
            {
              label: 'Unity'
            },
            {
              label: 'Mixamo'
            },
            {
              label: 'Blender'
            }
          ]
        },
        { title:"JayStudioGaming Reacts!",
          video: {
            link: 'https://www.youtube.com/embed//BiR9WzF13P8'
          },
          
          span: 2
        },
        {
          ...blogs[0]
        },
      ]
    },
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
          
          title: '\"This is an absolutely amazing game! It gave me the chills the whole time! This is how you do a horror game!\"- A reviewer for the jam',

        },
        {
          title:'Made using',
          list: [
            {
              label: 'Unity'
            },
            {
              label: 'Mixamo'
            },
            {
              label: 'Blender'
            }
          ]
        },
        {
          span: 2, 
          image: {
            link: 'https://github.com/kvoththebloodless/MediaDump/blob/master/Lets/letsallred.jpg?raw=true'
          }
        },
        {
          span: 2, 
          image: {
            link: 'https://github.com/kvoththebloodless/MediaDump/blob/master/Lets/letscrawlies.gif?raw=true'
          }
        },
        {
          
          title: 'Ranked 13 in Horror and Story out of 221 entries for Scream Jam 2021!'

        },
        {
          span: 2, 
          image: {
            link: 'https://github.com/kvoththebloodless/MediaDump/blob/master/Lets/letsdevil.jpg?raw=true'
          }
        },
        {
          span: 2, 
          image: {
            link: 'https://github.com/kvoththebloodless/MediaDump/blob/master/Lets/letseyesred.gif?raw=true'
          }
        },
        {
          
          title: '\"Pretty cool game.  I like how the story unfolds as the character walks through the house over and over again - it gave me the feeling that he was in some kind of purgatory. Scares were well done and not too over the top.\"- A reviewer for the jam',

        },
        {
          span: 2, 
          image: {
            link: 'https://github.com/kvoththebloodless/MediaDump/blob/master/Lets/letsheadturn.gif?raw=true'
          }
        },

        {
          video: {
            link: 'https://www.youtube.com/embed/SzL25FVRmLQ'
          },
          
          span: 2
        },
        {
          title:'Made using',
          list: [
            {
              label: 'Unity'
            },
            {
              label: 'Mixamo'
            },
            {
              label: 'Blender'
            }
          ]
        },
        { title:"JayStudioGaming Reacts!",
          video: {
            link: 'https://www.youtube.com/embed//BiR9WzF13P8'
          },
          
          span: 2
        },
        {
          ...blogs[0]
        },
      ]
    }
  ],
  blogs
}

export default portfolioData;

