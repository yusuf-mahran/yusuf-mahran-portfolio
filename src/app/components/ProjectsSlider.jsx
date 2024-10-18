"use client";
import { useEffect, useRef, useState } from "react";
import Btn from "../utilities/Btn";
import Heading from "../utilities/Heading";
import ProjectCardSlider from "./ProjectCardSlider";
import "./../styles/projects.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";

export default function ProjectsSlider() {
  const featuredProjects = [
    {
      title: "Investment Dashboard",
      desc: [
        {
          title: "Overview",
          content:
            "An interactive investment dashboard built with native HTML and CSS, designed to showcase various investment analysis cards with pixel-perfect precision, based on the provided Figma design. The dashboard adapts beautifully to different screen sizes, ensuring a fully responsive and seamless user experience across devices. The project emphasizes clean code and a focus on UI/UX design, delivering both aesthetics and functionality.",
        },
        {
          title: "Description",
          content:
            "The Investment Dashboard is a web application that displays various investment analysis cards based on the provided Figma design. The cards include information such as the investment name, investment value, and projected return. The dashboard is fully responsive and optimized for mobile devices, ensuring a seamless user experience across devices. The project emphasizes clean code and a focus on UI/UX design, delivering both aesthetics and functionality.",
        },
      ],
      img: "/projects/small/tradingo mockup.png",
      github: "https://github.com/yousiefhamed/technical_test",
      live: "https://yousiefhamed.github.io/technical_test/overview/index.html",
      technologies: ["html", "css", "js", "git", "github", "vercel", "vscode"],
      features: [
        {
          title: "Key Business Value",
          list: [
            "Enhanced User Experience: Provides a visually appealing and informative investment dashboard, enabling users to easily analyze and compare their investments.",
            "Improved Conversion Rates: Optimized the dashboard layout to increase sign-ups and conversions.",
            "Cost-effective Solution: Implemented a high-quality investment dashboard without the need for complex WordPress integration.",
          ],
        },
        {
          title: "Acknowledgments",
          list: [
            "This project was developed as part of an assignment and tutorial, emphasizing the practical application of HTML and CSS in theme development.",
          ],
        },
      ],
    },
    {
      title: "Login page test",
      desc: [
        {
          title: "Overview",
          content:
            "This project involved creating a simple login page for a fictional website. The login page was designed using HTML, CSS, and JavaScript, and it integrated a custom-made password strength indicator and a remember me feature using local storage. The project emphasizes clean code, user-friendly design, and a focus on security and privacy, ensuring that the login process is secure and enjoyable for users.",
        },
      ],
      img: "/projects/small/login-test mockup.png",
      github: "https://github.com/yousiefhamed/technical_test",
      live: "https://yousiefhamed.github.io/technical_test/login/index.html",
      technologies: ["html", "css", "js", "git", "github", "vercel", "vscode"],
      features: [
        {
          title: "Key Business Value",
          list: [
            "Enhanced User Experience: Provides a visually appealing and user-friendly login page, enabling users to easily access their account and securely login.",
            "Improved Conversion Rates: Optimized the login page layout to increase sign-ups and conversions.",
            "Cost-effective Solution: Implemented a high-quality login page without the need for complex integration.",
          ],
        },
        {
          title: "Acknowledgments",
          list: [
            "This project was developed as part of an assignment, emphasizing the practical application of HTML and CSS in theme development.",
          ],
        },
      ],
    },
    {
      title: "Azkar AlMuslim",
      desc: [
        {
          title: "Overview",
          content:
            "The Azkar AlMuslim project involves creating a responsive web application that displays morning or evening Azkar based on the current time. The application also allows users to manually switch between morning and evening Azkar and features a theme that changes accordingly. The design is optimized for mobile devices.",
        },
        {
          title: "Description",
          content:
            "Azkar AlMuslim is a web application that dynamically displays Azkar based on the current time of day. If accessed in the morning, it shows morning Azkar, and in the evening, it shows evening Azkar. Users can also manually switch between the morning and evening Azkar using a toggle button. The application is fully responsive and optimized for mobile devices, ensuring a seamless user experience.",
        },
      ],
      img: "/projects/small/azkar mockup.png",
      github: "https://github.com/yousiefhamed/Azkar/",
      live: "https://azkar-youssef.vercel.app/",
      technologies: ["html", "css", "js", "git", "github", "vercel", "vscode"],
      features: [
        {
          title: "Key Business Value",
          list: [
            "Enhanced User Experience: Automatically displays relevant Azkar based on the time of day, providing a personalized experience.",
            "Increased Engagement: The user-friendly interface and mobile optimization encourage regular use.",
            "Versatile Functionality: Allows users to manually switch between morning and evening Azkar, catering to individual preferences.",
          ],
        },
      ],
    },
    {
      title: "Restaurant Online Menu",
      desc: [
        {
          title: "Overview",
          content:
            "The Restaurant Online Menu project involves creating an interactive digital menu that can be accessed via a QR code. This solution provides a seamless and contactless dining experience for customers.",
        },
        {
          title: "Description",
          content:
            "Developed an interactive online menu for a local restaurant, allowing customers to scan a QR code and view the menu on their devices. This project aimed to enhance customer engagement and provide a modern, contactless dining experience.",
        },
      ],
      img: "/projects/small/bin-saleem mockup.png",
      github: "https://github.com/yousiefhamed/BinSaleemMenu/",
      live: "https://bin-saleem-menu.vercel.app/",
      technologies: ["html", "css", "git", "github", "vercel", "vscode"],
      features: [
        {
          title: "Key Business Value",
          list: [
            "Increased Customer Engagement: Boosted by 30% through interactive and accessible menu features.",
            "Reduced Printing Costs: Cut down by 50% with the elimination of physical menu printouts.",
            "Improved Customer Satisfaction: Enhanced by 20% through a convenient and modern dining experience.",
          ],
        },
      ],
    },
    {
      title: "Kanban Board To-Do List",
      desc: [
        {
          title: "Overview",
          content:
            "The Kanban Board To-Do List project involves creating a responsive to-do list application with three categories: To Do, In Progress, and Done. The application is designed to be accessible on both mobile and desktop devices, with data saved to local storage for persistence.",
        },
        {
          title: "Description",
          content:
            "Kanban Board is a to-do list application that helps users organize their tasks into three categories: To Do, In Progress, and Done. Tasks can be moved between these categories using drag-and-drop functionality or buttons. The application is fully responsive, ensuring a seamless experience on both mobile and desktop devices. Task data is saved to local storage, so users' progress is retained even after refreshing or closing the browser.",
        },
      ],
      img: "/projects/small/kanban-board mockup.png",
      github: "https://github.com/yousiefhamed/kanaban-board/",
      live: "https://kanaban-board.vercel.app/",
      technologies: ["html", "css", "js", "git", "github", "vercel", "vscode"],
      features: [
        {
          title: "Key Business Value",
          list: [
            "Improved Task Management: Helps users organize and manage their tasks efficiently, enhancing productivity.",
            "Accessibility: Fully responsive design ensures usability on both mobile and desktop devices.",
            "Data Persistence: Local storage integration ensures that users' task data is retained across sessions.",
          ],
        },
      ],
    },
    {
      title: "Guess My Number Game",
      desc: [
        {
          title: "Overview",
          content: `The "Guess My Number" game is a simple and interactive game where players attempt to guess a randomly generated number between 1 and 20. The game features a beautiful and responsive UI, with dynamic elements that change based on whether the player wins or loses.`,
        },
        {
          title: "Description",
          content: `In "Guess My Number," players enter guesses in an attempt to match a hidden number between 1 and 20. The game provides feedback on whether the guess is too high, too low, or correct. The UI dynamically updates to reflect the player's progress, displaying messages and changing styles based on win or loss conditions. The game's design emphasizes a clean and engaging user experience.`,
        },
      ],
      img: "/projects/small/guess-my-number mockup.png",
      github: "https://github.com/yousiefhamed/guess_my_number",
      live: "https://yousiefhamed.github.io/guess_my_number/",
      technologies: ["html", "css", "js", "git", "github", "vercel", "vscode"],
      features: [
        {
          title: "Key Business Value",
          list: [
            "Engaging User Experience: The game's intuitive design and dynamic feedback system keep players engaged.",
            "Responsive Design: Optimized for both desktop and mobile devices, ensuring a consistent experience across platforms.",
            "Entertainment & Skill Development: Provides entertainment while subtly encouraging problem-solving and critical thinking skills.",
          ],
        },
      ],
    },
    {
      title: "Business Card",
      desc: [
        {
          title: "Overview",
          content: `The "Business Card" project is a frontend challenge from Frontend Mentor. It involves creating a responsive and visually appealing digital business card, showcasing personal or professional information in a clean and concise layout.`,
        },
        {
          title: "Description",
          content: `This project features a digital business card designed to provide essential information at a glance. The card includes sections for name, job title, contact details, and social media links. It was developed as part of a challenge to replicate a provided design with precision, focusing on responsive layout, typography, and visual aesthetics.`,
        },
      ],
      img: "/projects/small/business-card mockup.png",
      github: "https://github.com/yousiefhamed/business-card",
      live: "https://yousiefhamed.github.io/business-card/",
      technologies: [
        "html",
        "css",
        "scss",
        "git",
        "github",
        "vercel",
        "vscode",
      ],
      features: [
        {
          title: "Key Business Value",
          list: [
            "Professional Presentation: Offers a polished and professional digital business card that can be shared online or as a part of a portfolio.",
            "Responsive Design: Ensures optimal viewing on various devices, including desktops, tablets, and smartphones.",
            "Attention to Detail: Demonstrates proficiency in front-end development by accurately replicating the provided design.",
          ],
        },
      ],
    },
    {
      title: "Projects Tracking Card UI",
      desc: [
        {
          title: "Overview",
          content: `The "Projects Tracking Card UI" is a user interface design that showcases the latest projects in a visually appealing card view. The design is intended to help users easily track and access information about various projects, including project name, tech stack, and a link to the project.`,
        },
        {
          title: "Description",
          content: `This UI design features a grid of cards, each representing a different project. The cards include details such as the project name, a brief description, the tech stack used, and a link to the project. The design is responsive and adapts to different screen sizes, ensuring a consistent user experience across devices. The layout emphasizes clarity and accessibility, making it easy for users to find and interact with project information.`,
        },
      ],
      img: "/projects/small/projects-tracking-card mockup.png",
      github: "https://github.com/yousiefhamed/projects-tracking-card",
      live: "https://yousiefhamed.github.io/projects-tracking-card/",
      technologies: [
        "html",
        "css",
        "scss",
        "git",
        "github",
        "vercel",
        "vscode",
      ],
      features: [
        {
          title: "Key Business Value",
          list: [
            "Efficient Project Tracking: Provides a clear and organized view of multiple projects, making it easy for users to track progress and access project details.",
            "Responsive Design: Ensures a seamless experience on various devices, including desktops, tablets, and smartphones.",
            "Professional Presentation: Offers a professional and modern way to showcase project portfolios, enhancing the user experience.",
          ],
        },
      ],
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [featuredProjectsDots, setFeaturedProjectsDots] = useState([]);
  const sliderContainerRef = useRef(null);
  const sliderCardRef = useRef(null);

  useEffect(() => {
    const sliderContainer = sliderContainerRef.current;

    sliderCardRef.current = Array.from(sliderContainerRef.current.children)[0];
    const sliderCard = sliderCardRef.current;

    const updateDots = () => {
      const numberOfDots =
        window.innerWidth > 1250
          ? featuredProjects.length - 3
          : window.innerWidth <= 1250 && window.innerWidth > 1024
          ? featuredProjects.length - 2
          : window.innerWidth <= 1024 && window.innerWidth > 768
          ? featuredProjects.length - 1
          : featuredProjects.length;
      setFeaturedProjectsDots(new Array(numberOfDots).fill(0));
    };

    const handleScroll = () => {
      if (sliderContainer) {
        const scrollLeft = sliderContainer.scrollLeft;
        let newCurrentSlide = Math.round(scrollLeft / sliderCard.clientWidth);
        setCurrentSlide(newCurrentSlide);
      }
    };

    updateDots();
    sliderContainer.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateDots);

    return () => {
      sliderContainer.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateDots);
    };
  }, [featuredProjects.length]);

  const handleDotClick = (index) => {
    if (index >= featuredProjectsDots.length) {
      index = 0;
    } else if (index < 0) {
      index = featuredProjectsDots.length - 1;
    }

    setCurrentSlide(index);
    if (sliderContainerRef.current && sliderCardRef.current) {
      sliderContainerRef.current.scrollTo({
        left: index * sliderCardRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="projects"
      className="w-full flex flex-col justify-center items-start gap-10"
    >
      <div className="w-full flex justify-between items-center flex-wrap gap-8">
        <Heading>Projects Improved my Coding Muscles</Heading>
        {/* <Btn href="/projects">
          Explore All Projects <FaArrowRightLong />
        </Btn> */}
      </div>
      <div
        ref={sliderContainerRef}
        className="projects-slider-container w-full flex flex-nowrap justify-start items-stretch"
      >
        {featuredProjects.map((project, index) => (
          <ProjectCardSlider key={index} projectDetails={project} />
        ))}
      </div>
      <div className="flex justify-center items-center gap-3 mx-auto -mt-14">
        <button
          color="bg-white"
          onClick={() => handleDotClick(currentSlide - 1)}
          className="text-4xl px-1"
        >
          <IoIosArrowDropleftCircle />
        </button>
        <div className="slider-dots flex flex-wrap justify-center items-center gap-2 gap-y-5 mx-auto">
          {featuredProjectsDots.map((_, index) => (
            <div
              key={index}
              className={`dot ${currentSlide === index ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            ></div>
          ))}
        </div>
        <button
          color="bg-white"
          onClick={() => handleDotClick(currentSlide + 1)}
          className="text-4xl px-1"
        >
          <IoIosArrowDroprightCircle />
        </button>
      </div>
    </section>
  );
}
