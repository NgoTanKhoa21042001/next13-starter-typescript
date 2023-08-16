"use client";
import Link from "next/link";
import "@/styles/app.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:8000/blogs");
      const data = await res.json();
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <main>
      <ul>
        <li className="red">
          {/* ko f5 page */}
          <Link href={"/facebook"}>Facebook</Link>
        </li>
        <li className="red">
          {/* ko f5 page */}
          <Link href={"/youtube"}>YouTube</Link>
        </li>
        <li className="red">
          {/* ko f5 page */}
          <Link href={"/tiktok"}>TikTok</Link>
        </li>
      </ul>
    </main>
  );
}
