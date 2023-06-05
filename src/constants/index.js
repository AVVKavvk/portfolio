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
  java,python,
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
    title: "API Developer",
    icon: API,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
 
];

const experiences = [
  {
    title: "Notes Website of IIIT Pune",
    skills: "MERN Stack",
    icon: webLogo,
    iconBg: "#383E56",
    date: "May 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
    link: "https://vipinnotes.onrender.com/#/",
  },
  {
    title: "RazorPay Clone",
    skills: "ReactJs",
    icon: razorpay,
    iconBg: "#E6DEDD",
    date: "March 2023 - March 2023",
    link: "https://vipin-razorpay.netlify.app/",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "DisCord Clone",
    skills: "ReactJs",
    icon: discord,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - March 2023",
    link: "https://discord-vipin.netlify.app/",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

  {
    title: "My Own Page",
    skills: "ReactJs",
    icon: v,
    iconBg: "#383E56",
    date: "Feb 2023 - Feb 2023",
    link: "https://vipinpage.netlify.app/",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Ecommerce FrontEnd ",
    skills: "ReactJs",
    icon: ecommerce,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Feb 2023",
    link: "https://vipin-ecommerce-like.netlify.app/",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Quote Reader",
    skills: "ReactJs",
    icon:qoute,
    iconBg: "#E6DEDD",
    date: "Dec 2022 - Jan 2023",
    link: "https://vipin-quotes.netlify.app/",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Crypto Currency Exchange API",
    skills: "ReactJs",
    icon:coin,
    iconBg: "#E6DEDD",
    date: "Dec 2022 - Dec 2022",
    link: "https://vipincoinconvertor.netlify.app/",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Vipin Sir does.",
    Name: "Deepesh Patil",
    designation: "Student",
    company: "IIIT Pune",
    image: avatar
  },
  {
    testimonial:
      "After Vipin create Notes website, our stress decreased by 50%. We can't thank him enough!",
    Name: "Vivek Bunker",
    designation: "Student",
    company: "IIIT Pune",
    image: avatar
  },
  {
    testimonial:
      "I thought it was hard to make a website as beautiful as Vipin Does.",
    Name: "Srijan Raha",
    designation: "Student",
    company: "IIIT Pune",
    image: avatar
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
    link:"https://www.linkedin.com/in/vipin-kumawat-751b9124b/"
  },
  {
    title: "Github",
    icon: github,
    link:"https://github.com/AVVKavvk"
  },
  {
    title: "Instagram",
    icon: insta,
    link:"https://www.instagram.com/k.vip_in/"
  },
  {
    title: "Leetcode",
    icon: leetcode,
    link:"https://leetcode.com/Avvkvipin/"
  },
  {
    title: "GFG",
    icon: gfg,
    link: "https://auth.geeksforgeeks.org/user/kumawatv3ik5/"
  },
  {
    title: "CodeForces",
    icon: cf,
    link:"https://codeforces.com/profile/avvk_81"
  },
];

export { services, technologies, experiences, testimonials ,activities};
