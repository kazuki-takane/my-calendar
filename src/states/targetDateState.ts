import {
  eachDayOfInterval,
  eachWeekOfInterval,
  endOfMonth,
  endOfWeek,
  startOfMonth,
} from "date-fns";
import { atom, selector } from "recoil";

export const targetDateState = atom<Date>({
  key: "targetDateState",
  default: new Date(),
});

export const calendarDateArray = selector<Array<Array<Date>>>({
  key: "calendarDateArray",
  get: ({ get }) => {
    const sundays = eachWeekOfInterval({
      start: startOfMonth(get(targetDateState)),
      end: endOfMonth(get(targetDateState)),
    });
    const dateArray = sundays.map((sunday) =>
      eachDayOfInterval({
        start: sunday,
        end: endOfWeek(sunday),
      })
    );
    return dateArray;
  },
});
