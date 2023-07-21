import { atom } from "recoil";

export const isInputDialogOpen = atom<boolean>({
  key: "isInputDialogOpen",
  default: false,
});