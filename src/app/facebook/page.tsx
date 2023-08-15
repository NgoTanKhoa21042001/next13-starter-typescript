"use client";
import React from "react";
import { useRouter } from "next/navigation";
const FaceBook = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  return (
    <div>
      Face Book
      <div>
        <button onClick={handleClick}>Back to Home</button>
      </div>
    </div>
  );
};

export default FaceBook;
