import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { format } from "date-fns";
import { styled } from "styled-components";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import NotesIcon from "@mui/icons-material/Notes";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";

import { SBox } from "./InputDialog";
import { useDialog } from "./hooks/useDialog";
import { clickedSchedule } from "../../states/clickedSchedule";
import { Task, tasks } from "../../states/tasks";
import { isInputDialogOpen } from "../../states/isInputDialogOpen";
import { isEditingSchedule } from "../../states/isEditing";

export const ScheduledDialog = () => {
  const clickedScheduleTask: Task = useRecoilValue(clickedSchedule);
  const [currentTasks, setCurrentTasks] = useRecoilState<Array<Task>>(tasks);
  const setIsEditDialogOpen = useSetRecoilState<boolean>(isInputDialogOpen);
  const { scheduledDialogOpen, handleScheduledDialogClose } = useDialog();

  const setIsEditing = useSetRecoilState<boolean>(isEditingSchedule);

  const handleEditClick = () => {
    setIsEditing(true);
    setIsEditDialogOpen(true);
    handleScheduledDialogClose();
  };

  const handleDeleteClick = () => {
    const newTasks = currentTasks.filter(
      (currentTask) => currentTask !== clickedScheduleTask
    );
    setCurrentTasks(newTasks);
    handleScheduledDialogClose();
  };

  return (
    <Dialog onClose={handleScheduledDialogClose} open={scheduledDialogOpen}>
      <SIcons>
        <IconButton
          title="編集"
          size="small"
          sx={{ mr: 1 }}
          onClick={handleEditClick}
        >
          <BorderColorIcon fontSize="small" color="success" />
        </IconButton>
        <IconButton
          title="予定を削除"
          size="small"
          sx={{ mr: 1 }}
          onClick={handleDeleteClick}
        >
          <DeleteIcon fontSize="small" color="success" />
        </IconButton>
        <IconButton
          title="閉じる"
          size="small"
          sx={{ mr: 1 }}
          onClick={handleScheduledDialogClose}
        >
          <CloseIcon fontSize="small" color="success" />
        </IconButton>
      </SIcons>
      <DialogTitle sx={{ fontWeight: "bold" }}>
        {clickedScheduleTask.title}
      </DialogTitle>
      <DialogContent
        sx={{
          width: "480px",
          "@media (max-width: 960px)": { maxWidth: "85%" },
        }}
      >
        <DialogContentText>
          {format(clickedScheduleTask.date, "Y年M月d日")}
        </DialogContentText>
        <SBox sx={{ mt: 1, justifyContent: "left" }}>
          <PlaceIcon sx={{ mr: 2 }} color="success" />
          <DialogContentText id="alert-dialog-description">
            {clickedScheduleTask.place}
          </DialogContentText>
        </SBox>
        <SBox sx={{ mt: 1, justifyContent: "left" }}>
          <NotesIcon sx={{ mr: 2 }} color="success" />
          <DialogContentText id="alert-dialog-description">
            {clickedScheduleTask.description}
          </DialogContentText>
        </SBox>
      </DialogContent>
    </Dialog>
  );
};

const SIcons = styled("div")`
  display: flex;
  justify-content: right;
  align-items: center;
  padding: 1rem;
`;
