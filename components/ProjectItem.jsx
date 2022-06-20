import React from "react";
import Image from "next/image";

const ProjectItem = ({ title, background, projectLink, shortDesc }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#f76c6c] to-[#eec2c2] hover:scale-105 ease-in duration-300">
      <Image
        className="rounded-xl group-hover:opacity-5"
        src={background}
        height={400}
        width={850}
        alt="/"
      />
      <div className="hidden group-hover:flex group-hover:flex-col group=hover:items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center ">{shortDesc}</p>
        <div className={projectLink === "/arshbot" ? "hidden" : "w-40 m-auto"}>
          <a href={projectLink} target="_blank" rel="author">
            <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg">
              Learn more
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
