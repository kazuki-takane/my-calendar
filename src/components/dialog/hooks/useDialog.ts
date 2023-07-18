import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { isDialogOpen } from "../../../states/isDialogOpen";
import { Task, tasks } from "../../../states/tasks";
import { clickedDate } from "../../../states/clickedDate";
import { v4 as uuidv4 } from "uuid";

export const useDialog = () => {
  const [open, setOpen] = useRecoilState<boolean>(isDialogOpen);
  const [scheduleTitle, setScheduleTitle] = useState<string>("");
  const [scheduleDate, setScheduleDate] = useRecoilState<Date>(clickedDate);
  const [schedulePlace, setSchedulePlace] = useState<string>("");
  const [scheduleDescription, setScheduleDescription] = useState<string>("");
  const [schedule, setSchedule] = useRecoilState<Array<Task>>(tasks);

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setScheduleTitle(e.target.value);
  };

  const handleChangeDate = (value: Date | null) => {
    if (typeof value === null) {
      return;
    } else {
      const newValue: Date = value as Date;
      setScheduleDate(newValue);
    }
  };

  const handleChangePlace = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSchedulePlace(e.target.value);
  };

  const handleChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setScheduleDescription(e.target.value);
  };

  const handleClickSave = () => {
    const newTask = {
      id: uuidv4(),
      title: scheduleTitle,
      date: scheduleDate,
      place: schedulePlace,
      description: scheduleDescription,
    };

    setSchedule([...schedule, newTask]);
    handleClose();
  };

  return {
    open,
    setOpen,
    scheduleTitle,
    scheduleDate,
    schedulePlace,
    scheduleDescription,
    schedule,
    handleClose,
    handleChangeTitle,
    handleChangeDate,
    handleChangePlace,
    handleChangeDescription,
    handleClickSave,
  };
};
