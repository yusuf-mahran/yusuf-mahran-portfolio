import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import ProjectsSlider from "./components/ProjectsSlider";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <main className="md:px-12 px-5 py-2 flex flex-col justify-center items-center w-full gap-12">
        <Hero />
        <About />
        <Services />
        <ProjectsSlider />
        <Contact />
      </main>
    </>
  );
}
