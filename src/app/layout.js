import { Salsa } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const salsa = Salsa({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Youssef Hamed | Front-end Developer & Web Application Specialist",
  description:
    "Discover the portfolio of Youssef Hamed, a highly skilled front-end developer with over 4 years of experience in building dynamic, user-friendly web applications. Specializing in React, Next.js, and HTML/CSS/JavaScript, Youssef delivers innovative and exceptional digital solutions. Explore Youssef Hamed's projects and see how his expertise can bring your digital visions to life.",
  keywords: [
    "web developer",
    "Youssef Hamed",
    "front-end developer",
    "web developer",
    "React developer",
    "Next.js developer",
    "JavaScript",
    "HTML",
    "CSS",
    "web applications",
    "portfolio",
    "user-friendly design",
    "exceptional user experiences",
    "dynamic web applications",
    "frontend development",
    "full-stack developer",
    "UI/UX design",
  ],
  author: "Youssef Hamed",
  og: {
    title: "Youssef Hamed | Front-end Developer & Web Application Specialist",
    description:
      "Welcome to the portfolio of Youssef Hamed, a versatile frontend developer specializing in creating dynamic and user-friendly web applications. With over 4 years of experience, Youssef Hamed is skilled in utilizing various technologies such as React, Next.js, and HTML/CSS/JavaScript to deliver innovative and exceptional user experiences. Explore Youssef Hamed's projects and discover how he can help bring your digital visions to life.",
    image: "https://youssef-hamed.vercel.app/og-image.jpg", // Ensure you have an appropriate image at this URL
    url: "https://youssef-hamed.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Youssef Hamed | Front-end Developer & Web Application Specialist",
    description:
      "Explore the portfolio of Youssef Hamed, a front-end developer with over 4 years of experience in creating dynamic, user-friendly web applications. Specializing in React, Next.js, and HTML/CSS/JavaScript, Youssef delivers innovative digital solutions. Discover his projects and learn how he can bring your digital visions to life.",
    image: "https://youssef-hamed.vercel.app/twitter-image.jpg", // Ensure you have an appropriate image at this URL
  },
  robots: "index, follow",
  canonical: "https://youssef-hamed.vercel.app",
  language: "en",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={salsa.className}>
        <div className="w-full max-w-[1950px] mx-auto">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
