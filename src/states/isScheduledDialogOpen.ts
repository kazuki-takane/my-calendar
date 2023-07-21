import { atom } from "recoil";

export const isScheduledDialogOpen = atom<boolean>({
  key: "isScheduledDialogOpen",
  default: false,
});