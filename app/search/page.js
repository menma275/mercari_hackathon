import React from "react";
import Footer from "../../components/footer";
import { IoNotificationsOutline } from "react-icons/io5";
import { ImCheckmark2 } from "react-icons/im";

export default function Search() {
  const trends = [
    "ポケモンカード",
    "ナンジャモ sar",
    "シャイニートレジャーex box",
    "ちいかわ",
    "ノースフェイス",
    "switch",
    "ノースフェイス ダウン",
    "モンクレール",
    "アニヤハインドマーチ",
    "ダウンジャケット",
  ];
  return (
    <div className="px-3 pt-3">
      <header className="flex flex-row items-center border-b gap-2">
        <input
          className="w-full text-xs px-3 py-2 rounded-lg outline-none border mb-2"
          type="text"
          placeholder="キーワードから探す"
        />
        <IoNotificationsOutline className="pb-1 text-2xl text-[var(--font-secondary)]" />
        <ImCheckmark2 className="pb-1 text-2xl text-[var(--font-secondary)]" />
      </header>
      <div>
        <div className="text-sm text-[var(--font-secondary)]">
          <a
            className="cursor-pointer py-3 border-b flex items-center gap-2"
            href="/search/demand"
          >
            <p className="text-xs bg-[var(--accent-red)] text-white rounded-full px-2 py-1">
              New!
            </p>
            <p>需要をさがす</p>
          </a>
          <a className="cursor-pointer py-3 border-b flex items-center">
            <p>カテゴリーからさがす</p>
          </a>
          <a className="cursor-pointer py-3 border-b flex items-center">
            <p>ブランドからさがす</p>
          </a>
        </div>
      </div>
      <div className="my-5">
        <h1 className="my-3 text-[var(--font-secondary)]">
          トレンドキーワード
        </h1>
        <div className="flex flex-wrap gap-2">
          {trends.map((trend) => (
            <div className="p-2 rounded-md gap-3 text-sm bg-[var(--bg-secondary)] text-[var(--accent-blue)]">
              <p>{trend}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="my-5">
        <h1 className="my-3 text-[var(--font-secondary)]">検索履歴</h1>
        <div className="flex flex-col gap-3"></div>
      </div>
      <Footer />
    </div>
  );
}
