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
//  {
//   id:'howcamnav',
//   span:'1',
//   links: [
    
//   ],
//   time:"December 27, 2022",
//   index:0,
//   title: 'How to make camera navigation that’s like the scene view in Unity',
//   image:{
//     link: 'https://miro.medium.com/max/640/1*g4pVzL0MmHb0zYTtcjWtqA.gif'
//   },
//   externallink:"https://medium.com/@gouravacharya19/how-to-make-camera-navigation-thats-like-the-scene-view-in-unity-61a3b5fc43ef"
// },
//   {
//     id:'howheadturn',
//     span:'1',
//     links: [
      
//     ],
//     time:"November 11, 2022",
//     index:0,
//     title: 'How a couple of lines of code brought so many scares!',
//     image:{
//       link: 'https://github.com/kvoththebloodless/MediaDump/blob/master/Lets/letsblogneck.JPG?raw=true'
//     },
//     externallink:"/blog/howheadturn",
//     blogsections:[
//       {
//         blogsectiontitle:"Situation",
//         blogsectiontext: "It's the scream game jam 2021 and you are looking to put in some good scares. What do you do? What creeps people out? The answer: Creepy still figures with glowing eyes staring into your soul and whose head turn as you move and Lightning!"
//         +"\n On the surface all my friends said that it was such a cool mechanic and must have taken the most time! The truth is, it's all smokes and mirrors!",
//         bloggridsections:[]
//       },
//       {
//         blogsectiontitle:"Task",
//         blogsectiontext: "The steps to achieve head following and lightning were as follows",
//         bloggridsections :[
//             { title: "For Head turn",
//               list: [
//                 {label: "Have a skinned and rigged mesh available."},
//                 {label: "Find and locate the neck bone in the model"},
//                 {label: "Write code to rotate the neck bone as the player moves"},
//                 {label: "Bonus: Make glowy eyes to make it look extra creepy"}
//               ]
//             },
//             { title: "For Lightning",
//               list: [
//                 {label: "Figure out how Lightning effect will be viewed inside the house."},
//                 {label: "Find matching audio"},
//               ]
//             }
//         ]
//       },
//       {
//         blogsectiontitle:"Approach - Head Turn",
//         blogsectiontext: "The first thing was to find a freely available 3d model of the characters. There are tons of resources and we got our man model from - Renderpeople's 3d models. \n The next step was to skin and rig it. Now that procedure is particularly painful and is made very painless by Mixamo."
//         +"Mixamo is a library of freely available animations online and has this pipeline where you upload a 3d model and as long as it's humanoid-ish. then you can get a really well rigged model.\n Once that's done, you'll see a neck bone inside the bone heirarchy of the model which will flow somewhat like hip->spine->neck"
//         +" Now comes the simplest part, the code! And all it is, is telling the neck bone to rotate to look at the camera",
//         bloggridsections :[
//             {
//               span: 4,
//               list: [
//                 {
//                   label: "NeckBone.transform.lookAt(Camera.main.transform,Vector3.up)",
//                 }
//               ]
//             }
//         ]
//       },
//       {
//         blogsectiontitle:"Approach - Lightning",
//         blogsectiontext: "Lightning happens intermittently and there's a flashing with a sound delayed. The only place it'll be witnessed is near an open window. \n Now if there was a light outside the window which flickered with the same varying intensity over"+
//         "different random intervals, we'll have ourselves a lightning effect! \n \n In the following snippet of code we can see that the Flickr coroutine oscillates between max and min intensity to give the flashing effect and then it dies down for a few seconds as we yield and starts again"+
//         " after a while hence giving the lightning effect via a spotlight aimed at the window!",
//         bloggridsections :[
//             {
//               image:{link:"https://raw.githubusercontent.com/kvoththebloodless/MediaDump/master/Lets/letsbloglightining.JPG"}
//             }
//         ]
//       },
//       {
//         blogsectiontitle:"Results",
//         blogsectiontext: "You can see both the lightning and head effect in the following gifs",
//         bloggridsections :[
//             {
//               image:{link:"https://github.com/kvoththebloodless/MediaDump/blob/master/Lets/letsheadturn.gif?raw=true"}
//             },
//             {
//               image:{link: 'https://github.com/kvoththebloodless/MediaDump/blob/master/Lets/letscrawlies.gif?raw=true'}
//             }
//         ]
//       }
      
