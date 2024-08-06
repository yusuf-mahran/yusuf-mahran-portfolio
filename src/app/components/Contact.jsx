"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Btn from "../utilities/Btn";
import Heading from "../utilities/Heading";
import Line from "../utilities/Line";
import Para from "../utilities/Para";
import Social from "../utilities/Social";
import SubHeading from "../utilities/SubHeading";
import { IoIosArrowDown } from "react-icons/io";

export default function Contact() {
  const [countriesCodes, setCountriesCodes] = useState([]);

  const [displayCountryCode, setDisplayCountryCode] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState("🇵🇸 +9");
  const countryCodeRef = useRef(null);

  const [displayWayOfContact, setDisplayWayOfContact] = useState(false);
  const [selectedWayOfContact, setSelectedWayOfContact] = useState("whatsapp");
  const wayOfContactRef = useRef(null);

  const waysOfContact = [
    "whatsapp",
    "email",
    "telegram",
    "facebook",
    "instagram",
    "linkedin",
    "x (twitter)",
    "discord",
    "other",
  ];

  const getCountriesCodes = async () => {
    try {
      const response = await fetch(
        "https://restcountries.com/v3.1/all?fields=cca2,flag,idd"
      );
      const data = await response.json();
      const sortedCountries = data.sort((a, b) => a.cca2.localeCompare(b.cca2));
      setCountriesCodes(sortedCountries);
    } catch (error) {
      console.error("Error fetching countries data:", error);
    }
  };

  const handleClickOutside = (event) => {
    if (wayOfContactRef.current) {
      setDisplayWayOfContact(false);
    }

    if (countryCodeRef.current) {
      setDisplayCountryCode(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [displayCountryCode, displayWayOfContact]);

  useEffect(() => {
    getCountriesCodes();
  }, []);

  return (
    <section
      id="contact"
      className="w-full grid md:grid-cols-2 grid-cols-1 justify-center items-start gap-5"
    >
      <div className="w-full flex flex-col justify-center items-start gap-7">
        <Heading>Let&apos;s Collaborate</Heading>
        <Para color="color-primary-blue" indent={true}>
          Ready to start your project? Let&apos;s talk about your ideas, needs,
          and expectations. I&apos;m here to help you make the most of our time
          together. Whether you&apos;re looking for a fresh new website, a
          powerful application, or seamless integration of modern technologies,
          I&apos;m excited to bring your vision to life. Fill out the form
          below, and let&apos;s create something amazing together!
        </Para>
        <Social />
      </div>
      <form className="flex flex-col justify-center items-center gap-8 py-12 px-8 rounded-lg bg-form">
        <div className="w-full flex justify-center items-center flex-col gap-3">
          <SubHeading align="center">
            We&apos;re delighted to hear from you
          </SubHeading>
          <Line width="150px" color="bg-light-skyblue" height="4px" />
        </div>
        <label className="w-full flex flex-col justify-center items-start gap-2">
          <Para color="bg-primary-blue">Name:</Para>
          <input
            className="w-full h-14 px-5 rounded-md bg-white"
            type="text"
            placeholder="Ex. Youssef Hamed"
            required
          />
        </label>
        <label className="w-full flex flex-col justify-center items-start gap-2 relative">
          <Para color="bg-primary-blue">Preferred Way of Contact:</Para>
          <p
            role="button"
            onClick={(e) => {
              setDisplayWayOfContact((prev) => !prev);
              if (displayCountryCode) setDisplayCountryCode(false); // Close country code dropdown if open
            }}
            className="w-full absolute top-[40px] left-0 px-5 translate-y-1/2 flex justify-between items-center gap-5"
          >
            <span className="cursor-pointer flex justify-center items-center gap-3 capitalize">
              <Image
                src={`/social/${selectedWayOfContact}.png`}
                alt={`${selectedWayOfContact} icon`}
                width={20}
                height={20}
                className="shadow-lg"
              />{" "}
              {selectedWayOfContact}
            </span>
            <IoIosArrowDown className="text-lg" />
          </p>
          <input
            className="w-full h-14 pl-[100px] pr-5 rounded-md bg-white"
            type="text"
            disabled={true}
            required
          />
          <div
            ref={wayOfContactRef}
            className={`w-full ${
              displayWayOfContact ? "flex" : "hidden"
            } flex-col w-[150px] justify-start items-start gap-2 py-3 px-2 bg-white rounded-lg absolute top-[110%] left-0 h-48 overflow-y-scroll shadow-lg z-10`}
          >
            {waysOfContact.map((app) => (
              <Para key={app} size="md">
                <span
                  onClick={() => setSelectedWayOfContact(app)}
                  className="cursor-pointer bg-gray-50 hover:bg-gray-200 rounded-lg shadow-sm px-2 py-1 text-center w-full flex justify-start items-center gap-2 capitalize"
                >
                  <Image
                    src={`/social/${app}.png`}
                    alt={`${app} icon`}
                    width={20}
                    height={20}
                    className="shadow-lg"
                  />{" "}
                  {app}
                </span>
              </Para>
            ))}
          </div>
        </label>
        {selectedWayOfContact === "whatsapp" && (
          <div className="w-full flex flex-col justify-center items-start gap-2 relative">
            <Para color="bg-primary-blue">Phone Number:</Para>
            <p
              role="button"
              onClick={(e) => {
                setDisplayCountryCode((prev) => !prev);
                if (displayWayOfContact) setDisplayWayOfContact(false); // Close country code dropdown if open
              }}
              className="w-20 absolute top-[35px] left-[10px] translate-y-1/2 border-2 rounded-md flex justify-center items-center gap-1"
            >
              <IoIosArrowDown className="text-lg" />
              <span className="cursor-pointer">{selectedCountryCode}</span>
            </p>
            <input
              className="w-full h-14 pl-[100px] pr-5 rounded-md bg-white"
              type="text"
              placeholder="123 456 7890"
              required
            />
            <div
              ref={countryCodeRef}
              className={`w-36 ${
                displayCountryCode ? "flex" : "hidden"
              } flex-col w-[150px] justify-start items-start gap-2 py-3 px-2 bg-white rounded-lg absolute top-[110%] left-0 h-48 overflow-y-scroll shadow-lg z-10`}
            >
              {countriesCodes.map(({ flag, cca2, idd }) => (
                <Para key={cca2} size="md">
                  <span
                    onClick={() => setSelectedCountryCode(`${flag} ${cca2}`)}
                    className="inline-block cursor-pointer bg-gray-50 hover:bg-gray-200 rounded-lg shadow-sm px-2 py-1 text-center w-full"
                  >{`${flag} (${idd.root}) - ${cca2}`}</span>
                </Para>
              ))}
            </div>
          </div>
        )}
        {selectedWayOfContact === "email" && (
          <label className="w-full flex flex-col justify-center items-start gap-2">
            <Para color="bg-primary-blue">Email:</Para>
            <input
              className="w-full h-14 px-5 rounded-md bg-white"
              type="email"
              placeholder="Ex. youssef@example.com"
              required
            />
          </label>
        )}
        {selectedWayOfContact === "telegram" && (
          <label className="w-full flex flex-col justify-center items-start gap-2">
            <Para color="bg-primary-blue">Telegram Username:</Para>
            <input
              className="w-full h-14 px-5 rounded-md bg-white"
              type="tel"
              placeholder="@youssef_511"
              required
            />
          </label>
        )}
        {selectedWayOfContact === "facebook" && (
          <label className="w-full flex flex-col justify-center items-start gap-2">
            <Para color="bg-primary-blue">Facebook Profile:</Para>
            <input
              className="w-full h-14 px-5 rounded-md bg-white"
              type="text"
              placeholder="Ex. https://facebook.com/profile/example"
              required
            />
          </label>
        )}
        {selectedWayOfContact === "instagram" && (
          <label className="w-full flex flex-col justify-center items-start gap-2">
            <Para color="bg-primary-blue">Instagram Profile:</Para>
            <input
              className="w-full h-14 px-5 rounded-md bg-white"
              type="text"
              placeholder="Ex. https://www.instagram.com/example/"
              required
            />
          </label>
        )}
        {selectedWayOfContact === "linkedin" && (
          <label className="w-full flex flex-col justify-center items-start gap-2">
            <Para color="bg-primary-blue">LinkedIn Profile:</Para>
            <input
              className="w-full h-14 px-5 rounded-md bg-white"
              type="text"
              placeholder="Ex. https://www.linkedin.com/in/example/"
              required
            />
          </label>
        )}
        {selectedWayOfContact === "x (twitter)" && (
          <label className="w-full flex flex-col justify-center items-start gap-2">
            <Para color="bg-primary-blue">Twitter Handle:</Para>
            <input
              className="w-full h-14 px-5 rounded-md bg-white"
              type="text"
              placeholder="@example"
              required
            />
          </label>
        )}
        {selectedWayOfContact === "discord" && (
          <label className="w-full flex flex-col justify-center items-start gap-2">
            <Para color="bg-primary-blue">Discord Server:</Para>
            <input
              className="w-full h-14 px-5 rounded-md bg-white"
              type="text"
              placeholder="Ex. #project-development"
              required
            />
          </label>
        )}
        {selectedWayOfContact === "other" && (
          <label className="w-full flex flex-col justify-center items-start gap-2">
            <Para color="bg-primary-blue">Additional Information:</Para>
            <input
              className="w-full h-14 px-5 rounded-md bg-white"
              type="text"
              placeholder="Other Contact Information"
              required
            />
          </label>
        )}
        <label className="w-full flex flex-col justify-center items-start gap-2">
          <Para color="bg-primary-blue">Subject:</Para>
          <input
            className="w-full h-14 px-5 rounded-md bg-white"
            type="text"
            placeholder="Ex. Discussing Project Details"
            required
          />
        </label>
        <label className="w-full flex flex-col justify-center items-start gap-2">
          <Para color="bg-primary-blue">Message:</Para>
          <textarea
            className="w-full h-40 py-3 px-5 rounded-md bg-white"
            type="text"
            placeholder="Ex. We have a ready Figma design that need an Expert like you to code it. The design consists of 5 pages: Home page, 3 service pages, and Contact page. So, We Need to develop an HTML and CSS with mobile responsive."
            required
          ></textarea>
        </label>
        <Btn>Submit</Btn>
      </form>
    </section>
  );
}
