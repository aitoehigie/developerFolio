
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Ehigie Aito",
  title: "Hi all, I'm Ehigie (@pystar) Aito",
  subTitle: emoji("A passionate Software Developer 🚀 with experience building Web and Mobile applications with Python / Django / Flask / JavaScript / JQuery and some other cool libraries and frameworks."),
  resumeLink: "https://mega.nz/file/OJMzFIxB#9SSNZ1UWEHxFJbnnjgcGk2sCLHZMI9Dcxpn9wkwj6h0"
};

// Your Social Media Link

const socialMediaLinks = {
  twitter: "https://twitter.com/pystar",
  github: "https://github.com/aitoehigie",
  linkedin: "https://www.linkedin.com/in/aitoehigie/",
  gmail: "aitoehigie@gmail.com",
  gitlab: "https://gitlab.com/aitohigie",
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "BACKEND DEVELOPER WHO DABBLES ON THE FRONTEND AND HAS INTEREST IN INFOSEC",
  skills: [
    emoji("⚡ Develop highly interactive web and mobile applications"),
    emoji("⚡ Integration of third party services such as APIs "),
    emoji("⚡ Web application penetration testing and incidence reporting"),
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "sql-postgres",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Infosec",
      fontAwesomeClassname: "fas fa-user-secret"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      // progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      // progressPercentage: "60%"
    },
    {
      Stack: "Infosec",
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Independent Software Engineer",  
      company: "Independent",
      companylogo: require("./assets/images/programmer.svg"),
//      date: "Jan 2019 – Date",
      desc: "Backend Python/Django web developer"
    },
    {
      role: "Software Engineer",  
      company: "Platform.sh",
      companylogo: require("./assets/images/platformsh.png.png"),
      // date: "June 2018 – Present",
      desc: "Cloud Platform Engineer",
      descBullets: [
        "Python Cloud Engineer on the Foundation team.",
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "aitoehigie", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"false" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/logo.png"),
      link: "http://mygidimagic.com/"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More


const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Github.com Arctic Code Vault Contributor",
      subtitle: "Contributor to 3 opensource libraries in the github artic code vault program.",
      image: require("./assets/images/github.png"),
      footerLink: [
        { name: "", url: "" },
        { name: "", url: "" },
        { name: "", url: "" }
      ]
    },
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://dev.to/pystar/build-a-native-ui-android-app-with-python-and-beeware-16me",
      title: "Build a Native UI Android App with Python and BeeWare.",
      //description: "How to build native mobile apps with pure Python."
    },
    {
      url: "https://dev.to/pystar/learn-shell-scripting-in-5-minutes-5fk4",
      title: "Learn Bash scripting in 5 minutes",
      //description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    },
    {
      url: "https://dev.to/pystar/deep-dive-into-python-memory-management-39cm",
      title: "Deep Dive into Python memory management."
    }
  ]
};

// Talks Sections


const talkSection = {
  
title: "Talks",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ]

};


// Podcast Section

const podcastSection = {

  title: emoji("Podcast 🎙️"),
  subtitle: "Podcasts",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/ehigie-aito/embed"]


};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+2348029401212",
  email_address: "aitoehigie@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "pystar"//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo, twitterDetails};
