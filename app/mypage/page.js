import React from "react";
import Footer from "../../components/footer";
import { FaStar } from "react-icons/fa";

import {
  IoSearchOutline,
  IoHeartOutline,
  IoBagHandleOutline,
} from "react-icons/io5";

import { BsBoxSeam } from "react-icons/bs";

export default function MyPage() {
  const logs = [
    {
      icon: <IoHeartOutline className="text-3xl" />,
      text: "いいね",
    },
    {
      icon: <IoSearchOutline className="text-3xl" />,
      text: "検索条件",
    },
    {
      icon: <IoBagHandleOutline className="text-3xl" />,
      text: "購入",
    },
    {
      icon: <BsBoxSeam className="text-3xl" />,
      text: "出品",
    },
  ];
  return (
    <div className="px-3">
      {/* アイコン + 名前 + レビュー */}
      <header className="py-5 flex flex-row justify-start gap-5 items-center">
        <div className="w-12 h-12 bg-red-200 rounded-full"></div>
        <div>
          <h1>User Name</h1>
          <div className="flex flex-row gap-1">
            {/* 5回繰り返す */}
            {[...Array(5)].map((_, index) => {
              return (
                <FaStar
                  key={index}
                  className="text-yellow-400 text-xs text-[var(--font-secondary)]"
                  size={15}
                />
              );
            })}
          </div>
        </div>
      </header>
      {/* ログ */}
      <div className="grid grid-cols-4 gap-2">
        {logs.map((log, index) => (
          <div className="border-2 py-3 rounded-md text-[var(--font-secondary)]">
            <div className="flex justify-center items-center">{log.icon}</div>
            <p className="mt-2 flex justify-center text-xs">{log.text}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 py-5 flex flex-row justify-between border-b">
        <div className="flex flex-col">
          <h1 className="text-sm">mergift</h1>
          <p>0 pt</p>
        </div>
        <button className="text-xs border w-1/3 h-fit py-2 rounded-md">
          増やす
        </button>
      </div>
      <div className="mt-3 py-5 flex flex-row justify-between border-b">
        <div className="flex flex-col">
          <h1 className="text-sm">売上金</h1>
          <p>¥ 0</p>
        </div>
        <button className="text-xs border w-1/3 h-fit py-2 rounded-md">
          増やす
        </button>
      </div>
      <div className="mt-3 py-5 flex flex-row justify-between border-b">
        <div className="flex flex-col">
          <h1 className="text-sm">ビットコイン</h1>
          <p>¥ 0</p>
        </div>
        <button className="text-xs text-[var(--accent-red)] border border-[var(--accent-red)] w-1/3 h-fit py-2 rounded-md">
          はじめる
        </button>
      </div>
      <Footer />
    </div>
  );
}
