export interface ProjectDataInterface {
  tags: string[]
  bodyDescription: string | TrustedHTML
  contextDescription: string | TrustedHTML
  responsibilities: string[]
  pictureUrl: string
  date: string
  title: string
  subtitle: string
  images?: string[]
}

const QuidolProjectData: ProjectDataInterface = {
  tags: [
    'Web Development',
    'Mobile Development',
    'UI/UX',
    'Testing',
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'React-Native',
    'Storybook',
    'CI/CD',
    'Firebase',
    'Docker',
  ],
  bodyDescription: `At the beginning of the mission, my role as a <b>full stack</b> developer was to integrate new features to the mobile app such as:<br/>
  - <b>Images question:</b> Questions where the user has to select a picture to answer during the quiz.<br />
  - <b>Personnal quiz:</b> Implementing a quiz creation feature where the users were able to make their own quiz, timer and type of questions.
  <br/><br/>
  Then in the middle of the mission, I had to change my priority to implement a website using the mobile app as an inspiration.
  `,
  contextDescription: `In the continuity to their progress, Quidol was in need of new features for their mobile app.<br/>
  To then get more users Quidol decided to implement a new <b>website</b> taking the same functionalities as the mobile app adding a live streaming.`,
  responsibilities: [
    'Full Stack Development of the new Quidol Platform',
    'Development of some of the new features on the mobile app',
    'Implementation of the new design exclusively for the website',
    'Bug fixes',
    'UI & UX Design',
    'Unit & End to End Testing',
  ],
  pictureUrl:
    '/images/companies/quidol-company.png',
  date: 'December 2019 to July 2020',
  title: 'Quidol',
  subtitle: 'Freelance',
}

const AltenProjectData: ProjectDataInterface = {
  tags: [
    'Web Development',
    'UI/UX',
    'Testing',
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'Flutter',
    'Dart',
    'React',
    'React-Native',
    'Storybook',
    'CI/CD',
    'Firebase',
    'Docker',
  ],
  bodyDescription: `Worked on various projects to discover new technos and improve my skills in the one I know.`,
  contextDescription: `While waiting for a mission, Alten give us different missions every few weeks to get ours skills up and improve our competences in the ones we're 
  comfortable with. So I was put in the DIN (Innovative Direction of Alten) for 2 months on various projects.`,
  responsibilities: [
    'Full Stack Development',
    'Bug fixes',
    'UI & UX Design',
    'Unit & End to End Testing',
  ],
  pictureUrl:
    '/images/companies/alten-company.jpeg',
  date: 'December 2019 to July 2020',
  title: 'Quidol',
  subtitle: 'Freelance',
}

const KraaftProjectData: ProjectDataInterface = {
  tags: [
    'Web Development',
    'Mobile Development',
    'UI/UX',
    'Testing',
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'React-Native',
    'Storybook',
    'CI/CD',
    'Firebase',
    'Docker',
  ],
  bodyDescription: `Work on the whole platform and helped in various fields such as:<br/>
  - Mobile App, by implementing various features and fixing some of their old problems<br/>
  - Web App, by creating from scratch a new excel-like grid that accept any type of Typescript<br/>
  - Server, by implementing new routes and new calls.<br/>`,
  contextDescription: `Right after their fundraising Kraaft was in need to improve their platform. So my mission was to create new 
  feature for the platform and keep increasing the good user experience.`,
  responsibilities: [
    'Implementing an excel-like custom grid to their platform from scratch',
    'Implementing the new Typeless Object for their excel-like feature',
    'Implementing new features on their Mobile app',
    'Implementing new features on their Web app',
    'Bug fixes',
    'UI & UX Design',
    'Unit & End to End Testing',
  ],
  pictureUrl:
    '/images/companies/kraaft-company.png',
  date: 'December 2019 to July 2020',
  title: 'Kraaft',
  subtitle: 'Freelance',
}

const EpitechProjectData: ProjectDataInterface = {
  tags: [
    'C',
    'C++',
    'Python',
    'Assembly',
    'HTML',
    'CSS',
    'React',
    'React-Native',
    'Teaching',
    'Teacher Assistant',
  ],
  bodyDescription: `Assistant for first-year students in C programming and UNIX development. Realization of missions such as technical «Follow-up» and projects evaluation, 
  Grading of students during their defences as well as the follow-up of knowledge and the identification of difficulties of a group of around forty students.`,
  contextDescription: `As part of our 3rd year at Epitech, the school offers to their best student the role of Teacher Assistant to provide help to the 1st and 
  2nd year.`,
  responsibilities: [
    'Grading student for their works',
    'Creating Follow-ups',
    'Helping student in their project',
    'supervision of students',
  ],
  pictureUrl:
    '/images/companies/epitech-company.jpeg',
  date: 'September 2019 to March 2020',
  title: 'Epitech (Paris)',
  subtitle: 'Internship',
}

