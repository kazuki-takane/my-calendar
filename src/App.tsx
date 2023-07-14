import React from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import "./App.css";
import { Nav } from "./components/Nav";
import { CalendarBoard } from "./components/calendar/CalendarBoard";

function App() {
  return (
    <RecoilRoot>
      <Nav />
      <CalendarBoard />
    </RecoilRoot>
  );
}

export default App;
