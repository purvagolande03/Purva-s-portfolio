// src/data/portfolioData.js
// You can easily edit your portfolio details here.

export const portfolioData = {
  // Personal Details
  personal: {
    name: "Purva Vikas Golande",
    role: "Core Computer Science Student",
    description: "Building practical solutions across software, cloud computing, data analytics, and emerging technologies.",
    about: "I am a Computer Science Engineering student at VIT Chennai, building strong foundations in programming, databases, cloud computing, data analytics, operating systems, and software development. I emphasize learning through projects, problem solving, building practical systems, exploring cloud technologies, working with data, learning new technologies, and continuous improvement.",
    resumePath: "/resume.pdf", // This links to the public/resume.pdf file
    email: "purvagolande@gmail.com",
    github: "https://github.com/purvagolande03",
    linkedin: "https://www.linkedin.com/in/purva-golande-08b509375/",
    footerText: "©Purva Golande"
  },

  // Skills
  skills: [
    {
      category: "Programming",
      items: ["C", "C++", "Java", "Python", "JavaScript"]
    },
    {
      category: "Data & Analytics",
      items: ["SQL", "Python", "Pandas", "NumPy", "Excel", "Matplotlib"]
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS", "Linux"]
    },
    {
      category: "Databases",
      items: ["MySQL", "MongoDB"]
    },
    {
      category: "Core Computer Science",
      items: ["Data Structures & Algorithms", "DBMS", "Operating Systems", "Computer Networks", "Object-Oriented Programming"]
    }
  ],

  // Projects
  projects: [
    {
      title: "Kisan Vikas AI",
      description: "An intelligent agricultural assistance platform providing weather information, mandi prices, government scheme information, chatbot assistance, and crop/pest-related insights.",
      technologies: ["Python", "FastAPI", "MongoDB", "React Native", "Expo", "AI/LLM APIs"],
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      title: "On-Site Battery Health Triage System",
      description: "A portable system designed to evaluate EV battery cells using parameters such as internal resistance, capacity-related measurements, and thermal behavior to support second-life battery sorting.",
      technologies: ["Embedded Systems", "Sensors", "Microcontrollers", "Python", "Data Analysis"],
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      title: "Student Data Analytics",
      description: "A data analytics project involving student datasets, exploratory data analysis, visualization, and extracting useful insights from student information.",
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Power BI"],
      githubUrl: "#",
      demoUrl: "#"
    }
  ],

  // Learning Journey Timeline
  journey: [
    {
      id: "01",
      title: "Programming Fundamentals",
      description: "C, C++, Java and Python fundamentals."
    },
    {
      id: "02",
      title: "Object-Oriented Programming",
      description: "Learning object-oriented design and programming concepts."
    },
    {
      id: "03",
      title: "Data Structures & Algorithms",
      description: "Building problem-solving and algorithmic thinking skills."
    },
    {
      id: "04",
      title: "DBMS & SQL",
      description: "Learning databases, relational models, SQL and database design."
    },
    {
      id: "05",
      title: "Data Analytics",
      description: "Working with Python, data processing, visualization and analytics."
    },
    {
      id: "06",
      title: "Cloud Computing",
      description: "Learning cloud concepts, AWS and cloud infrastructure."
    },
    {
      id: "07",
      title: "Projects & Research",
      description: "Applying concepts through practical projects and research-oriented work."
    }
  ],

  // Beyond Technology Interests
  beyondTechnology: [
    {
      title: "Management",
      description: "Interested in understanding how technology, people and projects come together."
    },
    {
      title: "Leadership",
      description: "Interested in teamwork, communication, coordination and taking responsibility."
    },
    {
      title: "Entrepreneurship",
      description: "Interested in startups, innovation and turning ideas into practical solutions."
    },
    {
      title: "Dance",
      description: "A creative activity that helps me express creativity and maintain discipline."
    },
    {
      title: "Exploring",
      description: "Interested in exploring new places, experiences, technologies and ideas."
    },
    {
      title: "Teaching & Sharing",
      description: "I enjoy explaining concepts, helping others learn and sharing knowledge."
    }
  ]
};
