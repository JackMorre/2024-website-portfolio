import bodega from "../images/the-bodega-norwich.netlify.app_.webp";
import bestGameDeal from "../images/best-game-deal-app-desktop.webp";
import frontendMentorLogo from "../images/Frontend_mentor_logo.webp";
import blogr from "../images/frontend-mentor/blogr-landing-page.webp";
import interactiveRatingComponent from "../images/frontend-mentor/interactive-rating-component.webp";
import notificationPage from "../images/frontend-mentor/notification-page.webp";
import omnifood from "../images/frontend-mentor/omnifood.webp";
import sunnysideAgencyMain from "../images/frontend-mentor/sunnyside-agency-main.webp";
import tipCalculator from "../images/frontend-mentor/tip-calculator-app.webp";

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
    apps: undefined,
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
    apps: undefined,
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

    websiteURL: "",
    githubURL: "",
    apps: [
      {
        name: "Interactive Rating Component",
        smallText:
          "A small component that allows you to rate the service you have recieved that could be implemented into any app",
        websiteURL: "https://interactive-rating-component-jack.netlify.app/",
        githubURL:
          "https://github.com/JackMorre/interactive-rating-component-main",
        image: interactiveRatingComponent,
      },
      {
        name: "Omni-Food",
        smallText:
          "This was a final project on an Udemy course that solidified my CSS and HTML skills",
        websiteURL: "https://omnifood-jackmorrell.netlify.app/",
        githubURL: undefined,
        image: omnifood,
      },
      {
        name: "Notification Drop Down",
        smallText:
          "A componant that allows you to see notifications from different users that interacted with your account in some way.",
        websiteURL: "https://notification-page-jack-morre.netlify.app",
        githubURL: "https://github.com/JackMorre/notifications-page-main",
        image: notificationPage,
      },
      {
        name: "Blogr Landing Page",
        smallText:
          "Front page of a blog website with drop downs and information about how to get started",
        websiteURL: "https://blogr-landing-page-jack.netlify.app",
        githubURL: "https://github.com/JackMorre/blogr-landing-page-main",
        image: blogr,
      },
      {
        name: "Tip Calculator",
        smallText:
          "A small app that allows you to calulate a tip of any price bill that you may have.",
        websiteURL: "https://tip-calculator-app-jack-morre.netlify.app",
        githubURL: "https://github.com/JackMorre/tip-calculator-app-main",
        image: tipCalculator,
      },
      {
        name: "Sunnyside Agency",
        smallText:
          "A landing page for a fake buisness that used bright colors to make a bold statement.",
        websiteURL: "https://sunnyside-agency-main-jackmorre.netlify.app",
        githubURL:
          "https://github.com/JackMorre/sunnyside-agency-landing-page-main",
        image: sunnysideAgencyMain,
      },
    ],
    skillsUsed: [],
    extensionURL: "frontend-mentor",
    desktopImage: [frontendMentorLogo],
  },
];

export const checkData = (param) => {
  for (let i = 0; i < workData.length; i++) {
    if (workData[i].extensionURL === param) {
      return workData[i];
    }
  }
  return {};
};
