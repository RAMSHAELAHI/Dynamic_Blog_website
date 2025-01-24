import React from "react";
import Image from "next/image";

export default function AuthorCard() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-12">
      <div className="flex items-center animation-fadeIn">
        <img
          className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-red-500"
          src="../images/ramsha picture dp.jpeg"
          alt="Ramsha Elahi's Profile Picture"
       
        />
        <div>
          <h3 className="text-xl font-bold">Ramsha Elahi</h3>
          <p className="text-slate-500">
            Front-End Developer | GIS Analyst | Geographer
          </p>
        </div>
      </div>

      <div className="mt-4 text-black leading-relaxed">
        <p>
          Ramsha Elahi is a dedicated student enrolled in the Generative AI
          Intensive Course (GIAIC).
        </p>
        <p>
          Her academic focus is on mastering cutting-edge skills in artificial
          intelligence (AI), cloud computing, and generative technologies.
        </p>
        <p>
          She is gaining proficiency in leveraging modern tools and frameworks
          to prepare for roles in the rapidly evolving tech landscape.
        </p>
      </div>

      <div className="mt-4 flex space-x-3">
        <a
          href="https://www.linkedin.com/in/ramsha-elahi-10057028a/"
          className="px-4 py-3 text-red-700 bg-blue-500 rounded-md hover:bg-blue-800 transition duration-300"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/RAMSHAELAHI"
          className="px-4 py-3  text-red-700 bg-blue-500 rounded-md hover:bg-blue-800 transition duration-300"
        >
          GitHub
        </a>
        <a
          href="https://vercel.com/ramsha-elahis-projects"
          className="px-4 py-3  text-red-700 bg-blue-500 rounded-md hover:bg-blue-800 transition duration-300"
        >
          Vercel
        </a>
      </div>
    </div>
  );
}
