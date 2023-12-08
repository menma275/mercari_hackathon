"use client";

import Footer from "../components/footer";
import { IoNotificationsOutline } from "react-icons/io5";
import { ImCheckmark2 } from "react-icons/im";
import { IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

export default function Home() {
  const recomendedSpaces = [
    {
      id: 1,
      name: "スペース1",
      price: 1000,
      image_url: "",
      description: "スペースの説明",
    },
    {
      id: 2,
      name: "スペース2",
      price: 2000,
      image_url: "",
      description: "スペースの説明",
    },
    {
      id: 3,
      name: "スペース3",
      price: 500,
      image_url: "",
      description: "スペースの説明",
    },
    {
      id: 4,
      name: "スペース4",
      price: 300,
      image_url: "",
      description: "スペースの説明",
    },
  ];

  const products = [
    {
      id: 1,
      name: "商品1",
      price: 1000,
      image_url: "",
      description: "商品の説明",
    },
    {
      id: 2,
      name: "商品2",
      price: 2000,
      image_url: "",
      description: "商品の説明",
    },
    {
      id: 3,
      name: "商品3",
      price: 500,
      image_url: "",
      description: "商品の説明",
    },
    {
      id: 4,
      name: "商品4",
      price: 300,
      image_url: "",
      description: "商品の説明",
    },
    {
      id: 5,
      name: "商品5",
      price: 750,
      image_url: "",
      description: "商品の説明",
    },
    {
      id: 6,
      name: "商品6",
      price: 1000,
      image_url: "",
      description: "商品の説明",
    },
  ];

  const [roomName, setRoomName] = useState("");
  const [roomDescription, setRoomDescription] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [spaces, setSpaces] = useState([]);
  useEffect(() => {
    const headers = new Headers();
    headers.append("ngrok-skip-browser-warning", "6024");
    const notJoinedRoomsAPI =
      process.env.NEXT_PUBLIC_DB_HOST + "/getNotJoinedRooms?user_id=1";
    fetch(notJoinedRoomsAPI, { headers: headers })
      .then((res) => res.json())
      .then((data) => {
        setSpaces(data.data);
        console.log(data.data);
      })
      .catch((e) => console.log(e));
  }, []);

  // sapacesの上から四つを表示する
  const rs = spaces.slice(0, 4);

  return (
    <main className="pt-3 px-3">
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
        <div className="text-xs text-[var(--font-secondary)] font-semibold pt-2 flex flex-row justify-between px-3">
          <h3 className="p-2">マイリスト</h3>
          <h3 className="p-2 text-[var(--accent-red)] border-b-2 border-[var(--accent-red)]">
            おすすめ
          </h3>
          <h3 className="p-2">キャンペーン</h3>
        </div>
      </div>
      {/* おすすめスペース */}
      <div className="mb-5 text-[var(--font-secondary)]">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-bold text-sm pt-3">おすすめのスペース</h1>
            <p className="text-xs py-2 ">
              気になるスペースをチェックしてみよう
            </p>
          </div>
          <div className="flex flex-row text-[var(--accent-blue)]">
            <p className="text-xs">すべてを見る</p>
            <IoIosArrowForward className="text-md" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {rs.map((space) => (
            <div
              onClick={() => {
                setIsModalOpen(true),
                  setRoomName(space.name),
                  setRoomDescription(space.description);
              }}
              key={space.ID}
              className="w-full h-20 flex flex-row gap-2 rounded-md bg-[var(--bg-secondary)] relative p-2 items-center cursor-pointer"
            >
              <div className="w-12 h-12 bg-red-100 rounded-full"></div>
              <div className="w-2/3 flex flex-wrap gap-1">
                <h2 className="text-sm font-bold truncate">{space.name}</h2>
                <p className="text-xs truncate">{space.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* 普通の商品 */}
      {[...Array(2)].map((_, index) => {
        return (
          <div className="mb-5 text-[var(--font-secondary)]">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="font-bold text-sm pt-3">商品ジャンル</h1>
                <p className="text-xs py-2 ">商品の属性</p>
              </div>
              <div className="flex flex-row text-[var(--accent-blue)]">
                <p className="text-xs">すべてを見る</p>
                <IoIosArrowForward className="text-md" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-1">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="w-full h-auto aspect-[1]  bg-gradient-to-br from-red-50 to-red-200 relative"
                >
                  <p className="text-xs text-white font-bold py-1 pl-1 pr-2 rounded-r-full bg-black bg-opacity-50 absolute bottom-0 left-0">
                    ¥ {product.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
      <Footer />

      {isModalOpen && (
        <div className="fixed mx-auto max-w-sm top-0 right-0 left-0 bottom-0 bg-black bg-opacity-20">
          <div className="flex flex-col h-full justify-end ">
            <div className="flex flex-col bg-[var(--bg-primary)] p-5 px-6 rounded-t-3xl">
              <div className="flex flex-row justify-between mb-3">
                <h1 className="text-md font-bold">{roomName}</h1>
                <button onClick={() => setIsModalOpen(false)}>
                  <IoCloseOutline className="text-xl" />
                </button>
              </div>
              <div className="flex flex-row justify-between">
                <h1 className="text-sm font-bold"></h1>
              </div>
              <p className="text-xs text-[var(--font-secondary)]">
                {roomDescription}
              </p>
              <a
                // onClick={() => setIsModalOpen(false)}
                href="/chat/1"
                className="flex justify-center py-2 bg-[var(--accent-red)] rounded-md text-white mt-6"
              >
                参加する
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