//     ]
//   },
//   {
//     id:'howbulbeffect',
//     span:'1',
//     links: [
      
//     ],
//     time:"November 11, 2022",
//     index:0,
//     title: 'How I made the bulb radius- creepy crawlie effect',
//     image:{
//       link: 'https://github.com/kvoththebloodless/MediaDump/blob/master/YouAreNotAlone/YNACRAWLIES.jpg?raw=true'
//     },
//     externallink:"/blog/howbulbeffect",
//     blogsections:[
//       {
//         blogsectiontitle:"Situation",
//         blogsectiontext: "The aim of the \'you are not alone\' little prototype was to see if we can create a light based mechanic. Being the halloween season we settled on a bulb character who needs to solve puzzles and get through doors"+
//         "and make sure the light never goes out. So once you pick up a battery and consume it, the light radius will increase and otherwise it will slowly diminish until the creepy crawlies who only stay in the darkness surround you.",
//         bloggridsections:[]
//       },
//       {
//         blogsectiontitle:"Task",
//         blogsectiontext: "The steps to achieve head following and lightning were as follows",
//         bloggridsections :[
//             { 
//               list: [
//                 {label: "Have a creepy crawlie monster rigged with crawling animation"},
//                 {label: "Have the light radius/area of effect distinguish over time"},
//                 {label: "Based on the radius,keep the crawlies at the periphery to increase tension."},
//                 {label: "Once the light reduces to zero, the crawlies will get you."}
//               ]
//             }
//         ]
//       },
//       {
//         blogsectiontitle:"Approach",
//         blogsectiontext: "The first thing was to reduce the area of effect and intensity at the same time. Fortunately unity's light system already has an area of effect and intensity parameter and all that was needed was to have a coroutine that diminished both "+
//         "linearly over time and set a radius that can be used by the creepy crawlie script! We use Navmesh to bake a movement plane and have our agents - the creepy crawlies move based on location given.",
//         bloggridsections :[
//             { title :"Area of light [courtesy of unity's website]",
//              image:{link:"https://docs.unity3d.com/uploads/Main/Light-Point.jpg"}
//             },
//             {
//               title:"Creepy Crawlie movement manager. Based on radius interface which is injected in, we use that radius to set the crawlies at the circumference",
//               image:{link:"https://github.com/kvoththebloodless/MediaDump/blob/master/YouAreNotAlone/spread%20circle.JPG?raw=true"}
//             }
//         ]
//       },
//       {
//         blogsectiontitle:"Results",
//         blogsectiontext: "You can see the creepy crawlies running once the light effect increases as the radius resets their location to the new circumference!",
//         bloggridsections :[
//             {
//               image:{link:"https://github.com/kvoththebloodless/MediaDump/blob/master/YouAreNotAlone/ynabulbeffect.gif?raw=true"}
//             }
//         ]
//       }
      
//     ]
//   },
//   {
//     id:'howisometric',
//     span:'1',
//     links: [
      
//     ],
//     time:"November 20, 2022",
//     index:0,
//     title: 'How I made a custom sprite rendering logic to give the occlusion effect in a fully 2D isometric game.',
//     image:{
//       link: 'https://github.com/kvoththebloodless/MediaDump/blob/master/ItsNotReal/occlusion.JPG?raw=true'
//     },
//     externallink:"/blog/howisometric",
//     blogsections:[
//       {
//         blogsectiontitle:"Situation",
//         blogsectiontext: "For a fully isometric game (A traps based mechanic where one trap triggers the other and there is furniture in the room that aids the trap effects.) made with only 2D assets there comes a giant issue of how to show overlap. If an object A and object B are occupying the same space how do we decide what's rendered before and what's after.",
//         bloggridsections:[
         
