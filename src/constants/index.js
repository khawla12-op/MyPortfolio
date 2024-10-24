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
  mongo,
  git,
  mongodb,
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
  Data,
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
  cisco,
  Foundations,
  Solution,
  um6pLogo,
  Metaversehack,
  Maghreb4SDGs,
  EmsiHackathon,
  Speakathon,
  FootInsights,
  langchain,
  Oracle

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
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
    name: "langchain",
    icon: langchain,
  },
 
  {
    name: "Scikit Learn",
    icon: scikit_learn,
  },
  {
    name: "Tensorflow",
    icon: tensorflow,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
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
    name: "Redis",
    icon: redis,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },


 
  

];

//   {
//     name: "Bootstrap",
//     icon: bootstrap,
//   },
//   {
//     name: "Linux",
//     icon: linux,
//   },
//   {
//     name: "Redis",
//     icon: redis,
//   },

//   {
//     name: "Neo4j",
//     icon: neo4j,
//   },

const experiences = [
  {
    title: "AI and Machine Learning Intern",
    company_name: "Modeling Simulation and Data Analyis Department - UM6P",
    icon: um6pLogo,
    iconBg: "#383E56",
    date: "July 2024 - September 2024",
    points: [
     "I worked on a web application designed to assist football coaches in making real-time decisions by analyzing biometric data from players. The platform leverages machine learning algorithms to monitor player performance and health, providing actionable insights during a match. Coaches receive recommendations on player fatigue, dehydration, injury risks, and the need for breaks, helping them optimize strategies and prevent health issues. The system integrates real-time sensor data, enabling proactive intervention to enhance team performance and player well-being."
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
          url: "https://gdg.community.dev/gdg-on-campus-enset-ecole-normale-superieure-de-lenseignement-technique-de-mohammedia-mohammedia-morocco/",
          display: "GDSC ENSET Mohammedia"
        }
      }
    ]
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
  
];


const projects = [
  {
    name: "Football Analytics",
    description:"The aim of this project is to create a web-based application that automates the analysis of football games using deep learning and computer vision techniques. The application provides meaningful insights that can help in decision-making processes.",
    tags: [
      {
        name: "Computer Vision",
        color: "blue-text-gradient",
      },
      {
        name:"Machine learning algorithms",
        color: "blue-text-gradient",
      },
      {
        name:"Homography matrix",
        color: "violet-text-gradient",

      },

    ],
    image: FootInsights,
    source_code_link: "https://github.com/khawla12-op/Footbal_Analytics_with_DL_CV",
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
        name: "Other ML algorithms",
        color: "purple-text-gradient",
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
    name: "SereneSoul",
    description:"The Serene Soul project is dedicated to individuals suffering from mental health issues who need an assistant to provide them with recommendations.",
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
        name:"Django",
        color:"pink-text-gradient",
      },
      {
        name:"LlamaIndex",
        color:"purple-text-gradient",
      },
      {
        name:"MySQL",
        color:"violet-text-gradient",
      },
      {
        name:"Langchain",
        color:"orange-text-gradient",
      }
      
    ],
    image: post,
    source_code_link: "https://github.com/khawla12-op/SereneSoul-Chatbot-",
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
 
  

];
const certifications = [
  {
    name:"Oracle Cloud Infrastructure 2024 Generative AI Certified Professional",
    description:"This Certification validates my expertise in building and deploying advanced AI-driven solutions using Oracle Cloud Infrastructure and Generative AI Service. ",
    image: Oracle,
    certification_link:"https://www.linkedin.com/in/khaoula-allak/details/certifications/"
  },
  {
    name:"Modernizing Data Lakes and Data Warehouses with Google Cloud",
    description: "Certification awarded by Coursera differentiates between data lakes and data warehouses, exploring use cases for each type of storage. It delves into the available data lake solutions on Google Cloud, providing insights into how they cater to various business needs.",
    image:Data,
    certification_link:"https://www.coursera.org/account/accomplishments/verify/WTRCSP6WG5PP"
  },
  {
    name:"Foundations: Data, Data, Everywhere",
    description: "The certificate validates the ability to fulfill the role of a data analyst by effectively managing and analyzing data to support informed decision-making .",
    image:Foundations,
    certification_link:"https://www.coursera.org/account/accomplishments/verify/QBU3XBNGJ3FU"
  },
  {
    name: "Introduction to MongoDB",
    description: "The Introduction to MongoDB certification offers a comprehensive overview of MongoDB, covering essential concepts like data modeling, querying, and performance tuning. Participants learn to effectively utilize MongoDB for building modern, scalable applications through hands-on exercises and best practice guidelines.",
    image: mongo, 
    certification_link: "https://www.freecodecamp.org/",
  },
  {
    name: "English for IT 1",
    description:
    "This certification demonstrates my ability to use complex grammatical concepts accurately, my familiarity with concepts related to information security and job roles, and my capability to understand phrases related to customer support. I'm also proficient in using vocabulary related to user experience, fraudulent calls, as well as network and software engineering.",
    image: cisco, // replace with a real image URL
    certification_link: "https://www.credly.com/badges/ace5a40b-e17b-4711-9258-e024650169c1/print",
},


 
  
 
  {
    name:"Solution challenge Hackathon",
    description:"This certification is a prove for developping a rel--world problem relationg to the Google Developer Student Club Soltion challenge using google technologies",
    image:Solution,
    certification_link:""
  },
  // {
  //   name:"Speakathon",
  //   description:"This certificate is to certify that I qualified as a semi-finalist in Speakathon 2024, organized by the English Speakers Community at ENSET Mohammedia",
  //   image:Speakathon,
  //   certification_link:""
  // },
  // {
  //   name:"HealthTech Metaverse Hackathon",
  //   description:"2nd Place at Hackathon HealthTech: I was part of the team that secured second place at the Ibnou Zohr University's Hackathon HealthTech. Our project centered around leveraging [specific technologies, e.g., VR, AI] within the Metaverse to [outline the project's benefits, e.g., improve patient care, enhance medical training]. This experience allowed me to enhance my skills in [list of skills, e.g., programming, UX/UI design, teamwork] and gain valuable insights into the future of connected healthcare.",
  //   image:Metaversehack,
  //   certification_link:""
  // },
  // {
  //   name:"",
  //   description:"",
  //   image:,
  //   certification_link:""
  // },
  // {
  //   name:"",
  //   description:"",
  //   image:,
  //   certification_link:""
  // },
  // {
  //   name:"",
  //   description:"",
  //   image:,
  //   certification_link:""
  // }

];


export { services, technologies, experiences, projects,certifications };
