"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";

export default function SpaceList() {
  const userId = 1;
  const pathname = usePathname();
  const [spaces, setSpaces] = useState([]);
  useEffect(() => {
    const headers = new Headers();
    headers.append("ngrok-skip-browser-warning", "6024");
    const api = process.env.NEXT_PUBLIC_DB_HOST + "/getJoinedRooms?user_id=1";
    fetch(api, { headers: headers })
      .then((res) => res.json())
      .then((data) => {
        setSpaces(data.data);
        console.log(data.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <div className="px-3 flex items-center w-full h-12 border-b">
        <h1 className="text-sm font-bold">トーク</h1>
      </div>
      {spaces.map((space) => (
        <a
          className="px-2 gap-3 flex items-center h-16"
          key={space.id}
          href={`${pathname}/${space.id}`}
        >
          <span className="bg-red-100 w-12 h-12 rounded-full"></span>
          <div>
            <h3 className="text-md h-full" href={space.href}>
              {space.name}
            </h3>
            <p className="text-xs text-[var(--font-secondary)]">{space.desc}</p>
          </div>
        </a>
      ))}
      <Footer />
    </>
  );
}
