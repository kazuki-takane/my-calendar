import React from "react";
import { Schedule } from "./Schedule";
import { styled } from "@mui/material/styles";

export const CalendarDate = () => {
  return (
    <div>
      <SUl sx={{ display: "flex", flexWrap: "wrap", textAlign: "center" }}>
        <SListItem sx={{ borderBottom: "none", height: "22px" }}>日</SListItem>
        <SListItem sx={{ borderBottom: "none", height: "22px" }}>月</SListItem>
        <SListItem sx={{ borderBottom: "none", height: "22px" }}>火</SListItem>
        <SListItem sx={{ borderBottom: "none", height: "22px" }}>水</SListItem>
        <SListItem sx={{ borderBottom: "none", height: "22px" }}>木</SListItem>
        <SListItem sx={{ borderBottom: "none", height: "22px" }}>金</SListItem>
        <SListItem sx={{ borderBottom: "none", height: "22px" }}>土</SListItem>
      </SUl>
      <SUl sx={{ display: "flex", flexWrap: "wrap" }}>
        <SListItem sx={{ borderTop: "none" }}>
          <SDate>1</SDate>
          <Schedule />
        </SListItem>
        <SListItem sx={{ borderTop: "none" }}>
          <SDate>2</SDate>
          <Schedule />
        </SListItem>
        <SListItem sx={{ borderTop: "none" }}>
          <SDate>3</SDate>
          <Schedule />
        </SListItem>
        <SListItem sx={{ borderTop: "none" }}>
          <SDate>4</SDate>
          <Schedule />
        </SListItem>
        <SListItem sx={{ borderTop: "none" }}>
          <SDate>5</SDate>
          <Schedule />
        </SListItem>
        <SListItem sx={{ borderTop: "none" }}>
          <SDate>6</SDate>
          <Schedule />
        </SListItem>
        <SListItem sx={{ borderTop: "none" }}>
          <SDate>7</SDate>
          <Schedule />
        </SListItem>
        <SListItem sx={{ borderTop: "none" }}>
          <SDate>1</SDate>
          <Schedule />
        </SListItem>
        <SListItem sx={{ borderTop: "none" }}>
          <SDate>1</SDate>
          <Schedule />
        </SListItem>
        <SListItem sx={{ borderTop: "none" }}>
          <SDate>1</SDate>
          <Schedule />
        </SListItem>
        <SListItem sx={{ borderTop: "none" }}>
          <SDate>1</SDate>
          <Schedule />
        </SListItem>
        <SListItem sx={{ borderTop: "none" }}>
          <SDate>1</SDate>
          <Schedule />
        </SListItem>
        <SListItem sx={{ borderTop: "none" }}>
          <SDate>1</SDate>
          <Schedule />
        </SListItem>
        <SListItem sx={{ borderTop: "none" }}>
          <SDate>1</SDate>
          <Schedule />
        </SListItem>
        <SListItem sx={{ borderTop: "none" }}>
          <SDate>1</SDate>
          <Schedule />
        </SListItem>
        <SListItem sx={{ borderTop: "none" }}>
          <SDate>1</SDate>
          <Schedule />
        </SListItem>
        <SListItem sx={{ borderTop: "none" }}>
          <SDate>1</SDate>
          <Schedule />
        </SListItem>
        <SListItem sx={{ borderTop: "none" }}>
          <SDate>1</SDate>
          <Schedule />
        </SListItem>
        <SListItem sx={{ borderTop: "none" }}>
          <SDate>1</SDate>
          <Schedule />
        </SListItem>
        <SListItem sx={{ borderTop: "none" }}>
          <SDate>1</SDate>
          <Schedule />
        </SListItem>
        <SListItem sx={{ borderTop: "none" }}>
          <SDate>1</SDate>
          <Schedule />
        </SListItem>
      </SUl>
    </div>
  );
};

const SUl = styled("ul")``;
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
`;