//         ]
//       },
//       {
//         blogsectiontitle:"Task",
//         blogsectiontext: "The task is to figure out how to render sprites when overlapping while working with the following restrictions",
//         bloggridsections :[
//           {list:[
//             {label:"A trap like for eg. a catapult only take up one grid space. A furniture item can take as many places as it needs to."},
//            {label:"A trap can't be placed directly over a fully occupied tile but can be placed on a partially occupied one [As marked red-for no and blue for yes in the image below]"},
//             {label:"Don't overlap furniture objects."}
//           ],
//           image:
//           {
//               link:"https://github.com/kvoththebloodless/MediaDump/blob/master/ItsNotReal/markvalid.JPG?raw=true"
//           }
//         }
//         ]
//       },
//       {
//         blogsectiontitle:"Approach",
//         blogsectiontext: "We watched this excellent video by Scott Steffers of Kingdom of Knight game and prepared the following approach to solving the problem. We learnt that for isometric games the rendering logic should be over whichever two sprites that are intersecting."+
//         " For this isometric game, the lower and the more left you go, the more you will be brought to the front. With that in mind here were the steps. ",
//         bloggridsections :[
//           {
//           video:
//           {
//               link:"https://www.youtube.com/embed/yRZlVrinw9I"
//           }
//         },
//         {
//           list:[
//             {label:"Note: when I say x and y it means in grid space the horizontal and vertical respectively."},
//             {label:"Calculate in grid space, where the furniture and traps, i,e, both types of interactables are present. Initially it's just the furniture till you place the trap."},
//             {label:"Now once we have those values, when we start to place a trap on the grid we perform the following check each frame as we move the trap"}
//           ],
//           image:{
//             link:"https://github.com/kvoththebloodless/MediaDump/blob/master/ItsNotReal/inrblogfindextremeties.JPG?raw=true"
//           }
//         },
//         {
//           list:[
//             {label: "1) If the trap is interacting with another trap then render based on the point to point check"},
//             {label: "1.a) If both have the same y value then sort based on x values. i.e, the lower the x value the more the sprite rendering order."},
//             {label: "1.b) If both have the same x value then similarly lower the y value, the more your sprite order."},
//           ],
//             image:{
//               link:"https://github.com/kvoththebloodless/MediaDump/blob/master/ItsNotReal/inrpointopointcheck.JPG?raw=true"
//             }
//         },
//         {
//           list:[
//             {label: "2) If the trap is interacting with a furniture we follow the following logic"},
//             {label: "2.a) Calculate the diagonal extremeties of the furniture that the trap is intersecting with."},
//             {label: "2.b) We take the diagonal that passes through (xmin,ymax) and (xmax,ymin) because that satisfies our rendering rule about \"the lower and the more left you go, the more you will be brought to the front. With that in mind here were the steps. \""},
//             {label: "2.c) Then take the cross product of the vector to trap position and the diagonal vector and if the cross product is negative for z then trap's rendering order is less than furniture as trap is behind the furniture and vice versa for positive z"}
//           ],
//             image:{
//               link:"https://github.com/kvoththebloodless/MediaDump/blob/master/ItsNotReal/inrpointtolinecheck.JPG?raw=true"
//             }
//         }
//         ]
//       },
//       {
//         blogsectiontitle:"Results",
//         blogsectiontext: "You can see that For a partially covered tile that the trap tries to occupy,  as we move the trap around the room it occludes when behind the furniture and shows up again when in front of it. ",
//         bloggridsections :[
//             {
//               image:{link:"https://github.com/kvoththebloodless/MediaDump/blob/master/ItsNotReal/inrspriterendering.gif?raw=true"}
//             }
//         ]
//       }
      
//     ]
//   },
//   {
//     id:'howfishline',
//     span:'1',
//     links: [
      
//     ],
//     time:"November 20, 2022",
//     index:0,
//     title: 'How I made a custom fishline projectile effect to display where a trap\'s area of effect reaches',
//     image:{
//       link: 'https://github.com/kvoththebloodless/MediaDump/blob/master/ItsNotReal/inr.JPG?raw=true'
//     },
//     externallink:"/blog/howfishline",
//     blogsections:[
//       {
//         blogsectiontitle:"Situation",
//         blogsectiontext: "In our game -it\'s not real, we use traps to trigger other traps and create a domino effect. For a mechanic like such, we need a way to see the area of effect for a trap. So for eg, a catapult trap will need to show where the object it throws will land.",
//         bloggridsections:[
         
