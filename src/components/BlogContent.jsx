import { useParams } from "react-router-dom";
import React from "react";

const BlogContent = ({ blogs }) => {
  console.log(blogs);
  const { id } = useParams();

  // Find the blog with the specified id
  const blog = blogs.data.find((blog) => blog.id == id) || {};

  // Destructure the attributes object
  const { attributes } = blog;

  // Destructure the blog attributes
  const {
    coverImg,
    blogTitle,
    blogDesc,
    blogContent,
    authorImg,
    authorName,
    authorDesc,
  } = attributes || {};

  return (
    <div className="w-full pb-10 bg-gray-100">
      <div className="max-w-[1240px] mx-auto px-4 mt-20">
        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-8 pt-10 text-black">
          <div className="lg:col-span-2 md:col-span-2 sm:col-span-1 col-span-1">
            <img
              className="h-auto w-full object-cover rounded-lg shadow-lg"
              src={`http://localhost:1337${
                coverImg?.data?.[0]?.attributes?.url ??
                "https://via.placeholder.com/150"
              }`}
              alt="Blog cover"
            />
            <div className="pt-8">
              <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl my-2 underline text-purple-700">
                {blogTitle ?? "No Title"}
              </h1>
              <h3 className="font-semibold text-xl sm:text-2xl md:text-3xl pb-4 text-purple-500">
                {blogDesc ?? "No Description"}
              </h3>
              {blogContent?.map((content, index) => (
  <div key={index}>
    {content.children.map((child, i) => (
      <React.Fragment key={i}>
        {child.type === "heading" ? (
          <h2>{child.text}</h2>
        ) : child.bold ? (
          <strong>{child.text}</strong>
        ) : (
          child.text
        )}
        <br /> {/* Line break */}
      </React.Fragment>
    ))}
  </div>
))}

            </div>
          </div>

          <div className="flex flex-col items-center">
            <img
              className="w-32 h-32 rounded-full object-cover border-4 border-purple-500 p-2"
              src={`http://localhost:1337${
                authorImg?.data?.attributes?.url ??
                "https://via.placeholder.com/150"
              }`}
              alt="profile"
            />
            <h1 className="font-bold text-xl sm:text-2xl text-center text-gray-900 pt-3">
              {authorName ?? "Unknown Author"}
            </h1>
            <p className="text-center text-gray-900 font-medium">
              {authorDesc ?? "No Description"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
