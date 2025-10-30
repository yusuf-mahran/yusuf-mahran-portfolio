import { Ruthie } from "next/font/google";
import Line from "../utilities/Line";
import Para from "../utilities/Para";
import Social from "../utilities/Social";
import "./../styles/footer.css";

const ruthie = Ruthie({ subsets: ["latin"], weight: "400" });

export default function Footer() {
  return (
    <footer className="mt-12 w-full md:px-12 px-5 pt-12 pb-2 grid md:grid-cols-12 grid-cols-1 gap-10 relative">
      <div className="bg-100vw bg-gradient"></div>
      <div className="w-full md:col-span-5 flex flex-col justify-center items-center text-center gap-5 max-w-80 md:justify-self-stretch justify-self-center">
        <h3
          className={`${ruthie.className} color-light-gray dark:text-white text-6xl`}
        >
          Yusuf Mahran
        </h3>
        <Line width="100%" />
        <Para color="color-light-gray dark:text-white">
          A passionate frontend engineer who makes a business solutions that
          make a better world
        </Para>
      </div>
      <div className="w-full md:col-span-7">
        <Social color="color-light-gray dark:text-white" />
      </div>
      <div
        className="w-full md:col-span-12 text-center border-t-2
      py-2"
      >
        <Para color="color-light-gray dark:text-white">
          made with ❤️‍🔥 by yusuf mahran 😉
        </Para>
      </div>
    </footer>
  );
}
