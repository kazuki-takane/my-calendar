import { memo } from "react";
import { styled } from "@mui/material/styles";
import { useRecoilValue } from "recoil";
import { format, getMonth } from "date-fns";
import { v4 as uuidv4 } from "uuid";

import { CalendarDate } from "./CalendarDate";
import { InputDialog } from "../dialog/InputDialog";
import { ScheduledDialog } from "../dialog/ScheduledDialog";
import {
  calendarDateArray,
  targetDateState,
} from "../../states/targetDateState";

const dayList: Array<string> = ["日", "月", "火", "水", "木", "金", "土"];

export const CalendarBoard = memo(() => {
  const targetDate: Date = useRecoilValue(targetDateState);
  const dateArray: Array<Array<Date>> = useRecoilValue(calendarDateArray);
  const today: Date = new Date();
  console.log("board rendering");

  return (
    <SContainer>
      <SDayList>
        {dayList.map((day) => (
          <SListItem key={uuidv4()}>{day}</SListItem>
        ))}
      </SDayList>
      <SDateList>
        {dateArray.map((week) =>
          week.map((date) => (
            <CalendarDate
              key={uuidv4()}
              date={date}
              isCurrentMonth={getMonth(date) === getMonth(targetDate)}
              isCurrentDate={
                format(date, "Y年M月d日") === format(today, "Y年M月d日")
              }
            />
          ))
        )}
      </SDateList>
      <InputDialog />
      <ScheduledDialog />
    </SContainer>
  );
});

const SContainer = styled("div")``;

const SDayList = styled("ul")`
  display: flex;
  flex-wrap: no-wrap;
  text-align: center;
  justify-content: center;
`;
const SDateList = styled("ul")`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const SListItem = styled("li")`
  border: 1px solid #ccc;
  width: 13%;
  list-style: none;
  padding: 4px 0;
  font-weight: bold;
  border-bottom: none;
  height: 22px;
  @media (max-width: 960px) {
    padding: 0;
    width: 13%;
  }
`;
