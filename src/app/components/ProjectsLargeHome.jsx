"use client";
import Heading from "../utilities/Heading";
import ProjectCardLarge from "./ProjectCardLarge";
import "./../styles/projects.css";

export default function ProjectsSlider() {
  const featuredProjects = [
    {
      title: "Grandpa Ali - Food Farm E-commerce",
      desc: [
        {
          title: "Overview",
          content:
            "The Food Farm E-commerce project involved creating a fully functional e-commerce website using Next.js, a popular React framework. The goal was to showcase my skills, products, and experiences in a visually appealing and interactive manner.",
        },
        {
          title: "Description",
          content:
            "Developed a fully functional e-commerce website using Next.js, a popular React framework. The website features a clean and modern design, showcasing my skills, products, and experiences in a visually appealing and interactive manner.",
        },
      ],
      img: "/projects/large/food-farm mockup.png",
      github: "https://github.com/yousiefhamed/food_farm",
      live: "https://food-farm-hamed.vercel.app/",
      technologies: [
        "nextjs",
        "react",
        "typescript",
        "tailwindcss",
        "git",
        "github",
        "vercel",
        "vscode",
      ],
      features: [
        {
          title: "Key Features",
          list: [
            "Responsive Design: Ensured compatibility across various devices and screen sizes.",
            "Performance Optimization: Followed best practices to enhance load times and overall user experience.",
            "Clean and Maintainable Code: Wrote well-structured Next.js components and utilized Next.js features like getStaticProps and Server Components.",
          ],
        },
      ],
    },
    {
      title: "Yusuf E-Commerce Website",
      desc: [
        {
          title: "Overview",
          content:
            "The E-Commerce Website project involved creating a fully functional e-commerce website using Next.js, a popular React framework. The goal was to showcase my skills, products, and experiences in a visually appealing and interactive manner.",
        },
        {
          title: "Description",
          content:
            "Developed a fully functional e-commerce website using Next.js, a popular React framework. The website features a clean and modern design, showcasing my skills, products, and experiences in a visually appealing and interactive manner.",
        },
      ],
      img: "/projects/large/yusuf-ecommerce mockup.png",
      github: "https://github.com/yousiefhamed/yusuf_ecommerce",
      live: "https://yousiefhamed.github.io/yusuf_ecommerce/",
      technologies: [
        "nextjs",
        "react",
        "typescript",
        "tailwindcss",
        "git",
        "github",
        "vercel",
        "vscode",
      ],
      features: [
        {
          title: "Key Features",
          list: [
            "Responsive Design: Ensured compatibility across various devices and screen sizes.",
            "Performance Optimization: Followed best practices to enhance load times and overall user experience.",
            "Clean and Maintainable Code: Wrote well-structured Next.js components and utilized Next.js features like getStaticProps and Server Components.",
          ],
        },
      ],
    },
    {
      title: "Blogity - An Awesome Blog Website",
      desc: [
        {
          title: "Overview",
          content:
            "The Blog Website project involved creating a blog website using Next.js, a popular React framework. The goal was to showcase my skills, blog posts, and experiences in a visually appealing and interactive manner.",
        },
        {
          title: "Description",
          content:
            "Developed a blog website using Next.js, a popular React framework. The website features a clean and modern design, showcasing my skills, blog posts, and experiences in a visually appealing and interactive manner.",
        },
      ],
      img: "/projects/large/blogity mockup.png",
      github: "https://github.com/yousiefhamed/blogity",
      live: "https://blogity-hamed.vercel.app/",
      technologies: [
        "nextjs",
        "react",
        "typescript",
        "tailwindcss",
        "git",
        "github",
        "vercel",
        "vscode",
      ],
      features: [
        {
          title: "Key Features",
          list: [
            "Responsive Design: Ensured compatibility across various devices and screen sizes.",
            "Performance Optimization: Followed best practices to enhance load times and overall user experience.",
            "Clean and Maintainable Code: Wrote well-structured Next.js components to facilitate future updates and modifications.",
          ],
        },
      ],
    },
    {
      title: "elomar travel landing page",
      desc: [
        {
          title: "Overview",
          content:
            "The elomar travel landing page project involved creating a fully responsive and visually appealing landing page for an elomar travel agency. The goal was to showcase their services, testimonials, and unique offerings in a user-friendly and engaging manner.",
        },
        {
          title: "Description",
          content:
            "Developed a fully responsive and visually appealing landing page for an elomar travel agency. The landing page showcases the agency's services, testimonials, and unique offerings in a user-friendly and engaging manner.",
        },
      ],
      img: "/projects/large/elomar-travel mockup.png",
      github: "https://github.com/yousiefhamed/elomar-travel",
      live: "https://elomar-travel.vercel.app/",
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
          title: "Key Features",
          list: [
            "Responsive Design: Ensured compatibility across various devices and screen sizes.",
            "Performance Optimization: Followed best practices to enhance load times and overall user experience.",
            "Clean and Maintainable Code: Wrote well-structured HTML and CSS to facilitate future updates and modifications.",
          ],
        },
      ],
    },
    {
      title: "LesslessVPN Theme",
      desc: [
        {
          title: "Overview",
          content: `This project involved developing a custom WordPress theme called "LesslessVPN." The goal was to convert the provided design into a fully responsive and visually appealing layout using native HTML and CSS.`,
        },
        {
          title: "Acknowledgments",
          content:
            "This project was developed as part of an assignment and tutorial, emphasizing the practical application of HTML and CSS in theme development.",
        },
      ],
      img: "/projects/large/laslesvpn mockup.png",
      github: "https://github.com/yousiefhamed/lasles_vpn_landing_page",
      live: "https://lasles-vpn-hamed.vercel.app/",
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
          title: "Key Features",
          list: [
            "Responsive Design: Ensured compatibility across various devices and screen sizes.",
            "Performance Optimization: Followed best practices to enhance load times and overall user experience.",
            "Clean and Maintainable Code: Wrote well-structured HTML and CSS to facilitate future updates and modifications.",
          ],
        },
      ],
    },
    {
      title: "Appie Landing Page",
      desc: [
        {
          title: "Overview",
          content:
            "The Appie Landing Page project involves creating a landing page for a service application using HTML and CSS. This project was based on a WordPress theme tutorial and aimed to replicate the design and functionality in pure HTML and CSS.",
        },
        {
          title: "Description",
          content:
            "Developed a landing page for a service application called Appie. This project required translating a WordPress theme tutorial into a fully functional landing page using HTML and CSS. The landing page is designed to be responsive and visually appealing, with a focus on showcasing the app's features and benefits.",
        },
      ],
      img: "/projects/large/appie mockup.png",
      github: "https://github.com/yousiefhamed/appie/",
      live: "https://appie-hamed.vercel.app",
      technologies: [
        "html",
        "css",
        "figma",
        "git",
        "github",
        "scss",
        "vercel",
        "vscode",
      ],
      features: [
        {
          title: "Key Business Value",
          list: [
            "Enhanced User Engagement: Provided a visually appealing and informative landing page to attract potential users.",
            "Improved Conversion Rates: Optimized the landing page layout to increase sign-ups and conversions.",
            "Cost-effective Solution: Implemented a high-quality landing page without the need for complex WordPress integration.",
          ],
        },
      ],
    },
    {
      title: "Yusuf Mahran's Portfolio Website",
      desc: [
        {
          title: "Overview",
          content:
            "The Portfolio Website project involved creating a personal portfolio website using Next.js, a popular React framework. The goal was to showcase my skills, projects, and achievements in a visually appealing and interactive manner.",
        },
        {
          title: "Description",
          content:
            "Developed a portfolio website using Next.js, a popular React framework. The website features a clean and modern design, showcasing my skills, projects, and achievements in a visually appealing and interactive manner.",
        },
      ],
      img: "/projects/large/new-portfolio mockup.png",
      github: "https://github.com/yusuf-mahran/yusuf-mahran-portfolio",
      live: "#",
      technologies: [
        "nextjs",
        "react",
        "typescript",
        "tailwindcss",
        "git",
        "github",
        "vercel",
        "vscode",
      ],
      features: [
        {
          title: "Key Features",
          list: [
            "Responsive Design: Ensured compatibility across various devices and screen sizes.",
            "Performance Optimization: Followed best practices to enhance load times and overall user experience.",
            "Clean and Maintainable Code: Wrote well-structured Next.js components to facilitate future updates and modifications.",
          ],
        },
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="w-full flex flex-col justify-center items-start gap-10"
    >
      <div className="w-full flex justify-between items-center flex-wrap gap-8">
        <Heading>Projects that I&apos;m Proud Of</Heading>
        {/* <Btn href="/projects">
          Explore All Projects <FaArrowRightLong />
        </Btn> */}
      </div>
      <div className="projects-slider-container w-fit grid 3xl:grid-cols-2 justify-start items-stretch mx-auto">
        {featuredProjects.map((project, index) => (
          <ProjectCardLarge
            key={index}
            projectDetails={project}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
