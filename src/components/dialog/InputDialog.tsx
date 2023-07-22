import { styled } from "@mui/material/styles";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PlaceIcon from "@mui/icons-material/Place";
import NotesIcon from "@mui/icons-material/Notes";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { ja } from "date-fns/locale";

import { useDialog } from "./hooks/useDialog";
import { isEditingSchedule } from "../../states/isEditing";
import { useRecoilState, useRecoilValue } from "recoil";
import { clickedSchedule } from "../../states/clickedSchedule";

export const InputDialog = () => {
  const [isEditing, setIsEditing] = useRecoilState<boolean>(isEditingSchedule);
  const clickedScheduleTask = useRecoilValue(clickedSchedule);

  const {
    inputDialogOpen,
    scheduleDate,
    handleInputDialogClose,
    handleChangeTitle,
    handleChangeDate,
    handleChangePlace,
    handleChangeDescription,
    handleClickSave,
  } = useDialog();

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleClickSave();
    }
  };

  return (
    <Dialog open={inputDialogOpen} onClose={handleInputDialogClose}>
      <DialogContent sx={{ width: "400px", maxWidth: "85%" }}>
        <TextField
          autoFocus
          margin="normal"
          label="タイトルを追加"
          type="text"
          fullWidth
          variant="standard"
          onChange={handleChangeTitle}
          onKeyDown={handleEnter}
          defaultValue={isEditing ? clickedScheduleTask.title : ""}
        />
        <SBox sx={{ justifyContent: "left", alignItems: "end" }}>
          <AccessTimeIcon sx={{ mr: 1, mt: 2, mb: "1rem" }} />
          <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ja}>
            <DemoContainer components={["MobileDatePicker"]}>
              <DemoItem label="時間を追加">
                <DatePicker
                  value={scheduleDate}
                  defaultValue={scheduleDate}
                  format="y年/M月/d日"
                  onChange={handleChangeDate}
                />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
        </SBox>
        <SBox>
          <PlaceIcon sx={{ mr: 1, mt: 2 }} />
          <TextField
            multiline
            label="場所を追加"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChangePlace}
            defaultValue={isEditing ? clickedScheduleTask.place : ""}
          />
        </SBox>
        <SBox>
          <NotesIcon sx={{ mr: 1, mt: 2 }} />
          <TextField
            multiline
            label="説明を追加"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChangeDescription}
            defaultValue={isEditing ? clickedScheduleTask.description : ""}
          />
        </SBox>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleInputDialogClose}>キャンセル</Button>
        <Button onClick={handleClickSave}>保存する</Button>
      </DialogActions>
    </Dialog>
  );
};

export const SBox = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
