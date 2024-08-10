"use client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { Cherry_Bomb_One } from "next/font/google";

const CherryBomb = Cherry_Bomb_One({ subsets: ["latin"], weight: "400" });

export default function Hero() {
  return (
    <section
      id="home"
      className="py-7 flex flex-col justify-evenly items-center gap-8"
    >
      <div className="w-full grid md:grid-cols-2 grid-cols-1 justify-center items-center md:text-left text-center">
        <div className="flex justify-center items-start flex-col gap-8">
          <div className="md:mx-0 mx-auto">
            <h1 className="text-4xl">Hi, I&apos;m Youssef Hamed</h1>
            <p
              suppressHydrationWarning
              className={`${CherryBomb.className} text-5xl title-gradient leading-[60px]`}
            >
              Front-end Developer
            </p>
          </div>
          <div>
            <p className="text-xl">
              I specialize in creating intuitive, effective digital products for
              startups and businesses, aiming to deliver seamless user
              experiences.
            </p>
          </div>
          <div className="md:mx-0 mx-auto">
            <Link
              href="/#projects"
              className="btn flex justify-center items-center gap-3"
            >
              View Work
              <FaArrowRightLong />
            </Link>
          </div>
        </div>
        <Image
          src="/profile.png"
          alt="youssef hamed profile"
          width={500}
          height={500}
          className="w-full max-w-[624px] mx-auto"
        />
      </div>
      <div className="bg-white lg:w-4/5 w-full min-h-36 lg:rounded-full rounded-md mx-auto flex justify-between items-center lg:flex-row flex-col px-5 lg:py-12 py-6 lg:after:block after:hidden after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 bg-light-gray after after:h-[2px] bg-screen shadow-lg">
        <div className="lg:w-auto w-full flex flex-row justify-center items-center gap-3 flex-grow lg:py-0 py-5 lg:border-r-2 border-r-0 lg:border-b-0 border-b-2 border-r-light-gray">
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="md:w-14 w-10"
          >
            <g clipPath="url(#clip0_14_75)">
              <path
                d="M20.3 6.09835C18.7 6.88523 18 8.06556 18 10.0328V12.7869H10.6C0.899958 12.7869 -0.200042 13.7705 0.199958 21.9344C0.599958 29.7049 1.89996 30.4918 15.3 30.4918C23.3 30.4918 25 30.1967 25 29.0164C25 27.9344 26.2 27.541 30 27.541C33.8 27.541 35 27.9344 35 29.0164C35 30.1967 36.7 30.4918 44.8 30.4918C58.1 30.4918 59.4 29.7049 59.8 21.9344C60.2 13.7705 59.1 12.7869 49.4 12.7869C42.2 12.7869 42 12.6885 42 10.4262C42 6.49179 38.6 4.91802 30 5.01638C25.9 5.01638 21.5 5.50819 20.3 6.09835ZM37 11.8033C37 12.3934 34 12.7869 30 12.7869C26 12.7869 23 12.3934 23 11.8033C23 11.2131 26 10.8197 30 10.8197C34 10.8197 37 11.2131 37 11.8033Z"
                fill="#70BCE3"
              />
              <path
                d="M-1.28113e-05 41.6065C-1.28113e-05 55.9672 -1.90001 55.082 29.5 55.082C47.6 55.082 55.2 54.6885 57 53.8033C59.4 52.6229 59.5 52.1311 59.8 41.9016L60.1 31.1803L57.8 31.8688C56.5 32.1639 50.9 32.459 45.3 32.459H35V34.918C35 37.1803 34.7 37.377 30 37.377C25.3 37.377 25 37.1803 25 34.918V32.459H14.8C9.09999 32.459 3.49999 32.1639 2.29999 31.8688C-1.27796e-05 31.2787 -1.28113e-05 31.377 -1.28113e-05 41.6065Z"
                fill="#70BCE3"
              />
            </g>
            <defs>
              <clipPath id="clip0_14_75">
                <rect width="60" height="60" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <div>
            <p className="md:text-xl text-base">+4 Years</p>
            <p className="md:text-xl text-base">Experiences</p>
          </div>
        </div>
        <div className="lg:w-auto w-full flex flex-row justify-center items-center gap-3 flex-grow lg:py-0 py-5 lg:border-r-2 border-r-0 lg:border-b-0 border-b-2 border-r-light-gray">
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="md:w-14 w-10"
          >
            <g clipPath="url(#clip0_14_79)">
              <path
                d="M0.983595 10.8197C0.393431 12 0.0983488 17.3115 0.196709 23.8033L0.491791 34.918L15.1475 35.2131C29.1147 35.4098 29.9016 35.3115 32.0656 33.3443C33.6393 31.8689 34.2295 30.4918 33.8361 29.0164C33.2459 26.5574 35.4098 24.2951 38.6557 24.1967C39.8361 24.0984 42.0983 23.1148 43.5738 22.0328C45.7377 20.2623 46.2295 19.082 46.2295 15.541C46.2295 13.1803 45.7377 10.7213 45.0492 10.0328C44.1639 9.14754 37.8688 8.85246 22.918 8.85246C3.04917 8.85246 1.9672 8.95082 0.983595 10.8197ZM25.5738 15.6393C25.5738 18.4918 22.2295 30.4918 21.4426 30.4918C20.8524 30.4918 20.6557 29.5082 20.9508 28.2295C21.2459 27.0492 22.0328 23.5082 22.7213 20.3607C23.4098 17.3115 24.2951 14.7541 24.7869 14.7541C25.1803 14.7541 25.5738 15.1475 25.5738 15.6393ZM19.6721 18.1967C19.6721 18.3934 18.0983 19.4754 16.1311 20.459L12.4918 22.3279L16.2295 24.5902C18.2951 25.8689 19.4754 27.1475 18.8852 27.3443C17.6065 27.7377 9.83605 23.6066 9.83605 22.4262C9.83605 22.0328 11.5082 20.8525 13.5738 19.7705C17.1147 17.9016 19.6721 17.2131 19.6721 18.1967ZM32.8524 19.7705C34.8197 20.9508 36.3934 22.2295 36.3934 22.7213C36.3934 23.5082 29.4098 27.541 28.0328 27.541C26.3606 27.541 27.9344 25.6721 30.4918 24.5902C32.1639 23.9016 33.4426 23.0164 33.4426 22.623C33.4426 22.2295 32.1639 21.3443 30.4918 20.6557C28.918 19.9672 27.541 19.082 27.541 18.5902C27.541 17.2131 29.1147 17.5082 32.8524 19.7705Z"
                fill="#70BCE3"
              />
              <path
                d="M43.377 24.6885C42 25.7705 40.1311 26.459 39.1475 26.2623C37.082 25.6721 35.2131 27.7377 36 29.8033C36.2951 30.6885 35.7049 32.1639 34.5246 33.3443C33.3443 34.5246 32.459 35.8033 32.459 36.3935C32.459 36.8853 33.3443 38.2623 34.5246 39.4426C35.7049 40.623 36.2951 42.0984 36 42.9836C35.1148 45.0492 37.082 47.1148 39.2459 46.5246C40.3279 46.2295 42 46.918 43.1803 48.0984C45.7377 50.6558 46.8197 50.6558 48.0984 48.4918C48.6885 47.3115 50.2623 46.7213 52.3279 46.7213C55.2787 46.7213 55.5738 46.4262 56.1639 42.9836C56.459 40.918 57.6393 38.6558 58.6229 37.8689C60.4918 36.5902 60.3934 36.4918 58.3279 34.4262C56.9508 33.2459 56.0656 31.1803 56.0656 29.5082C56.0656 26.8525 55.7705 26.5574 53.1148 26.5574C51.3443 26.5574 49.4754 25.7705 48.4918 24.5902C46.4262 22.2295 46.3279 22.2295 43.377 24.6885ZM50.1639 32.459C51.2459 33.541 52.1311 35.3115 52.1311 36.3935C52.1311 38.9508 48.7869 42.2951 46.0328 42.2951C40.8197 42.2951 38.2623 35.0164 42.4918 32.0656C45.4426 30 47.8033 30.0984 50.1639 32.459Z"
                fill="#70BCE3"
              />
              <path
                d="M43.4754 33.6394C41.0164 36.0984 42.8853 40.3279 46.4262 40.3279C47.3115 40.3279 48.5902 39.4426 49.1803 38.3607C51.3443 34.4262 46.623 30.4918 43.4754 33.6394Z"
                fill="#70BCE3"
              />
              <path
                d="M0 38.459C0 39.0492 0.491803 40.3279 0.983607 41.4098C1.96721 43.1803 3.2459 43.2787 18.1967 43.2787C27.1475 43.2787 34.4262 42.9836 34.4262 42.6885C34.4262 42.3935 33.4426 41.0164 32.2623 39.7377C30.0984 37.4754 29.5082 37.3771 15.0492 37.3771C5.01639 37.3771 0 37.7705 0 38.459Z"
                fill="#70BCE3"
              />
              <path
                d="M18.1967 47.2131C17.8033 48.4918 16.7213 49.1803 15.1476 49.1803C13.8689 49.1803 12.7869 49.5738 12.7869 50.1639C12.7869 51.4426 33.1475 51.4426 33.9344 50.1639C34.3279 49.5738 33.3443 49.1803 31.6721 49.1803C29.6066 49.1803 28.623 48.5902 28.2295 47.2131C27.8361 45.6393 26.8525 45.2459 23.3115 45.2459C19.6721 45.2459 18.6885 45.6393 18.1967 47.2131Z"
                fill="#70BCE3"
              />
            </g>
            <defs>
              <clipPath id="clip0_14_79">
                <rect width="60" height="60" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <div>
            <p className="md:text-xl text-base">+20</p>
            <p className="md:text-xl text-base">Projects</p>
          </div>
        </div>
        <div className="lg:w-auto w-full flex flex-row justify-center items-center gap-3 flex-grow lg:py-0 py-5">
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="md:w-14 w-10"
          >
            <path
              d="M24.5 3.44263C18.5 9.24591 25.1 18.9836 32.9 15.8361C35.8 14.5574 38 11.2131 38 7.7705C38 4.72132 33.6 0.983614 30 0.983614C28.1 0.983614 26 1.86886 24.5 3.44263Z"
              fill="#70BCE3"
            />
            <path
              d="M41 9.14754C34.5 18.6885 34.2 18.7869 20.4 15.7377C13.4 14.1639 10.5 13.8689 9.7 14.6557C7.9 16.4262 10.5 18.0984 20.2 21.6393C28.5 24.6885 29 25.082 30 28.4262C31.2 32.7541 31.3 50.1639 30.1 52.0328C29.5 52.918 28.3 53.2131 26.4 52.7213C20.4 51.2459 18.5 51.541 18.2 53.8033C17.5 58.4262 31.1 60.9836 34.9 56.9508C35.9 55.8689 37.3 52.918 37.9 50.5574C38.5 48.1967 39.4 46.2295 39.9 46.2295C41.4 46.2295 42.3 50.2623 41.2 51.3443C39.6 52.918 42.4 57.6393 45.2 58.3279C50 59.6066 51.4 54.1967 48.6 44.6557C47.8 42 46.7 36.7869 46 33.0492C45.4 29.3115 44.2 24.6885 43.4 22.8197C42 19.4754 42.1 19.1803 46.5 11.1148C49 6.59017 50.8 2.45902 50.5 1.96722C48.9 -0.491798 46.1 1.57377 41 9.14754Z"
              fill="#70BCE3"
            />
          </svg>
          <div>
            <p className="md:text-xl text-base">+15</p>
            <p className="md:text-xl text-base">Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
}
