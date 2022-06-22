import { atom, selector } from "recoil";

export const currentTime = atom({
  key: "currentTime",
  default: new Date(2022, 5, 9),
});

export const currentDay = atom({
  key: "currentDay",
  default: [],
});
export const friendList = atom({
  key: "friend",
  default: [
    { id: Date.now(), name: "친구1" },
    { id: Date.now(), name: "그룹2" },
    { id: Date.now(), name: "그룹3" },
    { id: Date.now(), name: "그룹4" },
    { id: Date.now(), name: "그룹1" },
    { id: Date.now(), name: "친구10" },
    { id: Date.now(), name: "친구1" },
    { id: Date.now(), name: "그룹2" },
    { id: Date.now(), name: "그룹3" },
    { id: Date.now(), name: "그룹4" },
    { id: Date.now(), name: "그룹1" },
    { id: Date.now(), name: "친구10" },
  ],
});
export const checkColor = atom({
  key: "Color",
  default: [{ id: 0, check: false }],
}); //출석 되어있는 날짜
