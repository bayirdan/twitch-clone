import { createSlice } from "@reduxjs/toolkit";

export const category = createSlice({
  name: "category",
  initialState: {
    games: [
      {
        name: "Dota 2",
        image: "./images/categories/game1.jpg",
        viewer: "63.3k",
      },
      {
        name: "Chess",
        image: "./images/categories/game2.jpg",
        viewer: "23.7k",
      },
      {
        name: "PUBG: BATTLEGROUNDS",
        image: "./images/categories/game3.jpg",
        viewer: "34.3k",
      },
      {
        name: "Just Chatting",
        image: "./images/categories/game4.jpg",
        viewer: "580k",
      },
      {
        name: "Grand Theft Auto V",
        image: "./images/categories/game5.jpg",
        viewer: "144k",
      },
      {
        name: "Elder Ring",
        image: "./images/categories/game6.jpg",
        viewer: "88k",
      },
      {
        name: "Apex Legends",
        image: "./images/categories/game7.jpg",
        viewer: "112.6k",
      },
      {
        name: "Call of Duty: Wardzone",
        image: "./images/categories/game8.jpg",
        viewer: "39k",
      },
      {
        name: "Escape from Tarkov",
        image: "./images/categories/game9.jpg",
        viewer: "20k",
      },
      {
        name: "FIFA 22",
        image: "./images/categories/game10.jpg",
        viewer: "42.2k",
      },
      {
        name: "Fortnite",
        image: "./images/categories/game11.jpg",
        viewer: "102k",
      },
      {
        name: "Age of Empires",
        image: "./images/categories/game12.jpg",
        viewer: "5.4k",
      },
    ],
  },
});

export default category.reducer;
