"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };
      setCurrentDateTime(now.toLocaleString("en-US", options));
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <header className="text-gray-400 body-font shadow-lg">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        <div className="flex text-black"></div>
        <span>{currentDateTime}</span>
        <nav className="md:ml-auto flex flex-wrap items-center  text-blackjustify-center">
          <Link
            href={"http://localhost:3000/"}
            className="mr-5 hover:text-red-700 transition duration-300 trannsform hover: scale-105"
          >
            {" "}
            Home
          </Link>

          <Link
            href={"http://localhost:About/"}
            className="mr-5 hover:text-red-700 transition duration-300 trannsform hover: scale-105"
          >
            {" "}
            About
          </Link>


          <Link
            href={"http://localhost:Blog/"}
            className="mr-5 hover:text-red-700 transition duration-300 trannsform hover: scale-105"
          >
            {" "}
            Blog
          </Link>

          <Link
            href={"http://localhost:Contact/"}
            className="mr-5 hover:text-red-700 transition duration-300 trannsform hover: scale-105"
          >
            {" "}
            Contact
          </Link>
        </nav>

        <button className=" inline-flex items-center bg-red-600 border-0 py-1 px-3 focus:outline-none  hover:bg-orange-500 rounded text-white mt-4 md:mt-0 transition-colors duration-300">
            YouTube
            
  <svg
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="w-4 h-4 ml-1"
    viewBox="0 0 24 24">
    <path d="M5 12h14M12 5l7 7-7 7"/> 
    
  </svg>


        </button>
      </div>
    </header>
  );
}
