import { atom } from "recoil";

export const isEditingSchedule = atom<boolean>({
  key: "isEditingSchedule",
  default: false,
});
