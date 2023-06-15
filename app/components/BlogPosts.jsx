import Link from "next/link";
import React from "react";

const BlogPosts = ({ posts }) => {
  return (
    <div className="max-w-3xl mx-auto grid gap-6 lg:grid-cols-2 px-2">
      {posts.map((post) => (
        <div key={post.id} className="bg-gray-800 rounded-lg shadow-md p-6">
          <img
            // src={post.image}
            src="https://www.w3docs.com/uploads/media/default/0001/05/4482fe09d95a0be765154b9cefff5e07f7fc32ff.png"
            alt="Blog Post"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="mt-4">
            <h2 className="text-2xl font-bold text-slate-200 mb-2">
              {post.title}
            </h2>
            <p className=" text-slate-200">
              {post.content.split(" ").slice(0, 20).join(" ")}{" "}
              
              <Link
                className="   text-slate-400 hover:text-blue-500"
                href={`/blog/${post.slug}`}
              >
                read more
              </Link>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPosts;
