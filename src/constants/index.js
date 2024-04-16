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
  tailwind,
  nodejs,
  mongodb,
  git,
  post,
  figma,
  docker,
  gdscIcon,
  portfolio,
  Ninwid,
  gannett,
  medgpt,
  heart,
  threejs,
  hadoop,
  spark,
  flutter,
  Angular,
  hbase,
  cassandra,
  android,
  bootstrap,
  linux,
  redis,
  kubernetes,
  neo4j,
  scikit_learn,
  tensorflow,
  dashboard,
  codsoft,


} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "experience",
    title: "Experience",
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
    title: "Content Creator",
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
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Hadoop",
    icon: hadoop,
  },
  {
    name: "Spark",
    icon: spark,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Angular",
    icon: Angular,
  },
  {
    name: "HBase",
    icon: hbase,
  },
  {
    name: "Cassandra",
    icon: cassandra,
  },
  {
    name: "Android",
    icon: android,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Linux",
    icon: linux,
  },
  {
    name: "Redis",
    icon: redis,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
  {
    name: "Neo4j",
    icon: neo4j,
  },
  {
    name: "Scikit Learn",
    icon: scikit_learn,
  },
  {
    name: "Tensorflow",
    icon: tensorflow,
  },
  
 
  

];
const experiences = [
  {
    title: "GDSC Core team member",
    company_name: "Google Developer Student Clubs - ENSET Mohammedia",
    icon: gdscIcon,
    iconBg: "#383E56",
    date: "September 2022 - September 2023",
    points: [
      "As a core team member in the GDSC Club, my role primarily involved serving as the content creator for our talks, speeches, and social media posts.I took charge of conceptualizing, crafting, and delivering engaging content that resonated with our audience.",
      " Additionally, I collaborated closely with other team members, supporting them in their respective roles and contributing to brainstorming sessions to generate innovative ideas and strategies. "
    ],
  },
  {
    title: "Full Stack Web Development Intern",
    company_name: "Ninwid Technologie",
    icon: Ninwid,
    iconBg: "#E6DEDD",
    date: "July 2023 - August 2023",
    points: [
"I had the opportunity to design and develop a complete web application as well as a website aimed at revolutionizing client management and advertisement delivery.",

"The application I created significantly simplifies the process of client management by automating many essential tasks, thereby improving their efficiency in their daily work",
    ],
  },

  {
    title: "GDSC Lead",
    company_name: "Google Developer Student Clubs - ENSET Mohammedia",
    icon: gdscIcon,
    iconBg: "#383E56",
    date: "Septembre 2023 - Present",
    points: [
      "In my position as a lead, I valued the opportunity to learn from my core team members. It served as an excellent opportunity for exchanging ideas and collaborating through workshops and informational sessions focused on various technical topics. This collaborative environment not only enriched my own knowledge but also fostered a culture of continuous learning and growth within the team.",
      {
        text: "To further extend the reach of our achievements, I invite you to explore our accomplishments showcased on the website:",
        link: {
          url: "https://gdsc.community.dev/enset-mohammedia/",
          display: "GDSC ENSET Mohammedia"
        }
      }
    ]
  },

  
  {
    title: "Machine Learning Intern",
    company_name: "CodSoft",
    icon: codsoft,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - March 2024",
    points: [
     " I had the privilege of being selected for the Machine Learning virtual internship position at CodSoft, where I embarked on a journey of learning and growth. ",

      "Throughout the internship, my primary focus was on acquiring new skills and gaining practical knowledge in the field of Machine Learning. I was entrusted with various tasks and projects, each designed to challenge me and enhance my understanding of ML concepts and techniques."
    ],
  },
];


