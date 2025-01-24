import React from "react";
import { Card, CardContent, CardTitle } from "../components/UI/Card";

interface BlogCardProps {
  post: {
    id: string;
    title: string;
    description: string;
    date: string;
    imageUrl: "../images/ai cover.webp"
  };
  isDarkBackground: boolean;
}

// BlogCard Component
export default function BlogCard({ post, isDarkBackground }: BlogCardProps) {
  // Ensure post is defined
  if (!post) {
    return <div>Post data is not available</div>;
  }

  return (
    <Card
      className={`p-4 ${
        isDarkBackground ? "bg-slate-800 text-white" : "bg-white text-slate-800"
      } rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}
    >
      <img
        src={post.imageUrl} // Corrected to use post.imageUrl
        alt={post.title || "Blog post image"}
        className="w-full h-80 object-cover rounded-t-lg"
      />
      <CardTitle className="text-xl font-semibold mt-4 text-center">
        {post.title}
      </CardTitle>
      <CardContent className="text-center mt-2">
        <p>{post.description}</p>
      </CardContent>
      <div className="flex flex-col items-center mt-4">
        <p
          className={`text-sm mb-2 ${
            isDarkBackground ? "text-slate-400" : "text-slate-500"
          }`}
        >
          Published on: 30/Dec/2024
        </p>
        <a
          href={`/posts/${post.id}`}
          className="w-full px-6 py-2 mt-2 text-white bg-blue-600 rounded hover:bg-blue-500 transition-colors duration-300 text-center"
        >
          Read More
         
        </a>
      </div>
    </Card>
  );
}
