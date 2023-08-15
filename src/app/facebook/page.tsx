"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";

const FaceBook = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  return (
    <div>
      Face Book
      <div>
        <Button variant="primary">Hoi Dna It</Button>
        <button onClick={handleClick}>Back to Home</button>
      </div>
    </div>
  );
};

export default FaceBook;
