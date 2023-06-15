"use client";
import { Client, Databases, Query } from "appwrite";

import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import BlogPosts from "./components/BlogPosts";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("648a91006fb83a706664");

export default function Home() {
  const [blogPosts, setBlogPosts] = useState([]);
  useEffect(() => {
    const databases = new Databases(client);

    let promise = databases.listDocuments(
      "648a92c68f2918b44c11",
      "648a92d16d0966d3c1d3"
    );
    promise.then(
      function (response) {
        setBlogPosts(response.documents);
        // console.log(response);
      },
      async function (error) {
        console.log(error);
      }
    );
  }, []);
  console.log(blogPosts);
  return (
    <main className="">
      <div className="flex flex-col gap-y-4 ">
        <Navbar />
        <BlogPosts posts={blogPosts} />
      </div>
    </main>
  );
}
