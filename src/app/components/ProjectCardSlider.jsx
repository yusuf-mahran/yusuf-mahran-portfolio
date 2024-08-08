import Image from "next/image";
import SubHeading from "../utilities/SubHeading";
import Line from "../utilities/Line";
import Para from "../utilities/Para";
import Btn from "../utilities/Btn";
import { HiExternalLink } from "react-icons/hi";
import { FaReadme } from "react-icons/fa";
import ProjectCardInfo from "./ProjectCardInfo";
import { useEffect, useState } from "react";

export default function ProjectCardSlider({ projectDetails }) {
  const [toggleInfoCard, setToggleInfoCard] = useState(false);

  const { title, desc, img, live, github } = projectDetails;

  const handleClick = () => {
    setToggleInfoCard((prev) => !prev);
  };

  return (
    <div className="project-card max-w-full px-[20px] flex-grow-0 flex-shrink-0 pb-10">
      <div className="bg-white flex flex-col gap-5 justify-start items-center w-full h-full rounded-lg shadow-xl">
        <Image
          src={img}
          alt={`${title} Mockup`}
          width={400}
          height={236}
          className="w-full rounded-lg shadow-md"
        />
        <div className="w-full flex justify-center items-center text-center flex-col gap-3 px-2 pb-7">
          <SubHeading size="22px">{title}</SubHeading>
          <Line width="30%" />
          <Para>
            {desc[0].title
              ? desc[0].content.length < 75
                ? desc[0].content
                : `${desc[0].content.slice(0, 75)}...`
              : desc[0].length < 75
              ? desc[0]
              : `${desc[0].slice(0, 75)}...`}
          </Para>
          <div className="flex flex-wrap justify-center items-center gap-5 w-full">
            <Btn href={live} target="_blank">
              <HiExternalLink />
              Live Demo
            </Btn>
            <Btn
              color="bg-white dark:bg-neutral-800"
              href={github}
              target="_blank"
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
            <Btn handleClick={handleClick} color="bg-white dark:bg-neutral-800">
              <FaReadme />
              Read More
            </Btn>
          </div>
        </div>
      </div>
      {toggleInfoCard && (
        <ProjectCardInfo
          projectDetails={projectDetails}
          handleClose={handleClick}
          toggleInfoCard={toggleInfoCard}
        />
      )}
    </div>
  );
}