//         ]
//       },
//       {
//         blogsectiontitle:"Task",
//         blogsectiontext: "The task is to figure out how to show a fishline effect, i.e, a projectile line that shows where the object will land once thrown.",
//         bloggridsections :[
          
//         ]
//       },
//       {
//         blogsectiontitle:"Approach",
//         blogsectiontext: "A very common law of motion is every F= MA, now from that equation we have a derived motion equation ",
//         bloggridsections :[
//           {
//             span:2,
//         title:"Distance= Initial Velocity*timetaken + 0.5*acceleration*timetaken^2 or typed as S=ut+0.5 at^2" 
//         },
//         {span:2,
//           list:[
//             {label:"We first need to calculate what's the initial velocity as we will come to use it in the latter steps."},
//             {label:"To calculate initial velocity, we can use that formula for motion and that gives us : InitialVelocity = (Distance+0.5*gravitymultiplier*timetaken*timetaken)/timetaken"},
//             {label:"In the case of this game, that means knowing the position in world space of the  grid tile we are starting from(world position of trap), the direction in which we launch(catapult launches up), And then the time we expect it to reach the final tile. "},
//             {label:"Gravity multiplier will be a positive value as we replaced the negative of acceleration by a positive instead."},
//             {label:"We store all that in a kineticinfo object."}
//           ],
//           image:{
//             link:"https://github.com/kvoththebloodless/MediaDump/blob/master/ItsNotReal/inrfishlinekinematiconfo.JPG?raw=true"
//           }
//         },
//         { span:2,
//           list:[
//             {label: "Now to render the fishline we need to draw line renderer points all the way from start to finish."},
//             {label: "Using the kinematic info object we have the initial velocity, time(t) that should be taken for the object to reach the final tile and we know the initial position of the catapult"},
//             {label: "Now, suppose we have n number of line renderer points to render. And we know that total time that should be taken to reach is 't' and given in the kinematic info object. So by that logic at every t1=t/n value there will be a point of line renderer"},
//             {label: "So now if we iterate over all the points and using the same formula S=ut+0.5 at^2 we do S2=S1+ut1+0.5*gravitymultiplier*gravityacceleration*t1*t1 and that way S2 gives us the position of that linerenderer point."},
//             {label: "And that's how we render a fishline from one position to another."}
//           ],
//             image:{
//               link:"https://github.com/kvoththebloodless/MediaDump/blob/master/ItsNotReal/inrfishlinerender.JPG?raw=true"
//             }
//         }
//         ]
//       },
//       {
//         blogsectiontitle:"Results",
//         blogsectiontext: "You can see that the fishline that forms from the catapult",
//         bloggridsections :[
//             {
//               image:{link:"https://github.com/kvoththebloodless/MediaDump/blob/master/ItsNotReal/inrfishline.gif?raw=true"}
//             }
//         ]
//       }
      
//     ]
//   },
//   {
//     id:'howransomware',
//     span:'1',
//     links: [
      
//     ],
//     time:"November 20, 2022",
//     index:0,
//     title: 'How I made the ransomware seem more sentient and sinister by adjusting the animation through code',
//     image:{
//       link: 'https://github.com/kvoththebloodless/MediaDump/blob/master/WillWindowsWin/wwwrobbervirus.gif?raw=true'
//     },
//     externallink:"/blog/howransomware",
//     blogsections:[
//       {
//         blogsectiontitle:"Situation",
//         blogsectiontext: "For the WillWindowsWin game we had different viruses popping up and trying to damage Will. So Ransomware was obviously drawn like a typical old school movie robber. We needed to give it a sinister character.",
//         bloggridsections:[
         
//         ]
//       },
//       {
//         blogsectiontitle:"Task",
//         blogsectiontext: "The task is to make the Ransomware feel more sinister.",
//         bloggridsections :[
          
//         ]
//       },
//       {
//         blogsectiontitle:"Approach",
//         blogsectiontext: "The ransomware virus is just a 2D sprite at the end of the day. So Here is how I approached this task.",
//         bloggridsections :[
        
//         {span:2,
//           list:[
//             {label:"First I created a collection of frames for the ransomware animation"},
            
