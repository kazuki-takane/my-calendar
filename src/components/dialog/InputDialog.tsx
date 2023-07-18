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

export const InputDialog = () => {
  const {
    open,
    scheduleDate,
    handleClose,
    handleChangeTitle,
    handleChangeDate,
    handleChangePlace,
    handleChangeDescription,
    handleClickSave,
  } = useDialog();

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent>
        <TextField
          autoFocus
          multiline
          margin="normal"
          label="タイトルを追加"
          type="text"
          fullWidth
          variant="standard"
          onChange={handleChangeTitle}
        />
        <SDiv>
          <AccessTimeIcon sx={{ mt: 2 }} />
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
        </SDiv>
        <SDiv>
          <PlaceIcon sx={{ mt: 2 }} />
          <TextField
            multiline
            label="場所を追加"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChangePlace}
          />
        </SDiv>
        <SDiv>
          <NotesIcon sx={{ mt: 2 }} />
          <TextField
            multiline
            label="説明を追加"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChangeDescription}
          />
        </SDiv>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>キャンセル</Button>
        <Button onClick={handleClickSave}>保存する</Button>
      </DialogActions>
    </Dialog>
  );
};

const SDiv = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
