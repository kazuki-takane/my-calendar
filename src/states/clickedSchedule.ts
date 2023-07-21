import { atom } from "recoil";
import { Task } from "./tasks";

export const clickedSchedule = atom<Task>({
  key: "clickedSchedule",
  default: { id: "", title: "", date: new Date(), place: "", description: "" },
});
