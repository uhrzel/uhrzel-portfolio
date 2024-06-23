import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
  {
    id: 1,
    name: 'Muslim Affairs Office Information System',
    description:
      'Me and my team built an Information System in our Muslim Client. This System is responsible for posting News, Events and Complains to be Settled in Office of Muslim Affairs at Tupi South Cotabato.',
    tools: [
      'VS Code',
      'Laravel',
      'Breeze',
      'PHP',
      'Tailwind',
      'Bootsrap',
      'Node JS',
      'Google Authentication',
      'Github Authentication',
    ],
    role: 'Fullstack Developer',
    code: 'https://github.com/uhrzel/Muslim-Affairs-Office-Information-System',
    demo: 'sc-muslimaffairs.devbackyard.com/',
    image: crefin,
  },
  {
    id: 2,
    name: 'Green Space',
    description:
      'I have rebuild and developed a full-stack web app for Environments including here the posting of Natural Resources, Tree Planting.',
    tools: [
      'Vs Code',
      'Tailwind CSS',
      'Bootsrap',
      'Node Js',
      'TypeScript',
      'MySQL',
      'Infobip',
      'Email Notification',
    ],
    role: 'Full Stack Developer',
    code: '',
    demo: '',
    image: travel,
  },
  {
    id: 3,
    name: 'NJC Clinic',
    description:
      'My team and I developed a system for NJC Clinic. This system is responsible for handling the appointments in any kind of dental problems. My role here is to add a payment option and fix the users accounts problems.',
    tools: ['PHP', 'Bootsrap', 'Paypal Sandbox', 'Gcash Sandbox', 'Mysql'],
    code: '',
    demo: '',
    image: ayla,
    role: 'Full Stack Developer',
  },
];
