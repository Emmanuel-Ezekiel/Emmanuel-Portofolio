import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  figma,
  nextjs,
  reactnative,
  sass,
  spendwise,
  threejs,
  ttt,
  aftj,
  roothub,
  quick,
  breet,
  dashbreet,
  dashcard,
  card,
  clafiya,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "project",
    title: "project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Design",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Next",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Sass",
    icon: sass,
  },
  {
    name: "React native",
    icon: reactnative,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "The Tonic Technologies",
    icon: ttt,
    iconBg: "#FFFFFF",
    date: "August 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js, React Native and other related technologies.",
      "Led the successful implementation of a new UI Kit, reducing frontend development time by 25% and improving consistency across the product's user interface.",
      "Contributing with cross-functional teams to refine project requirements and design UI components, leading to a 25% improvement in development efficiency.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Implementing Server-Side Rendering (SSR) with Next.js for enhanced application performance and faster page load times.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "AFTJ Digital Marketing and Solutions",
    icon: aftj,
    iconBg: "#E6DEDD",
    date: "July 2021 - Sep 2022",
    points: [
      "Developed and maintained well-documented, high-quality code for front-end web and mobile application components, contributing to a 20% decrease in bug reports and an 18% improvement in code review scores.",
      "Conducted frontend testing using Jest and React Testing Library to ensure robust application performance and identify and resolve potential issues.",
      "Integrated third-party APIs and optimized data fetching, reducing load times by 20% and enhancing the overall user experience.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "The RootHub",
    icon: roothub,
    iconBg: "#FFFFFF",
    date: "April 2019 - Feb 2023",
    points: [
      "Developed and maintained components in ReactJS, contributing to a 15% reduction in bug reports and improving application stability.",
      "Developed and implemented user interfaces using HTML, CSS, and JavaScript, ensuring intuitive and visually appealing designs.",
      "Managed state effectively using Redux, enabling seamless application logic for complex functionalities.",
      "Collaborated with the QA team to identify and resolve UI issues, reducing the number of reported bugs by 30%.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Quick Mechs",
    description:
      "As a part of an agile development team, I contributed to building the user Interface. Using React and Redux, I created a user-friendly interface that allowed users to book appointment with mechanics. For mechanics and spare parts dealers, i focused on providing an intuitive and seamless registration processs, It received accolades from clients and contributed to an increase in user engagement by 20%. ",
    // description:
    //   "Web and mobile platform that allows users to find auto mechanics and workshops near them for efficient car repair and great spare part deals, Also efficient solution for mechanics, spare parts dealers, and workshops that want to connect with potential customers.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "redux toolkit",
        color: "blue-text-gradient",
      },
      {
        name: "react native",
        color: "green-text-gradient",
      },
      {
        name: "Material Ui",
        color: "pink-text-gradient",
      },
    ],
    role: "Frontend Developer",
    image: quick,
    source_code_link: "https://quickmechs.com/home/mechanic-and-services/",
  },
  {
    name: "Breet Dashboard",
    description:
      "As a part of a cross-functional team, I singled-handely developed breed dashboard for visualizing financial data and also smooth conversions of cryptocurrencies to liquid fiat My primary focus was on creating interactive user exeperiemce using Next js , Typescript and Redux. I collaborated with back-end developers to integrate data APIs. The dashboard provided valuable insights to the users datas. It received great feedbacks from users and contributed to an increase in user engagement by 20%.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "Redux Toolkit",
        color: "pink-text-gradient",
      },
    ],
    image: dashbreet,
    role: "Sole Frontend Developer",
    source_code_link: "https://dashboard.breet.app",
  },
  {
    name: "Clafiya Health Dashboard",
    description:
      "As part of an agile development team, I contributed to building health care dashboard for users Medical Records. Using React and Redux, I created a user-friendly interface that allowed users to easily book an appointment receiving quality healthcare at their convenience. The application was well-received, with positive feedback on its performance and ease of use. Within six months of launch, the platform had over 1,000 registered users.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Redux Toolkits",
        color: "pink-text-gradient",
      },
    ],
    image: clafiya,
    role: "Frontend Developer",
    source_code_link: "https://wallet.clafiya.com/",
  },
   
  {
    name: "Cardtonic Dashboard",
    description:
      "As a part of a cross-functional team, I lead two front-end developers in redesigning a cardtonic dashboard website to improve user experience and drive conversion rates. My responsibilities included translating wireframes and design mockups into pixel-perfect user interfaces using React and Sass. I also implemented responsive design techniques to ensure a seamless experience across various devices. Through close collaboration with the UX team, we optimized the checkout process, resulting in a 15% increase in conversion rates. The project was completed on time and received positive feedback from users and stakeholders.",
    tags: [
      {
        name: "React js",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "Redux Toolkits",
        color: "pink-text-gradient",
      },
      {
        name: "Material UI",
        color: "pink-text-gradient",
      },
    ],
    image: dashcard,
    role: "Lead Frontend Developer",
    source_code_link: "https://dashboard.cardtonic.com/",
  },
  {
    name: "Spendwise Landing Page",
    description:
      " I single-handedly developed the landing page of the web application using next js and scss, that enables users to management their Expenses and also payment solution for businesses. The project was completed on time and received positive feedback from users and stakeholders",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "restapis",
        color: "green-text-gradient",
      },
      {
        name: "styled-component",
        color: "pink-text-gradient",
      },
    ],
    role: "Frontend Developer",
    image: spendwise,
    source_code_link: "https://business.spendwise.ng/",
  },
  {
    name: "Breet Landing Page",
    description:
      " As a part of a cross-functional team, I single-handedly developed the landing page of Breet which is an automated strictly-spend product that enables smooth conversions of cryptocurrencies to liquid fiat for users, Implemented Server-Side Rendering (SSR) with Next.js for enhanced application performance and faster page load times.",
    tags: [
      {
        name: "Next Js",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "Rest Api",
        color: "pink-text-gradient",
      },
    ],
    image: breet,
    role: "Frontend Developer",
    source_code_link: "https://breet.app/",
  },
  {
    name: "Cardtonic Landing Page",
    description:
      " As a part of a cross-functional team, I single-handedly developed the landing page of Breet which is an automated strictly-spend product that enables smooth conversions of cryptocurrencies to liquid fiat for users, Implemented Server-Side Rendering (SSR) with Next.js for enhanced application performance and faster page load times.",
    tags: [
      {
        name: "Next Js",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "Rest Api",
        color: "pink-text-gradient",
      },
    ],
    image: card,
    role: "Frontend Developer",
    source_code_link: "https://cardtonic.com/",
  },

];

export { services, technologies, experiences, testimonials, projects };
