import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { HiMiniPlayPause } from "react-icons/hi2";
import { GrPowerReset } from "react-icons/gr";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
import { useState,useRef } from "react";
import Countdown from "./countdown";
import Button from "./button";

export default function Home() {
  const [session, setSession] = useState(25);//session time
  const [breaks, setBreaks] = useState(5);//break time
  const [timerStart, setTimerStart] = useState(false); //used to prevent arrow presses while timer active
  const [timer, setTimer] = useState(null);//display timer
  const [display,setDisplay]=useState(false);//are we on session or break,, false==session
  const minutes = useRef(null);//timer minutes
  const seconds = useRef(null);//timer seconds
  function click(e) {
    const target = e.target.closest("button").id;
    switch (target) {
      case "break-increment":
        if (breaks === 60) {
          break;
        }
        !timerStart && setBreaks(breaks + 1); //!timerstart && to prevent arrow presses while timer active
        break;
      case "break-decrement":
        if (breaks === 1) {
          break;
        }
        !timerStart && setBreaks(breaks - 1);
        break;
      case "session-increment":
        if (session === 60) {
          break;
        }
        !timerStart && setSession(session + 1);
        break;
      case "session-decrement":
        if (session === 1) {
          break;
        }
        !timerStart && setSession(session - 1);
        break;
      case "reset":
        setSession(25);
        setBreaks(5);
        minutes.current = null;
        seconds.current = null;
        setTimer(null);
        setTimerStart(false);
        setDisplay(false)

        break;
      case "start_stop":
        setTimerStart(!timerStart);
        break;
    }
  }
  return (
    <div className="main">
      <p className="title">25+5 Clock</p>
      <div className="chunk1" id="break">
        <p className="header" id="break-label">
          Break Length
        </p>
        <Button
          id="break-decrement"
          className="arrow"
          onClick={click}
          children=<FaArrowDown />
        />
        <p className="display" id="break-length">
          {breaks}
        </p>
        <Button
          id="break-increment"
          className="arrow"
          onClick={click}
          children=<FaArrowUp />
        />
      </div>
      <div className="chunk2" id="session">
        <p className="header" id="session-label">
          Session Length
        </p>
        <Button
          id="session-decrement"
          className="arrow"
          onClick={click}
          children=<FaArrowDown />
        />
        <p className="display" id="session-length">
          {session}
        </p>
        <Button
          id="session-increment"
          className="arrow"
          onClick={click}
          children=<FaArrowUp />
        />
      </div>
      <div className="session">
        <p id="timer-label">{!display?'Session':'Break'}</p>
        <Countdown
          minutes={minutes}
          seconds={seconds}
          breaks={breaks}
          session={session}
          timerRun={timerStart}
          timer={timer}
          setTimer={setTimer}
          display={display}
          setDisplay={setDisplay}
        />
      </div>
      <div className="buttons">
        <Button
          id="start_stop"
          className="control"
          children=<HiMiniPlayPause />
          onClick={click}
        />
        <Button
          id="reset"
          className="control"
          children=<GrPowerReset />
          onClick={click}
        />
      </div>
    </div>
  );
}
