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

export default function Home() {
  return (
    <div className="main">
      <p className="title">25+5 Clock</p>
      <div className="chunk1" id="break">
        <p className="header" id="break-label">
          Break Length
        </p>
        <button className="arrow" id="break-decrement">
          <FiChevronDown />
        </button>
        <p className="display" id="break-length">
          5
        </p>
        <button className="arrow" id="break-increment">
          <FiChevronUp />
        </button>
      </div>
      <div className="chunk2" id="session">
        <p className="header" id="session-label">
          Session Length
        </p>
        <button className="arrow" id="session-decrement">
          <FiChevronDown />
        </button>
        <p className="display" id="session-length">
          25
        </p>
        <button className="arrow" id="session-increment">
          <FiChevronUp />
        </button>
      </div>
      <div className="session">
        <p id="timer-label">Session</p>
        <p id="time-left">25:00</p>
      </div>
      <div className="buttons">
        <button className="control" id="start_stop">
          <PiPlayPauseBold />
        </button>
        <button className="control" id="reset">
          <RiRestartLine />
        </button>
      </div>
    </div>
  );
}
