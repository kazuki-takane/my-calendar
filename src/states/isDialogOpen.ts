import { atom } from "recoil";

export const isDialogOpen = atom<boolean>({
  key: "isDialogOpen",
  default: false,
});