import React from "react";
import Head from "next/head";
import "aos/dist/aos.css";
import { createClient } from "next-sanity";
import BlogComponent from "../components/BlogComponent";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";


// A page specifally for only blogs ---- A GRID WITH 3 BLOGS PER ROW
const blogs = ({ blogs }) => {
  // fetch using proper credentials 
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    useCdn: false,
  });

  // sanitys image builder -- check DOCUMENTATION 
  const builder = imageUrlBuilder(client);

  return (
    <>
      <Head>
        <title>Arsh's Site | Blogs</title>
        <meta name="description" content="Generated by nest app" />
        <link rel="shortcut icon" href="/assets/secondIcon.svg" />
      </Head>
      <div id="blog" className="w-full lg:h-screen">
        <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
          <p className="text-3xl tracking-widest uppercase text-[#f76c6c] mt-10">
            Blog
          </p>
          <h2 className="py-3">Check out some of my blogs</h2>

          <div className="grid justify-center mx-auto items-center lg:grid-cols-3 gap-4 ">
            {blogs?.map((item) => {
              return (
                <div className="col-span-1" key={item.slug.current}>
                  <Link
                    key={item.slug.current}
                    href={"/blog/" + item.slug.current}
                  >
                    <div className="card_item">
                      <BlogComponent
                        title={item.title}
                        metaDesc={item.metaDesc}
                        blogImageLink={builder
                          .image(item.blogImage)
                          .width(200)
                          .url()}
                        slug={item.slug.current}
                      />
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <script
        // ANIMATED CURSOR THINGS
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
}`,
          }}
        />
      </div>
    </>
  );
};

export default blogs;

// use SSR to get elements fast
export async function getServerSideProps(context) {
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    useCdn: false,
  });
 
  const query = `*[_type == "blog"]`;
  const blogs = await client.fetch(query);
  return {
    props: {
      blogs,
    },
  };
}
