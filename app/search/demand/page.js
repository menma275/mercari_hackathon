"use client";

import Footer from "@/components/footer";
import { IoIosArrowBack } from "react-icons/io";
import { demands } from "/data/lists";
import { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

export default function Demand() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const junres = [
    "スニーカー",
    "ブーツ",
    "サンダル",
    "パンプス",
    "スリッポン",
    "モカシン",
    "ローファー",
    "ドレスシューズ",
    "ハイヒール",
    "ミュール",
    "ウェッジソール",
    "エスパドリーユ",
    "バレエシューズ",
    "その他",
  ];

  // 欲しいもの周り
  const [demandUserId, setDemandUserId] = useState(null);
  const [demandId, setDemandId] = useState(null);
  const [demandName, setDemandName] = useState("");
  const [demandDesc, setDemandDesc] = useState("");
  const [demandChecked, setDemandChecked] = useState(false);
  const [demands, setDemands] = useState([]);

  useEffect(() => {
    const headers = new Headers();
    headers.append("ngrok-skip-browser-warning", "6024");
    const api = process.env.NEXT_PUBLIC_DB_HOST + "/getDemand?number=5";
    fetch(api, { headers: headers })
      .then((res) => res.json())
      .then((data) => {
        setDemands(data.data);
        console.log("here" + data.data);
      })
      .catch((e) => console.log(e));
  }, []);

  const checkDemand = (user_id, check_user_id, demand_id) => {
    const headers = new Headers();
    headers.append("ngrok-skip-browser-warning", "6024");
    const api = process.env.NEXT_PUBLIC_DB_HOST + "/checkDemand";
    const requestBody = {
      user_id: user_id,
      check_user_id: check_user_id,
      demand_id: demand_id,
    };

    fetch(api, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(requestBody), // Convert the request body to JSON
    })
      .then((res) => res.json())
      .then((data) => {
        setDemands(data.data);
        console.log(data.data);
      })
      .catch((e) => console.log(e));
  };

  // ユーザー周り
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const headers = new Headers();
    headers.append("ngrok-skip-browser-warning", "6024");
    const api = process.env.NEXT_PUBLIC_DB_HOST + "/getDemand?number=5";
    fetch(api, { headers: headers })
      .then((res) => res.json())
      .then((data) => {
        setDemands(data.data);
        console.log(data.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="px-3">
      {/* ヘッダー */}
      <header className="fixed max-w-sm top-0 right-0 left-0 mx-auto bg-[var(--bg-primary)]">
        <div className="px-3 flex justify-center items-center h-12 border-b relative">
          <a className="absolute left-0 ml-3" href="/search">
            <IoIosArrowBack className="text-lg font-bold" />
          </a>
          <h1 className="absolute left-1/2 -translate-x-1/2 text-md font-bold">
            需要をさがす
          </h1>
        </div>
      </header>
      <div className="mt-12 flex flex-col">
        <h1 className="text-sm my-6 text-[var(--font-secondary)]">
          こんな商品を探している人がいます
        </h1>
        {demands.map((demand) => (
          <div
            key={demand.id}
            className="py-3 border-t flex flex-col gap-2 cursor-pointer"
            onClick={() => {
              setIsModalOpen(true),
                setDemandName(demand.name),
                setDemandDesc(demand.description),
                setDemandChecked(demand.checked),
                setDemandUserId(demand.user_id),
                setDemandId(demand.id);
              console.log(demand);
            }}
          >
            <div className="flex flex-row justify-between items-center">
              <h1 className="text-sm font-bold">{demand.name}</h1>
              {demand.checked ? (
                <p className="text-xs font-bold px-3 py-1 text-white bg-[var(--accent-red)] rounded-full">
                  提案する
                </p>
              ) : (
                <p className="text-xs font-bold px-3 py-1 text-white bg-[var(--accent-blue)] rounded-full">
                  提案済み
                </p>
              )}
            </div>
            <p className="text-xs text-[var(--font-secondary)]">
              {demand.desc}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-col">
        <h1 className="text-sm my-6 text-[var(--font-secondary)]">
          ジャンルでみる
        </h1>
        {junres.map((junre) => (
          <div key={junre} className="py-3 border-t flex flex-col gap-2">
            <div className="flex flex-row justify-between items-center">
              <h1 className="text-sm font-bold">{junre}</h1>
            </div>
          </div>
        ))}
      </div>
      <Footer />
      {/* モーダル */}
      {isModalOpen && (
        <div className="fixed mx-auto max-w-sm top-0 right-0 left-0 bottom-0 bg-black bg-opacity-20">
          <div className="flex flex-col h-full justify-end ">
            <div className="flex flex-col bg-[var(--bg-primary)] p-5 px-6 rounded-t-3xl">
              <div className="flex flex-row justify-between mb-2">
                <h1 className="text-md font-bold">
                  「{demandName}」
                  {demandChecked ? "を提案" : "の提案を取り消し"}
                </h1>
                <button onClick={() => setIsModalOpen(false)}>
                  <IoCloseOutline className="text-xl" />
                </button>
              </div>
              <p className="text-xs mb-3 text-[var(--font-secondary)]">
                {demandDesc}
              </p>
              {demandChecked ? (
                <>
                  <div className="flex flex-row justify-between">
                    <h1 className="text-sm font-bold">商品を提案する</h1>
                  </div>
                  <p className="text-xs text-[var(--font-secondary)]">
                    商品名や説明を入力してください
                  </p>
                  <div className="flex flex-col gap-2 mt-6">
                    <input
                      type="text"
                      placeholder="商品名"
                      className="px-3 py-2 border  rounded-md"
                    />
                    <input
                      type="text"
                      placeholder="ジャンル"
                      className="px-3 py-2 border  rounded-md"
                    />
                  </div>
                  <button
                    onClick={() => {
                      setIsModalOpen(false),
                        checkDemand(demandUserId, 1, demandId);
                    }}
                    className="px-3 py-2 bg-[var(--accent-red)] rounded-md text-white mt-6"
                  >
                    提案する
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-3 py-2 bg-[var(--accent-blue)] rounded-md text-white mt-6"
                >
                  提案を取り消す
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
