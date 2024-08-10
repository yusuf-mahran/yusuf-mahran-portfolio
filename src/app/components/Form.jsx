"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Btn from "../utilities/Btn";
import Line from "../utilities/Line";
import Para from "../utilities/Para";
import SubHeading from "../utilities/SubHeading";
import { IoIosArrowDown } from "react-icons/io";
import "./../styles/form.css";

export default function Form() {
  const [countriesCodes, setCountriesCodes] = useState([]);

  const [displayCountryCode, setDisplayCountryCode] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState("🇵🇸 +9");
  const countryCodeRef = useRef(null);

  const [displayWayOfContact, setDisplayWayOfContact] = useState(false);
  const [selectedWayOfContact, setSelectedWayOfContact] = useState("whatsapp");
  const wayOfContactRef = useRef(null);

  const waysOfContact = [
    "whatsapp",
    "telegram",
    "facebook",
    "instagram",
    "linkedin",
    "x (twitter)",
    "discord",
    "other",
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactDetail: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    }

    if (!formData.contactDetail.trim()) {
      newErrors.contactDetail = "Contact detail is required.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // Submit form data logic here
    console.log("Form submitted successfully!", formData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNameChange = (e) => {
    handleInputChange(e);

    const updatedErrors = { ...errors };

    if (e.target.value.trim().length < 3) {
      updatedErrors.name = "Name must be at least 3 characters long.";
    } else {
      delete updatedErrors.name;
    }

    setErrors(updatedErrors);
  };

  const handleEmailChange = (e) => {
    handleInputChange(e);

    const updatedErrors = { ...errors };

    if (!e.target.value.trim()) {
      updatedErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)) {
      updatedErrors.email = "Invalid email format.";
    } else {
      delete updatedErrors.email;
    }
    !setErrors(updatedErrors);
  };

  const handleContactDetailsChange = (e) => {
    handleInputChange(e);

    const updatedErrors = { ...errors };
    const suffixes = countriesCodes.find(
      (country) => `${country.flag} ${country.idd.root}` === selectedCountryCode
    ).idd.suffixes;

    if (!e.target.value.trim()) {
      if (selectedWayOfContact === "whatsapp") {
        updatedErrors.contactDetail = "Phone number is required.";
      } else {
        updatedErrors.contactDetail = `${
          selectedWayOfContact.charAt(0).toUpperCase() +
          selectedWayOfContact.slice(1)
        } is required.`;
      }
    } else if (selectedWayOfContact === "whatsapp") {
      const validSuffix = suffixes.some((suffix) =>
        e.target.value.startsWith(suffix)
      );
      if (!validSuffix) {
        updatedErrors.contactDetail = `phone number have to start with ${
          suffixes.length > 1 ? "one of" : ""
        } (${suffixes.join(", ")})`;
      } else if (!validSuffix || !/^\d{11}$/.test(e.target.value)) {
        updatedErrors.contactDetail = "Invalid phone number format.";
      } else {
        delete updatedErrors.contactDetail;
      }
    } else {
      delete updatedErrors.contactDetail;
    }

    setErrors(updatedErrors);
  };

  const getCountriesCodes = async () => {
    try {
      const response = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,cca2,flag,idd"
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
    <form
      className="flex flex-col justify-center items-center gap-8 py-12 px-8 rounded-lg bg-form"
      onSubmit={handleSubmit}
    >
      <div className="w-full flex justify-center items-center flex-col gap-3">
        <SubHeading align="center">
          We&apos;re delighted to hear from you
        </SubHeading>
        <Line width="150px" color="bg-light-skyblue" height="4px" />
      </div>

      <label className="w-full flex flex-col justify-center items-start gap-2">
        <Para color="bg-primary-blue">Name:</Para>
        <input
          className={`w-full h-14 px-5 rounded-md bg-white ${
            errors.name ? "border-red-500 border-2" : ""
          }`}
          type="text"
          placeholder="Ex. Youssef Hamed"
          name="name"
          value={formData.name}
          onChange={handleNameChange}
          autoComplete="true"
        />
        {errors.name && <span className="text-red-500">{errors.name}</span>}
      </label>

      <label className="w-full flex flex-col justify-center items-start gap-2">
        <Para color="bg-primary-blue">Email:</Para>
        <input
          className={`w-full h-14 px-5 rounded-md bg-white ${
            errors.email ? "border-red-500 border-2" : ""
          }`}
          type="email"
          placeholder="Ex. example@email.com"
          name="email"
          value={formData.email}
          onChange={handleEmailChange}
          autoComplete="true"
        />
        {errors.email && <span className="text-red-500">{errors.email}</span>}
      </label>

      <label className="w-full flex flex-col justify-center items-start gap-2 relative">
        <Para color="bg-primary-blue">Preferred Way of Contact:</Para>
        <div className="w-full relative">
          <button
            type="button"
            aria-haspopup="listbox"
            aria-expanded={displayWayOfContact}
            onClick={() => {
              setDisplayWayOfContact((prev) => !prev);
              if (displayCountryCode) setDisplayCountryCode(false); // Close country code dropdown if open
            }}
            className="w-full absolute top-1/2 left-0 px-5 -translate-y-1/2 flex justify-between items-center gap-5"
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
          </button>
          <input
            className="w-full h-14 pl-[100px] pr-5 rounded-md bg-white"
            type="text"
            readOnly
          />
        </div>
        <ul
          ref={wayOfContactRef}
          role="listbox"
          className={`w-full ${
            displayWayOfContact ? "flex" : "hidden"
          } input-container flex-col w-[150px] justify-start items-start gap-2 border-white border-t-8 border-b-8 px-2 bg-white rounded-lg absolute top-[110%] left-0 h-48 overflow-y-scroll shadow-lg z-10`}
        >
          {waysOfContact.map((app) => (
            <li
              key={app}
              aria-selected={selectedWayOfContact === app ? true : false}
              role="option"
              className="w-full"
            >
              <button
                type="button"
                onClick={() => {
                  setSelectedWayOfContact(app);
                }}
                className="cursor-pointer input rounded-lg px-4 py-2 text-center w-full flex justify-start items-center gap-2 capitalize"
              >
                <Image
                  src={`/social/${app}.png`}
                  alt={`${app} icon`}
                  width={20}
                  height={20}
                  className="shadow-lg"
                />{" "}
                {app}
              </button>
            </li>
          ))}
        </ul>
      </label>

      {selectedWayOfContact === "whatsapp" && (
        <div className="w-full flex flex-col justify-center items-start gap-2 relative">
          <Para color="bg-primary-blue">Phone Number:</Para>
          <div className="w-full relative">
            <button
              type="button"
              aria-haspopup="listbox"
              aria-expanded={displayCountryCode}
              onClick={() => {
                setDisplayCountryCode((prev) => !prev);
                if (displayWayOfContact) setDisplayWayOfContact(false); // Close country code dropdown if open
              }}
              className="w-20 absolute top-1/2 left-[10px] -translate-y-1/2 border-[1px] shadow-sm rounded-md flex justify-center items-center gap-1"
            >
              <IoIosArrowDown className="text-lg" />
              <span className="cursor-pointer">{selectedCountryCode}</span>
            </button>
            <input
              className={`w-full h-14 pl-[100px] pr-5 rounded-md bg-white ${
                errors.contactDetail ? "border-red-500 border-2" : ""
              }`}
              type="text"
              placeholder="123 456 7890"
              name="contactDetail"
              value={formData.contactDetail}
              onChange={handleContactDetailsChange}
            />
          </div>
          {errors.contactDetail && (
            <span className="text-red-500">{errors.contactDetail}</span>
          )}
          <span
            className={`${
              (formData.contactDetail.length !== 0 &&
                formData.contactDetail.length !== 11) ||
              errors.contactDetail
                ? "text-red-500 after:content-['✘'] after:pl-1"
                : formData.contactDetail.length !== 0 &&
                  "text-green-600 after:content-['✔'] after:pl-1"
            } absolute top-full right-0 sm:inline-block hidden`}
          >
            {formData.contactDetail.length}/11
          </span>
          <ul
            ref={countryCodeRef}
            role="listbox"
            className={`w-36 ${
              displayCountryCode ? "flex" : "hidden"
            } input-container flex-col w-[150px] justify-start items-start gap-2 border-white border-t-8 border-b-8 px-2 bg-white rounded-lg absolute top-[110%] left-0 h-48 overflow-y-scroll shadow-lg z-10`}
          >
            {countriesCodes?.map(
              (country) =>
                country?.idd?.root && (
                  <li
                    key={country.cca2}
                    aria-selected={
                      selectedCountryCode ===
                      `${country.flag} ${country.idd.root}`
                        ? true
                        : false
                    }
                    role="option"
                    className="w-full"
                  >
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedCountryCode(
                          `${country.flag} ${country.idd.root}`
                        );
                      }}
                      className="cursor-pointer input rounded-lg px-4 py-2 text-center w-full flex justify-start items-center gap-2"
                    >
                      {country.flag} {country.idd.root} {country.cca2}
                    </button>
                  </li>
                )
            )}
          </ul>
        </div>
      )}

      {selectedWayOfContact !== "whatsapp" &&
        selectedWayOfContact !== "email" && (
          <label className="w-full flex flex-col justify-center items-start gap-2">
            <Para color="bg-primary-blue">
              {selectedWayOfContact.charAt(0).toUpperCase() +
                selectedWayOfContact.slice(1)}{" "}
              Username:
            </Para>
            <input
              className={`w-full h-14 px-5 rounded-md bg-white ${
                errors.contactDetail ? "border-red-500 border-2" : ""
              }`}
              type="text"
              placeholder={`Enter your ${selectedWayOfContact} username`}
              name="contactDetail"
              value={formData.contactDetail}
              onChange={handleContactDetailsChange}
            />
            {errors.contactDetail && (
              <span className="text-red-500">{errors.contactDetail}</span>
            )}
          </label>
        )}

      <label className="w-full flex flex-col justify-center items-start gap-2">
        <Para color="bg-primary-blue">Subject:</Para>
        <input
          className={`w-full h-14 px-5 rounded-md bg-white ${
            errors.subject ? "border-red-500 border-2" : ""
          }`}
          type="text"
          placeholder="What would you like to talk about?"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
        />
        {errors.subject && (
          <span className="text-red-500">{errors.subject}</span>
        )}
      </label>

      <label className="w-full flex flex-col justify-center items-start gap-2">
        <Para color="bg-primary-blue">Message:</Para>
        <textarea
          className={`w-full h-48 p-5 rounded-md bg-white ${
            errors.message ? "border-red-500 border-2" : ""
          }`}
          placeholder="Feel free to ask for more details about my work..."
          name="message"
          value={formData.message}
          onChange={handleInputChange}
        />
        {errors.message && (
          <span className="text-red-500">{errors.message}</span>
        )}
      </label>

      <Btn onClick={handleSubmit} type="submit">
        Send
      </Btn>
    </form>
  );
}
