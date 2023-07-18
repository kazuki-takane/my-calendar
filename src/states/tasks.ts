import { atom } from "recoil";

export type Task = {
  id: string;
  title: string;
  date: Date;
  place: string;
  description: string;
};

export const tasks = atom<Array<Task>>({
  key: "tasks",
  default: [],
});
