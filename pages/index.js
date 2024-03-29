import dynamic from "next/dynamic";
import Head from "next/head";
import About from "../components/About";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Contact from "../components/Contact";
import { createClient } from "next-sanity";
import BlogComponent from "../components/BlogComponent";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
import Blog from "../components/Blog";
import * as React from "react";

export default function Home({ blogs }) {
  // connect to the CMS
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    useCdn: false,
  });
  const builder = imageUrlBuilder(client);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
    ssr: false,
  });

  return (
    <div className="">
      <Head>
        <title>Arsh's Site | Software Engineer</title>
        <meta
          name="description"
          content="A personal portfolio website for myself, Arshdeep Singh. This website was created to outline my skills and showcase myself. This website was made using NextJS, React, HTML/CSS, and other technologies. Please contact me if needed, details will be avaliable in the webpage"
        />
        <link rel="shortcut icon" href="/assets/secondIcon.svg" />
      </Head>

      {/* main section */}
      <div className="snap-start" data-aos="fade-flip" data-aos-duration="3000">
        <Main />
      </div>

      {/* about section */}
      <div
        className="snap-start"
        data-aos="fade-right"
        data-aos-duration="7000"
        data-aos-delay="100"
      >
        <About />
      </div>

      {/* projects section */}
      <div
        className="snap-start"
        data-aos="fade-right"
        data-aos-duration="7000"
        data-aos-delay="100"
      >
        <Projects />
      </div>

      {/* blog section */}
      <div
        className="snap-start"
        data-aos="fade-right"
        data-aos-duration="7000"
        data-aos-delay="100"
      >
        <Blog />{" "}
        <div className="w-full flex flex-col lg:flex-row justify-center items-center">
          {blogs?.map((item) => {
            const convertDate = new Date(item.createdAt);
            const fixedDate =
              convertDate.getMonth() +
              "/" +
              convertDate.getDate() +
              "/" +
              convertDate.getFullYear();
            return (
              <Link key={item.slug.current} href={"/blog/" + item.slug.current}>
                <BlogComponent
                  title={item.title}
                  metaDesc={item.metaDesc}
                  blogImageLink={builder.image(item.blogImage).width(200).url()}
                  slug={item.slug.current}
                  time={fixedDate}
                />
              </Link>
            );
          })}
        </div>
      </div>

      {/* contact section */}
      <div
        className="snap-start"
        data-aos="fade-right"
        data-aos-duration="7000"
        data-aos-delay="100"
      >
        <Contact />
      </div>

      {/* script for the moving eyes */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
document.querySelector("body").addEventListener("mousemove", eyeball)
function eyeball() {
  const eye = document.querySelectorAll(".eye");
  eye.forEach(function(eye) {
    let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
    let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
    let radian = Math.atan2(event.pageX - x, event.pageY - y);
    let rotation = (radian * (180 / Math.PI) * -1) + 270;
    eye.style.transform = "rotate("+rotation+"deg)"; 
  })
}
        `,
        }}
      />
    </div>
  );
}

export async function getServerSideProps(context) {
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    useCdn: false,
  });

  const query = `*[_type == "blog"][0...3]`;
  const blogs = await client.fetch(query);
  return {
    props: {
      blogs,
    },
  };
}
