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
import { useState } from "react";

export default function Home() {
  const [session, setSession] = useState(25);
  const [breaks, setBreaks] = useState(5);

  function click(e) {
    const target =e.target.closest("button").id ;
    switch (target) {
      case "break-increment":
        if (breaks === 60) {
          break;
        }
        setBreaks(breaks + 1);
        break;
      case "break-decrement":
        if (breaks === 1) {
          break;
        }
        setBreaks(breaks - 1);
        break;
      case "session-increment":
        if (session === 60) {
          break;
        }
        setSession(session + 1);
        break;
      case "session-decrement":
        if (session === 1) {
          break;
        }
        setSession(session - 1);
        break;
      case "reset":
        setSession(25);
        setBreaks(5);
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
        <button
          className="arrow"
          id="break-decrement"
          onClick={(e) => {
            click(e);
          }}
        >
          <FaArrowDown />
        </button>
        <p className="display" id="break-length">
          {breaks}
        </p>
        <button
          className="arrow"
          id="break-increment"
          onClick={(e) => {
            click(e);
          }}
        >
          <FaArrowUp />
        </button>
      </div>
      <div className="chunk2" id="session">
        <p className="header" id="session-label">
          Session Length
        </p>
        <button
          className="arrow"
          id="session-decrement"
          onClick={(e) => {
            click(e);
          }}
        >
          <FaArrowDown />
        </button>
        <p className="display" id="session-length">
          {session}
        </p>
        <button
          className="arrow"
          id="session-increment"
          onClick={(e) => {
            click(e);
          }}
        >
          <FaArrowUp />
        </button>
      </div>
      <div className="session">
        <p id="timer-label">Session</p>
        <p id="time-left">{session}:00</p>
      </div>
      <div className="buttons">
        <button
          className="control"
          id="start_stop"
          onClick={(e) => {
            click(e);
          }}
        >
          <HiMiniPlayPause />
        </button>
        <button
          className="control"
          id="reset"
          onClick={(e) => {
            click(e);
          }}
        >
          <GrPowerReset />
        </button>
      </div>
    </div>
  );
}
