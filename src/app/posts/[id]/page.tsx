'use client';

import React from 'react';
import Image from 'next/image';
import CommentSection from '@/components/CommentSection';
import AuthorCard from '@/components/AuthorCard';
import { title } from 'process';
import Footer from '@/components/Footer';

const posts = [
  {
    id: "1",
    title: "HTML Block Of Web Development",
    description: "Explore HTML, the backbone of every webpage",
    image: "/images/ai 1.jpeg",
  },
  {
    id: "2",
    title: "CSS Styling Techniques",
    description: "Learn CSS to create visually stunning designs",
    image: "/images/ai 2.jpeg",
  },
  {
    id: "3",
    title: "HTML Block Of Web Development",
    description: "Explore HTML, the backbone of every webpage",
    image: "/images/ai 3.jpeg",
  },
  {
    id: "4",
    title: "HTML Block Of Web Development",
    description: "Explore HTML, the backbone of every webpage",
    image: "/images/ai 4.jpeg",
  },  {
    id: "5",
    title: "HTML Block Of Web Development",
    description: "Explore HTML, the backbone of every webpage",
    image: "/images/ai 5.jpeg",
  },  {
    id: "6",
    title: "HTML Block Of Web Development",
    description: "Explore HTML, the backbone of every webpage",
    image: "/images/ai 6.webp",
  },  {
    id: "7",
    title: "HTML Block Of Web Development",
    description: "Explore HTML, the backbone of every webpage",
    image: "/images/ai 7.webp",
  },
  {
    id: "8",
    title: "HTML Block Of Web Development",
    description: "Explore HTML, the backbone of every webpage",
    image: "/images/ai 8.webp",
  }, 
   {
    id: "9",
    title: "HTML Block Of Web Development",
    description: "Explore HTML, the backbone of every webpage",
    image: "/images/ai 09.jpeg"},
    {
      id: "10",
      title:  "Advancements in Natural Language Processing (NLP)",
      description:"NLP is one of the most promising areas of AI development, with AI models like GPT already capable of understanding and generating human-like text. As these models become more sophisticated, we can expect them to be able to engage in deeper, more nuanced conversations, translate languages with high accuracy, and assist with content creation in various industries.",
      imageUrl: "/images/ai  10.jpeg", // Updated path
    },
    {
      id: "11",
      title: "AI and Human Rights",
      description: "The expansion of AI technologies brings with it a need for a renewed focus on human rights. As AI systems gain more decision-making power, ensuring that these technologies respect privacy, freedom, and equality is paramount. AI must be designed to promote inclusivity and accessibility, preventing its use from deepening social divides or perpetuating discrimination.",
      imageUrl: "/images/ai 11.webp", // Updated path
    },
    {
      id: "12",
      title: "The Role of AI in Addressing Global Challenges",
      description: "AI has the potential to tackle some of the world’s most pressing challenges, such as poverty, inequality, and climate change. By analyzing global data, AI can help predict environmental disasters, optimize resource distribution, and create models to reduce poverty through targeted interventions. The future may see AI used in collaboration with governments and NGOs to create sustainable solutions to global crises.",
      imageUrl: "/images/ai 12.webp", // Updated path
  
  },
];

export default function Post({ params }: { params: { id: string } }) {
  const { id } = params;
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <h2 className="text-2xl font-bold text-center mt-10">
        Post Not Found
      </h2>
    );
  }

  const renderParagraphs = (description: string) => {
    return description.split("\n").map((para, index) => (
      <p key={index} className="mt-4 text-justify">
        {para.trim()}
      </p>
    ));
  };

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="md:text-4xl text-3xl font-bold text-red-600 text-center">
        {post.title}
      </h1>

      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-auto rounded-md mt-4"
        />
      )}

      <div className="mt-6 text-lg text-slate-700">
        {renderParagraphs(post.description)}
      </div>

      <div>
        <CommentSection />
        <AuthorCard />
        <Footer />
        
      </div>
    </div>
  );
}
