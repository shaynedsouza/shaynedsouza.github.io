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
    span:'1',
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
  },
  {
    id:'howbulbeffect',
    span:'1',
    links: [
      
    ],
    time:"November 11, 2022",
    index:0,
    title: 'How I made the bulb radius- creepy crawlie effect',
    image:{
      link: 'https://github.com/kvoththebloodless/MediaDump/blob/master/YouAreNotAlone/YNACRAWLIES.jpg?raw=true'
    },
    externallink:"/blog/howbulbeffect",
    blogsections:[
      {
        blogsectiontitle:"Situation",
        blogsectiontext: "The aim of the \'you are not alone\' little prototype was to see if we can create a light based mechanic. Being the halloween season we settled on a bulb character who needs to solve puzzles and get through doors"+
        "and make sure the light never goes out. So once you pick up a battery and consume it, the light radius will increase and otherwise it will slowly diminish until the creepy crawlies who only stay in the darkness surround you.",
        bloggridsections:[]
      },
      {
        blogsectiontitle:"Task",
        blogsectiontext: "The steps to achieve head following and lightning were as follows",
        bloggridsections :[
            { 
              list: [
                {label: "Have a creepy crawlie monster rigged with crawling animation"},
                {label: "Have the light radius/area of effect distinguish over time"},
                {label: "Based on the radius,keep the crawlies at the periphery to increase tension."},
                {label: "Once the light reduces to zero, the crawlies will get you."}
              ]
            }
        ]
      },
      {
        blogsectiontitle:"Approach",
        blogsectiontext: "The first thing was to reduce the area of effect and intensity at the same time. Fortunately unity's light system already has an area of effect and intensity parameter and all that was needed was to have a coroutine that diminished both "+
        "linearly over time and set a radius that can be used by the creepy crawlie script! We use Navmesh to bake a movement plane and have our agents - the creepy crawlies move based on location given.",
        bloggridsections :[
            { title :"Area of light [courtesy of unity's website]",
             image:{link:"https://docs.unity3d.com/uploads/Main/Light-Point.jpg"}
            },
            {
              title:"Creepy Crawlie movement manager. Based on radius interface which is injected in, we use that radius to set the crawlies at the circumference",
              image:{link:"https://github.com/kvoththebloodless/MediaDump/blob/master/YouAreNotAlone/spread%20circle.JPG?raw=true"}
            }
        ]
      },
      {
        blogsectiontitle:"Results",
        blogsectiontext: "You can see the creepy crawlies running once the light effect increases as the radius resets their location to the new circumference!",
        bloggridsections :[
            {
              image:{link:"https://github.com/kvoththebloodless/MediaDump/blob/master/YouAreNotAlone/ynabulbeffect.gif?raw=true"}
            }
        ]
      }
      
    ]
  }
]
const jobs =[
  {
    id: 'summitvr',
    time: "Dec 2020-July 2022",
    team: "Gourav Acharya, Jill Wallitschek, Aaron Lau, Thomas Vause",
    image: {
      link: 'https://github.com/kvoththebloodless/MediaDump/blob/master/SciVista/Summitvrlogo.gif?raw=true'
    },

    //Grid Data for home page
    title: 'Unity Developer at Scivista',
    span: 1,
    externallink: "/job/summitvr",
    description: 'SummitVR is a VR based data visualization software that allows collaboration and contains a family of tools to provide a high utility workflow',

    // Grid Data for Detail Project Page
    sections: [
      
      
      {
        
        title: 'As unity developer my primary work was in creation of various widgets, systems and the biggest addition which was the DLC management system.'

      },
      {
        title:'Made using',
        list: [
      
            {label: 'Unity'},
            {label: 'Angular'},
            {label: 'AWS stack'},
            {label: 'PostgreSQL'},
            {label: 'Python'}
         
        ]
      },
      {
        span: 2, 
        image: {
          link: 'https://github.com/kvoththebloodless/MediaDump/blob/master/SciVista/Summitvrlogo.gif?raw=true'
        }
      },
      {
        span: 1, 
        title:"The DLC Management system helped deliver new environments in the form of assetbundles that get cached and improved loading times by 70% [Click on the picture to see in full]",
        image:{
          link:"https://github.com/kvoththebloodless/MediaDump/blob/master/SciVista/environments.JPG?raw=true"
        }
        
      },
      {
        span: 2, 
        title: "HelperText System: Helped display points of interest around a virtual room and the controller itself",
        image: {
          link: 'https://github.com/kvoththebloodless/MediaDump/blob/master/SciVista/helpertext.gif?raw=true'
        }
      },
      {
      title: "Features of the HelperText System",
      span :2,
      list:[
        {label: "Used a gaze based detection system finely tuned to dial in on player's gaze when put on the information button"},
        {label: "Had a Data Driven setup where a JSON file of tags and information to display for objects of that type were fetched and localized and displayed when the player needed help"}
      ]
      },
      {span:2,
        title: "Static Lobby Space: Developed the mechanics for movement and interaction in a static space with an infinite space inside it.",
        image:{
          link:"https://github.com/kvoththebloodless/MediaDump/blob/master/SciVista/lobbyspace.gif?raw=true"
        }
      },
      { span:2,
        title: "Features of Static Lobby Space",
        list:[
          {label: "The movement was carried out by pulling youself around the room"},
          {label: "A ball of infinite space lay in the middle which was the workspace."},
          {label: "Once you click the force field you enter the infinite space and collaborators outside in the static space still see you as a small player working."}
        ]
      },
      {
        span: 2, 
        title: "QuickActionWidget: Made a widget wheel which helps cache your top most used widgets and allows you to quickly spawn them",
        image: {
          link: 'https://github.com/kvoththebloodless/MediaDump/blob/master/SciVista/quickaction.gif?raw=true'
        }
      },
      {
        span: 2, 
        title: "SharedWebBrowserWidget: Developed a widget that allows you to have a personal web browser and also stream its contents to the rest of the room",
        image: {
          link: 'https://github.com/kvoththebloodless/MediaDump/blob/master/SciVista/webbrowser.gif?raw=true'
        }
      },
      {
        title: "WebBrowserWidget work breakdown",
        span :2,
        list:[
          {label: "Created the widget on Unity side so that one could search for a webpage and also scale the resolution."},
          {label: "Setup a socket streaming server that worked with sessions and would be responsible for streaming to all clients in a session"}
        ]
        },
        { span:2,
          title: "I integrated Stripe Payment into the platform to commercialize the product as a subscription service[Click to expanded view]",
          image:{
            link: "https://raw.githubusercontent.com/kvoththebloodless/MediaDump/master/SciVista/subscription.JPG"
          }
        },
      {
        span:1,
          title: "I also reworked the REST API using flask and PostgreSQL and separated dev from prod servers",
      },
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
      id: 'yna',
      time: "1 week",
      team: "Gourav Acharya, Shayne Dsouza",
      image: {
        link: 'https://github.com/kvoththebloodless/MediaDump/blob/master/YouAreNotAlone/YNAMENU.jpg?raw=true'
      },

      //Grid Data for home page
      title: 'You are not alone.',
      span: 1,
      externallink: "/project/yna",
      description: 'A small prototype to try out light based mechanics.',

      // Grid Data for Detail Project Page
      sections: [
        
        
        {
          
          title: 'Bulby the lightbulb has to save the day, his main obstacles- the poorly designed levels.'

        },
        {
          title:'Made using',
          list: [
            {
              label: 'Unity'
            }
          ]
        },
        {
          span: 2, 
          image: {
            link: 'https://github.com/kvoththebloodless/MediaDump/blob/master/YouAreNotAlone/ynaplatfomring.gif?raw=true'
          }
        },
        {
          span: 2, 
          title:"As the field of light effect reduces the crawlies draw closer"
          
        },
        {
          span: 2, 
          image: {
            link: 'https://github.com/kvoththebloodless/MediaDump/blob/master/YouAreNotAlone/ynabulbeffect.gif?raw=true'
          }
        },
        {
        title: "Obi rope was also used to carry out some rope cutting and trolley systems."
        },
        {
          ...blogs[1]
        },
      ]
    }

  ],
  blogs,jobs
}

export default portfolioData;

