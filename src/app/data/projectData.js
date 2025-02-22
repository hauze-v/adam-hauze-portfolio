import { v4 as uuidv4 } from "uuid";
// Images
import clipzMain from "../../../public/clipz-ssMain.png";
import clipzSS01 from "../../../public/clipz-ss01.png";
import clipzSS02 from "../../../public/clipz-ss02.png";
import clipzSS03 from "../../../public/clipz-ss03.png";
import clipzSS04 from "../../../public/clipz-ss04.png";
import musicMain from "../../../public/music-ssMain.png";
import musicSS01 from "../../../public/music-ss01.png";
import musicSS02 from "../../../public/music-ss02.png";
import igniteMain from "../../../public/ignite-ssMain.jpg";
import igniteSS01 from "../../../public/ignite-ss01.jpg";
import igniteSS02 from "../../../public/ignite-ss02.jpg";
import captureMain from "../../../public/capture-ssMain.png";
import captureSS01 from "../../../public/capture-ss01.png";
import captureSS02 from "../../../public/capture-ss02.jpg";
import quizMain from "../../../public/quiz-ssMain.png";
import quizSS01 from "../../../public/quiz-ss01.png";
import quizSS02 from "../../../public/quiz-ss02.png";
import hangmanMain from "../../../public/hangman-ssMain.png";
import hangmanSS01 from "../../../public/hangman-ss01.png";
import hangmanSS02 from "../../../public/hangman-ss02.png";
import catMain from "../../../public/cat-ssMain.png";
import catSS01 from "../../../public/cat-ss01.png";
import catSS02 from "../../../public/cat-ss02.png";
import catSS03 from "../../../public/cat-ss03.png";
import bmbMain from "../../../public/bmb-ss05.png";
import bmbSS01 from "../../../public/bmb-ssMain.png";
import bmbSS02 from "../../../public/bmb-ss01.png";
import bmbSS03 from "../../../public/bmb-ss02.png";
import bmbSS04 from "../../../public/bmb-ss03.png";
import bmbSS05 from "../../../public/bmb-ss04.png";
import fbUI from "../../../public/fbUI.png";
import fbUI02 from "../../../public/fbUI02.png";
import fbUI03 from "../../../public/fbUI03.png";

