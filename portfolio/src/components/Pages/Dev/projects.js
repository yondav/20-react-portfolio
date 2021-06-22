import yupGif from '../../../images/gifs/yup.gif';
import otherSideGif from '../../../images/gifs/other-side.gif';
import codingChopsGif from '../../../images/gifs/coding-chops.gif';
import weatherGif from '../../../images/gifs/weather.gif';
import techGif from '../../../images/gifs/tech-blog.gif';
import employeeGif from '../../../images/gifs/employee-tracker.gif';

export const projects = [
  {
    id: 1,
    appName: 'yup',
    appTitle: 'Yup!',
    github: 'https://github.com/yondav/yup-schlepp',
    deployed: 'https://yup-db-v1.herokuapp.com/',
    desc: 'The beginning of a web based real estate CRM',
    tech: [
      { id: 1, name: 'html', icon: 'fab fa-html5 fa-lg' },
      { id: 2, name: 'css', icon: 'fab fa-css3-alt fa-lg' },
      { id: 3, name: 'javascript', icon: 'fab fa-js-square fa-lg' },
      { id: 4, name: 'node', icon: 'fab fa-node-js fa-lg' },
    ],
    gif: yupGif,
  },
  {
    id: 2,
    appName: 'other-side',
    appTitle: 'The Other Side',
    github: 'https://github.com/yondav/project1',
    deployed: 'https://yondav.github.io/project1/',
    desc: "What's on the exact opposite side of the world?",
    tech: [
      { id: 1, name: 'html', icon: 'fab fa-html5 fa-lg' },
      { id: 2, name: 'css', icon: 'fab fa-css3-alt fa-lg' },
      { id: 3, name: 'javascript', icon: 'fab fa-js-square fa-lg' },
    ],
    gif: otherSideGif,
  },
  {
    id: 3,
    appName: 'coding-chops',
    appTitle: 'Coding Chops',
    github: 'https://github.com/yondav/05-coding-chops-the-game',
    deployed: 'https://yondav.github.io/05-coding-chops-the-game/',
    desc: 'Can you score 100? Put your knowledge of JavaScript to the test!',
    tech: [
      { id: 1, name: 'html', icon: 'fab fa-html5 fa-lg' },
      { id: 2, name: 'css', icon: 'fab fa-css3-alt fa-lg' },
      { id: 3, name: 'javascript', icon: 'fab fa-js-square fa-lg' },
    ],
    gif: codingChopsGif,
  },
  {
    id: 4,
    appName: 'weather',
    appTitle: 'Weather App',
    github: 'https://github.com/yondav/07-weather-app',
    deployed: 'https://yondav.github.io/07-weather-app/',
    desc: 'A prettier way to catch a breeze...',
    tech: [
      { id: 1, name: 'html', icon: 'fab fa-html5 fa-lg' },
      { id: 2, name: 'css', icon: 'fab fa-css3-alt fa-lg' },
      { id: 3, name: 'javascript', icon: 'fab fa-js-square fa-lg' },
    ],
    gif: weatherGif,
  },
  {
    id: 5,
    appName: 'tech-blog',
    appTitle: 'techBlog',
    github: 'https://github.com/yondav/14-tech-blog',
    deployed: 'https://fathomless-chamber-19981.herokuapp.com/',
    desc: 'A space for tech talks...',
    tech: [
      { id: 1, name: 'html', icon: 'fab fa-html5 fa-lg' },
      { id: 2, name: 'css', icon: 'fab fa-css3-alt fa-lg' },
      { id: 3, name: 'javascript', icon: 'fab fa-js-square fa-lg' },
      { id: 4, name: 'node', icon: 'fab fa-node-js fa-lg' },
    ],
    gif: techGif,
  },
  {
    id: 6,
    appName: 'employee-tracker',
    appTitle: 'Employee Tracker',
    github: 'https://github.com/yondav/12-employee-tracker',
    deployed: 'https://yup-db-v1.herokuapp.com/',
    desc: 'A command line app to track your team',
    tech: [
      { id: 1, name: 'javascript', icon: 'fab fa-js-square fa-lg' },
      { id: 2, name: 'node', icon: 'fab fa-node-js fa-lg' },
    ],
    gif: employeeGif,
  },
];
