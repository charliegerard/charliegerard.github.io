const projects = [
  {
    'id': 1,
    'title': 'AR POSTERS',
    'url': 'https://github.com/charliegerard/ARPoster',
    'image': './images/poster-screenshot.png',
    'description': 'Augmented Reality posters',
    'tags': ['Augmented Reality', 'Unity', 'Vuforia', 'AR', 'Android'],
    'projectDescription': {
      'date': 'August 2017',
      'concept': ['As part of a monthly challenge, I spent some time creating Augmented Reality posters'],
      'images': [{'url': './images/poster.gif'}],
      'technology': [
        'This prototype uses Unity and Vuforia on Android.'
      ],
      'link': 'https://github.com/charliegerard/ARPoster'
    }
  },
  {
    'id': 2,
    'title': 'MYO WEB BLUETOOTH',
    'url': 'https://github.com/charliegerard/myo-web-bluetooth.js',
    'image': './images/myo-web-bluetooth.png',
    'description': 'Framework to use the Myo armband with web bluetooth',
    'tags': ['web', 'JavaScript', 'web bluetooth', 'Myo armband'],
    'projectDescription': {
      'date': 'May 2017',
      'concept': ['This framework uses the new Web Bluetooth API to interact with the Myo armband in the browser. Once connected to the browser, data from the Myo can be received via bluetooth.'],
      'images': [{'url': './images/myo.gif'}],
      'technology': [
        'This framework uses the new Web Bluetooth API'
      ],
      'link': 'https://github.com/charliegerard/myo-web-bluetooth.js'
    }
  },
  {
    'id': 3,
    'title': 'BROWSER PONG',
    'url': 'http://charliegerard.github.io/browser-pong',
    'image': './images/browser-pong.png',
    'description': 'Pong game with browser windows',
    'tags': ['web', 'JavaScript'],
    'projectDescription': {
      'date': 'August 2016',
      'concept': ["Inspired by Stewart Smith's original work, I was interested in recreating his Browser Pong experiment to understand the mechanisms behind it. This game takes the concept of the Pong game out of the (browser) box by allowing the user to play using browser windows as paddles. The experience is a single player game where the user plays against an AI."],
      'images': [{'url': './images/browserpong.gif'}],
      'technology': [
        'This game was created using HTML, CSS and JavaScript without any specific framework and is a desktop only experience.',
        'An additional feature could allow 2 users to play remotely using web sockets.'
      ],
      'link': 'http://charliegerard.github.io/browser-pong'
    }
  },
  {
    'id': 4,
    'title': 'CODE IN THE PARK',
    'url': 'https://vimeo.com/180549893',
    'image': './images/code-park.png',
    'description': 'Intro video for the Code in the Park event.',
    'tags': ['creative coding', 'Three.js'],
    'projectDescription': {
      'date': 'June 2016',
      'concept': ['For their events `Code in the Park` and `Code in the Cinema` held in Sydney and Melbourne, General Assembly came to Daisy Smith and I to create an intro video showing what can be done with code. Being both passionate about creative coding, Daisy and I decided to put together a video showing how code can be used to make graphics and art.',
        'This event was sponsored by Yahoo for VIVID Ideas Sydney and gathered around 700+ people.'],
      'images': [{'url': './images/code-park2.png'}],
      'video': 'https://player.vimeo.com/video/190437916',
      'technology': ['The video was put together by creating multiple small sketches using the Three.js framework, p5.js and Processing. These sketches were then recorded and merged as a video using After Effects for the titles and sponsors logos.'],
      'link': 'https://vimeo.com/180549893'
    }
  },
  {
    'id': 5,
    'title': 'GESTURE CONTROLLED SPHERO',
    'url': 'https://github.com/charliegerard/myo_sphero',
    'image': './images/myo-sphero2.png',
    'description': 'Control the Sphero with your arm using the Myo armband',
    'tags': ['hardware', 'Myo armband', 'Sphero', 'Node.js'],
    'projectDescription': {
      'date': 'November 2014',
      'concept': ['This project is an experiment to see if I could use the data provided by the Myo armband to control the direction of a Sphero ball rolling. Once the Sphero is on and the Myo is calibrated properly, the user is able to change the direction of the ball depending on the gesture executed. For example, a `wipe right` gesture, makes the Sphero ball roll in the right direction.'],
      'images': [{'url': './images/myo-sphero3.png'}],
      'technology': ["The Myo armband is a wearable gesture control and motion control device that senses electrical signals going through the user's arm and connects to the computer via bluetooth. Built in Node.js, this project uses the myo and sphero npm modules to get the data from the Myo and send commands to the Sphero."],
      'link': 'https://github.com/charliegerard/myo_sphero'
    }
  },
  {
    'id': 6,
    'title': 'PERSPECTIVE',
    'url': 'https://charliegerard.github.io/Perspective/',
    'image': './images/perspective.png',
    'description': 'Prototype using head-tracking technology to explore a virtual world in the browser.',
    'tags': ['web', 'Three.js', 'Face tracking'],
    'projectDescription': {
      'date': 'July 2016',
      'concept': ['The way we interact with interfaces in the browser is usually using the trackpad or keyboard. However, these types of interactions are not so natural, they force the user to adapt to the technology rather than the opposite. With this project, I wanted to try and experiment with new ways of interacting with the computer screen.',
        'As a result, I created an experiment where the user can use the movement of their head to influence what is happening on the screen, as if they were looking through a window.'
      ],
      'images': [{'url': './images/perspective2.png'}, {'url': './images/perspective.gif'}],
      'technology': ['Written in HTML, CSS and JavaScript, this project is experimenting with computer vision in the browser using tracker.js'],
      'video': '',
      'link': 'https://github.com/charliegerard/Perspective'
    }
  },
  {
    'id': 7,
    'title': 'EPOC.JS FRAMEWORK',
    'url': 'https://github.com/charliegerard/Epoc.js',
    'image': './images/emotiv.png',
    'description': 'WIP - A framework to use the Emotiv brain sensor in Node.js',
    'tags': ['hardware', 'Emotiv Epoc', 'Node.js'],
    'projectDescription': {
      'date': 'June 2016',
      'concept': ["The Emotiv EPOC brain sensor is a device tracking the user's brainwaves and allows them to interact with different interfaces to train their brain.",
        'As a developer, I wanted to use the data provided by the device to interact with interfaces or other devices. At the time, the only SDK available were written in Java and C++ which are languages I am not that familiar with. As I really wanted to be able to prototype for this device quickly, I built my own JavaScript framework for it. As a result, I can now get the data from the device and use JavaScript to build my projects.'
      ],
      'images': [{'url': './images/emotiv2.png'}],
      'video': '',
      'technology': ['This project is open-source, all the code is available on Github. The technologies used involve the node-gyp module, Node.js and C++ in the background.',
        'As a result of this project, I started trying to control the Sphero using my eye movements and my thoughts. Due to a lack of time, I have not yet achieved this but this is a work in progress.'],
      'link': 'https://github.com/charliegerard/Epoc.js'
    }
  },
  {
    'id': 8,
    'title': 'SPHERO & LEAP MOTION',
    'url': 'https://github.com/charliegerard/leap_sphero',
    'image': './images/leap-sphero.png',
    'description': 'Control the Sphero with your hands using the Leap motion controller',
    'tags': ['hardware', 'sphero', 'leap motion', 'Node.js'],
    'projectDescription': {
      'date': 'July 2014',
      'concept': ['The Sphero ball is a little robot usually controlled using an app on your mobile. As I was experimenting with the Leap Motion and Sphero seperately, I started wondering if I could actually use these 2 devices together. Controlling the Sphero using the movements of my hand over the Leap Motion seemed like an interesting experiment and also a more exciting way to interact with the robot than having to hold my phone.'],
      'images': [{'url': './images/leap-sphero2.png'}, {'url': './images/leap-sphero-video.gif'}],
      'technology': ['This project was built using Node.js, the Leap.Js node module to have access to the Leap Motion data and the Sphero.js module to be able to control the robotic ball in JavaScript.', 'Once the app is launched, you can also display a visualizer in the browser to see your hands moving over the Leap motion'],
      'link': 'https://github.com/charliegerard/leap_sphero'
    }
  },
  {
    'id': 9,
    'title': 'DRONE & NEUROSKY',
    'url': 'https://github.com/charliegerard/neurosky-drone',
    'image': './images/neurosky-drone.png',
    'description': 'Control the Parrot AR Drone with your mind using the Neurosky brain sensor',
    'tags': ['hardware', 'drone', 'Neurosky', 'Node.js'],
    'projectDescription': {
      'date': 'March 2015',
      'concept': ['I started experimenting with brain waves with the Neurosky brain sensor. With 4 different channels, this device tracks the level of meditation and attention of the user. I wanted to use this data to see if I could interact with a drone using focus.'],
      'images': [],
      'video': '',
      'technology': ['Written using the Cylon.js framework, this project is entirely written in JavaScript and uses the Neurosky and Parrot AR drone modules.'],
      'link': 'https://github.com/charliegerard/neurosky-drone'
    }
  },
  {
    'id': 10,
    'title': 'TOUCH POSTER',
    'url': 'https://www.youtube.com/watch?v=Ks8xG4rcNxE',
    'image': './images/touch-poster.png',
    'description': 'WIP - Prototype of touch mirror',
    'tags': ['hardware', 'bare conductive', 'music'],
    'projectDescription': {
      'date': 'April 2016',
      'concept': ['After discovering Bare conductive, I knew I had to try it to understand how it all worked.',
        'I decided to build a prototype of interactive touch poster to try and turn something as mundane as a poster into an engaging experience.'
      ],
      'images': [{'url': './images/touch-poster.JPG'}],
      'video': 'https://www.youtube.com/embed/Ks8xG4rcNxE',
      'technology': ['This project uses conductive ink and a Bare conductive board with some sample sounds.'],
      'link': 'https://www.youtube.com/watch?v=Ks8xG4rcNxE'
    }
  },
  {
    'id': 11,
    'title': 'DRONE & LEAP MOTION',
    'url': 'https://github.com/charliegerard/leap_drone',
    'image': './images/leap-drone.png',
    'description': 'Control the Parrot AR Drone with your hands using the Leap motion',
    'tags': ['hardware', 'drone', 'Leap motion', 'Node.js'],
    'projectDescription': {
      'date': 'April 2015',
      'concept': ['As part of my first experimentations with the Leap Motion and after managing to control the Sphero ball using my hand movements, I moved on to controlling the Parrot AR Drone. Simple gestures such as `swipe left` / `swipe right`, allow users to control the orientation of the drone using more natural movements then having to download an app on your phone.',
        "The video coming from the drone's front camera is also streamed in the browser."
      ],
      'images': [],
      'video': '',
      'technology': ['This project involves a Leap Motion controller, a Parrot AR drone, and Node.js'],
      'link': 'https://github.com/charliegerard/leap_drone'
    }
  },
  {
    'id': 12,
    'title': 'WEBVR EXPERIMENT',
    'url': 'https://github.com/charliegerard/Threejs-VR',
    'image': './images/threejs-vr.png',
    'description': 'First prototype of WebVR to be used in a Google Cardboard',
    'tags': ['web', 'Three.js'],
    'projectDescription': {
      'date': 'December 2015',
      'concept': ['This mini project is my first attempt at creating a WebVR experiment. Displaying a procedural city, this project works on both desktop and mobile and is aiming at creating a feeling of flying over a city.',
        'On desktop, the interaction happens using the mouse, but on mobile, paired with a Google Cardboard, the user can move their head to look around the 3D landscape.'
      ],
      'images': [{'url': './images/threejs-vr.gif'}],
      'video': '',
      'technology': ['Using Three.js for the graphics and interactions, this project experiments with the latest technologies in the browser.'],
      'link': 'https://github.com/charliegerard/Threejs-VR'
    }
  },
  {
    'id': 13,
    'title': 'LEAPSYNC',
    'url': 'http://charliegerard.github.io/leapsync/',
    'image': './images/leapsync.png',
    'description': 'Prototype build at the SheHacks hackathon - platform to teach sign language with the Leap motion.',
    'tags': ['web', 'hardware', 'Leap motion'],
    'projectDescription': {
      'date': 'May 2015',
      'concept': ['As part of the SheHacks hackathon organised in Sydney in May 2015, Daisy Smith and I worked on a prototype to help people learn sign language in an interactive way.',
        'Using the Leap Motion sensor, we wanted to see if we could build an interface that could help people practice sign language with immediate feedback on their performance.',
        'The interface displays an alphabet in sign language and prompts the user to execute one of the hand gestures. If the gesture is done properly, the user sees feedback on the screen with drawings of the letter they just did.'
      ],
      'images': [{'url': './images/leapsync2.png'}, {'url': './images/leapsync-gif.gif'}],
      'video': '',
      'technology': ['This project uses the Leap Motion controller and HTML/CSS/JavaScript for the interface.'],
      'link': 'https://github.com/charliegerard/leapsync'
    }
  },
  {
    'id': 14,
    'title': 'DRONE & MYO ARMBAND',
    'url': 'https://github.com/charliegerard/myo_drone',
    'image': './images/myo-drone.png',
    'description': 'Control the Parrot AR Drone with your arm using the Myo armband',
    'tags': ['hardware', 'drone', 'Myo armband', 'Node.js'],
    'projectDescription': {
      'date': 'August 2015',
      'concept': ['After controlling the Sphero ball using the Myo armband, I worked on controlling the drone using the same gestures.'],
      'images': [{'url': './images/myo-drone2.png'}],
      'video': '',
      'technology': ['Myo armband, Parrot AR Drone, Node.js'],
      'link': 'https://github.com/charliegerard/myo_drone'
    }
  }
]

export default projects
