const users = [
  {
    _id: "1",
    username: "karthick",
    email: "kar@email.com",
    chats: [
      {
        _id: "ch1",
        members: ["1", "2"],
        messages: [
          {
            _id: "m1",
            chatId: "ch1",
            senderId: "1",
            message: "hey man leave her alone!",
          },
          {
            _id: "m2",
            chatId: "ch1",
            senderId: "2",
            message: "sent by namratha!",
          },
          {
            _id: "m3",
            chatId: "ch1",
            senderId: "1",
            message: "get back to the kitch bitch!",
          },
        ],
      },
    ],
  },
  {
    _id: "2",
    username: "namratha",
    email: "nam@email.com",
    chats: [
      {
        _id: "ch1",
        members: ["1", "2"],
        messages: [
          {
            _id: "m1",
            chatId: "ch1",
            senderId: "1",
            message: "hey man leave her alone!",
          },
          {
            _id: "m2",
            chatId: "ch1",
            senderId: "2",
            message: "sent by namratha!",
          },
          {
            _id: "m3",
            chatId: "ch1",
            senderId: "1",
            message: "get back to the kitch bitch!",
          },
        ],
      },
      {
        _id: "ch2",
        members: ["2", "3"],
        messages: [
          {
            _id: "m4",
            chatId: "ch2",
            senderId: "2",
            message: "sent by namratha to shreya!",
          },
          {
            _id: "m5",
            chatId: "ch2",
            senderId: "3",
            message: "sent by shreya!",
          },
        ],
      },
    ],
  },
  {
    _id: "3",
    username: "shreya",
    email: "shr@email.com",
    chats: [
      {
        id: "ch2",
        members: ["2", "3"],
        messages: [
          {
            _id: "m4",
            chatId: "ch2",
            senderId: "2",
            message: "sent by namratha to shreya!",
          },
          {
            _id: "m5",
            chatId: "ch2",
            senderId: "3",
            message: "sent by shreya!",
          },
        ],
      },
    ],
  },
];

// user id
export const getUserChats = (id) => {
  const userChats = users.find((us) => us._id === id);

  const chts = [];
  for (let i = 0; i < userChats.chats.length; i++) {
    chts.push(userChats.chats[i]);
  }
  return chts;
};

// user id
export const getUserChatsMessages = (id) => {
  const userChats = getUserChats(id);

  const chts = [];
  for (let i = 0; i < userChats.length; i++) {
    for (let j = 0; j < userChats[i].messages.length; j++) {
      chts.push(userChats[i].messages[j]);
    }
  }
  return chts;
};
