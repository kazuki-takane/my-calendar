import React from "react";
import { styled } from "@mui/material/styles";
import CalendarMonthTwoToneIcon from "@mui/icons-material/CalendarMonthTwoTone";
import ArrowCircleLeftTwoToneIcon from "@mui/icons-material/ArrowCircleLeftTwoTone";
import ArrowCircleRightTwoToneIcon from "@mui/icons-material/ArrowCircleRightTwoTone";
import Typography from "@mui/material/Typography";
import { useRecoilState } from "recoil";
import { targetDateState } from "../states/targetDateState";
import { format } from "date-fns";

export const Nav = () => {
  const [targetDate, setTargetDate] = useRecoilState(targetDateState);
  return (
    <SNav>
      <CalendarMonthTwoToneIcon
        color="success"
        fontSize="large"
        sx={{ mr: 1 }}
      />
      <Typography variant="h2" sx={{ fontSize: 24, mr: 4 }}>
        カレンダー
      </Typography>
      <ArrowCircleLeftTwoToneIcon color="success" sx={{ mr: 1 }} />
      <ArrowCircleRightTwoToneIcon color="success" sx={{ mr: 2 }} />
      <Typography variant="h2" sx={{ fontSize: 24 }}>
        {format(targetDate, "Y年M月")}
      </Typography>
    </SNav>
  );
};

const SNav = styled("nav")`
  display: flex;
  justify-content: left;
  align-items: center;
  margin-bottom: 2rem;
`;
