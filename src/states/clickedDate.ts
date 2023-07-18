import { atom } from "recoil";

export const clickedDate = atom<Date>({
  key: "clickedDate",
  default: new Date(),
});
