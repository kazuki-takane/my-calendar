import React, { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { isInputDialogOpen } from "../../../states/isInputDialogOpen";
import { Task, tasks } from "../../../states/tasks";
import { clickedDate } from "../../../states/clickedDate";
import { v4 as uuidv4 } from "uuid";
import { isScheduledDialogOpen } from "../../../states/isScheduledDialogOpen";
import { isEditingSchedule } from "../../../states/isEditing";
import { clickedSchedule } from "../../../states/clickedSchedule";

export const useDialog = () => {
  const [inputDialogOpen, setInputDialogOpen] =
    useRecoilState<boolean>(isInputDialogOpen);
  const [scheduleTitle, setScheduleTitle] = useState<string>("");
  const [scheduleDate, setScheduleDate] = useRecoilState<Date>(clickedDate);
  const [schedulePlace, setSchedulePlace] = useState<string>("");
  const [scheduleDescription, setScheduleDescription] = useState<string>("");
  const [schedule, setSchedule] = useRecoilState<Array<Task>>(tasks);
  const [isEditing, setIsEditing] = useRecoilState(isEditingSchedule);
  const [clickedScheduleTask, setClickedScheduleTask] =
    useRecoilState(clickedSchedule);

  const [scheduledDialogOpen, setScheduledDialogOpen] = useRecoilState<boolean>(
    isScheduledDialogOpen
  );

  const handleInputDialogClose = () => {
    setScheduleTitle("");
    setSchedulePlace("");
    setScheduleDescription("");
    setIsEditing(false);
    setInputDialogOpen(false);
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
    let title: string = scheduleTitle;
    let place: string = schedulePlace;
    let description: string = scheduleDescription;
    if (isEditing) {
      if (title === "") {
        title = clickedScheduleTask.title;
      }
      if (place === "") {
        place = clickedScheduleTask.place;
      }
      if (description === "") {
        description = clickedScheduleTask.description;
      }
      const editedTask = {
        id: clickedScheduleTask.id,
        title: title,
        date: scheduleDate,
        place: place,
        description: description,
      };
      const newTasks = schedule.slice();
      const index = newTasks.indexOf(clickedScheduleTask);
      const newEditedTask = newTasks.splice(index, 1, editedTask);
      setClickedScheduleTask(newEditedTask[0]);
      setSchedule(newTasks);
      console.log(newEditedTask[0]);
    } else {
      if (scheduleTitle === "") {
        return;
      }
      const newTask = {
        id: uuidv4(),
        title: scheduleTitle,
        date: scheduleDate,
        place: schedulePlace,
        description: scheduleDescription,
      };

      setSchedule([...schedule, newTask]);
    }
    handleInputDialogClose();
  };

  const handleScheduledDialogClose = () => {
    setScheduledDialogOpen(false);
  };

  return {
    inputDialogOpen,
    setInputDialogOpen,
    scheduleTitle,
    scheduleDate,
    schedulePlace,
    scheduleDescription,
    schedule,
    handleInputDialogClose,
    handleChangeTitle,
    handleChangeDate,
    handleChangePlace,
    handleChangeDescription,
    handleClickSave,
    scheduledDialogOpen,
    handleScheduledDialogClose,
  };
};
