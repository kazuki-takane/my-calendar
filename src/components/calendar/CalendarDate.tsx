import { Schedule } from "./Schedule";
import { styled } from "@mui/material/styles";
import { format, getDate } from "date-fns";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isDialogOpen } from "../../states/isDialogOpen";
import { Task, tasks } from "../../states/tasks";
import { clickedDate } from "../../states/clickedDate";

type Props = {
  date: Date;
  isCurrentMonth: boolean;
  isCurrentDate: boolean;
};

export const CalendarDate = ({
  date,
  isCurrentMonth,
  isCurrentDate,
}: Props) => {
  const taskArray = useRecoilValue<Array<Task>>(tasks);
  const setOpen = useSetRecoilState<boolean>(isDialogOpen);
  const setClickedDate = useSetRecoilState<Date>(clickedDate);

  const handleClickOpen = () => {
    setClickedDate(date);
    setOpen(true);
  };

  return (
    <SListItems onClick={handleClickOpen}>
      {isCurrentMonth ? (
        isCurrentDate ? (
          <SDate sx={{ backgroundColor: "#333" }}>{getDate(date)}</SDate>
        ) : (
          <SDate>{getDate(date)}</SDate>
        )
      ) : (
        <SDate sx={{ color: "#ccc" }}>{getDate(date)}</SDate>
      )}
      <STaskList>
        {taskArray.map((task) => {
          if (format(task.date, "Y年M月d日") === format(date, "Y年M月d日")) {
            return <Schedule key={task.id} title={task.title} />;
          }
        })}
      </STaskList>
    </SListItems>
  );
};

const SListItems = styled("li")`
  border: 1px solid #ccc;
  width: 13%;
  list-style: none;
  padding: 4px 8px;
  border-top: 0;
`;
const SDate = styled("div")`
  text-align: center;
  margin-bottom: 1rem;
  font-size: 18px;
  font-weight: bold;
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
