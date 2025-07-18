/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file
import glowin1 from "./assets/images/glowin.png";
import glowin2 from "./assets/images/glowin1.png";
import glowin3 from "./assets/images/glowin3.png";
import play1 from "./assets/images/play.png";
import play3 from "./assets/images/play3.png";
import play4 from "./assets/images/play4.png";
import mooc from "./assets/images/mooc.png";
import mooc1 from "./assets/images/mooc1.png";
import mooc2 from "./assets/images/mooc2.png";
import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Jiao Cheng",
  title: "Hi all, I'm Jiao",
  subTitle: emoji(
    "A dedicated Full Stack Developer 🚀 who transitioned from a career as a barista to tech, combining creativity and precision to build web applications using .NET, JavaScript, React, and Next.js. Recently trained through a full-time bootcamp, passionate about crafting clean, user-friendly solutions."
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/laurajiao",
  linkedin: "https://www.linkedin.com/in/laurajiao-cheng",
  gmail: "laurajiao7@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CURIOUS FULL STACK DEVELOPER EAGER TO BUILD AND GROW WITH MODERN TECH STACKS",
  skills: [
    emoji(
      "⚡Develop responsive front-end interfaces using React.js, TypeScript, and modern styling tools like Tailwind CSS and Bootstrap"
    ),
    emoji("⚡ Build and maintain scalable backend services using .NET Core, ASP.NET Web API, and Entity Framework"),
    emoji(
      "⚡ Integrate third-party APIs such as PayPal, OpenWeatherMap, and Strapi CMS into full stack applications"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "SASS / SCSS",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React.js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Next.js",
      fontAwesomeClassname: "fas fa-code"
    },

    {
      skillName: "SQL / PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: ".NET Core",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Tailwind CSS",
      fontAwesomeClassname: "fas fa-wind"
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "JR Academy Bootcamp",
      logo: require("./assets/images/JR.png"),
      subHeader: "Full Stack Developer",
      duration: "September 2024 - April 2025",
      desc: "Completed an intensive full-stack development program with hands-on training in modern technologies",
      descBullets: [
        "Built full-stack applications using .NET, React.js, JavaScript, and SQL",
        "Participated in both individual and team-based commercial projects following Agile and Jira workflows"
      ]
    },
    {
      schoolName: "Frontier Education",
      logo: require("./assets/images/frontier.png"),
      subHeader: "Diploma in Leadership and Management",
      duration: "October 2019 - October 2020",
      desc: "Completed coursework focused on leadership, communication, and team management in professional settings.",
      descBullets: [
        "Developed strong team collaboration and problem-solving skills through group-based projects",
        "Gained practical knowledge in managing teams, setting goals, and leading initiatives"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "React.js", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "ASP.NET Core", //Insert stack or technology you have experience in
      progressPercentage: "70%"
    },
    {
      Stack: "C#",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Experience & Big Projects",
  subtitle: "COMMERCIAL PROJECTS DEVELOPED FOR CLIENTS INDIVIDUALLY OR IN A TEAM ENVIRONMENT",
  projects: [
    {
      images: [glowin1, glowin2, glowin3],
      projectName: "Glowin Ecommerce",
      projectDesc: "A full-featured e-commerce platform with Next.js and TypeScript, including a customer-facing storefront and an admin dashboard for management.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.glowinsocks.store/"
        }
      ]
    },

    {
      images: [play1, play3, play4],
      projectName: "PlaygetherX",
      projectDesc: "A Jira-managed commercial project built with React, TypeScript, .NET Core, PostgreSQL, and SignalR, featuring real-time multiplayer quizzes and an admin dashboard.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://playgetherx.com/"
        }
      ]
    },
    {
      images: [mooc, mooc1, mooc2],
      projectName: "Mooc Online Learning Platform",
      projectDesc: "Mooc Online Learning Platform is a .NET + React.js admin system built as a commercial Jira team project.",
      footerLink: [
        {
          name: "Open Source",
          url: "https://github.com/MoocDevTeam"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications"),
  subtitle:
    "Certifications that I have done !",

  achievementsCards: [
    {
      title: "Commonwealth Bank Software Engineering Job Simulation",
      subtitle:
        "C# .NET, MongoDB, Postman, Git, React, Redux, TypeScript, and more.",
      image: require("./assets/images/cba.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/2sNmYuurxgpFYawco/xv8eSGu7nksKNiCQj_2sNmYuurxgpFYawco_FDHo7TbxvH2wNsjm2_1735630259646_completion_certificate.pdf"
        },
      ]
    },
    {
      title: "Atlassian Agile Project Management Professional Certificate",
      subtitle:
        "Jira, Agile Project Management, Agile Methodologies, Scrum, Kanban, and more.",
      image: require("./assets/images/atsn.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.linkedin.com/learning/certificates/abb2fa1802d3d33410bff4e381ad8ada011eb031f925b188c439c67c90e12ce1"
        }
      ]
    },

    {
      title: "MYOB’s Protégé Developer Virtual Experience",
      subtitle: "C#, TDD, OOP, SOLID Principles, SQL, Growth Mindset, and more.",
      image: require("./assets/images/myob.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certification", url: "https://prosple.com/verifier?id=bd016e20-03ef-11f0-b547-a77327ebc8e5" },
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+61 477413577",
  email_address: "laurajiao7@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
