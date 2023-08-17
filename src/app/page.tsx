"use client";
import Link from "next/link";
import "@/styles/app.css";
export default function Home() {
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
