import {
   web,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  eshop,
  estock,
  fab,
  fim,
} from "./assets";

export const navLinks = [
  {
    id: "about",
    title: "About Me",
  },
  {
    id: "work",
    title: "My Work",
  },
  {
    id: "contact",
    title: "Contact Me",
  },
];



const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  
  
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  
];

const experiences = [
  {
    title: "Front End Developer",
    company_name: "Html,CSS, Javascript",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "E-stock v1.0: Reactjs",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "E-stock v2: React, Redux, Nodejs, Mongodb",
    // icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using Reactjs Nodejs and Mongodb.",
      "Created a server that create, read, update information of the user and thier inventory  .",
      "Implemented User authentication that prevents intruders from snooping around.",
      "Used redux to manage state in the web application store.",
    ],
  },
  {
    title: "Full stack Developer - Reactjs + Nodejs",
    company_name: "E-Shop",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "A web application I developed using React.js Nodejs and Mongodb.",
      "It provides custumers  the ability to save thier desired product for later or order for it to be delivered.",
      "I integrated Paypal payment method for users to be able to pay for the products they ordered.",
      "It grants the seller an administrator status to manage users, products, orders and sales from the specal admin features included that are only accesible by the seller..",
    ],
  },
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
    name: "E-Shop",
    detail: "E-commerce website with Payment modes integrated",
    description:
      "E-commerce website that allows users to register and sign in to save thier desired products for later or place an order for it to be delivered. It also gives the Seller the admin priviledge to manage both the users registered and the products on sale. It has an admin dashboard to track the orders and sales made daily.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "violet",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "blue-text-gradient",
      },
    ],
    image: eshop,
    source_code_link: "https://github.com/Vicktor007/MERN-E-Commerce-Store-main",
    live_site_link: "https://e-shop-frontend-beta.vercel.app/",
  },
  {
    name: "E-stock",
    detail: "An Inventory management website",
    description:
      "A website that allows users to manage their inventory and also keep track of the expiry dates of the products in store. It has qrcode qeneration integrated into it to create a qrcode that can be sticked to the product. The user can scan the qrcode and get the informaton about the particular product.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "violet",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: estock,
    source_code_link: "https://github.com/Vicktor007/Product-Management-and-Expiry-Tracking-Website",
    live_site_link: "https://e-stock-frontend-vite.vercel.app/",
  },
  
  {
    name: "Filterable Image gallery",
    description:
      "A filterable image gallery that can be incoporated in a website that suits the purpose it is intented; getting images by prefered search labels.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow",
      },
    ],
    image: fim,
    source_code_link: "https://github.com/Vicktor007/filterable-image-gallery-html-bootstrap",
    live_site_link: "https://filterable-image-gallery-html-bootstrap.vercel.app/",
  },
  {
    name: "Filterable address book",
    description:
      "This is a project I used to learn crud operations before I learned nodejs. It allows users to create and save people's information. They can also edit or delete it based on what they want to do.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow",
      },
      
    ],
    image: fab,
    source_code_link: "https://github.com/Vicktor007/Filterable-Address-Book",
    live_site_link: "https://vicktor007.github.io/Filterable-Address-Book/",
  },
  
];

export { technologies, experiences, testimonials, projects };
