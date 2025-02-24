import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { RiRestartLine } from "react-icons/ri";
import { PiPlayPauseBold } from "react-icons/pi";
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
import { useState } from "react";

export default function Home() {
  const [session,setSession]=useState(25);
  const [breaks,setBreaks]=useState(5);

  function click(e){
    const target = e.target.parentElement.id;
    switch(target){
      case "break-increment":
        setBreaks(breaks+1);
        break;
      case "break-decrement":
        setBreaks(breaks-1);
        break;
      case "session-increment":
        setSession(session+1);
        break;
      case "session-decrement":
        setSession(session-1);
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
        <button className="arrow" id="break-decrement" onClick={(e)=>{click(e)}}>
          <FiChevronDown />
        </button>
        <p className="display" id="break-length">
          {breaks}
        </p>
        <button className="arrow" id="break-increment" onClick={(e)=>{click(e)}}>
          <FiChevronUp />
        </button>
      </div>
      <div className="chunk2" id="session">
        <p className="header" id="session-label">
          Session Length
        </p>
        <button className="arrow" id="session-decrement" onClick={(e)=>{click(e)}}>
          <FiChevronDown />
        </button>
        <p className="display" id="session-length">
          {session}
        </p>
        <button className="arrow" id="session-increment" onClick={(e)=>{click(e)}}>
          <FiChevronUp />
        </button>
      </div>
      <div className="session">
        <p id="timer-label">Session</p>
        <p id="time-left">{session}</p>
      </div>
      <div className="buttons">
        <button className="control" id="start_stop" onClick={(e)=>{click(e)}}>
          <PiPlayPauseBold />
        </button>
        <button className="control" id="reset" onClick={(e)=>{click(e)}}>
          <RiRestartLine />
        </button>
      </div>
    </div>
  );
}
