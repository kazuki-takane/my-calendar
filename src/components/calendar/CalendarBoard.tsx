import React from "react";
import { CalendarDate } from "./CalendarDate";
import { styled } from "@mui/material/styles";
import { useRecoilValue } from "recoil";
import {
  calendarDateArray,
  targetDateState,
} from "../../states/targetDateState";
import { getDay, getMonth } from "date-fns";

export const CalendarBoard = () => {
  const currentMonth = useRecoilValue(targetDateState);
  let dateArray: Array<Array<Date>> = useRecoilValue(calendarDateArray);
  return (
    <div>
      <SUl sx={{ display: "flex", flexWrap: "wrap", textAlign: "center" }}>
        <SListItem sx={{ borderBottom: "none", height: "22px" }}>日</SListItem>
        <SListItem sx={{ borderBottom: "none", height: "22px" }}>月</SListItem>
        <SListItem sx={{ borderBottom: "none", height: "22px" }}>火</SListItem>
        <SListItem sx={{ borderBottom: "none", height: "22px" }}>水</SListItem>
        <SListItem sx={{ borderBottom: "none", height: "22px" }}>木</SListItem>
        <SListItem sx={{ borderBottom: "none", height: "22px" }}>金</SListItem>
        <SListItem sx={{ borderBottom: "none", height: "22px" }}>土</SListItem>
      </SUl>
      <SUl sx={{ display: "flex", flexWrap: "wrap" }}>
        {dateArray.map((week) =>
          week.map((date) => (
            <CalendarDate
              key={getDay(date)}
              date={date}
              isCurrentMonth={getMonth(date) === getMonth(currentMonth)}
            />
          ))
        )}
      </SUl>
    </div>
  );
};

const SUl = styled("ul")``;
const SListItem = styled("li")`
  border: 1px solid #ccc;
  width: 13%;
  list-style: none;
  padding: 4px 8px;
  height: 160px;
  font-weight: bold;
`;
