import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="w-full max-w-[1950px] mx-auto">
      <Header />
      <main>
        <Hero />
      </main>
      <footer></footer>
    </div>
  );
}