const SagemcomProjectData: ProjectDataInterface = {
  tags: [
    'Web Development',
    'UI/UX',
    'Testing',
    'HTML',
    'CSS',
    'JavaScript',
    'C',
    'C++',
    'Python',
    'CI/CD',
  ],
  bodyDescription: `Full stack developer in C, C++, Python, Javascript and HTML/CSS to configure the BBox Ultym for Sagemcom and the user interface.`,
  contextDescription: `As a consultant for Alten, I got the chance to work for Sagemcom as they were in need of developer for the release of the new 
  Bouygues BBox Ultym.`,
  responsibilities: [
    'Implementing the new Network System to communicate between different devices',
    'Bug fixes',
    'UI & UX Design',
    'Implementing UI/UX',
    'Unit & End to End Testing',
  ],
  pictureUrl:
    '/images/companies/sagemcom-company.png',
  date: 'April 2022 to September 2022',
  title: 'Sagemcom',
  subtitle: 'Consultant Mission',
}

const EASoftProjectData: ProjectDataInterface = {
  tags: [
    'Web Development',
    'Mobile Development',
    'UI/UX',
    'Testing',
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'React-Native',
    'CI/CD',
  ],
  bodyDescription: `After half a month of intense Javascript formation, I was directly put under the main project and start implementing new feature for La Note.<br />
  Also got the privilege to be on my own on their new ordering app for the waiters.`,
  contextDescription: `EA Soft needed an intern to help them develop the new La Note back office for the restaurants and the goal was to make the waiters take orders on their phone to send it to the back office.<br/>
  Also change some features in the back office to help the restaurants take orders in a easier way.`,
  responsibilities: [
    'Full Stack Development of the new La Note Platform',
    'Development of some of the new features on the restaurant back office',
    'Bug fixes',
    'UI & UX Design',
    'Unit & End to End Testing',
  ],
  pictureUrl:
    '/images/companies/ea-soft-company.png',
  date: 'July 2018 to December 2018',
  title: 'EA Soft (French Startup)',
  subtitle: 'Internship',
}

const ElQuizzProjectData: ProjectDataInterface = {
  tags: [
    'Mobile Development',
    'UI/UX',
    'Testing',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React-Native',
    'CI/CD',
    'Firebase',
    'Docker',
  ],
  bodyDescription: `Quidol made a white label product for El Quizz during the Ramandan to be broadcast on TV.`,
  contextDescription: `As a continuity to my mission at <b>Quidol<b/> I was put in a <b>white label product</b> project for ElQuizz that was made for ramadan in Algeria.`,
  responsibilities: [
    'Full Stack Development of the new El Quizz Platform',
    'Development of some of the new features on the mobile app',
    'Bug fixes',
    'UI & UX Design',
    'Unit & End to End Testing',
  ],
  pictureUrl:
    '/images/companies/el-quizz-company.png',
  date: 'March 2020 to May 2020',
  title: 'El Quizz',
  subtitle: 'Freelance',
}

const TimesUpProjectData: ProjectDataInterface = {
  tags: [
    'Mobile Development',
    'UI/UX',
    'Figma',
    'Testing',
    'CSS',
    'MongDB',
    'TypeScript',
    'React-Native',
  ],
  bodyDescription: `A Time's Up copy made to be more flexible in its rules and make custom rules.<br/>Also made to not pay for the Play Store App that is really bad.`,
  contextDescription: `While wanting to play Time's Up during a party, I saw that the Play Store's and Apple Store's apps were really bad. Also we couldn't include personal words to make the game
  funnier. So after a while wondering why the app was bad, I decided to make one.`,
  responsibilities: [
    'UI & UX Design from scratch',
    'Integrating the Design in React-Native',
    'Unit & End to End Testing',
  ],
  pictureUrl:
    '/images/companies/timesup-logo.png',
  date: '2020 to 2021',
  title: "Time's Up",
  subtitle: 'Personal Project',
}

const WSDatabaseProjectData: ProjectDataInterface = {
  tags: [
    'Mobile Development',
    'UI/UX',
    'Figma',
    'Testing',
    'CSS',
    'MongDB',
    'TypeScript',
    'React-Native',
  ],
  bodyDescription: `An app in React-Native to help the players get the card translation in their language from the Japanese card.`,
  contextDescription: `I saw during all my tournaments for the game in the <br>Japanese format</br> that a tool to translate a card from Japanese to another language was 
  lacking and the only one that were available was from a website used as a database for all the card in the game. And then I wanted to make a faster tool to help
  players`,
  responsibilities: [
    'UI & UX Design from scratch',
    'Integrating the Design in React-Native',
    'Unit & End to End Testing',
  ],
  pictureUrl:
    '/images/companies/weiss-schwarz-logo.jpeg',
  date: '2018 to 2019',
  title: 'Weiß Schwarz Database',
  subtitle: 'Personal Project',
}

export {
  QuidolProjectData,
  AltenProjectData,
  KraaftProjectData,
  EpitechProjectData,
  SagemcomProjectData,
  EASoftProjectData,
  ElQuizzProjectData,
  WSDatabaseProjectData,
  TimesUpProjectData
};