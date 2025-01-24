"use client";

import React, { useState } from "react";
import { Card, CardContent } from "../components/UI/Card";
import { Input } from "../components/UI/Input";
import { Button } from "../components/UI/Button";

const CommentSection = () => {
  const [comment, setComment] = useState("");

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleSubmit = () => {
    console.log("Submitted comment:", comment);
    setComment(""); // Clear the input after submission
  };

  return (
    <Card>
      <CardContent>
        <Input
          value={comment}
          onChange={handleCommentChange}
          
          placeholder="Write a comment..."
        />
        <Button onClick={handleSubmit}>Submit</Button>
      </CardContent>
    </Card>
  );
};

export default CommentSection;
