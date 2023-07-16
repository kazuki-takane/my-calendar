import React from "react";
import { RecoilRoot } from "recoil";
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
