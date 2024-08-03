import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";

export default function Home() {
  return (
    <div className="w-full max-w-[1950px] mx-auto">
      <Header />
      <main className="md:px-12 px-5 py-2 flex flex-col justify-center items-center w-full gap-12">
        <Hero />
        <About />
        <Services />
      </main>
      <footer></footer>
    </div>
  );
}
