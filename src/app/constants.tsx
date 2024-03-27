import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>React</li>
        <li>React-Native</li>
        <li>NextJS</li>
        <li>NodeJS</li>
        <li>Flutter</li>
        <li>Python</li>
        <li>Javascript</li>
        <li>Typescript</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>React</li>
        <li>React-Native</li>
        <li>NextJS</li>
        <li>NodeJS</li>
        <li>Flutter</li>
        <li>Python</li>
        <li>Javascript</li>
        <li>Typescript</li>
      </ul>
    ),
  },
  {
    title: "Experiences",
    id: "experiences",
    content: (
      <ul className="list-disc pl-2">
        <li>React</li>
        <li>React-Native</li>
        <li>NextJS</li>
        <li>NodeJS</li>
        <li>Flutter</li>
        <li>Python</li>
        <li>Javascript</li>
        <li>Typescript</li>
      </ul>
    ),
  },
];

const COMPANY_FIRST_ROW = [
  {
    title: "Alten",
    details: "alten",
    logo: "/images/companies/alten-company.jpeg",
    link: "https://www.alten.com",
  },
  {
    title: "Kraaft",
    details: "kraaft",
    logo: "/images/companies/kraaft-company.png",
    link: "https://www.kraaft.co"
  },
  {
    title: "Epitech",
    details: "epitech",
    logo: "/images/companies/epitech-company.jpeg",
    link: "https://international.epitech.eu"
  },
];

const COMPANY_SECOND_ROW = [
  {
    title: "Sagemcom",
    details: "sagemcom",
    logo: "/images/companies/sagemcom-company.png",
    link: "https://www.sagemcom.com/en"
  },
  {
    title: "Quidol",
    details: "quidol",
    logo: "/images/companies/quidol-company.png",
    link: "https://quidol.fr"
  },
  {
    title: "EA Soft",
    details: "ea-soft",
    logo: "/images/companies/ea-soft-company.png",
    link: "https://easoft.pro"
  },
  {
    title: "ElQuizz",
    details: "elquizz",
    logo: "/images/companies/el-quizz-company.png",
    link: "https://www.instagram.com/elquizz.dz/"
  },
];

const PERSONAL_PROJECT_ROW = [
  {
    title: "Weiß DB",
    details: "wsdatabase",
    logo: "/images/companies/weiss-schwarz-logo.jpeg",
    link: ""
  },
  {
    title: "Time's Up",
    details: "timesup",
    logo: "/images/companies/timesup-logo.png",
    link: ""
  },
];

const FRONT_END_SKILLS = [
  {
    title: "React",
    picture: "/images/skills/react-logo.svg",
  },
  {
    title: "flutter",
    picture: "/images/skills/flutter.jpeg",
  },
  {
    title: "NextJS",
    picture: "/images/skills/nextjs.png",
  },
  {
    title: "Tailwind CSS",
    picture: "/images/skills/tailwind.png",
  }
];

const BACK_END_SKILLS = [
  {
    title: "NodeJS",
    picture: "/images/skills/nodejs.webp",
  },
  {
    title: "MongoDB",
    picture: "/images/skills/mongodb.png",
  },
  {
    title: "SQL",
    picture: "/images/skills/sql.png",
  },
];

const CICD_TEST_SKILLS = [
  {
    title: "Docker",
    picture: "/images/skills/docker.png",
  },
  {
    title: "Cypress",
    picture: "/images/skills/cypress.jpeg",
  },
  {
    title: "Jest",
    picture: "/images/skills/jest.png",
  },
];


const DESIGN_SKILLS = [
  {
    title: "Figma",
    picture: "/images/skills/figma.png",
  },
  {
    title: "Sketch",
    picture: "/images/skills/sketch.png",
  },
];

const CONTACT_LIST = [
  {
    isExternal: true,
    alt_name: "github_icon",
    title: "Github",
    link: "https://github.com/PekxSovann",
    icon: faGithub
  },
  {
    isExternal: true,
    alt_name: "linkedin_icon",
    title: "Linkedin",
    link: "https://www.linkedin.com/in/tommy-dang-002101160/",
    icon: faLinkedin
  },
  {
    isExternal: false,
    alt_name: "email_icon",
    title: "Email",
    link: "contact",
    icon: faEnvelope
  },
  {
    isExternal: false,
    alt_name: "phone_icon",
    title: "06.95.07.14.29",
    link: "/",
    icon: faPhone
  },
];

export {
  TAB_DATA,
  COMPANY_FIRST_ROW,
  COMPANY_SECOND_ROW,
  PERSONAL_PROJECT_ROW,
  FRONT_END_SKILLS,
  BACK_END_SKILLS,
  CICD_TEST_SKILLS,
  DESIGN_SKILLS,
  CONTACT_LIST
};