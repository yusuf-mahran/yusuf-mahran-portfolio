import Image from "next/image";
import SubHeading from "../utilities/SubHeading";
import Line from "../utilities/Line";
import Para from "../utilities/Para";
import Btn from "../utilities/Btn";
import { HiExternalLink } from "react-icons/hi";
import { FaReadme } from "react-icons/fa";

export default function ProjectCardSlider({ title, desc }) {
  return (
    <div className="project-card max-w-full px-[20px] flex-grow-0 flex-shrink-0 pb-10">
      <div className="bg-white flex flex-col gap-5 justify-center items-center w-full rounded-lg shadow-xl">
        <Image
          src="/projects/bin-sleem mockup.png"
          alt="Bin Saleem Project Mockup"
          width={400}
          height={236}
          className="w-full rounded-lg"
        />
        <div className="w-full flex justify-center items-center text-center flex-col gap-3 px-2 pb-7">
          <SubHeading size="22px">{title}</SubHeading>
          <Line width="30%" />
          <Para>
            {desc
              ? desc.length < 75
                ? x
                : `${desc.slice(0, 75)}...`
              : "The Restaurant Online Menu project involves a digital menu that ca..."}
          </Para>
          <div className="flex flex-wrap justify-center items-center gap-5 w-full">
            <Btn href="#" target="_blank">
              <HiExternalLink />
              Live Demo
            </Btn>
            <Btn color="bg-white dark:bg-neutral-800" href="#" target="_blank">
              <Image
                src="/social/github.png"
                alt="github icon"
                width={20}
                height={20}
                className="w-5 h-5"
              />
              GitHub Repo
            </Btn>
            <Btn color="bg-white dark:bg-neutral-800">
              <FaReadme />
              Read More
            </Btn>
          </div>
        </div>
      </div>
    </div>
  );
}
