import { atom } from "recoil";

export const targetDateState = atom({
  key: "targetDateState",
  default: new Date(),
});
