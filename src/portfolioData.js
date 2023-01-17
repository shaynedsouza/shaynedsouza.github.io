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
  id:'cuttingmeshes',
  span:'1',
  links: [
    
  ],
  // time:"August, 2020",
  index:0,
  title: 'Cutting meshes at runtime in Unity.',
  image:{
    link: 'https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/PersonalProjects/Other/mesh-cutter.gif'
  },
  externallink:"/blog/cuttingmeshes",
  blogsections:[
    {
      blogsectiontitle:"Description",
      blogsectiontext: "A proof-of-concept Unity project for a mesh cutting algorithm. This is a simple implementation of an algorithm that splits in 2 any 3d manifold objects. The split is done using a plane defined by the line drawn by the user and a depth in the same direction as the camera facing forward. This was implemented using mesh-cutter repository on github by hugoscurti.",
      bloggridsections:[]
    },
    {
      blogsectiontitle:"Task",
      blogsectiontext: "Using the asset, I made a prototype where the user had to slice objects using a ray gun.",
      bloggridsections:[]
    },
    {
      blogsectiontitle:"Result",
      blogsectiontext: "",
      bloggridsections :[
        {
          // span:2,
          image:{link: 'https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/PersonalProjects/Other/mesh-cutter.gif'}
        },

    ]
    },
    {
      blogsectiontitle:"Task",
      blogsectiontext: "A project had a requirement where the player had to swipe continuously. I tackled this by registering swipes at every nth interval, drawing planes with the last interval as the starting point and detecting multiple objects in between.",
      bloggridsections:[]
    },
    {
      blogsectiontitle:"Result",
      blogsectiontext:"",
      bloggridsections :[
        {
          image:{link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Freelance1/Slice_Infinite.gif"}
        }
      ]

    },
  ]
},
{
  id:'animation',
  span:'1',
  links: [
    
  ],
  // time:"August, 2020",
  index:0,
  title: 'Creating and animation a 2D character in Unity.',
  image:{
    link: 'https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/PersonalProjects/Other/poseidon_2.gif'
  },
  externallink:"/blog/animation",
  blogsections:[
    {
      blogsectiontitle:"Description",
      blogsectiontext: "The characters were animated using the \'12 principles of animation\'. Atleast a few of them :D",
      bloggridsections:[]
    },
    {
      blogsectiontitle:"Result",
      blogsectiontext: "",
      bloggridsections :[
        {title:"Animation principles used",
          list:[
            {label:"Squash and stretch"},
            {label:"Exaggeration"},
            {label:"Timing"},
            {label:"Anticipation"},
            {label:"Secondary action"},
          ]
        },
        {
          span:2,
          image:{link: 'https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/PersonalProjects/Other/poseidon.gif'}
        },

        {
          span:2,
          image:{link: 'https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/PersonalProjects/Other/poseidon_2.gif'}
        },
        {
          title:"In the first gif, I worked on animation and in the second one, drawning and animation was done by me. Hoping that I might one day include this in a future project."
        }
    ]
    }
  ]
}


]

