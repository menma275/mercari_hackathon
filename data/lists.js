const user = [
  {
    id: 1,
    name: "ユーザー1",
    spaceId: {
      id: 1,
      id: 2,
      id: 3,
    },
  },
];

const spaces = [
  {
    id: 1,
    name: "スペース1",
    desc: "スペース1の説明",
    ownerId: "1",
    createdDate: "2021-01-01",
  },
  {
    id: 2,
    name: "スペース2",
    desc: "スペース2の説明",
    ownerId: "2",
    createdDate: "2021-01-02",
  },
  {
    id: 3,
    name: "スペース3",
    desc: "スペース3の説明",
    ownerId: "3",
    createdDate: "2021-01-03",
  },
  {
    id: 4,
    name: "スペース4",
    desc: "スペース4の説明",
    ownerId: "4",
    createdDate: "2021-01-05",
  },
  {
    id: 5,
    name: "スペース5",
    desc: "スペース5の説明",
    ownerId: "5",
    createdDate: "2021-01-06",
  },
  {
    id: 6,
    name: "スペース6",
    desc: "スペース6の説明",
    ownerId: "6",
    createdDate: "2021-01-07",
  },
  {
    id: 7,
    name: "スペース7",
    desc: "スペース7の説明",
    ownerId: "7",
    createdDate: "2021-01-08",
  },
  {
    id: 8,
    name: "スペース8",
    desc: "スペース8の説明",
    ownerId: "8",
    createdDate: "2021-01-09",
  },
  {
    id: 9,
    name: "スペース9",
    desc: "スペース9の説明",
    ownerId: "9",
    createdDate: "2021-01-10",
  },
];

const demands = [
  {
    space_id: 1,
    user_id: 5,
    demand_id: 1,
    name: "白いスニーカー",
    desc: "白いスニーカーが欲しいです。",
  },
  {
    space_id: 1,
    user_id: 5,
    demand_id: 2,
    name: "白いスニーカー",
    desc: "白いスニーカーが欲しいです。",
  },
];

const messages = [
  {
    space_id: 1,
    user_id: 2,
    user_name: "さい",
    message_id: 1,
    text: "Penthhouseが僕らが旅に出る理由カバーしてました！！",
    created_date: "2021-01-01",
    created_time: "12:00:00",
    type: "text",
    image_url: "",
  },
  {
    space_id: 1,
    user_id: 2,
    user_name: "さい",
    message_id: 2,
    text: "僕らが旅に出る理由、久しぶりに聞いたけど良すぎる、、",
    created_date: "2021-01-01",
    created_time: "12:00:01",
    type: "text",
    image_url: "",
  },
  {
    space_id: 1,
    user_id: 3,
    user_name: "ひび",
    message_id: 3,
    text: "900番講堂講義限定グッズが欲しすぎます！！誰か譲ってくれませんか？",
    created_date: "2021-01-01",
    created_time: "12:00:02",
    type: "text",
    image_url: "",
  },
  {
    space_id: 1,
    user_id: 3,
    user_name: "ひび",
    message_id: 4,
    text: "『うさぎ！』全巻持ってます！読み終わったので誰かほしい人いませんか？",
    created_date: "2021-01-01",
    created_time: "12:00:02",
    type: "text",
    image_url: "",
  },
];

const reactions = [
  {
    space_id: 1,
    user_id: 1,
    message_id: 2,
  },
  {
    space_id: 1,
    user_id: 2,
    message_id: 3,
  },
  {
    space_id: 1,
    user_id: 2,
    message_id: 4,
  },
];

export { user, spaces, messages, reactions, demands };
