import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-10">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        
        <div className="col-span-2">
          <p className="uppercase text-3xl tracking-widest text-[#f76c6c]">
            About
          </p>
          <h2 className="py-4">Learn more about me</h2>
          <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 personalImage md:hidden">
          <img
            className="rounded-xl h-40"
            src="assets/cartoon.png"
            alt="Personal image"
          ></img>
        </div>
          <p className="text-gray-600 text-sm pt-6 md:pt-0 md:text-xl">
            A full-time college student pursuing a bachelor's degree in computer
            science with a minor in Mathematics. Driven to work in a field that
            promotes lifelong learning and assist the world through
            technological advancements. In my spare time, I enjoy keeping up
            with the technical world and learning/mastering programming
            languages. When I'm not sitting behind a screen, you may find me at
            the gym, playing basketball in my backyard, or watching anime.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 personalImage hidden md:flex">
          <img
            className="rounded-xl object-fit h-56"
            src="assets/cartoon.png"
            alt="Personal image"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default About;
