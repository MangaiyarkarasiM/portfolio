import assetRef from "../assets/assetRef.png";
import bookbuddy from "../assets/bookbuddy.png";
import myTickets from "../assets/myTickets.png";
import thestorynest from "../assets/thestorynest.png";

export const contacts = [
  {
    name: "LinkedIn",
    icon: "fa-linkedin-square",
    url: "https://www.linkedin.com/in/mangaiyarkarasim",
  },
  {
    name: "GitHub",
    icon: "fa-github-square",
    url: "https://github.com/MangaiyarkarasiM",
  },
];

export const techsAndTools = [
  {
    name: "Javascript",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
  },
  {
    name: "HTML",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
  },
  {
    name: "Bootstrap",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
  },
  {
    name: "Tailwind CSS",
    link: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  },
  {
    name: "NodeJS",
    link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
  },
  {
    name: "Express",
    link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
  },
  {
    name: "Java",
    link: "https://seeklogo.com/images/J/java-logo-7F8B35BAB3-seeklogo.com.png",
  },
  {
    name: "C Language",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-plain.svg",
  },
  {
    name: "C++",
    link: "https://raw.githubusercontent.com/isocpp/logos/64ef037049f87ac74875dbe72695e59118b52186/cpp_logo.svg",
  },
  {
    name: "MySQL",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain.svg",
  },
  {
    name: "Mongo DB",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg",
  },
  {
    name: "AWS",
    link: "https://img.icons8.com/color/2x/amazon-web-services.png",
  },
  {
    name: "Heroku",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg",
  },
  {
    name: "Postman",
    link: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  },
  {
    name: "Git",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg",
  },
  {
    name: "VS Code",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "Eclipse",
    link: "https://iconape.com/wp-content/png_logo_vector/eclipse-2.png",
  },
  {
    name: "Jira",
    link: "https://cdn.worldvectorlogo.com/logos/jira-1.svg",
  },
  {
    name: "Splunk",
    link: "https://omegaletter.chat/static/images/integrations/logos/splunk.svg",
  },
];

export const projects = [
  {
    name: "MyTickets.com",
    desc: "MyTickets.com is more likely as a BookMyShow web app for booking a ticket for a movie in advance.",
    img: myTickets,
    url: "http://mytickets.com.s3-website-us-east-1.amazonaws.com/login",
    frontEndRepo: "https://github.com/MangaiyarkarasiM/mytickets-frontend.git",
    backEndRepo: "https://github.com/MangaiyarkarasiM/mytickets-backend.git",
    techStack: ["ReactJs", "NodeJs", "Express", "Bootstrap", "CSS", "MongoDB", "AWS S3"],
    demoCred: [
      { role: "admin", userId: "xyz@gmail.com", password: "123" },
      { role: "user", userId: "xyz3@gmail.com", password: "1234" },
    ],
  },
  {
    name: "assetRef",
    desc: "assetRef application is an Asset Management System for an organization. By using this, the assets can be tracked and assigned to the users in the organization.",
    img: assetRef,
    url: "http://asset-ref.s3-website-us-east-1.amazonaws.com/login",
    frontEndRepo: "https://github.com/MangaiyarkarasiM/ams-frontend.git",
    backEndRepo: "https://github.com/MangaiyarkarasiM/ams-backend.git",
    techStack: ["ReactJs", "NodeJs", "Express", "Bootstrap", "CSS", "MongoDB", "AWS S3"],
    demoCred: [
      { role: "user", userId: "abcd", password: "12345" },
      { role: "user", userId: "abcde", password: "12345678" },
    ],
  },
  {
    name: "Book Buddy",
    desc: "Book buddy is a library management system for managaing the books in the library, to rent a book to the user and to track the availablity of the books.",
    img: bookbuddy,
    url: "http://book-buddy.s3-website-us-east-1.amazonaws.com/login",
    frontEndRepo: "https://github.com/MangaiyarkarasiM/bookbuddy-frontend.git",
    backEndRepo: "https://github.com/MangaiyarkarasiM/bookbuddy-backend.git",
    techStack: ["ReactJs", "NodeJs", "Express", "Tailwind CSS", "CSS", "MySQL", "AWS RDS", "AWS S3"],
    demoCred: [
      { role: "admin", userId: "aaaaa", password: "12345" },
      { role: "user", userId: "bbbbb", password: "12345" },
    ],
  },
  {
    name: "The Storynest",
    desc: "The Storynest is a clone of Wattpad web application inwhich users can read the stories written by other users and also can write a new story.",
    img: thestorynest,
    url: "http://the-storynest.s3-website-us-east-1.amazonaws.com/login",
    frontEndRepo: "https://github.com/MangaiyarkarasiM/storynest-frontend.git",
    backEndRepo: "https://github.com/MangaiyarkarasiM/storynest-backend.git",
    techStack: ["ReactJs", "NodeJs", "Express", "Tailwind CSS", "CSS", "MySQL", "AWS RDS", "AWS DynamoDB", "AWS S3"],
    demoCred: [
      { role: "user", userId: "abcde", password: "12345" },
      { role: "user", userId: "abcd12", password: "12345" },
    ],
  },
];

export const contactDetails = [
  {
    iconSrc: "static/icons/gmail.svg",
    type: "Email",
    data: "mangaivmm@gmail.com",
    href: "mailto:mangaivmm@gmail.com?subject='Hello !'",
  },
  {
    iconSrc: "static/icons/linkedin.svg",
    type: "LinkedIn",
    data: "Mangaiyarkarasi M",
    href: "https://www.linkedin.com/in/mangaiyarkarasim",
  },
  {
    iconSrc: "static/icons/phone.png",
    type: "Contact Number",
    data: "+91 9488122020",
    href: "tel:+919488122020",
  },
];
