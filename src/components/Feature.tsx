import React from "react";

export default function Feature() {
  return (
    <div>
      {/* Section for Fashion Blog */}
      <section className="py-8 bg-neutral-300 mb-40">
        <h2
          className="text-center text-3xl font-bold lg:text-left animate-fade-in-up transition-all duration-500 ease-in-out transform hover:translate-y-[-5px] hover:text-black text-red-600"
          style={{
            transform: "translateY(-5px)",
            color: "black",
            textShadow: "0 0 5px red",
          }}
        >
          Ramsha Elahi - The Future of AI: How It Will Change Our Daily Lives !
        </h2>
        <p className="mt-4 mb-1 px-4 text-center text-lg text-gray-700 animate-fade-in-down delay-100">
          Artificial intelligence (AI) is no longer a concept of science
          fiction—it is a transformative force reshaping the world as we know
          it. From personalized recommendations on streaming platforms to
          advanced diagnostic tools in healthcare, AI is already embedded in our
          everyday lives. But the future holds even greater promise. Let’s
          explore how AI is poised to revolutionize the way we live, work, and
          interact with the world around us.
        </p>
      </section>

      {/* Section for Categories */}
      <div className="mx-auto max-w-7xl px-5 ">
      <h1 className="mt-1 text-3xl font-bold text-center my-8 text-red-600">
  Exploring Our Categories{" "}
</h1>


        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 animat-fade-in-up delay-100">
          {[
            "Technology",
            "Artificial Intelligence",
            "HTML",
            "Virtual Reality",
            "Next Js",
            "Web Development",
          ].map((category, index) => (
            <div key={index}>
              <div className="relative group p-6 bg-white rounded-lg shadow-lg hover:bg-sky-300 hover: text-black transtion duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center justify-center ">
                <p className="text-center text-lg font-semibold">{category}</p>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white rounded-lg transition duration-300 ease-in-out"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