const jobs =[
  
  {
    id: 'Freelance1',
    time: "2019-2020",
    team: "Shayne Dsouza with various individuals.",
    image: {link: 'https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Freelance1/Freelance.png'},

    //Grid Data for home page
    title: 'Unity Developer on hire',
    span: 1,
    externallink: "/job/Freelance1",
    description: 'Worked on developing hyper-casual game prototypes.',

    // Grid Data for Detail Project Page
    sections: [
      {
        title:'Made using',
        list: [
      
            {label: 'Unity'}
            // {label: 'html'},
            // {label: 'css'}
        ]
      },



      {
        title:"Player throw",
        image:{link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Freelance1/PlayerThrow.gif"}
      },
      {
        title:"Slice",
        image:{link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Freelance1/Slice.gif"}
      },

      {
        span:2,
        title:"Flight rush",
        image:{link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Freelance1/FlightRush.gif"}
      },
      {
        title:"Hole in the wall",
        list:[{label:'Made using spring joints.'}],
        image:{link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Freelance1/Hole_In_The_Wall.gif"}
      },
      {
        span:2,
        title:"Slice infinite",
        image:{link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Freelance1/Slice_Infinite.gif"}
      },
      {
        title:"Race wars",
        image:{link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Freelance1/Race_Wars.gif"}
      },
      {
        title:"Particle flip",
        list:[{label:'Made using Obi fluid to increase performance.'}],
        image:{link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Freelance1/ParticleFlip.gif"}
      },

    ]
  },
  
  {
    id: 'underDOGS',
    time: "2020-2021",
    team: "Shayne Dsouza with a 2D artist",
    image: {link: 'https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/underDOGS/underDOGS.png'},

    //Grid Data for home page
    title: 'Unity Developer at underDOGS',
    span: 1,
    externallink: "/job/underDOGS",
    description: 'Made various prototypes for hyper casual games.',

    // Grid Data for Detail Project Page
    sections: [
      
      
      {
        
        title: 'The company\'s target was to create around 3 prototypes per month and hence quick implementation of various ideas was essential.'

      },
      {
        title:'Made using',
        list: [
      
            {label: 'Unity'}
            // {label: 'html'},
            // {label: 'css'}
        ]
      },
      {
        title:"Action Figurine",
        description:"Add the correct body part, rotate and snap it to the required joint.",
        image:{link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/underDOGS/ActionFigurine.gif"}
      },
      {
        span:2,
        title:"Barricade Builder",
        description:"",
        image:{link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/underDOGS/BarricadeBuilder.gif"}
      },
      {
        title:"Bellow rush",
        image:{link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/underDOGS/BellowRush.gif"}
      },
      {
        title:"Burst mania",
        image:{link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/underDOGS/BurstMania.gif"}
      },  
      {
        title:"Car raise",
        image:{link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/underDOGS/CarRaise.gif"}
      },
      {
        span:2,
        title:"Snack factory",
        image:{link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/underDOGS/SnackFactory.gif"}
      },      
      { 
        title:"Clothes run",
        image:{link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/underDOGS/ClothesRun.gif"}
      },
      {
        span: 2,
        title:"Crowd follow",
        image:{link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/underDOGS/CrowdFollow.gif"}
      },
      {
        span:2,
        title:"Shortcut fall",
        image:{link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/underDOGS/ShortcutFall.gif"}
      },

      {
        title:"Master push",
        image:{link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/underDOGS/MasterPush.gif"}
      },
      {
        title:"Meteor multiplier",
        image:{link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/underDOGS/MeteorMultiplier.gif"}
      },

      {
        title:"Poster reveal",
        image:{link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/underDOGS/PosterReveal.gif"}
      },
      {
        title:"Imposter fall",
        image:{link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/underDOGS/ImpostersFall.gif"}
      },
      {
        title:"Open the lane",
        image:{link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/underDOGS/OpenTheLane.gif"}
      },
      {
        span:2,
        title:"Infinite digger",
        image:{link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/underDOGS/InfiniteDigger.gif"}
      },
      {
        title:"Titan hand",
        image:{link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/underDOGS/TitanHand.gif"}
      }
    ]
  },
  {
    id: 'ZeusLearning',
    time: "2021-2022",
    team: "Shayne Dsouza as lead developer with 3 other Unity, NodeJS developers",
    image: {link: 'https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/ZeusLearning/ZeusLearning.png'},

    //Grid Data for home page
    title: 'Unity Developer at Zeus Learning',
    span: 1,
    externallink: "/job/ZeusLearning",
    description: 'Worked as a lead developer on a project which promotes learning through games, maintenance of existing games and an augmented reality (AR) app.',

    // Grid Data for Detail Project Page
    sections: [
      
      
      {
        
        title: 'Learning through interaction was the idea. I uwas tasked with handling the gaming aspect and collaborate with NodeJS developers for the backend.'

      },
      {
        title:'Made using',
        list: [
      
            {label: 'Unity'},
            {label: 'NodeJS'},
            {label: 'MySQL'}
         
        ]
      },
      {
        span: 2, 
        title:"The project was built for WebGL which required to store a user\'s data in a database and resume the session, everytime they logged in.",
       image: {
          link: 'https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/ZeusLearning/DoIHaveARight_Login.gif'
        }
      },

      {
        span: 1, 
        title:"The window view from inside and out of the building were made using render textures to optimise the project and save resources.",
        image:{
          link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/ZeusLearning/DoIHaveARight_Camera.gif"
        }
        
      },




      {
      title: "Tutorial",
      span :2,
      image:{
        link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/ZeusLearning/DoIHaveARight1_Tutorial.gif",
      }
      },

      { 
        span:1,
        title: "The project was built for WebGL which required to store a user\'s data in a database and resume the session, everytime they logged in.",
    },

      {
        span: 2, 
        title:"Gameplay",
        image:{
          link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/ZeusLearning/DoIHaveARight_Gameplay.gif"
        }
        
      },

    ]
  },

  {
    id: 'Freelance2',
    time: "2022-current",
    team: "Shayne Dsouza with various individuals.",
    image: {link: 'https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Freelance1/Freelance.png'},

    //Grid Data for home page
    title: 'Unity Developer on hire',
    span: 1,
    externallink: "/job/Freelance2",
    description: 'Worked on bug fixes, re-skinning, integrating Moralis sdk for web3 games, setting up scenes.',

    // Grid Data for Detail Project Page
    sections: [
      
      
      {
        
        title: 'Most of the projects were prototypes of web3 games which required users to connect via wallets like Metamask. They were made using:',
        list: [
          {label: 'Unity'},
          {label: 'Moralis'}
            ]
      },

      {
        span: 2, 
        title:"Open world.",
        image: {
          link: 'https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Freelance2/Rumblerz1.gif'
        }
      },
      {
        span: 2, 
        title:"Worked on reskinning and animating the characters.",
        image:{
          link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Freelance2/Rumblerz2.gif"
        }
        
      },
      {
        span: 2, 
        title:"Since the above 2D project was built for webGL, textures were compressed so as to save resources. Optimisation was key.",
      },
      {
        span: 2, 
        title:"Populating data from a database.",
        image:{
          link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Freelance2/Lazarus1.gif"
        }
        
      },

      {
        span: 2, 
        title:"Jumpy jump.",
        image:{
          link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Freelance2/Lazarus2.gif"
        }
        
      },
      {
        span: 1, 
        title:"Character selection based on nfts owned by the player.",
        image:{
          link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Freelance2/Lazarus3.gif"
        }
        
      },
      {
        span: 2, 
        title:"Worked on player movement.",
        image:{
          link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Freelance2/Lazarus4.gif"
        }
        
      },
      {
        span: 1, 
        title:"UI for emoting.",
        image:{
          link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Freelance2/Lazarus5.gif"
        }
        
      },
      {
        span: 2, 
        title:"Early level setup.",
        image:{
          link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Freelance2/Lazarus6.gif"
        }
        
      },
      {  
        title: 'Initially I used Mirror to showcase multiplayer for this project. But later on a multiplayer asset was used to handle various multiplayer issues.'
      },
      {
        span: 2, 
        title:"The weapon system was an asset which was implemented in the project.",
        image:{
          link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Freelance2/Lazarus7.gif"
        }
        
      },
      {
        span: 2, 
        title:"Testing a character in an open world project.",
        image:{
          link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Freelance2/Lazarus9.gif"
        }
        
      },
      {
        span: 1, 
        title:"UI reskinning.",
        image:{
          link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Freelance2/Lazarus10.gif"
        }
      },
      {
        span: 1, 
        title:"Minting an NFT in game.",
        image:{
          link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Freelance2/DaisLabs.gif"
        }
        
      },
      {
        span: 2, 
        title:"Character selection.",
        image:{
          link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Freelance2/AnimalKart.gif"
        }
        
      },
      {
        span: 2, 
        title:"Worked on the entire level design and optimising the environment since this project was for webGL.",
        image:{
          link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Freelance2/AnimalKart2.gif"
        }
        
      },


    ]
  }

]
const portfolioData = {

  // My Profile Data
  title: 'Shayne Dsouza',
  subtitle: 'Game developer, professional bathroom singer.',
  location:"Mumbai, India",
  visastatus:"Freelancer",
  email:"shayneneildsouza@gmail.com",
  links: [
    {
      ...portfolio_types.ICON_TYPES.RESUME,
      link: 'https://drive.google.com/file/d/1sfQFGkLdY2JaOpWZlr9EHOiE3DNL9uwc/view?usp=sharing'
    },
    {
      ...portfolio_types.ICON_TYPES.GITHUB,
      link: 'https://github.com/shaynedsouza'
    },
    {
      ...portfolio_types.ICON_TYPES.LINKEDIN,
      link: 'https://www.linkedin.com/in/shayne-dsouza-284755134/'
    }
  ],

  //The projects
  projects: [
    {
      id: 'letsstartatthebeginning',
      time: "1 week",
      team: "Shayne Dsouza, Gourav Acharya",
      links: [
        {
          title: 'Itch',
          icon: 'itch',
          link: 'https://shaynedsouza.itch.io/lets-start-at-the-beginning'
        }
      ],
      image: {
        link: 'https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/PersonalProjects/LetsStartAtTheBeginning/GLRXLU.png'
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
          span: 2, 
          image: {
            link: 'https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/PersonalProjects/LetsStartAtTheBeginning/letsallred.jpg'
          }
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
            link: 'https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/PersonalProjects/LetsStartAtTheBeginning/letscrawlies.gif'
          }
        },
        {
          
          title: 'Ranked 13 in Horror and Story out of 221 entries for Scream Jam 2021!'

        },
        {
          span: 2, 
          image: {
            link: 'https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/PersonalProjects/LetsStartAtTheBeginning/letsdevil.jpg'
          }
        },
        {
          span: 2, 
          image: {
            link: 'https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/PersonalProjects/LetsStartAtTheBeginning/letseyesred.gif'
          }
        },
        {
          
          title: '\"Pretty cool game.  I like how the story unfolds as the character walks through the house over and over again - it gave me the feeling that he was in some kind of purgatory. Scares were well done and not too over the top.\"- A reviewer for the jam',

        },
        {
          span: 2, 
          image: {
            link: 'https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/PersonalProjects/LetsStartAtTheBeginning/letsheadturn.gif'
          }
        },
 
        { title:"xpgordo reviews!",
        video: {
          link: 'https://www.youtube.com/embed/2ecRSwjzrjs'
        },
        
        span: 1
      },
        {
          video: {
            link: 'https://www.youtube.com/embed/SzL25FVRmLQ' 
          },
          
          span: 2
        },
       
        { title:"JayStudioGaming Reacts!",
          video: {
            link: 'https://www.youtube.com/embed//BiR9WzF13P8'
          },
          
          span: 2
        },

      ]
    },
    {
      id: 'yna',
      time: "1 week",
      team: "Shayne Dsouza, Gourav Acharya",
      image: {
        link: 'https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/PersonalProjects/YouAreNotAlone/menu.jpg'
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
            link: 'https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/PersonalProjects/YouAreNotAlone/platfomring.gif'
          }
        },

        {
          span: 2, 
          image: {
            link: 'https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/PersonalProjects/YouAreNotAlone/bulbeffect.gif'
          }
        },
        {
        title: "Obi rope was also used to carry out some rope cutting and trolley systems."
        },
        {
          span: 2, 
          title:"As the field of light effect reduces the crawlies draw closer"
          
        }

      ]
    },
    {
      id: 'inr',
      time: "1 week",
      team: " Shayne Dsouza, Gourav Acharya",
      image: {
        link: 'https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/PersonalProjects/ItsNotReal/inr.jpg'
      },

      //Grid Data for home page
      title: 'It\'s not real',
      span: 1,
      externallink: "/project/inr",
      description: 'A small prototype to try and make an isometric game.',

      // Grid Data for Detail Project Page
      sections: [
        
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
            link: 'https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/PersonalProjects/ItsNotReal/inrfishline.gif'
          }
        },
        {     
          title: 'An isometric tom and jerry Trap-O-Matic+Monster inc. inspired game from early 2000 flash games. A monster will trigger one trap which in turn will trigger other traps till the child gets really scared.'
        }
      ]
    },
    {
      id: 'www',
      time: "1 week",
      team: "Gourav Acharya, Shayne Dsouza",
      image: {
        link: 'https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/PersonalProjects/WillWindowsWin/mainscreen.jpg'
      },

      //Grid Data for home page
      title: 'Will Windows Win',
      span: 1,
      externallink: "/project/www",
      description: 'A small prototype to try and make an infinite runner game. ',

      // Grid Data for Detail Project Page
      sections: [
        
        
        {
          
          title: 'You are Bill, creator of Doors XB OS. You are trapped in your own creation and have to collect  Commando Prompt icons and avoid viruses.'

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
            link: 'https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/PersonalProjects/WillWindowsWin/mainscreen.jpg'
          }
        },
        {
        span:1,
        image:{
          link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/PersonalProjects/WillWindowsWin/bill.jpg"
        }
        },
        {
          text:"The trickiest part was getting the sprite mask between the computer screen right so that if there's a gap between the screens, it never seems like will just glitched out.",
          image:{link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/PersonalProjects/WillWindowsWin/gap.gif"}
        },
        {
          title:"There was parallax also put into the background and some errors persisted in the back not attacking Will.",
          image:{
            link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/PersonalProjects/WillWindowsWin/error.jpg"
          }
        },
        {
          title:"Had a fun final screen",
          image:{
            link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/PersonalProjects/WillWindowsWin/nevergonna.gif"
          }
        }

      ]
    }
  ],
  blogs,jobs
}

export default portfolioData;

