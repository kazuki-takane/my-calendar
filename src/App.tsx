import React from "react";
import { RecoilRoot } from "recoil";
import "./App.css";
import { Nav } from "./components/Nav";
import { CalendarBoard } from "./components/calendar/CalendarBoard";
import styled from "@emotion/styled";

function App() {
  return (
    <RecoilRoot>
      <SWrapper>
        <Nav />
        <CalendarBoard />
      </SWrapper>
    </RecoilRoot>
  );
}

const SWrapper = styled("div")`
  width: fit-content;
  max-width: 1400px;
  margin: auto;
`;

export default App;
