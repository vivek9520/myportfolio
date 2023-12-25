import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Vivek Jeevanaraj",
  title: "Hi all, I'm Vivek",
  description:
    "I'm a passionate Full Stack web developer with experience developing Full Stack web applications with Spring boot, Angular,React js, Next js, Node js,  React.js and Cloud Technologies. I am strongly interested in learning new technologies and implementing them in my projects. I'm a self-motivated and hardworking individual who is always ready to learn new things and work in a team.",
  resumeLink: "#",
};

export const openSource = {
  githubUserName: "vivek9520",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "vivekjeevanaraj@gmail.com",
  linkedin: "https://www.linkedin.com/in/vivek-jeevanarajh-89457417b/",
  github: "https://github.com/vivek9520",
  instagram: "https://www.instagram.com/vivek_9520/",
  // facebook: 'https://www.facebook.com/1hanzla100',
  // twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"),
        emoji("⚡ Building responsive static websites using Next.js"),
        emoji("⚡ Building RESTful APIs in Django & Django REST Framework"),
      ],
      softwareSkills: [
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "Node js",
          iconifyTag: "vscode-icons:file-type-django",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "Heroku",
          iconifyTag: "logos:heroku-icon",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend", //Insert stack or technology you have experience in
    progressPercentage: "85", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "95",
  },
  {
    Stack: "Programming",
    progressPercentage: "95",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "SLIIT | Sri Lanka Institute of Information Technology",
    subHeader: "BSc (Hons) in Information Technology Specialising in Software Engineering",
    duration: "february 2018 - December 2021",
    desc: "",
    grade: "Second Class",
    descBullets: [], // Array of Strings
  },
  {
    schoolName: "Mu/Vidyananda College",
    subHeader: "Advance Level (mathematics Stream)",
    duration: "february 2012 - December 2024",
    desc: "mathematics Stream",
    grade: "3S's",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Software Engineer",
    company: "Allianz Lanka",
    companyLogo: "/img/icons/common/allianz.jpeg",
    date: "Sept 2022 - Present",
    desc: "I specialize in developing robust backends for a range of web applications and APIs, particularly within the insurance domain. My expertise lies in crafting RESTful APIs using Spring Boot and microservices architecture, alongside proficient use of PostgreSQL for effective data management. Additionally, I bring hands-on experience in frontend development using Angular.",
  },
  {
    role: "Software Engineer (Outsourcing)",
    company: "Acentura Inc",
    companyLogo: "/img/icons/common/acentura.png",
    date: "Sept 2022 - Present",
    desc: "I specialize in developing robust backends for a range of web applications and APIs, particularly within the insurance domain. My expertise lies in crafting RESTful APIs using Spring Boot and microservices architecture, alongside proficient use of PostgreSQL for effective data management. Additionally, I bring hands-on experience in frontend development using Angular.",
  },
  {
    role: "Software Engineer",
    company: "Ideahub (pvt) ltd",
    companyLogo: "/img/icons/common/ideahub.png",
    date: "Jan 2022 - Sept 2022",
    desc: "I specialize in developing robust backends for a variety of web applications and APIs, with a specific focus on the banking domain, particularly at HNB Bank. My expertise lies in crafting RESTful APIs using Spring Boot and utilizing MySQL for effective data management.",
    // descBullets: [
    //   "Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: "Associate Software Engineer",
    company: "Devlabs Global (pvt) ltd",
    companyLogo: "/img/icons/common/devlabs.png",
    date: "Jan 2021 - Jun 2022",
    desc: "Specialized in e-commerce backend using Node.js, React.js. Expert in crafting RESTful APIs with MongoDB. Experienced with Docker for efficient containerization, focusing on robust backend solutions in my previous role.",
  },
];

export const projects: ProjectType[] = [
  {
    name: "my-portfolio",
    desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
    github: "https://github.com/vivek9520/myportfolio",
    // link: "https://developer-portfolio-1hanzla100.vercel.app/",
  },
  {
    name: "Pac",
    desc: " (Accessable only Internal network)'Pac' refers to a software or a system used for internal purposes within Allianz, particularly for accessing internal networks, it could be a tool designed for secure and controlled access to the company's internal resources.",
    // link: "Accessable only Internal network",
  },
];

export const feedbacks: FeedbackType[] = [
  // {
  //   name: "Syed Jamal",
  //   role: "Frontend Developer at Meganos Software",
  //   feedback:
  //     "You were a wonderful addition to our team, alhumdulillah. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like Hanzla is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Allah bless you with everything you desire.",
  // },
  // {
  //   name: "Wajahat Malek",
  //   role: "CEO at Duseca Software",
  //   feedback:
  //     "Hanzla has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Hanzla is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Hanzla for any Full Stack Django, React.js, or Blockchain development projects, and I wish him all the best in his future endeavors.",
  // },
  // {
  //   name: "Zaid Zaffar",
  //   role: "CEO at ZR Technologies",
  //   feedback:
  //     "Very skilled at what he does and has an in depth knowledge of Django and he's always ready to handle any challenges thrown at him. He's been a valuable member of my team and i look forward to working with him in the years to come",
  // },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Vivek Jeevanaraj",
  description: greetings.description,
  author: "Vivek Jeevanaraj",
  image: "https://i.postimg.cc/s2s0yS1C/1684911388445.jpg",
  url: "https://developer-portfolio-1hanzla100.vercel.app",
  keywords: [
    "Vivek",
    "Vivek Jeevanaraj",
    "@vivek9520",
    "1vivek9520",
    "Portfolio",
    "Vivek Portfolio ",
    "Vivek Jeevanaraj Portfolio",
  ],
};
