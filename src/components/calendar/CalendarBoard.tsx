import { CalendarDate } from "./CalendarDate";
import { styled } from "@mui/material/styles";
import { useRecoilValue } from "recoil";
import {
  calendarDateArray,
  targetDateState,
} from "../../states/targetDateState";
import { getDate, getMonth } from "date-fns";
import { v4 as uuidv4 } from "uuid";
import { InputDialog } from "../dialog/InputDialog";

const dayList: Array<string> = ["日", "月", "火", "水", "木", "金", "土"];

export const CalendarBoard = () => {
  const targetDate = useRecoilValue(targetDateState);
  const dateArray: Array<Array<Date>> = useRecoilValue(calendarDateArray);
  const today: Date = new Date();

  return (
    <div>
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
              isCurrentDate={getDate(date) === getDate(today)}
            />
          ))
        )}
      </SDateList>
      <InputDialog />
    </div>
  );
};

const SDayList = styled("ul")`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
`;
const SDateList = styled("ul")`
  display: flex;
  flex-wrap: wrap;
`;
const SListItem = styled("li")`
  border: 1px solid #ccc;
  width: 13%;
  list-style: none;
  padding: 4px 8px;
  font-weight: bold;
  border-bottom: none;
  height: 22px;
`;
