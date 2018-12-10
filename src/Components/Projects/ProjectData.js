import bbqHome from '../../assets/bbquest-home.png';
import cageHome from '../../assets/cagegif.gif';
import quint from '../../assets/quint.gif';
import golfApp from '../../assets/golf-app.gif';
import palpicker from '../../assets/palgif.gif';
import whoYouKnow from '../../assets/whoyouknow.png';
import snake from '../../assets/snake-play.png';
import swapi from '../../assets/swapi.png';

export const projectData = [
  {
    name: 'BBQuest',
    link: 'https://github.com/tdberg21/bbquest',
    description: 'BBQuest is an app that allows you to search for BBQ anywhere in the United States, and then read reviews and see ratings for those restaurants. It also allows you to track restaurants you have tried, what you ate and give them your own personal rating!',
    stack: 'React, Redux, React-Router, Jest, Enzyme',
    image: bbqHome,
    note: '* First time building my own backend'
  },
  {
    name: 'Quint Advisors',
    link: 'https://quint-consulting.herokuapp.com/',
    description: 'In November I was asked to develop a website by a group of very senior retired government and financial sector executives interested in setting up n advisory service. Working with only and oral description of what the executives were looking for in their site, in a couple of days I developed a bespoke site featuring a home page, description of the market the executives were targeting, a page describing the services offered, a page with links to the individual biographies of the partners, and a page for client testimonials.',
    stack: 'React, React-Router',
    image: quint,
    note: '* First \'freelance\' project'
  },
  {
    name: 'Cage Tracker',
    link: 'https://github.com/tdberg21/movie-tracker',
    description: 'Ever have trouble picking your favorite Nicolas Cage Movie? Cage Tracker is a dynamic application that allows a user to see a list of the most popular Nicolas Cage movies and a summary of each movie, built with React, Router and Redux. The user can create an account and add movies to a favorites page, which the user can reference whenever they need to pick a movie to watch!',
    stack: 'React, Redux, React-Router, Jest, Enzyme',
    image: cageHome,
    note: '* Three person project that won the Turing Code Fair'
  },
  {
    name: 'Golf Pool App',
    link: 'https://github.com/tdberg21/who-you-know-FE',
    description: 'This is still a work in progress, but it is meant to be an app for my sister and friends to use to draft and score our golf pools.',
    stack: 'React, React-Router, Socket.io (Front-End), Node Express (Back-End)',
    image: golfApp,
    note: '* First attempt at using Socket.io'
  },
  {
    name: 'Who You Know',
    link: 'https://github.com/tdberg21/who-you-know-FE',
    description: 'After authenticating with LinkedIn OAuth, the user\'s connections are retrieved from LinkedIn.The user must first sort each connection into 3 categories(easy, medium, hard) based on how well they can identify the connection from profile photo.The user can then play a set of connections to practice identifying connections from their LinkedIn profile photos.Scores for each play and information about incorrect answers are recorded and displayed to the user when the play is completed.Historical score information for each difficulty level is also available to the user.',
    stack: 'React (Front-End), Rails (Back-End)',
    image: whoYouKnow,
    note: '* Three person project in mod-4 of Turing with two back end students'
  },
  {
    name: 'Palette Picker',
    link: 'https://palette-picker-td.herokuapp.com/',
    description: 'Generate a random palette, save projects, and save palettes to those projects.',
    stack: 'JQuery (Front-End), Node Express (Back-End)',
    image: palpicker,
    note: ''
  },
  {
    name: 'Swapi Box',
    link: 'https://github.com/tdberg21/swapibox',
    description: 'For this project, we are hitting The Star Wars API to tap into a “black hole” of Star Wars data. Mwahaha. SWAPIbox is an application that informs users about Star Wars people, planets and vehicles using the Star Wars API. The user can choose which category to view and save favorites.',
    stack: 'React, Jest, Enzyme',
    image: swapi,
    note: ''
  },
  {
    name: 'Slytherin Snake',
    link: 'https://github.com/tdberg21/game-time',
    description: 'Classic game of Snake (if you ever had a Nokia cellphone, you know) with a Harry Potter twist. Shoutout Nagini!',
    stack: 'JavaScript, Canvas',
    image: snake,
    note: '* One of the hardest parts of completing this project was all the lost time \'testing out the game\' endlessly. It is so addicting.'
  }
]

