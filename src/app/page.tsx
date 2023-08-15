"use-client";
import Link from "next/link";
import "@/styles/app.css";
export default function Home() {
  return (
    <main>
      <div>
        <ul>
          <li className="red">
            {/* ko f5 page */}
            <Link href={"/facebook"}>Facebook</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
