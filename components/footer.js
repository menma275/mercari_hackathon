"use client";

import React from "react";
import { usePathname } from "next/navigation";
import {
  RiHome2Line,
  RiHome2Fill,
  RiMoneyCnyCircleLine,
  RiMoneyCnyCircleFill,
  RiAccountCircleLine,
  RiAccountCircleFill,
} from "react-icons/ri";
import {
  IoSearchOutline,
  IoSearchSharp,
  IoCameraOutline,
  IoCamera,
  IoChatbubbleOutline,
  IoChatbubbleSharp,
} from "react-icons/io5";

export default function Footer() {
  const pages = [
    {
      name: "ホーム",
      href: "/",
      icon: <RiHome2Line className="text-2xl" />,
      iconActive: <RiHome2Fill className="text-2xl" />,
    },
    {
      name: "さがす",
      href: "/search",
      icon: <IoSearchOutline className="text-2xl" />,
      iconActive: <IoSearchSharp className="text-2xl" />,
    },
    {
      name: "出品",
      href: "/post",
      icon: <IoCameraOutline className="text-2xl" />,
      iconActive: <IoCamera className="text-2xl" />,
    },
    {
      name: "支払い",
      href: "/payment",
      icon: <RiMoneyCnyCircleLine className="text-2xl" />,
      iconActive: <RiMoneyCnyCircleFill className="text-2xl" />,
    },
    {
      name: "チャット",
      href: "/chat",
      icon: <IoChatbubbleOutline className="text-2xl" />,
      iconActive: <IoChatbubbleSharp className="text-2xl" />,
    },
    {
      name: "マイページ",
      href: "/mypage",
      icon: <RiAccountCircleLine className="text-2xl" />,
      iconActive: <RiAccountCircleFill className="text-2xl" />,
    },
  ];
  const pathname = usePathname();
  return (
    <footer className="bg-[var(--bg-primary)] fixed max-w-sm bottom-0 left-0 right-0 mx-auto py-2 border-t">
      <div className="flex px-2 flex-row justify-between items-center">
        {pages.map((page) => (
          <div key={page.name}>
            <a
              className="flex flex-col items-center"
              href={page.href}
              key={page.name}
            >
              {(pathname.includes(page.href) && page.href !== "/") ||
              (pathname === "/" && page.href === "/")
                ? page.iconActive
                : page.icon}
              <p className="text-xs">{page.name}</p>
            </a>
          </div>
        ))}
      </div>
    </footer>
  );
}
