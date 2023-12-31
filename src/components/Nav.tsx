import { useRecoilState } from "recoil";
import { format, subMonths, addMonths } from "date-fns";
import { styled } from "@mui/material/styles";
import CalendarMonthTwoToneIcon from "@mui/icons-material/CalendarMonthTwoTone";
import ArrowCircleLeftTwoToneIcon from "@mui/icons-material/ArrowCircleLeftTwoTone";
import ArrowCircleRightTwoToneIcon from "@mui/icons-material/ArrowCircleRightTwoTone";
import Typography from "@mui/material/Typography";
import { Tooltip } from "@mui/material";

import { targetDateState } from "../states/targetDateState";

export const Nav = () => {
  const [targetDate, setTargetDate] = useRecoilState<Date>(targetDateState);

  const handleLeftClick = () => {
    setTargetDate(subMonths(targetDate, 1));
  };

  const handleRightClick = () => {
    setTargetDate(addMonths(targetDate, 1));
  };

  return (
    <SNav>
      <CalendarMonthTwoToneIcon
        color="success"
        fontSize="large"
        sx={{ mr: 1 }}
      />
      <Typography
        variant="h2"
        sx={{
          fontSize: 24,
          mr: 4,
          "@media (max-width: 960px)": { fontSize: 18 },
        }}
      >
        カレンダー
      </Typography>
      <Tooltip title="先月へ" arrow>
        <ArrowCircleLeftTwoToneIcon
          color="success"
          sx={{ mr: 1, cursor: "pointer", "&:hover": { opacity: 0.7 } }}
          onClick={handleLeftClick}
        />
      </Tooltip>
      <Tooltip title="翌月へ" arrow>
        <ArrowCircleRightTwoToneIcon
          color="success"
          sx={{ mr: 2, cursor: "pointer", "&:hover": { opacity: 0.7 } }}
          onClick={handleRightClick}
        />
      </Tooltip>
      <Typography
        variant="h2"
        sx={{ fontSize: 24, "@media (max-width: 960px)": { fontSize: 18 } }}
      >
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