//           ],
//           image:{
//             link:"https://github.com/kvoththebloodless/MediaDump/blob/master/WillWindowsWin/ransomgiffffff.gif?raw=true"
//           }
//         },
//         { span:2,
//           list:[
//             {label: "I make sure the time is unifor such that right at the mid point of the state, the ransomware shoudl translate forward. This implies that When the ransomware's tentacles push  that's when it should move. Representing an octopus type movement as it's designed."},
         
//           ],
//             image:{
//               link:"https://github.com/kvoththebloodless/MediaDump/blob/master/WillWindowsWin/ransomware.JPG?raw=true"
//             }
//         },
//         { span:2,
//           list:[
//             {label: "And finally thirdly, I increase the speed of the animation and the distance travelled when it detects the player so it can shoot up at it. And that increases the tension."},
         
//           ],
//             image:{
//               link:"https://github.com/kvoththebloodless/MediaDump/blob/master/WillWindowsWin/triggehunt.JPG?raw=true"
//             }
//         }
//         ]
//       },
//       {
//         blogsectiontitle:"Results",
//         blogsectiontext: "You can see the ransomware feels like a very real threa to Will Windows",
//         bloggridsections :[
//             {
//               image:{link:"https://github.com/kvoththebloodless/MediaDump/blob/master/WillWindowsWin/wwwrobbervirus.gif?raw=true"}
//             }
//         ]
//       }
      
//     ]
//   }
]

