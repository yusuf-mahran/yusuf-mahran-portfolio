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
      title: "project 1",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi sunt voluptate, ut dignissimos assumenda eligendi explicabo ratione asperiores optio illum, ipsum sed hic eos nisi cumque qui enim, consequuntur quo.",
      img: "/projects/bin-sleem mockup.png",
      github: "https://github.com/example",
      live: "https://example.com",
      technologies: ["reactjs", "nextjs", "vercel", "html", "css"],
      features: [
        {
          title: "Key Features",
          list: [
            "lorem ipsum dolor sit amet erat, consectetur adipiscing",
            "lorem ipsum dolor sit amet erat, consect",
            "lorem ipsum dolor sit amet erat, consect",
          ],
        },
        {
          title: "Key Features",
          list: [
            "lorem ipsum dolor sit amet erat, consectetur adipiscing",
            "lorem ipsum dolor sit amet erat, consect",
            "lorem ipsum dolor sit amet erat, consect",
          ],
        },
        {
          title: "Key Features",
          list: [
            "lorem ipsum dolor sit amet erat, consectetur adipiscing",
            "lorem ipsum dolor sit amet erat, consect",
            "lorem ipsum dolor sit amet erat, consect",
          ],
        },
      ],
    },
    {
      title: "project 2",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi sunt voluptate, ut dignissimos assumenda eligendi explicabo ratione asperiores optio illum, ipsum sed hic eos nisi cumque qui enim, consequuntur quo.",
      img: "/projects/bin-sleem mockup.png",
      github: "https://github.com/example",
      live: "https://example.com",
      technologies: ["reactjs", "nextjs", "vercel", "html", "css"],
      features: [
        {
          title: "Key Features",
          list: [
            "lorem ipsum dolor sit amet erat, consectetur adipiscing",
            "lorem ipsum dolor sit amet erat, consect",
            "lorem ipsum dolor sit amet erat, consect",
          ],
        },
        {
          title: "Key Features",
          list: [
            "lorem ipsum dolor sit amet erat, consectetur adipiscing",
            "lorem ipsum dolor sit amet erat, consect",
            "lorem ipsum dolor sit amet erat, consect",
          ],
        },
        {
          title: "Key Features",
          list: [
            "lorem ipsum dolor sit amet erat, consectetur adipiscing",
            "lorem ipsum dolor sit amet erat, consect",
            "lorem ipsum dolor sit amet erat, consect",
          ],
        },
      ],
    },
    {
      title: "project 3",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi sunt voluptate, ut dignissimos assumenda eligendi explicabo ratione asperiores optio illum, ipsum sed hic eos nisi cumque qui enim, consequuntur quo.",
      img: "/projects/bin-sleem mockup.png",
      github: "https://github.com/example",
      live: "https://example.com",
      technologies: ["reactjs", "nextjs", "vercel", "html", "css"],
      features: [
        {
          title: "Key Features",
          list: [
            "lorem ipsum dolor sit amet erat, consectetur adipiscing",
            "lorem ipsum dolor sit amet erat, consect",
            "lorem ipsum dolor sit amet erat, consect",
          ],
        },
        {
          title: "Key Features",
          list: [
            "lorem ipsum dolor sit amet erat, consectetur adipiscing",
            "lorem ipsum dolor sit amet erat, consect",
            "lorem ipsum dolor sit amet erat, consect",
          ],
        },
        {
          title: "Key Features",
          list: [
            "lorem ipsum dolor sit amet erat, consectetur adipiscing",
            "lorem ipsum dolor sit amet erat, consect",
            "lorem ipsum dolor sit amet erat, consect",
          ],
        },
      ],
    },
    {
      title: "project 4",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi sunt voluptate, ut dignissimos assumenda eligendi explicabo ratione asperiores optio illum, ipsum sed hic eos nisi cumque qui enim, consequuntur quo.",
      img: "/projects/bin-sleem mockup.png",
      github: "https://github.com/example",
      live: "https://example.com",
      technologies: ["reactjs", "nextjs", "vercel", "html", "css"],
      features: [
        {
          title: "Key Features",
          list: [
            "lorem ipsum dolor sit amet erat, consectetur adipiscing",
            "lorem ipsum dolor sit amet erat, consect",
            "lorem ipsum dolor sit amet erat, consect",
          ],
        },
        {
          title: "Key Features",
          list: [
            "lorem ipsum dolor sit amet erat, consectetur adipiscing",
            "lorem ipsum dolor sit amet erat, consect",
            "lorem ipsum dolor sit amet erat, consect",
          ],
        },
        {
          title: "Key Features",
          list: [
            "lorem ipsum dolor sit amet erat, consectetur adipiscing",
            "lorem ipsum dolor sit amet erat, consect",
            "lorem ipsum dolor sit amet erat, consect",
          ],
        },
      ],
    },
    {
      title: "project 5",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi sunt voluptate, ut dignissimos assumenda eligendi explicabo ratione asperiores optio illum, ipsum sed hic eos nisi cumque qui enim, consequuntur quo.",
      img: "/projects/bin-sleem mockup.png",
      github: "https://github.com/example",
      live: "https://example.com",
      technologies: ["reactjs", "nextjs", "vercel", "html", "css"],
      features: [
        {
          title: "Key Features",
          list: [
            "lorem ipsum dolor sit amet erat, consectetur adipiscing",
            "lorem ipsum dolor sit amet erat, consect",
            "lorem ipsum dolor sit amet erat, consect",
          ],
        },
        {
          title: "Key Features",
          list: [
            "lorem ipsum dolor sit amet erat, consectetur adipiscing",
            "lorem ipsum dolor sit amet erat, consect",
            "lorem ipsum dolor sit amet erat, consect",
          ],
        },
        {
          title: "Key Features",
          list: [
            "lorem ipsum dolor sit amet erat, consectetur adipiscing",
            "lorem ipsum dolor sit amet erat, consect",
            "lorem ipsum dolor sit amet erat, consect",
          ],
        },
      ],
    },
    {
      title: "project 6",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi sunt voluptate, ut dignissimos assumenda eligendi explicabo ratione asperiores optio illum, ipsum sed hic eos nisi cumque qui enim, consequuntur quo.",
      img: "/projects/bin-sleem mockup.png",
      github: "https://github.com/example",
      live: "https://example.com",
      technologies: ["reactjs", "nextjs", "vercel", "html", "css"],
      features: [
        {
          title: "Key Features",
          list: [
            "lorem ipsum dolor sit amet erat, consectetur adipiscing",
            "lorem ipsum dolor sit amet erat, consect",
            "lorem ipsum dolor sit amet erat, consect",
          ],
        },
        {
          title: "Key Features",
          list: [
            "lorem ipsum dolor sit amet erat, consectetur adipiscing",
            "lorem ipsum dolor sit amet erat, consect",
            "lorem ipsum dolor sit amet erat, consect",
          ],
        },
        {
          title: "Key Features",
          list: [
            "lorem ipsum dolor sit amet erat, consectetur adipiscing",
            "lorem ipsum dolor sit amet erat, consect",
            "lorem ipsum dolor sit amet erat, consect",
          ],
        },
      ],
    },
    {
      title: "project 7",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi sunt voluptate, ut dignissimos assumenda eligendi explicabo ratione asperiores optio illum, ipsum sed hic eos nisi cumque qui enim, consequuntur quo.",
      img: "/projects/bin-sleem mockup.png",
      github: "https://github.com/example",
      live: "https://example.com",
      technologies: ["reactjs", "nextjs", "vercel", "html", "css"],
      features: [
        {
          title: "Key Features",
          list: [
            "lorem ipsum dolor sit amet erat, consectetur adipiscing",
            "lorem ipsum dolor sit amet erat, consect",
            "lorem ipsum dolor sit amet erat, consect",
          ],
        },
        {
          title: "Key Features",
          list: [
            "lorem ipsum dolor sit amet erat, consectetur adipiscing",
            "lorem ipsum dolor sit amet erat, consect",
            "lorem ipsum dolor sit amet erat, consect",
          ],
        },
        {
          title: "Key Features",
          list: [
            "lorem ipsum dolor sit amet erat, consectetur adipiscing",
            "lorem ipsum dolor sit amet erat, consect",
            "lorem ipsum dolor sit amet erat, consect",
          ],
        },
      ],
    },
    {
      title: "project 8",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi sunt voluptate, ut dignissimos assumenda eligendi explicabo ratione asperiores optio illum, ipsum sed hic eos nisi cumque qui enim, consequuntur quo.",
      img: "/projects/bin-sleem mockup.png",
      github: "https://github.com/example",
      live: "https://example.com",
      technologies: ["reactjs", "nextjs", "vercel", "html", "css"],
      features: [
        {
          title: "Key Features",
          list: [
            "lorem ipsum dolor sit amet erat, consectetur adipiscing",
            "lorem ipsum dolor sit amet erat, consect",
            "lorem ipsum dolor sit amet erat, consect",
          ],
        },
        {
          title: "Key Features",
          list: [
            "lorem ipsum dolor sit amet erat, consectetur adipiscing",
            "lorem ipsum dolor sit amet erat, consect",
            "lorem ipsum dolor sit amet erat, consect",
          ],
        },
        {
          title: "Key Features",
          list: [
            "lorem ipsum dolor sit amet erat, consectetur adipiscing",
            "lorem ipsum dolor sit amet erat, consect",
            "lorem ipsum dolor sit amet erat, consect",
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
        <Heading>Projects that I Proud Of</Heading>
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
