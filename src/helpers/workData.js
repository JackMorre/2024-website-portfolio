import bodega from "../images/the-bodega-norwich.netlify.app_.webp";
import bestGameDeal from "../images/best-game-deal-app-desktop.webp";
import frontendMentorLogo from "../images/Frontend_mentor_logo.webp";

export const workData = [
  {
    name: "The Bodega",
    smallText:
      "A small front-end website for a sandwich shop based in the heart of Norwich, Norfolk.",
    longText: [
      "After taking some time to learn HTML, CSS and Javascript, I thought I would dive into creating some thing of my own that I built from the ground up.",
      "The Bodega is a small sandwich shop in Norwich city center that has great food and a great vibe. Upon looking them up online, they didn't really have an only presence except a facebook page. This is where I decided to create this website that is on brand, has their location and manu for customers to see.",
    ],
    strengths: [
      "Solidingfying my knowledge for HTML, CSS and Javascript",
      "creating a website that is on brand",
      "the website is fully responsive",
    ],
    Weaknesses: [
      "Not being able to update the information with a backend database to be able to update menu and opening times.",
      "not having sales directly on the website",
    ],
    websiteURL: "https://the-bodega-norwich.netlify.app/",
    githubURL: "https://github.com/JackMorre/The_Bodega",
    skillsUsed: [
      "HTML",
      "CSS",
      "Javascript",
      "Figma",
      "Responsive Design",
      "Mobile First",
    ],
    extensionURL: "the-bodega",
    desktopImage: bodega,
  },
  {
    name: "Best Game Deal",
    smallText:
      "An app that allows you to search an API to see what game currently have deals on them.",
    longText: [
      "I had just finish a front end course and for our last project, we had to build an app in react that used an API. We did build an app but I wanted to re-build it using Redux so I can fully understand how that is incorpated into an app.",
      "Best Game Deal is just a simple app using redux to allow the user to find the best deals on certain game, it allows you to add to your wishlist and tracks your history of what you view and search.",
    ],
    strengths: [
      "Understading the use of React in developement",
      "condition rendering with Redux",
      "Creating the app with tailwind",
    ],
    Weaknesses: [
      "The design of the app could be a lot better.",
      "Understanding the best way to use React Router DOM",
    ],
    websiteURL: "https://best-game-deal-jack-morrell.netlify.app/",
    githubURL: "https://github.com/JackMorre/game-deal-app",
    skillsUsed: [
      "React",
      "Redux",
      "API",
      "Figma",
      "Responsive Design",
      "Tailwind",
      "React Router DOM",
    ],
    extensionURL: "best-game-deal",
    desktopImage: bestGameDeal,
  },
  {
    name: "Frontend Mentor",
    smallText:
      "A bunch of apps that was created in work with the website: Frontend Mentor.",
    longText: [
      "I was enjoying a day out in my home town and decided to get a delicious sandwich from the market. I was so captivated by The Spamwich(Yes, that it it’s real name). I decided to up The Bodega and saw that they didn’t have a website. This got my mind running about what there website could look like and low and behold, I came up with this.",
      "Using mainly HTML, CSS and a little Javascript, I was able to create a great website that is on brand for The Bodega and the first official website built from scratch. ",
    ],
    websiteURL: "",
    githubURL: "https://github.com/JackMorre/game-deal-app",
    skillsUsed: [],
    desktopImage: [frontendMentorLogo],
  },
];

export const checkData = (param) => {
  for (let i = 0; i < workData.length; i++) {
    console.log(workData[i].extensionURL, param);
    if (workData[i].extensionURL === param) {
      return workData[i];
    }
  }
  return {};
};
