"use client";

// import { spaces } from "/data/lists.js";
import { messages } from "/data/lists.js";
import { reactions } from "/data/lists.js";
import { IoIosArrowBack } from "react-icons/io";
import { IoAddCircleOutline } from "react-icons/io5";
import { RiSendPlaneFill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Page({ params }) {
  const [spaces, setSpaces] = useState([]);
  useEffect(() => {
    console.log("i'm here");
    const headers = new Headers();
    headers.append("ngrok-skip-browser-warning", "6024");
    const api = process.env.NEXT_PUBLIC_DB_HOST + "/getJoinedRooms?user_id=1";
    fetch(api, { headers: headers })
      .then((res) => res.json())
      .then((data) => {
        setSpaces(data.data);
        console.log(data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const space = spaces.find((space) => String(space.id) === params.id);

  const messagesInSpace = messages.filter(
    (message) => String(message.space_id) === params.id
  );
  const reactionsInSpace = reactions.filter(
    (reaction) => String(reaction.space_id) === params.id
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      {/* ヘッダー */}
      <div className="px-3 gap-3 flex items-center h-12 border-b">
        <a href="/chat">
          <IoIosArrowBack className="text-lg font-bold" />
        </a>
        <h1 className="text-md font-bold">{space.name}</h1>
      </div>
      {/* メッセージ */}
      <div className="px-3">
        {messagesInSpace.map((message) => (
          <div className="mt-5 text-sm" key={message.created_time}>
            {message.user_id === 1 ? (
              <div className="flex justify-end">
                <div className="w-fit bg-green-400  rounded-xl px-3 py-2 text-white">
                  <p>{message.text}</p>
                </div>
              </div>
            ) : (
              <div className="group flex justify-start cursor-pointer relative w-fit ">
                <div className="flex flex-row">
                  {message.user_id === 2 ? (
                    <div
                      className="w-6 h-6 bg-teal-500 rounded-full mr-2"
                      onClick={() => {
                        setIsModalOpen(true);
                      }}
                    ></div>
                  ) : (
                    <div
                      className="w-6 h-6 bg-yellow-500 rounded-full mr-2"
                      onClick={() => {
                        setIsModalOpen(true);
                      }}
                    ></div>
                  )}
                  <div className="text-xs text-[var(--font-secondary)]">
                    <p className="m-0">{message.user_name}</p>
                    <div className="bg-[var(--bg-secondary)] rounded-xl mt-1 px-3 py-2">
                      <p className="">{message.text}</p>
                    </div>
                  </div>
                  <div className="absolute -right-2 -bottom-2">
                    {reactionsInSpace.map(
                      (reaction) =>
                        reaction.message_id === message.message_id && (
                          <FaHeart
                            key={reaction.message_id}
                            className="text-[var(--accent-red)] text-lg"
                          />
                        )
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
        <div>
          <div className="fixed max-w-sm bottom-0 left-0 right-0 mx-auto px-3 py-2 bg-zinc-100">
            <div className="gap-3 flex justify-between items-center h-full">
              <button>
                <IoAddCircleOutline className="text-2xl text-[var(--font-primary)]" />
              </button>
              <input
                className="w-full text-sm px-3 h-10 rounded-full outline-none"
                type="text"
                placeholder="メッセージを入力"
              />
              <button>
                <RiSendPlaneFill className="text-2xl text-[var(--font-primary)]" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed mx-auto max-w-sm top-0 right-0 left-0 bottom-0 bg-black bg-opacity-20">
          <div className="flex flex-col h-full justify-end ">
            <div className="flex flex-col bg-[var(--bg-primary)] p-5 px-6 rounded-t-3xl">
              <div className="flex flex-row justify-between">
                {/* アイコン + 名前 + レビュー */}
                <header className="flex flex-row justify-start gap-5 items-center">
                  <div className="w-12 h-12 bg-yellow-500  rounded-full"></div>
                  <div>
                    <h1>ひび</h1>
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
                <button onClick={() => setIsModalOpen(false)}>
                  <IoCloseOutline className="text-xl" />
                </button>
              </div>
              <div className="flex flex-row gap-3">
                <p className="text-xs w-fit mt-3 font-bold ">40 出品</p>
                <p className="text-xs w-fit mt-3 font-bold ">25 フォロワー</p>
                <p className="text-xs w-fit mt-3 font-bold ">30 フォロー中</p>
              </div>
              <div className="flex flex-row justify-between">
                <button className="text-xs w-fit px-3 py-2 border-2 border-[var(--accent-red)] rounded-md text-[var(--accent-red)] mt-3 font-bold ">
                  メルギフトを贈る
                </button>
                <button className="text-xs w-fit px-3 py-2 bg-[var(--accent-red)] rounded-md text-white mt-3 font-bold">
                  フォローする
                </button>
                <button className="text-xs w-fit px-3 py-2 bg-[var(--accent-red)] rounded-md text-white mt-3 font-bold">
                  メッセージ
                </button>
              </div>
              <div className="mt-3 py-3 border-b">
                <h1 className="text-sm font-bold">自己紹介文</h1>
                <p className="text-[var(--font-secondary)] text-sm">
                  はじめまして、ひびと申します。
                  みなさんと、ものを通して繋がりたいです！
                </p>
              </div>
              <div className="mt-3 py-3 border-b">
                <h1 className="text-sm font-bold">所属スペース</h1>
                <div className="flex flex-row gap-3 mt-2">
                  <p className="text-[var(--font-secondary)] text-sm">
                    スポーツ用品
                  </p>
                  <p className="text-[var(--font-secondary)] text-sm">漫画</p>
                  <p className="text-[var(--font-secondary)] text-sm">
                    インテリア
                  </p>
                </div>
              </div>
              <div className="mt-3 py-3 border-b">
                <h1 className="mb-3 text-sm font-bold">
                  自動生成アイデンティティ
                </h1>
                <img src="/identity.png" className="w-fit" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
