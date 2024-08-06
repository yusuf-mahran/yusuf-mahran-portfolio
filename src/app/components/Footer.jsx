import { Ruthie } from "next/font/google";
import Line from "../utilities/Line";
import Para from "../utilities/Para";
import Social from "../utilities/Social";

const ruthie = Ruthie({ subsets: ["latin"], weight: "400" });

export default function Footer() {
  return (
    <footer className="mt-12 bg-screen bg-gradient w-full md:px-12 px-5 pt-12 pb-2 grid md:grid-cols-12 grid-cols-1 gap-10">
      <div className="w-full md:col-span-5 flex flex-col justify-center items-center text-center gap-5 max-w-80">
        <h3 className={`${ruthie.className} text-6xl`}>Youssef Hamed</h3>
        <Line width="100%" />
        <Para color="color-light-gray">
          A passionate frontend engineer who makes a business solutions that
          make a better world
        </Para>
      </div>
      <div className="w-full md:col-span-7">
        <Social color="color-light-gray" />
      </div>
      <div
        className="w-full md:col-span-12 text-center border-t-2
      py-2"
      >
        <Para color="color-light-gray">made with ❤️‍🔥 by youssef hamed 😉</Para>
      </div>
    </footer>
  );
}
