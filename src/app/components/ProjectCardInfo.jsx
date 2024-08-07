import Image from "next/image";
import Line from "../utilities/Line";
import Para from "../utilities/Para";
import SubHeading from "../utilities/SubHeading";
import Btn from "../utilities/Btn";
import { IoIosClose } from "react-icons/io";
import { HiExternalLink } from "react-icons/hi";

export default function ProjectCardInfo({ projectDetails, handleClose }) {
  const { title, desc, img, live, github, features, technologies } =
    projectDetails;

  return (
    <div className="w-screen h-screen z-10 backdrop-blur-lg flex justify-center items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="info-card w-4/5 h-4/5 overflow-y-scroll p-5 bg-white flex flex-col justify-start items-center gap-8 rounded-lg shadow-lg relative border-t-[30px] border-b-[30px] border-white">
        <div className="flex flex-col justify-center items-center gap-2">
          <SubHeading>{title}</SubHeading>
          <Line width="50%" height="3px" color="bg-light-skyblue" />
        </div>
        <Para size="lg" color="color-dark-gray text-center">
          {desc}
        </Para>
        <Image
          src={img}
          alt="bin-sleem mockup"
          width={400}
          height={300}
          className="w-full rounded-lg shadow-lg max-w-[650px]"
        />
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
        </div>
        {features.map((feature, i) => (
          <div
            key={i}
            className="w-full bg-white rounded-md shadow-md p-7 pb-10 relative"
          >
            <SubHeading size="22px">{feature.title}</SubHeading>
            <ul>
              {feature.list.map((listItem, i) => (
                <li key={i} className="list-inside list-disc">
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
              <li key={tech} className="h-8 w-auto">
                <Image
                  src={`/tech/${tech}.png`}
                  alt={`${tech} icon`}
                  width={100}
                  height={100}
                  className="h-full w-auto object-contain"
                />
              </li>
            ))}
          </ul>
        </div>
        <button onClick={handleClose} className="absolute top-1 right-2">
          <IoIosClose className="text-5xl" />
        </button>
      </div>
    </div>
  );
}