function getProjects() {
  return [
    {
      id: uuidv4(),
      name: 'React Service/Product Feedback UI',
      caseStudy: 'This project represents my exploration of building a dynamic feedback collection interface with React.js. Users can submit, edit, and delete feedback about a service, with real-time validation ensuring quality submissions. I focused on creating an intuitive user experience, incorporating smooth animations for interface transitions and clear navigation between pages. The project allowed me to practice state management in React, particularly with maintaining data consistency across different components while keeping the code organized. What I enjoyed most was implementing the subtle animations with framer-motion that bring life to the interface, especially during transitions between feedback items and form submissions. The real-time validation system guides users through the feedback submission process, while the addition of professional icons helped transform what could have been a basic CRUD application into a polished, production-ready interface that feels responsive and engaging to use.',
      bgImage: fbUI,
      hosting: 'Netlify',
      screenshots: [fbUI02, fbUI03],
      liveLink: 'https://adams-feedback-ui.netlify.app/',
      githubLink: 'https://github.com/hauze-v/feedback-ui'
    }, 
    {
      id: uuidv4(),
      name: 'Design System For Video Game Management Frontend',
      caseStudy: `This comprehensive UI/UX design project showcases my journey through modern design workflows and best practices, centered around creating a cohesive design system for a video game management application. The project demonstrates proficiency with industry-standard tools like Figma while implementing current web and mobile design principles. Starting from initial sketches and inspiration gathering, through to detailed user flows and interactive prototypes, this project encapsulates the full design lifecycle. A particular focus was placed on accessibility and design theory, ensuring the final product not only looks appealing but is also user-friendly. The project culminated in translating the Figma design system into a functional website, bridging the gap between design and implementation.`,
      logic: `The project followed a structured design thinking methodology, beginning with user research and competitive analysis to inform the design decisions. In Figma, I created comprehensive user flows to map out the application's navigation and interaction patterns. The sitemap was developed to ensure logical content organization and intuitive information architecture. Wireframes were created at varying fidelities, starting with low-fidelity sketches and progressing to detailed high-fidelity mockups. The prototyping phase involved creating interactive elements to test user interactions and validate design decisions. The design system itself was built with scalability in mind, including a comprehensive color palette, typography system, component library, and spacing guidelines. These elements were carefully documented and organized in Figma, making them easily transferable to the development phase.`,
      bgImage: bmbMain,
      hosting: 'Figma',
      screenshots: [bmbSS01, bmbSS02, bmbSS03, bmbSS04, bmbSS05],
      liveLink: 'https://www.figma.com/design/p6U8Bcqb483uYty55RRSNG/Beat-my-Backlog?node-id=116-2&t=u14dGdDMO5s1MLFp-1',
      githubLink: null
    },
    {
      id: uuidv4(),
      name: 'Cat WordPress Website Design',
      caseStudy: `This project showcases my ability to create a complete WordPress website from concept to deployment, with a focus on custom design elements and reusable components. Using Generate Press as a foundation, I extended the functionality with custom CSS to create a unique look and feel. The project demonstrates my skills in branding development, including creating a cohesive visual identity through carefully selected colors, typography, and custom logo design. The blog cover photo system I created using Canva ensures visual consistency while enabling efficient content production.`,
      logic: `The technical implementation began with customizing the Generate Press theme through its built-in customization options, followed by extending functionality with custom CSS. I created a systematic approach to typography and spacing, ensuring consistent visual hierarchy throughout the site. The reusable components were built using Generate Press's "Generate Blocks" plugin, an element based approach to making reusable components on Wordpress. The blog cover photo system was designed by me in Canva and can be quickly adapted for new content while maintaining brand consistency. The site's architecture was planned to optimize for both user experience and search engine optimization, with careful attention to page load times (leverages a CDN)ß and mobile responsiveness.`,
      bgImage: catMain,
      hosting: 'Siteground WordPress Hosting',
      screenshots: [catSS01, catSS02, catSS03],
      liveLink: 'https://thecarefreecat.com/',
      githubLink: null
    },
    {
      id: uuidv4(),
      name: 'Angular, WebAssembly, Firebase Video Sharing Application',
      caseStudy: `This full-stack project represents my most ambitious and technically complex application to date, combining Angular's robust frontend framework with Firebase backend services and WebAssembly for optimized video processing. The project served as a deep dive into TypeScript and Angular's ecosystem, pushing me to master concepts like RxJS observables, reactive forms, and component design patterns. One of the most exciting aspects was implementing WebAssembly with Rust for efficient video upload processing – a feature that significantly improved the application's performance compared to traditional JavaScript implementations. The integration of TailwindCSS for styling proved to be an excellent choice, allowing for rapid UI development while maintaining a consistent design system throughout the application. This project also marked my first experience with building a comprehensive authentication system using Firebase, complete with token management and security rules to protect user data and prevent malicious file uploads.`,
      logic: `The application's architecture is built on several key technical implementations. At its core, the app uses Angular's dependency injection system to maintain singleton services that handle state management and Firebase interactions. I implemented reactive forms with custom validators to ensure data integrity before it reaches the backend, while RxJS observables manage complex data streams and help prevent memory leaks through proper subscription management. The video upload system presented a unique challenge that I solved by creating a WebAssembly module in Rust, which handles video processing on the client side before upload. This approach significantly reduced server load and improved upload speeds. Firebase security rules enforce file validation and user authentication, creating a secure environment for video sharing. The application's routing system implements lazy loading for better initial load times, and I utilized Angular's content projection system to create reusable component templates. To handle multiple data streams efficiently, I leveraged RxJS operators like combineLatest and switchMap, particularly when dealing with user authentication states and video data simultaneously. The project follows Angular's best practices for component communication, utilizing both input/output bindings and services for state management depending on the specific use case.`,
      bgImage: clipzMain,
      hosting: 'Vercel',
      screenshots: [clipzSS01, clipzSS02, clipzSS03, clipzSS04],
      liveLink: 'https://clips-three-alpha.vercel.app/',
      githubLink: 'https://github.com/hauze-v/clips'
    },
    {
      id: uuidv4(),
      name: "React Music Player",
      caseStudy: `This was one of my first big personal projects with React.js I had built a music player in the past using vanilla JS and so I figured a good project for growing my React skills would be to build something I'm somewhat familiar with. During this project I practiced some of the key fundamentals of how React.js works. For example, I fell in love with writing JSX and keeping all my HTML code directly below any logic I needed for that particular component. Maintaining all the code needed to both display and update the UI all in one file makes so much sense to me. I practiced using state in React and enjoyed not relying on the DOM to store the application data. This made it a lot easier when it came time to grab that data since I no longer had to traverse the DOM for that particular HTML node and could even pass state to other components using props. This project was my first introduction to Sass and coming from vanilla JS I really enjoyed creating partials for each component. However, I used styled-components with my next project and love keeping everything in one file so much more. I love how much easier it is to update the UI with React.js. With vanilla JS we have to traverse the DOM, add an event listener, inside that listener do some more DOM traversal to find the piece we want to update... it can be a lot. With React though, I love that the state is always stored in a JS variable and so we can add an event like onClick directly to the JSX element and then use something like map or a "...spread" operator to update it. React just made so much sense after this project.`,
      logic: `The logic behind the project is pretty straight-forward. I had a data file which contained the cover art, mp3 files, and general information about each song. I hooked this up to some state simply called "songs" and then had some additional state for isPlaying, currentSong, etc. From there I created a Player component which held most of the logic for the project. It implements things like playing songs, draging the time bar so you can skip to the middle of a song, and skipping songs. It also has a Library component where I used my first map function to spread all the songs in my state into their own LibrarySong component which I hid away off the screen until the user clicks the button. Once everything was in place I had some issues with formatting the song times properly and also trying to style the scrollbar. I've come to realize scrollbars are tricky to style since each browser handles them differently.`,
      bgImage: musicMain,
      hosting: `Github Pages`,
      screenshots: [musicSS01],
      liveLink: "https://hauze-v.github.io/react-music-player/",
      githubLink: "https://github.com/hauze-v/react-music-player",
    },
    {
      id: uuidv4(),
      name: "React Gaming Website",
      caseStudy: `This was my most recent React project and my introduction to Redux. Up until this point I found React pretty easy and was thoroughly enjoying my time with it. Redux, however, made React feel so clunky. I know it's likely because I don't have a deep understanding yet of actions, reducers, and dispatch, but I can't help but feel like the complexity increased dramatically with this project simply due to Redux. With that being said, I certainly understand the value it brings and like the idea of having a global state "store" that we don't need to worry about passing up the tree or drilling down to as was required in my previous React projects. Secondly, this project allowed me to set up and use an external API in a meaningful way. I've built things using APIs in the past, but I was shocked at how quickly I could grab and display data on the screen using React components. I love how this one came out and enjoyed building the toggleable "card" style components so much that I refactored this entire portfolio site to use React components in a similar way.`,
      logic: `The logic behind the curtains comes down to an api.js file I created to hold all the URL strings needed for calling the external API. Then there's a gamesAction file that fetches the data from the API using Axios and dispatches that data to a gamesReducer which then updates the state and renders the Home page. What's cool about using an API is that the data will always be fresh and dynamic, even years later. There's no need to come update the "popular games" here because I'm fetching the highest rated games from the past six months. From the Home page, the user can click on a card that triggers another Axios API request through the gamesDetailsAction file to fetch some screenshots and additional information about that particular game. The gamesDetailsReducer then renders that information on the screen in a nice pop-up style card that I was able to animate using AnimateSharedLayout.`,
      bgImage: igniteMain,
      hosting: `Github Pages`,
      screenshots: [igniteSS01, igniteSS02],
      liveLink: "https://hauze-v.github.io/react-gaming-site/",
      githubLink: "https://github.com/hauze-v/ignite",
    },
    {
      id: uuidv4(),
      name: "React Videography Portfolio",
      caseStudy: `The theme of this project was animations and routing. Since this React project contained more than one page and I practiced how to use Route and Link from the "react-router-dom" package to implement navigation for the user. This project was also my introduction to styled-components and framer-motion which I've come to love far more than traditional CSS or Sass partials. Using styled-components and keeping my JS, JSX, and CSS all in one file caters to the organizational nature in me. It just makes sense and I appreciate not having to keep multiple files open when styling. If you click through to the "Our Work" page you'll notice some colorful animation here that I accomplished using four Frame components with different colors. I had a lot of fun animating just about every part of this project and particularly love how I got things to animate staggeringly on the Home page.`,
      logic: `Since this project was less about funtionality and more about animation and routing it doesn't contain much logic and the site is mostly static. The main state is tied to some MovieData I had which contained the images, awards given, and title. I spread this state across the Movie page and component and then used it to populate the individual MovieDetail components. There's also some state involved around the FAQ section at the bottom of the Home page to enable toggling. During this project I learned about the useEffect React hook and used it to update the currentMovie being rendered in the MovieDetail component. Lastly, I built a cool function called useScroll which prevents the animations further down on the Home page from occurring until you've scrolled down to them. `,
      bgImage: captureMain,
      hosting: `Github Pages`,
      screenshots: [captureSS01, captureSS02],
      liveLink: "https://hauze-v.github.io/react-capture-portfolio",
      githubLink: "https://github.com/hauze-v/react-capture-portfolio",
    },
    // {
    //   id: uuidv4(),
    //   name: "Final Fantasy Ipsum Generator",
    //   caseStudy:
    //     "I built this project way back when I first starting learning HTML, CSS, and JS. Ever since I first used a custom-built Ipsum generator like Bacon Ipsum in college, I've always wanted to make one of my own. Since I'm a big nerd and couldn't find an Ipsum generator for my favorite video game series, I decided this was the perfect project to practice my vanilla JavaScript skills on. When building this project I wanted to have a strong, striking piece of fanart and was honored to find such a talented artist who agreed to let me use their work as the hero image for the page.",
    //   logic: `If you're unfamiliar with what Lorem Ipsum is, it's essentially placeholder text that's commonly used to demonstrate the visual form of a document. It was pretty simple to create, although I'm sure there are smarter ways to go about it. I solved it by creating a large object with numerous arrays for different "categories" from this video game series. There are arrays like "characters", "weapons", "spells", etc. Once I had this data, I was able to generate a random word from each array and build a final resulting array of words based on the number of sentences the user inputted. Then I simply print out to the text-area the resulting array of words joined together with a " ". This creates the Ipsum, or placeholder text you see after hitting the button.`,
    //   bgImage: ipsumMain,
    //   hosting: `Bluehost (statically) with shared hosting and FTP`,
    //   screenshots: [ipsumSS01, ipsumSS02],
    //   liveLink: "https://finalfantasyipsum.com/",
    //   githubLink: "https://github.com/hauze-v/final-fantasy-ipsum",
    // },
    {
      id: uuidv4(),
      name: "Vanilla Quiz App",
      caseStudy:
        "I built this project while learning object-oriented programming in vanilla JavaScript. It's a simple quiz app that I built using the revealing module design pattern. At the time, I was learning all sorts of JavaScript fundamentals that I demonstrate in this project. Things like function constructors, prototypes, caching the DOM, event listeners, and rendering out the components. Looking back at the code and how I needed to render everything makes me appreciate React even more. Mostly though, the focus for this project was to learn and practice OOP and that's pretty clear given how the components are built and the prototypal inheritance used. ",
      logic: `The app starts out by caching the DOM elements I'll need and creating the five-question objects. I then pass those five-question objects to my Quiz component, initializing it. Once this is done the Quiz is ready to be played and so once a user clicks the next button there's an event listener in place that checks their guess against an answer key and then re-renders the page, keeping track of their score in the background. For the end screen, I wrote a switch case function that displays a certain message depending on how well they score.`,
      bgImage: quizMain,
      hosting: `GitHub Pages`,
      screenshots: [quizSS01, quizSS02],
      liveLink: "https://hauze-v.github.io/oop-quiz-app/",
      githubLink: "https://github.com/hauze-v/oop-quiz-app",
    },
    {
      id: uuidv4(),
      name: "Vanilla Hangman Game",
      caseStudy:
        "The hangman game is a continuation of implementing object-oriented programming techniques and JavaScript fundamentals I learned in the other vanilla JS projects listed here. This was the most complicated project I had built at the time and I focused on writing clean, organized code that followed the Revealing Module Pattern. Looking back at this code now, having learned React.js, the Revealing Module Pattern looks similar to how a React component is structured. This was also the first time I experimented with sounds and background music which I enjoyed quite a bit. I think it adds a lot to the user experience. Lastly, an API was used to create the lines and overall image of the stick-figure. It took time learning how to leverage the API to get the right length, angle, and properly sized lines needed to create the final result.",
      logic: `The app starts with the Home module and renders the New Game button and the How to Play button. An event listener waits for the user to click New Game before initializing and rendering the Game module. This is where the background music starts and a word is chosen. Once a letter is clicked there's an event that checks whether or not the letter matches a letter in the chosen word and if not, the event grays out that letter and adds a line to the stick figure. If the letter does exist it's displayed above in the correct spot and the game continues. Lastly, I initialize and render the End module screen once the lives hit zero or the user guesses the word.`,
      bgImage: hangmanMain,
      hosting: `GitHub Pages`,
      screenshots: [hangmanSS01, hangmanSS02],
      liveLink: "https://hauze-v.github.io/hangman-game/",
      githubLink: "https://github.com/hauze-v/hangman-game",
    },
  ];
}

export default getProjects;
