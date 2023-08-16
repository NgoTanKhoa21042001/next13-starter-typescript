"use client";

import { Button } from "react-bootstrap";
import { useRouter } from "next/navigation";
const TikTok = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  return (
    <div>
      <div>
        TikTok
        <div>
          <Button variant="danger">Hoi Dna It</Button>
          <button onClick={handleClick}>Back to Home</button>
        </div>
      </div>
    </div>
  );
};

export default TikTok;
