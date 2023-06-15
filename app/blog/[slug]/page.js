"use client";
import { Client, Databases, Query } from "appwrite";
import Navbar from "@/app/components/Navbar";
import { useEffect, useState } from "react";
const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("648a91006fb83a706664");

const BlogPost = ({ params }) => {
  const { slug } = params;

  const [blogPost, setBlogPost] = useState({});
  useEffect(() => {
    const databases = new Databases(client);

    let promise = databases.listDocuments(
      "648a92c68f2918b44c11",
      "648a92d16d0966d3c1d3",
      [Query.equal("slug", slug)]
    );
    promise.then(
      function (response) {
        setBlogPost(response.documents[0]);
        // console.log(response);
      },
      async function (error) {
        console.log(error);
      }
    );
  }, [blogPost]);
  console.log(blogPost);
  return (
    <>
      <Navbar />
      <div className="m-6 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-4">{blogPost.title}</h1>
        <img
          src={blogPost["blog-image"]}
          alt="Blog"
          className="rounded-t-lg mb-6"
        />
        <p className="text-gray-400 text-lg leading-relaxed mb-6">
          {blogPost.content}
        </p>
        <p className="text-gray-200">Slug: {slug}</p>
      </div>
    </>
  );
};

export default BlogPost;
