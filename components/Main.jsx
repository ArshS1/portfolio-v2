import AnimatedText from "react-animated-text-content";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import * as React from "react";

const Main = () => {

  return (
    <div id="home" className="w-full h-screen text-center test" >
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex items-center justify-center">
        <div className="">
          <div className="invisible lg:visible box md:flex md:visible hover:opacity-0 transition ease-in-out duration-300">
            <div className="translate-y-[-40vh]  ease-in eye "></div>
            <div className="translate-y-[-40vh] ease-in eye "></div>
          </div>
          <h1 className="pt-4 pb-2 text-center text-gray-700 ">
            Hi, I'm <span className="text-[#f76c6c] icons">Arshdeep</span>
          </h1>
          <div className="uppercase text-sm tracking-widest text-gray-600">
            <AnimatedText
              type="chars"
              interval={0.08}
              duration={1}
              animation={{
                y: "100px",
                ease: "ease",
              }}
            >
              A Software Engineer
            </AnimatedText>
          </div>

          <div className="flex items-center justify-between w-full my-4">
            <a
              href="https://www.linkedin.com/in/arshdsingh"
              className="cursor-pointer"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-xl shadow-gray-400 p-6 hover:scale-105 hover:shadow-none ease-in duration-500 icons">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/arshs1"
              className="cursor-pointer"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-xl shadow-gray-400 p-6  hover:scale-105 hover:shadow-none ease-in duration-500 icons">
                <FaGithub />
              </div>
            </a>
            <a
              href="mailto:sarshdeep2774@gmail.com"
              className="cursor-pointer"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-xl shadow-gray-400 p-6  hover:scale-105 hover:shadow-none ease-in duration-500 icons">
                <AiOutlineMail />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
