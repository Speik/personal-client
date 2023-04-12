import { IJourney } from './journey.model';

export const journey: IJourney[] = [
  {
    jobTitle: 'Junior Fullstack',
    employerName: 'SK AL-SOFT',
    employedAt: new Date('2019-02-01'),
    leaveAt: new Date('2020-10-01'),
    shortDescription: 'ERP for metrological services automation',
    description: `
      Development of ERP that provides automation of metrological services and accounting of equipment using ASP .NET.

      Along the way, I did Node.js project that provides better control and accounting of application versions (due to application deployment was very specific and legacy).
      
      I was working as kinda lead developer when we started migration from ASP .NET to .NET Core & Entity Framework. My approaches and suggestions was implemented in those application MVP.
      
      Since I was experienced developer then, I took responsibility on mentoring of new employee Intern for a while.
    `,
    skills: [
      'JavaScript',
      'HTML',
      'CSS',
      'JQuery',
      'C#',
      'ASP.NET Webforms',
      '.NET Core',
      'PostgreSQL',
      'Node.js',
      'OOP',
    ],
  },
  {
    jobTitle: 'Middle Fullstack',
    employerName: 'Lingualeo',
    employedAt: new Date('2020-11-01'),
    leaveAt: new Date('2021-03-01'),
    shortDescription: 'CMS for language learning platform',
    description: `
      Content-management system of language learning platform development. There was a lot of frontend and less backend.
      I was working directly with other employees from content team with various tasks such as, for instance, email newsletters editor or courses constructor.
      
      Since we were working without any component frameworks at those CMS, during a few months I've tried to ensure lead developers that they really need to use something from component frameworks - and finally they agreed :)
    `,
    skills: [
      'JavaScript',
      'HTML',
      'CSS',
      'JQuery',
      'Git',
      'Linux',
      'PHP',
      'OOP',
      'PostgreSQL',
    ],
  },
  {
    jobTitle: 'Middle Backend',
    employerName: 'StormWall',
    employedAt: new Date('2021-07-01'),
    leaveAt: new Date('2021-07-01'),
    shortDescription: 'DDOS protection services',
    description: `
      DDOS protection microservices development and support.

      I've Implemented CLI app that keeps up to date with GitLab 80+ Docker Swarm configs using GraphQL API
    `,
    skills: [
      'Node.js',
      'TypeScript',
      'JavaScript',
      'OOP',
      'MySQL',
      'Docker',
      'Linux',
      'Bash',
    ],
  },
  {
    jobTitle: 'Middle+ Backend',
    employerName: 'Noveo',
    employedAt: new Date('2021-10-01'),
    leaveAt: new Date('2022-12-01'),
    shortDescription: 'Outsource development',
    description: `
      Outsource development for customers from Europe.

      - Development of specific chat widget for French telephony. It was hard project since we had only a month to finish. And we did it :) We were using Typescript, NestJS, TypeORM, Socket.io, Redis, MySQL
      
      - Development of customer platform for French-Belgium climatic company. I was lead developer there so I've significantly improved code quality and did complete refactoring of backend. At the end of my participation on project I was rewarded by promotion to Strong Middle (Middle+). Backend stack: Typescript, Sequelize, MSSQL, Express, Auth0 for authentication
      
      - Development of French gyms aggregator as mobile application. I was working there as part of team from customer side. E2E and unit testing, scrum, huge amount of integrations and dependencies. It was a bit FullStack job, cause we also maintained React admin panel. Backend stack: Typescript, NestJS, TypeORM, MongoDB, Jest, GraphQL API (Apollo)
    `,
    skills: [
      'TypeScript',
      'JavaScript',
      'Node.js',
      'SQL',
      'Linux',
      'NestJS',
      'Express',
      'Docker',
      'GraphQL',
      'Socket.io',
      'Jest',
      'OOP',
    ],
  },
];
