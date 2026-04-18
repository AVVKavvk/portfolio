import {
  API,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  creator,
  java,
  python,
  // carrent,
  // jobit,
  // tripguide,
  threejs,
  webLogo,
  razorpay,
  v,
  qoute,
  ecommerce,
  coin,
  discord,
  github,
  avatar,
  insta,
  leetcode,
  linkedIn,
  cf,
  gfg,
  academify,
  express,
  librohub,
  minikube,
  kubernetes,
  cicd,
  docker,
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
    title: "Project",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "activity",
    title: "Activity",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "FrontEnd Developer",
    icon: web,
  },
  {
    title: "API Developer",
    icon: API,
  },
  {
    title: "BackEnd Developer",
    icon: backend,
  },
  {
    title: "MERN Developer",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "ExpressJs",
    icon: express,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "minikube",
    icon: minikube,
  },
  {
    name: "kubernetes",
    icon: kubernetes,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "ci-cd",
    icon: cicd,
  },
];
const technologies1 = [
  {
    name: "JavaScript",
    icon: javascript,
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
];
const technologies2 = [
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "ExpressJs",
    icon: express,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
];

const experiences = [
  // {
  //   title: "VipinNotes",
  //   skills: "MERN Stack",
  //   icon: webLogo,
  //   iconBg: "#383E56",
  //   date: "May 2023 - Present",
  //   points: [
  //     " Academic Support: Skilled in creating study materials and lab assignments tailored to various subjects and courses,facilitating academic success for students.",
  //     " Placement Assistance: Experienced in connecting students with placement opportunities through alumni networks,providing resume building support for career advancement.",
  //     " Coding Resources: Proficient in providing coding resources and support, including developing a Telegram bot for DSA questions and utilizing online platforms.",
  //     " Authentication Expertise: Implemented secure authentication methods like Gmail OTP and JWT Tokens, ensuring data protection and secure access to online platforms.",
  //   ],
  //   link: "https://vipinnotes.onrender.com/#/",
  //   link1: "https://github.com/AVVKavvk/NotesClientNew",
  //   link2: "https://github.com/AVVKavvk/notesserver",
  // },
  {
    title: "Librohub",
    skills: "React, Golang, MongoDB, Tailwind CSS",
    icon: librohub,
    iconBg: "#383E56",
    date: "Nov 2024 - Present",
    points: [
      "Library Management: Provides tools for book tracking, assignments, renewals, and penalties to ensure smooth library operations.",
      "User Management: Manages student and admin accounts, including book borrowing history, penalties, and dues management.",
      "Real-time Updates: Displays real-time book availability, student assignments, and overdue records to facilitate quick access and updates.",
      "Efficient Reports: Generates reports on book circulation, student activity, and penalty dues to help admins monitor library usage.",
      "Secure Access: Implements user authentication and secure data management, ensuring safe access for students and admins.",
    ],
    link: "https://librohub.onrender.com/",
    link1: "https://github.com/AVVKavvk/LibraryManagementSystemFrontend",
    link2: "https://github.com/AVVKavvk/LibraryManagementSystem",
  },
  {
    title: "Academify",
    skills: "MERN Stack",
    icon: academify,
    iconBg: "#E6DEDD",
    date: "March 2024 -Present",
    link: "https://academify.onrender.com/#",
    points: [
      "Empowering Education, One Click at a Time: Academify - Your Gateway to Seamless Learning Management",
      "Attendance Management: Efficiently track student attendance, automate recording processes, and generate comprehensive attendance reports for academic monitoring.",
      "Grading System: Streamline grading processes, input and calculate student grades, and provide transparent performance feedback to promote academic excellence.",

      "Secure Authentication: Implement secure single sign-on (SSO) authentication to ensure safe and seamless access for teachers and students.",
    ],
    link1: "https://github.com/kumawatvipin/iiitpAcademicClient",
    link2: "https://github.com/kumawatvipin/iiitpAcademicServer",
  },
  {
    title: "VipinNotes CMD Interface",
    skills: "Golang, Cobra",
    icon: librohub,
    iconBg: "#E6DEDD",
    date: "Nov 2024 -Present",
    link: "https://vipinnotes.onrender.com/#/",
    points: [
      "VipinNotes CLI is a powerful command-line tool for managing notes with administrative functionalities. It supports user management, authentication, and more",
    ],
    link1: "https://github.com/AVVKavvk/vipinnotes-admin-exe",
  },
  {
    title: "RazorPay Clone",
    skills: "ReactJs",
    icon: razorpay,
    iconBg: "#E6DEDD",
    date: "March 2023 - March 2023",
    link: "https://vipin-razorpay.netlify.app/",
    points: [
      "This website modifies the Frontend of Razorpay by implmenting some future scope API.",
      "This website uses Crypto Currency Converter API.",
      "Implementing responsive design using Tailwind CSS.",
      "4th Semester Minor Project.",
    ],
    link1: "https://github.com/AVVKavvk/Razorpay",
  },
  {
    title: "Discord Clone",
    skills: "ReactJs",
    icon: discord,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - March 2023",
    link: "https://discord-vipin.netlify.app/",
    points: [
      "This website is a Frontend of Discord.",
      "First clone of any website.",
      "Implementing responsive design using Tailwind CSS.",
    ],
    link1: "https://github.com/AVVKavvk/vipindiscord",
  },
  {
    title: "E-Commerce FrontEnd ",
    skills: "ReactJs",
    icon: ecommerce,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Feb 2023",
    link: "https://vipin-ecommerce-like.netlify.app/",
    points: [
      "This is a Frontend of my futuristic E-Commerce website.",
      "Uses Shooping Cart Interface.",
      "To store the price of items, It uses React Redux.",
      "By using external API , It shows items images.",
    ],
    link1: "https://github.com/AVVKavvk/ecommerceCart",
  },
  {
    title: "My Own Page",
    skills: "ReactJs",
    icon: v,
    iconBg: "#383E56",
    date: "Feb 2023 - Feb 2023",
    link: "https://vipinpage.netlify.app/",
    points: [
      "This is my own webpage.",
      "Style without Tailwind CSS.",
      "Uses of React Routes.",
      "Using external gallery animation.",
    ],
    link1: "https://github.com/AVVKavvk/vipinPage",
  },

  {
    title: "Quote Reader",
    skills: "ReactJs",
    icon: qoute,
    iconBg: "#E6DEDD",
    date: "Dec 2022 - Jan 2023",
    link: "https://vipin-quotes.netlify.app/",
    points: [
      "Read Quotes written by Famous Persons.",
      "Bookmarks your favorite Quotes.",
      "Use of gradient background.",
      "Tags your favorite Quotes.",
    ],
    link1: "https://github.com/AVVKavvk/Quote-Reader",
  },
  {
    title: "Crypto Currency Exchange API",
    skills: "ReactJs",
    icon: coin,

    iconBg: "#E6DEDD",
    date: "Dec 2022 - Dec 2022",
    link: "https://vipincoinconvertor.netlify.app/",
    points: [
      "Works as a Cryptocurrency Convertor.",
      "Use of open source API for exchange rate.",
      "Use of useState and useRef.",
      "Use of Ant Design Form.",
    ],
    link1: "https://github.com/AVVKavvk/currencyConvertor",
  },
];

const testimonials = [
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Vipin Sir does.",
    Name: "Deepesh Patil",
    designation: "Student",
    company: "IIIT Pune",
    image: avatar,
  },
  {
    testimonial: `After Vipin created the "Notes Website", Our stress decreased by 50%. We can't thank him enough!`,
    Name: "Vivek Bunker",
    designation: "Student",
    company: "IIIT Pune",
    image: avatar,
  },
  {
    testimonial:
      "I thought it was hard to make a website as beautiful as Vipin does.",
    Name: "Srijan Raha",
    designation: "Student",
    company: "IIIT Pune",
    image: avatar,
  },
];

