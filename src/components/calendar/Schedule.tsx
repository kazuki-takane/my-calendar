import React from "react";
import { styled } from "@mui/material/styles";
import { useSetRecoilState } from "recoil";

import { isScheduledDialogOpen } from "../../states/isScheduledDialogOpen";
import { Task } from "../../states/tasks";
import { clickedSchedule } from "../../states/clickedSchedule";
import { clickedDate } from "../../states/clickedDate";

type Props = {
  task: Task;
};

export const Schedule = ({ task }: Props) => {
  const setScheduledDialogOpen = useSetRecoilState<boolean>(
    isScheduledDialogOpen
  );
  const setClickedSchedule = useSetRecoilState<Task>(clickedSchedule);
  const setClickedDate = useSetRecoilState<Date>(clickedDate);
  console.log("schedule rendering");

  const handleScheduleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setClickedSchedule(task);
    setClickedDate(task.date);
    setScheduledDialogOpen(true);
  };
  return <SSchedule onClick={handleScheduleClick}>{task.title}</SSchedule>;
};

const SSchedule = styled("li")`
  background-color: #00a152;
  color: #fff;
  margin-bottom: 0.2rem;
  width: fit-content;
  padding: 0.2rem;
  border-radius: 8px;
`;
