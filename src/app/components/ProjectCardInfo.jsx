import Image from "next/image";
import Line from "../utilities/Line";
import Para from "../utilities/Para";
import SubHeading from "../utilities/SubHeading";
import Btn from "../utilities/Btn";
import { IoIosClose } from "react-icons/io";
import { HiExternalLink } from "react-icons/hi";
import { useState, useEffect } from "react";

export default function ProjectCardInfo({
  projectDetails,
  handleClose,
  toggleInfoCard,
}) {
  const [animationClass, setAnimationClass] = useState("fade-in");
  const [readMoreBtn, setReadMoreBtn] = useState(
    new Array(projectDetails.desc.length)
  );

  const { title, desc, img, live, github, features, technologies } =
    projectDetails;

  useEffect(() => {
    if (animationClass === "fade-out") {
      const timer = setTimeout(() => handleClose(), 300); // duration of the fade-out animation
      return () => clearTimeout(timer);
    }
  }, [animationClass, handleClose]);

  const handleCloseWithAnimation = (e) => {
    if (
      (e.target.closest("#closeBtn") || !e.target.closest(".info-card")) &&
      toggleInfoCard &&
      e.type === "click"
    ) {
      setAnimationClass("fade-out");
    }
    if (e.key === "Escape" && e.type === "keydown") {
      setAnimationClass("fade-out");
    }
  };

  useEffect(() => {
    if (toggleInfoCard) {
      document.addEventListener("click", handleCloseWithAnimation);
      document.addEventListener("keydown", handleCloseWithAnimation);
    } else {
      document.removeEventListener("click", handleCloseWithAnimation);
      document.removeEventListener("keydown", handleCloseWithAnimation);
    }

    return () => {
      document.removeEventListener("click", handleCloseWithAnimation);
      document.removeEventListener("keydown", handleCloseWithAnimation);
    };
  });

  return (
    <div
      className={`w-screen h-screen z-10 backdrop-blur-lg flex justify-center items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${animationClass}`}
    >
      <div className="info-card md:w-4/5 w-11/12 max-w-[1000px] h-4/5 overflow-y-scroll p-5 bg-white flex flex-col justify-start items-center gap-8 rounded-lg shadow-lg relative border-t-[30px] border-b-[30px] border-white">
        <div className="flex flex-col justify-center items-center gap-2">
          <SubHeading>{title}</SubHeading>
          <Line width="50%" height="3px" color="bg-light-skyblue" />
        </div>
        <Image
          src={img}
          alt={`${title} mockup`}
          width={400}
          height={300}
          className="w-full rounded-lg shadow-lg max-w-[650px]"
        />
        <div className="flex flex-wrap justify-center items-center gap-5 w-full">
          <Btn href={live} target="_blank" minWidth={161}>
            <HiExternalLink />
            Live Demo
          </Btn>
          <Btn
            color="bg-white dark:bg-neutral-800"
            href={github}
            target="_blank"
            minWidth={161}
          >
            <Image
              src="/social/github.png"
              alt="github icon"
              width={20}
              height={20}
              className="w-5 h-5"
            />
            GitHub Repo
          </Btn>
        </div>
        {desc.map((x, i) =>
          x.title ? (
            <Para key={i} size="lg" color="color-dark-gray text-left">
              <span className="color-primary-blue text-xl">{x.title}:</span>{" "}
              {x.content}
            </Para>
          ) : (
            <Para key={i} size="lg" color="color-dark-gray text-center">
              {x}
            </Para>
          )
        )}
        {features.map((feature, i) => (
          <div
            key={i}
            className="w-full bg-light-gray shadow-md rounded-md p-7 pb-10 relative"
          >
            <SubHeading size="22px">{feature.title}</SubHeading>
            <ul>
              {feature.list.map((listItem, i) => (
                <li key={i} className="ml-5 my-2 list-outside list-disc">
                  {listItem}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="w-full flex flex-col gap-2">
          <SubHeading size="22px" align="center">
            Technologies Used
          </SubHeading>
          <ul className="flex justify-center items-center flex-wrap gap-5">
            {technologies.map((tech) => (
              <li key={tech} className=" h-10 w-auto">
                <Image
                  src={`/tech/${tech}.png`}
                  alt={`${tech} icon`}
                  width={100}
                  height={100}
                  className="h-full w-auto object-contain bg-[#fff] shadow-lg rounded-lg px-5 py-2"
                />
              </li>
            ))}
          </ul>
        </div>
        <button
          id="closeBtn"
          onClick={handleCloseWithAnimation}
          className="absolute top-1 right-2"
        >
          <IoIosClose className="text-5xl" />
        </button>
      </div>
    </div>
  );
}
