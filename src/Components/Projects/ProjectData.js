import bbqHome from '../../assets/bbquest-home.png';
import cageHome from '../../assets/cage-home.png';
import palpicker from '../../assets/palpicker.png';
import whoYouKnow from '../../assets/whoyouknow.png';

export const projectData = [
  {
    name: 'Cage Tracker',
    link: 'https://github.com/tdberg21/movie-tracker',
    description: 'Ever have trouble picking your favorite Nicolas Cage Movie? Cage Tracker is a dynamic application that allows a user to see a list of the most popular Nicolas Cage movies and a summary of each movie, built with React, Router and Redux. The user can create an account and add movies to a favorites page, which the user can reference whenever they need to pick a movie to watch!',
    stack: 'React, Redux, React-Router, Jest, Enzyme',
    image: cageHome
  },
  {
    name: 'BBQuest',
    link: 'https://github.com/tdberg21/movie-tracker',
    description: 'BBQuest is an app that allows you to search for BBQ anywhere in the United States, and then read reviews and see ratings for those restaurants. It also allows you to track restaurants you have tried, what you ate and give them your own personal rating!',
    stack: 'React, Redux, React-Router, Jest, Enzyme',
    image: bbqHome
  },
  {
    name: 'Who You Know',
    link: 'https://github.com/tdberg21/who-you-know-FE',
    description: 'After authenticating with LinkedIn OAuth, the user\'s connections are retrieved from LinkedIn.The user must first sort each connection into 3 categories(easy, medium, hard) based on how well they can identify the connection from profile photo.The user can then play a set of connections to practice identifying connections from their LinkedIn profile photos.Scores for each play and information about incorrect answers are recorded and displayed to the user when the play is completed.Historical score information for each difficulty level is also available to the user.',
    stack: 'React Front-End, Rails Back-End',
    image: whoYouKnow
  },
  {
    name: 'Palette Picker',
    link: 'https://palette-picker-td.herokuapp.com/',
    description: 'Generate a random palette, save projects, and save palettes to those projects.',
    stack: 'JQuery Front-End, Node Express Back-End',
    image: palpicker
  }
]

