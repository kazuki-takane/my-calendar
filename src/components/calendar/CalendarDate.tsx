import React, { useState } from "react";
import { Schedule } from "./Schedule";
import { styled } from "@mui/material/styles";
import { getDate } from "date-fns";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  TextField,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PlaceIcon from "@mui/icons-material/Place";
import NotesIcon from "@mui/icons-material/Notes";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { ja } from "date-fns/locale";

type Props = {
  date: Date;
  isCurrentMonth: boolean;
};

export const CalendarDate = ({ date, isCurrentMonth }: Props) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <SListItem sx={{ borderTop: "none" }} onClick={handleClickOpen}>
      {isCurrentMonth ? (
        <SDate>{getDate(date)}</SDate>
      ) : (
        <SDate sx={{ color: "#ccc" }}>{getDate(date)}</SDate>
      )}
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
          />
          <SDiv>
            <AccessTimeIcon sx={{ mt: 2 }} />
            <LocalizationProvider
              dateAdapter={AdapterDateFns}
              adapterLocale={ja}
            >
              <DemoContainer components={["MobileDatePicker"]}>
                <DemoItem label="時間を追加">
                  <DatePicker defaultValue={date} format="y年/M月/d日" />
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
            />
          </SDiv>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
      <Schedule />
    </SListItem>
  );
};

const SListItem = styled("li")`
  border: 1px solid #ccc;
  width: 13%;
  list-style: none;
  padding: 4px 8px;
  height: 160px;
`;
const SDate = styled("div")`
  text-align: center;
  margin-bottom: 1rem;
  font-size: 18px;
  font-weight: bold;
`;
const SDiv = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
