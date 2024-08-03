import Image from "next/image";
import Heading from "../utilities/Heading";
import Para from "../utilities/Para";
import Link from "next/link";
import Btn from "../utilities/Btn";
import Social from "../utilities/Social";

export default function About() {
  return (
    <section className="grid lg:grid-cols-10 grid-cols-1 justify-center lg:items-start items-center gap-10">
      <div className="py-7 flex flex-col justify-center items-start gap-7 lg:order-2 lg:col-span-6">
        <Heading>My Success Story</Heading>
        <Para color="color-primary-blue" indent={true}>
          I&apos;m a frontend developer with over 4 years of experience working
          with React.js and Next.js. My journey began with tutorials and
          personal projects, and I have since moved on to freelancing and
          working with startups. I am currently pursuing a fullstack roadmap
          with the MERN stack to expand my expertise and deliver comprehensive
          solutions.
        </Para>
        <Para color="color-primary-blue" indent={true}>
          My goal is to help businesses and startups build intuitive and
          effective digital products. I enjoy collaborating with
          cross-functional teams to create seamless user experiences and bring
          innovative ideas to life.
        </Para>
        <Social />
        <div className="flex justify-start items-center flex-wrap gap-3">
          <Para color="color-primary-blue">Are you still Curious?...</Para>
          <Btn href="/about">Go to my world!</Btn>
        </div>
      </div>
      <div className="lg:order-1 lg:col-span-4 mx-auto w-full">
        <Image
          src="/about-profile.png"
          alt="about profile img"
          width={2840}
          height={2840}
          className="w-full p-4 lg:max-w-none max-w-[450px] mx-auto"
        />
      </div>
    </section>
  );
}
