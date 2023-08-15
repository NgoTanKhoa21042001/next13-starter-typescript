"use-client";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <ul>
          <li>
            {/* ko f5 page */}
            <Link href={"/facebook"}>Facebook</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
