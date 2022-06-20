import Link from "next/link";
import React from "react";

const BlogComponent = ({ title, metaDesc, blogImageLink, slug, time }) => {
  return (
    <Link href={"/blog/" + slug}>
      <div className="m-3">
        <div className="card h-70 icon hover:scale-95 ease-in duration-300">
          <div className="card__header  w-96 h-36">
            <img
              src={blogImageLink}
              alt="Image"
              className="object-fill h-36 w-[100%] " 
              />
          </div>
          <div className="card__body">
            <span className="tag tag-blue">Technology</span>
            <h4>{title}</h4>
            <p>{metaDesc}</p>
          </div>
          <div className="card__footer">
            <div className="user">
              <div className="user__info">
                <h5>Arshdeep Singh</h5>
                <small>{time}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogComponent;
