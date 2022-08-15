import Image from "next/image";
import React from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  return (
    <div id="contact" className="w-full">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-3xl tracking-widest uppercase text-[#f76c6c] mt-10">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className=" mt-10 flex lg:grid-cols-5 gap-8 items-center">
          {/* right  */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4 p-10 flex flex-col items-center">
            <h2 className="py-2 text-2xl">Arshdeep Singh</h2>
            <p className="uppercase text-sm tracking-widest text-gray-600 text-center">
              Looking for internships to learn more about the tech sector
            </p>
            <p className="uppercase pt-4 tracking-widest">Connect with me</p>
            <div className="w-full flex  items-center mt-5 justify-center gap-8">
              <a
                href="https://www.linkedin.com/in/arshdsingh"
                target="_blank"
                rel="noreferrer"
              >
                <div className="rounded-full shadow-xl shadow-gray-400 p-4  cursor-pointer hover:scale-105 ease-in duration-500 icon hover:shadow-none">
                  <FaLinkedinIn />
                </div>
              </a>
              <a
                href="mailto:sarshdeep2774@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <div className="rounded-full shadow-xl shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-500 icon hover:shadow-none">
                  <AiOutlineMail />
                </div>
              </a>
            </div>
            <a
              href="mailto:sarshdeep2774@gmail.com?subject=Hello Arsh! This is coming from your site."
              target="_blank"
              rel="noreferrer"
              className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-[#f76c6c] transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 group mt-5"
            >
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#f76c6c] group-hover:h-full"></span>
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  className="w-5 h-5 text-[#f76c6c]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white tracking-widest uppercase">
                Say hi
              </span>
            </a>
          </div>
        </div>

        <Link href="/#home">
          <div className="absolute right-10 bottom-10  rounded-full shadow-xl shadow-gray-400 p-6 hover:scale-105 hover:shadow-none ease-in duration-500 icon invisible lg:visible">
            <HiOutlineChevronDoubleUp />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
