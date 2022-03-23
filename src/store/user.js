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
        pp: "./images/users/user1.png",
        liveScreen: "./images/games/game-chees.jpg",
        viewers: "14.4k",
      },
      {
        username: "Soprano",
        title: "Im back",
        game: "Dota 2",
        tag: "Turkish",
        pp: "./images/users/user2.png",
        liveScreen: "./images/games/game-dota.jpg",
        viewers: "395",
      },
      {
        username: "Seinfeld",
        title: "Reduce Ping & Avoid Lags",
        game: "PUBG",
        tag: "English",
        pp: "./images/users/user3.png",
        liveScreen: "./images/games/game-pubg.jpg",
        viewers: "1.4k",
      },
      {
        username: "Darlene",
        title: "FPS soon? OMEGALUL",
        game: "Counter Strike",
        tag: "English",
        pp: "./images/users/user4.png",
        liveScreen: "./images/games/game-cs.jpg",
        viewers: "11.7k",
      },
      {
        username: "Cersei",
        title: "Live Bitcoin Trading Infos 24/7",
        game: "Crypto",
        tag: "Chatting",
        pp: "./images/users/user5.png",
        liveScreen: "./images/games/game-crypto.jpg",
        viewers: "14.4k",
      },
      {
        username: "Jacob",
        title: "LVL 70 - Tracksuit Grind",
        game: "Escape From Tarkov",
        tag: "Turkish",
        pp: "./images/users/user6.png",
        liveScreen: "./images/games/game-eft.jpg",
        viewers: "395",
      },
      {
        username: "Skyler",
        title: "TOURNEY RUN KOLLO",
        game: "Mortal Kombat",
        tag: "English",
        pp: "./images/users/user7.png",
        liveScreen: "./images/games/game-mortal.jpg",
        viewers: "1.4k",
      },
      {
        username: "Schillinger",
        title: "Day 12 of the GAME OF THE YEAR ?",
        game: "Elder Ring",
        tag: "English",
        pp: "./images/users/user8.png",
        liveScreen: "./images/games/game-elder.jpg",
        viewers: "11.7k",
      },
    ],
  },
});

export default user.reducer;
