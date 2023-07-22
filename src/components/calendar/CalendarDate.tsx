import { memo } from "react";
import { styled } from "@mui/material/styles";
import { format, getDate } from "date-fns";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { Schedule } from "./Schedule";
import { isInputDialogOpen } from "../../states/isInputDialogOpen";
import { Task, tasks } from "../../states/tasks";
import { clickedDate } from "../../states/clickedDate";

type Props = {
  date: Date;
  isCurrentMonth: boolean;
  isCurrentDate: boolean;
};

export const CalendarDate = memo(({
  date,
  isCurrentMonth,
  isCurrentDate,
}: Props) => {
  const taskArray: Array<Task> = useRecoilValue(tasks);
  const setInputDialogOpen = useSetRecoilState<boolean>(isInputDialogOpen);
  const setClickedDate = useSetRecoilState<Date>(clickedDate);
  console.log("date rendering");

  const handleDateClick = () => {
    setClickedDate(date);
    setInputDialogOpen(true);
  };

  return (
    <SListItems onClick={handleDateClick}>
      {isCurrentMonth ? (
        isCurrentDate ? (
          <SDate sx={{ bgcolor: "#00a152", color: "#fff" }}>
            {getDate(date)}
          </SDate>
        ) : (
          <SDate>{getDate(date)}</SDate>
        )
      ) : (
        <SDate sx={{ color: "#ccc" }}>{getDate(date)}</SDate>
      )}
      <STaskList>
        {taskArray.map((task) => {
          if (format(task.date, "Y年M月d日") === format(date, "Y年M月d日")) {
            return <Schedule key={task.id} task={task} />;
          }
        })}
      </STaskList>
    </SListItems>
  );
});

const SListItems = styled("li")`
  border: 1px solid #ccc;
  width: 13%;
  list-style: none;
  padding: 4px 0;
  border-top: 0;
  @media (max-width: 960px) {
    padding: 0;
    width: 13%;
  }
`;
const SDate = styled("div")`
  text-align: center;
  margin: 0 auto 1rem;
  font-size: 18px;
  font-weight: bold;
  width: 2rem;
  height: 2rem;
  padding: 0.2rem;
  border-radius: 100%;
  display: flex;
  justify-content: center;
`;

const STaskList = styled("ul")`
  height: 140px;
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  &::-webkit-scrollbar-track {
    background-color: #fff;
  }
  &::-webkit-scrollbar-thumb {
    background: #999;
    border-radius: 10px;
  }
`;
