import Image from "next/image";
import SubHeading from "../utilities/SubHeading";
import Line from "../utilities/Line";
import Para from "../utilities/Para";
import ProjectCardInfo from "./ProjectCardInfo";
import { useState } from "react";
import ProjectBtns from "../utilities/ProjectBtns";

export default function ProjectCardSlider({ projectDetails, index }) {
  const [toggleInfoCard, setToggleInfoCard] = useState(false);

  const { title, desc, img, live, github } = projectDetails;

  const handleClick = () => {
    setToggleInfoCard((prev) => !prev);
  };

  return (
    <div className="max-w-full px-[20px] flex-grow-0 flex-shrink-0 pb-10">
      <div className="bg-white grid grid-cols-1 lg:grid-cols-2 gap-5 justify-start items-center w-full h-full rounded-lg shadow-xl max-w-[720px] lg:max-w-[1200px] overflow-hidden">
        <Image
          src={img}
          alt={`${title} Mockup`}
          width={400}
          height={236}
          className={`w-full h-full object-cover rounded-lg shadow-lg ${
            index % 2 !== 0 ? "lg:order-2 3xl:order-1" : ""
          }`}
        />
        <div
          className={`w-full flex justify-center lg:items-start items-center lg:text-left text-center flex-col gap-3 px-5 py-8 pb-7 ${
            index % 2 !== 0 ? "lg:order-1 3xl:order-2" : ""
          }`}
        >
          <SubHeading size="22px">{title}</SubHeading>
          <Line width="30%" />
          <div className="w-full 3xl:block lg:hidden block">
            <Para>
              {desc[0].title
                ? desc[0].content.length < 100
                  ? desc[0].content
                  : `${desc[0].content.slice(0, 100)}...`
                : desc[0].length < 100
                ? desc[0]
                : `${desc[0].slice(0, 100)}...`}
            </Para>
          </div>
          <div className="w-full 3xl:hidden lg:block hidden">
            <Para>
              {desc[0].title
                ? desc[0].content.length < 200
                  ? desc[0].content
                  : `${desc[0].content.slice(0, 200)}...`
                : desc[0].length < 200
                ? desc[0]
                : `${desc[0].slice(0, 200)}...`}
            </Para>
          </div>
          <ProjectBtns demo={live} code={github} handleClick={handleClick} />
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