// const projects = [
//   {
//     name: "Car Rent",
//     description:
//       "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "mongodb",
//         color: "green-text-gradient",
//       },
//       {
//         name: "tailwind",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: carrent,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "Job IT",
//     description:
//       "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "restapi",
//         color: "green-text-gradient",
//       },
//       {
//         name: "scss",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: jobit,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "Trip Guide",
//     description:
//       "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
//     tags: [
//       {
//         name: "nextjs",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "supabase",
//         color: "green-text-gradient",
//       },
//       {
//         name: "css",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: tripguide,
//     source_code_link: "https://github.com/",
//   },
// ];
const activities = [
  {
    title: "LinkedIn",
    icon: linkedIn,
    link: "https://www.linkedin.com/in/vipin-kumawat-751b9124b/",
  },
  {
    title: "Github",
    icon: github,
    link: "https://github.com/AVVKavvk",
  },

  {
    title: "Leetcode",
    icon: leetcode,
    link: "https://leetcode.com/Avvkvipin/",
  },
  {
    title: "GFG",
    icon: gfg,
    link: "https://auth.geeksforgeeks.org/user/kumawatv3ik5/",
  },
  {
    title: "CodeForces",
    icon: cf,
    link: "https://codeforces.com/profile/avvk_81",
  },
];

export {
  services,
  technologies,
  technologies1,
  technologies2,
  experiences,
  testimonials,
  activities,
};
