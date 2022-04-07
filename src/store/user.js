import { createSlice } from "@reduxjs/toolkit";

export const user = createSlice({
  name: "user",
  initialState: {
    users: [
      {
        username: "CosmoKramer",
        title: "Rapid Chess Championship!",
        game: "Chess",
        tag: "Chatting",
        pp: "https://i.pravatar.cc/",
        liveScreen: "./images/games/game-chees.jpg",
        viewers: "17.1K",
      },
      {
        username: "Soprano",
        title: "Im back",
        game: "Dota 2",
        tag: "Turkish",
        pp: "https://i.pravatar.cc/",
        liveScreen: "./images/games/game-dota.jpg",
        viewers: "395",
      },
      {
        username: "Seinfeld",
        title: "Reduce Ping & Avoid Lags",
        game: "PUBG",
        tag: "English",
        pp: "https://i.pravatar.cc/",
        liveScreen: "./images/games/game-pubg.jpg",
        viewers: "5.4K",
      },
      {
        username: "Darlene",
        title: "FPS soon? OMEGALUL",
        game: "Counter Strike",
        tag: "English",
        pp: "https://i.pravatar.cc/",
        liveScreen: "./images/games/game-cs.jpg",
        viewers: "117",
      },
      {
        username: "Cersei",
        title: "Live Bitcoin Trading Infos 24/7",
        game: "Crypto",
        tag: "Chatting",
        pp: "https://i.pravatar.cc/",
        liveScreen: "./images/games/game-crypto.jpg",
        viewers: "88",
      },
      {
        username: "Jacob",
        title: "LVL 70 - Tracksuit Grind",
        game: "Escape From Tarkov",
        tag: "Turkish",
        pp: "https://i.pravatar.cc/",
        liveScreen: "./images/games/game-eft.jpg",
        viewers: "733",
      },
      {
        username: "Skyler",
        title: "Tourney Run Kollo",
        game: "Mortal Kombat",
        tag: "English",
        pp: "https://i.pravatar.cc/",
        liveScreen: "./images/games/game-mortal.jpg",
        viewers: "231",
      },
      {
        username: "Schillinger",
        title: "Day 12 of the Game of Year ?",
        game: "Elder Ring",
        tag: "English",
        pp: "https://i.pravatar.cc/",
        liveScreen: "./images/games/game-elder.jpg",
        viewers: "3.7K",
      },
    ],
  },
});

export default user.reducer;