const projects = [
  {
    name: "Gannett Economies Group application",
    description:
      "A platform for Gannett Economies Group company to manage specialized daily newspapers focusing on legal, administrative, and public advertising.",
    tags: [
    {
    
      name: "html",
      color: "green-text-gradient",
    },
    {
      name: "css",
      color: "pink-text-gradient",
    },
    {
      name: "javascript",
      color: "yellow-text-gradient",
    },
    {
      name: "laravel",
      color: "blue-text-gradient",
    },
    {
      name: "php",
      color: "blue-text-gradient",
    },
   
    {
      name: "Boostrap",
      color: "pink-text-gradient",
    },
    {
      name: "mysql",
      color: "blue-text-gradient",
    },
    ],
    image: gannett,
    source_code_link: "https://github.com/khawla12-op/Gannett-Economies-Group-app.git",
  },
  {
    name: "Blog App",
    description:" A web application designed to allow users to create, read, update, and delete blog posts. It provides a platform for users to share their thoughts, ideas, and experiences with a wider audience",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "yellow-text-gradient",
      },
      
      {
        name: "Bootstrap",
        color: "blue-text-gradient",
      },
      {
        name:"NodeJs",
        color:"pink-text-gradient",
      },
      {
        name:"Express",
        color:"purple-text-gradient",
      },
      {
        name:"MySQL",
        color:"violet-text-gradient",
      },
      {
        name:"Prisma",
        color:"orange-text-gradient",
      }
      
    ],
    image: post,
    source_code_link: "https://github.com/khawla12-op/projet-web.git",
  },
  {
    name: "MedGPT",
    description:
      "MedGPt is, a cutting-edge use of AI and natural language processing (NLP) in the medical industry. By utilizing cutting-edge language modeling approaches to support healthcare professionals in their work, MedGPt seeks to improve healthcare in the new world health system.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient"
      },
      {
        name: "css",
        color: "green-text-gradient"
      },
      {
        name: "Javascript",
        color: "yellow-text-gradient"
      },
      {
        name: "pandas",
        color: "black-text-gradient"
      },
      {
        name: "python",
        color: "purple-text-gradient"
      },
      {
        name: "Bootstrap",
        color: "violet-text-gradient"
      },
      {
        name: "Tensorflow",
        color: "orange-text-gradient"
      },
      {
        name: "keras",
        color: "red-text-gradient"
      },
      {
        name: "Ultralytics",
        color: "teal-text-gradient"
      },
      {
        name: "PyTorch",
        color: "maroon-text-gradient"
      }
      
      
    ],
    image: medgpt,
    source_code_link: "https://github.com/khawla12-op/MedGPT.git",
  },

  {
    name: "Heart Disease Prediction",
    description:" A web-based automatic prediction system that can predict heart disease based on various health parameters. This involves solving a binary classification problem using supervised machine learning techniques.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "K-Nearest Neighbors",
        color: "green-text-gradient",
      },
      {
        name: "AdaBoost Classifier",
        color: "pink-text-gradient",
      },
      {
        name: "Random Forest Classifier",
        color: "yellow-text-gradient",
      },
      {
        name: "Logistic Regression",
        color: "blue-text-gradient",
      },
      {
        name: "Decision Tree Classifier",
        color: "purple-text-gradient",
      },
      {
        name: "SVM",
        color: "violet-text-gradient",
      },
      {
        name: "XGBoost",
        color: "orange-text-gradient",
      },
     
      {
        name: "Scikit-learn",
        color: "green-text-gradient",
      },
    ],
    image: heart,
    source_code_link: "https://github.com/khawla12-op/HeartDiseasePrediction.git",
  },
  {
    name: "My Portfolio",
    description:"My portfolio is my online showcase, where I display all my skills, projects, and experiences. It's like my digital resume, but much more interactive and visually appealing. When visitors land on my site, they can get a real sense of who I am and what I can do",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name:"Tailwind CSS",
        color: "violet-text-gradient",

      },
    {
      name:"Three JS",
      color:"yellow-text-gradient",
    }
   

    ],
    image: portfolio,
    source_code_link: "https://github.com/khawla12-op/MyPortfolio.git",
  },
 
  {
    name: "Hospital Management System",
    description:"A hospital management system is a comprehensive software solution designed to streamline and optimize various administrative and operational tasks within a healthcare facility. It serves as a centralized platform to efficiently manage patient records, medical staff, inventory, billing, scheduling, and other essential functions.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name:"Javafx",
        color: "blue-text-gradient",
      },
      {
        name:"Scene builder",
        color: "violet-text-gradient",

      },

    ],
    image: dashboard,
    source_code_link: "https://github.com/khawla12-op/HospitalManagementSystem.git",
  },


];
const certifications = [
  {
    name: "React Certification",
    description: "Certification for proficiency in React.js, awarded by Codecademy.",
    image: "https://via.placeholder.com/150", // replace with a real image URL
    certification_link: "https://www.codecademy.com/",
  },
  {
    name: "JavaScript Certification",
    description: "Certification for proficiency in JavaScript, awarded by FreeCodeCamp.",
    image: "https://via.placeholder.com/150", // replace with a real image URL
    certification_link: "https://www.freecodecamp.org/",
  },
  {
    name: "Python Certification",
    description: "Certification for proficiency in Python, awarded by Coursera.",
    image: "https://via.placeholder.com/150", // replace with a real image URL
    certification_link: "https://www.coursera.org/",
  },
];


export { services, technologies, experiences, projects,certifications };