const jobs =[
  
  {
    id: 'Freelance1',
    time: "2019-2020",
    team: "Shayne Dsouza with various individuals.",
    image: {link: 'https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Gifs/Freelance1/Freelance.png'},

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
        image:{link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Gifs/Freelance1/PlayerThrow.gif"}
      },
      {
        title:"Slice",
        image:{link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Gifs/Freelance1/Slice.gif"}
      },

      {
        span:2,
        title:"Flight rush",
        image:{link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Gifs/Freelance1/FlightRush.gif"}
      },
      {
        title:"Hole in the wall",
        list:[{label:'Made using spring joints.'}],
        image:{link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Gifs/Freelance1/Hole_In_The_Wall.gif"}
      },
      {
        span:2,

        title:"Slice infinite",
        image:{link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Gifs/Freelance1/Slice_Infinite.gif"}
      },
      {
        title:"Race wars",
        image:{link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Gifs/Freelance1/Race_Wars.gif"}
      },
      {
        title:"Particle flip",
        list:[{label:'Made using Obi fluid to increase performance.'}],
        image:{link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Gifs/Freelance1/ParticleFlip.gif"}
      },

    ]
  },
  
  {
    id: 'underDOGS',
    time: "2020-2021",
    team: "Shayne Dsouza with a 2D artist",
    image: {link: 'https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Gifs/underDOGS/underDOGS.png'},

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
        image:{link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Gifs/underDOGS/ActionFigurine.gif"}
      },
      {
        span:2,
        title:"Barricade Builder",
        description:"",
        image:{link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Gifs/underDOGS/BarricadeBuilder.gif"}
      },
      {
        title:"Bellow rush",
        image:{link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Gifs/underDOGS/BellowRush.gif"}
      },
      {
        title:"Burst mania",
        image:{link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Gifs/underDOGS/BurstMania.gif"}
      },  
      {
        title:"Car raise",
        image:{link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Gifs/underDOGS/CarRaise.gif"}
      },
      {
        span:2,
        title:"Snack factory",
        image:{link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Gifs/underDOGS/SnackFactory.gif"}
      },      
      { 
        title:"Clothes run",
        image:{link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Gifs/underDOGS/ClothesRun.gif"}
      },
      {
        span: 2,
        title:"Crowd follow",
        image:{link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Gifs/underDOGS/CrowdFollow.gif"}
      },
      {
        span:2,
        title:"Shortcut fall",
        image:{link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Gifs/underDOGS/ShortcutFall.gif"}
      },

      {
        title:"Master push",
        image:{link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Gifs/underDOGS/MasterPush.gif"}
      },
      {
        title:"Meteor multiplier",
        image:{link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Gifs/underDOGS/MeteorMultiplier.gif"}
      },

      {
        title:"Poster reveal",
        image:{link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Gifs/underDOGS/PosterReveal.gif"}
      },
      {
        title:"Imposter fall",
        image:{link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Gifs/underDOGS/ImpostersFall.gif"}
      },
      {
        title:"Open the lane",
        image:{link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Gifs/underDOGS/OpenTheLane.gif"}
      },
      {
        span:2,
        title:"Infinite digger",
        image:{link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Gifs/underDOGS/InfiniteDigger.gif"}
      },
      {
        title:"Titan hand",
        image:{link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Gifs/underDOGS/TitanHand.gif"}
      }
    ]
  },
  {
    id: 'ZeusLearning',
    time: "2021-2022",
    team: "Shayne Dsouza as lead developer with 3 other Unity, NodeJS developers",
    image: {link: 'https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Gifs/ZeusLearning/ZeusLearning.png'},

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
          link: 'https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Gifs/ZeusLearning/DoIHaveARight_Login.gif'
        }
      },

      {
        span: 1, 
        title:"The window view from inside and out of the building were made using render textures to optimise the project and save resources.",
        image:{
          link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Gifs/ZeusLearning/DoIHaveARight_Camera.gif"
        }
        
      },




      {
      title: "Tutorial",
      span :2,
      image:{
        link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Gifs/ZeusLearning/DoIHaveARight1_Tutorial.gif",
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
          link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Gifs/ZeusLearning/DoIHaveARight_Gameplay.gif"
        }
        
      },

    ]
  },

  {
    id: 'Freelance2',
    time: "2022-current",
    team: "Shayne Dsouza with various individuals.",
    image: {link: 'https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Gifs/Freelance1/Freelance.png'},

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
          link: 'https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Gifs/Freelance2/Rumblerz1.gif'
        }
      },
      {
        span: 2, 
        title:"Worked on reskinning and animating the characters.",
        image:{
          link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Gifs/Freelance2/Rumblerz2.gif"
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
          link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Gifs/Freelance2/Lazarus1.gif"
        }
        
      },

      {
        span: 2, 
        title:"Jumpy jump.",
        image:{
          link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Gifs/Freelance2/Lazarus2.gif"
        }
        
      },
      {
        span: 1, 
        title:"Character selection based on nfts owned by the player.",
        image:{
          link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Gifs/Freelance2/Lazarus3.gif"
        }
        
      },
      {
        span: 2, 
        title:"Worked on player movement.",
        image:{
          link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Gifs/Freelance2/Lazarus4.gif"
        }
        
      },
      {
        span: 1, 
        title:"UI for emoting.",
        image:{
          link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Gifs/Freelance2/Lazarus5.gif"
        }
        
      },
      {
        span: 2, 
        title:"Early level setup.",
        image:{
          link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Gifs/Freelance2/Lazarus6.gif"
        }
        
      },
      {  
        title: 'Initially I used Mirror to showcase multiplayer for this project. But later on a multiplayer asset was used to handle various multiplayer issues.'
      },
      {
        span: 2, 
        title:"The weapon system was an asset which was implemented in the project.",
        image:{
          link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Gifs/Freelance2/Lazarus7.gif"
        }
        
      },
      {
        span: 2, 
        title:"Testing a character in an open world project.",
        image:{
          link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Gifs/Freelance2/Lazarus9.gif"
        }
        
      },
      {
        span: 1, 
        title:"UI reskinning.",
        image:{
          link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Gifs/Freelance2/Lazarus10.gif"
        }
      },
      {
        span: 1, 
        title:"Minting an NFT in game.",
        image:{
          link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Gifs/Freelance2/DaisLabs.gif"
        }
        
      },
      {
        span: 2, 
        title:"Character selection.",
        image:{
          link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Gifs/Freelance2/AnimalKart.gif"
        }
        
      },
      {
        span: 2, 
        title:"Worked on the entire level design and optimising the environment since this project was for webGL.",
        image:{
          link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Gifs/Freelance2/AnimalKart2.gif"
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
      team: "Gourav Acharya, Shayne Dsouza",
      links: [
        {
          title: 'Itch',
          icon: 'itch',
          link: 'https://shaynedsouza.itch.io/lets-start-at-the-beginning'
        }
      ],
      image: {
        link: 'https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Gifs/PersonalProjects/LetsStartAtTheBeginning/GLRXLU.png'
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
            link: 'https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Gifs/PersonalProjects/LetsStartAtTheBeginning/letsallred.jpg'
          }
        },
        {
          span: 2, 
          image: {
            link: 'https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Gifs/PersonalProjects/LetsStartAtTheBeginning/letscrawlies.gif'
          }
        },
        {
          
          title: 'Ranked 13 in Horror and Story out of 221 entries for Scream Jam 2021!'

        },
        {
          span: 2, 
          image: {
            link: 'https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Gifs/PersonalProjects/LetsStartAtTheBeginning/letsdevil.jpg'
          }
        },
        {
          span: 2, 
          image: {
            link: 'https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Gifs/PersonalProjects/LetsStartAtTheBeginning/letseyesred.gif'
          }
        },
        {
          
          title: '\"Pretty cool game.  I like how the story unfolds as the character walks through the house over and over again - it gave me the feeling that he was in some kind of purgatory. Scares were well done and not too over the top.\"- A reviewer for the jam',

        },
        {
          span: 2, 
          image: {
            link: 'https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Gifs/PersonalProjects/LetsStartAtTheBeginning/letsheadturn.gif'
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
        { title:"xpgordo walkthrough.",
        video: {
          link: 'https://www.youtube.com/embed/2ecRSwjzrjs'
        },
        
        span: 1
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
      team: "Gourav Acharya, Shayne Dsouza",
      image: {
        link: 'https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Gifs/PersonalProjects/YouAreNotAlone/menu.jpg'
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
            link: 'https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Gifs/PersonalProjects/YouAreNotAlone/platfomring.gif'
          }
        },
        {
          span: 2, 
          title:"As the field of light effect reduces the crawlies draw closer"
          
        },
        {
          span: 2, 
          image: {
            link: 'https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Gifs/PersonalProjects/YouAreNotAlone/bulbeffect.gif'
          }
        },
        {
        title: "Obi rope was also used to carry out some rope cutting and trolley systems."
        }

      ]
    },
    {
      id: 'inr',
      time: "1 week",
      team: "Gourav Acharya, Shayne Dsouza",
      image: {
        link: 'https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Gifs/PersonalProjects/ItsNotReal/inr.jpg'
      },

      //Grid Data for home page
      title: 'It\'s not real',
      span: 1,
      externallink: "/project/inr",
      description: 'A small prototype to try and make an isometric game.',

      // Grid Data for Detail Project Page
      sections: [
        
        
        {
          
          title: 'An isometric tom and jerry Trap-O-Matic+Monster inc. inspired game from early 2000 flash games. A monster will trigger one trap which in turn will trigger other traps till the child gets really scared.'

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
            link: 'https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Gifs/PersonalProjects/ItsNotReal/inrfishline.gif'
          }
        }

      ]
    },
    {
      id: 'www',
      time: "1 week",
      team: "Gourav Acharya, Shayne Dsouza",
      image: {
        link: 'https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Gifs/PersonalProjects/WillWindowsWin/mainscreen.jpg'
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
            link: 'https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Gifs/PersonalProjects/WillWindowsWin/mainscreen.jpg'
          }
        },
        {
        span:1,
        image:{
          link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Gifs/PersonalProjects/WillWindowsWin/bill.jpg"
        }
        },
        {
          text:"The trickiest part was getting the sprite mask between the computer screen right so that if there's a gap between the screens, it never seems like will just glitched out.",
          image:{link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Gifs/PersonalProjects/WillWindowsWin/gap.gif"}
        },
        {
          title:"There was parallax also put into the background and some errors persisted in the back not attacking Will.",
          image:{
            link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Gifs/PersonalProjects/WillWindowsWin/error.jpg"
          }
        },
        {
          title:"Had a fun final screen",
          image:{
            link:"https://shayne-portfolio-media.s3.ap-south-1.amazonaws.com/Gifs/PersonalProjects/WillWindowsWin/nevergonna.gif"
          }
        }

      ]
    }
  ],
  blogs,jobs
}

export default portfolioData;

