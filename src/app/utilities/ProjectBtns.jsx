import Image from "next/image";
import Btn from "./Btn";
import { HiExternalLink } from "react-icons/hi";
import { FaReadme } from "react-icons/fa";

const ProjectBtns = ({ demo, code, handleClick, alwaysCenter }) => {
  return (
    <div
      className={`flex flex-wrap items-center gap-5 w-full ${
        alwaysCenter ? "justify-center" : "lg:justify-start justify-center"
      }`}
    >
      <Btn href={demo} target="_blank" minWidth={161}>
        <HiExternalLink />
        Live Demo
      </Btn>
      <Btn
        color="bg-white dark:bg-neutral-800"
        href={code}
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
      <Btn
        handleClick={handleClick}
        color="bg-white dark:bg-neutral-800"
        minWidth={161}
      >
        <FaReadme />
        Read More
      </Btn>
    </div>
  );
};

export default ProjectBtns;
