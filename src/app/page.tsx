"use client";
import Link from "next/link";
import "@/styles/app.css";
import { useEffect } from "react";
import useSWR from "swr";
import AppTable from "@/components/app.table";
export default function Home() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  if (!data) {
    return <div>Loading....</div>;
  }
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
      <AppTable blogs={data} />
    </main>
  );
}
