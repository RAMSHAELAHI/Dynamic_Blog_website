import React from "react";
import AuthorCard from "@/components/AuthorCard";
import NavBar from "@/components/NavBar";
import { Button } from "@/components/UI/Button";
import { Card } from "@/components/UI/Card";
import { Input } from "@/components/UI/Input";
import BlogCard  from "@/components/BlogCard";
import CommentSection from "@/components/CommentSection";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Mega from "@/components/Mega";



  

export default function Home() {
  return (
    <div className=" font-bold text-lg">Dynamic Blog By Ramsha
      <NavBar/>
      <Feature />
      <AuthorCard />
      <Button />
      <Input />
      <Card />
      <CommentSection />
      <Mega />
      <BlogCard post={{
        id: "",
        title: "",
        description: "",
        date: "",
        imageUrl: "../images/ai cover.webp"
      }} isDarkBackground={false} />
      
      <Footer />
      
      

      
    </div>
  );
}
