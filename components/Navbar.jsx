import Link from "next/link";
import React, { useState } from "react";
import { useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import navIcon from "../public/assets/navIcon.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const [shadow, setShadow] = useState(false);
  useEffect(() => {
    const handlerShadow = () => {
      if (window.scrollY >= 180) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handlerShadow);
  }, []);

  const handlerNavbar = () => {
    if (nav) {
      setNav(false);
    } else {
      setNav(true);
    }
  };

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 bg-[#a8d0e6] ">
        <Link href="/#home" className="icon">
          <Image className="icon" src={navIcon} alt="/" width="90" height="80" />
        </Link>
        <div>
          <ul className="hidden md:flex">
            <Link href="/#home">
              <li className="ml-10 text-sm uppercase ">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase ">About</li>
            </Link>
            <Link href="/#work">
              <li className="ml-10 text-sm uppercase ">Work</li>
            </Link>
            <Link href="/#blog">
              <li className="ml-10 text-sm uppercase ">blog</li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase ">Contact</li>
            </Link>
          </ul>
          <div className="md:hidden cursor-pointer" onClick={handlerNavbar}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed right-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? " fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in-out duration-500"
              : "fixed right-[-110%] top-0 p-10 ease-in-out duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <div
                className="rounded-full 
              p-3 shadow-xl shadow-gray-400 cursor-pointer icon"
                onClick={handlerNavbar}
              >
                <AiOutlineClose size={25} />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let's work together and make something great!
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul>
              <Link href="/#home">
                <li
                  onClick={() => {
                    setNav(false);
                  }}
                  className="py-4 text-sm icon"
                >
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li
                  onClick={() => {
                    setNav(false);
                  }}
                  className="py-4 text-sm icon"
                >
                  About
                </li>
              </Link>
              <Link href="/#work">
                <li
                  onClick={() => {
                    setNav(false);
                  }}
                  className="py-4 text-sm icon"
                >
                  Work
                </li>
              </Link>
              <Link href="/#blog">
                <li
                  onClick={() => {
                    setNav(false);
                  }}
                  className="py-4 text-sm icon"
                >
                  Blog
                </li>
              </Link>
              <Link href="/#contact">
                <li
                  onClick={() => {
                    setNav(false);
                  }}
                  className="py-4 text-sm icon"
                >
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-20">
              <p className="uppercase tracking-widest text-[#f76c6c]">
                Let's Connect
              </p>
              <div className="flex items-center justify-between w-full my-4 sm:w-[80%]">
                <div className="rounded-full shadow-xl shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500 icon">
                  <a href="https://www.linkedin.com/in/arshdsingh">
                    <FaLinkedinIn />
                  </a>
                </div>
                <div className="rounded-full shadow-xl shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500 icon">
                  <a href="https://github.com/arshs1">
                    <FaGithub />
                  </a>
                </div>
                <div className="rounded-full shadow-xl shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500 icon">
                  <a href="mailto:sarshdeep2774@gmail.com">
                    <AiOutlineMail />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
